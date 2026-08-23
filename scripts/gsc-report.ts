/**
 * Wöchentlicher Report aus der Search Console API (Masterplan 7.3).
 *
 * Zieht die Kennwerte der letzten sieben Tage, vergleicht sie mit der Vorwoche
 * und schreibt einen Markdown-Report nach `docs/seo/reports/JJJJ-WW.md`.
 *
 *   npm run seo:gsc                      # letzte volle Woche
 *   npm run seo:gsc -- --end 2026-08-17  # Woche, die an diesem Tag endet
 *   npm run seo:gsc -- --out <pfad>
 *
 * ## Authentifizierung
 *
 * Über ein Google-Service-Account, das in der Search Console als Nutzer
 * hinzugefügt wurde (Aufgabe für Max, siehe Masterplan Abschnitt 9). Die
 * JSON-Schlüsseldatei kommt über eine der beiden Variablen:
 *
 *   GSC_SERVICE_ACCOUNT_JSON        der Inhalt der Datei (für GitHub Secrets)
 *   GSC_SERVICE_ACCOUNT_KEY_FILE    ein Pfad zur Datei (für lokale Läufe)
 *
 * Optional `GSC_SITE_URL`, Standard `sc-domain:asamer.cz`.
 *
 * Bewusst **ohne** die `googleapis`-Bibliothek: für zwei API-Aufrufe wäre das
 * eine 50-MB-Abhängigkeit. Das JWT wird mit `node:crypto` signiert, der Rest
 * ist `fetch`.
 *
 * ## Cluster-Verfolgung
 *
 * `config/keyword-cluster.json` definiert die Suchanfragen-Cluster aus Masterplan
 * Phase 5. Der Masterplan verlangt fuer 6.1 ausdruecklich, den Effekt von Phase 2
 * auf den Lagerautomatisierungs-Cluster zu messen, bevor weitere Arbeit
 * hineingesteckt wird — der Report weist die Cluster deshalb woechentlich aus.
 *
 * ## Was hier nicht steht
 *
 * Die Indexierungsdaten pro Sprache (Masterplan 7.3, letzter Punkt) lassen sich
 * über die Search Console API **nicht** abfragen — der Indexierungsbericht hat
 * keine öffentliche API. Der Report rechnet stattdessen die Sitemap-URLs je
 * Sprache gegen die URLs, die in den Leistungsdaten überhaupt Impressionen
 * hatten. Das ist nicht dieselbe Kennzahl, aber die beste, die sich
 * automatisieren lässt — und sie ist als solche gekennzeichnet.
 */

import { createSign } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, isAbsolute, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { INDEXABLE_LANGUAGES } from '../src/lib/language';
import clusterConfig from '../config/keyword-cluster.json';
import type { Language } from '../src/i18n';

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(__dirname, '..');

const argv = process.argv.slice(2);
const flag = (name: string): string | undefined => {
  const i = argv.indexOf(`--${name}`);
  return i >= 0 ? argv[i + 1] : undefined;
};

const SITE_URL = process.env.GSC_SITE_URL ?? 'sc-domain:asamer.cz';

/* ------------------------------------------------------------------ */
/*  Zeitraum                                                           */
/* ------------------------------------------------------------------ */

const iso = (d: Date) => d.toISOString().slice(0, 10);
const addDays = (d: Date, n: number) => new Date(d.getTime() + n * 86_400_000);

/**
 * Ende des Berichtszeitraums. Standard: vorgestern.
 *
 * Die Search Console liefert die letzten zwei bis drei Tage unvollständig
 * nach; ein Report bis "gestern" zeigt deshalb einen Einbruch, den es nicht
 * gibt. Zwei Tage Abstand sind die übliche Wahl.
 */
const endDate = flag('end') ? new Date(`${flag('end')}T00:00:00Z`) : addDays(new Date(), -2);
const startDate = addDays(endDate, -6);
const prevEnd = addDays(startDate, -1);
const prevStart = addDays(prevEnd, -6);

