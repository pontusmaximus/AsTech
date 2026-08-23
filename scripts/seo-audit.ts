/**
 * SEO-Invarianten als ausführbarer Test (Masterplan 7.1).
 *
 * Zwei Betriebsarten:
 *
 *   npm run seo:audit                       # gegen dist/ — offline, für CI bei jedem PR
 *   npm run seo:audit -- --base https://…   # gegen ein Deployment (Preview oder Produktion)
 *
 * Zwei Strengegrade:
 *
 *   (Standard)   Report-Modus  — schreibt den Bericht, Exit 0
 *   --fail       Gate-Modus    — Exit 1, sobald eine Prüfung der Stufe `error` fehlschlägt
 *
 * Weitere Schalter:
 *   --report <pfad>     Markdown-Report (Standard: docs/seo/reports/audit-<mode>.md)
 *   --limit <n>         nur die ersten n Sitemap-URLs prüfen (schneller Durchlauf)
 *   --min-words <n>     Schwelle für die Body-Text-Prüfung (Standard 250)
 *   --json <pfad>       Rohbefunde zusätzlich als JSON
 *   --allow a,b,c       Diese Prüfungen brechen den Gate-Modus nicht (Liste, kommagetrennt).
 *                       Gedacht für Befunde, die einer noch offenen Phase gehören: so schützt
 *                       das Gate, was bereits repariert ist, ohne an dem zu scheitern, was
 *                       noch aussteht. Jeder Eintrag hier ist eine Schuld — beim Abschluss
 *                       der zugehörigen Phase gehört er entfernt.
 *
 * Der Report-Modus ist der empfohlene Startpunkt (Masterplan Abschnitt 8):
 * erst Baseline messen, nach Phase 1 und 2 auf --fail umstellen.
 */

