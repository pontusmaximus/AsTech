import { CANONICAL_DOMAIN } from '../lib/language';

const LOGO_URL = `${CANONICAL_DOMAIN}/asamer-logo.png`;
const ORG_ID = `${CANONICAL_DOMAIN}/#organization`;

export const organizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': ORG_ID,
  name: 'Asamer Technologie GmbH',
  legalName: 'Asamer Technologie GmbH',
  url: CANONICAL_DOMAIN,
  logo: LOGO_URL,
  description: 'Exklusiver OTT-Vertriebspartner und autorisierter Händler für Mayer, BARBARIC und Gannomat in CZ, SK und HU.',
  foundingDate: '1994',
  numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 10, maxValue: 50 },
  sameAs: [
    'https://www.linkedin.com/company/asamer-technologie',
  ],
  areaServed: [
    { '@type': 'Country', name: 'Czech Republic', sameAs: 'https://en.wikipedia.org/wiki/Czech_Republic' },
    { '@type': 'Country', name: 'Slovakia', sameAs: 'https://en.wikipedia.org/wiki/Slovakia' },
    { '@type': 'Country', name: 'Hungary', sameAs: 'https://en.wikipedia.org/wiki/Hungary' },
  ],
  brand: [
    { '@type': 'Brand', name: 'OTT' },
    { '@type': 'Brand', name: 'Mayer' },
    { '@type': 'Brand', name: 'BARBARIC' },
    { '@type': 'Brand', name: 'Gannomat' },
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: 'office@asamer.net',
      telephone: '+43 664 26 33 132',
      areaServed: [
        { '@type': 'Country', name: 'Austria' },
        { '@type': 'Country', name: 'Czech Republic' },
        { '@type': 'Country', name: 'Slovakia' },
        { '@type': 'Country', name: 'Hungary' },
        { '@type': 'Country', name: 'Germany' },
      ],
      availableLanguage: ['de', 'en', 'cs', 'sk', 'hu'],
    },
    {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'office@asamer.net',
      telephone: '+420 724 056 965',
      areaServed: [
        { '@type': 'Country', name: 'Czech Republic' },
        { '@type': 'Country', name: 'Slovakia' },
        { '@type': 'Country', name: 'Hungary' },
      ],
      availableLanguage: ['cs', 'sk', 'hu', 'de', 'en'],
    },
  ],
});

export const localBusinessSchemas = () => [
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${CANONICAL_DOMAIN}/#lambach`,
    name: 'Asamer Technologie GmbH',
    image: LOGO_URL,
    parentOrganization: { '@id': ORG_ID },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Salzburgerstrasse 73',
      addressLocality: 'Lambach',
      postalCode: '4650',
      addressCountry: 'AT',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 48.0887, longitude: 13.8726 },
    telephone: '+43 664 26 33 132',
    email: 'office@asamer.net',
    url: CANONICAL_DOMAIN,
    priceRange: '€€€',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
    areaServed: [
      { '@type': 'Country', name: 'Austria' },
      { '@type': 'Country', name: 'Germany' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${CANONICAL_DOMAIN}/#brno`,
    name: 'ASAMER s.r.o.',
    image: LOGO_URL,
    parentOrganization: { '@id': ORG_ID },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Šámalova 748/107',
      addressLocality: 'Brno',
      postalCode: '615 00',
      addressCountry: 'CZ',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 49.1951, longitude: 16.6346 },
    telephone: '+420 724 056 965',
    email: 'office@asamer.net',
    url: `${CANONICAL_DOMAIN}/cz/kontakt`,
    priceRange: '€€€',
    hasMap: 'https://maps.google.com/?q=49.1951,16.6346',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
    areaServed: [
      { '@type': 'Country', name: 'Czech Republic' },
      { '@type': 'Country', name: 'Slovakia' },
      { '@type': 'Country', name: 'Hungary' },
    ],
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
  '@id': `${CANONICAL_DOMAIN}/#website`,
  name: 'Asamer Technologie',
  url: CANONICAL_DOMAIN,
  description: 'Exklusiver OTT-Vertriebspartner und autorisierter Händler für Mayer, BARBARIC und Gannomat in CZ, SK und HU. Maschinen, Automatisierung und Service.',
  publisher: { '@id': ORG_ID },
  inLanguage: ['de', 'en', 'cs', 'sk', 'hu'],
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${CANONICAL_DOMAIN}/cz/?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
});

export const itemListSchema = (
  name: string,
  items: Array<{ name: string; url: string; image?: string; description?: string }>,
) => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name,
  numberOfItems: items.length,
  itemListElement: items.map(({ name: itemName, url, image, description }, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Product',
      name: itemName,
      url,
      ...(image && { image }),
      ...(description && { description }),
    },
  })),
});

export const howToSchema = (
  name: string,
  description: string,
  steps: Array<{ name: string; text: string }>,
) => ({
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name,
  description,
  step: steps.map(({ name: stepName, text }, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: stepName,
    text,
  })),
});
