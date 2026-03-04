import { CANONICAL_DOMAIN } from '../lib/language';

const LOGO_URL = `${CANONICAL_DOMAIN}/images/hero-bg.jpg`;

export const organizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Asamer Technologie GmbH',
  legalName: 'Asamer Technologie GmbH',
  url: CANONICAL_DOMAIN,
  logo: LOGO_URL,
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: 'office@asamer.net',
      telephone: '+43 664 26 33 132',
      areaServed: ['AT', 'CZ', 'SK', 'HU', 'DE'],
      availableLanguage: ['de', 'en', 'cs', 'sk', 'hu'],
    },
  ],
});

export const localBusinessSchemas = () => [
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Asamer Technologie GmbH',
    image: LOGO_URL,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Salzburgerstrasse 73',
      addressLocality: 'Lambach',
      postalCode: '4650',
      addressCountry: 'AT',
    },
    telephone: '+43 664 26 33 132',
    email: 'office@asamer.net',
    url: CANONICAL_DOMAIN,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'ASAMER spol. s r.o.',
    image: LOGO_URL,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Šámalova 748/107',
      addressLocality: 'Brno',
      postalCode: '615 00',
      addressCountry: 'CZ',
    },
    telephone: '+420 724 056 965',
    email: 'office@asamer.net',
    url: `${CANONICAL_DOMAIN}/cz/kontakt`,
  },
];

export const websiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Asamer Technologie',
  url: CANONICAL_DOMAIN,
  inLanguage: ['de', 'en', 'cs', 'sk', 'hu'],
  potentialAction: {
    '@type': 'SearchAction',
    target: `${CANONICAL_DOMAIN}/?s={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
});
