import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SEO_ROUTES, getSlugForLang, isRouteAvailable } from '../src/seo/routes';
import type { SeoRouteKey } from '../src/seo/routes';
import { buildLastmodTable, staticKey, productKey, usedMachineKey } from './content-lastmod';
import {
  buildLocalizedPath,
  CANONICAL_DOMAIN,
  DEFAULT_LANGUAGE,
  HREFLANG_DEFAULT,
  INDEXABLE_LANGUAGES,
  languageToHreflang,
} from '../src/lib/language';
import { OTT_PRODUCTS, buildOttProductPath } from '../src/data/ottProducts';
import { MAYER_PRODUCTS, buildMayerProductPath } from '../src/data/mayerProducts';
import { BARBARIC_PRODUCTS, buildBarbaricProductPath } from '../src/data/barbaricProducts';
import { GANNOMAT_PRODUCTS, buildGannomatProductPath } from '../src/data/gannomatProducts';
import { USED_MACHINES } from '../src/data/usedMachines';
import { localizeSlug } from '../src/lib/slugs';
import { ALL_CATEGORY_REFS, buildCategoryPath } from '../src/data/brandCatalogs';
import type { Language } from '../src/i18n';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const publicDir = join(__dirname, '..', 'public');
const sitemapPath = join(publicDir, 'sitemap.xml');

/**
 * Echtes Aenderungsdatum je Seite statt Build-Zeitstempel (Masterplan 1.5).
 * Ein `lastmod`, das fuer alle 605 URLs gleich ist und sich bei jedem Deploy
 * aendert, wertet Google nicht aus.
 */
const lastmod = buildLastmodTable({
  routeKeys: Object.keys(SEO_ROUTES) as SeoRouteKey[],
  products: [
    ...OTT_PRODUCTS.map((p) => ({ brand: 'ott', slug: p.slug })),
    ...MAYER_PRODUCTS.map((p) => ({ brand: 'mayer', slug: p.slug })),
    ...BARBARIC_PRODUCTS.map((p) => ({ brand: 'barbaric', slug: p.slug })),
    ...GANNOMAT_PRODUCTS.map((p) => ({ brand: 'gannomat', slug: p.slug })),
  ],
  usedMachineSlugs: USED_MACHINES.map((m) => m.slug),
});

/** Rueckfallwert, falls fuer eine Seite kein Datum ermittelbar war. */
const FALLBACK_LASTMOD = new Date().toISOString();

type SitemapEntry = {
  lang: Language;
  url: string;
  canonicalSlug: string;
  lastmod: string;
  alternates: { lang: Language; url: string }[];
  defaultUrl: string;
};
const entries: SitemapEntry[] = [];

// Static page entries
Object.entries(SEO_ROUTES).forEach(([routeKey, config]) => {
  INDEXABLE_LANGUAGES.forEach((lang) => {
    // Sprachen, die diese Seite nicht haben sollen, kommen weder als eigener
    // Eintrag noch als hreflang-Alternate vor: die URL antwortet mit 301.
    if (!isRouteAvailable(config, lang)) return;
    const langSlug = getSlugForLang(config, lang);
    const localizedPath = buildLocalizedPath(lang, langSlug);
    const alternates = INDEXABLE_LANGUAGES.filter((altLang) => isRouteAvailable(config, altLang)).map((altLang) => ({
      lang: altLang,
      url: `${CANONICAL_DOMAIN}${buildLocalizedPath(altLang, getSlugForLang(config, altLang))}`,
    }));
    const defaultUrl = `${CANONICAL_DOMAIN}${buildLocalizedPath(DEFAULT_LANGUAGE, getSlugForLang(config, DEFAULT_LANGUAGE))}`;
    entries.push({
      lang,
      url: `${CANONICAL_DOMAIN}${localizedPath}`,
      canonicalSlug: config.slug,
      lastmod: lastmod.get(staticKey(routeKey as SeoRouteKey)),
      alternates,
      defaultUrl,
    });
  });
});

// Kategorieseiten je Marke
ALL_CATEGORY_REFS.forEach((ref) => {
  INDEXABLE_LANGUAGES.forEach((lang) => {
    const alternates = INDEXABLE_LANGUAGES.map((altLang) => ({
      lang: altLang,
      url: `${CANONICAL_DOMAIN}${buildLocalizedPath(altLang, buildCategoryPath(ref, altLang))}`,
    }));
    entries.push({
      lang,
      url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, buildCategoryPath(ref, lang))}`,
      canonicalSlug: `/${ref.brand}/${ref.category}`,
      // Eine Kategorieseite aendert sich, wenn sich ihre Produktdaten aendern.
      // Die liegen in derselben Datei wie die der Marke, deshalb deren Datum.
      lastmod: lastmod.get(staticKey(ref.brand as SeoRouteKey)),
      alternates,
      defaultUrl: `${CANONICAL_DOMAIN}${buildLocalizedPath(HREFLANG_DEFAULT, buildCategoryPath(ref, HREFLANG_DEFAULT))}`,
    });
  });
});

// OTT product page entries
OTT_PRODUCTS.forEach((product) => {
  INDEXABLE_LANGUAGES.forEach((lang) => {
    const productPath = buildOttProductPath(lang, product);
    const alternates = INDEXABLE_LANGUAGES.map((altLang) => ({
      lang: altLang,
      url: `${CANONICAL_DOMAIN}${buildLocalizedPath(altLang, buildOttProductPath(altLang, product))}`,
    }));
    const defaultUrl = `${CANONICAL_DOMAIN}${buildLocalizedPath(HREFLANG_DEFAULT, buildOttProductPath(HREFLANG_DEFAULT, product))}`;
    entries.push({
      lang,
      url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, productPath)}`,
      canonicalSlug: `/ott/${product.slug}`,
      lastmod: lastmod.get(productKey('ott', product.slug)),
      alternates,
      defaultUrl,
    });
  });
});

