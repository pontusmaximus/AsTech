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
 * ## Warum der Head trotzdem hier entsteht
 *
 * react-helmet-async 3 fuellt unter React 19 im Streaming-Rendering seinen
 * Server-Context nicht — was in `<Helmet>` steht, taucht im SSR-Output nicht
 * auf. Die Meta-Tags werden deshalb weiterhin hier erzeugt, aus denselben
 * Datenquellen, aus denen auch `SeoHead` liest (`SEO_ROUTES`, Produktdaten,
 * `src/lib/language.ts`). Der SEO-Audit prueft das Ergebnis gegen die
 * Invarianten aus Masterplan 7.1.
 *
 * Das JSON-LD rendert `SeoHead` bewusst ausserhalb von Helmet und kommt
 * deshalb mit dem SSR-Body mit.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SEO_ROUTES, getSlugForLang, isRouteAvailable, DEFAULT_OG_IMAGE } from '../src/seo/routes';
import { ALL_CATEGORY_REFS, buildCategoryPath, getBrandCatalog } from '../src/data/brandCatalogs';
import { getCategoryMeta } from '../src/seo/categoryMeta';
import {
  buildLocalizedPath,
  buildCanonicalUrl,
  CANONICAL_DOMAIN,
  SUPPORTED_LANGUAGES,
  INDEXABLE_LANGUAGES,
  NON_INDEXABLE_LANGUAGES,
  HREFLANG_DEFAULT,
  languageToHreflang,
} from '../src/lib/language';
import { OTT_PRODUCTS, buildOttProductPath } from '../src/data/ottProducts';
import { MAYER_PRODUCTS, buildMayerProductPath } from '../src/data/mayerProducts';
import { BARBARIC_PRODUCTS, buildBarbaricProductPath } from '../src/data/barbaricProducts';
import { GANNOMAT_PRODUCTS, buildGannomatProductPath } from '../src/data/gannomatProducts';
import { USED_MACHINES } from '../src/data/usedMachines';
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

interface PageMeta {
  path: string;
  lang: Language;
  title: string;
  description: string;
  canonical: string;
  alternates: { hreflang: string; href: string }[];
  xDefaultHref: string;
  /** Absolute OG/Twitter-Bild-URL. */
  image: string;
  /** Bildmasse, nur wenn bekannt (gebrandetes 1200x630). */
  imageDims?: { w: number; h: number };
}

const escHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** OG-Bild-URL absolut machen (externe URLs unveraendert, lokale Pfade mit Domain). */
const absImg = (src?: string) => (!src ? DEFAULT_OG_IMAGE : src.startsWith('http') ? src : `${CANONICAL_DOMAIN}${src}`);

/**
 * Nur indexierbare Sprachen als hreflang-Alternates. Steht `NON_INDEXABLE_LANGUAGES`
 * wieder auf einem Wert, faellt die betroffene Sprache hier automatisch heraus.
 */
function makeAlternates(
  buildPath: (lang: Language) => string,
  isAvailable: (lang: Language) => boolean = () => true,
) {
  return INDEXABLE_LANGUAGES.filter(isAvailable).map((al) => ({
    hreflang: languageToHreflang(al),
    href: `${CANONICAL_DOMAIN}${buildPath(al)}`,
  }));
}

const pages: PageMeta[] = [];

// 1. Statische Seiten aus SEO_ROUTES
for (const config of Object.values(SEO_ROUTES)) {
  for (const lang of SUPPORTED_LANGUAGES) {
    // Ausgeschlossene Sprache: keine Datei erzeugen. Sonst laege im dist eine
    // Seite, die per 301 gar nicht erreichbar ist -- und der 404-Sicherheits-
    // nachweis haette sie als "vorhanden" gezaehlt.
    if (!isRouteAvailable(config, lang)) continue;
    const path = buildLocalizedPath(lang, getSlugForLang(config, lang));
    const meta = config.meta[lang];
    pages.push({
      path,
      lang,
      title: meta.title,
      description: meta.description,
      canonical: `${CANONICAL_DOMAIN}${path}`,
      alternates: makeAlternates(
        (al) => buildLocalizedPath(al, getSlugForLang(config, al)),
        (al) => isRouteAvailable(config, al),
      ),
      xDefaultHref: buildCanonicalUrl(HREFLANG_DEFAULT, getSlugForLang(config, HREFLANG_DEFAULT)),
      image: DEFAULT_OG_IMAGE,
      imageDims: { w: 1200, h: 630 },
    });
  }
}

// 1b. Kategorieseiten je Marke
for (const ref of ALL_CATEGORY_REFS) {
  for (const lang of SUPPORTED_LANGUAGES) {
    const build = (al: Language) => buildLocalizedPath(al, buildCategoryPath(ref, al));
    const path = build(lang);
    const meta = getCategoryMeta(ref, lang);
    const firstProduct = getBrandCatalog(ref.brand).productsIn(ref.category)[0];
    pages.push({
      path,
      lang,
      title: meta.title,
      description: meta.description,
      canonical: `${CANONICAL_DOMAIN}${path}`,
      alternates: makeAlternates(build),
      xDefaultHref: `${CANONICAL_DOMAIN}${build(HREFLANG_DEFAULT)}`,
      image: firstProduct ? absImg(firstProduct.image) : DEFAULT_OG_IMAGE,
      imageDims: { w: 1200, h: 630 },
    });
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
      const build = (al: Language) => buildLocalizedPath(al, catalog.buildPath(al, product as never));
      const path = build(lang);
      pages.push({
        path,
        lang,
        title: product.seoTitle[lang],
        description: product.seoDescription[lang],
        canonical: `${CANONICAL_DOMAIN}${path}`,
        alternates: makeAlternates(build),
        xDefaultHref: `${CANONICAL_DOMAIN}${build(HREFLANG_DEFAULT)}`,
        image: absImg(product.image),
      });
    }
  }
}

