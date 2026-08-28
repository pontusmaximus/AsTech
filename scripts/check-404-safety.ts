/**
 * Sicherheitsnachweis für Masterplan 1.1 („unbekannte URLs müssen 404 liefern").
 *
 * Das Entfernen des Catch-all-Rewrites aus `vercel.json` ist nur dann gefahrlos,
 * wenn jeder Pfad, den der React-Router heute als gültige Route behandelt, danach
 * entweder als prerenderte Datei existiert oder von einer 301-Regel abgefangen wird.
 *
 * Dieses Skript zählt genau das aus. Es erzeugt die vollständige Menge der
 * routerseitig erreichbaren Pfade aus denselben Datenquellen, die auch App,
 * Sitemap und Prerenderer benutzen, und ordnet jeden Pfad einer Kategorie zu:
 *
 *   datei     — prerenderte HTML-Datei vorhanden  → bleibt 200
 *   redirect  — von vercel.json abgefangen        → bleibt 301
 *   LUECKE    — weder noch                        → würde nach 1.1 zu 404
 *
 *   npx tsx scripts/check-404-safety.ts            # Bericht
 *   npx tsx scripts/check-404-safety.ts --fail     # Exit 1, wenn Lücken bestehen
 */

import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SUPPORTED_LANGUAGES, buildLocalizedPath } from '../src/lib/language';
import { SLUG_TRANSLATIONS, getAllSlugVariants, localizeSlug } from '../src/lib/slugs';
import { OTT_PRODUCTS, OTT_CATEGORY_SLUG_VARIANTS, getOttCategorySlug } from '../src/data/ottProducts';
import { MAYER_PRODUCTS, MAYER_CATEGORY_SLUG_VARIANTS, getMayerCategorySlug } from '../src/data/mayerProducts';
import { BARBARIC_PRODUCTS, BARBARIC_CATEGORY_SLUG_VARIANTS, getBarbaricCategorySlug } from '../src/data/barbaricProducts';
import { GANNOMAT_PRODUCTS, GANNOMAT_CATEGORY_SLUG_VARIANTS, getGannomatCategorySlug } from '../src/data/gannomatProducts';
import { USED_MACHINES } from '../src/data/usedMachines';
import { loadVercelConfig, VercelRouter } from './seo-vercel-routes';

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(__dirname, '..');
const distDir = join(repoRoot, 'dist');

const router = new VercelRouter(loadVercelConfig(join(repoRoot, 'vercel.json')));

/** Dieselbe Liste wie `LEGACY_SLUGS` in `src/App.tsx` — sprachlose Pfade, die der Router clientseitig umlenkt. */
export const LEGACY_SLUGS = [
  'mayer', 'ott', 'barbaric', 'gannomat',
  'financovani', 'reseni', 'servis',
  'pouzite-stroje', 'gebrauchtmaschinen', 'used-machines', 'hasznalt-gepek',
  'kontakt', 'contact', 'kapcsolat',
  'imprint', 'impressum', 'impresszum',
  'finanzierung', 'financing', 'financovanie', 'finanszirozas',
  'loesungen', 'solutions', 'riesenia', 'megoldasok',
  'service', 'szerviz',
  'faq',
  'privacy', 'datenschutz', 'ochrana-osobnich-udaju', 'ochrana-osobnych-udajov', 'adatvedelem',
  'terms', 'agb', 'obchodni-podminky', 'obchodne-podmienky', 'altalanos-szerzodesi-feltetelek',
];

type Origin =
  | 'wurzel'
  | 'legacy-slug'
  | 'sprachstartseite'
  | 'seiten-slug-variante'
  | 'produkt-kategorie-variante'
  | 'gebrauchtmaschine-slug-variante';

interface Candidate {
  path: string;
  origin: Origin;
  /** Wohin die Route clientseitig aufgelöst wird — Vorschlag für die 301-Regel. */
  intent: string;
}

const candidates: Candidate[] = [];
const seen = new Set<string>();
const push = (path: string, origin: Origin, intent: string) => {
  if (seen.has(path)) return;
  seen.add(path);
  candidates.push({ path, origin, intent });
};

/* --- 1. Domainwurzel ------------------------------------------------ */
push('/', 'wurzel', '/cz');

/* --- 2. Sprachlose Legacy-Slugs (App.tsx LEGACY_SLUGS) -------------- */
for (const slug of LEGACY_SLUGS) {
  push(`/${slug}`, 'legacy-slug', buildLocalizedPath('cz', `/${slug}`));
}

/* --- 3. Sprachstartseiten ------------------------------------------ */
for (const lang of SUPPORTED_LANGUAGES) {
  push(`/${lang}`, 'sprachstartseite', `/${lang}`);
}

/* --- 4. Slug-Varianten je Sprache ----------------------------------- */
// Der Router registriert *alle* Sprachvarianten unter *jeder* Sprache
// (getAllSlugVariants) und lenkt clientseitig auf die richtige um.
for (const czSlug of Object.keys(SLUG_TRANSLATIONS)) {
  const variants = getAllSlugVariants(czSlug);
  for (const lang of SUPPORTED_LANGUAGES) {
    const correct = localizeSlug(czSlug, lang);
    for (const variant of variants) {
      push(buildLocalizedPath(lang, `/${variant}`), 'seiten-slug-variante', buildLocalizedPath(lang, correct));
    }
  }
}