// Mayer product page entries
MAYER_PRODUCTS.forEach((product) => {
  INDEXABLE_LANGUAGES.forEach((lang) => {
    const productPath = buildMayerProductPath(lang, product);
    const alternates = INDEXABLE_LANGUAGES.map((altLang) => ({
      lang: altLang,
      url: `${CANONICAL_DOMAIN}${buildLocalizedPath(altLang, buildMayerProductPath(altLang, product))}`,
    }));
    const defaultUrl = `${CANONICAL_DOMAIN}${buildLocalizedPath(HREFLANG_DEFAULT, buildMayerProductPath(HREFLANG_DEFAULT, product))}`;
    entries.push({
      lang,
      url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, productPath)}`,
      canonicalSlug: `/mayer/${product.slug}`,
      lastmod: lastmod.get(productKey('mayer', product.slug)),
      alternates,
      defaultUrl,
    });
  });
});

// Barbaric product page entries
BARBARIC_PRODUCTS.forEach((product) => {
  INDEXABLE_LANGUAGES.forEach((lang) => {
    const productPath = buildBarbaricProductPath(lang, product);
    const alternates = INDEXABLE_LANGUAGES.map((altLang) => ({
      lang: altLang,
      url: `${CANONICAL_DOMAIN}${buildLocalizedPath(altLang, buildBarbaricProductPath(altLang, product))}`,
    }));
    const defaultUrl = `${CANONICAL_DOMAIN}${buildLocalizedPath(HREFLANG_DEFAULT, buildBarbaricProductPath(HREFLANG_DEFAULT, product))}`;
    entries.push({
      lang,
      url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, productPath)}`,
      canonicalSlug: `/barbaric/${product.slug}`,
      lastmod: lastmod.get(productKey('barbaric', product.slug)),
      alternates,
      defaultUrl,
    });
  });
});

// Gannomat product page entries
GANNOMAT_PRODUCTS.forEach((product) => {
  INDEXABLE_LANGUAGES.forEach((lang) => {
    const productPath = buildGannomatProductPath(lang, product);
    const alternates = INDEXABLE_LANGUAGES.map((altLang) => ({
      lang: altLang,
      url: `${CANONICAL_DOMAIN}${buildLocalizedPath(altLang, buildGannomatProductPath(altLang, product))}`,
    }));
    const defaultUrl = `${CANONICAL_DOMAIN}${buildLocalizedPath(HREFLANG_DEFAULT, buildGannomatProductPath(HREFLANG_DEFAULT, product))}`;
    entries.push({
      lang,
      url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, productPath)}`,
      canonicalSlug: `/gannomat/${product.slug}`,
      lastmod: lastmod.get(productKey('gannomat', product.slug)),
      alternates,
      defaultUrl,
    });
  });
});

// Used machine detail page entries
USED_MACHINES.forEach((machine) => {
  INDEXABLE_LANGUAGES.forEach((lang) => {
    const buildUsedMachinePath = (al: Language) => `${localizeSlug('/pouzite-stroje', al)}/${machine.slug}`;
    const machinePath = buildUsedMachinePath(lang);
    const alternates = INDEXABLE_LANGUAGES.map((altLang) => ({
      lang: altLang,
      url: `${CANONICAL_DOMAIN}${buildLocalizedPath(altLang, buildUsedMachinePath(altLang))}`,
    }));
    const defaultUrl = `${CANONICAL_DOMAIN}${buildLocalizedPath(HREFLANG_DEFAULT, buildUsedMachinePath(HREFLANG_DEFAULT))}`;
    entries.push({
      lang,
      url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, machinePath)}`,
      canonicalSlug: `/pouzite-stroje/${machine.slug}`,
      lastmod: lastmod.get(usedMachineKey(machine.slug)),
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
  .map(({ lang, url, canonicalSlug, lastmod: entryLastmod, alternates, defaultUrl }) => {
    const altLinks = alternates.map(
      (alt) => `    <xhtml:link rel="alternate" hreflang="${languageToHreflang(alt.lang)}" href="${alt.url}"/>`,
    );
    altLinks.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${defaultUrl}"/>`);

    return `  <url>
    <loc>${url}</loc>
    <lastmod>${entryLastmod || FALLBACK_LASTMOD}</lastmod>
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

console.log(
  `Sitemap generated with ${entries.length} entries at ${sitemapPath} ` +
    `(lastmod aus ${lastmod.source}, ${lastmod.distinctDates} unterschiedliche Datumswerte)`,
);
const undated = entries.filter((e) => !e.lastmod).length;
if (undated > 0) {
  console.warn(`  Warnung: ${undated} Eintraege ohne ermitteltes Aenderungsdatum — Rueckfall auf Build-Zeitstempel.`);
}
