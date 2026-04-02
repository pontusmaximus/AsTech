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
  buildLocalizedPath,
  buildCanonicalUrl,
  CANONICAL_DOMAIN,
  SUPPORTED_LANGUAGES,
  HREFLANG_DEFAULT,
  languageToHreflang,
} from '../lib/language';
import {
  getBarbaricProductBySlug,
  buildBarbaricProductPath,
  BARBARIC_CATEGORY_LABELS,
} from '../data/barbaricProducts';
import type { BarbaricProduct } from '../data/barbaricProducts';
import type { Language } from '../i18n';

gsap.registerPlugin(ScrollTrigger);

const BarbaricProductPage = () => {
  const { model } = useParams<{ model: string }>();
  const { lang, buildPath } = useLanguage();
  const locale =
    lang === 'de' || lang === 'en' || lang === 'cz' || lang === 'sk' || lang === 'hu' ? lang : 'en';
  const tr = (de: string, en: string, cz: string) => {
    if (locale === 'de') return de;
    if (locale === 'cz') return cz;
    if (locale === 'sk' || locale === 'hu') return translatePageText(locale, en, cz);
    return en;
  };

  const product = model ? getBarbaricProductBySlug(model) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      gsap.fromTo('.page-header', { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' });
      gsap.utils.toArray<HTMLElement>('.product-item').forEach((item, i) => {
        gsap.fromTo(item, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, delay: i * 0.1, ease: 'power3.out', scrollTrigger: { trigger: item, start: 'top 85%', toggleActions: 'play none none reverse' } });
      });
    });
    return () => ctx.revert();
  }, [model]);

  if (!product) return <Navigate to={buildPath('/barbaric')} replace />;

  return <Detail product={product} lang={lang} tr={tr} buildPath={buildPath} />;
};

/* ------------------------------------------------------------------ */

interface DetailProps {
  product: BarbaricProduct;
  lang: Language;
  tr: (de: string, en: string, cz: string) => string;
  buildPath: (slug?: string) => string;
}

