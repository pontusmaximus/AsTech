/**
 * Build-Time-Prerendering (Masterplan Phase 2).
 *
 * Fuer jede der 605 Routen wird eine statische `dist/{pfad}/index.html`
 * geschrieben, die den vollstaendigen Seiteninhalt enthaelt — ohne dass ein
 * Crawler JavaScript ausfuehren muss.
 *
 * ## Was sich gegenueber der Vorversion geaendert hat
 *
 * Vorher war dieses Skript ein String-Template-Injektor: es baute den
 * sichtbaren Text jeder Seite *von Hand* nach, mit einem eigenen Builder je
 * Seitentyp. Fuer Produktdetailseiten, die vier Marken-Hubs, den Ratgeber-Hub
 * und einen einzelnen Guide gab es solche Builder — fuer alles andere nicht.
 * Startseite, Loesungen, Service, Finanzierung, Kontakt, Gebrauchtmaschinen,
 * IMA Schelling, fuenf Ratgeber und die Rechtstexte lieferten deshalb nur
 * H1 und Meta-Description aus: 145 von 605 Seiten unter 250 Woertern,
 * 76 davon unter 50.
 *
 * Jetzt kommt der Body aus `src/entry-server.tsx` — demselben React-Baum, den
 * auch der Browser rendert. Damit kann eine Seite nicht mehr Inhalt haben, den
 * der Prerenderer nicht kennt: die Fehlerklasse ist geschlossen statt einzeln
 * abgearbeitet.
 *
 * ## Head: eine Quelle, kein Nachbau (Oktober 2026)
 *
 * Bis hierher baute dieses Skript Title, Description, Canonical, hreflang und
 * Open Graph ein zweites Mal aus denselben Daten wie `SeoHead` — und React 19
 * lieferte die Helmet-Tags zusaetzlich am Anfang von `#root` aus. Jede Seite
 * trug damit zwei `<title>`, zwei Canonicals, zwei Descriptions.
 *
 * Jetzt ist `SeoHead` die einzige Quelle. React stellt die hochgezogenen
 * Elemente (`<title>`, `<meta>`, `<link>`) an den Anfang der Ausgabe, wenn kein
 * `<html>` im Baum steht; `splitHoisted()` nimmt sie dort ab und setzt sie in
 * den `<head>`. Markiert mit `data-rh="true"`, damit `src/main.tsx` sie vor dem
 * Mount entfernt — React haengt sie im Browser selbst wieder ein.
 *
 * `checkPage()` haelt beides fest und bricht den Build ab, wenn es nicht
 * stimmt: genau ein Title, Canonical, Description, Robots, ein hreflang je
 * Sprache; die H1 vor dem Footer; kein Cookie-Text vor der H1.
 *
 * Das JSON-LD rendert `SeoHead` bewusst ausserhalb von Helmet und kommt
 * deshalb mit dem SSR-Body mit.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SEO_ROUTES, getSlugForLang, isRouteAvailable } from '../src/seo/routes';
import { ALL_CATEGORY_REFS, buildCategoryPath } from '../src/data/brandCatalogs';
import {
  buildLocalizedPath,
  CANONICAL_DOMAIN,
  SUPPORTED_LANGUAGES,
  languageToHreflang,
} from '../src/lib/language';
import { OTT_PRODUCTS, buildOttProductPath } from '../src/data/ottProducts';
import { MAYER_PRODUCTS, buildMayerProductPath } from '../src/data/mayerProducts';
import { BARBARIC_PRODUCTS, buildBarbaricProductPath } from '../src/data/barbaricProducts';
import { GANNOMAT_PRODUCTS, buildGannomatProductPath } from '../src/data/gannomatProducts';
import { USED_MACHINES, USED_CATEGORY_PAGES } from '../src/data/usedMachines';
import { localizeSlug } from '../src/lib/slugs';
import type { Language } from '../src/i18n';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, '..', 'dist');
const ssrEntry = join(__dirname, '..', 'dist-ssr', 'entry-server.js');
const template = readFileSync(join(distDir, 'index.html'), 'utf-8');

const { render } = (await import(ssrEntry)) as {
  render: (path: string) => Promise<{ html: string; errors: string[] }>;
};

/* ------------------------------------------------------------------ */
/*  Seitenliste                                                        */
/* ------------------------------------------------------------------ */

