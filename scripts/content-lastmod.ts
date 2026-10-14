/**
 * Echtes Änderungsdatum pro Seite (Masterplan 1.5, überarbeitet Oktober 2026).
 *
 * Die Sitemap trug ursprünglich für alle URLs `new Date()` — den
 * Build-Zeitstempel. Ein `lastmod`, das sich bei jedem Deploy für die gesamte
 * Site ändert, ist für Google wertlos; es wird ignoriert.
 *
 * ## Warum Dateidaten allein nicht reichten
 *
 * Die erste Fassung datierte jede Seite mit dem Git-Datum ihrer Quelldateien.
 * Zwei Effekte machten daraus in der Produktion wieder einen Build-Zeitstempel
 * (Befund 14.10.2026, Live-Sitemap):
 *
 *   1. Vercel klont flach (Tiefe 10). Jede Datei, die älter ist als die
 *      Historiengrenze, bekam das Datum des Grenz-Commits — 110 URLs trugen
 *      das Datum eines reinen Search-Console-Report-Commits. Weil der
 *      Report-Workflow wöchentlich committet, wanderte die Grenze jede Woche mit.
 *   2. `src/seo/routes.ts` hält die Metadaten aller 22 statischen Routen. Eine
 *      Änderung an den AGB zog das Datum aller 99 statischen URLs auf denselben Tag.
 *
 * ## Wie es jetzt funktioniert
 *
 * Jede Seite hat einen Fingerprint: Hash über ihren Inhalt — die eigenen Daten
 * als JSON (ein Produkt, ein Route-Eintrag, eine Kategorie) plus die
 * Seitenkomponenten. Der Snapshot `config/content-lastmod.json` speichert je
 * Seite `{ lastmod, hash }`.
 *
 *   Hash unverändert     → Datum aus dem Snapshot. Kein Git nötig, kein Drift.
 *   Hash geändert und …
 *     … Quelle ungespeichert/uncommittet  → jetzt (die Änderung passiert gerade)
 *     … volle Git-Historie                → jüngstes Git-Datum der Quellen; für
 *                                           routes.ts das Datum des eigenen Blocks
 *                                           (`git log -L`), nicht der Datei
 *     … flacher Klon                      → Datum des HEAD-Commits — nie das der
 *                                           Historiengrenze
 *
 * Der Snapshot gehört mit in jeden Commit, der Inhalte ändert — `npm run build`
 * schreibt ihn. Der SEO-Audit-Workflow prüft das bei jedem Pull Request.
 */

import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { SeoRouteKey } from '../src/seo/routes';

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(__dirname, '..');
const snapshotPath = join(repoRoot, 'config/content-lastmod.json');

/* ------------------------------------------------------------------ */
/*  Welche Dateien liefern den Inhalt welcher Seite?                   */
/* ------------------------------------------------------------------ */

const ROUTE_META = 'src/seo/routes.ts';

/**
 * Seitenkomponente und Inhaltsdaten je statischer Route. `routes.ts` steht hier
 * bewusst nicht: der Route-Eintrag geht als JSON in den Fingerprint ein und wird
 * ueber seinen eigenen Block datiert.
 */
export const STATIC_SOURCES: Record<SeoRouteKey, string[]> = {
  // Strukturierte Daten zaehlen fuer Google als Inhalt: Organization und
  // LocalBusiness stehen nur auf Start- und Kontaktseite.
  home: ['src/pages/Home.tsx', 'src/components/home/HeroSlideshow.tsx', 'src/seo/structuredData.ts', 'config/organization-profiles.json'],
  mayer: ['src/pages/MayerPage.tsx', 'src/data/mayerProducts.ts', 'src/data/seo/mayerSeoContent.ts'],
  ott: ['src/pages/OttPage.tsx', 'src/data/ottProducts.ts'],
  barbaric: ['src/pages/BarbaricPage.tsx', 'src/data/barbaricProducts.ts', 'src/data/seo/barbaricSeoContent.ts'],
  gannomat: ['src/pages/GannomatPage.tsx', 'src/data/gannomatProducts.ts', 'src/data/seo/gannomatSeoContent.ts'],
  imaSchelling: ['src/pages/ImaSchellingPage.tsx'],
  financing: ['src/pages/FinancingPage.tsx', 'src/features/financing'],
  solutions: ['src/pages/SolutionsPage.tsx'],
  service: ['src/pages/ServicePage.tsx'],
  usedMachines: ['src/pages/UsedMachinesPage.tsx', 'src/data/usedMachines.ts'],
  usedEdgebanders: ['src/pages/UsedEdgebandersPage.tsx', 'src/data/usedMachines.ts'],
  contact: ['src/pages/ContactPage.tsx', 'src/seo/structuredData.ts', 'config/organization-profiles.json'],
  imprint: ['src/pages/ImprintPage.tsx'],
  privacy: ['src/pages/PrivacyPolicyPage.tsx'],
  terms: ['src/pages/TermsPage.tsx', 'src/data/termsOfSale.ts'],
  faq: ['src/pages/FaqPage.tsx', 'src/data/hub/ratgeberFaqHub.ts'],
  guidePurVsEva: ['src/pages/GuidePurVsEvaPage.tsx'],
  guideEdgebander: ['src/pages/GuideEdgebanderPage.tsx', 'src/data/guides/edgebanderGuide.ts'],
  guideWarehouseAutomation: ['src/pages/GuideWarehouseAutomationPage.tsx'],
  guidePanelSawComparison: ['src/pages/GuidePanelSawComparisonPage.tsx'],
  guideFundingCz: ['src/pages/GuideFundingCzPage.tsx'],
  guideVacuumLifter: ['src/pages/GuideVacuumLifterPage.tsx'],
};

