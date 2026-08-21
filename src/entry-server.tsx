/**
 * SSR-Einstieg fuer das Build-Time-Prerendering (Masterplan Phase 2).
 *
 * Rendert denselben Routenbaum, den auch der Browser ausfuehrt — im
 * MemoryRouter statt im BrowserRouter. Damit gibt es keine zweite Wahrheit
 * mehr darueber, was auf einer Seite steht: was React rendert, liefert der
 * Server aus. Vorher baute `scripts/prerender.ts` den sichtbaren Text von Hand
 * nach, und fuer alles, wofuer es dort keinen Builder gab — Ratgeber, Loesungen,
 * Service, Rechtstexte — kam Googlebot nur H1 und Description zu sehen.
 *
 * `renderToReadableStream` statt `renderToString`, weil die Seitenkomponenten
 * ueber `React.lazy` geladen werden: `renderToString` gaebe den
 * Suspense-Fallback aus, der Stream wartet ueber `allReady` auf den echten
 * Inhalt. Web-Streams statt `renderToPipeableStream`, damit dieses Modul ohne
 * Node-Typen auskommt und im selben tsconfig wie der uebrige App-Code liegen kann.
 *
 * Zum Head: react-helmet-async 3 fuellt unter React 19 im Streaming-Rendering
 * seinen Server-Context nicht (`context.helmet` bleibt undefined, auch mit
 * `canUseDOM = false`). Was in `<Helmet>` landet, taucht im SSR-Output also
 * nicht auf. Deshalb zwei Konsequenzen:
 *   1. Die Meta-Tags erzeugt weiterhin `scripts/prerender.ts` aus denselben
 *      Datenquellen, aus denen auch `SeoHead` liest.
 *   2. Das JSON-LD rendert `SeoHead` bewusst *ausserhalb* von Helmet und
 *      landet damit hier im Body — fuer Google gleichwertig.
 */

import { StrictMode } from 'react';
import { renderToReadableStream } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoutes } from './App';
import './App.css';

export interface RenderResult {
  /** Gerendertes Markup fuer #root. */
  html: string;
  /** Fehler aus Suspense-Grenzen — der Aufrufer entscheidet, ob das den Build stoppt. */
  errors: string[];
}

HelmetProvider.canUseDOM = false;

export async function render(path: string): Promise<RenderResult> {
  const errors: string[] = [];

  const stream = await renderToReadableStream(
    <StrictMode>
      <HelmetProvider>
        <MemoryRouter initialEntries={[path]}>
          <AppRoutes />
        </MemoryRouter>
      </HelmetProvider>
    </StrictMode>,
    {
      onError(error: unknown) {
        errors.push(error instanceof Error ? error.message : String(error));
      },
    },
  );

  await stream.allReady;
  const html = await new Response(stream).text();
  return { html, errors };
}
