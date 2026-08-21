/**
 * Product-JSON-LD fuer die Katalog-Produktseiten (Masterplan 4.2 Punkt 1).
 *
 * Bis hierher trugen nur Gebrauchtmaschinen mit Preis ein `Product`-Schema.
 * Die 465 Katalogseiten — der eigentliche Bestand der Website — hatten keins.
 * Das war der groesste Einzelposten im SEO-Audit.
 *
 * Eine Quelle fuer Prerenderer *und* React-Seite, damit beide dasselbe ausgeben.
 *
 * Bewusst **ohne** `offers`: es werden keine Preise veroeffentlicht, und ein
 * `Offer` ohne `price` bzw. `priceSpecification` ist fuer Google ein Fehler,
 * nicht bloss eine Luecke. Ein erfundener Preis kommt nicht in Frage. Folge:
 * Google meldet fuer diese Seiten weiterhin das fehlende Feld `offers` als
 * *Warnung*. Das ist ohne veroeffentlichte Preise nicht aufloesbar und in
 * `docs/seo/04-strukturierte-daten.md` als Entscheidung fuer Max festgehalten.
 */

import { CANONICAL_DOMAIN } from '../lib/language';
import { productSchema } from './structuredData';

/** Hersteller hinter der jeweiligen Handelsmarke. */
export const BRAND_MANUFACTURER: Record<string, string> = {
  OTT: 'Paul OTT GmbH',
  Mayer: 'Mayer Maschinenbau GmbH',
  BARBARIC: 'BARBARIC GmbH',
  Gannomat: 'Gannomat GmbH',
};

export interface CatalogProductLdInput {
  /** Handelsmarke, z. B. `OTT`. */
  brand: string;
  /** Modellbezeichnung ohne Marke, z. B. `Storm`. */
  name: string;
  /** Produkt-Slug — dient als SKU. */
  slug: string;
  /** Lokalisierte Beschreibung (Meta-Description der Seite). */
  description: string;
  /** Lokalisiertes Kategorielabel. */
  categoryLabel?: string;
  /** Produktbild, relativ oder absolut. */
  image?: string;
  /** Absolute URL der Produktseite. */
  url: string;
}

export const catalogProductSchema = (input: CatalogProductLdInput) =>
  productSchema({
    name: `${input.brand} ${input.name}`,
    model: input.name,
    description: input.description,
    brand: input.brand,
    manufacturer: BRAND_MANUFACTURER[input.brand] ?? input.brand,
    category: input.categoryLabel,
    sku: input.slug,
    image: input.image,
    url: input.url,
    itemCondition: 'new',
  });

/** Absolute URL aus einem ggf. relativen Bildpfad. */
export const absoluteImage = (src?: string): string | undefined =>
  !src ? undefined : src.startsWith('http') ? src : `${CANONICAL_DOMAIN}${src}`;
