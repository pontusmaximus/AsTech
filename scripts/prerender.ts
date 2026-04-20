/**
 * Build-time prerendering: generates static HTML files for each route
 * with correct meta tags AND visible body content so that Google sees
 * real content without executing JavaScript.
 *
 * Runs AFTER `vite build`. For each of the ~435 routes it:
 *  1. Reads the built dist/index.html as a template
 *  2. Injects correct <title>, <meta>, <link canonical>, <link hreflang>
 *  3. Injects visible body content (h1, breadcrumbs, description)
 *  4. Writes to dist/{route}/index.html
 *
 * The body content is hidden via CSS (display:none) when JS loads and
 * React takes over the #root element, so users never see a flash.
 */

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SEO_ROUTES, getSlugForLang } from '../src/seo/routes';
import type { SeoRouteKey } from '../src/seo/routes';
import {
  buildLocalizedPath,
  buildCanonicalUrl,
  CANONICAL_DOMAIN,
  SUPPORTED_LANGUAGES,
  INDEXABLE_LANGUAGES,
  NON_INDEXABLE_LANGUAGES,
  HREFLANG_DEFAULT,
  languageToHreflang,
} from '../src/lib/language';
import { OTT_PRODUCTS, buildOttProductPath, OTT_CATEGORY_LABELS } from '../src/data/ottProducts';
import { MAYER_PRODUCTS, buildMayerProductPath, MAYER_CATEGORY_LABELS } from '../src/data/mayerProducts';
import { BARBARIC_PRODUCTS, buildBarbaricProductPath, BARBARIC_CATEGORY_LABELS } from '../src/data/barbaricProducts';
import { GANNOMAT_PRODUCTS, buildGannomatProductPath, GANNOMAT_CATEGORY_LABELS } from '../src/data/gannomatProducts';
import { USED_MACHINES } from '../src/data/usedMachines';
import { localizeSlug } from '../src/lib/slugs';
import { OTT_PRODUCT_SEO, OTT_CATEGORY_SEO } from '../src/data/seo/ottSeoContent';
import { MAYER_PRODUCT_SEO, MAYER_CATEGORY_SEO } from '../src/data/seo/mayerSeoContent';
import { BARBARIC_PRODUCT_SEO, BARBARIC_CATEGORY_SEO } from '../src/data/seo/barbaricSeoContent';
import { GANNOMAT_PRODUCT_SEO, GANNOMAT_CATEGORY_SEO } from '../src/data/seo/gannomatSeoContent';
import type { ProductSeoContent, CategorySeoContent, MultiLangText } from '../src/data/seo/types';
import { faqPageSchema } from '../src/seo/structuredData';
import type { Language } from '../src/i18n';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const distDir = join(__dirname, '..', 'dist');
const template = readFileSync(join(distDir, 'index.html'), 'utf-8');

/* ------------------------------------------------------------------ */
/*  Translations for static labels                                     */
/* ------------------------------------------------------------------ */

const T = {
  home: { de: 'Startseite', en: 'Home', cz: 'Domů', sk: 'Domov', hu: 'Főoldal' },
  products: { de: 'Produkte', en: 'Products', cz: 'Produkty', sk: 'Produkty', hu: 'Termékek' },
  contact: { de: 'Kontakt aufnehmen', en: 'Get in touch', cz: 'Kontaktujte nás', sk: 'Kontaktujte nás', hu: 'Lépjen kapcsolatba' },
  dealer: { de: 'Autorisierter Händler für Zentraleuropa', en: 'Authorized dealer for Central Europe', cz: 'Autorizovaný prodejce pro střední Evropu', sk: 'Autorizovaný predajca pre strednú Európu', hu: 'Hivatalos viszonteladó Közép-Európában' },
  sectionDetail: { de: 'Im Detail', en: 'In Detail', cz: 'Podrobnosti', sk: 'Podrobnosti', hu: 'Részletek' },
  sectionApplications: { de: 'Einsatzbereiche', en: 'Applications', cz: 'Oblasti nasazení', sk: 'Oblasti nasadenia', hu: 'Alkalmazási területek' },
  sectionBuyingAdvice: { de: 'Kaufberatung', en: 'Buying Guide', cz: 'Nákupní poradce', sk: 'Nákupný poradca', hu: 'Vásárlási tanácsadó' },
  sectionFaq: { de: 'Häufige Fragen', en: 'FAQ', cz: 'Časté dotazy', sk: 'Časté otázky', hu: 'Gyakori kérdések' },
} as const;

