import { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowUpRight, ArrowLeft, BookOpen, Banknote, Recycle } from 'lucide-react';
import gsap from 'gsap';
import { useLanguage } from '../App';
import { translatePageText } from '../i18n/pageTextTranslations';
import { buildMailto } from '../lib/email';
import SeoHead from '../seo/SeoHead';
import ProductCard from '../components/manufacturer/ProductCard';
import CategorySeoBlock from '../components/seo/CategorySeoBlock';
import { breadcrumbSchema, itemListSchema } from '../seo/structuredData';
import { buildLocalizedPath, CANONICAL_DOMAIN } from '../lib/language';
import {
  getOttProductsByCategory,
  buildOttProductPath,
  buildOttCategoryPath,
  findOttCategoryBySlug,
  getOttCategorySlug,
  OTT_CATEGORY_LABELS,
} from '../data/ottProducts';
import { OTT_CATEGORY_META } from '../data/ottCategoryMeta';
import { OTT_CATEGORY_SEO } from '../data/seo/ottSeoContent';

/**
 * Kategorie-Landingpage /ott/{kategorie-slug} — die Antwort auf generische
 * Kategorie-Suchanfragen („olepovačky hran"). Der Marken-Hub /ott bleibt die
 * Marken-Seite; die ausführlichen Kategorie-SEO-Inhalte wohnen hier.
 */
