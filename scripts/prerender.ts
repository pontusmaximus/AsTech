/**
 * Build-time prerendering: generates static HTML files for each route
 * with correct meta tags so that Google sees real content without JS.
 *
 * Runs AFTER `vite build`. For each of the ~435 routes it:
 *  1. Reads the built dist/index.html as a template
 *  2. Injects the correct <title>, <meta description>, <link canonical>,
 *     <link hreflang>, and lang attribute
 *  3. Writes to dist/{route}/index.html
 */

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SEO_ROUTES, getSlugForLang } from '../src/seo/routes';
import {
  buildLocalizedPath,
  buildCanonicalUrl,
  CANONICAL_DOMAIN,
  SUPPORTED_LANGUAGES,
  HREFLANG_DEFAULT,
  languageToHreflang,
} from '../src/lib/language';
import { OTT_PRODUCTS, buildOttProductPath } from '../src/data/ottProducts';
import { MAYER_PRODUCTS, buildMayerProductPath } from '../src/data/mayerProducts';
import { BARBARIC_PRODUCTS, buildBarbaricProductPath } from '../src/data/barbaricProducts';
import { GANNOMAT_PRODUCTS, buildGannomatProductPath } from '../src/data/gannomatProducts';
import type { Language } from '../src/i18n';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const distDir = join(__dirname, '..', 'dist');
const template = readFileSync(join(distDir, 'index.html'), 'utf-8');

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface PageMeta {
  /** URL path WITHOUT domain, e.g. /de/finanzierung */
  path: string;
  lang: Language;
  title: string;
  description: string;
  canonical: string;
  alternates: { hreflang: string; href: string }[];
  xDefaultHref: string;
}

/* ------------------------------------------------------------------ */
/*  Collect all pages                                                  */
/* ------------------------------------------------------------------ */

const pages: PageMeta[] = [];

// 1. Static pages from SEO_ROUTES
for (const config of Object.values(SEO_ROUTES)) {
  for (const lang of SUPPORTED_LANGUAGES) {
    const langSlug = getSlugForLang(config, lang);
    const path = buildLocalizedPath(lang, langSlug);
    const meta = config.meta[lang];
    const alternates = SUPPORTED_LANGUAGES.map((al) => ({
      hreflang: languageToHreflang(al),
      href: buildCanonicalUrl(al, getSlugForLang(config, al)),
    }));
    const xDefaultHref = buildCanonicalUrl(
      HREFLANG_DEFAULT,
      getSlugForLang(config, HREFLANG_DEFAULT),
    );
    pages.push({
      path,
      lang,
      title: meta.title,
      description: meta.description,
      canonical: `${CANONICAL_DOMAIN}${path}`,
      alternates,
      xDefaultHref,
    });
  }
}

// 2. OTT product pages
for (const product of OTT_PRODUCTS) {
  for (const lang of SUPPORTED_LANGUAGES) {
    const productPath = buildOttProductPath(lang, product);
    const path = buildLocalizedPath(lang, productPath);
    const alternates = SUPPORTED_LANGUAGES.map((al) => ({
      hreflang: languageToHreflang(al),
      href: `${CANONICAL_DOMAIN}${buildLocalizedPath(al, buildOttProductPath(al, product))}`,
    }));
    const xDefaultHref = `${CANONICAL_DOMAIN}${buildLocalizedPath(HREFLANG_DEFAULT, buildOttProductPath(HREFLANG_DEFAULT, product))}`;
    pages.push({
      path,
      lang,
      title: product.seoTitle[lang],
      description: product.seoDescription[lang],
      canonical: `${CANONICAL_DOMAIN}${path}`,
      alternates,
      xDefaultHref,
    });
  }
}

// 3. Mayer product pages
for (const product of MAYER_PRODUCTS) {
  for (const lang of SUPPORTED_LANGUAGES) {
    const productPath = buildMayerProductPath(lang, product);
    const path = buildLocalizedPath(lang, productPath);
    const alternates = SUPPORTED_LANGUAGES.map((al) => ({
      hreflang: languageToHreflang(al),
      href: `${CANONICAL_DOMAIN}${buildLocalizedPath(al, buildMayerProductPath(al, product))}`,
    }));
    const xDefaultHref = `${CANONICAL_DOMAIN}${buildLocalizedPath(HREFLANG_DEFAULT, buildMayerProductPath(HREFLANG_DEFAULT, product))}`;
    pages.push({
      path,
      lang,
      title: product.seoTitle[lang],
      description: product.seoDescription[lang],
      canonical: `${CANONICAL_DOMAIN}${path}`,
      alternates,
      xDefaultHref,
    });
  }
}

