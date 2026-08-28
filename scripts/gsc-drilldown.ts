/**
 * Ad-hoc-Drilldown in die Search-Console-Daten: tagesgenauer Verlauf für eine
 * Suchanfragen-Gruppe (Regex) und eine einzelne Seite. Gebaut, um Ranking-
 * Einbrüche zu datieren, die der wöchentliche Report nur aggregiert zeigt.
 *
 *   GSC_SERVICE_ACCOUNT_KEY_FILE=key.json npx tsx scripts/gsc-drilldown.ts
 *   npx tsx scripts/gsc-drilldown.ts -- --regex "(?i)olepova" --page https://asamer.cz/cz/ott --days 35
 *
 * Ausgabe nach stdout (Markdown) — im CI-Log lesbar, kein Commit nötig.
 * Authentifizierung wie in gsc-report.ts (GSC_SERVICE_ACCOUNT_JSON oder
 * GSC_SERVICE_ACCOUNT_KEY_FILE).
 */

import { createSign } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';

const argv = process.argv.slice(2);
const flag = (name: string): string | undefined => {
  const i = argv.indexOf(`--${name}`);
  return i >= 0 ? argv[i + 1] : undefined;
};

const SITE_URL = process.env.GSC_SITE_URL ?? 'sc-domain:asamer.cz';
const REGEXES = (flag('regex') ?? '(?i)olepova,(?i)^ott( |$).*|(?i)^ott$').split(',');
const PAGES = (flag('page') ?? 'https://asamer.cz/cz/ott,https://asamer.cz/cz').split(',');
const DAYS = Number(flag('days') ?? 35);

const iso = (d: Date) => d.toISOString().slice(0, 10);
const addDays = (d: Date, n: number) => new Date(d.getTime() + n * 86_400_000);
// Die letzten zwei Tage liefert die Search Console unvollständig nach.
const endDate = addDays(new Date(), -2);
const startDate = addDays(endDate, -(DAYS - 1));

interface ServiceAccount {
  client_email: string;
  private_key: string;
}

function loadServiceAccount(): ServiceAccount {
  const inline = process.env.GSC_SERVICE_ACCOUNT_JSON;
  const file = process.env.GSC_SERVICE_ACCOUNT_KEY_FILE;
  let raw: string;
  if (inline && inline.trim()) raw = inline;
  else if (file && existsSync(file)) raw = readFileSync(file, 'utf-8');
  else throw new Error('Keine Zugangsdaten (GSC_SERVICE_ACCOUNT_JSON oder GSC_SERVICE_ACCOUNT_KEY_FILE).');
  const cleaned = raw.replace(/^﻿/, '').trim();
  const text = cleaned.startsWith('{')
    ? cleaned
    : Buffer.from(cleaned, 'base64').toString('utf-8').trim();
  const parsed = JSON.parse(text) as Partial<ServiceAccount>;
  if (!parsed.client_email || !parsed.private_key) {
    throw new Error('Zugangsdaten unvollständig: client_email und private_key werden gebraucht.');
  }
  return { client_email: parsed.client_email, private_key: parsed.private_key };
}

const base64url = (input: string | Buffer) =>
  Buffer.from(input).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

async function getAccessToken(sa: ServiceAccount): Promise<string> {
  const now = Math.floor(Date.now() / 1000);
  const header = base64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const claims = base64url(
    JSON.stringify({
      iss: sa.client_email,
      scope: 'https://www.googleapis.com/auth/webmasters.readonly',
      aud: 'https://oauth2.googleapis.com/token',
      exp: now + 3600,
      iat: now,
    }),
  );
  const signer = createSign('RSA-SHA256');
  signer.update(`${header}.${claims}`);
  const signature = base64url(signer.sign(sa.private_key.replace(/\\n/g, '\n')));
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: `${header}.${claims}.${signature}`,
    }),
  });
  if (!res.ok) throw new Error(`Token-Anfrage fehlgeschlagen (${res.status}): ${await res.text()}`);
  const json = (await res.json()) as { access_token?: string };
  if (!json.access_token) throw new Error('Token-Antwort ohne access_token.');
  return json.access_token;
}

interface Row {
  keys: string[];
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
}

async function query(token: string, body: Record<string, unknown>): Promise<Row[]> {
  const endpoint = `https://searchconsole.googleapis.com/webmasters/v3/sites/${encodeURIComponent(
    SITE_URL,
  )}/searchAnalytics/query`;
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...body, rowLimit: 5000 }),
  });
  if (!res.ok) throw new Error(`Abfrage fehlgeschlagen (${res.status}): ${await res.text()}`);
  const json = (await res.json()) as { rows?: Row[] };
  return json.rows ?? [];
}

const period = { startDate: iso(startDate), endDate: iso(endDate) };
const pos = (n: number) => n.toFixed(1);

const table = (rows: Row[], label: string) => {
  console.log(`| ${label} | Klicks | Impressionen | Position |`);
  console.log('|---|---:|---:|---:|');
  for (const r of rows) {
    console.log(`| ${r.keys.join(' · ')} | ${r.clicks} | ${r.impressions} | ${pos(r.position)} |`);
  }
  console.log('');
};

async function main() {
  const token = await getAccessToken(loadServiceAccount());
  console.log(`# GSC-Drilldown ${iso(startDate)} – ${iso(endDate)} (${SITE_URL})`);
  console.log('');

  for (const regex of REGEXES) {
    const filter = {
      dimensionFilterGroups: [
        { filters: [{ dimension: 'query', operator: 'includingRegex', expression: regex }] },
      ],
    };
    console.log(`## Suchanfragen-Regex \`${regex}\` — je Tag`);
    console.log('');
    table(await query(token, { ...period, dimensions: ['date'], type: 'web', ...filter }), 'Datum');

    console.log(`## Suchanfragen-Regex \`${regex}\` — je Suchanfrage und Seite`);
    console.log('');
    const byQueryPage = await query(token, {
      ...period,
      dimensions: ['query', 'page'],
      type: 'web',
      ...filter,
    });
    table(byQueryPage.sort((a, b) => b.impressions - a.impressions).slice(0, 40), 'Suchanfrage · Seite');
  }

  for (const page of PAGES) {
    console.log(`## Seite \`${page}\` — je Tag`);
    console.log('');
    const rows = await query(token, {
      ...period,
      dimensions: ['date'],
      type: 'web',
      dimensionFilterGroups: [
        { filters: [{ dimension: 'page', operator: 'equals', expression: page }] },
      ],
    });
    table(rows, 'Datum');
  }
}

main().catch((e) => {
  console.error(e instanceof Error ? e.message : e);
  process.exit(1);
});
