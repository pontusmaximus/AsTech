export type ConsentCategory = 'necessary' | 'functional' | 'analytics' | 'marketing';

export type ConsentCategories = Record<ConsentCategory, boolean>;

export type ConsentSource = 'banner' | 'settings';

export interface CookieConsentState {
  version: number;
  updatedAt: string;
  source: ConsentSource;
  categories: ConsentCategories;
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export const COOKIE_CONSENT_VERSION = 1;
export const COOKIE_CONSENT_STORAGE_KEY = 'asamer-cookie-consent';
export const COOKIE_CONSENT_COOKIE_NAME = 'asamer_cookie_consent';

const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 180;

const isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

const safeParse = (value: string): unknown => {
  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
};

const normalizeConsent = (value: unknown): CookieConsentState | null => {
  if (!value || typeof value !== 'object') return null;
  const candidate = value as Partial<CookieConsentState>;
  if (!candidate.categories || typeof candidate.categories !== 'object') return null;

  const categories = candidate.categories as Partial<ConsentCategories>;

  return {
    version: typeof candidate.version === 'number' ? candidate.version : COOKIE_CONSENT_VERSION,
    updatedAt: typeof candidate.updatedAt === 'string' ? candidate.updatedAt : new Date().toISOString(),
    source: candidate.source === 'banner' ? 'banner' : 'settings',
    categories: {
      necessary: true,
      functional: Boolean(categories.functional),
      analytics: Boolean(categories.analytics),
      marketing: Boolean(categories.marketing),
    },
  };
};

const readConsentFromCookie = (): CookieConsentState | null => {
  if (!isBrowser) return null;
  const prefix = `${COOKIE_CONSENT_COOKIE_NAME}=`;
  const found = document.cookie
    .split(';')
    .map((cookie) => cookie.trim())
    .find((cookie) => cookie.startsWith(prefix));
  if (!found) return null;
  const encoded = found.slice(prefix.length);
  const decoded = decodeURIComponent(encoded);
  return normalizeConsent(safeParse(decoded));
};

export const readCookieConsent = (): CookieConsentState | null => {
  if (!isBrowser) return null;

  const fromStorage = localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
  if (fromStorage) {
    const normalized = normalizeConsent(safeParse(fromStorage));
    if (normalized) return normalized;
  }

  return readConsentFromCookie();
};

const buildCookieString = (payload: string) => {
  const base = `${COOKIE_CONSENT_COOKIE_NAME}=${encodeURIComponent(payload)}; path=/; max-age=${COOKIE_MAX_AGE_SECONDS}; SameSite=Lax`;
  return window.location.protocol === 'https:' ? `${base}; Secure` : base;
};

const persistCookieConsent = (consent: CookieConsentState) => {
  if (!isBrowser) return;
  const serialized = JSON.stringify(consent);
  localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, serialized);
  document.cookie = buildCookieString(serialized);
};

export const createAcceptAllCategories = (): ConsentCategories => ({
  necessary: true,
  functional: true,
  analytics: true,
  marketing: true,
});

export const createEssentialOnlyCategories = (): ConsentCategories => ({
  necessary: true,
  functional: false,
  analytics: false,
  marketing: false,
});

export const saveCookieConsent = (
  categories: Partial<ConsentCategories>,
  source: ConsentSource
): CookieConsentState => {
  const normalized: CookieConsentState = {
    version: COOKIE_CONSENT_VERSION,
    updatedAt: new Date().toISOString(),
    source,
    categories: {
      necessary: true,
      functional: Boolean(categories.functional),
      analytics: Boolean(categories.analytics),
      marketing: Boolean(categories.marketing),
    },
  };

  persistCookieConsent(normalized);
  return normalized;
};

export const applyConsentToIntegrations = (categories: ConsentCategories) => {
  if (!isBrowser) return;

  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      analytics_storage: categories.analytics ? 'granted' : 'denied',
      ad_storage: categories.marketing ? 'granted' : 'denied',
      ad_user_data: categories.marketing ? 'granted' : 'denied',
      ad_personalization: categories.marketing ? 'granted' : 'denied',
      functionality_storage: categories.functional ? 'granted' : 'denied',
      personalization_storage: categories.functional ? 'granted' : 'denied',
      security_storage: 'granted',
    });
  }

  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({
      event: 'asamer_consent_update',
      consent: categories,
    });
  }

  window.dispatchEvent(
    new CustomEvent('asamer:cookie-consent-changed', {
      detail: categories,
    })
  );
};
