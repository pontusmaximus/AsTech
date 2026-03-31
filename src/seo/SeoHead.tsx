import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../App';
import { buildCanonicalUrl, DEFAULT_LANGUAGE, HREFLANG_DEFAULT, languageToHreflang, SUPPORTED_LANGUAGES } from '../lib/language';
import { DEFAULT_OG_IMAGE, getFallbackMeta, getSlugForLang, SEO_ROUTES } from './routes';
import type { SeoRouteKey } from './routes';

interface SeoHeadProps {
  routeKey: SeoRouteKey;
  overrides?: {
    title?: string;
    description?: string;
    image?: string;
    keywords?: string[];
    slug?: string;
  };
  structuredData?: Array<Record<string, unknown>>;
  robots?: string;
}

const SeoHead = ({ routeKey, overrides = {}, structuredData = [], robots = 'index,follow' }: SeoHeadProps) => {
  const { lang } = useLanguage();
  const routeConfig = SEO_ROUTES[routeKey];
  const slug = overrides.slug ?? (routeConfig ? getSlugForLang(routeConfig, lang) : '/');
  const metaForLang = routeConfig?.meta[lang] ?? getFallbackMeta(lang) ?? getFallbackMeta(DEFAULT_LANGUAGE);
  const title = overrides.title ?? metaForLang.title;
  const description = overrides.description ?? metaForLang.description;
  const keywords = overrides.keywords ?? metaForLang.keywords;
  const image = overrides.image ?? routeConfig?.image ?? DEFAULT_OG_IMAGE;
  const canonical = buildCanonicalUrl(lang, slug);

  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords.join(', ')} />}
      <meta name="robots" content={robots} />

      <link rel="canonical" href={canonical} />
      {SUPPORTED_LANGUAGES.map((supportedLang) => {
        const langSlug = routeConfig ? getSlugForLang(routeConfig, supportedLang) : slug;
        return (
          <link
            key={supportedLang}
            rel="alternate"
            hrefLang={languageToHreflang(supportedLang)}
            href={buildCanonicalUrl(supportedLang, langSlug)}
          />
        );
      })}
      <link rel="alternate" hrefLang="x-default" href={buildCanonicalUrl(HREFLANG_DEFAULT, routeConfig ? getSlugForLang(routeConfig, HREFLANG_DEFAULT) : slug)} />

      <meta property="og:type" content="website" />
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

      {structuredData
        .filter(Boolean)
        .map((schema, index) => (
          <script
            key={`ld-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
    </Helmet>
  );
};

export default SeoHead;
