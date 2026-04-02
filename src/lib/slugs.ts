import type { Language } from '../i18n';

/**
 * Canonical (CZ) slug → localized slug per language.
 * Only entries whose slug differs across languages are listed.
 * Proper-noun pages (mayer, ott, barbaric) and the home page are
 * intentionally omitted — they use the same slug everywhere.
 */
export const SLUG_TRANSLATIONS: Record<string, Record<Language, string>> = {
  '/financovani': {
    de: '/finanzierung',
    en: '/financing',
    cz: '/financovani',
    sk: '/financovanie',
    hu: '/finanszirozas',
  },
  '/reseni': {
    de: '/loesungen',
    en: '/solutions',
    cz: '/reseni',
    sk: '/riesenia',
    hu: '/megoldasok',
  },
  '/servis': {
    de: '/service',
    en: '/service',
    cz: '/servis',
    sk: '/servis',
    hu: '/szerviz',
  },
  '/pouzite-stroje': {
    de: '/gebrauchtmaschinen',
    en: '/used-machines',
    cz: '/pouzite-stroje',
    sk: '/pouzite-stroje',
    hu: '/hasznalt-gepek',
  },
  '/kontakt': {
    de: '/kontakt',
    en: '/contact',
    cz: '/kontakt',
    sk: '/kontakt',
    hu: '/kapcsolat',
  },
  '/imprint': {
    de: '/impressum',
    en: '/imprint',
    cz: '/imprint',
    sk: '/imprint',
    hu: '/impresszum',
  },
};

// Reverse map: any localized slug (with leading /) → canonical CZ slug
const reverseMap = new Map<string, string>();
for (const [czSlug, translations] of Object.entries(SLUG_TRANSLATIONS)) {
  for (const localizedSlug of Object.values(translations)) {
    reverseMap.set(localizedSlug, czSlug);
  }
}

/** Given a CZ slug, return the localized slug for `lang`. Passthrough if not in the map. */
export const localizeSlug = (czSlug: string, lang: Language): string =>
  SLUG_TRANSLATIONS[czSlug]?.[lang] ?? czSlug;

/** Given any localized slug (with leading /), return the canonical CZ slug. */
export const toCanonicalSlug = (slug: string): string =>
  reverseMap.get(slug) ?? slug;

/** Translate a slug from one language to another. */
export const translateSlug = (slug: string, _fromLang: Language, toLang: Language): string => {
  const czSlug = toCanonicalSlug(slug);
  return localizeSlug(czSlug, toLang);
};

/** Return all unique slug variants (without leading /) for route registration. */
export const getAllSlugVariants = (czSlug: string): string[] => {
  const translations = SLUG_TRANSLATIONS[czSlug];
  if (!translations) return [czSlug.replace(/^\//, '')];
  return [...new Set(Object.values(translations))].map((s) => s.replace(/^\//, ''));
};
