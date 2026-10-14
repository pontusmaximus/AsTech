/**
 * Meldet geaenderte URLs per IndexNow (https://www.indexnow.org).
 *
 * „Geaendert" heisst: neu in der Sitemap, mit neuem `<lastmod>` oder aus der
 * Sitemap verschwunden (verkaufte Maschine, umbenannter Slug — IndexNow nimmt
 * auch Loeschungen an). Verglichen wird die Sitemap eines frueheren Stands mit
 * der jetzigen. Weil `<lastmod>` aus Inhalts-Fingerprints entsteht
 * (scripts/content-lastmod.ts), meldet ein Deploy ohne Inhaltsaenderung nichts.
 *
 *   npx tsx scripts/indexnow.ts --from <git-ref> --to <git-ref>|live
 *   npx tsx scripts/indexnow.ts --since-last-production --to live --submit   # so laeuft es in CI
 *   npx tsx scripts/indexnow.ts --all --to live --submit                     # einmalig alles
 *
 * Ohne `--submit` wird nur aufgelistet. Mit `--submit` prueft das Skript zuerst,
 * dass die Schluesseldatei live erreichbar ist — sonst lehnt api.indexnow.org
 * die Meldung ohnehin ab.
 *
 * `--since-last-production` sucht ueber die GitHub-API den letzten erfolgreichen
 * Produktions-Deploy vor dem aktuellen (Umgebungsvariablen GITHUB_TOKEN,
 * GITHUB_REPOSITORY, DEPLOY_SHA, DEPLOY_ENVIRONMENT — im Workflow gesetzt).
 */

import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(__dirname, '..');

const config = JSON.parse(readFileSync(join(repoRoot, 'config/indexnow.json'), 'utf-8')) as {
  host: string;
  key: string;
  keyLocation: string;
};

const ENDPOINT = 'https://api.indexnow.org/indexnow';
const SITEMAP_URL = `https://${config.host}/sitemap.xml`;
/** Obergrenze je Anfrage laut Protokoll. */
const BATCH = 10_000;

const args = process.argv.slice(2);
const arg = (name: string): string | undefined => {
  const i = args.indexOf(name);
  return i >= 0 ? args[i + 1] : undefined;
};
const submit = args.includes('--submit');

/* ------------------------------------------------------------------ */
/*  Sitemaps lesen                                                     */
/* ------------------------------------------------------------------ */

type Entries = Map<string, string>; // loc → lastmod

const parseSitemap = (xml: string): Entries =>
  new Map(
    [...xml.matchAll(/<url>\s*<loc>([^<]+)<\/loc>\s*(?:<lastmod>([^<]*)<\/lastmod>)?/g)].map((m) => [m[1], m[2] ?? '']),
  );

const sitemapAt = async (ref: string): Promise<Entries> => {
  if (ref === 'live') {
    const res = await fetch(SITEMAP_URL, { headers: { 'cache-control': 'no-cache' } });
    if (!res.ok) throw new Error(`${SITEMAP_URL} antwortet mit ${res.status}`);
    return parseSitemap(await res.text());
  }
  const xml = execFileSync('git', ['show', `${ref}:public/sitemap.xml`], {
    cwd: repoRoot,
    encoding: 'utf-8',
    maxBuffer: 64 * 1024 * 1024,
  });
  return parseSitemap(xml);
};