const OttCategoryPage = () => {
  const { category: categorySlug } = useParams<{ category: string }>();
  const { lang, buildPath } = useLanguage();
  const locale = lang === 'de' || lang === 'en' || lang === 'cz' || lang === 'sk' || lang === 'hu' ? lang : 'en';
  const tr = (de: string, en: string, cz: string) => {
    if (locale === 'de') return de;
    if (locale === 'cz') return cz;
    if (locale === 'sk' || locale === 'hu') return translatePageText(locale, en, cz);
    return en;
  };

  const category = categorySlug ? findOttCategoryBySlug(categorySlug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      gsap.fromTo('.page-header', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' });
    });
    return () => ctx.revert();
  }, [categorySlug]);

  if (!category) return <Navigate to={buildPath('/ott')} replace />;

  // Kategorie-Slug in fremder Sprache: auf die korrekte Sprachvariante umlenken
  // (serverseitig übernimmt das bereits eine 301-Regel in vercel.json).
  const correctSlug = getOttCategorySlug(category, lang);
  if (categorySlug !== correctSlug) {
    return <Navigate to={buildLocalizedPath(lang, `/ott/${correctSlug}`)} replace />;
  }

  const meta = OTT_CATEGORY_META[category];
  const label = OTT_CATEGORY_LABELS[category][lang];
  const products = getOttProductsByCategory(category);
  const categoryPath = buildOttCategoryPath(lang, category);
  const categoryUrl = `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, categoryPath)}`;
  const inquiryMail = buildMailto(
    'office@asamer.net',
    tr(`Anfrage OTT ${label}`, `Inquiry OTT ${label}`, `Poptávka OTT – ${label}`),
  );

  const breadcrumbs = breadcrumbSchema([
    { name: tr('Startseite', 'Home', 'Domů'), url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, '/')}` },
    { name: 'OTT', url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, '/ott')}` },
    { name: label, url: categoryUrl },
  ]);
  const productList = itemListSchema(
    `OTT ${label}`,
    products.map((p) => ({
      name: `${p.name} OTT`,
      url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, buildOttProductPath(lang, p))}`,
      image: p.image,
      description: p.seoDescription[lang],
    })),
  );

  const specRows = products
    .map((p) => ({
      product: p,
      length: p.specs.length,
      feedSpeed: p.specs.feedSpeed,
      edgeThickness: p.specs.edgeThickness,
    }))
    .filter((r) => r.length || r.feedSpeed || r.edgeThickness);

  const guides =
    category === 'edgebanding'
      ? [
          {
            icon: BookOpen,
            to: buildPath('/ratgeber/kantenanleimmaschine-waehlen'),
            title: tr('Ratgeber: Kantenanleimmaschine wählen', 'Guide: choosing an edgebander', 'Průvodce: výběr olepovačky hran'),
            text: tr('Welche Maschine passt zu Ihrem Betrieb?', 'Which machine fits your operation?', 'Který stroj se hodí do vašeho provozu?'),
          },
          {
            icon: BookOpen,
            to: buildPath('/ratgeber/pur-vs-eva'),
            title: tr('Ratgeber: PUR vs. EVA', 'Guide: PUR vs. EVA', 'Průvodce: PUR vs. EVA'),
            text: tr('Der Klebstoff-Vergleich für die Kante.', 'The adhesive comparison for edges.', 'Srovnání lepidel pro olepování hran.'),
          },
          {
            icon: Recycle,
            to: buildPath('/pouzite-stroje'),
            title: tr('Gebrauchte Kantenanleimmaschinen', 'Used edgebanding machines', 'Použité olepovačky hran'),
            text: tr('Geprüfte Gebrauchtmaschinen mit Service.', 'Inspected used machines with service.', 'Prověřené použité stroje se servisem.'),
          },
          {
            icon: Banknote,
            to: buildPath('/financovani'),
            title: tr('Finanzierung & Förderung', 'Financing & grants', 'Financování a dotace'),
            text: tr('Leasing und Förderungen bis 50 %.', 'Leasing and grants up to 50%.', 'Leasing a dotace až 50 %.'),
          },
        ]
      : [
          {
            icon: BookOpen,
            to: buildPath('/ratgeber/pur-vs-eva'),
            title: tr('Ratgeber: PUR vs. EVA', 'Guide: PUR vs. EVA', 'Průvodce: PUR vs. EVA'),
            text: tr('Der Klebstoff-Vergleich für die Kante.', 'The adhesive comparison for edges.', 'Srovnání lepidel pro olepování hran.'),
          },
          {
            icon: Banknote,
            to: buildPath('/financovani'),
            title: tr('Finanzierung & Förderung', 'Financing & grants', 'Financování a dotace'),
            text: tr('Leasing und Förderungen bis 50 %.', 'Leasing and grants up to 50%.', 'Leasing a dotace až 50 %.'),
          },
        ];

  return (
    <>
      <SeoHead
        overrides={{ title: meta.seoTitle[lang], description: meta.seoDescription[lang], image: products[0]?.image, slug: categoryPath }}
        buildAlternateSlug={(al) => buildOttCategoryPath(al, category)}
        structuredData={[breadcrumbs, productList]}
      />

      <div className="bg-dark min-h-screen pt-24 sm:pt-28 md:pt-32 pb-20">
        <div className="container-wide">
          {/* Breadcrumb */}
          <nav className="page-header flex items-center gap-2 text-[11px] uppercase tracking-widest text-white/35 mb-6 flex-wrap">
            <Link to={buildPath('/')} className="hover:text-white/60 transition-colors">{tr('Startseite', 'Home', 'Domů')}</Link>
            <span>/</span>
            <Link to={buildPath('/ott')} className="hover:text-white/60 transition-colors">OTT</Link>
            <span>/</span>
            <span className="text-white/50">{label}</span>
          </nav>

          <Link to={buildPath('/ott')} className="page-header inline-flex items-center gap-2 text-[11px] uppercase tracking-widest text-white/40 hover:text-white/60 transition-colors mb-8">
            <ArrowLeft className="w-3.5 h-3.5" />
            {tr('Alle OTT Produkte', 'All OTT products', 'Všechny produkty OTT')}
          </Link>

          {/* ── Kopf: H1 + Definition-Lead ── */}
          <div className="page-header max-w-3xl mb-12">
            <span className="inline-block text-xs sm:text-sm uppercase tracking-[0.2em] text-primary font-medium mb-4">
              {meta.eyebrow[lang]}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-5">
              {meta.h1[lang]}
            </h1>
            <p className="text-[15px] sm:text-base text-white/70 leading-[1.75] border-l-2 border-primary/40 pl-4">
              {meta.lead[lang]}
            </p>
          </div>

          {/* ── Produktgrid ── */}
          <section className="mb-14">
            <div className="flex items-baseline justify-between gap-3 mb-5 pb-2.5 border-b border-white/8">
              <h2 className="text-sm font-display text-white/50">
                {tr('Alle Modelle', 'All models', 'Všechny modely')} <span className="text-white/25">({products.length})</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {products.map((product) => (
                <ProductCard
                  key={product.slug}
                  to={buildPath(buildOttProductPath(lang, product))}
                  image={product.image}
                  imageAlt={`${product.name} OTT – ${label}`}
                  kpiValue={product.specs.feedSpeed}
                  kpiLabel={tr('Vorschub', 'Feed speed', 'Posuv')}
                  categoryLabel={label}
                  name={`${product.name} OTT`}
                  bullets={product.usp ? [product.usp[lang], product.tagline[lang]] : undefined}
                  detailLabel={tr('Details ansehen', 'View details', 'Zobrazit detail')}
                />
              ))}
            </div>
          </section>

          {/* ── Modellvergleich ── */}
          {specRows.length > 1 && (
            <section className="mb-14">
              <h2 className="text-sm font-display text-white/50 mb-4">
                {tr('Modelle im Vergleich', 'Model comparison', 'Srovnání modelů')}
              </h2>
              <div className="overflow-x-auto rounded-xl border border-white/10">
                <table className="w-full text-sm border-collapse min-w-[560px]">
                  <thead>
                    <tr className="text-left text-[11px] uppercase tracking-wider text-white/35 border-b border-white/10">
                      <th className="py-3 px-4 font-medium">{tr('Modell', 'Model', 'Model')}</th>
                      <th className="py-3 px-4 font-medium">{tr('Baulänge', 'Length', 'Délka')}</th>
                      <th className="py-3 px-4 font-medium">{tr('Vorschub', 'Feed speed', 'Posuv')}</th>
                      <th className="py-3 px-4 font-medium">{tr('Kantenstärke', 'Edge thickness', 'Tloušťka hrany')}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.06]">
                    {specRows.map((row) => (
                      <tr key={row.product.slug} className="hover:bg-white/[0.02] transition-colors">
                        <td className="py-3 px-4">
                          <Link to={buildPath(buildOttProductPath(lang, row.product))} className="text-white/85 font-medium hover:text-primary transition-colors">
                            {row.product.name}
                          </Link>
                        </td>
                        <td className="py-3 px-4 text-white/55">{row.length ?? '—'}</td>
                        <td className="py-3 px-4 text-white/55">{row.feedSpeed ?? '—'}</td>
                        <td className="py-3 px-4 text-white/55">{row.edgeThickness ?? '—'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {/* ── Weiterführend ── */}
          <section className="mb-4">
            <h2 className="text-sm font-display text-white/50 mb-4">
              {tr('Weiterführend', 'Related', 'Související')}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {guides.map((g) => (
                <Link key={g.title} to={g.to} className="group flex items-start gap-3 p-4 rounded-xl border border-white/8 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04] transition-colors">
                  <g.icon className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-white/85 group-hover:text-white transition-colors">{g.title}</div>
                    <div className="text-xs text-white/35 mt-1">{g.text}</div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>

        {/* ── Kategorie-SEO-Inhalt (Intro, Sektionen, FAQ) ── */}
        {OTT_CATEGORY_SEO[category] && (
          <CategorySeoBlock content={OTT_CATEGORY_SEO[category]} lang={lang} tr={tr} />
        )}

        {/* ── CTA ── */}
        <div className="container-wide">
          <div className="border-t border-white/10 pt-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-widest text-white/35 mb-2">{tr('Interesse geweckt?', 'Interested?', 'Máte zájem?')}</p>
                <p className="text-white/55 text-sm">
                  {tr('Beratung, Angebot und Montage aus einer Hand.', 'Consulting, quote and installation from a single source.', 'Poradenství, nabídka a montáž z jednoho zdroje.')}
                </p>
              </div>
              <a href={inquiryMail} className="btn-primary-dark text-sm sm:whitespace-nowrap">
                {tr('Anfrage senden', 'Send inquiry', 'Odeslat poptávku')}
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OttCategoryPage;