/** Seitenvorlage der Produktdetailseiten je Marke (geht in den Fingerprint ein). */
export const PRODUCT_TEMPLATES: Record<string, string> = {
  ott: 'src/pages/OttProductPage.tsx',
  mayer: 'src/pages/MayerProductPage.tsx',
  barbaric: 'src/pages/BarbaricProductPage.tsx',
  gannomat: 'src/pages/GannomatProductPage.tsx',
};

/**
 * Datendateien je Marke. Nur fuer die Datierung: der Teil, der zu einem
 * Produkt gehoert, steckt schon als JSON im Fingerprint — so aendert eine neue
 * Zeile bei Produkt A nicht das Datum von Produkt B.
 */
export const BRAND_DATA: Record<string, string[]> = {
  ott: ['src/data/ottProducts.ts', 'src/data/seo/ottSeoContent.ts'],
  mayer: ['src/data/mayerProducts.ts', 'src/data/seo/mayerSeoContent.ts'],
  barbaric: ['src/data/barbaricProducts.ts', 'src/data/seo/barbaricSeoContent.ts'],
  gannomat: ['src/data/gannomatProducts.ts', 'src/data/seo/gannomatSeoContent.ts'],
};

export const CATEGORY_TEMPLATE = ['src/pages/CategoryPage.tsx', 'src/components/seo/CategorySeoBlock.tsx'];
export const CATEGORY_DATA = ['src/seo/categoryMeta.ts', 'src/data/ottCategoryMeta.ts', 'src/data/seo/ottEdgebandingAbs.ts'];
export const USED_MACHINE_TEMPLATE = ['src/pages/UsedMachineDetailPage.tsx'];
export const USED_MACHINE_DATA = ['src/data/usedMachines.ts'];

/* ------------------------------------------------------------------ */
/*  Git                                                                */
/* ------------------------------------------------------------------ */

const git = (args: string[]): string => {
  try {
    return execFileSync('git', args, {
      cwd: repoRoot,
      encoding: 'utf-8',
      stdio: ['ignore', 'pipe', 'ignore'],
      maxBuffer: 64 * 1024 * 1024,
    }).trim();
  } catch {
    return '';
  }
};

export const hasGit = (): boolean => git(['rev-parse', '--git-dir']) !== '';

const isShallow = (): boolean => git(['rev-parse', '--is-shallow-repository']) === 'true';

/** ISO-Datum einheitlich in UTC ohne Millisekunden — sonst vergleichen Strings falsch. */
const toUtc = (iso: string): string => (iso ? new Date(iso).toISOString().replace(/\.\d{3}Z$/, 'Z') : '');

/**
 * Datum des aeltesten *verfuegbaren* Commits.
 *
 * In einem flachen Klon ist das die Grenze der Historie, nicht der Projektstart.
 * Jede Datei, die schon vor dieser Grenze existierte, sieht in `git log --reverse`
 * so aus, als waere sie an genau diesem Tag entstanden. Ein `datePublished` daraus
 * waere schlicht falsch — deshalb wird es in dem Fall weggelassen.
 */
let historyBoundary: string | null = null;
const boundaryDate = (): string => {
  if (historyBoundary === null) {
    historyBoundary = isShallow() ? (git(['log', '--reverse', '--format=%cI']).split('\n')[0]?.trim() ?? '') : '';
  }
  return historyBoundary;
};

const dateCache = new Map<string, string>();
const fileDate = (path: string): string => {
  const cached = dateCache.get(path);
  if (cached !== undefined) return cached;
  const iso = git(['log', '-1', '--format=%cI', '--', path]);
  dateCache.set(path, iso);
  return iso;
};

