import { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowUpRight, ArrowLeft, Monitor } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../App';
import { translatePageText } from '../i18n/pageTextTranslations';
import { buildMailto } from '../lib/email';
import { breadcrumbSchema } from '../seo/structuredData';
import {
  buildLocalizedPath, buildCanonicalUrl, CANONICAL_DOMAIN,
  SUPPORTED_LANGUAGES, HREFLANG_DEFAULT, languageToHreflang,
} from '../lib/language';
import { getGannomatProductBySlug, buildGannomatProductPath, GANNOMAT_CATEGORY_LABELS } from '../data/gannomatProducts';
import type { GannomatProduct } from '../data/gannomatProducts';
import type { Language } from '../i18n';

gsap.registerPlugin(ScrollTrigger);

const GannomatProductPage = () => {
  const { model } = useParams<{ model: string }>();
  const { lang, buildPath } = useLanguage();
  const locale = lang === 'de' || lang === 'en' || lang === 'cz' || lang === 'sk' || lang === 'hu' ? lang : 'en';
  const tr = (de: string, en: string, cz: string) => {
    if (locale === 'de') return de;
    if (locale === 'cz') return cz;
    if (locale === 'sk' || locale === 'hu') return translatePageText(locale, en, cz);
    return en;
  };

  const product = model ? getGannomatProductBySlug(model) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      gsap.fromTo('.page-header', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' });
    });
    return () => ctx.revert();
  }, [model]);

  if (!product) return <Navigate to={buildPath('/gannomat')} replace />;

  return <Detail product={product} lang={lang} tr={tr} buildPath={buildPath} />;
};

/* ------------------------------------------------------------------ */

interface DetailProps {
  product: GannomatProduct;
  lang: Language;
  tr: (de: string, en: string, cz: string) => string;
  buildPath: (slug?: string) => string;
}

