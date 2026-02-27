import { readCookieConsent } from './cookieConsent';

type AnalyticsPrimitive = string | number | boolean | null | undefined;
type AnalyticsParams = Record<string, AnalyticsPrimitive>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

const isBrowser = typeof window !== 'undefined';

const sanitizeParams = (params: AnalyticsParams): Record<string, string | number | boolean> => {
  const output: Record<string, string | number | boolean> = {};
  Object.entries(params).forEach(([key, value]) => {
    if (value === null || typeof value === 'undefined') return;
    if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
      output[key] = value;
    }
  });
  return output;
};

export const canTrackAnalytics = (): boolean => {
  if (!isBrowser) return false;
  const consent = readCookieConsent();
  return Boolean(consent?.categories.analytics);
};

export const trackEvent = (eventName: string, params: AnalyticsParams = {}): void => {
  if (!isBrowser || !canTrackAnalytics()) return;

  const payload = sanitizeParams(params);

  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, payload);
  }

  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({
      event: eventName,
      ...payload,
    });
  }
};

export const trackPageView = (pathname: string, search: string = ''): void => {
  const pagePath = `${pathname}${search}`;
  trackEvent('page_view', {
    page_path: pagePath,
    page_location: isBrowser ? window.location.href : pagePath,
    page_title: isBrowser ? document.title : '',
  });
};

export const getFlowSessionId = (flowName: string): string => {
  if (!isBrowser) return `ssr-${flowName}`;
  const key = `asamer-flow-session-${flowName}`;
  const existing = sessionStorage.getItem(key);
  if (existing) return existing;

  const generated = `${flowName}-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
  sessionStorage.setItem(key, generated);
  return generated;
};