/* --- 5. Produktseiten mit Kategorie-Slug in fremder Sprache ---------- */
const brands = [
  { slug: 'ott', products: OTT_PRODUCTS, variants: OTT_CATEGORY_SLUG_VARIANTS, correct: getOttCategorySlug },
  { slug: 'mayer', products: MAYER_PRODUCTS, variants: MAYER_CATEGORY_SLUG_VARIANTS, correct: getMayerCategorySlug },
  { slug: 'barbaric', products: BARBARIC_PRODUCTS, variants: BARBARIC_CATEGORY_SLUG_VARIANTS, correct: getBarbaricCategorySlug },
  { slug: 'gannomat', products: GANNOMAT_PRODUCTS, variants: GANNOMAT_CATEGORY_SLUG_VARIANTS, correct: getGannomatCategorySlug },
] as const;

for (const brand of brands) {
  // Kategorie-Übersichtsseiten (bisher nur OTT als Seite ausgebaut; die
  // Varianten in fremder Sprache fängt eine 301-Regel aus vercel.json ab).
  if (brand.slug === 'ott') {
    const ottCategories = [...new Set(brand.products.map((p) => p.category as string))];
    for (const category of ottCategories) {
      for (const lang of SUPPORTED_LANGUAGES) {
        const right = brand.correct(category as never, lang);
        const target = buildLocalizedPath(lang, `/${brand.slug}/${right}`);
        const catVariants = SUPPORTED_LANGUAGES.map((l) => brand.correct(category as never, l));
        for (const variant of new Set(catVariants)) {
          push(buildLocalizedPath(lang, `/${brand.slug}/${variant}`), 'produkt-kategorie-variante', target);
        }
      }
    }
  }
  for (const product of brand.products) {
    for (const lang of SUPPORTED_LANGUAGES) {
      const right = brand.correct(product.category as never, lang);
      const target = buildLocalizedPath(lang, `/${brand.slug}/${right}/${product.slug}`);
      // Alle Kategorie-Slug-Varianten, die zu *dieser* Kategorie gehören.
      const catVariants = SUPPORTED_LANGUAGES.map((l) => brand.correct(product.category as never, l));
      for (const variant of new Set(catVariants)) {
        if (!brand.variants.includes(variant)) continue;
        push(
          buildLocalizedPath(lang, `/${brand.slug}/${variant}/${product.slug}`),
          'produkt-kategorie-variante',
          target,
        );
      }
    }
  }
}

/* --- 6. Gebrauchtmaschinen-Detail mit fremdem Übersichts-Slug -------- */
const usedVariants = getAllSlugVariants('/pouzite-stroje');
for (const machine of USED_MACHINES) {
  for (const lang of SUPPORTED_LANGUAGES) {
    const correct = localizeSlug('/pouzite-stroje', lang);
    for (const variant of usedVariants) {
      push(
        buildLocalizedPath(lang, `/${variant}/${machine.slug}`),
        'gebrauchtmaschine-slug-variante',
        buildLocalizedPath(lang, `${correct}/${machine.slug}`),
      );
    }
  }
}

/* --- Auswertung ------------------------------------------------------ */

const fileFor = (p: string) => (p === '/' ? join(distDir, 'index.html') : join(distDir, p, 'index.html'));

interface Verdict extends Candidate {
  kind: 'datei' | 'redirect' | 'LUECKE';
  detail: string;
}

const verdicts: Verdict[] = candidates.map((c) => {
  const redirect = router.matchRedirect(c.path);
  if (redirect) return { ...c, kind: 'redirect', detail: redirect.destination };
  if (existsSync(fileFor(c.path))) return { ...c, kind: 'datei', detail: 'prerendert' };
  return { ...c, kind: 'LUECKE', detail: `würde 404 — Ziel wäre ${c.intent}` };
});

const gaps = verdicts.filter((v) => v.kind === 'LUECKE');
const byOrigin = new Map<Origin, Verdict[]>();
for (const v of verdicts) byOrigin.set(v.origin, [...(byOrigin.get(v.origin) ?? []), v]);

const lines: string[] = [];
lines.push('# 404-Sicherheitsprüfung für Phase 1.1');
lines.push('');
lines.push(`Erzeugt von \`scripts/check-404-safety.ts\` · ${verdicts.length} routerseitig erreichbare Pfade geprüft.`);
lines.push('');
lines.push(`Catch-all-Rewrite in \`vercel.json\`: **${router.hasCatchAllRewrite() ? 'vorhanden' : 'entfernt'}**`);
lines.push('');
lines.push(`**${gaps.length} Lücken.**`);
lines.push('');
lines.push('| Herkunft | Pfade | prerendert | 301 | Lücke |');
lines.push('|---|---:|---:|---:|---:|');
for (const [origin, list] of byOrigin) {
  lines.push(
    `| ${origin} | ${list.length} | ${list.filter((v) => v.kind === 'datei').length} | ` +
      `${list.filter((v) => v.kind === 'redirect').length} | ${list.filter((v) => v.kind === 'LUECKE').length} |`,
  );
}
lines.push('');
if (gaps.length > 0) {
  lines.push('## Lücken');
  lines.push('');
  lines.push('| Pfad | Herkunft | Zielvorschlag für die 301 |');
  lines.push('|---|---|---|');
  for (const g of gaps.slice(0, 400)) lines.push(`| \`${g.path}\` | ${g.origin} | \`${g.intent}\` |`);
  if (gaps.length > 400) lines.push(`| … | | ${gaps.length - 400} weitere |`);
  lines.push('');
}

const out = join(repoRoot, 'docs/seo/reports/404-sicherheit.md');
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, lines.join('\n'), 'utf-8');

console.log(`${verdicts.length} Pfade geprüft, ${gaps.length} Lücken`);
for (const [origin, list] of byOrigin) {
  const g = list.filter((v) => v.kind === 'LUECKE').length;
  console.log(`  ${g > 0 ? '✗' : '✓'} ${origin.padEnd(32)} ${String(list.length).padStart(4)} Pfade, ${g} Lücken`);
}
console.log(`Report: ${out}`);

if (process.argv.includes('--fail') && gaps.length > 0) process.exit(1);