const Detail = ({ product, lang, tr, buildPath }: DetailProps) => {
  const inquiryMail = buildMailto('office@asamer.net', tr(`Anfrage Gannomat ${product.name}`, `Inquiry Gannomat ${product.name}`, `Poptávka Gannomat ${product.name}`));
  const categoryLabel = GANNOMAT_CATEGORY_LABELS[product.category][lang];
  const productPath = buildGannomatProductPath(lang, product);
  const canonical = buildCanonicalUrl(lang, productPath);

  const breadcrumbs = breadcrumbSchema([
    { name: tr('Startseite', 'Home', 'Domů'), url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, '/')}` },
    { name: 'Gannomat', url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, '/gannomat')}` },
    { name: product.name, url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, productPath)}` },
  ]);

  const productSchema = {
    '@context': 'https://schema.org', '@type': 'Product',
    name: `Gannomat ${product.name}`, description: product.seoDescription[lang], image: product.image,
    brand: { '@type': 'Brand', name: 'Gannomat' }, category: categoryLabel,
    offers: { '@type': 'Offer', availability: 'https://schema.org/InStock', seller: { '@type': 'Organization', name: 'Asamer Technologie GmbH', url: CANONICAL_DOMAIN } },
  };

  const specEntries = product.specs ? Object.entries(product.specs) : [];

  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>{product.seoTitle[lang]}</title>
        <meta name="description" content={product.seoDescription[lang]} />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href={canonical} />
        {SUPPORTED_LANGUAGES.map((sl) => (
          <link key={sl} rel="alternate" hrefLang={languageToHreflang(sl)} href={buildCanonicalUrl(sl, buildGannomatProductPath(sl, product))} />
        ))}
        <link rel="alternate" hrefLang="x-default" href={buildCanonicalUrl(HREFLANG_DEFAULT, buildGannomatProductPath(HREFLANG_DEFAULT, product))} />
        <meta property="og:type" content="product" />
        <meta property="og:site_name" content="Asamer Technologie" />
        <meta property="og:title" content={product.seoTitle[lang]} />
        <meta property="og:description" content={product.seoDescription[lang]} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={product.image} />
        <meta property="og:locale" content={languageToHreflang(lang)} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={product.seoTitle[lang]} />
        <meta name="twitter:description" content={product.seoDescription[lang]} />
        <meta name="twitter:image" content={product.image} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbs)}</script>
        <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
      </Helmet>

      <div className="bg-dark min-h-screen pt-24 sm:pt-28 md:pt-32 pb-20">
        <div className="container-wide">
          {/* Breadcrumb */}
          <nav className="page-header flex items-center gap-2 text-[11px] uppercase tracking-widest text-white/35 mb-6 flex-wrap">
            <Link to={buildPath('/')} className="hover:text-white/60 transition-colors">{tr('Startseite', 'Home', 'Domů')}</Link>
            <span>/</span>
            <Link to={buildPath('/gannomat')} className="hover:text-white/60 transition-colors">Gannomat</Link>
            <span>/</span>
            <span className="text-white/50">{product.name}</span>
          </nav>

          <Link to={buildPath('/gannomat')} className="page-header inline-flex items-center gap-2 text-[11px] uppercase tracking-widest text-white/40 hover:text-white/60 transition-colors mb-8">
            <ArrowLeft className="w-3.5 h-3.5" />
            {tr('Alle Gannomat Produkte', 'All Gannomat products', 'Všechny produkty Gannomat')}
          </Link>

          {/* ── Hero ── */}
          <div className="page-header grid lg:grid-cols-2 gap-10 lg:gap-16 mb-16">
            <div className="border border-white/10 overflow-hidden">
              <img src={product.image} alt={`Gannomat ${product.name}`} className="w-full aspect-[4/3] object-contain bg-white/[0.02] p-6" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-[11px] uppercase tracking-widest text-white/40 mb-3">{categoryLabel}</span>
              <h1 className="text-3xl sm:text-4xl font-display font-bold text-white mb-2">Gannomat {product.name}</h1>
              <p className="text-base text-white/55 mb-6">{product.tagline[lang]}</p>
              <p className="text-sm text-white/60 leading-relaxed mb-8">{product.description[lang]}</p>
              <a href={inquiryMail} className="btn-primary-dark self-start">
                {tr('Anfrage senden', 'Send inquiry', 'Odeslat poptávku')}
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* ── Highlights ── */}
          {product.highlights && product.highlights.length > 0 && (
            <section className="product-item mb-14">
              <div className="flex items-baseline gap-3 mb-4 pb-2.5 border-b border-white/8">
                <h2 className="text-[11px] uppercase tracking-widest font-medium text-white/55">Highlights</h2>
              </div>
              <ul className="divide-y divide-white/[0.06]">
                {product.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 py-3">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                    <span className="text-sm text-white/65">{h}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* ── Specs ── */}
          {specEntries.length > 0 && (
            <section className="product-item mb-14">
              <div className="flex items-baseline gap-3 mb-4 pb-2.5 border-b border-white/8">
                <h2 className="text-[11px] uppercase tracking-widest font-medium text-white/55">
                  {tr('Technische Daten', 'Specifications', 'Technické údaje')}
                </h2>
                <span className="text-xs text-white/25 tabular-nums">{specEntries.length}</span>
              </div>
              <dl className="divide-y divide-white/[0.06]">
                {specEntries.map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between py-3">
                    <dt className="text-sm text-white/40">{key}</dt>
                    <dd className="text-sm text-white tabular-nums">{value}</dd>
                  </div>
                ))}
              </dl>
            </section>
          )}

          {/* ── Software Integration ── */}
          <section className="product-item mb-14">
            <div className="border-l-2 border-primary/50 pl-5 py-1">
              <div className="flex items-center gap-2 mb-2">
                <Monitor className="w-4 h-4 text-primary/70 shrink-0" />
                <h3 className="text-sm font-medium text-white/80">
                  {tr('Software-Integration', 'Software integration', 'Softwarová integrace')}
                </h3>
              </div>
              <p className="text-sm text-white/45 leading-relaxed mb-3">
                {tr(
                  `Unser hauseigenes Software-Team verbindet Ihre Gannomat ${product.name} nahtlos mit Ihrem ERP-, MES- oder Produktionssystem — für vollautomatisierte Dübel-Workflows.`,
                  `Our in-house software team seamlessly connects your Gannomat ${product.name} to your ERP, MES, or production system — for fully automated dowel processing workflows.`,
                  `Náš interní softwarový tým propojí váš Gannomat ${product.name} s vaším ERP nebo výrobním systémem.`,
                )}
              </p>
              <Link to={buildPath('/gannomat')} className="inline-flex items-center gap-1 text-xs text-white/35 hover:text-white/55 transition-colors uppercase tracking-wider">
                {tr('Mehr erfahren', 'Learn more', 'Více informací')}
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </section>

          {/* ── CTA ── */}
          <div className="product-item border-t border-white/10 pt-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-widest text-white/35 mb-2">{tr('Interesse geweckt?', 'Interested?', 'Máte zájem?')}</p>
                <p className="text-white/55 text-sm">
                  {tr('Wir beraten Sie gerne und erstellen Ihnen ein individuelles Angebot.', 'We are happy to advise you and prepare an individual offer.', 'Rádi vám poradíme a připravíme individuální nabídku.')}
                </p>
              </div>
              <a href={inquiryMail} className="btn-primary-dark sm:whitespace-nowrap">
                {tr('Anfrage senden', 'Send inquiry', 'Odeslat poptávku')}
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GannomatProductPage;
