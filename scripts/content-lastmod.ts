/**
 * Echtes Änderungsdatum pro Seite (Masterplan 1.5).
 *
 * Die Sitemap trug bisher für alle 605 URLs `new Date()` — den Build-Zeitstempel.
 * Ein `lastmod`, das sich bei jedem Deploy für die gesamte Site ändert, ist für
 * Google wertlos; es wird ignoriert. Gebraucht wird das Datum, an dem sich der
 * *Inhalt* der jeweiligen Seite zuletzt geändert hat.
 *
 * Quelle ist deshalb der Git-Zeitstempel der Dateien, die den Inhalt einer Seite
 * tatsächlich liefern — nicht der des Build-Laufs und nicht der des Prerenderers
 * (der würde bei jeder Formatierungsänderung alle 605 Daten hochziehen).
 *
 * Problem beim Deploy: Vercel klont flach. `git log` liefert dort je nach
 * Klon-Tiefe fuer alle Dateien denselben oder gar keinen Zeitstempel — also
 * genau das, was hier abgeschafft werden soll. Statt die Tiefe zu raten wird
 * das Ergebnis bewertet:
 *
 *   Git liefert genug Abdeckung und genug verschiedene Daten
 *       → daraus rechnen und `config/content-lastmod.json` mitschreiben
 *   sonst
 *       → den committeten Snapshot lesen
 *
 * Der Snapshot wird bei jedem Build mit brauchbarer Historie aktualisiert und
 * gehoert mit in den Commit.
 *
 * Granularitaet: Produktdaten liegen je Marke in *einer* grossen Datei, deshalb
 * teilen sich alle Produkte einer Marke ein Datum. Feiner ginge es nur ueber
 * `git blame` auf Zeilenbereiche — das ist gegenueber dem Nutzen zu fragil.
 * Sobald Inhalte in kleinere Dateien wandern, wird die Aufloesung automatisch
 * besser, ohne dass hier etwas zu aendern waere.
 */

import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
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

/** Statische Seiten: Route-Metadaten + Seitenkomponente + ggf. Inhaltsdaten. */
const STATIC_SOURCES: Record<SeoRouteKey, string[]> = {
  home: [ROUTE_META, 'src/pages/Home.tsx', 'src/components/home/HeroSlideshow.tsx'],
  mayer: [ROUTE_META, 'src/pages/MayerPage.tsx', 'src/data/mayerProducts.ts', 'src/data/seo/mayerSeoContent.ts'],
  ott: [ROUTE_META, 'src/pages/OttPage.tsx', 'src/data/ottProducts.ts', 'src/data/seo/ottSeoContent.ts'],
  barbaric: [ROUTE_META, 'src/pages/BarbaricPage.tsx', 'src/data/barbaricProducts.ts', 'src/data/seo/barbaricSeoContent.ts'],
  gannomat: [ROUTE_META, 'src/pages/GannomatPage.tsx', 'src/data/gannomatProducts.ts', 'src/data/seo/gannomatSeoContent.ts'],
  imaSchelling: [ROUTE_META, 'src/pages/ImaSchellingPage.tsx'],
  financing: [ROUTE_META, 'src/pages/FinancingPage.tsx', 'src/features/financing'],
  solutions: [ROUTE_META, 'src/pages/SolutionsPage.tsx'],
  service: [ROUTE_META, 'src/pages/ServicePage.tsx'],
  usedMachines: [ROUTE_META, 'src/pages/UsedMachinesPage.tsx', 'src/data/usedMachines.ts'],
  contact: [ROUTE_META, 'src/pages/ContactPage.tsx'],
  imprint: [ROUTE_META, 'src/pages/ImprintPage.tsx'],
  privacy: [ROUTE_META, 'src/pages/PrivacyPolicyPage.tsx'],
  terms: [ROUTE_META, 'src/pages/TermsPage.tsx'],
  faq: [ROUTE_META, 'src/pages/FaqPage.tsx', 'src/data/hub/ratgeberFaqHub.ts'],
  guidePurVsEva: [ROUTE_META, 'src/pages/GuidePurVsEvaPage.tsx'],
  guideEdgebander: [ROUTE_META, 'src/pages/GuideEdgebanderPage.tsx', 'src/data/guides/edgebanderGuide.ts'],
  guideWarehouseAutomation: [ROUTE_META, 'src/pages/GuideWarehouseAutomationPage.tsx'],
  guidePanelSawComparison: [ROUTE_META, 'src/pages/GuidePanelSawComparisonPage.tsx'],
  guideFundingCz: [ROUTE_META, 'src/pages/GuideFundingCzPage.tsx'],
  guideVacuumLifter: [ROUTE_META, 'src/pages/GuideVacuumLifterPage.tsx'],
};

