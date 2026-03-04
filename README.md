# Asamer Technologie Website

Marketing site for Asamer Technologie GmbH built with React 19, Vite, Tailwind and a custom localization layer.

## Requirements

- Node.js 20.x
- npm 10+
- For analytics: `VITE_GA_MEASUREMENT_ID` env variable (GA4 Measurement ID)

## Setup

```bash
npm install
```

## Useful Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server on port 5173 |
| `npm run build` | Generate `public/sitemap.xml`, run TypeScript build and create the production bundle |
| `npm run generate:sitemap` | Generate `public/sitemap.xml` from `src/seo/routes.ts` |
| `npm run preview` | Preview the production build locally |

`npm run build` must succeed locally before deploying (the command runs the sitemap generator automatically).

## SEO & Metadata

- Routes are language-aware (`/:lang/...`) and receive per-language metadata via `src/seo/SeoHead.tsx`.
- Canonical domain is `https://www.asamer.cz`; canonical and hreflang tags are emitted for every page.
- `public/robots.txt` allows crawling and points to `https://www.asamer.cz/sitemap.xml`.
- `scripts/generate-sitemap.ts` builds the sitemap from the central route config; commit the generated `public/sitemap.xml`.

## Analytics

- GA4 is loaded via `VITE_GA_MEASUREMENT_ID` and gated behind cookie consent (see `Ga4Loader`, `AnalyticsTracker`, `lib/analytics.ts`).
- All CTA/page-view events should be added via `trackEvent` once consent is granted.

## Environment Notes

- `src/lib/language.ts` defines supported languages and helpers for localized links.
- When adding a page, register its SEO metadata in `src/seo/routes.ts`, add translations, and re-run `npm run generate:sitemap`.
