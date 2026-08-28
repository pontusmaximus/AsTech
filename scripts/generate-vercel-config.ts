/**
 * Erzeugt `vercel.json` aus einer Hand-Liste plus abgeleiteten Regeln.
 *
 * Hintergrund (Masterplan 1.1–1.3): Der Catch-all-Rewrite `/(.*) → /index.html`
 * beantwortet heute jeden Pfad mit 200. Das kostet Crawl-Budget und ist der
 * teuerste Einzelbefund des Audits. Entfernen darf man ihn aber erst, wenn jeder
 * Pfad, den der React-Router als gueltig behandelt, serverseitig abgefangen wird —
 * sonst entstehen echte 404 auf real verlinkten URLs.
 *
 * Die dafuer noetigen Regeln von Hand zu pflegen waere aussichtslos: 2.669
 * routerseitig erreichbare Pfade, davon 1.787 ohne prerenderte Datei. Deshalb
 * werden sie hier aus denselben Quellen erzeugt, aus denen auch App, Sitemap und
 * Prerenderer ihre Slugs beziehen — `src/lib/slugs.ts` und die Produktdaten.
 * Damit koennen Router und Weiterleitungen nicht mehr auseinanderlaufen.
 *
 * Zusammengefasst werden die Regeln ueber Alternations-Patterns:
 *   /de/:slug(reseni|solutions|riesenia|megoldasok)  →  /de/loesungen
 * Aus 245 Einzelregeln werden so rund 80.
 *
 *   npm run generate:vercel
 *   npm run generate:vercel -- --check   # Exit 1, wenn vercel.json nicht aktuell ist
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SUPPORTED_LANGUAGES, CANONICAL_DOMAIN, DEFAULT_LANGUAGE } from '../src/lib/language';
import { SLUG_TRANSLATIONS, getAllSlugVariants, localizeSlug } from '../src/lib/slugs';
import { SEO_ROUTES, getSlugForLang } from '../src/seo/routes';
import { OTT_PRODUCTS, OTT_CATEGORY_SLUG_VARIANTS, getOttCategorySlug } from '../src/data/ottProducts';
import { MAYER_PRODUCTS, MAYER_CATEGORY_SLUG_VARIANTS, getMayerCategorySlug } from '../src/data/mayerProducts';
import { BARBARIC_PRODUCTS, BARBARIC_CATEGORY_SLUG_VARIANTS, getBarbaricCategorySlug } from '../src/data/barbaricProducts';
import { GANNOMAT_PRODUCTS, GANNOMAT_CATEGORY_SLUG_VARIANTS, getGannomatCategorySlug } from '../src/data/gannomatProducts';
import type { Language } from '../src/i18n';

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(__dirname, '..');

interface Redirect {
  source: string;
  destination: string;
  permanent: boolean;
  has?: { type: string; key?: string; value: string }[];
}

const LANGS = SUPPORTED_LANGUAGES.join('|');
const abs = (path: string) => `${CANONICAL_DOMAIN}${path}`;

const rules: Redirect[] = [];
const sources = new Set<string>();
const addRule = (r: Redirect) => {
  if (sources.has(r.source)) return;
  sources.add(r.source);
  rules.push(r);
};

/* ------------------------------------------------------------------ */
/*  1. Mehrfache Sprachpraefixe (Masterplan 1.2)                       */
/* ------------------------------------------------------------------ */
/* Zuerst, damit /cz/cz/... nicht von einer spezifischeren Regel gefangen wird.
 * Die Dreifach-Variante steht vor der Doppel-Variante, sonst braucht
 * /cz/cz/cz/ott zwei Spruenge statt einem. */

addRule({
  source: `/:l1(${LANGS})/:l2(${LANGS})/:l3(${LANGS})/:rest*`,
  destination: abs('/:l1/:rest*'),
  permanent: true,
});
addRule({
  source: `/:l1(${LANGS})/:l2(${LANGS})/:rest*`,
  destination: abs('/:l1/:rest*'),
  permanent: true,
});

/* ------------------------------------------------------------------ */
/*  2. Domainwurzel                                                    */
/* ------------------------------------------------------------------ */
/* Ohne diese Regel liefert `/` nach dem Entfernen des Rewrites die leere
 * Vite-Huelle aus (0 Woerter Body). Die Weiterleitung auf die x-default-Sprache
 * ist dieselbe, die der Router heute clientseitig macht. */

addRule({ source: '/', destination: abs(`/${DEFAULT_LANGUAGE}`), permanent: true });

/* ------------------------------------------------------------------ */
/*  3. Hand-gepflegte Weiterleitungen                                  */
/* ------------------------------------------------------------------ */
/* Vor den generierten Regeln, damit ein Einzelfall aus der Search Console eine
 * generische Regel schlagen kann. Host-Regeln werden ans Ende sortiert. */

