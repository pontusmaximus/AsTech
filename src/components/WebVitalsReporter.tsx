import { useEffect } from 'react';
import { canTrackAnalytics } from '../lib/analytics';

const reportMetric = (metric: { name: string; value: number; id: string; rating?: string }) => {
  if (!canTrackAnalytics() || typeof window.gtag !== 'function') return;
  window.gtag('event', metric.name, {
    event_category: 'Web Vitals',
    event_label: metric.id,
    value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
    metric_rating: metric.rating,
    non_interaction: true,
  });
};

const WebVitalsReporter = () => {
  useEffect(() => {
    let cancelled = false;
    import('web-vitals').then(({ onCLS, onFCP, onINP, onLCP, onTTFB }) => {
      if (cancelled) return;
      onCLS(reportMetric);
      onFCP(reportMetric);
      onINP(reportMetric);
      onLCP(reportMetric);
      onTTFB(reportMetric);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return null;
};

export default WebVitalsReporter;
