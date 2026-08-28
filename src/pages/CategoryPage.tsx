import { useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, BookOpen, Banknote, Recycle } from 'lucide-react';
import gsap from 'gsap';
import { useLanguage } from '../App';
import { translatePageText } from '../i18n/pageTextTranslations';
import ProductCard from '../components/manufacturer/ProductCard';
import CategorySeoBlock from '../components/seo/CategorySeoBlock';
import SeoHead from '../seo/SeoHead';
import { breadcrumbSchema, itemListSchema } from '../seo/structuredData';
import { buildLocalizedPath, CANONICAL_DOMAIN } from '../lib/language';
import { localizeSlug } from '../lib/slugs';
import { isSlugAvailable } from '../seo/routes';
import { buildMailto } from '../lib/email';
import { getBrandCatalog, buildCategoryPath } from '../data/brandCatalogs';
import type { BrandSlug, CategoryRef } from '../data/brandCatalogs';
import { getCategoryMeta, getCategoryHeading, getCategoryLead, getCategoryEyebrow } from '../seo/categoryMeta';

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
  const lead = getCategoryLead(ref, lang);
  const eyebrow = getCategoryEyebrow(ref, lang);

  // Modellvergleich nur, wo die Marke vergleichbare Felder hat und mindestens
  // ein Produkt sie auch gefuellt hat — sonst stuende da eine leere Tabelle.
  const comparisonRows = catalog.comparison.length
    ? products
        .map((p) => ({ product: p, cells: catalog.comparison.map((c) => c.value(p)) }))
        .filter((r) => r.cells.some(Boolean))
    : [];

  const localPath = (slug: string) => buildLocalizedPath(lang, localizeSlug(slug, lang));

  // Eine Route kann Sprachen ausschliessen (`excludeLangs`). Wird sie hier
  // trotzdem verlinkt, zeigt die Kachel auf eine 301 — deshalb der Filter,
  // abgeleitet aus SEO_ROUTES statt aus einer zweiten Liste.
  const linkable = (canonicalSlug: string) => isSlugAvailable(canonicalSlug, lang);

  // Weiterfuehrende Seiten. Bewusst nur, was thematisch wirklich passt: der
  // Klebstoff-Ratgeber gehoert zur Kante, der Saegenvergleich zur Platte.
  const guides = [
    ...(brand === 'ott'
      ? [
          ...(category === 'edgebanding'
            ? [{
                icon: BookOpen,
                slug: '/ratgeber/kantenanleimmaschine-waehlen',
          to: localPath('/ratgeber/kantenanleimmaschine-waehlen'),
                title: tr('Ratgeber: Kantenanleimmaschine wählen', 'Guide: choosing an edgebander', 'Průvodce: výběr olepovačky hran'),
                text: tr('Welche Maschine passt zu Ihrem Betrieb?', 'Which machine fits your operation?', 'Který stroj se hodí do vašeho provozu?'),
              }]
            : []),
          {
            icon: BookOpen,
            slug: '/ratgeber/pur-vs-eva',
          to: localPath('/ratgeber/pur-vs-eva'),
            title: tr('Ratgeber: PUR vs. EVA', 'Guide: PUR vs. EVA', 'Průvodce: PUR vs. EVA'),
            text: tr('Der Klebstoff-Vergleich für die Kante.', 'The adhesive comparison for edges.', 'Srovnání lepidel pro olepování hran.'),
          },
        ]
      : []),
    ...(brand === 'mayer'
      ? [{
          icon: BookOpen,
          slug: '/ratgeber/formatsaege-aluminium-vs-holz',
          to: localPath('/ratgeber/formatsaege-aluminium-vs-holz'),
          title: tr('Ratgeber: Holz oder Aluminium', 'Guide: wood or aluminium', 'Průvodce: dřevo nebo hliník'),
          text: tr('Kappa und Advanced Line im Vergleich.', 'Kappa and Advanced Line compared.', 'Srovnání Kappa a Advanced Line.'),
        }]
      : []),
    ...(brand === 'barbaric' && category === 'vacuum-lifters'
      ? [{
          icon: BookOpen,
          slug: '/pruvodce/vakuovy-zvedak-holz',
          to: localPath('/pruvodce/vakuovy-zvedak-holz'),
          title: tr('Ratgeber: Vakuumheber', 'Guide: vacuum lifters', 'Průvodce: vakuové zvedáky'),
          text: tr('Einer statt drei — ergonomisch heben.', 'One person instead of three.', 'Jeden místo tří.'),
        }]
      : []),
    ...(brand === 'barbaric'
      ? [{
          icon: BookOpen,
          slug: '/ratgeber/lagerautomatisierung',
          to: localPath('/ratgeber/lagerautomatisierung'),
          title: tr('Ratgeber: Lagerautomatisierung', 'Guide: warehouse automation', 'Průvodce: automatizace skladu'),
          text: tr('Ab wann rechnet sie sich?', 'When does it pay off?', 'Kdy se vyplatí?'),
        }]
      : []),
    ...(brand === 'ott' && category === 'edgebanding'
      ? [{
          icon: Recycle,
          slug: '/pouzite-stroje',
          to: localPath('/pouzite-stroje'),
          title: tr('Gebrauchte Maschinen', 'Used machines', 'Použité stroje'),
          text: tr('Geprüfte Gebrauchtmaschinen mit Service.', 'Inspected used machines with service.', 'Prověřené použité stroje se servisem.'),
        }]
      : []),
    {
      icon: Banknote,
      slug: '/financovani',
      to: localPath('/financovani'),
      title: tr('Finanzierung & Förderung', 'Financing & grants', 'Financování a dotace'),
      text: tr('Leasing und Förderungen bis 50 %.', 'Leasing and grants up to 50%.', 'Leasing a dotace až 50 %.'),
    },
  ].filter((g) => linkable(g.slug));
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

  // Bewusst kein Template-Literal in tr(): ein zur Laufzeit
  // zusammengesetzter Schluessel trifft nie auf einen Woerterbucheintrag und
  // bliebe auf SK und HU dauerhaft im englischen Fallback (siehe
  // docs/seo/03-sprachversionen.md).
  const inquiryMail = buildMailto(
    'office@asamer.net',
    `${tr('Anfrage', 'Inquiry', 'Poptávka')} ${catalog.label} ${heading}`,
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
            {tr('Zurück zur Übersicht', 'Back to overview', 'Zpět na přehled')}
          </Link>

          <header className="page-header mb-10 max-w-3xl">
            {eyebrow && (
              <p className="text-[11px] uppercase tracking-widest text-white/35 mb-3">{eyebrow}</p>
            )}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-light text-white mb-4">{heading}</h1>
            <p className="text-white/60 text-base leading-relaxed">{lead ?? meta.description}</p>
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

          {comparisonRows.length > 1 && (
            <section className="mb-12">
              <p className="text-[11px] uppercase tracking-widest text-white/35 mb-4">
                {tr('Modelle im Vergleich', 'Model comparison', 'Srovnání modelů')}
              </p>
              <div className="overflow-x-auto rounded-xl border border-white/10">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-white/[0.04] text-white/50 text-left">
                      <th className="px-4 py-3 font-normal">{tr('Modell', 'Model', 'Model')}</th>
                      {catalog.comparison.map((c) => (
                        <th key={c.header.en} className="px-4 py-3 font-normal whitespace-nowrap">
                          {c.header[lang]}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row) => (
                      <tr key={row.product.slug} className="border-t border-white/5">
                        <td className="px-4 py-3">
                          <Link
                            to={buildLocalizedPath(lang, catalog.productPath(lang, row.product))}
                            className="text-white/80 hover:text-white transition-colors"
                          >
                            {row.product.name}
                          </Link>
                        </td>
                        {row.cells.map((cell, i) => (
                          <td key={catalog.comparison[i].header.en} className="px-4 py-3 text-white/50 whitespace-nowrap">
                            {cell ?? '–'}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          <nav aria-label={tr('Weiterführend', 'Further reading', 'Další informace')} className="mb-12">
            <p className="text-[11px] uppercase tracking-widest text-white/35 mb-4">
              {tr('Weiterführend', 'Further reading', 'Další informace')}
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {guides.map((g) => (
                <Link
                  key={g.to}
                  to={g.to}
                  className="p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors"
                >
                  <g.icon className="w-4 h-4 text-white/40 mb-2" />
                  <p className="text-white/80 text-sm mb-1">{g.title}</p>
                  <p className="text-white/40 text-xs leading-relaxed">{g.text}</p>
                </Link>
              ))}
            </div>
          </nav>

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
