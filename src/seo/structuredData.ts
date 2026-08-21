import { CANONICAL_DOMAIN } from '../lib/language';
import organizationProfiles from '../../config/organization-profiles.json';

const LOGO_URL = `${CANONICAL_DOMAIN}/brand/png/horizontal/asamer-logo-horizontal.png`;
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
  /**
   * Gepflegt in `config/organization-profiles.json` — dort steht auch, welche
   * Profile noch fehlen. Bewusst ausgelagert, damit eine gepruefte URL ohne
   * Code-Aenderung nachgetragen werden kann.
   */
  sameAs: organizationProfiles.sameAs,
  /**
   * Register-Identifikatoren aus dem eigenen Impressum (src/pages/ImprintPage.tsx).
   * Sie sind der Hebel gegen den Markensuche-Befund aus Masterplan 4.3: die Suche
   * nach "asamer" wird von anderen Asamer-Unternehmen belegt, und eindeutige
   * Register-IDs sind das staerkste Signal, das Google zur Entitaetsunterscheidung
   * heranzieht.
   */
  vatID: 'ATU72811406',
  taxID: 'ATU72811406',
  identifier: [
    { '@type': 'PropertyValue', name: 'Firmenbuchnummer', value: 'FN 481620 s' },
    { '@type': 'PropertyValue', name: 'Firmenbuchgericht', value: 'Landesgericht Wels' },
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Salzburgerstrasse 73',
    addressLocality: 'Lambach',
    postalCode: '4650',
    addressCountry: 'AT',
  },
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
    // Firmierung und Register-IDs wie im Impressum.
    legalName: 'ASAMER spol. s r.o.',
    vatID: 'CZ60699761',
    taxID: '60699761',
    identifier: [
      { '@type': 'PropertyValue', name: 'IČO', value: '60699761' },
      { '@type': 'PropertyValue', name: 'Obchodní rejstřík', value: 'Krajský soud v Brně, oddíl C, vložka 14536' },
    ],
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

const ITEM_CONDITION_MAP = {
  new: 'https://schema.org/NewCondition',
  used: 'https://schema.org/UsedCondition',
  refurbished: 'https://schema.org/RefurbishedCondition',
} as const;

export type ProductCondition = keyof typeof ITEM_CONDITION_MAP;

export interface ProductSchemaInput {
  name: string;
  description: string;
  brand: string;
  url: string;
  /** Modellbezeichnung. Bei Katalogprodukten identisch mit `name` ohne Markenpraefix. */
  model?: string;
  image?: string | string[];
  category?: string;
  manufacturer?: string;
  sku?: string;
  itemCondition?: ProductCondition;
  productionDate?: string;
  offers?: {
    price: number;
    priceCurrency: string;
    availability: string;
    url?: string;
  };
}

export const productSchema = (input: ProductSchemaInput) => {
  const condition = ITEM_CONDITION_MAP[input.itemCondition ?? 'new'];
  const imageInput = Array.isArray(input.image) ? input.image : input.image ? [input.image] : [];
  const images = imageInput.length > 0
    ? imageInput.map((src) => (src.startsWith('http') ? src : `${CANONICAL_DOMAIN}${src}`))
    : undefined;

  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: input.name,
    description: input.description,
    url: input.url,
    brand: { '@type': 'Brand', name: input.brand },
    manufacturer: { '@type': 'Organization', name: input.manufacturer ?? input.brand },
    itemCondition: condition,
    ...(images && { image: images }),
    ...(input.model && { model: input.model }),
    ...(input.category && { category: input.category }),
    ...(input.sku && { sku: input.sku }),
    ...(input.productionDate && { productionDate: input.productionDate }),
  };

  if (input.offers) {
    schema.offers = {
      '@type': 'Offer',
      price: input.offers.price,
      priceCurrency: input.offers.priceCurrency,
      availability: input.offers.availability,
      itemCondition: condition,
      url: input.offers.url ?? input.url,
    };
  }

  return schema;
};

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
});

export const itemListSchema = (
  name: string,
  items: Array<{ name: string; url: string; image?: string; description?: string }>,
) => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name,
  numberOfItems: items.length,
  // Summary-page-Format (ListItem + url). Bewusst KEINE verschachtelten Product-
  // Objekte: Produkte ohne Preis/Bewertung würden sonst als "ungültige
  // Produkt-Snippets" in der Search Console gemeldet.
  itemListElement: items.map(({ name: itemName, url }, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: itemName,
    url,
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

/**
 * Article fuer die Ratgeberseiten (Masterplan 4.2 Punkt 3).
 *
 * `author` ist die Organisation, nicht eine Person — die Ratgeber sind
 * Unternehmenspublikationen ohne namentliche Autorenschaft.
 * `datePublished` wird weggelassen, wenn es nicht belastbar aus der
 * Git-Historie ableitbar ist (siehe src/seo/generated/contentDates.ts).
 * Die bestehende FAQPage bleibt daneben bestehen.
 */
export const articleSchema = (input: {
  headline: string;
  description: string;
  url: string;
  inLanguage: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: input.headline,
  description: input.description,
  mainEntityOfPage: { '@type': 'WebPage', '@id': input.url },
  url: input.url,
  inLanguage: input.inLanguage,
  // Vollstaendiges Organization-Objekt statt reiner @id-Referenz: das
  // Organization-Schema steht nur auf Start- und Kontaktseite im Head, auf
  // einer Ratgeberseite liefe die Referenz sonst ins Leere und Google meldete
  // ein fehlendes `author.name`. Die @id bleibt fuer die Graph-Verknuepfung drin.
  author: { '@type': 'Organization', '@id': ORG_ID, name: 'Asamer Technologie GmbH', url: CANONICAL_DOMAIN },
  publisher: {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: 'Asamer Technologie GmbH',
    url: CANONICAL_DOMAIN,
    logo: { '@type': 'ImageObject', url: LOGO_URL },
  },
  ...(input.image && { image: input.image.startsWith('http') ? input.image : `${CANONICAL_DOMAIN}${input.image}` }),
  ...(input.datePublished && { datePublished: input.datePublished }),
  ...(input.dateModified && { dateModified: input.dateModified }),
});