/** Letzter erfolgreicher Produktions-Deploy vor dem aktuellen — ueber die GitHub-API. */
async function lastProductionSha(): Promise<string | null> {
  const { GITHUB_TOKEN, GITHUB_REPOSITORY, DEPLOY_SHA, DEPLOY_ENVIRONMENT } = process.env;
  if (!GITHUB_TOKEN || !GITHUB_REPOSITORY || !DEPLOY_ENVIRONMENT) {
    throw new Error('--since-last-production braucht GITHUB_TOKEN, GITHUB_REPOSITORY und DEPLOY_ENVIRONMENT');
  }
  const api = async <T>(path: string): Promise<T> => {
    const res = await fetch(`https://api.github.com/repos/${GITHUB_REPOSITORY}${path}`, {
      headers: { authorization: `Bearer ${GITHUB_TOKEN}`, accept: 'application/vnd.github+json' },
    });
    if (!res.ok) throw new Error(`GitHub-API ${path}: ${res.status}`);
    return (await res.json()) as T;
  };
  const deployments = await api<{ id: number; sha: string }[]>(
    `/deployments?environment=${encodeURIComponent(DEPLOY_ENVIRONMENT)}&per_page=30`,
  );
  for (const d of deployments) {
    if (d.sha === DEPLOY_SHA) continue;
    const statuses = await api<{ state: string }[]>(`/deployments/${d.id}/statuses`);
    if (statuses.some((s) => s.state === 'success')) return d.sha;
  }
  return null;
}

/* ------------------------------------------------------------------ */
/*  Melden                                                             */
/* ------------------------------------------------------------------ */

async function keyIsLive(): Promise<boolean> {
  try {
    const res = await fetch(config.keyLocation);
    return res.ok && (await res.text()).trim() === config.key;
  } catch {
    return false;
  }
}

async function send(urls: string[]): Promise<void> {
  for (let i = 0; i < urls.length; i += BATCH) {
    const urlList = urls.slice(i, i + BATCH);
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'content-type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ host: config.host, key: config.key, keyLocation: config.keyLocation, urlList }),
    });
    // 200 = angenommen, 202 = angenommen, Schluessel wird noch geprueft.
    if (res.status !== 200 && res.status !== 202) {
      throw new Error(`IndexNow antwortet mit ${res.status}: ${await res.text()}`);
    }
    console.log(`  ${urlList.length} URLs gemeldet (HTTP ${res.status})`);
  }
}

/* ------------------------------------------------------------------ */
/*  Ablauf                                                             */
/* ------------------------------------------------------------------ */

const toRef = arg('--to') ?? 'HEAD';
const current = await sitemapAt(toRef);

let urls: string[];
if (args.includes('--all')) {
  urls = [...current.keys()];
  console.log(`Alle ${urls.length} URLs der Sitemap (${toRef}).`);
} else {
  const fromRef = args.includes('--since-last-production') ? await lastProductionSha() : arg('--from');
  if (!fromRef) {
    console.log('Kein Vergleichsstand (erster Produktions-Deploy?) — nichts gemeldet. Einmalig: --all --to live --submit');
    process.exit(0);
  }
  const previous = await sitemapAt(fromRef);
  const added = [...current.keys()].filter((u) => !previous.has(u));
  // Zeitpunkte vergleichen, nicht Zeichenketten: 13:14+02:00 und 11:14Z sind dasselbe.
  const sameInstant = (a = '', b = '') => a === b || (Date.parse(a) === Date.parse(b) && !Number.isNaN(Date.parse(a)));
  const updated = [...current].filter(([u, d]) => previous.has(u) && !sameInstant(previous.get(u), d)).map(([u]) => u);
  const removed = [...previous.keys()].filter((u) => !current.has(u));
  urls = [...added, ...updated, ...removed];
  console.log(`Vergleich ${fromRef} → ${toRef}: ${added.length} neu, ${updated.length} geaendert, ${removed.length} entfernt.`);
}

for (const u of urls.slice(0, 50)) console.log(`  ${u}`);
if (urls.length > 50) console.log(`  … und ${urls.length - 50} weitere`);

if (!submit) {
  console.log('Trockenlauf — mit --submit wird gemeldet.');
  process.exit(0);
}
if (urls.length === 0) {
  console.log('Nichts zu melden.');
  process.exit(0);
}
if (!(await keyIsLive())) {
  console.error(`Schluesseldatei ${config.keyLocation} ist nicht erreichbar oder falsch — Meldung abgebrochen.`);
  process.exit(1);
}
await send(urls);
