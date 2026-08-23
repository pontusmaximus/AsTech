/**
 * Minimaler Matcher für die Routing-Regeln aus `vercel.json`.
 *
 * Zweck: offline beantworten können, was Vercel mit einem Pfad tut, ohne
 * deployen zu müssen. Gebraucht wird das an zwei Stellen:
 *
 *  1. `scripts/seo-audit.ts --dist` — interne Links prüfen, ohne Netzwerk.
 *  2. `scripts/check-404-safety.ts` — vor dem Entfernen des Catch-all-Rewrites
 *     nachweisen, dass kein real erreichbarer Pfad zur 404 wird.
 *
 * Unterstützt die Pattern-Syntax, die in diesem Repo tatsächlich vorkommt:
 *   /fester/pfad
 *   /pfad/:param            ein Segment
 *   /pfad/:param*           null oder mehr Segmente
 *   /pfad/:param(regex)     Segment mit Regex-Einschränkung
 *   /:path(.*)              beliebiger Rest
 * sowie `has: [{ type: 'host', value: … }]` (wird beim Matchen nur
 * berücksichtigt, wenn ein Host übergeben wird).
 */

import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export interface VercelRedirect {
  source: string;
  destination: string;
  permanent?: boolean;
  statusCode?: number;
  has?: { type: string; key?: string; value: string }[];
}

export interface VercelConfig {
  trailingSlash?: boolean;
  redirects?: VercelRedirect[];
  rewrites?: { source: string; destination: string }[];
}

export const loadVercelConfig = (path = join(__dirname, '..', 'vercel.json')): VercelConfig =>
  JSON.parse(readFileSync(path, 'utf-8')) as VercelConfig;

interface Compiled {
  re: RegExp;
  keys: string[];
  rule: VercelRedirect;
}

const escapeLiteral = (s: string) => s.replace(/[.+?^${}()|[\]\\]/g, '\\$&');

/**
 * Übersetzt ein Vercel-`source`-Pattern in eine RegExp.
 * Gibt zusätzlich die Parameternamen in Reihenfolge zurück, damit
 * `:param` im `destination` ersetzt werden kann.
 */
export function compileSource(source: string): { re: RegExp; keys: string[] } {
  const keys: string[] = [];
  let out = '';
  let i = 0;

  while (i < source.length) {
    const ch = source[i];

    // Nackte Regex-Gruppe ohne Parameternamen, z. B. `/(.*)` im Catch-all-Rewrite.
    if (ch === '(') {
      let depth = 1;
      i += 1;
      let raw = '';
      while (i < source.length && depth > 0) {
        if (source[i] === '(') depth += 1;
        else if (source[i] === ')') {
          depth -= 1;
          if (depth === 0) break;
        }
        raw += source[i];
        i += 1;
      }
      i += 1;
      keys.push(String(keys.length));
      out += `(${raw})`;
      continue;
    }

    if (ch !== ':') {
      out += escapeLiteral(ch);
      i += 1;
      continue;
    }

    // :name — Name lesen
    i += 1;
    let name = '';
    while (i < source.length && /[A-Za-z0-9_]/.test(source[i])) {
      name += source[i];
      i += 1;
    }

    // optionale (regex)-Einschränkung
    let pattern: string | null = null;
    if (source[i] === '(') {
      let depth = 1;
      i += 1;
      let raw = '';
      while (i < source.length && depth > 0) {
        if (source[i] === '(') depth += 1;
        else if (source[i] === ')') {
          depth -= 1;
          if (depth === 0) break;
        }
        raw += source[i];
        i += 1;
      }
      i += 1; // schließende Klammer
      pattern = raw;
    }

    // Modifikator * oder + oder ?
    const modifier = source[i] === '*' || source[i] === '+' || source[i] === '?' ? source[i] : '';
    if (modifier) i += 1;

    keys.push(name);

    if (modifier === '*' || modifier === '+') {
      // `/pfad/:slug*` — das vorangehende `/` gehört mit in den optionalen Teil,
      // sonst matcht `/products/:slug*` nicht auf `/products`.
      const inner = pattern ?? '[^/]+';
      if (out.endsWith('/')) {
        out = out.slice(0, -1);
        out += modifier === '*' ? `(?:/(${inner}(?:/${inner})*))?` : `/(${inner}(?:/${inner})*)`;
      } else {
        out += modifier === '*' ? `((?:${inner})*)` : `((?:${inner})+)`;
      }
    } else if (modifier === '?') {
      out += `(${pattern ?? '[^/]+'})?`;
    } else {
      out += `(${pattern ?? '[^/]+'})`;
    }
  }

  return { re: new RegExp(`^${out}$`), keys };
}

export class VercelRouter {
  private compiled: Compiled[];
  private rewrites: { re: RegExp; keys: string[]; destination: string }[];
  readonly trailingSlash: boolean;

  constructor(config: VercelConfig) {
    this.trailingSlash = config.trailingSlash ?? false;
    this.compiled = (config.redirects ?? []).map((rule) => {
      const { re, keys } = compileSource(rule.source);
      return { re, keys, rule };
    });
    this.rewrites = (config.rewrites ?? []).map((r) => {
      const { re, keys } = compileSource(r.source);
      return { re, keys, destination: r.destination };
    });
  }

  /**
   * Erste passende Redirect-Regel für `pathname`.
   * `host` wird nur gebraucht, um `has: [{type:'host'}]`-Regeln zu bewerten;
   * ohne Host werden solche Regeln übersprungen.
   */
  matchRedirect(pathname: string, host?: string): { destination: string; rule: VercelRedirect } | null {
    for (const { re, keys, rule } of this.compiled) {
      const hostRules = (rule.has ?? []).filter((h) => h.type === 'host');
      if (hostRules.length > 0) {
        if (!host || !hostRules.some((h) => h.value === host)) continue;
      }
      const m = re.exec(pathname);
      if (!m) continue;

      let destination = rule.destination;
      keys.forEach((key, idx) => {
        const value = m[idx + 1] ?? '';
        destination = destination.replace(new RegExp(`:${key}\\*?\\b`, 'g'), value);
      });
      // Leergelaufene Parameter hinterlassen ggf. doppelte Slashes.
      destination = destination.replace(/([^:])\/\/+/g, '$1/').replace(/\/$/, '') || '/';
      return { destination, rule };
    }
    return null;
  }

  hasCatchAllRewrite(): boolean {
    return this.rewrites.some((r) => r.re.source === '^/(.*)$' || r.destination === '/index.html');
  }

  matchRewrite(pathname: string): string | null {
    for (const { re, destination } of this.rewrites) {
      if (re.test(pathname)) return destination;
    }
    return null;
  }
}
