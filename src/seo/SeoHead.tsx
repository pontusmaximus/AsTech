import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../App';
import { buildCanonicalUrl, DEFAULT_LANGUAGE, HREFLANG_DEFAULT, INDEXABLE_LANGUAGES, languageToHreflang, NON_INDEXABLE_LANGUAGES } from '../lib/language';
import { DEFAULT_OG_IMAGE, getFallbackMeta, getSlugForLang, isRouteAvailable, SEO_ROUTES } from './routes';
import { articleSchema, organizationSchema, websiteSchema, localBusinessSchemas } from './structuredData';
import { CONTENT_DATES } from './generated/contentDates';
import type { SeoRouteKey } from './routes';
import type { Language } from '../i18n';

interface SeoHeadProps {
  /** Route key for static pages. Optional for product pages that supply all data via overrides. */
  routeKey?: SeoRouteKey;
  overrides?: {
    title?: string;
    description?: string;
    image?: string;
    keywords?: string[];
    slug?: string;
  };
  /** Custom hreflang URL builder for product pages (receives language, returns full slug path). */
  buildAlternateSlug?: (lang: Language) => string;
  /** Open Graph type — defaults to "website", use "product" for product pages. */
  ogType?: string;
  structuredData?: Array<Record<string, unknown>>;
  robots?: string;
}

/**
 * Ratgeberseiten werden zusaetzlich als `Article` ausgezeichnet (Masterplan 4.2).
 * Zentral hier statt in jeder der sechs Seiten, damit keine vergessen wird und
 * die Ausgabe mit dem Prerender-Output uebereinstimmt.
 */
const GUIDE_ROUTE_KEYS: SeoRouteKey[] = [
  'guidePurVsEva',
  'guideEdgebander',
  'guideWarehouseAutomation',
  'guidePanelSawComparison',
  'guideFundingCz',
  'guideVacuumLifter',
];

const SeoHead = ({ routeKey, overrides = {}, buildAlternateSlug, ogType = 'website', structuredData = [], robots = 'index,follow' }: SeoHeadProps) => {
  const { lang } = useLanguage();
  const routeConfig = routeKey ? SEO_ROUTES[routeKey] : undefined;
  const slug = overrides.slug ?? (routeConfig ? getSlugForLang(routeConfig, lang) : '/');
  const metaForLang = routeConfig?.meta[lang] ?? getFallbackMeta(lang) ?? getFallbackMeta(DEFAULT_LANGUAGE);
  const title = overrides.title ?? metaForLang.title;
  const description = overrides.description ?? metaForLang.description;
  const image = overrides.image ?? DEFAULT_OG_IMAGE;
  const canonical = buildCanonicalUrl(lang, slug);
  const effectiveRobots = NON_INDEXABLE_LANGUAGES.includes(lang) ? 'noindex,follow' : robots;

  const dates = routeKey ? CONTENT_DATES[routeKey] : undefined;
  const schemas: Array<Record<string, unknown>> = [...structuredData];

  if (routeKey && GUIDE_ROUTE_KEYS.includes(routeKey)) {
    schemas.push(
      articleSchema({
        headline: title.split('|')[0].trim(),
        description,
        url: canonical,
        inLanguage: languageToHreflang(lang),
        image,
        datePublished: dates?.published,
        dateModified: dates?.modified,
      }),
    );
  }

  // Sitewide-Entitaeten auf den Seiten, auf die sie gehoeren. Vorher standen sie
  // nur im Prerender-Head — damit fehlten sie jedem Crawler, der die Seite
  // ausfuehrt, und der Prerenderer war eine zweite Quelle dafuer.
  if (routeKey === 'home') schemas.push(organizationSchema(), websiteSchema(), ...localBusinessSchemas());
  if (routeKey === 'contact') schemas.push(...localBusinessSchemas());

  return (
    <>
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={effectiveRobots} />

      <link rel="canonical" href={canonical} />
      {INDEXABLE_LANGUAGES.filter((indexableLang) =>
        // Eine Sprache, die diese Seite nicht hat, darf nicht als hreflang-
        // Alternate auftauchen: die URL antwortet mit 301.
        routeConfig ? isRouteAvailable(routeConfig, indexableLang) : true,
      ).map((indexableLang) => {
        const altSlug = buildAlternateSlug
          ? buildAlternateSlug(indexableLang)
          : routeConfig
            ? getSlugForLang(routeConfig, indexableLang)
            : slug;
        return (
          <link
            key={indexableLang}
            rel="alternate"
            hrefLang={languageToHreflang(indexableLang)}
            href={buildCanonicalUrl(indexableLang, altSlug)}
          />
        );
      })}
      <link
        rel="alternate"
        hrefLang="x-default"
        href={buildCanonicalUrl(
          HREFLANG_DEFAULT,
          buildAlternateSlug
            ? buildAlternateSlug(HREFLANG_DEFAULT)
            : routeConfig
              ? getSlugForLang(routeConfig, HREFLANG_DEFAULT)
              : slug,
        )}
      />

      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Asamer Technologie" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content={languageToHreflang(lang)} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:url" content={canonical} />

      </Helmet>

      {/*
        JSON-LD bewusst *ausserhalb* von Helmet.

        Grund: react-helmet-async 3 fuellt unter React 19 mit
        `renderToPipeableStream` seinen Server-Context nicht — was in Helmet
        landet, taucht im prerenderten HTML nicht auf. Ausserhalb gerendert
        steht es im SSR-Output und damit in der ausgelieferten Datei.
        JSON-LD im Body ist fuer Google gleichwertig zu JSON-LD im Head.
      */}
      {schemas.filter(Boolean).map((schema, index) => (
        <script
          key={`ld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
};

export default SeoHead;