const Detail = ({ product, lang, tr, buildPath }: DetailProps) => {
  const inquiryMail = buildMailto('office@asamer.net', tr(`Anfrage Barbaric ${product.name}`, `Inquiry Barbaric ${product.name}`, `Poptávka Barbaric ${product.name}`));
  const categoryLabel = BARBARIC_CATEGORY_LABELS[product.category][lang];
  const productPath = buildBarbaricProductPath(lang, product);
  const canonical = buildCanonicalUrl(lang, productPath);

  const breadcrumbs = breadcrumbSchema([
    { name: tr('Startseite', 'Home', 'Domů'), url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, '/')}` },
    { name: 'BARBARIC', url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, '/barbaric')}` },
    { name: product.name, url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, productPath)}` },
  ]);

  const productSchema = {
    '@context': 'https://schema.org', '@type': 'Product',
    name: `Barbaric ${product.name}`, description: product.seoDescription[lang], image: product.image,
    brand: { '@type': 'Brand', name: 'Barbaric' }, category: categoryLabel,
    offers: { '@type': 'Offer', availability: 'https://schema.org/InStock', seller: { '@type': 'Organization', name: 'Asamer Technologie GmbH', url: CANONICAL_DOMAIN } },
  };

  const specRows: { label: string; value: string }[] = [];
  if (product.specs) {
    for (const [key, value] of Object.entries(product.specs)) {
      specRows.push({ label: key, value });
    }
  }

  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>{product.seoTitle[lang]}</title>
        <meta name="description" content={product.seoDescription[lang]} />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href={canonical} />
        {SUPPORTED_LANGUAGES.map((sl) => (
          <link key={sl} rel="alternate" hrefLang={languageToHreflang(sl)} href={buildCanonicalUrl(sl, buildBarbaricProductPath(sl, product))} />
        ))}
        <link rel="alternate" hrefLang="x-default" href={buildCanonicalUrl(HREFLANG_DEFAULT, buildBarbaricProductPath(HREFLANG_DEFAULT, product))} />
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
          <nav className="page-header flex items-center gap-2 text-sm text-white/40 mb-10 flex-wrap">
            <Link to={buildPath('/')} className="hover:text-white transition-colors">{tr('Startseite', 'Home', 'Domů')}</Link>
            <span>/</span>
            <Link to={buildPath('/barbaric')} className="hover:text-white transition-colors">BARBARIC</Link>
            <span>/</span>
            <span className="text-white/70">{product.name}</span>
          </nav>

          <Link to={buildPath('/barbaric')} className="page-header inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-10">
            <ArrowLeft className="w-4 h-4" />
            {tr('Alle BARBARIC Produkte', 'All BARBARIC products', 'Všechny produkty BARBARIC')}
          </Link>

          {/* Hero */}
          <div className="product-item grid lg:grid-cols-2 gap-10 lg:gap-16 mb-16">
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-dark-elevated">
              <img src={product.image} alt={`Barbaric ${product.name}`} className="w-full aspect-[4/3] object-cover" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-xs uppercase tracking-widest text-primary mb-3">{categoryLabel}</span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-3">{product.name}</h1>
              <p className="text-lg text-white/50 mb-8">{product.tagline[lang]}</p>
              <p className="text-white/60 leading-relaxed mb-8">{product.description[lang]}</p>
              <a href={inquiryMail} className="btn-primary-dark self-start">
                {tr('Anfrage senden', 'Send inquiry', 'Odeslat poptávku')}
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Features */}
          {product.features && (
            <section className="product-item mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="accent-line" />
                <h2 className="text-2xl font-display font-light text-white">{tr('Highlights', 'Key Features', 'Hlavní vlastnosti')}</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {product.features[lang].map((f) => (
                  <div key={f} className="flex items-start gap-3 p-4 bg-white/[0.02] rounded-xl border border-white/5">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                    <span className="text-sm text-white/60">{f}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Specs */}
          {specRows.length > 0 && (
            <section className="product-item mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="accent-line" />
                <h2 className="text-2xl font-display font-light text-white">{tr('Technische Daten', 'Technical Specifications', 'Technické údaje')}</h2>
              </div>
              <div className="rounded-2xl border border-white/10 overflow-hidden">
                {specRows.map((row, i) => (
                  <div key={row.label} className={`flex flex-col sm:flex-row sm:items-center justify-between px-6 py-4 ${i % 2 === 0 ? 'bg-white/[0.02]' : ''} ${i < specRows.length - 1 ? 'border-b border-white/5' : ''}`}>
                    <span className="text-sm text-white/40">{row.label}</span>
                    <span className="text-sm text-white font-medium">{row.value}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Software integration teaser */}
          <section className="product-item mb-16">
            <div className="p-8 bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl border border-blue-500/20">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center shrink-0">
                  <Monitor className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-medium text-white mb-2">
                    {tr('Software-Integration inklusive', 'Software integration included', 'Softwarová integrace v ceně')}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {tr(
                      `BARBARIC-Systeme wie das ${product.name} verfügen bereits über offene Schnittstellen zu Maschinenherstellern. Unser Software-Team erweitert diese Anbindung auf Ihr ERP-, MES- oder Produktionssystem – für eine durchgängige Automatisierung von der Bestellung bis zum fertigen Teil.`,
                      `BARBARIC systems like the ${product.name} already feature open interfaces to machine manufacturers. Our software team extends this connection to your ERP, MES, or production system – for end-to-end automation from order to finished part.`,
                      `Systémy BARBARIC jako ${product.name} již disponují otevřenými rozhraními k výrobcům strojů. Náš softwarový tým toto propojení rozšíří na váš ERP, MES nebo výrobní systém – pro průběžnou automatizaci od objednávky po hotový díl.`,
                    )}
                  </p>
                  <Link to={buildPath('/barbaric')} className="inline-flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 transition-colors mt-3">
                    {tr('Mehr zur Software-Integration', 'More about software integration', 'Více o softwarové integraci')}
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="product-item p-8 bg-gradient-to-r from-orange-500/20 to-transparent rounded-2xl border border-orange-500/30">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-display font-medium text-white mb-2">
                  {tr(`Interesse am ${product.name}?`, `Interested in the ${product.name}?`, `Máte zájem o ${product.name}?`)}
                </h3>
                <p className="text-white/50">
                  {tr('Wir planen mit Ihnen die optimale Lösung für Ihre Produktion.', 'We work with you to plan the optimal solution for your production.', 'Společně s vámi navrhneme optimální řešení pro vaši výrobu.')}
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

export default BarbaricProductPage;
