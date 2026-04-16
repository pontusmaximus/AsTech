import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SEO_ROUTES, getSlugForLang } from '../src/seo/routes';
import {
  buildLocalizedPath,
  CANONICAL_DOMAIN,
  DEFAULT_LANGUAGE,
  HREFLANG_DEFAULT,
  SUPPORTED_LANGUAGES,
  languageToHreflang,
} from '../src/lib/language';
import { OTT_PRODUCTS, buildOttProductPath } from '../src/data/ottProducts';
import { MAYER_PRODUCTS, buildMayerProductPath } from '../src/data/mayerProducts';
import { BARBARIC_PRODUCTS, buildBarbaricProductPath } from '../src/data/barbaricProducts';
import { GANNOMAT_PRODUCTS, buildGannomatProductPath } from '../src/data/gannomatProducts';
import { USED_MACHINES } from '../src/data/usedMachines';
import { localizeSlug } from '../src/lib/slugs';
import type { Language } from '../src/i18n';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const publicDir = join(__dirname, '..', 'public');
const sitemapPath = join(publicDir, 'sitemap.xml');

const today = new Date().toISOString();

type SitemapEntry = {
  lang: Language;
  url: string;
  canonicalSlug: string;
  alternates: { lang: Language; url: string }[];
  defaultUrl: string;
};
const entries: SitemapEntry[] = [];

// Static page entries
Object.values(SEO_ROUTES).forEach((config) => {
  SUPPORTED_LANGUAGES.forEach((lang) => {
    const langSlug = getSlugForLang(config, lang);
    const localizedPath = buildLocalizedPath(lang, langSlug);
    const alternates = SUPPORTED_LANGUAGES.map((altLang) => ({
      lang: altLang,
      url: `${CANONICAL_DOMAIN}${buildLocalizedPath(altLang, getSlugForLang(config, altLang))}`,
    }));
    const defaultUrl = `${CANONICAL_DOMAIN}${buildLocalizedPath(DEFAULT_LANGUAGE, getSlugForLang(config, DEFAULT_LANGUAGE))}`;
    entries.push({
      lang,
      url: `${CANONICAL_DOMAIN}${localizedPath}`,
      canonicalSlug: config.slug,
      alternates,
      defaultUrl,
    });
  });
});

// OTT product page entries
OTT_PRODUCTS.forEach((product) => {
  SUPPORTED_LANGUAGES.forEach((lang) => {
    const productPath = buildOttProductPath(lang, product);
    const alternates = SUPPORTED_LANGUAGES.map((altLang) => ({
      lang: altLang,
      url: `${CANONICAL_DOMAIN}${buildLocalizedPath(altLang, buildOttProductPath(altLang, product))}`,
    }));
    const defaultUrl = `${CANONICAL_DOMAIN}${buildLocalizedPath(HREFLANG_DEFAULT, buildOttProductPath(HREFLANG_DEFAULT, product))}`;
    entries.push({
      lang,
      url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, productPath)}`,
      canonicalSlug: `/ott/${product.slug}`,
      alternates,
      defaultUrl,
    });
  });
});

// Mayer product page entries
MAYER_PRODUCTS.forEach((product) => {
  SUPPORTED_LANGUAGES.forEach((lang) => {
    const productPath = buildMayerProductPath(lang, product);
    const alternates = SUPPORTED_LANGUAGES.map((altLang) => ({
      lang: altLang,
      url: `${CANONICAL_DOMAIN}${buildLocalizedPath(altLang, buildMayerProductPath(altLang, product))}`,
    }));
    const defaultUrl = `${CANONICAL_DOMAIN}${buildLocalizedPath(HREFLANG_DEFAULT, buildMayerProductPath(HREFLANG_DEFAULT, product))}`;
    entries.push({
      lang,
      url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, productPath)}`,
      canonicalSlug: `/mayer/${product.slug}`,
      alternates,
      defaultUrl,
    });
  });
});

