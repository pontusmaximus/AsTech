/**
 * Lückenreport für die Sprachversionen (Masterplan 3.3 Punkt 3).
 *
 * Die Website hat keine i18n-Bibliothek, sondern drei Übersetzungsmechanismen —
 * und zwei davon fallen bei fehlendem Text still auf eine andere Sprache zurück.
 * Genau das erzeugt die Befunde 3.1 (HU → EN) und 3.2 (SK → CZ).
 *
 * Geprüft werden beide Ebenen:
 *
 *   Ebene A  `MultiLangText`-Objekte in src/data/**
 *            { de, en, cz, sk?, hu? } — fehlt sk/hu, greift `ml()` mit
 *            `obj.sk ?? obj.cz` bzw. `obj.hu ?? obj.en`.
 *
 *   Ebene B  Wörterbücher in src/i18n/pageTextTranslations.ts
 *            `translatePageText` schlägt SK über den CZ-Text und HU über den
 *            EN-Text nach. Fehlt der Eintrag, kommt der Quelltext zurück.
 *            Die Fundstellen sind die `tr(de, en, cz)`-Aufrufe in den Seiten;
 *            sie werden über den TypeScript-Parser aus dem AST gelesen, nicht
 *            per Regex — bei 30-KB-Komponenten mit verschachtelten Anführungs-
 *            zeichen wäre eine Regex nicht belastbar.
 *
 * Nicht geprüft: `src/i18n/index.ts` und `src/seo/routes.ts`. Beide erzwingen
 * über ihre Typen vollständige Objekte für alle fünf Sprachen — dort *kann*
 * kein Schlüssel fehlen.
 *
 *   npm run seo:i18n
 *   npm run seo:i18n -- --fail   # Exit 1, wenn Lücken bestehen
 */

