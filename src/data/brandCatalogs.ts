/**
 * Gemeinsame Sicht auf die vier Markenkataloge.
 *
 * Hintergrund: Bis zu den Kategorieseiten gab es je Marke dieselben vier
 * Bausteine unter vier Namen — `GANNOMAT_CATEGORY_LABELS`, `OTT_CATEGORY_LABELS`
 * und so weiter. Solange nur die Hub-Seiten sie benutzten, war das
 * verschmerzbar: jede Hub-Seite kannte ihre Marke. Die Kategorieseite kennt sie
 * nicht — sie bekommt `ott` oder `mayer` aus der URL.
 *
 * Diese Datei bündelt die vier Kataloge hinter einer Beschreibung, damit es
 * *eine* Kategorieseite gibt statt vier fast gleicher. Sie fügt keine Daten
 * hinzu und dupliziert keine: alles zeigt auf die bestehenden Exporte.
 */

import type { Language } from '../i18n';
import type { CategorySeoContent } from './seo/types';

import {
  OTT_PRODUCTS,
  OTT_CATEGORY_LABELS,
  getOttCategorySlug,
  findOttCategoryBySlug,
  getOttProductsByCategory,
  buildOttProductPath,
} from './ottProducts';
import {
  MAYER_PRODUCTS,
  MAYER_CATEGORY_LABELS,
  MAYER_CATEGORY_SHORT,
  getMayerCategorySlug,
  findMayerCategoryBySlug,
  getMayerProductsByCategory,
  buildMayerProductPath,
} from './mayerProducts';
import {
  BARBARIC_PRODUCTS,
  BARBARIC_CATEGORY_LABELS,
  getBarbaricCategorySlug,
  findBarbaricCategoryBySlug,
  getBarbaricProductsByCategory,
  buildBarbaricProductPath,
} from './barbaricProducts';
import {
  GANNOMAT_PRODUCTS,
  GANNOMAT_CATEGORY_LABELS,
  getGannomatCategorySlug,
  findGannomatCategoryBySlug,
  getGannomatProductsByCategory,
  buildGannomatProductPath,
} from './gannomatProducts';

import { OTT_CATEGORY_SEO } from './seo/ottSeoContent';
import { MAYER_CATEGORY_SEO } from './seo/mayerSeoContent';
import { BARBARIC_CATEGORY_SEO } from './seo/barbaricSeoContent';
import { GANNOMAT_CATEGORY_SEO } from './seo/gannomatSeoContent';

export type BrandSlug = 'ott' | 'mayer' | 'barbaric' | 'gannomat';

/** Das Minimum, das eine Kategorieseite von einem Produkt braucht. */
export interface CatalogProduct {
  slug: string;
  name: string;
  category: string;
  image: string;
  tagline: Record<Language, string>;
  seoDescription: Record<Language, string>;
}

/**
 * Eine Spalte im Modellvergleich der Kategorieseite.
 *
 * Die vier Marken beschreiben ihre Technik unterschiedlich: OTT und Mayer haben
 * typisierte Felder (`specs.length`, `specs.cuttingLength`), Barbaric und
 * Gannomat freie Schluessel-Wert-Karten, deren Schluessel je Produkt variieren.
 * Ueber freie Karten laesst sich keine Tabelle mit gemeinsamen Spalten legen —
 * deshalb definiert jede Marke selbst, welche Spalten sie hat, und wer keine
 * definiert, bekommt keinen Vergleich statt einer halbleeren Tabelle.
 */
export interface ComparisonColumn {
  /**
   * Spaltenueberschrift je Sprache — bewusst als vollstaendiges Objekt statt
   * ueber `tr()`. Ein `tr()` mit variablen Argumenten trifft nie einen
   * Woerterbucheintrag und bliebe auf SK und HU dauerhaft im englischen
   * Fallback (siehe docs/seo/03-sprachversionen.md).
   */
  header: Record<Language, string>;
  value: (product: CatalogProduct) => string | undefined;
}