/**
 * Sprach-Resolver mit Fallback — identisch zur ml()-Funktion in
 * src/components/seo/ProductSeoBlock.tsx, damit Prerender und Client
 * den gleichen Text zeigen.
 */
const ml = (obj: MultiLangText, lang: Language): string => {
  if (lang === 'sk') return obj.sk ?? obj.cz;
  if (lang === 'hu') return obj.hu ?? obj.en;
  if (lang === 'de') return obj.de;
  if (lang === 'cz') return obj.cz;
  return obj.en;
};

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface PageMeta {
  path: string;
  lang: Language;
  title: string;
  description: string;
  canonical: string;
  alternates: { hreflang: string; href: string }[];
  xDefaultHref: string;
  /** Visible body content for Google */
  bodyContent: string;
}

/* ------------------------------------------------------------------ */
/*  Body content builders                                              */
/* ------------------------------------------------------------------ */

const escHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Build breadcrumb HTML: Home > Brand > Product */
const breadcrumb = (items: { label: string; href: string }[]) =>
  `<nav aria-label="Breadcrumb"><ol>${items.map((it, i) =>
    `<li>${i < items.length - 1 ? `<a href="${it.href}">${escHtml(it.label)}</a>` : `<span>${escHtml(it.label)}</span>`}</li>`
  ).join(' › ')}</ol></nav>`;

/** Split text on double-newlines and wrap each paragraph in <p>. */
const paragraphs = (text: string): string =>
  text.split(/\n{2,}/).map((p) => `<p>${escHtml(p.trim())}</p>`).join('\n');

/** FAQ als native <details>/<summary> (kein JS noetig). JSON-LD wird separat erzeugt. */
const renderFaq = (items: ProductSeoContent['faq'], lang: Language, heading: string): string => {
  if (!items || items.length === 0) return '';
  const details = items
    .map(
      (it) => `<details><summary>${escHtml(ml(it.question, lang))}</summary><p>${escHtml(ml(it.answer, lang))}</p></details>`,
    )
    .join('\n');
  return `<section><h2>${escHtml(heading)}</h2>${details}</section>`;
};

/** Rendert ProductSeoContent als indexierbares HTML fuer Googlebot (ohne JS). */
const renderProductSeo = (content: ProductSeoContent, lang: Language): string => {
  const parts: string[] = [];
  parts.push(
    `<section><h2>${escHtml(T.sectionDetail[lang])}</h2>${paragraphs(ml(content.longDescription, lang))}</section>`,
  );
  if (content.applicationSections.length > 0) {
    const sections = content.applicationSections
      .map((s) => `<article><h3>${escHtml(ml(s.heading, lang))}</h3><p>${escHtml(ml(s.body, lang))}</p></article>`)
      .join('\n');
    parts.push(`<section><h2>${escHtml(T.sectionApplications[lang])}</h2>${sections}</section>`);
  }
  parts.push(
    `<section><h2>${escHtml(T.sectionBuyingAdvice[lang])}</h2><p>${escHtml(ml(content.buyingAdvice, lang))}</p></section>`,
  );
  parts.push(renderFaq(content.faq, lang, T.sectionFaq[lang]));
  return parts.join('\n');
};

/** Rendert CategorySeoContent als indexierbares HTML. */
const renderCategorySeo = (content: CategorySeoContent, lang: Language): string => {
  const parts: string[] = [];
  parts.push(`<section>${paragraphs(ml(content.introExpanded, lang))}</section>`);
  if (content.sections.length > 0) {
    const sections = content.sections
      .map((s) => `<article><h3>${escHtml(ml(s.heading, lang))}</h3><p>${escHtml(ml(s.body, lang))}</p></article>`)
      .join('\n');
    parts.push(`<section>${sections}</section>`);
  }
  parts.push(renderFaq(content.faq, lang, T.sectionFaq[lang]));
  return parts.join('\n');
};

