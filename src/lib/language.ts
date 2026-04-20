import type { Language } from '../i18n';

export interface LanguageRouteConfig {
  supported: Language[];
  defaultLanguage: Language;
}

export const SUPPORTED_LANGUAGES: Language[] = ['de', 'en', 'cz', 'sk', 'hu'];
/**
 * Sprachen, die indexiert werden sollen. SK ist ausgeschlossen, weil der
 * Content zu >95 % per Fallback aus CZ stammt und Google das als Duplicate
 * Content gewertet hat. SK bleibt in SUPPORTED_LANGUAGES, damit der
 * Sprachwechsler und das App-Routing weiter funktionieren.
 */
export const INDEXABLE_LANGUAGES: Language[] = ['de', 'en', 'cz', 'hu'];
export const NON_INDEXABLE_LANGUAGES: Language[] = ['sk'];
export const DEFAULT_LANGUAGE: Language = 'cz';
export const HREFLANG_DEFAULT: Language = 'cz';
export const CANONICAL_DOMAIN = 'https://asamer.cz';

export const LANGUAGE_ROUTE_CONFIG: LanguageRouteConfig = {
  supported: SUPPORTED_LANGUAGES,
  defaultLanguage: DEFAULT_LANGUAGE,
};

export const isSupportedLanguage = (value: string | undefined | null): value is Language => {
  return Boolean(value && SUPPORTED_LANGUAGES.includes(value as Language));
};

const normalizeSlug = (slug: string | undefined | null) => {
  if (!slug || slug === '/' || slug === '.') return '';
  return slug.startsWith('/') ? slug : `/${slug}`;
};

export const buildLocalizedPath = (lang: Language, slug: string = '/'): string => {
  const normalizedSlug = normalizeSlug(slug);
  return normalizedSlug ? `/${lang}${normalizedSlug}` : `/${lang}`;
};

export const buildCanonicalUrl = (lang: Language, slug: string = '/'): string => {
  return `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, slug)}`;
};

export const stripLanguageFromPath = (pathname: string): string => {
  if (!pathname) return '/';
  const normalized = pathname.startsWith('/') ? pathname : `/${pathname}`;
  const segments = normalized.split('/');
  const first = segments[1];
  if (!first) return '/';
  if (isSupportedLanguage(first)) {
    const rest = segments.slice(2).join('/');
    return rest ? `/${rest}` : '/';
  }
  return normalized === '' ? '/' : normalized;
};

export const removeTrailingSlash = (value: string): string => {
  if (value.length <= 1) return value;
  return value.endsWith('/') ? value.replace(/\/+$/, '') || '/' : value;
};

export const languageToHreflang = (lang: Language): string => {
  if (lang === 'cz') {
    return 'cs';
  }
  return lang;
};