import { readFileSync, readdirSync, mkdirSync, writeFileSync, statSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';
import { pageSkTranslations, pageHuTranslations } from '../src/i18n/pageTextTranslations';
import { OTT_PRODUCT_SEO, OTT_CATEGORY_SEO } from '../src/data/seo/ottSeoContent';
import { MAYER_PRODUCT_SEO, MAYER_CATEGORY_SEO } from '../src/data/seo/mayerSeoContent';
import { BARBARIC_PRODUCT_SEO, BARBARIC_CATEGORY_SEO } from '../src/data/seo/barbaricSeoContent';
import { GANNOMAT_PRODUCT_SEO, GANNOMAT_CATEGORY_SEO } from '../src/data/seo/gannomatSeoContent';
import { EDGEBANDER_GUIDE } from '../src/data/guides/edgebanderGuide';
import { HUB_GUIDES, HUB_FAQ_CATEGORIES } from '../src/data/hub/ratgeberFaqHub';
import { USED_MACHINES } from '../src/data/usedMachines';
import { OTT_PRODUCTS } from '../src/data/ottProducts';
import { MAYER_PRODUCTS } from '../src/data/mayerProducts';
import { BARBARIC_PRODUCTS } from '../src/data/barbaricProducts';
import { GANNOMAT_PRODUCTS } from '../src/data/gannomatProducts';

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(__dirname, '..');

const TARGET_LANGS = ['sk', 'hu'] as const;
type Target = (typeof TARGET_LANGS)[number];

/** Auf welche Sprache fällt die Zielsprache zurück, wenn der Text fehlt? */
const FALLBACK_OF: Record<Target, 'cz' | 'en'> = { sk: 'cz', hu: 'en' };

/* ------------------------------------------------------------------ */
/*  Ebene A — MultiLangText in den Datenmodulen                        */
/* ------------------------------------------------------------------ */

interface MlGap {
  source: string;
  path: string;
  lang: Target;
  /** Der Text, der stattdessen ausgeliefert wird — die Übersetzungsvorlage. */
  fallbackText: string;
}

const mlGaps: MlGap[] = [];
const mlTotals: Record<Target, { total: number; missing: number }> = {
  sk: { total: 0, missing: 0 },
  hu: { total: 0, missing: 0 },
};

const isMultiLang = (v: unknown): v is Record<string, unknown> =>
  typeof v === 'object' &&
  v !== null &&
  !Array.isArray(v) &&
  typeof (v as Record<string, unknown>).cz === 'string' &&
  typeof (v as Record<string, unknown>).en === 'string';

/** Läuft durch ein Datenmodul und sammelt jedes `MultiLangText` ohne sk/hu. */
function walk(node: unknown, source: string, path: string, depth = 0): void {
  if (depth > 12 || node === null || typeof node !== 'object') return;

  if (isMultiLang(node)) {
    for (const lang of TARGET_LANGS) {
      mlTotals[lang].total += 1;
      if (typeof node[lang] !== 'string' || (node[lang] as string).trim() === '') {
        mlTotals[lang].missing += 1;
        mlGaps.push({
          source,
          path,
          lang,
          fallbackText: String(node[FALLBACK_OF[lang]] ?? ''),
        });
      }
    }
    return;
  }

  if (Array.isArray(node)) {
    node.forEach((child, i) => walk(child, source, `${path}[${i}]`, depth + 1));
    return;
  }

  for (const [key, child] of Object.entries(node as Record<string, unknown>)) {
    walk(child, source, path ? `${path}.${key}` : key, depth + 1);
  }
}

const DATA_MODULES: [string, unknown][] = [
  ['ottSeoContent · Produkte', OTT_PRODUCT_SEO],
  ['ottSeoContent · Kategorien', OTT_CATEGORY_SEO],
  ['mayerSeoContent · Produkte', MAYER_PRODUCT_SEO],
  ['mayerSeoContent · Kategorien', MAYER_CATEGORY_SEO],
  ['barbaricSeoContent · Produkte', BARBARIC_PRODUCT_SEO],
  ['barbaricSeoContent · Kategorien', BARBARIC_CATEGORY_SEO],
  ['gannomatSeoContent · Produkte', GANNOMAT_PRODUCT_SEO],
  ['gannomatSeoContent · Kategorien', GANNOMAT_CATEGORY_SEO],
  ['edgebanderGuide', EDGEBANDER_GUIDE],
  ['ratgeberFaqHub · Guides', HUB_GUIDES],
  ['ratgeberFaqHub · FAQ', HUB_FAQ_CATEGORIES],
  ['usedMachines', USED_MACHINES],
  ['ottProducts', OTT_PRODUCTS],
  ['mayerProducts', MAYER_PRODUCTS],
  ['barbaricProducts', BARBARIC_PRODUCTS],
  ['gannomatProducts', GANNOMAT_PRODUCTS],
];

for (const [name, mod] of DATA_MODULES) walk(mod, name, '');

/* ------------------------------------------------------------------ */
/*  Ebene B — tr()-Aufrufe gegen die Wörterbücher                      */
/* ------------------------------------------------------------------ */

interface TrCall {
  file: string;
  line: number;
  de: string;
  en: string;
  cz: string;
}

interface DynamicTrCall {
  file: string;
  line: number;
  snippet: string;
}

const trCalls: TrCall[] = [];
const dynamicCalls: DynamicTrCall[] = [];

const collectTsxFiles = (dir: string): string[] => {
  const out: string[] = [];
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    if (statSync(p).isDirectory()) out.push(...collectTsxFiles(p));
    else if (p.endsWith('.tsx') || p.endsWith('.ts')) out.push(p);
  }
  return out;
};

/** Literaltext eines Arguments, oder null wenn es zur Laufzeit variiert. */
const literalOf = (node: ts.Node): string | null => {
  if (ts.isStringLiteral(node)) return node.text;
  if (ts.isNoSubstitutionTemplateLiteral(node)) return node.text;
  return null;
};

for (const file of collectTsxFiles(join(repoRoot, 'src'))) {
  const text = readFileSync(file, 'utf-8');
  if (!text.includes('tr(')) continue;
  const sf = ts.createSourceFile(file, text, ts.ScriptTarget.ESNext, true, ts.ScriptKind.TSX);
  const rel = relative(repoRoot, file);

  const visit = (node: ts.Node): void => {
    if (
      ts.isCallExpression(node) &&
      ts.isIdentifier(node.expression) &&
      node.expression.text === 'tr' &&
      node.arguments.length === 3
    ) {
      const line = sf.getLineAndCharacterOfPosition(node.getStart()).line + 1;
      const [de, en, cz] = node.arguments.map(literalOf);
      if (de !== null && en !== null && cz !== null) {
        trCalls.push({ file: rel, line, de, en, cz });
      } else {
        dynamicCalls.push({ file: rel, line, snippet: node.getText().slice(0, 120).replace(/\s+/g, ' ') });
      }
    }
    ts.forEachChild(node, visit);
  };
  visit(sf);
}