// 6. Gebrauchtmaschinen-Detailseiten
const machineLabel: Record<Language, string> = {
  de: 'Gebrauchtmaschine',
  en: 'Used machine',
  cz: 'Použitý stroj',
  sk: 'Použitý stroj',
  hu: 'Használt gép',
};

/** Sprach-Resolver mit denselben Fallbacks wie `ml()` in der App (sk -> cz, hu -> en). */
const mlText = (obj: { de: string; en: string; cz: string; sk?: string; hu?: string }, lang: Language): string => {
  if (lang === 'sk') return obj.sk ?? obj.cz;
  if (lang === 'hu') return obj.hu ?? obj.en;
  if (lang === 'de') return obj.de;
  if (lang === 'cz') return obj.cz;
  return obj.en;
};

for (const machine of USED_MACHINES) {
  for (const lang of SUPPORTED_LANGUAGES) {
    const build = (al: Language) => buildLocalizedPath(al, `${localizeSlug('/pouzite-stroje', al)}/${machine.slug}`);
    const path = build(lang);
    pages.push({
      path,
      lang,
      title: `${machine.manufacturer} ${machine.name} – ${machineLabel[lang]} | Asamer`,
      description: mlText(machine.shortDescription, lang),
      canonical: `${CANONICAL_DOMAIN}${path}`,
      alternates: makeAlternates(build),
      xDefaultHref: `${CANONICAL_DOMAIN}${build(HREFLANG_DEFAULT)}`,
      image: absImg(Array.isArray(machine.images) ? machine.images[0] : machine.images),
    });
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
/*  Head bauen                                                         */
/* ------------------------------------------------------------------ */

function buildHead(page: PageMeta): string {
  const hreflangTags = page.alternates
    .map((a) => `<link rel="alternate" hreflang="${a.hreflang}" href="${a.href}" data-rh="true"/>`)
    .join('\n    ');
  const robotsContent = NON_INDEXABLE_LANGUAGES.includes(page.lang) ? 'noindex,follow' : 'index,follow';
  const ogImageType = page.image.endsWith('.png') ? 'image/png' : 'image/jpeg';
  const ogImageDims = page.imageDims
    ? `\n    <meta property="og:image:width" content="${page.imageDims.w}" data-rh="true"/>` +
      `\n    <meta property="og:image:height" content="${page.imageDims.h}" data-rh="true"/>`
    : '';

  return `
    <title data-rh="true">${escHtml(page.title)}</title>
    <meta name="description" content="${escHtml(page.description)}" data-rh="true"/>
    <meta name="robots" content="${robotsContent}" data-rh="true"/>
    <link rel="canonical" href="${page.canonical}" data-rh="true"/>
    ${hreflangTags}
    <link rel="alternate" hreflang="x-default" href="${page.xDefaultHref}" data-rh="true"/>
    <meta property="og:type" content="website" data-rh="true"/>
    <meta property="og:title" content="${escHtml(page.title)}" data-rh="true"/>
    <meta property="og:description" content="${escHtml(page.description)}" data-rh="true"/>
    <meta property="og:url" content="${page.canonical}" data-rh="true"/>
    <meta property="og:site_name" content="Asamer Technologie" data-rh="true"/>
    <meta property="og:image" content="${page.image}" data-rh="true"/>
    <meta property="og:image:secure_url" content="${page.image}" data-rh="true"/>
    <meta property="og:image:type" content="${ogImageType}" data-rh="true"/>
    <meta property="og:image:alt" content="${escHtml(page.title)}" data-rh="true"/>${ogImageDims}
    <meta property="og:locale" content="${languageToHreflang(page.lang)}" data-rh="true"/>
    <meta name="twitter:card" content="summary_large_image" data-rh="true"/>
    <meta name="twitter:title" content="${escHtml(page.title)}" data-rh="true"/>
    <meta name="twitter:description" content="${escHtml(page.description)}" data-rh="true"/>
    <meta name="twitter:image" content="${page.image}" data-rh="true"/>`;
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

  let html = template.replace('<html lang="cs">', `<html lang="${languageToHreflang(page.lang)}">`);
  html = html.replace(/<title>Asamer Technologie GmbH<\/title>/, '');
  html = html.replace(/<meta name="description" content="Asamer Technologie .+?" \/>/, '');
  html = html.replace('</head>', `${buildHead(page)}\n  </head>`);
  html = html.replace('<div id="root"></div>', `<div id="root">${body}</div>`);

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

if (written !== pages.length) {
  console.error(`  Nur ${written} von ${pages.length} Seiten geschrieben.`);
  process.exit(1);
}