/** ISO-Wochennummer für den Dateinamen. */
function isoWeek(d: Date): { year: number; week: number } {
  const t = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
  const day = t.getUTCDay() || 7;
  t.setUTCDate(t.getUTCDate() + 4 - day);
  const yearStart = new Date(Date.UTC(t.getUTCFullYear(), 0, 1));
  const week = Math.ceil(((t.getTime() - yearStart.getTime()) / 86_400_000 + 1) / 7);
  return { year: t.getUTCFullYear(), week };
}

/* ------------------------------------------------------------------ */
/*  Zugangsdaten                                                       */
/* ------------------------------------------------------------------ */

interface ServiceAccount {
  client_email: string;
  private_key: string;
}

/** Gibt den dekodierten Text zurueck, wenn `value` base64-kodiertes JSON ist. */
function decodeBase64Json(value: string): string | null {
  if (!/^[A-Za-z0-9+/\s]+={0,2}$/.test(value)) return null;
  try {
    const decoded = Buffer.from(value, 'base64').toString('utf-8').trim();
    return decoded.startsWith('{') ? decoded : null;
  } catch {
    return null;
  }
}

/**
 * Beschreibt, *warum* die Zugangsdaten nicht lesbar sind, ohne sie preiszugeben.
 * Ein blosses "kein gueltiges JSON" laesst denjenigen, der das Secret gesetzt
 * hat, im Dunkeln — und der Wert ist maskiert, also auch im Log nicht nachlesbar.
 * Erstes und letztes Zeichen sowie die Laenge verraten nichts Schuetzenswertes,
 * beantworten aber die Frage, ob zu wenig, zu viel oder das Falsche drinsteht.
 */
function describeBadCredentials(value: string): string {
  const hint = (() => {
    if (value.length === 0) return 'Der Wert ist leer.';
    if (value.startsWith('AIza')) {
      return 'Das sieht nach einem API-Schluessel aus. Gebraucht wird die JSON-Schluesseldatei ' +
        'eines Dienstkontos (beginnt mit {"type": "service_account", …}).';
    }
    if (!value.startsWith('{')) {
      return `Der Wert beginnt mit "${value.slice(0, 1)}" statt mit "{". Es muss der komplette ` +
        'Dateiinhalt sein, von der ersten geschweiften Klammer bis zur letzten.';
    }
    if (!value.endsWith('}')) {
      return 'Der Wert beginnt mit "{", endet aber nicht mit "}" — offenbar abgeschnitten.';
    }
    return 'Anfang und Ende stimmen, der Inhalt dazwischen ist beschaedigt — vermutlich beim ' +
      'Kopieren umgebrochen. Notfalls base64-kodiert hinterlegen, das wird ebenfalls akzeptiert.';
  })();

  return `Zugangsdaten sind kein gültiges JSON (${value.length} Zeichen). ${hint}`;
}

function loadServiceAccount(): ServiceAccount {
  const inline = process.env.GSC_SERVICE_ACCOUNT_JSON;
  const file = process.env.GSC_SERVICE_ACCOUNT_KEY_FILE;

  let raw: string;
  if (inline && inline.trim()) {
    raw = inline;
  } else if (file && existsSync(file)) {
    raw = readFileSync(file, 'utf-8');
  } else {
    throw new Error(
      'Keine Zugangsdaten. Setze GSC_SERVICE_ACCOUNT_JSON (Inhalt der Schlüsseldatei) ' +
        'oder GSC_SERVICE_ACCOUNT_KEY_FILE (Pfad zur Datei). Das Service-Account muss in der ' +
        'Search Console als Nutzer hinzugefügt sein.',
    );
  }

  // BOM und Leerraum abschneiden: manche Editoren haengen beim Kopieren beides
  // an, und im GitHub-Secret sieht man das nicht.
  const cleaned = raw.replace(/^\uFEFF/, '').trim();

  // Ein mehrzeiliger Schluessel wird beim Einfuegen gelegentlich verstuemmelt.
  // Deshalb wird auch eine base64-kodierte Fassung angenommen — der uebliche
  // Ausweg, wenn die Oberflaeche mit Zeilenumbruechen nicht klarkommt.
  const text = cleaned.startsWith('{') ? cleaned : (decodeBase64Json(cleaned) ?? cleaned);

  let parsed: Partial<ServiceAccount>;
  try {
    parsed = JSON.parse(text) as Partial<ServiceAccount>;
  } catch {
    throw new Error(describeBadCredentials(cleaned));
  }
  if (!parsed.client_email || !parsed.private_key) {
    throw new Error('Zugangsdaten unvollständig: client_email und private_key werden gebraucht.');
  }
  return { client_email: parsed.client_email, private_key: parsed.private_key };
}