// 4. Barbaric product pages
for (const product of BARBARIC_PRODUCTS) {
  for (const lang of SUPPORTED_LANGUAGES) {
    const productPath = buildBarbaricProductPath(lang, product);
    const path = buildLocalizedPath(lang, productPath);
    const alternates = SUPPORTED_LANGUAGES.map((al) => ({
      hreflang: languageToHreflang(al),
      href: `${CANONICAL_DOMAIN}${buildLocalizedPath(al, buildBarbaricProductPath(al, product))}`,
    }));
    const xDefaultHref = `${CANONICAL_DOMAIN}${buildLocalizedPath(HREFLANG_DEFAULT, buildBarbaricProductPath(HREFLANG_DEFAULT, product))}`;
    pages.push({
      path,
      lang,
      title: product.seoTitle[lang],
      description: product.seoDescription[lang],
      canonical: `${CANONICAL_DOMAIN}${path}`,
      alternates,
      xDefaultHref,
    });
  }
}

// 5. Gannomat product pages
for (const product of GANNOMAT_PRODUCTS) {
  for (const lang of SUPPORTED_LANGUAGES) {
    const productPath = buildGannomatProductPath(lang, product);
    const path = buildLocalizedPath(lang, productPath);
    const alternates = SUPPORTED_LANGUAGES.map((al) => ({
      hreflang: languageToHreflang(al),
      href: `${CANONICAL_DOMAIN}${buildLocalizedPath(al, buildGannomatProductPath(al, product))}`,
    }));
    const xDefaultHref = `${CANONICAL_DOMAIN}${buildLocalizedPath(HREFLANG_DEFAULT, buildGannomatProductPath(HREFLANG_DEFAULT, product))}`;
    pages.push({
      path,
      lang,
      title: product.seoTitle[lang],
      description: product.seoDescription[lang],
      canonical: `${CANONICAL_DOMAIN}${path}`,
      alternates,
      xDefaultHref,
    });
  }
}

/* ------------------------------------------------------------------ */
/*  Generate HTML files                                                */
/* ------------------------------------------------------------------ */

const escHtml = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

let count = 0;

for (const page of pages) {
  const hreflangTags = page.alternates
    .map((a) => `<link rel="alternate" hreflang="${a.hreflang}" href="${a.href}"/>`)
    .join('\n    ');
  const xDefaultTag = `<link rel="alternate" hreflang="x-default" href="${page.xDefaultHref}"/>`;

  const seoHead = `
    <title>${escHtml(page.title)}</title>
    <meta name="description" content="${escHtml(page.description)}"/>
    <link rel="canonical" href="${page.canonical}"/>
    ${hreflangTags}
    ${xDefaultTag}
    <meta property="og:title" content="${escHtml(page.title)}"/>
    <meta property="og:description" content="${escHtml(page.description)}"/>
    <meta property="og:url" content="${page.canonical}"/>
    <meta property="og:site_name" content="Asamer Technologie"/>`;

  // Replace lang attribute
  let html = template.replace('<html lang="cs">', `<html lang="${languageToHreflang(page.lang)}">`);

  // Remove the static <title>
  html = html.replace(/<title>Asamer Technologie GmbH<\/title>/, '');

  // Remove the generic meta description (handles both & and &amp;)
  html = html.replace(
    /<meta name="description" content="Asamer Technologie .+?" \/>/,
    '',
  );

  // Inject SEO tags before </head>
  html = html.replace('</head>', `${seoHead}\n  </head>`);

  // Write to dist/{path}/index.html
  const filePath = join(distDir, page.path, 'index.html');
  mkdirSync(dirname(filePath), { recursive: true });
  writeFileSync(filePath, html, 'utf-8');
  count++;
}

// eslint-disable-next-line no-console
console.log(`Prerendered ${count} pages to ${distDir}`);