/** Sammelt FAQ-Items aus ProductSeoContent und baut JSON-LD-Script. */
const productFaqJsonLd = (content: ProductSeoContent | undefined, lang: Language): string => {
  if (!content || content.faq.length === 0) return '';
  const schema = faqPageSchema(content.faq.map((f) => ({ question: ml(f.question, lang), answer: ml(f.answer, lang) })));
  return `<script type="application/ld+json">${JSON.stringify(schema)}</script>`;
};

/** Sammelt FAQ-Items aus mehreren CategorySeoContents und baut kombiniertes JSON-LD. */
const categoriesFaqJsonLd = (contents: CategorySeoContent[], lang: Language): string => {
  const allFaqs = contents.flatMap((c) => c.faq);
  if (allFaqs.length === 0) return '';
  const schema = faqPageSchema(allFaqs.map((f) => ({ question: ml(f.question, lang), answer: ml(f.answer, lang) })));
  return `<script type="application/ld+json">${JSON.stringify(schema)}</script>`;
};

/** Build static page body content. Brand-Hub-Seiten erhalten zusaetzlich
 *  alle CategorySeoContent-Bloecke (longInhalt + FAQ pro Kategorie) plus
 *  ein kombiniertes FAQ-JSON-LD-Schema.
 */
function staticPageBody(
  key: SeoRouteKey,
  lang: Language,
  title: string,
  description: string,
  categorySeoContents: CategorySeoContent[] = [],
): string {
  const homePath = buildLocalizedPath(lang, '/');
  const homeLabel = T.home[lang];

  const crumbs = [{ label: homeLabel, href: homePath }];
  if (key !== 'home') {
    crumbs.push({ label: title.split('|')[0].split('–')[0].trim(), href: '#' });
  }

  const parts: string[] = [];
  if (key !== 'home') parts.push(breadcrumb(crumbs));
  parts.push(`<h1>${escHtml(title)}</h1>`);
  parts.push(`<p>${escHtml(description)}</p>`);

  if (key === 'home') {
    parts.push(`<p>${escHtml(T.dealer[lang])}</p>`);
    // Link to all manufacturers
    const brands = ['OTT', 'Mayer', 'Barbaric', 'Gannomat'];
    const brandSlugs = ['/ott', '/mayer', '/barbaric', '/gannomat'];
    parts.push(`<ul>${brands.map((b, i) =>
      `<li><a href="${buildLocalizedPath(lang, brandSlugs[i])}">${b}</a></li>`
    ).join('')}</ul>`);
  }

  // Brand-Hub: CategorySeoContent pro Kategorie ausgeben + gesammeltes FAQ-Schema.
  if (categorySeoContents.length > 0) {
    parts.push(categoriesFaqJsonLd(categorySeoContents, lang));
    for (const content of categorySeoContents) {
      parts.push(renderCategorySeo(content, lang));
    }
  }

  return parts.join('\n');
}

/** Build product page body content. Wenn ProductSeoContent vorhanden ist,
 *  wird der komplette keyword-reiche Block (longDescription, Anwendungen,
 *  Kaufberatung, FAQ) plus JSON-LD inline eingebunden.
 */
function productPageBody(
  lang: Language,
  brand: string,
  productName: string,
  categoryLabel: string,
  description: string,
  tagline: string,
  brandSlug: string,
  seoContent?: ProductSeoContent,
): string {
  const homePath = buildLocalizedPath(lang, '/');
  const brandPath = buildLocalizedPath(lang, brandSlug);

  const crumbs = [
    { label: T.home[lang], href: homePath },
    { label: brand, href: brandPath },
    { label: categoryLabel, href: brandPath },
    { label: productName, href: '#' },
  ];

  const parts: string[] = [
    breadcrumb(crumbs),
    `<h1>${escHtml(brand)} ${escHtml(productName)}</h1>`,
    `<p><strong>${escHtml(tagline)}</strong></p>`,
    `<p>${escHtml(description)}</p>`,
    `<p><a href="mailto:office@asamer.net">${escHtml(T.contact[lang])}</a></p>`,
  ];

  if (seoContent) {
    parts.push(productFaqJsonLd(seoContent, lang));
    parts.push(renderProductSeo(seoContent, lang));
  }

  return parts.join('\n');
}

