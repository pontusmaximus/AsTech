/** Shared types for keyword-oriented SEO content blocks on product and category pages. */

export interface MultiLangText {
  de: string;
  en: string;
  cz: string;
  /** Slovak — falls back to cz if not provided. */
  sk?: string;
  /** Hungarian — falls back to en if not provided. */
  hu?: string;
}

export interface SeoContentSection {
  heading: MultiLangText;
  body: MultiLangText;
}

export interface SeoFaqItem {
  question: MultiLangText;
  answer: MultiLangText;
}

export interface ProductSeoContent {
  /** Extended keyword-rich description (200-300 words per language). */
  longDescription: MultiLangText;
  /** 2-3 application/use-case sections. */
  applicationSections: SeoContentSection[];
  /** Short buying advice: when to choose this machine (100 words). */
  buyingAdvice: MultiLangText;
  /** 3-5 FAQ items targeting long-tail search queries. */
  faq: SeoFaqItem[];
}

export interface CategorySeoContent {
  /** Expanded intro text (300-400 words per language). */
  introExpanded: MultiLangText;
  /** 3-4 thematic content sections. */
  sections: SeoContentSection[];
  /** 3-5 FAQ items. */
  faq: SeoFaqItem[];
}
