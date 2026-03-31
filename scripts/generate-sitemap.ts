import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SEO_ROUTES } from '../src/seo/routes';
import {
  buildLocalizedPath,
  CANONICAL_DOMAIN,
  DEFAULT_LANGUAGE,
  SUPPORTED_LANGUAGES,
  languageToHreflang,
} from '../src/lib/language';
import type { Language } from '../src/i18n';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const publicDir = join(__dirname, '..', 'public');
const sitemapPath = join(publicDir, 'sitemap.xml');

const today = new Date().toISOString();

type SitemapEntry = { lang: Language; slug: string; url: string };
const entries: SitemapEntry[] = [];

Object.values(SEO_ROUTES).forEach((config) => {
  SUPPORTED_LANGUAGES.forEach((lang) => {
    const localizedPath = buildLocalizedPath(lang, config.slug);
    entries.push({ lang, slug: config.slug, url: `${CANONICAL_DOMAIN}${localizedPath}` });
  });
});

const getPriority = (lang: Language, slug: string): string => {
  if (lang === DEFAULT_LANGUAGE && slug === '/') return '1.0';
  if (lang === DEFAULT_LANGUAGE) return '0.9';
  if (slug === '/imprint') return '0.1';
  return '0.7';
};

const getChangefreq = (slug: string): string => {
  if (slug === '/') return 'weekly';
  if (slug === '/imprint') return 'yearly';
  return 'monthly';
};

const xmlEntries = entries
  .sort((a, b) => a.url.localeCompare(b.url))
  .map(({ lang, slug, url }) => {
    const alternates = SUPPORTED_LANGUAGES.map((altLang) => {
      const altUrl = `${CANONICAL_DOMAIN}${buildLocalizedPath(altLang, slug)}`;
      return `    <xhtml:link rel="alternate" hreflang="${languageToHreflang(altLang)}" href="${altUrl}"/>`;
    });
    const defaultUrl = `${CANONICAL_DOMAIN}${buildLocalizedPath(DEFAULT_LANGUAGE, slug)}`;
    alternates.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${defaultUrl}"/>`);

    return `  <url>
    <loc>${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${getChangefreq(slug)}</changefreq>
    <priority>${getPriority(lang, slug)}</priority>
${alternates.join('\n')}
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