export interface BrandCatalog {
  brand: BrandSlug;
  /** Anzeigename der Marke, so wie er in Titles und Breadcrumbs steht. */
  label: string;
  /** Tailwind-Farbe des Markenakzents, wie auf der jeweiligen Hub-Seite. */
  accent: string;
  /** Alle Kategorien, die mindestens ein Produkt haben — in Katalogreihenfolge. */
  categories: string[];
  categoryLabel: (category: string, lang: Language) => string;
  /**
   * Bezeichnung fuer Title und H1 der Kategorieseite.
   *
   * Meist identisch mit `categoryLabel`. Bei Mayer nicht: dort heissen die
   * Kategorien nach dem Werkstoff ("Holz", "Aluminium und Kunststoff"), was als
   * Reiter neben dem Markennamen funktioniert, als Seitentitel aber nicht —
   * "Holz – Mayer" sagt niemandem, dass es um Plattenaufteilsaegen geht.
   */
  categoryTitleLabel: (category: string, lang: Language) => string;
  categorySlug: (category: string, lang: Language) => string;
  findCategoryBySlug: (slug: string) => string | undefined;
  productsIn: (category: string) => CatalogProduct[];
  productPath: (lang: Language, product: CatalogProduct) => string;
  categorySeo: (category: string) => CategorySeoContent | undefined;
  /** Leer, wenn die Marke keine vergleichbaren Felder ueber alle Produkte hat. */
  comparison: ComparisonColumn[];
}

/**
 * Reihenfolge der Kategorien: die, in der die Produkte im Katalog stehen.
 * Bewusst nicht alphabetisch — die Katalogreihenfolge ist die redaktionelle.
 */
const categoriesOf = (products: { category: string }[]): string[] => [
  ...new Set(products.map((p) => p.category)),
];