const base64url = (input: string | Buffer) =>
  Buffer.from(input).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

/** OAuth2-Zugriffstoken über den JWT-Bearer-Flow. */
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
  // Der private_key kommt aus JSON und enthält "\n" als Escape-Sequenz, wenn er
  // über eine Umgebungsvariable gereicht wurde.
  const signature = base64url(signer.sign(sa.private_key.replace(/\\n/g, '\n')));
  const assertion = `${header}.${claims}.${signature}`;

  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion,
    }),
  });

  if (!res.ok) {
    throw new Error(`Token-Anfrage fehlgeschlagen (${res.status}): ${await res.text()}`);
  }
  const json = (await res.json()) as { access_token?: string };
  if (!json.access_token) throw new Error('Token-Antwort ohne access_token.');
  return json.access_token;
}

/* ------------------------------------------------------------------ */
/*  API                                                                */
/* ------------------------------------------------------------------ */

interface Row {
  keys: string[];
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
}

async function query(
  token: string,
  body: Record<string, unknown>,
): Promise<Row[]> {
  const endpoint = `https://searchconsole.googleapis.com/webmasters/v3/sites/${encodeURIComponent(
    SITE_URL,
  )}/searchAnalytics/query`;

  const rows: Row[] = [];
  const rowLimit = 25000;
  for (let startRow = 0; ; startRow += rowLimit) {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...body, rowLimit, startRow }),
    });
    if (!res.ok) {
      throw new Error(`Search-Console-Abfrage fehlgeschlagen (${res.status}): ${await res.text()}`);
    }
    const json = (await res.json()) as { rows?: Row[] };
    const batch = json.rows ?? [];
    rows.push(...batch);
    if (batch.length < rowLimit) break;
  }
  return rows;
}

const period = (from: Date, to: Date) => ({ startDate: iso(from), endDate: iso(to) });

/* ------------------------------------------------------------------ */
/*  Auswertung                                                         */
/* ------------------------------------------------------------------ */

interface Totals {
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
}

const sumRows = (rows: Row[]): Totals => {
  const clicks = rows.reduce((n, r) => n + r.clicks, 0);
  const impressions = rows.reduce((n, r) => n + r.impressions, 0);
  // Position gewichtet nach Impressionen — der ungewichtete Mittelwert würde
  // eine Suchanfrage mit einer Impression genauso zählen wie eine mit 500.
  const weighted = rows.reduce((n, r) => n + r.position * r.impressions, 0);
  return {
    clicks,
    impressions,
    ctr: impressions === 0 ? 0 : clicks / impressions,
    position: impressions === 0 ? 0 : weighted / impressions,
  };
};

const langOfUrl = (url: string): Language | null => {
  const m = url.match(/^https?:\/\/[^/]+\/([a-z]{2})(?:\/|$)/);
  const seg = m?.[1];
  return seg && (INDEXABLE_LANGUAGES as string[]).includes(seg) ? (seg as Language) : null;
};

const num = (n: number) => n.toLocaleString('de-DE');
const pct = (n: number) => `${(n * 100).toFixed(1)} %`;
const pos = (n: number) => n.toFixed(1);

const delta = (now: number, before: number): string => {
  const d = now - before;
  if (before === 0) return d === 0 ? '±0' : `+${num(d)}`;
  const rel = (d / before) * 100;
  const sign = d > 0 ? '+' : d < 0 ? '−' : '±';
  return `${sign}${num(Math.abs(Math.round(d)))} (${sign}${Math.abs(rel).toFixed(0)} %)`;
};

/** Position: kleiner ist besser, deshalb umgekehrtes Vorzeichen in der Lesart. */
const deltaPosition = (now: number, before: number): string => {
  const d = now - before;
  if (Math.abs(d) < 0.05) return '±0,0';
  return d < 0 ? `${d.toFixed(1)} (besser)` : `+${d.toFixed(1)} (schlechter)`;
};

/* ------------------------------------------------------------------ */
/*  Lauf                                                               */
/* ------------------------------------------------------------------ */

