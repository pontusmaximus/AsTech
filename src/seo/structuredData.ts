import { CANONICAL_DOMAIN } from '../lib/language';

const LOGO_URL = `${CANONICAL_DOMAIN}/asamer-logo.png`;

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

export const faqPageSchema = (entries: Array<{ question: string; answer: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: entries.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: { '@type': 'Answer', text: answer },
  })),
});

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map(({ name, url }, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name,
    item: url,
  })),
});

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
