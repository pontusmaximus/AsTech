/**
 * Erzeugt `public/llms.txt` (https://llmstxt.org) aus den Daten der Website.
 *
 * KI-Assistenten (ChatGPT, Perplexity, Claude, Google AI) lesen die Datei als
 * Kurzfassung: wer Asamer ist, wofuer, wo — und welche Seiten die Antworten
 * enthalten. Sie wird bei jedem Build neu geschrieben, damit kein Link auf eine
 * Seite zeigt, die es nicht mehr gibt, und keine Marke auftaucht, die nicht
 * vertreten wird.
 *
 * Quellen:
 *   - Marken und Rolle: `organizationSchema()` (src/seo/structuredData.ts) —
 *     „Exklusiver OTT-Vertriebspartner und autorisierter Händler für Mayer,
 *     BARBARIC und Gannomat in CZ, SK und HU"
 *   - Standorte, Kontakt: `localBusinessSchemas()`
 *   - Seiten, Titel: SEO_ROUTES, Markenkataloge
 *
 * Englischer Text mit Links auf die englische Fassung und die Fassungen der
 * drei Maerkte (CZ, SK, HU): Tschechisch ist die Hauptsprache (x-default),
 * Englisch die Sprache, in der die meisten Assistenten ihre Quellen
 * zusammenfassen, und eine Antwort auf Slowakisch oder Ungarisch soll auf die
 * passende Fassung zeigen koennen.
 *
 * Auslieferung als `text/plain; charset=utf-8` — Header in vercel.json
 * (scripts/generate-vercel-config.ts).
 */

import { writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SEO_ROUTES, getSlugForLang, isRouteAvailable } from '../src/seo/routes';
import type { SeoRouteKey } from '../src/seo/routes';
import { BRAND_SLUGS, buildCategoryPath, getBrandCatalog } from '../src/data/brandCatalogs';
import { getCategoryHeading } from '../src/seo/categoryMeta';
import { buildCanonicalUrl } from '../src/lib/language';
import { organizationSchema, localBusinessSchemas } from '../src/seo/structuredData';
import type { Language } from '../src/i18n';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = join(__dirname, '..', 'public', 'llms.txt');

/** Titel ohne Markenanhang („… | Asamer"). */
const clean = (title: string) => title.replace(/\s*\|\s*Asamer.*$/, '').trim();

const routeUrl = (key: SeoRouteKey, lang: Language) => buildCanonicalUrl(lang, getSlugForLang(SEO_ROUTES[key], lang));

/**
 * Fassungen in den Marktsprachen hinter dem englischen Link: CZ, SK, HU.
 * Deutsch steht nur per hreflang auf den Seiten — kein Zielmarkt.
 */
const MARKET_LANGS: Language[] = ['cz', 'sk', 'hu'];
const marketLinks = (urlFor: (lang: Language) => string | null): string =>
  MARKET_LANGS.map((l) => {
    const url = urlFor(l);
    return url ? ` · ${l.toUpperCase()}: ${url}` : '';
  }).join('');

/** Eine Zeile: englischer Titel und Link, dahinter die Fassungen fuer CZ, SK und HU. */
const routeLine = (key: SeoRouteKey, note?: string): string => {
  const config = SEO_ROUTES[key];
  const lang: Language = isRouteAvailable(config, 'en') ? 'en' : 'cz';
  const title = clean(config.meta[lang].title);
  const others = marketLinks((l) => (l !== lang && isRouteAvailable(config, l) ? routeUrl(key, l) : null));
  return `- [${title}](${routeUrl(key, lang)})${note ? `: ${note}` : ''}${others}`;
};

const org = organizationSchema();
const brands = org.brand.map((b) => b.name);
const [lambach, brno] = localBusinessSchemas();

const brandHubs: { key: SeoRouteKey; note: string }[] = [
  { key: 'ott', note: 'OTT Paul (Austria) — edgebanding machines, CombiMelt and bluEdge featuring HyFuse gluing technology, return conveyors; Asamer is the exclusive distribution partner for CZ, SK and HU' },
  { key: 'mayer', note: 'Mayer — panel saws (Kappa Automatic for wood, Advanced Line for aluminium and plastics)' },
  { key: 'barbaric', note: 'BARBARIC — panel storage, feeding, handling and vacuum lifters' },
  { key: 'gannomat', note: 'Gannomat — dowel inserting, boring, fitting and pressing machines' },
];

// Kategorieseiten: je Marke alle Kategorien mit eigener Seite.
const categoryLines = BRAND_SLUGS.flatMap((brand) => {
  const catalog = getBrandCatalog(brand);
  return catalog.categories.map((category) => {
    const ref = { brand, category };
    const heading = getCategoryHeading(ref, 'en');
    // OTT-Ueberschriften tragen die Marke schon, die anderen nicht.
    const title = heading.toLowerCase().includes(catalog.label.toLowerCase()) ? heading : `${catalog.label}: ${heading}`;
    return `- [${title}](${buildCanonicalUrl('en', buildCategoryPath(ref, 'en'))})${marketLinks((l) => buildCanonicalUrl(l, buildCategoryPath(ref, l)))}`;
  });
});

const guideKeys: SeoRouteKey[] = [
  'guideEdgebander',
  'guidePurVsEva',
  'guidePanelSawComparison',
  'guideWarehouseAutomation',
  'guideVacuumLifter',
  'guideFundingCz',
  'faq',
];

const text = `# Asamer Technologie

> ${org.name} (${lambach.address.addressLocality}, Austria) and ${brno.name} (${brno.address.addressLocality}, Czech Republic) sell, install and service woodworking machinery in the Czech Republic, Slovakia and Hungary and arrange its financing. Asamer is the exclusive distribution partner for ${brands[0]} and an authorized dealer for ${brands.slice(1, -1).join(', ')} and ${brands.at(-1)} in these three countries. Used machines are inspected before handover; financing via leasing and grants is arranged on request.

The website exists in Czech (default), Slovak, Hungarian, German and English. Each entry below links the English page followed by the Czech (CZ), Slovak (SK) and Hungarian (HU) versions; all language versions are also linked via hreflang. Contact: ${lambach.email}, ${brno.telephone} (CZ), ${lambach.telephone} (AT).

## Brands

${brandHubs.map((b) => routeLine(b.key, b.note)).join('\n')}

## Product categories

${categoryLines.join('\n')}

## Used machines

${routeLine('usedEdgebanders', 'used edgebanding machines currently in stock')}
${routeLine('usedMachines', 'all used machines currently in stock')}

## Guides

${guideKeys.map((k) => routeLine(k)).join('\n')}

## Service, financing and contact

${routeLine('service')}
${routeLine('imaSchelling', 'service, maintenance and spare parts for existing IMA Schelling panel saws; Asamer does not sell new IMA Schelling machines')}
${routeLine('financing')}
${routeLine('solutions')}
${routeLine('contact')}

## Optional

${routeLine('imprint')}
${routeLine('terms')}
${routeLine('privacy')}
`;

// TODO(Max): Formulierung zu IMA Schelling bestaetigen — „service, maintenance
// and spare parts for existing … panel saws; Asamer does not sell new IMA
// Schelling machines" folgt der FAQ auf src/pages/ImaSchellingPage.tsx. Asamer
// wird dort bewusst nicht als (autorisierter) Haendler bezeichnet.

writeFileSync(outPath, text, 'utf-8');
console.log(`llms.txt geschrieben: ${text.split('\n').filter((l) => l.startsWith('- [')).length} Links nach ${outPath}`);