/**
 * Pfad und Sprache je Seite. Titel, Description, Canonical und hreflang kommen
 * nicht mehr von hier, sondern aus dem gerenderten `SeoHead` (siehe oben).
 */
interface PageMeta {
  path: string;
  lang: Language;
}

const pages: PageMeta[] = [];
const addPage = (path: string, lang: Language) => pages.push({ path, lang });

// 1. Statische Seiten aus SEO_ROUTES
for (const config of Object.values(SEO_ROUTES)) {
  for (const lang of SUPPORTED_LANGUAGES) {
    // Ausgeschlossene Sprache: keine Datei erzeugen. Sonst laege im dist eine
    // Seite, die per 301 gar nicht erreichbar ist -- und der 404-Sicherheits-
    // nachweis haette sie als "vorhanden" gezaehlt.
    if (!isRouteAvailable(config, lang)) continue;
    addPage(buildLocalizedPath(lang, getSlugForLang(config, lang)), lang);
  }
}

// 1b. Kategorieseiten je Marke
for (const ref of ALL_CATEGORY_REFS) {
  for (const lang of SUPPORTED_LANGUAGES) {
    addPage(buildLocalizedPath(lang, buildCategoryPath(ref, lang)), lang);
  }
}

// 2.-5. Produktdetailseiten je Marke
const productCatalogs = [
  { products: OTT_PRODUCTS, buildPath: buildOttProductPath },
  { products: MAYER_PRODUCTS, buildPath: buildMayerProductPath },
  { products: BARBARIC_PRODUCTS, buildPath: buildBarbaricProductPath },
  { products: GANNOMAT_PRODUCTS, buildPath: buildGannomatProductPath },
] as const;

for (const catalog of productCatalogs) {
  for (const product of catalog.products) {
    for (const lang of SUPPORTED_LANGUAGES) {
      addPage(buildLocalizedPath(lang, catalog.buildPath(lang, product as never)), lang);
    }
  }
}

// 6. Gebrauchtmaschinen-Detailseiten
//
// Die Gebrauchtmaschinen-Seiten je Gattung (/pouzite-stroje/olepovacky-hran)
// teilen sich den Pfad mit den Detailseiten (/pouzite-stroje/{slug}). Hiesse
// eine Maschine wie eine solche Seite, ueberschriebe die eine Datei die andere.
for (const pageSlug of Object.values(USED_CATEGORY_PAGES)) {
  for (const lang of SUPPORTED_LANGUAGES) {
    const segment = localizeSlug(pageSlug, lang).split('/').pop();
    const clash = USED_MACHINES.find((m) => m.slug === segment);
    if (clash) {
      console.error(`Gebrauchtmaschine "${clash.slug}" kollidiert mit der Seite ${localizeSlug(pageSlug, lang)} (${lang}).`);
      process.exit(1);
    }
  }
}
for (const machine of USED_MACHINES) {
  for (const lang of SUPPORTED_LANGUAGES) {
    addPage(buildLocalizedPath(lang, `${localizeSlug('/pouzite-stroje', lang)}/${machine.slug}`), lang);
  }
}

/* ------------------------------------------------------------------ */
/*  Guard: Sitemap und Prerender muessen deckungsgleich sein           */
/* ------------------------------------------------------------------ */
/*
 * Masterplan 2.3 Punkt 3 und 4. Sitemap und Prerender lesen dieselben
 * Datenquellen, aber ueber zwei getrennte Schleifen — bisher stimmten die
 * Zahlen nur zufaellig ueberein. Diese Pruefung macht daraus eine Garantie,
 * und *nur* mit dieser Garantie ist das Entfernen des Catch-all-Rewrites aus
 * Phase 1.1 sicher: eine Sitemap-URL ohne Datei waere sonst ab sofort eine 404.
 */

const sitemapPath = join(__dirname, '..', 'public', 'sitemap.xml');
if (!existsSync(sitemapPath)) {
  console.error(`Sitemap nicht gefunden: ${sitemapPath} — erst \`npm run generate:sitemap\` ausfuehren.`);
  process.exit(1);
}

