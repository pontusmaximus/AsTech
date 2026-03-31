import type { Language } from '../i18n';

export interface LanguageRouteConfig {
  supported: Language[];
  defaultLanguage: Language;
}

export const SUPPORTED_LANGUAGES: Language[] = ['de', 'en', 'cz', 'sk', 'hu'];
export const DEFAULT_LANGUAGE: Language = 'cz';
export const HREFLANG_DEFAULT: Language = 'de';
export const CANONICAL_DOMAIN = 'https://www.asamer.cz';

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