interface DictGap {
  file: string;
  line: number;
  lang: Target;
  /** Der Schlüssel, unter dem der Eintrag im Wörterbuch fehlt. */
  key: string;
}

const dictGaps: DictGap[] = [];
const seenKeys: Record<Target, Set<string>> = { sk: new Set(), hu: new Set() };
const dictTotals: Record<Target, { total: number; missing: number }> = {
  sk: { total: 0, missing: 0 },
  hu: { total: 0, missing: 0 },
};

for (const call of trCalls) {
  for (const lang of TARGET_LANGS) {
    const key = lang === 'sk' ? call.cz : call.en;
    if (!key.trim()) continue;
    if (seenKeys[lang].has(key)) continue;
    seenKeys[lang].add(key);
    dictTotals[lang].total += 1;
    const dict = lang === 'sk' ? pageSkTranslations : pageHuTranslations;
    if (!(key in dict)) {
      dictTotals[lang].missing += 1;
      dictGaps.push({ file: call.file, line: call.line, lang, key });
    }
  }
}

/* ------------------------------------------------------------------ */
/*  Report                                                             */
/* ------------------------------------------------------------------ */

const pct = (part: number, total: number) => (total === 0 ? '100,0' : ((part / total) * 100).toFixed(1));
const cover = (t: { total: number; missing: number }) => pct(t.total - t.missing, t.total);

const byFile = new Map<string, DictGap[]>();
for (const g of dictGaps) byFile.set(g.file, [...(byFile.get(g.file) ?? []), g]);

const byModule = new Map<string, MlGap[]>();
for (const g of mlGaps) byModule.set(g.source, [...(byModule.get(g.source) ?? []), g]);

const L: string[] = [];
L.push('# i18n-Lücken — Übersetzungsvorlage für SK und HU');
L.push('');
L.push('Erzeugt von `scripts/i18n-coverage.ts` (`npm run seo:i18n`). Nicht von Hand bearbeiten —');
L.push('der Report wird bei jedem Lauf neu geschrieben.');
L.push('');
L.push('## Wie die Lücken entstehen');
L.push('');
L.push('Beide Übersetzungswege fallen bei fehlendem Text **still** auf eine andere Sprache zurück:');
L.push('');
L.push('```ts');
L.push('// src/i18n/pageTextTranslations.ts');
L.push("if (locale === 'sk') return pageSkTranslations[cz] ?? cz;   // SK → CZ");
L.push('return pageHuTranslations[en] ?? en;                        // HU → EN');
L.push('');
L.push('// scripts/prerender.ts, ml() / mlGuide() / mlText()');
L.push("if (lang === 'sk') return obj.sk ?? obj.cz;");
L.push("if (lang === 'hu') return obj.hu ?? obj.en;");
L.push('```');
L.push('');
L.push('Ein slowakischer Leser versteht den tschechischen Text — deshalb fällt SK niemandem auf.');
L.push('Für Google ist eine SK-Seite mit tschechischem Inhalt und `hreflang="sk"` dagegen ein');
L.push('Widerspruch, der im günstigsten Fall ignoriert und im ungünstigsten als Duplikat gewertet wird.');
L.push('');
L.push('## Abdeckung');
L.push('');
L.push('| Ebene | Sprache | vorhanden | fehlt | Abdeckung |');
L.push('|---|---|---:|---:|---:|');
for (const lang of TARGET_LANGS) {
  const t = mlTotals[lang];
  L.push(`| A · Datenmodule (\`MultiLangText\`) | ${lang.toUpperCase()} | ${t.total - t.missing} | ${t.missing} | **${cover(t)} %** |`);
}
for (const lang of TARGET_LANGS) {
  const t = dictTotals[lang];
  L.push(`| B · Seitentexte (\`tr()\`) | ${lang.toUpperCase()} | ${t.total - t.missing} | ${t.missing} | **${cover(t)} %** |`);
}
L.push('');