const firstDateCache = new Map<string, string>();
/** Datum des ersten Commits, der die Datei angelegt hat — Naeherung fuer `datePublished`. */
const firstDate = (path: string): string => {
  const cached = firstDateCache.get(path);
  if (cached !== undefined) return cached;
  const log = git(['log', '--reverse', '--format=%cI', '--', path]);
  const iso = log.split('\n')[0]?.trim() ?? '';
  firstDateCache.set(path, iso);
  return iso;
};

/** Block eines Route-Eintrags in routes.ts: von `  key: {` bis zur passenden `  },`. */
const routeBlock = (source: string, key: string): string =>
  source.match(new RegExp(`^  ${key}: \\{$[\\s\\S]*?^  \\},$`, 'm'))?.[0] ?? '';

/** Letzter Commit, der den Block dieser Route in routes.ts geaendert hat. */
const routeBlockDate = (key: string): string => {
  const out = git(['log', '-1', '--format=%cI', '-s', '-L', `/^  ${key}: {$/,/^  },$/:${ROUTE_META}`]);
  return out.split('\n').find((l) => /^\d{4}-\d{2}-\d{2}T/.test(l)) ?? '';
};

/* ------------------------------------------------------------------ */
/*  Fingerprint                                                        */
/* ------------------------------------------------------------------ */

const listFiles = (dir: string): string[] =>
  readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? listFiles(join(dir, e.name)) : e.isFile() ? [join(dir, e.name)] : [],
  );

const contentCache = new Map<string, string>();
/** Dateiinhalt; bei Verzeichnissen alle Dateien darunter, sortiert. */
const readContent = (path: string): string => {
  const cached = contentCache.get(path);
  if (cached !== undefined) return cached;
  const abs = join(repoRoot, path);
  let content = '';
  if (existsSync(abs)) {
    content = statSync(abs).isDirectory()
      ? listFiles(abs)
          .sort()
          .map((f) => readFileSync(f, 'utf-8'))
          .join('\0')
      : readFileSync(abs, 'utf-8');
  }
  contentCache.set(path, content);
  return content;
};

/* ------------------------------------------------------------------ */
/*  Öffentliche API                                                    */
/* ------------------------------------------------------------------ */

export type LastmodKey = string;

export const staticKey = (route: SeoRouteKey): LastmodKey => `static:${route}`;
export const productKey = (brand: string, slug: string): LastmodKey => `product:${brand}:${slug}`;
export const categoryKey = (brand: string, category: string): LastmodKey => `category:${brand}:${category}`;
export const usedMachineKey = (slug: string): LastmodKey => `used:${slug}`;

export interface LastmodItem {
  key: LastmodKey;
  /** Der eigene Inhalt als Text, meist JSON der Daten — Kern des Fingerprints. */
  material: string;
  /** Seitenkomponenten und Vorlagen: gehen mit Inhalt in den Fingerprint ein. */
  files: string[];
  /** Dateien, die nur fuer die Datierung zaehlen (ihr Anteil steckt im `material`). */
  dataFiles?: string[];
  /** Statische Route: datiert ihren Block in routes.ts statt der ganzen Datei. */
  routeKey?: SeoRouteKey;
}

type SnapshotEntry = { lastmod: string; hash: string };
type Snapshot = { $comment?: unknown; generatedFrom?: string; entries: Record<string, SnapshotEntry | string> };

const readSnapshot = (): Record<string, SnapshotEntry> => {
  if (!existsSync(snapshotPath)) return {};
  try {
    const raw = (JSON.parse(readFileSync(snapshotPath, 'utf-8')) as Snapshot).entries ?? {};
    // Altes Format (nur Datum, ohne Hash) — gilt als „geaendert" und wird neu datiert.
    return Object.fromEntries(
      Object.entries(raw).map(([k, v]) => [k, typeof v === 'string' ? { lastmod: v, hash: '' } : v]),
    );
  } catch {
    return {};
  }
};

export interface LastmodTable {
  /** ISO-Datum fuer einen Schluessel; leer, wenn unbekannt. */
  get(key: LastmodKey): string;
  /** Seiten, deren Inhalt sich gegenueber dem Snapshot geaendert hat. */
  changed: LastmodKey[];
  /** Woher neu ermittelte Daten stammen — fuer die Build-Ausgabe. */
  dating: 'git' | 'head-commit' | 'ohne-git';
  /** Anzahl unterschiedlicher Datumswerte. */
  distinctDates: number;
}