async function main() {
  const sa = loadServiceAccount();
  const token = await getAccessToken(sa);

  const [queriesNow, queriesPrev, pagesNow, pagesPrev] = await Promise.all([
    query(token, { ...period(startDate, endDate), dimensions: ['query'], type: 'web' }),
    query(token, { ...period(prevStart, prevEnd), dimensions: ['query'], type: 'web' }),
    query(token, { ...period(startDate, endDate), dimensions: ['page'], type: 'web' }),
    query(token, { ...period(prevStart, prevEnd), dimensions: ['page'], type: 'web' }),
  ]);

  const totalNow = sumRows(queriesNow);
  const totalPrev = sumRows(queriesPrev);

  /* --- je Sprachpräfix --- */
  const byLang = new Map<string, { now: Row[]; prev: Row[] }>();
  const bucket = (url: string) => langOfUrl(url) ?? 'ohne Präfix';
  for (const r of pagesNow) {
    const k = bucket(r.keys[0]);
    if (!byLang.has(k)) byLang.set(k, { now: [], prev: [] });
    byLang.get(k)!.now.push(r);
  }
  for (const r of pagesPrev) {
    const k = bucket(r.keys[0]);
    if (!byLang.has(k)) byLang.set(k, { now: [], prev: [] });
    byLang.get(k)!.prev.push(r);
  }

  /* --- neue Suchanfragen --- */
  const prevQueries = new Set(queriesPrev.map((r) => r.keys[0]));
  const newQueries = queriesNow
    .filter((r) => !prevQueries.has(r.keys[0]))
    .sort((a, b) => b.impressions - a.impressions);

  /* --- Arbeitsliste: viele Impressionen, keine Klicks --- */
  const zeroClick = queriesNow
    .filter((r) => r.clicks === 0 && r.impressions >= 20)
    .sort((a, b) => b.impressions - a.impressions);

  /* --- Positionssprünge --- */
  const prevByPage = new Map(pagesPrev.map((r) => [r.keys[0], r]));
  const movers = pagesNow
    .map((r) => {
      const before = prevByPage.get(r.keys[0]);
      if (!before) return null;
      return { url: r.keys[0], now: r.position, before: before.position, diff: r.position - before.position, impressions: r.impressions };
    })
    .filter((m): m is NonNullable<typeof m> => m !== null && Math.abs(m.diff) > 3)
    .sort((a, b) => a.diff - b.diff);

  /* --- Suchanfragen-Cluster (Masterplan Phase 5) --- */
  interface ClusterResult {
    id: string;
    name: string;
    note: string;
    baseline: { impressions: number; clicks: number; period: string };
    now: Totals;
    prev: Totals;
    matched: Row[];
  }

  const matchCluster = (rows: Row[], queries: string[], prefixes: string[]): Row[] => {
    const exact = new Set(queries.map((q) => q.toLowerCase()));
    const lowerPrefixes = prefixes.map((p) => p.toLowerCase());
    return rows.filter((r) => {
      const q = r.keys[0].toLowerCase();
      return exact.has(q) || lowerPrefixes.some((p) => q.startsWith(p));
    });
  };

  const clusters: ClusterResult[] = clusterConfig.clusters.map((c) => {
    const matched = matchCluster(queriesNow, c.queries, c.prefixes);
    return {
      id: c.id,
      name: c.name,
      note: c.note,
      baseline: c.baseline,
      now: sumRows(matched),
      prev: sumRows(matchCluster(queriesPrev, c.queries, c.prefixes)),
      matched: matched.sort((a, b) => b.impressions - a.impressions),
    };
  });

  /* --- Sitemap-Abgleich je Sprache --- */
  const sitemapPath = join(repoRoot, 'public/sitemap.xml');
  const sitemapByLang = new Map<string, number>();
  if (existsSync(sitemapPath)) {
    for (const m of readFileSync(sitemapPath, 'utf-8').matchAll(/<loc>([^<]+)<\/loc>/g)) {
      const k = bucket(m[1]);
      sitemapByLang.set(k, (sitemapByLang.get(k) ?? 0) + 1);
    }
  }

  /* --- Report --- */
  const { year, week } = isoWeek(endDate);
  const L: string[] = [];

  L.push(`# Search-Console-Report ${year}-KW${String(week).padStart(2, '0')}`);
  L.push('');
  L.push(`Property \`${SITE_URL}\` · Zeitraum **${iso(startDate)} – ${iso(endDate)}**`);
  L.push(`· Vergleich mit **${iso(prevStart)} – ${iso(prevEnd)}**`);
  L.push('');
  L.push('Erzeugt von `scripts/gsc-report.ts`. Die letzten zwei Tage sind bewusst ausgespart —');
  L.push('die Search Console liefert sie unvollständig nach, ein Report bis gestern zeigt einen');
  L.push('Einbruch, den es nicht gibt.');
  L.push('');

  L.push('## Gesamt');
  L.push('');
  L.push('| Kennzahl | Woche | Vorwoche | Veränderung |');
  L.push('|---|---:|---:|---:|');
  L.push(`| Klicks | ${num(totalNow.clicks)} | ${num(totalPrev.clicks)} | ${delta(totalNow.clicks, totalPrev.clicks)} |`);
  L.push(`| Impressionen | ${num(totalNow.impressions)} | ${num(totalPrev.impressions)} | ${delta(totalNow.impressions, totalPrev.impressions)} |`);
  L.push(`| CTR | ${pct(totalNow.ctr)} | ${pct(totalPrev.ctr)} | ${((totalNow.ctr - totalPrev.ctr) * 100).toFixed(1)} pp |`);
  L.push(`| Ø Position | ${pos(totalNow.position)} | ${pos(totalPrev.position)} | ${deltaPosition(totalNow.position, totalPrev.position)} |`);
  L.push('');
  L.push('Die Durchschnittsposition ist nach Impressionen gewichtet — ungewichtet zählte eine');
  L.push('Suchanfrage mit einer Impression genauso viel wie eine mit 500.');
  L.push('');

  L.push('## Je Sprachpräfix');
  L.push('');
  L.push('| Präfix | Klicks | Impressionen | CTR | Ø Position | URLs mit Impressionen | in der Sitemap |');
  L.push('|---|---:|---:|---:|---:|---:|---:|');
  for (const [lang, data] of [...byLang.entries()].sort((a, b) => sumRows(b[1].now).impressions - sumRows(a[1].now).impressions)) {
    const t = sumRows(data.now);
    const inSitemap = sitemapByLang.get(lang) ?? 0;
    L.push(
      `| \`${lang}\` | ${num(t.clicks)} | ${num(t.impressions)} | ${pct(t.ctr)} | ${pos(t.position)} | ` +
        `${num(data.now.length)} | ${inSitemap > 0 ? num(inSitemap) : '—'} |`,
    );
  }
  L.push('');
  L.push('**Zur letzten Spalte:** „URLs mit Impressionen" gegen „in der Sitemap" ist *nicht* die');
  L.push('Indexierungsquote. Der Indexierungsbericht der Search Console hat keine öffentliche API.');
  L.push('Eine Seite kann indexiert sein und in dieser Woche trotzdem keine Impression bekommen.');
  L.push('Die Zahl taugt als Trend, nicht als Absolutwert — für die echte Quote bleibt der Blick');
  L.push('in die Oberfläche oder der Bulk Data Export (Masterplan 7.2).');
  L.push('');

  L.push('## Suchanfragen-Cluster');
  L.push('');
  L.push('Definiert in `config/keyword-cluster.json`. Der Masterplan verlangt für Phase 5,');
  L.push('den Effekt von Phase 2 auf den Lagerautomatisierungs-Cluster zu messen, bevor weitere');
  L.push('Arbeit hineingesteckt wird — diese Tabelle ist die Messung.');
  L.push('');
  L.push('| Cluster | Impressionen | Vorwoche | Klicks | Vorwoche | Ø Position | Treffer |');
  L.push('|---|---:|---:|---:|---:|---:|---:|');
  for (const c of clusters) {
    L.push(
      `| **${c.name}** | ${num(c.now.impressions)} | ${num(c.prev.impressions)} | ` +
        `${num(c.now.clicks)} | ${num(c.prev.clicks)} | ${c.now.impressions > 0 ? pos(c.now.position) : '—'} | ` +
        `${c.matched.length} |`,
    );
  }
  L.push('');
  for (const c of clusters) {
    L.push(`### ${c.name}`);
    L.push('');
    L.push(c.note);
    L.push('');
    L.push(
      `Ausgangswert (${c.baseline.period}, drei Monate): ${num(c.baseline.impressions)} Impressionen, ` +
        `${num(c.baseline.clicks)} Klicks. Nur zur Einordnung — der Wochenvergleich oben ist die Kennzahl.`,
    );
    L.push('');
    if (c.matched.length === 0) {
      L.push('Diese Woche keine Treffer.');
    } else {
      L.push('| Suchanfrage | Impressionen | Klicks | Position |');
      L.push('|---|---:|---:|---:|');
      for (const r of c.matched.slice(0, 25)) {
        L.push(`| ${r.keys[0]} | ${num(r.impressions)} | ${num(r.clicks)} | ${pos(r.position)} |`);
      }
      if (c.matched.length > 25) L.push(`| … | ${c.matched.length - 25} weitere | | |`);
    }
    L.push('');
  }

  L.push(`## Arbeitsliste: ≥ 20 Impressionen, 0 Klicks (${zeroClick.length})`);
  L.push('');
  if (zeroClick.length === 0) {
    L.push('Keine.');
  } else {
    L.push('| Suchanfrage | Impressionen | Position |');
    L.push('|---|---:|---:|');
    for (const r of zeroClick.slice(0, 40)) {
      L.push(`| ${r.keys[0]} | ${num(r.impressions)} | ${pos(r.position)} |`);
    }
    if (zeroClick.length > 40) L.push(`| … | ${zeroClick.length - 40} weitere | |`);
  }
  L.push('');

  L.push(`## Neue Suchanfragen gegenüber der Vorwoche (${newQueries.length})`);
  L.push('');
  if (newQueries.length === 0) {
    L.push('Keine.');
  } else {
    L.push('| Suchanfrage | Impressionen | Klicks | Position |');
    L.push('|---|---:|---:|---:|');
    for (const r of newQueries.slice(0, 40)) {
      L.push(`| ${r.keys[0]} | ${num(r.impressions)} | ${num(r.clicks)} | ${pos(r.position)} |`);
    }
    if (newQueries.length > 40) L.push(`| … | ${newQueries.length - 40} weitere | | |`);
  }
  L.push('');

  L.push(`## Seiten mit Positionssprung > 3 Plätze (${movers.length})`);
  L.push('');
  if (movers.length === 0) {
    L.push('Keine.');
  } else {
    L.push('| Seite | Vorwoche | Woche | Veränderung | Impressionen |');
    L.push('|---|---:|---:|---:|---:|');
    for (const m of movers.slice(0, 40)) {
      L.push(
        `| \`${m.url.replace(/^https?:\/\/[^/]+/, '')}\` | ${pos(m.before)} | ${pos(m.now)} | ` +
          `${deltaPosition(m.now, m.before)} | ${num(m.impressions)} |`,
      );
    }
    if (movers.length > 40) L.push(`| … | | | | ${movers.length - 40} weitere |`);
  }
  L.push('');

  const outFlag = flag('out');
  const out = outFlag
    ? (isAbsolute(outFlag) ? outFlag : join(repoRoot, outFlag))
    : join(repoRoot, `docs/seo/reports/${year}-KW${String(week).padStart(2, '0')}.md`);
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, L.join('\n'), 'utf-8');

  console.log(`Report: ${out}`);
  console.log(
    `  ${num(totalNow.clicks)} Klicks (${delta(totalNow.clicks, totalPrev.clicks)}), ` +
      `${num(totalNow.impressions)} Impressionen (${delta(totalNow.impressions, totalPrev.impressions)})`,
  );
  console.log(`  ${zeroClick.length} Suchanfragen auf der Arbeitsliste, ${newQueries.length} neue`);
  for (const c of clusters) {
    console.log(
      `  Cluster ${c.name}: ${num(c.now.impressions)} Impressionen (Vorwoche ${num(c.prev.impressions)}), ` +
        `${num(c.now.clicks)} Klicks`,
    );
  }
}

main().catch((e) => {
  console.error(e instanceof Error ? e.message : e);
  process.exit(1);
});
