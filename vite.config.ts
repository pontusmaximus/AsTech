import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { inspectAttr } from 'kimi-plugin-inspect-react'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vite.dev/config/
export default defineConfig(({ command, mode, isSsrBuild }) => ({
  base: '/',
  plugins: [
    /*
     * Nur im Dev-Server. Das Plugin schreibt `code-path="src/…"`-Attribute an
     * jedes Element — im Produktions-Build waren das 363 Attribute und 15,8 KB
     * pro Seite, also rund ein Viertel jeder ausgelieferten Datei, und ueber
     * alle 605 Seiten etwa 9,5 MB, die Google mitlaedt. Nebenbei standen die
     * internen Dateipfade im oeffentlichen HTML.
     */
    command === 'serve' && inspectAttr(),
    react(),
    mode === 'analyze' &&
      visualizer({
        filename: 'dist/bundle-stats.html',
        template: 'treemap',
        gzipSize: true,
        brotliSize: true,
      }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  ssr: {
    /**
     * Fuer den SSR-Build (src/entry-server.tsx) wird alles mitgebuendelt.
     *
     * Vite laesst Abhaengigkeiten im SSR-Build normalerweise extern; Node
     * laedt sie dann selbst. Mehrere Pakete hier (react-helmet-async,
     * gsap/ScrollTrigger) liefern unter Node ihren CommonJS-Build aus, und ein
     * `import { X } from '…'` schlaegt dort mit "does not provide an export
     * named" fehl. Gebuendelt uebernimmt Rollup die Interop, und der
     * Prerenderer laeuft ohne Sonderfallliste, die bei jeder neuen
     * Abhaengigkeit nachgepflegt werden muesste.
     */
    noExternal: true,
  },
  build: {
    chunkSizeWarningLimit: 700,
    rollupOptions: {
      output: {
        // Die Chunk-Aufteilung gilt nur fuer den Browser-Build. Im SSR-Build
        // (src/entry-server.tsx, Grundlage des Prerenderings) sind react &
        // Co. externe Module — Rollup bricht ab, wenn sie dort in
        // manualChunks auftauchen.
        manualChunks: isSsrBuild ? undefined : {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'helmet': ['react-helmet-async'],
          'forms': ['react-hook-form', '@hookform/resolvers', 'zod'],
          'animation': ['gsap'],
          'radix': [
            '@radix-ui/react-accordion',
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-navigation-menu',
            '@radix-ui/react-select',
            '@radix-ui/react-tabs',
          ],
        },
      },
    },
  },
}));