const sitemapPaths = new Set(
  [...readFileSync(sitemapPath, 'utf-8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) =>
    m[1].replace(CANONICAL_DOMAIN, ''),
  ),
);
const prerenderPaths = new Set(pages.map((p) => p.path));

const missingFile = [...sitemapPaths].filter((p) => !prerenderPaths.has(p));
const missingSitemap = [...prerenderPaths].filter((p) => !sitemapPaths.has(p));

if (missingFile.length > 0 || missingSitemap.length > 0) {
  console.error('Sitemap und Prerender laufen auseinander:');
  for (const p of missingFile.slice(0, 20)) {
    console.error(`  in der Sitemap, aber nicht prerendert: ${p}`);
  }
  for (const p of missingSitemap.slice(0, 20)) {
    console.error(`  prerendert, aber nicht in der Sitemap: ${p}`);
  }
  const rest = missingFile.length + missingSitemap.length - Math.min(20, missingFile.length) - Math.min(20, missingSitemap.length);
  if (rest > 0) {
    console.error(`  … und ${rest} weitere`);
  }
  process.exit(1);
}

/* ------------------------------------------------------------------ */
/*  Head aus der SSR-Ausgabe                                           */
/* ------------------------------------------------------------------ */

/**
 * Ein Element, das React 19 ohne `<html>` im Baum an den Anfang der Ausgabe
 * stellt. React maskiert `<` und `>` in Attributwerten, ein `>` beendet also
 * verlaesslich den Tag.
 */
const HOISTED = /^\s*(<title\b[^>]*>[\s\S]*?<\/title>|<meta\b[^>]*>|<link\b[^>]*>)/;

/** Zerlegt die SSR-Ausgabe in hochgezogene Head-Elemente und den eigentlichen Body. */
function splitHoisted(html: string): { head: string[]; body: string } {
  const head: string[] = [];
  let body = html;
  for (let m = HOISTED.exec(body); m; m = HOISTED.exec(body)) {
    head.push(m[1]);
    body = body.slice(m[0].length);
  }
  return { head, body };
}

/**
 * Fuer den `<head>` aufbereiten: `data-rh="true"` (src/main.tsx entfernt diese
 * Tags vor dem Mount, React setzt sie dann selbst) und `hreflang` in der
 * ueblichen Kleinschreibung — React schreibt das Attribut als `hrefLang`.
 */
const toHeadTag = (tag: string): string =>
  tag
    .replace(/\shrefLang=/, ' hreflang=')
    .replace(/^<title\b/, '<title data-rh="true"')
    .replace(/^(<(?:meta|link)\b[^>]*?)\s*(\/?)>$/, '$1 data-rh="true"$2>');

/** Die Invarianten aus Aufgabe 2 — bricht den Build ab, statt sie still zu verletzen. */
function checkPage(path: string, html: string): string[] {
  const problems: string[] = [];
  const count = (re: RegExp) => (html.match(re) ?? []).length;
  const once = (label: string, re: RegExp) => {
    const n = count(re);
    if (n !== 1) problems.push(`${n}× ${label} (genau 1 erwartet)`);
  };
  once('<title>', /<title\b/g);
  once('canonical', /rel="canonical"/g);
  once('meta description', /<meta name="description"/g);
  once('meta robots', /<meta name="robots"/g);

  const langs = [...html.matchAll(/hreflang="([^"]+)"/gi)].map((m) => m[1].toLowerCase());
  for (const l of new Set(langs)) {
    const n = langs.filter((x) => x === l).length;
    if (n !== 1) problems.push(`${n}× hreflang="${l}"`);
  }

  const h1 = html.indexOf('<h1');
  const footer = html.indexOf('<footer');
  if (h1 < 0) problems.push('keine <h1>');
  else if (footer >= 0 && h1 > footer) problems.push('<h1> steht hinter <footer>');
  if (h1 >= 0 && /cookie/i.test(html.slice(html.indexOf('<body'), h1))) problems.push('Cookie-Text vor der <h1>');
  if (/<template id="B:|hidden id="S:/.test(html)) problems.push('Suspense-Fallback im HTML');
  return problems.map((p) => `${path}: ${p}`);
}

/* ------------------------------------------------------------------ */
/*  Schreiben                                                          */
/* ------------------------------------------------------------------ */

/** Wortzahl des sichtbaren Textes — dieselbe Messung wie im SEO-Audit. */
const wordCount = (html: string): number =>
  html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .filter(Boolean).length;

/**
 * Untergrenze fuer den Body-Text. Faellt eine Seite darunter, hat das SSR
 * vermutlich den Suspense-Fallback oder eine Weiterleitung gerendert statt der
 * Seite. Der Build meldet das, statt es stillschweigend auszuliefern.
 */
const MIN_WORDS = 120;

/** Gleichzeitige SSR-Laeufe. Rendern ist CPU-gebunden, mehr bringt nichts. */
const CONCURRENCY = 8;

let written = 0;
const thin: { path: string; words: number }[] = [];
const failed: { path: string; error: string }[] = [];
const invalid: string[] = [];

async function renderPage(page: PageMeta): Promise<void> {
  let body: string;
  try {
    const result = await render(page.path);
    if (result.errors.length > 0) {
      failed.push({ path: page.path, error: result.errors.join(' | ') });
    }
    body = result.html;
  } catch (e) {
    failed.push({ path: page.path, error: e instanceof Error ? e.message : String(e) });
    return;
  }

  const words = wordCount(body);
  if (words < MIN_WORDS) thin.push({ path: page.path, words });

  const { head, body: content } = splitHoisted(body);

  let html = template.replace('<html lang="cs">', `<html lang="${languageToHreflang(page.lang)}">`);
  // Platzhalter der Vorlage (fuer Dev-Server und SPA-Fallback) entfernen.
  html = html.replace(/\s*<title[^>]*>Asamer Technologie GmbH<\/title>/, '');
  html = html.replace(/\s*<meta name="description" content="Asamer Technologie [^"]*"[^>]*\/>/, '');
  // Gleich hinter charset: Title und Description stehen damit ganz oben.
  html = html.replace(
    '<meta charset="UTF-8" />',
    `<meta charset="UTF-8" />\n    ${head.map(toHeadTag).join('\n    ')}`,
  );
  html = html.replace('<div id="root"></div>', `<div id="root">${content}</div>`);

  invalid.push(...checkPage(page.path, html));

  const filePath = join(distDir, page.path, 'index.html');
  mkdirSync(dirname(filePath), { recursive: true });
  writeFileSync(filePath, html, 'utf-8');
  written += 1;
}

const started = Date.now();
let next = 0;
await Promise.all(
  Array.from({ length: Math.min(CONCURRENCY, pages.length) }, async () => {
    for (;;) {
      const i = next++;
      if (i >= pages.length) return;
      await renderPage(pages[i]);
    }
  }),
);

const seconds = ((Date.now() - started) / 1000).toFixed(1);
console.log(`Prerendered ${written} von ${pages.length} Seiten in ${seconds}s nach ${distDir}`);

if (thin.length > 0) {
  console.warn(`  Warnung: ${thin.length} Seiten unter ${MIN_WORDS} Woertern Body-Text:`);
  for (const t of thin.slice(0, 20)) {
    console.warn(`    ${String(t.words).padStart(4)}  ${t.path}`);
  }
  if (thin.length > 20) {
    console.warn(`    … und ${thin.length - 20} weitere`);
  }
}

if (failed.length > 0) {
  console.error(`  ${failed.length} Seiten mit Render-Fehlern:`);
  for (const f of failed.slice(0, 20)) {
    console.error(`    ${f.path}: ${f.error}`);
  }
  process.exit(1);
}

if (invalid.length > 0) {
  console.error(`  ${invalid.length} Verstoesse gegen die HTML-Invarianten:`);
  for (const line of invalid.slice(0, 30)) console.error(`    ${line}`);
  process.exit(1);
}

if (written !== pages.length) {
  console.error(`  Nur ${written} von ${pages.length} Seiten geschrieben.`);
  process.exit(1);
}
