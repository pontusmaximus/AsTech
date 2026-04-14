import { useEffect } from 'react';
import { readCookieConsent } from '../lib/cookieConsent';
import type { ConsentCategories } from '../lib/cookieConsent';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const SCRIPT_ID = 'asamer-ga4-script';

const loadGtagScript = (measurementId: string) => {
  if (document.getElementById(SCRIPT_ID)) return;
  const script = document.createElement('script');
  script.id = SCRIPT_ID;
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);
};

const Ga4Loader = () => {
  useEffect(() => {
    const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;
    if (!measurementId) {
      if (import.meta.env.DEV) {
        // eslint-disable-next-line no-console
        console.warn('[GA4] VITE_GA_MEASUREMENT_ID is missing; analytics is disabled.');
      }
      return;
    }

    if (!window.dataLayer) {
      window.dataLayer = [];
    }

    if (typeof window.gtag !== 'function') {
      window.gtag = (...args: unknown[]) => {
        window.dataLayer?.push(args);
      };
    }

    // Consent Mode v2 default: everything denied until the user opts in.
    window.gtag('consent', 'default', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      functionality_storage: 'denied',
      personalization_storage: 'denied',
      security_storage: 'granted',
    });

    window.gtag('js', new Date());
    window.gtag('config', measurementId, {
      send_page_view: false,
      anonymize_ip: true,
    });

    const existing = readCookieConsent();
    if (existing?.categories.analytics) {
      loadGtagScript(measurementId);
    }

    const handleConsent = (event: Event) => {
      const detail = (event as CustomEvent<ConsentCategories>).detail;
      if (detail?.analytics) {
        loadGtagScript(measurementId);
      }
    };

    window.addEventListener('asamer:cookie-consent-changed', handleConsent);
    return () => window.removeEventListener('asamer:cookie-consent-changed', handleConsent);
  }, []);

  return null;
};

export default Ga4Loader;
