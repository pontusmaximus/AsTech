import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

/*
 * Die vom Prerender geschriebenen Head-Tags entfernen, bevor React mountet.
 *
 * react-helmet-async 3 raeumt sie unter React 19 nicht mehr weg: es rendert
 * seine Tags ueber Reacts eigenes Head-Hoisting, statt den DOM direkt zu
 * manipulieren. Ohne diese Zeile stand nach dem Hydrieren jeder Head-Tag
 * doppelt im Dokument — zwei <title>, zwei Canonicals, zwoelf statt sechs
 * hreflang-Links.
 *
 * `data-rh="true"` setzt ausschliesslich scripts/prerender.ts; Helmet selbst
 * markiert seine Tags unter React 19 nicht mehr so.
 */
for (const tag of document.head.querySelectorAll('[data-rh="true"]')) {
  tag.remove()
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
