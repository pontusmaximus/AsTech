import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SEO_ROUTES } from '../src/seo/routes';
import {
  buildLocalizedPath,
  CANONICAL_DOMAIN,
  DEFAULT_LANGUAGE,
  SUPPORTED_LANGUAGES,
} from '../src/lib/language';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const publicDir = join(__dirname, '..', 'public');
const sitemapPath = join(publicDir, 'sitemap.xml');

const today = new Date().toISOString();

const urls = new Set<string>();

urls.add(CANONICAL_DOMAIN);

Object.values(SEO_ROUTES).forEach((config) => {
  SUPPORTED_LANGUAGES.forEach((lang) => {
    const localizedPath = buildLocalizedPath(lang, config.slug);
    urls.add(`${CANONICAL_DOMAIN}${localizedPath}`);
  });
});

const xmlEntries = Array.from(urls)
  .sort()
  .map(
    (loc) => `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <priority>${loc.endsWith(`/${DEFAULT_LANGUAGE}`) ? '1.0' : '0.7'}</priority>
  </url>`
  )
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlEntries}
</urlset>
`;

mkdirSync(publicDir, { recursive: true });
writeFileSync(sitemapPath, xml.trim() + '\n', 'utf8');

// eslint-disable-next-line no-console
console.log(`Sitemap generated with ${urls.size} entries at ${sitemapPath}`);
