/**
 * `curl -sIL` gegen `vercel.json` und `dist/` — ohne Deployment.
 *
 * Folgt fuer jede URL den Weiterleitungen in der Reihenfolge, in der Vercel sie
 * auswertet (`trailingSlash`, dann `redirects`, dann Dateisystem), und meldet
 * je Sprung Status und Ziel. Am Ende steht 200, wenn es fuer den Pfad eine
 * prerenderte Datei gibt, sonst 404.
 *
 * Akzeptanz aus der Redirect-Aufgabe (Oktober 2026): genau eine Weiterleitung,
 * danach 200.
 *
 *   npx tsx scripts/check-redirect-hops.ts                # Standardliste
 *   npx tsx scripts/check-redirect-hops.ts /pfad /pfad2   # eigene URLs
 *   npx tsx scripts/check-redirect-hops.ts --config alt.json   # z. B. vercel.json von main
 *   npx tsx scripts/check-redirect-hops.ts --fail         # Exit 1 bei Abweichung
 *
 * Was die Simulation nicht sieht: die Vercel-Firewall (sie antwortet auf
 * `/index.php` heute mit 403, `x-vercel-mitigated: deny`) und Domain-Weiterleitungen
 * wie www → ohne www. Nach dem Deploy deshalb zusaetzlich echt pruefen:
 *   curl -sIL https://asamer.cz/index.php | grep -E '^HTTP|^location'
 */

import { existsSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { CANONICAL_DOMAIN } from '../src/lib/language';
import { loadVercelConfig, VercelRouter } from './seo-vercel-routes';

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(__dirname, '..');
const distDir = join(repoRoot, 'dist');

const args = process.argv.slice(2);
const configIdx = args.indexOf('--config');
const configPath = configIdx >= 0 ? args[configIdx + 1] : join(repoRoot, 'vercel.json');
const fail = args.includes('--fail');
const explicit = args.filter((a, i) => a.startsWith('/') && args[i - 1] !== '--config');

/** Die URLs aus der Aufgabe: verkaufte Maschinen, alte /products/-Pfade, /index.php. */
const DEFAULT_URLS = [
  '/cz/pouzite-stroje/holz-her-1308xl-power',
  '/cz/pouzite-stroje/holz-her-1308xl-power/',
  '/en/used-machines/scm-stefani-solution-md',
  '/en/used-machines/scm-stefani-solution-md/',
  '/de/pouzite-stroje/holz-her-1308xl-power',
  '/products/olepovacky-ott',
  '/products/olepovacky-ott/',
  '/products/olepovacky-ott/ott-tornado/',
  '/products/pily-schelling/',
  '/products/',
  '/products/neznamy-produkt/',
  '/second-hand/',
  '/index.php',
];

const urls = explicit.length > 0 ? explicit : DEFAULT_URLS;
const router = new VercelRouter(loadVercelConfig(configPath));

const fileExists = (pathname: string): boolean => {
  const direct = join(distDir, pathname);
  if (existsSync(direct) && statSync(direct).isFile()) return true;
  return existsSync(join(distDir, pathname, 'index.html'));
};

let deviations = 0;
for (const url of urls) {
  const lines: string[] = [];
  let path = url;
  let hops = 0;
  for (; hops < 10; hops += 1) {
    const hop = router.nextHop(path);
    if (!hop) break;
    lines.push(`HTTP ${hop.status}  location: ${hop.location}`);
    const next = new URL(hop.location, CANONICAL_DOMAIN);
    if (next.origin !== CANONICAL_DOMAIN) {
      lines.push(`(verlaesst ${CANONICAL_DOMAIN} — Simulation endet)`);
      break;
    }
    path = next.pathname;
  }
  const status = fileExists(path) ? 200 : 404;
  lines.push(`HTTP ${status}`);
  const ok = hops === 1 && status === 200;
  if (!ok) deviations += 1;
  console.log(`${ok ? '✓' : '✗'} ${url}  (${hops} Weiterleitung${hops === 1 ? '' : 'en'})`);
  for (const l of lines) console.log(`    ${l}`);
}

console.log(`\n${urls.length} URLs, ${deviations} mit mehr oder weniger als einer Weiterleitung bzw. ohne 200 am Ende.`);
if (fail && deviations > 0) process.exit(1);
