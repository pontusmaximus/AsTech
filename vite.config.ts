import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { inspectAttr } from 'kimi-plugin-inspect-react'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/',
  plugins: [
    inspectAttr(),
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
  build: {
    chunkSizeWarningLimit: 700,
    rollupOptions: {
      output: {
        manualChunks: {
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
