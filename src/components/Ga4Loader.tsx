import { useEffect } from 'react';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const SCRIPT_ID = 'asamer-ga4-script';

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

    // Consent Mode default: denied until user gives consent via cookie banner.
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

    if (document.getElementById(SCRIPT_ID)) return;

    const script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);
  }, []);

  return null;
};

export default Ga4Loader;