if (dynamicCalls.length > 0) {
  L.push('## Eigener Befund: `tr()`-Aufrufe mit dynamischem Text');
  L.push('');
  L.push(`${dynamicCalls.length} \`tr()\`-Aufrufe setzen ihren Text zur Laufzeit zusammen (Template-Literale mit`);
  L.push('`${…}`). Für sie kann es **grundsätzlich keinen** Wörterbucheintrag geben: der Schlüssel entsteht');
  L.push('erst im Browser und trifft nie auf einen statischen Eintrag. Diese Stellen bleiben auf SK und HU');
  L.push('dauerhaft im Fallback, egal wie vollständig die Wörterbücher werden.');
  L.push('');
  L.push('| Datei | Zeile | Aufruf |');
  L.push('|---|---:|---|');
  for (const d of dynamicCalls.slice(0, 60)) {
    L.push(`| \`${d.file}\` | ${d.line} | \`${d.snippet.replace(/\|/g, '\\|')}\` |`);
  }
  if (dynamicCalls.length > 60) L.push(`| … | | ${dynamicCalls.length - 60} weitere |`);
  L.push('');
}

L.push('---');
L.push('');
L.push('# Ebene B — Seitentexte je Datei');
L.push('');
L.push('Der Schlüssel ist gleichzeitig die Übersetzungsvorlage: SK wird über den **tschechischen**,');
L.push('HU über den **englischen** Quelltext nachgeschlagen. Ein neuer Eintrag in');
L.push('`src/i18n/pageTextTranslations.ts` besteht aus genau diesem Schlüssel und der Übersetzung.');
L.push('');
for (const [file, gaps] of [...byFile.entries()].sort((a, b) => b[1].length - a[1].length)) {
  L.push(`## \`${file}\` (${gaps.length})`);
  L.push('');
  for (const lang of TARGET_LANGS) {
    const list = gaps.filter((g) => g.lang === lang);
    if (list.length === 0) continue;
    L.push(`### ${lang.toUpperCase()} — ${list.length} fehlend`);
    L.push('');
    for (const g of list) L.push(`- Zeile ${g.line}: \`${g.key.replace(/`/g, "'")}\``);
    L.push('');
  }
}

L.push('---');
L.push('');
L.push('# Ebene A — Datenmodule');
L.push('');
L.push('Hier fehlt der Schlüssel `sk` bzw. `hu` im `MultiLangText`-Objekt selbst. Der angezeigte Text');
L.push('ist das, was heute stattdessen ausgeliefert wird — also die Vorlage.');
L.push('');
for (const [mod, gaps] of [...byModule.entries()].sort((a, b) => b[1].length - a[1].length)) {
  L.push(`## ${mod} (${gaps.length})`);
  L.push('');
  for (const lang of TARGET_LANGS) {
    const list = gaps.filter((g) => g.lang === lang);
    if (list.length === 0) continue;
    L.push(`### ${lang.toUpperCase()} — ${list.length} fehlend`);
    L.push('');
    L.push('| Pfad im Modul | ausgelieferter Text |');
    L.push('|---|---|');
    for (const g of list.slice(0, 200)) {
      const t = g.fallbackText.replace(/\s+/g, ' ').slice(0, 160).replace(/\|/g, '\\|');
      L.push(`| \`${g.path}\` | ${t}${g.fallbackText.length > 160 ? ' …' : ''} |`);
    }
    if (list.length > 200) L.push(`| … | ${list.length - 200} weitere |`);
    L.push('');
  }
}

const out = join(repoRoot, 'docs/seo/i18n-luecken.md');
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, L.join('\n'), 'utf-8');

console.log('i18n-Abdeckung');
for (const lang of TARGET_LANGS) {
  console.log(`  Datenmodule  ${lang.toUpperCase()}  ${cover(mlTotals[lang]).padStart(6)} %  (${mlTotals[lang].missing} von ${mlTotals[lang].total} fehlen)`);
}
for (const lang of TARGET_LANGS) {
  console.log(`  Seitentexte  ${lang.toUpperCase()}  ${cover(dictTotals[lang]).padStart(6)} %  (${dictTotals[lang].missing} von ${dictTotals[lang].total} fehlen)`);
}
if (dynamicCalls.length > 0) {
  console.log(`  ! ${dynamicCalls.length} tr()-Aufrufe mit dynamischem Text — nicht uebersetzbar`);
}
console.log(`Report: ${out}`);

const totalMissing =
  TARGET_LANGS.reduce((n, l) => n + mlTotals[l].missing + dictTotals[l].missing, 0);
if (process.argv.includes('--fail') && totalMissing > 0) process.exit(1);