import { readFileSync, existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, isAbsolute, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { CANONICAL_DOMAIN, INDEXABLE_LANGUAGES, languageToHreflang, isSupportedLanguage } from '../src/lib/language';
import { checkLanguage } from './seo-lang-markers';
import { loadVercelConfig, VercelRouter } from './seo-vercel-routes';
import type { Language } from '../src/i18n';

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(__dirname, '..');

/* ------------------------------------------------------------------ */
/*  CLI                                                                */
/* ------------------------------------------------------------------ */

const argv = process.argv.slice(2);
const flag = (name: string): string | undefined => {
  const i = argv.indexOf(`--${name}`);
  return i >= 0 ? argv[i + 1] : undefined;
};
const bool = (name: string) => argv.includes(`--${name}`);

const BASE = flag('base');
const DIST_DIR = join(repoRoot, flag('dist') ?? 'dist');
const MODE: 'dist' | 'http' = BASE ? 'http' : 'dist';
const FAIL_MODE = bool('fail');
const MIN_WORDS = Number(flag('min-words') ?? 250);
const LIMIT = flag('limit') ? Number(flag('limit')) : Infinity;
/** Pfadangaben duerfen relativ zum Repo-Wurzelverzeichnis oder absolut sein. */
const resolvePath = (p: string) => (isAbsolute(p) ? p : join(repoRoot, p));

const REPORT_PATH = resolvePath(flag('report') ?? `docs/seo/reports/audit-${MODE}.md`);
const JSON_PATH = flag('json') ? resolvePath(flag('json')!) : null;
const CONCURRENCY = Number(flag('concurrency') ?? 12);
/**
 * Zusätzliche Header für alle HTTP-Anfragen.
 *
 * Gebraucht für geschützte Deployments: Vercel Deployment Protection beantwortet
 * jede Anfrage an ein Preview mit einer 302 auf den SSO-Login. Ein
 * Automation-Bypass-Secret (Vercel: Settings → Deployment Protection →
 * Protection Bypass for Automation) hebt das für Maschinen auf.
 *
 * `SEO_AUDIT_HEADERS` nimmt beliebige Header als JSON-Objekt entgegen;
 * `VERCEL_AUTOMATION_BYPASS_SECRET` ist die Abkürzung für den Vercel-Fall.
 */
const EXTRA_HEADERS: Record<string, string> = (() => {
  const headers: Record<string, string> = {};
  const bypass = process.env.VERCEL_AUTOMATION_BYPASS_SECRET;
  if (bypass) {
    headers['x-vercel-protection-bypass'] = bypass;
    // Bewusst OHNE `x-vercel-set-bypass-cookie`: der Header laesst Vercel mit
    // einer Weiterleitung antworten, die ein Cookie setzt. Ein Browser merkt
    // es sich, `fetch` nicht — die naechste Anfrage fordert das Cookie erneut
    // an, und der Lauf endet in "redirect count exceeded". Der Bypass-Header
    // allein genuegt und wird bei jeder Anfrage ohnehin mitgeschickt.
  }
  const raw = process.env.SEO_AUDIT_HEADERS;
  if (raw) {
    try {
      Object.assign(headers, JSON.parse(raw) as Record<string, string>);
    } catch {
      console.warn('SEO_AUDIT_HEADERS ist kein gültiges JSON — wird ignoriert.');
    }
  }
  return headers;
})();

const ALLOWED_CHECKS = new Set(
  (flag('allow') ?? '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean),
);

/* ------------------------------------------------------------------ */
/*  Befund-Modell                                                      */
/* ------------------------------------------------------------------ */

type Severity = 'error' | 'warn';

interface Finding {
  url: string;
  check: string;
  severity: Severity;
  message: string;
}

const findings: Finding[] = [];
const add = (url: string, check: string, severity: Severity, message: string) =>
  findings.push({ url, check, severity, message });

/* ------------------------------------------------------------------ */
/*  HTML-Zugriff                                                       */
/* ------------------------------------------------------------------ */

interface Fetched {
  status: number;
  html: string;
  /** Ziel einer Weiterleitung, falls es eine gab. */
  location?: string;
  /**
   * Wie die Antwort zustande kam. Nur im dist-Modus aussagekräftig.
   * `rewrite` heißt: die URL existiert als Datei *nicht* und lebt allein vom
   * Catch-all-Rewrite — genau die Pfade, die nach Phase 1.1 zu 404 werden.
   */
  via?: 'file' | 'redirect' | 'rewrite' | 'asset' | 'none' | 'http';
}

const distFileFor = (pathname: string): string => {
  const clean = pathname.replace(/\/+$/, '');
  return clean ? join(DIST_DIR, clean, 'index.html') : join(DIST_DIR, 'index.html');
};

const router = new VercelRouter(loadVercelConfig(join(repoRoot, 'vercel.json')));

/**
 * Holt eine Seite. Im dist-Modus wird das Verhalten von Vercel nachgebildet:
 * erst Redirects, dann statische Datei, dann Rewrite, sonst 404.
 */
async function get(pathname: string): Promise<Fetched> {
  if (MODE === 'http') {
    const res = await fetch(`${BASE}${pathname}`, { redirect: 'manual', headers: EXTRA_HEADERS });
    const status = res.status;
    if (status >= 300 && status < 400) {
      return { status, html: '', location: res.headers.get('location') ?? undefined, via: 'http' };
    }
    return { status, html: await res.text(), via: 'http' };
  }

  const redirect = router.matchRedirect(pathname);
  if (redirect) return { status: 308, html: '', location: redirect.destination, via: 'redirect' };

  const file = distFileFor(pathname);
  if (existsSync(file)) return { status: 200, html: readFileSync(file, 'utf-8'), via: 'file' };

  // Statische Assets (mit Dateiendung) liegen direkt in dist/.
  const asset = join(DIST_DIR, pathname);
  if (/\.[a-z0-9]+$/i.test(pathname) && existsSync(asset)) {
    return { status: 200, html: '', via: 'asset' };
  }

  if (router.matchRewrite(pathname)) {
    return { status: 200, html: readFileSync(join(DIST_DIR, 'index.html'), 'utf-8'), via: 'rewrite' };
  }
  return { status: 404, html: '', via: 'none' };
}

/* ------------------------------------------------------------------ */
/*  HTML-Parsing (bewusst ohne zusätzliche Abhängigkeit)               */
/* ------------------------------------------------------------------ */

const decode = (s: string) =>
  s
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&');

const attr = (tag: string, name: string): string | null => {
  const m = tag.match(new RegExp(`${name}\\s*=\\s*"([^"]*)"`, 'i'));
  return m ? decode(m[1]) : null;
};

const headOf = (html: string) => html.slice(0, html.indexOf('</head>') + 1);

const metaContent = (html: string, name: string): string | null => {
  const re = new RegExp(`<meta[^>]+name\\s*=\\s*"${name}"[^>]*>`, 'i');
  const m = headOf(html).match(re);
  return m ? attr(m[0], 'content') : null;
};

const titleOf = (html: string): string | null => {
  const m = headOf(html).match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  return m ? decode(m[1]).trim() : null;
};

const canonicalOf = (html: string): string | null => {
  const m = headOf(html).match(/<link[^>]+rel\s*=\s*"canonical"[^>]*>/i);
  return m ? attr(m[0], 'href') : null;
};

const hreflangsOf = (html: string): { hreflang: string; href: string }[] =>
  [...headOf(html).matchAll(/<link[^>]+rel\s*=\s*"alternate"[^>]*>/gi)]
    .map((m) => ({ hreflang: attr(m[0], 'hreflang') ?? '', href: attr(m[0], 'href') ?? '' }))
    .filter((x) => x.hreflang);

const bodyOf = (html: string): string => {
  const start = html.indexOf('<body');
  if (start < 0) return '';
  const end = html.indexOf('</body>', start);
  return html.slice(start, end < 0 ? undefined : end);
};

const stripNonText = (fragment: string): string =>
  fragment
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ');

const textOf = (fragment: string): string =>
  decode(stripNonText(fragment).replace(/<[^>]*>/g, ' '))
    .replace(/\s+/g, ' ')
    .trim();

const countTag = (fragment: string, tag: string): number =>
  (fragment.match(new RegExp(`<${tag}[\\s>]`, 'gi')) ?? []).length;

const jsonLdBlocks = (html: string): { raw: string; parsed: unknown | null }[] =>
  [...html.matchAll(/<script[^>]+type\s*=\s*"application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)].map((m) => {
    try {
      return { raw: m[1], parsed: JSON.parse(m[1]) as unknown };
    } catch {
      return { raw: m[1], parsed: null };
    }
  });

const ldTypes = (html: string): string[] => {
  const types: string[] = [];
  for (const { parsed } of jsonLdBlocks(html)) {
    if (!parsed) continue;
    const list = Array.isArray(parsed) ? parsed : [parsed];
    for (const node of list) {
      const t = (node as { '@type'?: string | string[] })?.['@type'];
      if (typeof t === 'string') types.push(t);
      else if (Array.isArray(t)) types.push(...t);
      const graph = (node as { '@graph'?: unknown[] })?.['@graph'];
      if (Array.isArray(graph)) {
        for (const g of graph) {
          const gt = (g as { '@type'?: string })?.['@type'];
          if (typeof gt === 'string') types.push(gt);
        }
      }
    }
  }
  return types;
};

const internalLinks = (bodyFragment: string): string[] =>
  [...stripNonText(bodyFragment).matchAll(/<a[^>]+href\s*=\s*"([^"]+)"/gi)]
    .map((m) => decode(m[1]))
    .filter((h) => h.startsWith('/') && !h.startsWith('//'))
    .map((h) => h.split('#')[0].split('?')[0])
    .filter(Boolean);

/* ------------------------------------------------------------------ */
/*  Sitemap                                                            */
/* ------------------------------------------------------------------ */

interface SitemapEntry {
  loc: string;
  lastmod: string | null;
  alternates: string[];
}

async function readSitemap(): Promise<SitemapEntry[]> {
  const xml =
    MODE === 'http'
      ? await (await fetch(`${BASE}/sitemap.xml`, { headers: EXTRA_HEADERS })).text()
      : readFileSync(join(DIST_DIR, 'sitemap.xml'), 'utf-8');

  return [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((m) => {
    const block = m[1];
    const loc = block.match(/<loc>([^<]*)<\/loc>/)?.[1] ?? '';
    const lastmod = block.match(/<lastmod>([^<]*)<\/lastmod>/)?.[1] ?? null;
    const alternates = [...block.matchAll(/hreflang="([^"]+)"/g)].map((a) => a[1]);
    return { loc, lastmod, alternates };
  });
}

/* ------------------------------------------------------------------ */
/*  Prüfungen je URL                                                   */
/* ------------------------------------------------------------------ */

/** Seiten, die bewusst nicht indexiert werden. Aktuell leer — Platzhalter für spätere Ausnahmen. */
const NOINDEX_ALLOWLIST: string[] = [];

const langOfPath = (pathname: string): Language | null => {
  const seg = pathname.split('/')[1];
  return isSupportedLanguage(seg) ? seg : null;
};

interface PageResult {
  url: string;
  pathname: string;
  status: number;
  title: string | null;
  description: string | null;
  words: number;
  h1: number;
  h2: number;
  ldTypes: string[];
  links: string[];
}

const titles = new Map<string, string[]>();
const descriptions = new Map<string, string[]>();

async function auditPage(loc: string): Promise<PageResult | null> {
  const pathname = new URL(loc).pathname;
  const res = await get(pathname);

  if (res.status !== 200) {
    add(loc, 'status', 'error', `Statuscode ${res.status}${res.location ? ` → ${res.location}` : ''}`);
    return null;
  }

  const html = res.html;
  const body = bodyOf(html);
  const lang = langOfPath(pathname);

  /* --- Canonical --- */
  const canonical = canonicalOf(html);
  if (!canonical) {
    add(loc, 'canonical', 'error', 'kein <link rel="canonical">');
  } else {
    if (!canonical.startsWith('https://')) add(loc, 'canonical', 'error', `nicht absolut: ${canonical}`);
    if (canonical.includes('www.')) add(loc, 'canonical', 'error', `zeigt auf www: ${canonical}`);
    if (canonical.replace(/\/$/, '') !== `${CANONICAL_DOMAIN}${pathname}`.replace(/\/$/, '')) {
      add(loc, 'canonical', 'error', `nicht selbstreferenzierend: ${canonical}`);
    }
  }

  /* --- Robots --- */
  const robots = (metaContent(html, 'robots') ?? '').toLowerCase();
  if (!robots) {
    add(loc, 'robots', 'error', 'kein <meta name="robots">');
  } else if (robots.includes('noindex') && !NOINDEX_ALLOWLIST.includes(pathname)) {
    add(loc, 'robots', 'error', `noindex ohne Allowlist-Eintrag: "${robots}"`);
  }

  /* --- Title --- */
  const title = titleOf(html);
  if (!title) {
    add(loc, 'title', 'error', 'kein <title>');
  } else {
    if (title.length < 30 || title.length > 65) {
      add(loc, 'title', 'warn', `${title.length} Zeichen (Ziel 30–65): "${title}"`);
    }
    titles.set(title, [...(titles.get(title) ?? []), loc]);
  }

  /* --- Description --- */
  const description = metaContent(html, 'description');
  if (!description) {
    add(loc, 'description', 'error', 'keine Meta-Description');
  } else {
    if (description.length < 70 || description.length > 165) {
      add(loc, 'description', 'warn', `${description.length} Zeichen (Ziel 70–165)`);
    }
    descriptions.set(description, [...(descriptions.get(description) ?? []), loc]);
  }

  /* --- H1 --- */
  const h1 = countTag(body, 'h1');
  if (h1 !== 1) add(loc, 'h1', 'error', `${h1} H1-Elemente (genau 1 erwartet)`);

  /* --- Body-Text --- */
  const text = textOf(body);
  const words = text.split(' ').filter(Boolean).length;
  if (words < MIN_WORDS) add(loc, 'body-words', 'error', `${words} Wörter im HTML (Minimum ${MIN_WORDS})`);

  /* --- hreflang --- */
  const alts = hreflangsOf(html);
  const expected = new Set(INDEXABLE_LANGUAGES.map(languageToHreflang));
  const got = new Set(alts.map((a) => a.hreflang));
  for (const e of expected) {
    if (!got.has(e)) add(loc, 'hreflang', 'error', `hreflang="${e}" fehlt`);
  }
  const xDefault = alts.filter((a) => a.hreflang === 'x-default');
  if (xDefault.length !== 1) add(loc, 'hreflang', 'error', `${xDefault.length} x-default (genau 1 erwartet)`);
  if (lang) {
    const self = alts.find((a) => a.hreflang === languageToHreflang(lang));
    if (self && self.href.replace(/\/$/, '') !== `${CANONICAL_DOMAIN}${pathname}`.replace(/\/$/, '')) {
      add(loc, 'hreflang', 'error', `selbstreferenzierendes hreflang zeigt auf ${self.href}`);
    }
  }
  for (const a of alts) {
    if (a.href.includes('www.')) add(loc, 'hreflang', 'error', `hreflang="${a.hreflang}" zeigt auf www: ${a.href}`);
  }

  /* --- Sprache des Fließtextes --- */
  if (lang) {
    const verdict = checkLanguage(text, lang);
    if (!verdict.ok) add(loc, 'language', 'error', verdict.reason);
  }

  /* --- JSON-LD --- */
  const blocks = jsonLdBlocks(html);
  for (const b of blocks) {
    if (b.parsed === null) add(loc, 'json-ld', 'error', 'JSON-LD-Block nicht parsebar');
  }
  const types = ldTypes(html);
  const isProduct = /\/(ott|mayer|barbaric|gannomat)\/[^/]+\/[^/]+$/.test(pathname);
  const isHome = /^\/[a-z]{2}$/.test(pathname);
  const isGuide = /\/(ratgeber|guide|pruvodce|sprievodca|utmutato)\//.test(pathname);
  if (isProduct && !types.includes('Product')) add(loc, 'json-ld', 'error', 'Produktseite ohne Product-Schema');
  if (isProduct && !types.includes('BreadcrumbList')) add(loc, 'json-ld', 'error', 'Produktseite ohne BreadcrumbList');
  if (isHome && !types.includes('Organization')) add(loc, 'json-ld', 'error', 'Sprachstartseite ohne Organization');
  if (isHome && !types.includes('WebSite')) add(loc, 'json-ld', 'error', 'Sprachstartseite ohne WebSite');
  if (isGuide && !types.includes('Article')) add(loc, 'json-ld', 'error', 'Ratgeberseite ohne Article-Schema');

  return {
    url: loc,
    pathname,
    status: res.status,
    title,
    description,
    words,
    h1,
    h2: countTag(body, 'h2'),
    ldTypes: types,
    links: internalLinks(body),
  };
}

/* ------------------------------------------------------------------ */
/*  Negativprüfungen (nicht aus der Sitemap)                           */
/* ------------------------------------------------------------------ */

async function auditNegatives(): Promise<void> {
  const probe = '/__seo-test-404__';
  const r404 = await get(probe);
  if (r404.status !== 404) {
    const cause = r404.via === 'rewrite' ? ' (Catch-all-Rewrite in vercel.json)' : '';
    add(probe, 'soft-404', 'error', `unbekannte URL liefert ${r404.status} statt 404${cause}`);
  }

  // Die 404-Seite selbst muss existieren und darf nicht indexiert werden.
  if (MODE === 'dist') {
    const file = join(DIST_DIR, '404.html');
    if (!existsSync(file)) {
      add('/404.html', '404-seite', 'error', 'dist/404.html fehlt — Vercel liefert dann seine Standardseite aus');
    } else if (!/<meta[^>]+name\s*=\s*"robots"[^>]+noindex/i.test(readFileSync(file, 'utf-8'))) {
      add('/404.html', '404-seite', 'error', 'dist/404.html ohne noindex');
    }
  } else {
    const res = await fetch(`${BASE}/404.html`, { headers: EXTRA_HEADERS });
    const html = await res.text();
    if (res.status !== 200 && res.status !== 404) {
      add('/404.html', '404-seite', 'error', `Statuscode ${res.status}`);
    } else if (!/<meta[^>]+name\s*=\s*"robots"[^>]+noindex/i.test(html)) {
      add('/404.html', '404-seite', 'error', 'ohne noindex');
    }
  }

  for (const p of ['/cz/cz/pruvodce/vyber-olepovacky-hran', '/cz/cz', '/sk/sk/servis']) {
    const r = await get(p);
    if (r.status !== 301 && r.status !== 308) {
      add(p, 'doppeltes-praefix', 'error', `liefert ${r.status} statt einer dauerhaften Weiterleitung`);
    }
  }

  // Die www-Weiterleitung kommt aus der Vercel-Domain-Konfiguration, nicht aus
  // dem Repo. Gegen ein Preview-Deployment geprueft wuerde sie die Produktion
  // testen — ein PR duerfte daran nicht scheitern. Deshalb nur, wenn der Lauf
  // ohnehin gegen die kanonische Domain geht.
  const againstCanonicalDomain = MODE === 'http' && BASE?.replace(/\/$/, '') === CANONICAL_DOMAIN;
  if (MODE === 'http' && !againstCanonicalDomain) {
    console.log(`  www-Pruefung uebersprungen — Lauf geht gegen ${BASE}, nicht gegen ${CANONICAL_DOMAIN}.`);
  }

  if (againstCanonicalDomain) {
    for (const p of ['/', '/cz', '/cz/ott', '/cz/barbaric/buffer-dilu/pbx']) {
      try {
        const res = await fetch(`https://www.asamer.cz${p}`, { redirect: 'manual', headers: EXTRA_HEADERS });
        const loc = res.headers.get('location') ?? '';
        if (res.status !== 301 && res.status !== 308) {
          add(`https://www.asamer.cz${p}`, 'www', 'error', `Statuscode ${res.status} statt 301`);
        } else if (loc.includes('www.')) {
          add(`https://www.asamer.cz${p}`, 'www', 'error', `Weiterleitung bleibt auf www: ${loc}`);
        }
      } catch (e) {
        add(`https://www.asamer.cz${p}`, 'www', 'warn', `nicht erreichbar: ${(e as Error).message}`);
      }
    }
  }
}

/* ------------------------------------------------------------------ */
/*  Lauf                                                               */
/* ------------------------------------------------------------------ */

async function mapLimit<T, R>(items: T[], limit: number, fn: (item: T) => Promise<R>): Promise<R[]> {
  const out: R[] = new Array(items.length);
  let next = 0;
  const workers = Array.from({ length: Math.min(limit, items.length) }, async () => {
    for (;;) {
      const i = next++;
      if (i >= items.length) return;
      out[i] = await fn(items[i]);
    }
  });
  await Promise.all(workers);
  return out;
}

async function main() {
  const started = Date.now();
  const sitemap = await readSitemap();
  const urls = sitemap.map((e) => e.loc).slice(0, LIMIT);

  console.log(`SEO-Audit · Modus ${MODE}${BASE ? ` (${BASE})` : ` (${DIST_DIR})`} · ${urls.length} URLs`);
  if (Object.keys(EXTRA_HEADERS).length > 0) {
    console.log(`  Zusatz-Header aktiv: ${Object.keys(EXTRA_HEADERS).join(', ')}`);
  }

  // Ein Lauf über null URLs waere ein gruener Haken ohne Aussage. Lieber laut scheitern.
  if (urls.length === 0) {
    console.error('Die Sitemap enthaelt keine URLs — es wurde nichts geprueft.');
    process.exit(2);
  }

  /* --- Sitemap selbst --- */
  const lastmods = new Set(sitemap.map((e) => e.lastmod));
  if (sitemap.some((e) => !e.lastmod)) {
    add('sitemap.xml', 'sitemap-lastmod', 'error', 'mindestens eine URL ohne <lastmod>');
  } else if (lastmods.size === 1 && sitemap.length > 1) {
    add(
      'sitemap.xml',
      'sitemap-lastmod',
      'error',
      `alle ${sitemap.length} URLs tragen dasselbe <lastmod> (${[...lastmods][0]}) — Google wertet das nicht aus`,
    );
  }
  for (const e of sitemap) {
    if (e.loc.includes('www.')) add(e.loc, 'sitemap-www', 'error', 'www-URL in der Sitemap');
    if (!e.loc.startsWith(CANONICAL_DOMAIN)) add(e.loc, 'sitemap-domain', 'error', 'fremde Domain in der Sitemap');
  }

  /* --- Abdeckung Prerender ↔ Sitemap --- */
  if (MODE === 'dist') {
    for (const e of sitemap) {
      const f = distFileFor(new URL(e.loc).pathname);
      if (!existsSync(f)) add(e.loc, 'prerender-coverage', 'error', 'keine prerenderte HTML-Datei');
    }
  }

  const results = (await mapLimit(urls, CONCURRENCY, auditPage)).filter(Boolean) as PageResult[];

  /* --- Eindeutigkeit --- */
  for (const [title, locs] of titles) {
    if (locs.length > 1) add(locs[0], 'title-unique', 'warn', `Titel ${locs.length}× vergeben: "${title}"`);
  }
  for (const [, locs] of descriptions) {
    if (locs.length > 1) add(locs[0], 'description-unique', 'warn', `Description ${locs.length}× vergeben`);
  }

  /* --- Interne Links --- */
  const linkTargets = new Set<string>();
  for (const r of results) for (const l of r.links) linkTargets.add(l);
  const linkStatuses = new Map<string, Fetched>();
  await mapLimit([...linkTargets], CONCURRENCY, async (target) => {
    const res = await get(target);
    linkStatuses.set(target, { status: res.status, html: '', location: res.location, via: res.via });
  });
  const reportedLinks = new Set<string>();
  for (const r of results) {
    for (const l of r.links) {
      const s = linkStatuses.get(l);
      if (!s) continue;
      if (s.status === 200 && s.via !== 'rewrite') continue;
      const key = `${l}|${s.status}|${s.via}`;
      if (reportedLinks.has(key)) continue;
      reportedLinks.add(key);
      if (s.via === 'rewrite') {
        add(r.url, 'internal-link', 'error', `Link auf ${l} existiert nur über den Catch-all-Rewrite (nach Phase 1.1 = 404)`);
      } else {
        add(r.url, 'internal-link', 'error', `Link auf ${l} liefert ${s.status}${s.location ? ` → ${s.location}` : ''}`);
      }
    }
  }

  await auditNegatives();

  /* --- Ausgabe --- */
  const errors = findings.filter((f) => f.severity === 'error');
  const warns = findings.filter((f) => f.severity === 'warn');
  const byCheck = new Map<string, Finding[]>();
  for (const f of findings) byCheck.set(f.check, [...(byCheck.get(f.check) ?? []), f]);

  const thin = results.filter((r) => r.words < MIN_WORDS).sort((a, b) => a.words - b.words);
  const duration = ((Date.now() - started) / 1000).toFixed(1);

  const lines: string[] = [];
  lines.push(`# SEO-Audit — ${MODE === 'http' ? BASE : 'dist/'}`);
  lines.push('');
  lines.push(`Erzeugt von \`scripts/seo-audit.ts\` · ${urls.length} URLs · ${duration}s · Schwelle ${MIN_WORDS} Wörter`);
  lines.push('');
  lines.push(`**${errors.length} Fehler, ${warns.length} Warnungen.**`);
  lines.push('');
  lines.push('## Befunde nach Prüfung');
  lines.push('');
  lines.push('| Prüfung | Stufe | Betroffen |');
  lines.push('|---|---|---:|');
  for (const [check, list] of [...byCheck.entries()].sort((a, b) => b[1].length - a[1].length)) {
    lines.push(`| \`${check}\` | ${list[0].severity} | ${list.length} |`);
  }
  lines.push('');
  lines.push('## Wortzahl im ausgelieferten HTML');
  lines.push('');
  lines.push('| Schwelle | Seiten |');
  lines.push('|---|---:|');
  for (const t of [50, 100, 250, 500, 1000]) {
    lines.push(`| < ${t} Wörter | ${results.filter((r) => r.words < t).length} |`);
  }
  lines.push('');
  if (thin.length > 0) {
    lines.push(`### Die ${Math.min(60, thin.length)} dünnsten Seiten`);
    lines.push('');
    lines.push('| Wörter | H2 | Pfad |');
    lines.push('|---:|---:|---|');
    for (const r of thin.slice(0, 60)) lines.push(`| ${r.words} | ${r.h2} | \`${r.pathname}\` |`);
    lines.push('');
  }
  for (const [check, list] of [...byCheck.entries()].sort((a, b) => b[1].length - a[1].length)) {
    lines.push(`## \`${check}\` (${list.length})`);
    lines.push('');
    for (const f of list.slice(0, 80)) lines.push(`- \`${f.url}\` — ${f.message}`);
    if (list.length > 80) lines.push(`- … und ${list.length - 80} weitere`);
    lines.push('');
  }

  mkdirSync(dirname(REPORT_PATH), { recursive: true });
  writeFileSync(REPORT_PATH, lines.join('\n'), 'utf-8');
  console.log(`Report: ${REPORT_PATH}`);

  if (JSON_PATH) {
    mkdirSync(dirname(JSON_PATH), { recursive: true });
    writeFileSync(JSON_PATH, JSON.stringify({ mode: MODE, base: BASE, findings, results }, null, 2), 'utf-8');
    console.log(`JSON:   ${JSON_PATH}`);
  }

  console.log(`\n${errors.length} Fehler, ${warns.length} Warnungen`);
  for (const [check, list] of [...byCheck.entries()].sort((a, b) => b[1].length - a[1].length)) {
    console.log(`  ${list[0].severity === 'error' ? '✗' : '!'} ${check.padEnd(22)} ${list.length}`);
  }

  if (FAIL_MODE) {
    const blocking = errors.filter((f) => !ALLOWED_CHECKS.has(f.check));
    const tolerated = errors.length - blocking.length;
    if (tolerated > 0) {
      console.log(`\n${tolerated} Fehler in geduldeten Prüfungen (--allow ${[...ALLOWED_CHECKS].join(',')})`);
    }
    if (blocking.length > 0) {
      console.error(`\nGate-Modus: ${blocking.length} blockierende Fehler → Exit 1`);
      const byBlocking = new Map<string, number>();
      for (const f of blocking) byBlocking.set(f.check, (byBlocking.get(f.check) ?? 0) + 1);
      for (const [check, n] of byBlocking) console.error(`  ${check}: ${n}`);
      process.exit(1);
    }
    console.log('\nGate-Modus: keine blockierenden Fehler.');
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(2);
});