const manualFile = JSON.parse(readFileSync(join(repoRoot, 'config/redirects.manual.json'), 'utf-8')) as {
  redirects: Redirect[];
};
const manual = manualFile.redirects;
const hostRules = manual.filter((r) => (r.has ?? []).some((h) => h.type === 'host'));
for (const r of manual) {
  if (hostRules.includes(r)) continue;
  addRule(r);
}

/* ------------------------------------------------------------------ */
/*  4. Sprachlose Legacy-Slugs (App.tsx LEGACY_SLUGS)                  */
/* ------------------------------------------------------------------ */
/* Der Router faengt diese heute clientseitig ab. Ohne serverseitige Regel
 * wuerden sie nach dem Entfernen des Rewrites zu 404 — inklusive `/ott`,
 * `/barbaric` und `/faq`, die aus alten Backlinks kommen. */

const legacyTargets = new Map<string, string>();
// Markenseiten und andere Slugs ohne Uebersetzungstabelle.
for (const brand of ['mayer', 'ott', 'barbaric', 'gannomat']) {
  legacyTargets.set(`/${brand}`, `/${DEFAULT_LANGUAGE}/${brand}`);
}
// Alles, was in SLUG_TRANSLATIONS steht: jede Sprachvariante → CZ-Fassung.
for (const czSlug of Object.keys(SLUG_TRANSLATIONS)) {
  const target = `/${DEFAULT_LANGUAGE}${localizeSlug(czSlug, DEFAULT_LANGUAGE)}`;
  for (const variant of Object.values(SLUG_TRANSLATIONS[czSlug])) {
    legacyTargets.set(variant, target);
  }
}
for (const [source, destination] of [...legacyTargets].sort()) {
  addRule({ source, destination: abs(destination), permanent: true });
}

/* ------------------------------------------------------------------ */
/*  5. Seiten-Slug in fremder Sprache                                  */
/* ------------------------------------------------------------------ */
/* `/de/reseni` ist im Router eine gueltige Route, die clientseitig auf
 * `/de/loesungen` umlenkt. Serverseitig als 301, sonst 404.
 * Alle falschen Varianten einer Sprache werden zu einer Regel zusammengefasst. */