const CATALOGS: Record<BrandSlug, BrandCatalog> = {
  ott: {
    brand: 'ott',
    label: 'OTT',
    accent: 'primary',
    categories: categoriesOf(OTT_PRODUCTS),
    categoryLabel: (c, l) => OTT_CATEGORY_LABELS[c as never][l],
    categoryTitleLabel: (c, l) => OTT_CATEGORY_LABELS[c as never][l],
    categorySlug: (c, l) => getOttCategorySlug(c as never, l),
    findCategoryBySlug: (s) => findOttCategoryBySlug(s),
    productsIn: (c) => getOttProductsByCategory(c as never),
    productPath: (l, p) => buildOttProductPath(l, p as never),
    categorySeo: (c) => OTT_CATEGORY_SEO[c as never],
    comparison: [
      { header: { de: 'Länge', en: 'Length', cz: 'Délka', sk: 'Dĺžka', hu: 'Hossz' }, value: (p) => (p as unknown as { specs?: Record<string, string | undefined> }).specs?.length },
      { header: { de: 'Vorschub', en: 'Feed', cz: 'Posuv', sk: 'Posuv', hu: 'Előtolás' }, value: (p) => (p as unknown as { specs?: Record<string, string | undefined> }).specs?.feedSpeed },
      { header: { de: 'Kantenstärke', en: 'Edge thickness', cz: 'Tloušťka hrany', sk: 'Hrúbka hrany', hu: 'Szalagvastagság' }, value: (p) => (p as unknown as { specs?: Record<string, string | undefined> }).specs?.edgeThickness },
    ],
  },
  mayer: {
    brand: 'mayer',
    label: 'Mayer',
    accent: 'blue-500',
    categories: categoriesOf(MAYER_PRODUCTS),
    categoryLabel: (c, l) => MAYER_CATEGORY_LABELS[c as never][l],
    categoryTitleLabel: (c, l) => MAYER_CATEGORY_SHORT[c as never][l],
    categorySlug: (c, l) => getMayerCategorySlug(c as never, l),
    findCategoryBySlug: (s) => findMayerCategoryBySlug(s),
    productsIn: (c) => getMayerProductsByCategory(c as never),
    productPath: (l, p) => buildMayerProductPath(l, p as never),
    categorySeo: (c) => MAYER_CATEGORY_SEO[c as never],
    comparison: [
      { header: { de: 'Schnittlänge', en: 'Cutting length', cz: 'Délka řezu', sk: 'Dĺžka rezu', hu: 'Vágási hossz' }, value: (p) => (p as unknown as { specs?: Record<string, string | undefined> }).specs?.cuttingLength },
      { header: { de: 'Schnitthöhe', en: 'Cutting height', cz: 'Výška řezu', sk: 'Výška rezu', hu: 'Vágási magasság' }, value: (p) => (p as unknown as { specs?: Record<string, string | undefined> }).specs?.cuttingHeight },
      { header: { de: 'Vorschub', en: 'Feed', cz: 'Posuv', sk: 'Posuv', hu: 'Előtolás' }, value: (p) => (p as unknown as { specs?: Record<string, string | undefined> }).specs?.feedSpeed },
    ],
  },
  barbaric: {
    brand: 'barbaric',
    label: 'BARBARIC',
    accent: 'amber-500',
    categories: categoriesOf(BARBARIC_PRODUCTS),
    categoryLabel: (c, l) => BARBARIC_CATEGORY_LABELS[c as never][l],
    categoryTitleLabel: (c, l) => BARBARIC_CATEGORY_LABELS[c as never][l],
    categorySlug: (c, l) => getBarbaricCategorySlug(c as never, l),
    findCategoryBySlug: (s) => findBarbaricCategoryBySlug(s),
    productsIn: (c) => getBarbaricProductsByCategory(c as never),
    productPath: (l, p) => buildBarbaricProductPath(l, p as never),
    categorySeo: (c) => BARBARIC_CATEGORY_SEO[c as never],
    comparison: [],
  },
  gannomat: {
    brand: 'gannomat',
    label: 'Gannomat',
    accent: 'emerald-500',
    categories: categoriesOf(GANNOMAT_PRODUCTS),
    categoryLabel: (c, l) => GANNOMAT_CATEGORY_LABELS[c as never][l],
    categoryTitleLabel: (c, l) => GANNOMAT_CATEGORY_LABELS[c as never][l],
    categorySlug: (c, l) => getGannomatCategorySlug(c as never, l),
    findCategoryBySlug: (s) => findGannomatCategoryBySlug(s),
    productsIn: (c) => getGannomatProductsByCategory(c as never),
    productPath: (l, p) => buildGannomatProductPath(l, p as never),
    categorySeo: (c) => GANNOMAT_CATEGORY_SEO[c as never],
    comparison: [],
  },
};

export const BRAND_SLUGS = Object.keys(CATALOGS) as BrandSlug[];

export const getBrandCatalog = (brand: BrandSlug): BrandCatalog => CATALOGS[brand];

export const isBrandSlug = (value: string): value is BrandSlug => value in CATALOGS;

/** Marke plus Kategorie, wie sie Sitemap, Prerender und 404-Nachweis brauchen. */
export interface CategoryRef {
  brand: BrandSlug;
  category: string;
}

/**
 * Jede Kategorie, die eine eigene Seite bekommt.
 *
 * Kategorien ohne Produkt bleiben aussen vor: eine leere Kategorieseite ist
 * fuer Google eine Doorway-Seite und fuer den Besucher eine Sackgasse.
 */
export const ALL_CATEGORY_REFS: CategoryRef[] = BRAND_SLUGS.flatMap((brand) =>
  CATALOGS[brand].categories.map((category) => ({ brand, category })),
);

/** Pfad der Kategorieseite, ohne Sprachpraefix. */
export const buildCategoryPath = (ref: CategoryRef, lang: Language): string =>
  `/${ref.brand}/${CATALOGS[ref.brand].categorySlug(ref.category, lang)}`;