/* ------------------------------------------------------------------ */
/*  Collect all pages                                                  */
/* ------------------------------------------------------------------ */

const pages: PageMeta[] = [];

function makeAlternates(buildPath: (lang: Language) => string) {
  // Nur indexierbare Sprachen als hreflang-Alternates ausgeben — SK ist
  // explizit ausgeschlossen (siehe INDEXABLE_LANGUAGES in lib/language.ts).
  return INDEXABLE_LANGUAGES.map((al) => ({
    hreflang: languageToHreflang(al),
    href: `${CANONICAL_DOMAIN}${buildPath(al)}`,
  }));
}

// Map von Brand-Hub-Key zu allen CategorySeoContents. Wird genutzt, damit
// Brand-Hub-Seiten (/ott, /mayer, /barbaric, /gannomat) den kompletten
// keyword-reichen Kategorie-Inhalt (longIntro + FAQ je Kategorie) im
// statischen HTML mitliefern.
const HUB_CATEGORY_SEO: Partial<Record<SeoRouteKey, CategorySeoContent[]>> = {
  ott: Object.values(OTT_CATEGORY_SEO),
  mayer: Object.values(MAYER_CATEGORY_SEO),
  barbaric: Object.values(BARBARIC_CATEGORY_SEO),
  gannomat: Object.values(GANNOMAT_CATEGORY_SEO),
};

// 1. Static pages from SEO_ROUTES
for (const [key, config] of Object.entries(SEO_ROUTES)) {
  for (const lang of SUPPORTED_LANGUAGES) {
    const langSlug = getSlugForLang(config, lang);
    const path = buildLocalizedPath(lang, langSlug);
    const meta = config.meta[lang];
    const alternates = makeAlternates((al) => buildLocalizedPath(al, getSlugForLang(config, al)));
    const xDefaultHref = buildCanonicalUrl(HREFLANG_DEFAULT, getSlugForLang(config, HREFLANG_DEFAULT));
    const hubSeo = HUB_CATEGORY_SEO[key as SeoRouteKey] ?? [];

    pages.push({
      path,
      lang,
      title: meta.title,
      description: meta.description,
      canonical: `${CANONICAL_DOMAIN}${path}`,
      alternates,
      xDefaultHref,
      bodyContent: staticPageBody(key as SeoRouteKey, lang, meta.title, meta.description, hubSeo),
    });
  }
}

// 2. OTT product pages
for (const product of OTT_PRODUCTS) {
  for (const lang of SUPPORTED_LANGUAGES) {
    const productPath = buildOttProductPath(lang, product);
    const path = buildLocalizedPath(lang, productPath);
    const alternates = makeAlternates((al) => buildLocalizedPath(al, buildOttProductPath(al, product)));
    const xDefaultHref = `${CANONICAL_DOMAIN}${buildLocalizedPath(HREFLANG_DEFAULT, buildOttProductPath(HREFLANG_DEFAULT, product))}`;
    const categoryLabel = OTT_CATEGORY_LABELS[product.category][lang];

    pages.push({
      path, lang,
      title: product.seoTitle[lang],
      description: product.seoDescription[lang],
      canonical: `${CANONICAL_DOMAIN}${path}`,
      alternates, xDefaultHref,
      bodyContent: productPageBody(lang, 'OTT', product.name, categoryLabel, product.description[lang], product.tagline[lang], '/ott', OTT_PRODUCT_SEO[product.slug]),
    });
  }
}