for (const czSlug of Object.keys(SLUG_TRANSLATIONS)) {
  const variants = getAllSlugVariants(czSlug); // ohne fuehrenden /
  for (const lang of SUPPORTED_LANGUAGES) {
    const correct = localizeSlug(czSlug, lang).replace(/^\//, '');
    const wrong = variants.filter((v) => v !== correct);
    if (wrong.length === 0) continue;
    emitVariantRules(`/${lang}`, wrong, `/${lang}/${correct}`);
  }
}

/* ------------------------------------------------------------------ */
/*  6. Produkt-Kategorie-Slug in fremder Sprache                       */
/* ------------------------------------------------------------------ */

interface BrandSpec {
  slug: string;
  categories: string[];
  variants: readonly string[];
  categorySlug: (category: never, lang: Language) => string;
}

const brands: BrandSpec[] = [
  {
    slug: 'ott',
    categories: [...new Set(OTT_PRODUCTS.map((p) => p.category as string))],
    variants: OTT_CATEGORY_SLUG_VARIANTS,
    categorySlug: getOttCategorySlug as never,
  },
  {
    slug: 'mayer',
    categories: [...new Set(MAYER_PRODUCTS.map((p) => p.category as string))],
    variants: MAYER_CATEGORY_SLUG_VARIANTS,
    categorySlug: getMayerCategorySlug as never,
  },
  {
    slug: 'barbaric',
    categories: [...new Set(BARBARIC_PRODUCTS.map((p) => p.category as string))],
    variants: BARBARIC_CATEGORY_SLUG_VARIANTS,
    categorySlug: getBarbaricCategorySlug as never,
  },
  {
    slug: 'gannomat',
    categories: [...new Set(GANNOMAT_PRODUCTS.map((p) => p.category as string))],
    variants: GANNOMAT_CATEGORY_SLUG_VARIANTS,
    categorySlug: getGannomatCategorySlug as never,
  },
];

for (const brand of brands) {
  for (const category of brand.categories) {
    for (const lang of SUPPORTED_LANGUAGES) {
      const correct = brand.categorySlug(category as never, lang);
      const wrong = [
        ...new Set(
          SUPPORTED_LANGUAGES.map((l) => brand.categorySlug(category as never, l)).filter((v) => v !== correct),
        ),
      ];
      if (wrong.length === 0) continue;
      // Kategorie-Uebersichtsseite …
      addRule({
        source: `/${lang}/${brand.slug}/:wrong(${wrong.map(escapeAlt).join('|')})`,
        destination: abs(`/${lang}/${brand.slug}/${correct}`),
        permanent: true,
      });
      // … und Produktdetailseite darunter.
      addRule({
        source: `/${lang}/${brand.slug}/:wrong(${wrong.map(escapeAlt).join('|')})/:model`,
        destination: abs(`/${lang}/${brand.slug}/${correct}/:model`),
        permanent: true,
      });
    }
  }
}

/* ------------------------------------------------------------------ */
/*  6a. Seiten, die es in einer Sprache nicht geben soll               */
/* ------------------------------------------------------------------ */

/**
 * `excludeLangs` in `SEO_ROUTES` nimmt eine Seite aus Sitemap, Prerender und
 * hreflang. Damit die URL nicht einfach 404 liefert — sie war bis eben
 * erreichbar —, bekommt sie hier ihre 301 auf `excludeRedirect`.
 */
for (const config of Object.values(SEO_ROUTES)) {
  if (!config.excludeLangs?.length) continue;
  if (!config.excludeRedirect) {
    throw new Error(
      `Route "${config.slug}" hat excludeLangs ohne excludeRedirect — ` +
        'die ausgeschlossene Sprache liefe auf eine 404.',
    );
  }
  for (const lang of config.excludeLangs) {
    addRule({
      source: `/${lang}${getSlugForLang(config, lang)}`,
      destination: abs(`/${lang}${localizeSlug(config.excludeRedirect, lang)}`),
      permanent: true,
    });
  }
}

/* ------------------------------------------------------------------ */
/*  6b. Ausgemusterte Kategorie-Slugs                                  */
/* ------------------------------------------------------------------ */

/**
 * Kategorie-Slugs, die es einmal gab und die durch einen besseren ersetzt
 * wurden. Der Block darueber erzeugt nur Regeln fuer Slugs, die noch in
 * `*_CATEGORY_SLUGS` stehen — ein zurueckgezogener Slug faellt dort heraus und
 * wuerde ohne diese Liste zu einer 404 auf einer URL, die vorher funktioniert
 * hat. Genau das verbietet der Masterplan (1.1: alte URLs bekommen 301).
 *
 * Bewusst hier statt in `config/redirects.manual.json`: der Zielslug wird aus
 * denselben Produktdaten abgeleitet wie alles andere. Wird eine Kategorie
 * spaeter noch einmal umbenannt, zeigt der Eintrag automatisch auf den dann
 * gueltigen Slug — eine handgepflegte Regel zeigte weiter auf den Zwischenstand.
 *
 * Die Regeln gelten fuer alle Sprachen, nicht nur die, in der der Slug lebte:
 * der Block oben hat bisher jede Sprachvariante auf die richtige umgeleitet,
 * `/cz/gannomat/soros-furo-gepek` also ebenfalls bedient.
 */
interface RetiredCategorySlug {
  /** Marken-Slug im Pfad, z. B. `gannomat`. */
  brand: string;
  /** Der zurueckgezogene Slug. */
  from: string;
  /** Kategorie-Schluessel, aus dem der neue Slug je Sprache abgeleitet wird. */
  category: string;
}

const RETIRED_CATEGORY_SLUGS: RetiredCategorySlug[] = [
  // 'soros fúró' liefert in der HU-SERP George Soros und Metallbau-Lehrmaterial.
  { brand: 'gannomat', from: 'soros-furo-gepek', category: 'rowboring' },
  // 'csap' ist nicht falsch ('facsap' ist belegtes Synonym), aber der gesuchte
  // Begriff ist 'tipli'.
  { brand: 'gannomat', from: 'csap-furo-gepek', category: 'boring' },
  // Marktbegriff ist 'keretprés', nicht 'keret-csapozó'.
  { brand: 'gannomat', from: 'keret-csapozo-gepek', category: 'frame' },
  // 'lapszabó' existiert, ist aber DIY-/Dienstleister-konnotiert; der
  // Maschinenbegriff ist 'táblafelosztó'.
  { brand: 'mayer', from: 'horizontalis-lapszabo-furesz', category: 'kappa' },
  // Dazu ein Tippfehler im alten Slug: 'manyag' statt 'muanyag' (műanyag).
  { brand: 'mayer', from: 'lapszabo-furesz-aluminium-manyag', category: 'advanced' },
  // Reiner Tippfehler, doppeltes y.
  { brand: 'mayer', from: 'horizontalne-formatovacie-pilyy', category: 'kappa' },
];

const brandBySlug = new Map(brands.map((b) => [b.slug, b]));

for (const retired of RETIRED_CATEGORY_SLUGS) {
  const brand = brandBySlug.get(retired.brand);
  if (!brand) throw new Error(`Unbekannte Marke im ausgemusterten Slug: ${retired.brand}`);
  for (const lang of SUPPORTED_LANGUAGES) {
    const correct = brand.categorySlug(retired.category as never, lang);
    if (correct === retired.from) {
      throw new Error(
        `Ausgemusterter Slug "${retired.from}" ist in ${lang} noch in Gebrauch — ` +
          'Eintrag aus RETIRED_CATEGORY_SLUGS entfernen oder Slug umbenennen.',
      );
    }
    addRule({
      source: `/${lang}/${brand.slug}/${escapeAlt(retired.from)}`,
      destination: abs(`/${lang}/${brand.slug}/${correct}`),
      permanent: true,
    });
    addRule({
      source: `/${lang}/${brand.slug}/${escapeAlt(retired.from)}/:model`,
      destination: abs(`/${lang}/${brand.slug}/${correct}/:model`),
      permanent: true,
    });
  }
}

/* ------------------------------------------------------------------ */
/*  7. Gebrauchtmaschinen-Detail unter fremdem Uebersichts-Slug        */
/* ------------------------------------------------------------------ */

const usedVariants = getAllSlugVariants('/pouzite-stroje');
for (const lang of SUPPORTED_LANGUAGES) {
  const correct = localizeSlug('/pouzite-stroje', lang).replace(/^\//, '');
  const wrong = usedVariants.filter((v) => v !== correct);
  if (wrong.length === 0) continue;
  emitVariantRules(`/${lang}`, wrong, `/${lang}/${correct}`, ':slug');
}

/* ------------------------------------------------------------------ */
/*  8. Host-Regeln ganz zum Schluss                                    */
/* ------------------------------------------------------------------ */

for (const r of hostRules) addRule(r);

/* ------------------------------------------------------------------ */
/*  Schreiben                                                          */
/* ------------------------------------------------------------------ */

/**
 * Erzeugt die Weiterleitungen fuer eine Menge falscher Slug-Varianten.
 *
 * Einsegmentige Varianten werden zu einer Alternations-Regel zusammengefasst.
 * Mehrsegmentige (`ratgeber/pur-vs-eva`) bekommen bewusst je eine eigene Regel:
 * ein Alternations-Pattern mit `/` darin haengt vom Verhalten von
 * path-to-regexp bei Segmentgrenzen ab, und dieses Verhalten laesst sich hier
 * nicht gegen Vercel verifizieren. Ein paar Regeln mehr sind billiger als eine
 * Regel, die im Deployment stillschweigend nicht greift.
 */
function emitVariantRules(prefix: string, wrong: string[], correct: string, suffix = ''): void {
  const tail = suffix ? `/${suffix}` : '';
  const single = wrong.filter((v) => !v.includes('/'));
  const multi = wrong.filter((v) => v.includes('/'));

  if (single.length > 0) {
    addRule({
      source: `${prefix}/:wrong(${single.map(escapeAlt).join('|')})${tail}`,
      destination: abs(`${correct}${tail}`),
      permanent: true,
    });
  }
  for (const v of multi) {
    addRule({
      source: `${prefix}/${escapeAlt(v)}${tail}`,
      destination: abs(`${correct}${tail}`),
      permanent: true,
    });
  }
}

function escapeAlt(slug: string): string {
  // Slugs enthalten nur [a-z0-9/-]; `/` und `-` sind in einer Alternation
  // unproblematisch, `.` kommt nicht vor. Trotzdem defensiv pruefen.
  if (!/^[a-z0-9/-]+$/.test(slug)) {
    throw new Error(`Slug "${slug}" enthaelt Zeichen, die in einem Redirect-Pattern nicht vorgesehen sind`);
  }
  return slug;
}

const config = {
  $schema: 'https://openapi.vercel.sh/vercel.json',
  buildCommand: 'npm run build',
  outputDirectory: 'dist',
  trailingSlash: false,
  /**
   * Kein Catch-all-Rewrite mehr (Masterplan 1.1). Vercel liefert fuer Pfade
   * ohne Datei und ohne Redirect jetzt `404.html` mit Statuscode 404 aus.
   * Die Abdeckung wird von `scripts/check-404-safety.ts` nachgewiesen.
   */
  redirects: rules,
};

const outPath = join(repoRoot, 'vercel.json');
const json = `${JSON.stringify(config, null, 2)}\n`;

if (process.argv.includes('--check')) {
  const current = readFileSync(outPath, 'utf-8');
  if (current !== json) {
    console.error('vercel.json ist nicht aktuell — `npm run generate:vercel` ausfuehren und committen.');
    process.exit(1);
  }
  console.log(`vercel.json aktuell (${rules.length} Weiterleitungen).`);
} else {
  writeFileSync(outPath, json, 'utf-8');
  console.log(`vercel.json geschrieben: ${rules.length} Weiterleitungen, kein Catch-all-Rewrite.`);
}
