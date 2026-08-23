/**
 * Erzeugt `src/seo/generated/contentDates.ts` aus der Git-Historie.
 *
 * Die Ratgeberseiten brauchen fuer ihr `Article`-Schema `datePublished` und
 * `dateModified` (Masterplan 4.2 Punkt 3). Beides steht in Git — aber nur der
 * Build hat Zugriff darauf, die React-Seiten im Browser nicht. Deshalb wird das
 * Ergebnis als typisiertes Modul in den Quellbaum geschrieben und mitcommittet.
 *
 * Laeuft als Teil von `npm run build` vor `tsc -b`.
 * Faellt die Historie aus (flacher Klon), bleibt das bestehende Modul stehen —
 * committete Daten sind besser als leere.
 */

import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SEO_ROUTES } from '../src/seo/routes';
import type { SeoRouteKey } from '../src/seo/routes';
import { routeDates, hasGit } from './content-lastmod';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = join(__dirname, '..', 'src/seo/generated/contentDates.ts');

const keys = Object.keys(SEO_ROUTES) as SeoRouteKey[];
const dates = new Map<SeoRouteKey, { published: string; modified: string }>();

if (hasGit()) {
  for (const key of keys) {
    const d = routeDates(key);
    if (d.modified) dates.set(key, d);
  }
}

// Zu wenig Ausbeute? Dann das bestehende, committete Modul nicht ueberschreiben.
if (dates.size < keys.length * 0.8) {
  if (existsSync(outPath)) {
    console.log(`contentDates: nur ${dates.size}/${keys.length} Routen datierbar — committetes Modul bleibt.`);
    process.exit(0);
  }
  console.warn(`contentDates: nur ${dates.size}/${keys.length} Routen datierbar und kein committetes Modul vorhanden.`);
}

const body = [...dates]
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([key, d]) => `  ${key}: { ${d.published ? `published: '${d.published}', ` : ''}modified: '${d.modified}' },`)
  .join('\n');

const file = `/**
 * AUTOMATISCH ERZEUGT von scripts/generate-content-dates.ts — nicht bearbeiten.
 *
 * Veroeffentlichungs- und Aenderungsdatum je Route, abgeleitet aus der
 * Git-Historie der inhaltstragenden Dateien. Quelle fuer \`datePublished\` und
 * \`dateModified\` im Article-Schema der Ratgeberseiten.
 */

import type { SeoRouteKey } from '../routes';

export interface ContentDates {
  /**
   * Erster Commit der inhaltstragenden Datei. Fehlt, wenn das Repo flach
   * geklont ist und die Datei schon vor der Historiengrenze existierte —
   * dann waere jedes Datum geraten.
   */
  published?: string;
  modified: string;
}

export const CONTENT_DATES: Partial<Record<SeoRouteKey, ContentDates>> = {
${body}
};
`;

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, file, 'utf-8');
console.log(`contentDates: ${dates.size} Routen nach ${outPath} geschrieben.`);