// 3. Mayer product pages
for (const product of MAYER_PRODUCTS) {
  for (const lang of SUPPORTED_LANGUAGES) {
    const productPath = buildMayerProductPath(lang, product);
    const path = buildLocalizedPath(lang, productPath);
    const alternates = makeAlternates((al) => buildLocalizedPath(al, buildMayerProductPath(al, product)));
    const xDefaultHref = `${CANONICAL_DOMAIN}${buildLocalizedPath(HREFLANG_DEFAULT, buildMayerProductPath(HREFLANG_DEFAULT, product))}`;
    const categoryLabel = MAYER_CATEGORY_LABELS[product.category][lang];

    pages.push({
      path, lang,
      title: product.seoTitle[lang],
      description: product.seoDescription[lang],
      canonical: `${CANONICAL_DOMAIN}${path}`,
      alternates, xDefaultHref,
      bodyContent: productPageBody(lang, 'Mayer', product.name, categoryLabel, product.description[lang], product.tagline[lang], '/mayer', MAYER_PRODUCT_SEO[product.slug]),
    });
  }
}

// 4. Barbaric product pages
for (const product of BARBARIC_PRODUCTS) {
  for (const lang of SUPPORTED_LANGUAGES) {
    const productPath = buildBarbaricProductPath(lang, product);
    const path = buildLocalizedPath(lang, productPath);
    const alternates = makeAlternates((al) => buildLocalizedPath(al, buildBarbaricProductPath(al, product)));
    const xDefaultHref = `${CANONICAL_DOMAIN}${buildLocalizedPath(HREFLANG_DEFAULT, buildBarbaricProductPath(HREFLANG_DEFAULT, product))}`;
    const categoryLabel = BARBARIC_CATEGORY_LABELS[product.category][lang];

    pages.push({
      path, lang,
      title: product.seoTitle[lang],
      description: product.seoDescription[lang],
      canonical: `${CANONICAL_DOMAIN}${path}`,
      alternates, xDefaultHref,
      bodyContent: productPageBody(lang, 'Barbaric', product.name, categoryLabel, product.description[lang], product.tagline[lang], '/barbaric', BARBARIC_PRODUCT_SEO[product.slug]),
    });
  }
}

// 5. Gannomat product pages
for (const product of GANNOMAT_PRODUCTS) {
  for (const lang of SUPPORTED_LANGUAGES) {
    const productPath = buildGannomatProductPath(lang, product);
    const path = buildLocalizedPath(lang, productPath);
    const alternates = makeAlternates((al) => buildLocalizedPath(al, buildGannomatProductPath(al, product)));
    const xDefaultHref = `${CANONICAL_DOMAIN}${buildLocalizedPath(HREFLANG_DEFAULT, buildGannomatProductPath(HREFLANG_DEFAULT, product))}`;
    const categoryLabel = GANNOMAT_CATEGORY_LABELS[product.category][lang];

    pages.push({
      path, lang,
      title: product.seoTitle[lang],
      description: product.seoDescription[lang],
      canonical: `${CANONICAL_DOMAIN}${path}`,
      alternates, xDefaultHref,
      bodyContent: productPageBody(lang, 'Gannomat', product.name, categoryLabel, product.description[lang], product.tagline[lang], '/gannomat', GANNOMAT_PRODUCT_SEO[product.slug]),
    });
  }
}

// 6. Used machine detail pages
const mlText = (obj: { de: string; en: string; cz: string; sk?: string; hu?: string }, lang: Language): string => {
  if (lang === 'sk') return obj.sk ?? obj.cz;
  if (lang === 'hu') return obj.hu ?? obj.en;
  if (lang === 'de') return obj.de;
  if (lang === 'cz') return obj.cz;
  return obj.en;
};

