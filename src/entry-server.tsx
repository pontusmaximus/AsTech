/**
 * SSR-Einstieg fuer das Build-Time-Prerendering (Masterplan Phase 2).
 *
 * Rendert denselben Routenbaum, den auch der Browser ausfuehrt — im
 * MemoryRouter statt im BrowserRouter. Damit gibt es keine zweite Wahrheit
 * mehr darueber, was auf einer Seite steht: was React rendert, liefert der
 * Server aus.
 *
 * `prerender` aus `react-dom/static` statt `renderToReadableStream`
 * (Oktober 2026). Der Streaming-Renderer schreibt fuer jede Suspense-Grenze —
 * und jede Seite ist ueber `React.lazy` eine — zuerst den Fallback an die
 * Stelle des Inhalts und haengt den echten Inhalt als `<div hidden id="S:0">`
 * ans Ende, wo ein Inline-Skript ihn nach vorn tauscht. Das gilt auch dann,
 * wenn man vorher auf `allReady` wartet. Im ausgelieferten HTML stand deshalb
 * vor der H1: Navigation, Lade-Skelett, Footer, Cookie-Banner; auf
 * /cz/ott/olepovacky-hran begann der Hauptinhalt erst nach 21 von 52 KB.
 * Crawler, die kein JavaScript ausfuehren — die KI-Crawler gehoeren dazu —,
 * lesen das HTML von oben nach unten. `prerender` wartet auf alle Daten und
 * schreibt den Inhalt dort, wo er hingehoert — zusammen mit
 * `progressiveChunkSize` (siehe unten), sonst lagert React grosse Grenzen
 * trotzdem aus.
 *
 * Zum Head: react-helmet-async 3 rendert unter React 19 ganz normale
 * `<title>`/`<meta>`/`<link>`-Elemente und ueberlaesst React das Hoisting.
 * Ohne `<html>` im Baum stellt React diese Elemente an den Anfang der
 * Ausgabe. `scripts/prerender.ts` verschiebt sie von dort in den `<head>` —
 * `SeoHead` ist damit die einzige Quelle der Head-Tags, im Prerender wie im
 * Browser.
 *
 * Das JSON-LD rendert `SeoHead` bewusst *ausserhalb* von Helmet und steht
 * damit im Body — fuer Google gleichwertig.
 */

import { StrictMode } from 'react';
import { prerender } from 'react-dom/static';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoutes } from './App';
import './App.css';

export interface RenderResult {
  /** Gerendertes Markup fuer #root — die hochgezogenen Head-Tags stehen am Anfang. */
  html: string;
  /** Fehler aus Suspense-Grenzen — der Aufrufer entscheidet, ob das den Build stoppt. */
  errors: string[];
}

HelmetProvider.canUseDOM = false;

export async function render(path: string): Promise<RenderResult> {
  const errors: string[] = [];

  const { prelude } = await prerender(
    <StrictMode>
      <HelmetProvider>
        <MemoryRouter initialEntries={[path]}>
          <AppRoutes />
        </MemoryRouter>
      </HelmetProvider>
    </StrictMode>,
    {
      // React lagert eine fertige Suspense-Grenze trotzdem aus (Fallback an
      // Ort und Stelle, Inhalt ans Ende), sobald sie groesser ist als dieser
      // Wert — Standard 12.800 Byte. Fuer schnelles Streaming gedacht, fuer
      // statisches HTML genau das Falsche: jede Seite ist eine solche Grenze.
      progressiveChunkSize: Number.MAX_SAFE_INTEGER,
      onError(error: unknown) {
        errors.push(error instanceof Error ? error.message : String(error));
      },
    },
  );

  const html = await new Response(prelude).text();
  return { html, errors };
}
