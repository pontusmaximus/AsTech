import { useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { useLanguage } from '../App';
import { translatePageText } from '../i18n/pageTextTranslations';
import ProductCard from '../components/manufacturer/ProductCard';
import CategorySeoBlock from '../components/seo/CategorySeoBlock';
import SeoHead from '../seo/SeoHead';
import { breadcrumbSchema, itemListSchema } from '../seo/structuredData';
import { buildLocalizedPath, CANONICAL_DOMAIN } from '../lib/language';
import { buildMailto } from '../lib/email';
import { getBrandCatalog, buildCategoryPath } from '../data/brandCatalogs';
import type { BrandSlug, CategoryRef } from '../data/brandCatalogs';
import { getCategoryMeta, getCategoryHeading } from '../seo/categoryMeta';

/**
 * Kategorieseite einer Marke — `/{lang}/{marke}/{kategorie}`.
 *
 * Bis hierher gab es nur Hub (`/ott`) und Produktdetail
 * (`/ott/elzarogepek/tornado-plus`). Genau die Ebene dazwischen fehlte, auf der
 * die Kategorie-Suchbegriffe ranken muessten — "élzárógép", "táblafelosztó gép",
 * "sorozatfúró gép". Die HU-Keyword-Recherche hat das aufgedeckt; das Problem
 * betraf aber alle vier Marken in allen fuenf Sprachen.
 *
 * Der Inhalt wird nicht neu erfunden: das Produktgitter kommt aus denselben
 * Katalogdaten wie der Hub, der Textblock aus `*SeoContent.ts` — wo er bisher
 * schon stand, nur alle Kategorien untereinander auf einer Seite. Diese Seite
 * zeigt je Kategorie den Block, der zu ihr gehoert.
 */
const CategoryPage = ({ brand }: { brand: BrandSlug }) => {
  const { lang } = useLanguage();
  const { category: categorySlug } = useParams<{ category: string }>();
  const catalog = getBrandCatalog(brand);

  const locale = lang === 'de' || lang === 'en' || lang === 'cz' || lang === 'sk' || lang === 'hu' ? lang : 'en';
  const tr = (de: string, en: string, cz: string) => {
    if (locale === 'de') return de;
    if (locale === 'cz') return cz;
    if (locale === 'sk' || locale === 'hu') return translatePageText(locale, en, cz);
    return en;
  };

  const category = categorySlug ? catalog.findCategoryBySlug(categorySlug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      gsap.fromTo('.page-header', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' });
    });
    return () => ctx.revert();
  }, [categorySlug]);

  // Unbekannter Kategorie-Slug: zurueck auf den Marken-Hub statt 404.
  if (!category) return <Navigate to={buildLocalizedPath(lang, `/${brand}`)} replace />;

  // Kategorie-Slug einer anderen Sprache: auf die richtige Fassung umlenken.
  // Serverseitig faengt das bereits eine 301 ab; hier fuer die Navigation im
  // Browser, damit beide dasselbe tun.
  const correctSlug = catalog.categorySlug(category, lang);
  if (categorySlug !== correctSlug) {
    return <Navigate to={buildLocalizedPath(lang, `/${brand}/${correctSlug}`)} replace />;
  }

  const ref: CategoryRef = { brand, category };
  const products = catalog.productsIn(category);
  const heading = getCategoryHeading(ref, lang);
  const meta = getCategoryMeta(ref, lang);
  const seoContent = catalog.categorySeo(category);
  const categoryPath = buildCategoryPath(ref, lang);
  const hubPath = buildLocalizedPath(lang, `/${brand}`);

  const breadcrumbs = breadcrumbSchema([
    { name: tr('Startseite', 'Home', 'Domů'), url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, '/')}` },
    { name: catalog.label, url: `${CANONICAL_DOMAIN}${hubPath}` },
    { name: heading, url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, categoryPath)}` },
  ]);

  const productList = itemListSchema(
    heading,
    products.map((p) => ({
      name: `${p.name} ${catalog.label}`,
      url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, catalog.productPath(lang, p))}`,
      image: p.image,
      description: p.seoDescription[lang],
    })),
  );

  const inquiryMail = buildMailto(
    'office@asamer.net',
    tr(`Anfrage ${heading}`, `Inquiry ${heading}`, `Poptávka ${heading}`),
  );

  return (
    <>
      <SeoHead
        overrides={{ title: meta.title, description: meta.description, slug: categoryPath }}
        buildAlternateSlug={(al) => buildCategoryPath(ref, al)}
        structuredData={[breadcrumbs, productList]}
      />

      <div className="bg-dark min-h-screen pt-24 sm:pt-28 md:pt-32 pb-20">
        <div className="container-wide">
          <nav className="page-header flex items-center gap-2 text-[11px] uppercase tracking-widest text-white/35 mb-6 flex-wrap">
            <Link to={buildLocalizedPath(lang, '/')} className="hover:text-white/60 transition-colors">
              {tr('Startseite', 'Home', 'Domů')}
            </Link>
            <span>/</span>
            <Link to={hubPath} className="hover:text-white/60 transition-colors">
              {catalog.label}
            </Link>
            <span>/</span>
            <span className="text-white/50">{heading}</span>
          </nav>

          <Link
            to={hubPath}
            className="page-header inline-flex items-center gap-2 text-[11px] uppercase tracking-widest text-white/40 hover:text-white/60 transition-colors mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            {tr(`Alle ${catalog.label} Produkte`, `All ${catalog.label} products`, `Všechny produkty ${catalog.label}`)}
          </Link>

          <header className="page-header mb-10 max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-light text-white mb-4">{heading}</h1>
            <p className="text-white/60 text-base leading-relaxed">{meta.description}</p>
          </header>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {products.map((product) => (
              <ProductCard
                key={product.slug}
                to={buildLocalizedPath(lang, catalog.productPath(lang, product))}
                image={product.image}
                imageAlt={`${product.name} ${catalog.label}`}
                categoryLabel={heading}
                name={`${product.name} ${catalog.label}`}
                bullets={[product.tagline[lang]]}
                detailLabel={tr('Details ansehen', 'View details', 'Zobrazit detail')}
              />
            ))}
          </div>

          {/* Nachbarkategorien: haelt die Kategorieebene untereinander verlinkt,
              statt sie nur ueber den Hub erreichbar zu machen. */}
          <nav aria-label={tr('Weitere Kategorien', 'More categories', 'Další kategorie')} className="border-t border-white/5 pt-8">
            <p className="text-[11px] uppercase tracking-widest text-white/35 mb-4">
              {tr('Weitere Kategorien', 'More categories', 'Další kategorie')}
            </p>
            <div className="flex flex-wrap gap-2">
              {catalog.categories
                .filter((c) => c !== category)
                .map((c) => (
                  <Link
                    key={c}
                    to={buildLocalizedPath(lang, buildCategoryPath({ brand, category: c }, lang))}
                    className="px-3 py-1.5 rounded-full text-sm border border-white/10 bg-white/[0.04] text-white/50 hover:text-white transition-colors"
                  >
                    {getCategoryHeading({ brand, category: c }, lang)}
                  </Link>
                ))}
            </div>
          </nav>
        </div>

        {seoContent && <CategorySeoBlock content={seoContent} lang={lang} tr={tr} />}

        <div className="border-t border-white/5">
          <div className="container-wide py-12">
            <div className="p-4 bg-gradient-to-r from-white/[0.04] to-transparent rounded-xl border border-white/10 max-w-2xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <p className="text-white/40 text-sm">
                  {tr(
                    'Welche Maschine passt zu Ihrer Fertigung?',
                    'Which machine fits your production?',
                    'Který stroj se hodí do vaší výroby?',
                  )}
                </p>
                <a href={inquiryMail} className="btn-primary-dark text-sm sm:whitespace-nowrap">
                  {tr('Anfrage senden', 'Send inquiry', 'Odeslat poptávku')}
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