/** Produktdetailseiten je Marke. */
const BRAND_SOURCES: Record<string, string[]> = {
  ott: ['src/data/ottProducts.ts', 'src/data/seo/ottSeoContent.ts', 'src/pages/OttProductPage.tsx'],
  mayer: ['src/data/mayerProducts.ts', 'src/data/seo/mayerSeoContent.ts', 'src/pages/MayerProductPage.tsx'],
  barbaric: ['src/data/barbaricProducts.ts', 'src/data/seo/barbaricSeoContent.ts', 'src/pages/BarbaricProductPage.tsx'],
  gannomat: ['src/data/gannomatProducts.ts', 'src/data/seo/gannomatSeoContent.ts', 'src/pages/GannomatProductPage.tsx'],
};

const USED_MACHINE_SOURCES = ['src/data/usedMachines.ts', 'src/pages/UsedMachineDetailPage.tsx'];

/* ------------------------------------------------------------------ */
/*  Git                                                                */
/* ------------------------------------------------------------------ */

const git = (args: string[]): string => {
  try {
    return execFileSync('git', args, { cwd: repoRoot, encoding: 'utf-8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
  } catch {
    return '';
  }
};

export const hasGit = (): boolean => git(['rev-parse', '--git-dir']) !== '';

const isShallow = (): boolean => git(['rev-parse', '--is-shallow-repository']) === 'true';

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

/**
 * Ab wann ist ein Git-Ergebnis brauchbar?
 *
 * Ein flacher Klon mit Tiefe 1 — wie ihn Vercel im Standardfall anlegt — liefert
 * fuer jede Datei denselben oder gar keinen Zeitstempel. Genau das soll dieses
 * Modul ja abschaffen. Statt die Klon-Tiefe zu raten wird das *Ergebnis*
 * bewertet: genug Abdeckung und genug unterschiedliche Daten, sonst Snapshot.
 */
const MIN_COVERAGE = 0.8;
const MIN_DISTINCT_DATES = 3;

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

/** Aeltester Zeitstempel aller beitragenden Dateien. */
const oldest = (paths: string[]): string => {
  let best = '';
  for (const p of paths) {
    const d = firstDate(p);
    if (d && (!best || d < best)) best = d;
  }
  return best;
};

/** Jüngster Zeitstempel aller beitragenden Dateien. */
const newest = (paths: string[]): string => {
  let best = '';
  for (const p of paths) {
    const d = fileDate(p);
    if (d && d > best) best = d;
  }
  return best;
};

/* ------------------------------------------------------------------ */
/*  Öffentliche API                                                    */
/* ------------------------------------------------------------------ */

export type LastmodKey = string;

export const staticKey = (route: SeoRouteKey): LastmodKey => `static:${route}`;
export const productKey = (brand: string, slug: string): LastmodKey => `product:${brand}:${slug}`;
export const usedMachineKey = (slug: string): LastmodKey => `used:${slug}`;

/**
 * Veroeffentlichungs- und Aenderungsdatum je statischer Route.
 * Genutzt fuer das `Article`-Schema der Ratgeberseiten (Masterplan 4.2 Punkt 3).
 * `published` ist das Datum des ersten Commits der Seitenkomponente — die beste
 * Naeherung, die das Repo hergibt, und ehrlicher als ein erfundenes Datum.
 */
export function routeDates(route: SeoRouteKey): { published: string; modified: string } {
  const sources = STATIC_SOURCES[route] ?? [ROUTE_META];
  // Route-Metadaten fliessen nicht in `published` ein: routes.ts existiert seit
  // dem ersten Commit und wuerde jede Seite auf denselben Tag datieren.
  const contentSources = sources.filter((p) => p !== ROUTE_META);
  const published = oldest(contentSources.length > 0 ? contentSources : sources);
  const boundary = boundaryDate();
  return {
    // Faellt das ermittelte Datum mit der Historiengrenze zusammen, ist es nicht
    // belastbar — dann lieber kein datePublished als ein falsches.
    published: boundary && published === boundary ? '' : published,
    modified: newest(sources),
  };
}

type Snapshot = { $comment?: unknown; generatedFrom?: string; entries: Record<string, string> };

const readSnapshot = (): Record<string, string> => {
  if (!existsSync(snapshotPath)) return {};
  try {
    return (JSON.parse(readFileSync(snapshotPath, 'utf-8')) as Snapshot).entries ?? {};
  } catch {
    return {};
  }
};

export interface LastmodTable {
  /** ISO-Datum für einen Schlüssel; leer, wenn unbekannt. */
  get(key: LastmodKey): string;
  /** Woher die Werte stammen — für die Build-Ausgabe. */
  source: 'git' | 'snapshot';
  /** Anzahl unterschiedlicher Datumswerte — die Kennzahl aus Akzeptanzkriterium 1.5. */
  distinctDates: number;
}

/**
 * Baut die Tabelle für alle bekannten Seiten.
 *
 * `brands` und `usedMachineSlugs` werden übergeben statt hier importiert,
 * damit dieses Modul nicht die 1,5 MB Produktdaten mitzieht, wenn nur der
 * Snapshot gelesen wird.
 */
export function buildLastmodTable(input: {
  products: { brand: string; slug: string }[];
  usedMachineSlugs: string[];
  routeKeys: SeoRouteKey[];
}): LastmodTable {
  const keys: string[] = [
    ...input.routeKeys.map(staticKey),
    ...input.products.map((p) => productKey(p.brand, p.slug)),
    ...input.usedMachineSlugs.map(usedMachineKey),
  ];

  let entries: Record<string, string> = {};
  let source: 'git' | 'snapshot' = 'snapshot';

  if (hasGit()) {
    const fromGit: Record<string, string> = {};
    for (const key of input.routeKeys) fromGit[staticKey(key)] = newest(STATIC_SOURCES[key] ?? [ROUTE_META]);
    for (const { brand, slug } of input.products) fromGit[productKey(brand, slug)] = newest(BRAND_SOURCES[brand] ?? []);
    for (const slug of input.usedMachineSlugs) fromGit[usedMachineKey(slug)] = newest(USED_MACHINE_SOURCES);

    const dated = keys.filter((k) => fromGit[k]).length;
    const distinct = new Set(Object.values(fromGit).filter(Boolean)).size;

    if (dated / Math.max(1, keys.length) >= MIN_COVERAGE && distinct >= MIN_DISTINCT_DATES) {
      entries = fromGit;
      source = 'git';

      // Snapshot mitschreiben, damit ein Build ohne brauchbare Historie
      // (flacher Klon bei Vercel) dieselben Werte benutzt.
      mkdirSync(dirname(snapshotPath), { recursive: true });
      const snapshot: Snapshot = {
        $comment: [
          'Automatisch erzeugt von scripts/content-lastmod.ts, wenn die Git-Historie brauchbare',
          'Aenderungsdaten liefert. Wird von scripts/generate-sitemap.ts als <lastmod> benutzt, wenn',
          'das im Build nicht der Fall ist (z. B. flacher Klon bei Vercel).',
          'Nicht von Hand bearbeiten — nach einem lokalen Build mitcommitten.',
        ],
        generatedFrom: 'git log -1 --format=%cI je beitragender Inhaltsdatei',
        entries: Object.fromEntries(Object.entries(fromGit).sort(([a], [b]) => a.localeCompare(b))),
      };
      writeFileSync(snapshotPath, `${JSON.stringify(snapshot, null, 2)}\n`, 'utf-8');
    }
  }

  if (source === 'snapshot') entries = readSnapshot();

  const values = new Set(Object.values(entries).filter(Boolean));
  return {
    get: (key) => entries[key] ?? '',
    source,
    distinctDates: values.size,
  };
}
