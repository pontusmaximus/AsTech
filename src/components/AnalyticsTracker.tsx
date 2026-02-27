import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '../lib/analytics';
import type { ConsentCategories } from '../lib/cookieConsent';

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname, location.search);
  }, [location.pathname, location.search]);

  useEffect(() => {
    const onConsentChange = (event: Event) => {
      const detail = (event as CustomEvent<ConsentCategories>).detail;
      if (detail?.analytics) {
        trackPageView(location.pathname, location.search);
      }
    };

    window.addEventListener('asamer:cookie-consent-changed', onConsentChange);
    return () => {
      window.removeEventListener('asamer:cookie-consent-changed', onConsentChange);
    };
  }, [location.pathname, location.search]);

  return null;
};

export default AnalyticsTracker;