/** Baut die Tabelle und schreibt den Snapshot (`config/content-lastmod.json`). */
export function buildLastmodTable(items: LastmodItem[]): LastmodTable {
  const snapshot = readSnapshot();
  const gitAvailable = hasGit();
  const deep = gitAvailable && !isShallow();
  const now = toUtc(new Date().toISOString());
  const head = gitAvailable ? toUtc(git(['log', '-1', '--format=%cI'])) : '';

  // Ungespeicherte Aenderungen: `git status` einmal fuer alles.
  const dirty = new Set(
    gitAvailable
      ? git(['status', '--porcelain', '--untracked-files=all'])
          .split('\n')
          .filter(Boolean)
          .map((l) => l.slice(3).replace(/^.* -> /, '').replace(/^"|"$/g, ''))
      : [],
  );
  const isDirty = (path: string) => [...dirty].some((d) => d === path || d.startsWith(`${path}/`));
  const headRoutes = dirty.has(ROUTE_META) ? git(['show', `HEAD:${ROUTE_META}`]) : '';
  const routeDirty = (key: string) =>
    dirty.has(ROUTE_META) && routeBlock(headRoutes, key) !== routeBlock(readContent(ROUTE_META), key);

  const changedDate = (item: LastmodItem): string => {
    const all = [...item.files, ...(item.dataFiles ?? [])];
    if (all.some(isDirty) || (item.routeKey && routeDirty(item.routeKey))) return now;
    if (deep) {
      const dates = all.map(fileDate);
      if (item.routeKey) dates.push(routeBlockDate(item.routeKey));
      const newest = dates.filter(Boolean).map(toUtc).sort().at(-1);
      if (newest) return newest;
    }
    // Flacher Klon: der HEAD-Commit enthaelt die Aenderung sicher, die
    // Historiengrenze nicht. Ohne Git bleibt nur der Build-Zeitpunkt.
    return head || now;
  };

  const entries: Record<string, SnapshotEntry> = {};
  const changed: LastmodKey[] = [];
  for (const item of items) {
    const hash = createHash('sha1')
      .update(item.material)
      .update('\0')
      .update(item.files.map(readContent).join('\0'))
      .digest('hex')
      .slice(0, 16);
    const prev = snapshot[item.key];
    if (prev && prev.hash === hash && prev.lastmod) {
      entries[item.key] = { lastmod: toUtc(prev.lastmod), hash };
      continue;
    }
    entries[item.key] = { lastmod: changedDate(item), hash };
    changed.push(item.key);
  }

  mkdirSync(dirname(snapshotPath), { recursive: true });
  const out: Snapshot = {
    $comment: [
      'Automatisch erzeugt von scripts/content-lastmod.ts bei jedem Build — nicht von Hand bearbeiten.',
      'Je Seite das Datum der letzten Inhaltsaenderung und ein Fingerprint des Inhalts. Solange der',
      'Fingerprint gleich bleibt, bleibt das Datum — auch im flachen Klon bei Vercel.',
      'Nach einem Build mit geaenderten Inhalten mitcommitten (CI prueft das).',
    ],
    generatedFrom: 'sha1 je Seite ueber Daten-JSON und Seitenkomponenten; Datum bei Aenderung aus Git bzw. Build',
    entries: Object.fromEntries(Object.entries(entries).sort(([a], [b]) => a.localeCompare(b))),
  };
  writeFileSync(snapshotPath, `${JSON.stringify(out, null, 2)}\n`, 'utf-8');

  return {
    get: (key) => entries[key]?.lastmod ?? '',
    changed,
    dating: deep ? 'git' : gitAvailable ? 'head-commit' : 'ohne-git',
    distinctDates: new Set(Object.values(entries).map((e) => e.lastmod)).size,
  };
}

/** Datum aus dem Snapshot — fuer Skripte, die nach der Sitemap laufen. */
export const snapshotLastmod = (key: LastmodKey): string => readSnapshot()[key]?.lastmod ?? '';

/** Aeltester Zeitstempel aller beitragenden Dateien. */
const oldest = (paths: string[]): string => {
  let best = '';
  for (const p of paths) {
    const d = firstDate(p);
    if (d && (!best || toUtc(d) < toUtc(best))) best = d;
  }
  return best;
};

/**
 * Veroeffentlichungs- und Aenderungsdatum je statischer Route.
 * Genutzt fuer das `Article`-Schema der Ratgeberseiten (Masterplan 4.2 Punkt 3).
 * `published` ist das Datum des ersten Commits der Seitenkomponente — die beste
 * Naeherung, die das Repo hergibt, und ehrlicher als ein erfundenes Datum.
 * `modified` ist derselbe Wert wie `<lastmod>` in der Sitemap.
 */
export function routeDates(route: SeoRouteKey): { published: string; modified: string } {
  const published = oldest(STATIC_SOURCES[route] ?? []);
  const boundary = boundaryDate();
  return {
    // Faellt das ermittelte Datum mit der Historiengrenze zusammen, ist es nicht
    // belastbar — dann lieber kein datePublished als ein falsches.
    published: boundary && published === boundary ? '' : published,
    modified: snapshotLastmod(staticKey(route)),
  };
}