// Barbaric product page entries
BARBARIC_PRODUCTS.forEach((product) => {
  SUPPORTED_LANGUAGES.forEach((lang) => {
    const productPath = buildBarbaricProductPath(lang, product);
    const alternates = SUPPORTED_LANGUAGES.map((altLang) => ({
      lang: altLang,
      url: `${CANONICAL_DOMAIN}${buildLocalizedPath(altLang, buildBarbaricProductPath(altLang, product))}`,
    }));
    const defaultUrl = `${CANONICAL_DOMAIN}${buildLocalizedPath(HREFLANG_DEFAULT, buildBarbaricProductPath(HREFLANG_DEFAULT, product))}`;
    entries.push({
      lang,
      url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, productPath)}`,
      canonicalSlug: `/barbaric/${product.slug}`,
      alternates,
      defaultUrl,
    });
  });
});

// Gannomat product page entries
GANNOMAT_PRODUCTS.forEach((product) => {
  SUPPORTED_LANGUAGES.forEach((lang) => {
    const productPath = buildGannomatProductPath(lang, product);
    const alternates = SUPPORTED_LANGUAGES.map((altLang) => ({
      lang: altLang,
      url: `${CANONICAL_DOMAIN}${buildLocalizedPath(altLang, buildGannomatProductPath(altLang, product))}`,
    }));
    const defaultUrl = `${CANONICAL_DOMAIN}${buildLocalizedPath(HREFLANG_DEFAULT, buildGannomatProductPath(HREFLANG_DEFAULT, product))}`;
    entries.push({
      lang,
      url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, productPath)}`,
      canonicalSlug: `/gannomat/${product.slug}`,
      alternates,
      defaultUrl,
    });
  });
});

// Used machine detail page entries
USED_MACHINES.forEach((machine) => {
  SUPPORTED_LANGUAGES.forEach((lang) => {
    const buildUsedMachinePath = (al: Language) => `${localizeSlug('/pouzite-stroje', al)}/${machine.slug}`;
    const machinePath = buildUsedMachinePath(lang);
    const alternates = SUPPORTED_LANGUAGES.map((altLang) => ({
      lang: altLang,
      url: `${CANONICAL_DOMAIN}${buildLocalizedPath(altLang, buildUsedMachinePath(altLang))}`,
    }));
    const defaultUrl = `${CANONICAL_DOMAIN}${buildLocalizedPath(HREFLANG_DEFAULT, buildUsedMachinePath(HREFLANG_DEFAULT))}`;
    entries.push({
      lang,
      url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, machinePath)}`,
      canonicalSlug: `/pouzite-stroje/${machine.slug}`,
      alternates,
      defaultUrl,
    });
  });
});

const getPriority = (lang: Language, canonicalSlug: string): string => {
  if (lang === DEFAULT_LANGUAGE && canonicalSlug === '/') return '1.0';
  if (lang === DEFAULT_LANGUAGE) return '0.9';
  if (canonicalSlug === '/imprint' || canonicalSlug === '/privacy' || canonicalSlug === '/terms') return '0.1';
  return '0.7';
};

const getChangefreq = (canonicalSlug: string): string => {
  if (canonicalSlug === '/') return 'weekly';
  if (canonicalSlug === '/imprint' || canonicalSlug === '/privacy' || canonicalSlug === '/terms') return 'yearly';
  return 'monthly';
};

const xmlEntries = entries
  .sort((a, b) => a.url.localeCompare(b.url))
  .map(({ lang, url, canonicalSlug, alternates, defaultUrl }) => {
    const altLinks = alternates.map(
      (alt) => `    <xhtml:link rel="alternate" hreflang="${languageToHreflang(alt.lang)}" href="${alt.url}"/>`,
    );
    altLinks.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${defaultUrl}"/>`);

    return `  <url>
    <loc>${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${getChangefreq(canonicalSlug)}</changefreq>
    <priority>${getPriority(lang, canonicalSlug)}</priority>
${altLinks.join('\n')}
  </url>`;
  })
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${xmlEntries}
</urlset>
`;

mkdirSync(publicDir, { recursive: true });
writeFileSync(sitemapPath, xml.trim() + '\n', 'utf8');

// eslint-disable-next-line no-console
console.log(`Sitemap generated with ${entries.length} entries at ${sitemapPath}`);