for (const machine of USED_MACHINES) {
  for (const lang of SUPPORTED_LANGUAGES) {
    const buildUsedMachinePath = (al: Language) => `${localizeSlug('/pouzite-stroje', al)}/${machine.slug}`;
    const machinePath = buildUsedMachinePath(lang);
    const path = buildLocalizedPath(lang, machinePath);
    const alternates = makeAlternates((al) => buildLocalizedPath(al, buildUsedMachinePath(al)));
    const xDefaultHref = `${CANONICAL_DOMAIN}${buildLocalizedPath(HREFLANG_DEFAULT, buildUsedMachinePath(HREFLANG_DEFAULT))}`;

    const machineLabel = { de: 'Gebrauchtmaschine', en: 'Used machine', cz: 'Použitý stroj', sk: 'Použitý stroj', hu: 'Használt gép' };
    const title = `${machine.manufacturer} ${machine.name} – ${machineLabel[lang]} | Asamer`;
    const description = mlText(machine.shortDescription, lang);

    const homePath = buildLocalizedPath(lang, '/');
    const categoryPath = buildLocalizedPath(lang, localizeSlug('/pouzite-stroje', lang));
    const homeLabel = T.home[lang];
    const breadcrumbParts = [
      breadcrumb([
        { label: homeLabel, href: homePath },
        { label: machineLabel[lang], href: categoryPath },
        { label: `${machine.manufacturer} ${machine.name}`, href: '#' },
      ]),
      `<h1>${escHtml(`${machine.manufacturer} ${machine.name}`)}</h1>`,
      `<p>${escHtml(description)}</p>`,
      machine.longDescription ? `<p>${escHtml(mlText(machine.longDescription, lang))}</p>` : '',
      `<p><a href="mailto:office@asamer.net">${escHtml(T.contact[lang])}</a></p>`,
    ].filter(Boolean);

    pages.push({
      path, lang,
      title,
      description,
      canonical: `${CANONICAL_DOMAIN}${path}`,
      alternates, xDefaultHref,
      bodyContent: breadcrumbParts.join('\n'),
    });
  }
}

/* ------------------------------------------------------------------ */
/*  Generate HTML files                                                */
/* ------------------------------------------------------------------ */

let count = 0;

for (const page of pages) {
  const hreflangTags = page.alternates
    .map((a) => `<link rel="alternate" hreflang="${a.hreflang}" href="${a.href}" data-rh="true"/>`)
    .join('\n    ');
  const xDefaultTag = `<link rel="alternate" hreflang="x-default" href="${page.xDefaultHref}" data-rh="true"/>`;

  const robotsContent = NON_INDEXABLE_LANGUAGES.includes(page.lang) ? 'noindex,follow' : 'index,follow';
  const seoHead = `
    <title data-rh="true">${escHtml(page.title)}</title>
    <meta name="description" content="${escHtml(page.description)}" data-rh="true"/>
    <meta name="robots" content="${robotsContent}" data-rh="true"/>
    <link rel="canonical" href="${page.canonical}" data-rh="true"/>
    ${hreflangTags}
    ${xDefaultTag}
    <meta property="og:type" content="website" data-rh="true"/>
    <meta property="og:title" content="${escHtml(page.title)}" data-rh="true"/>
    <meta property="og:description" content="${escHtml(page.description)}" data-rh="true"/>
    <meta property="og:url" content="${page.canonical}" data-rh="true"/>
    <meta property="og:site_name" content="Asamer Technologie" data-rh="true"/>
    <meta property="og:image" content="${CANONICAL_DOMAIN}/images/automation-robot.jpg" data-rh="true"/>
    <meta property="og:image:width" content="1200" data-rh="true"/>
    <meta property="og:image:height" content="630" data-rh="true"/>
    <meta property="og:locale" content="${languageToHreflang(page.lang)}" data-rh="true"/>`;

  // Replace lang attribute
  let html = template.replace('<html lang="cs">', `<html lang="${languageToHreflang(page.lang)}">`);

  // Remove the static <title>
  html = html.replace(/<title>Asamer Technologie GmbH<\/title>/, '');

  // Remove the generic meta description (handles both & and &amp;)
  html = html.replace(/<meta name="description" content="Asamer Technologie .+?" \/>/, '');

  // Inject SEO tags before </head>
  html = html.replace('</head>', `${seoHead}\n  </head>`);

  // Inject visible body content inside #root
  // This content is visible to Google crawlers but gets replaced when React mounts
  html = html.replace(
    '<div id="root"></div>',
    `<div id="root">\n${page.bodyContent}\n</div>`,
  );

  // Write to dist/{path}/index.html
  const filePath = join(distDir, page.path, 'index.html');
  mkdirSync(dirname(filePath), { recursive: true });
  writeFileSync(filePath, html, 'utf-8');
  count++;
}

// eslint-disable-next-line no-console
console.log(`Prerendered ${count} pages (with body content) to ${distDir}`);
