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

gsap.registerPlugin(ScrollTrigger);

const getImageSources = (src: string) => {
  if (src.endsWith('.webp')) {
    return { webp: src, fallback: src };
  }
  const normalized = src.replace(/\.(jpe?g|png)$/i, '');
  return { webp: `${normalized}.webp`, fallback: src };
};

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
      gsap.fromTo('.page-header', { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' });
      gsap.utils.toArray<HTMLElement>('.product-item').forEach((item, i) => {
        gsap.fromTo(item, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, delay: i * 0.1, ease: 'power3.out', scrollTrigger: { trigger: item, start: 'top 85%', toggleActions: 'play none none reverse' } });
      });
    });
    return () => ctx.revert();
  }, [model]);

  if (!product) return <Navigate to={buildPath('/gannomat')} replace />;

  const inquiryMail = buildMailto('office@asamer.net', tr(`Anfrage Gannomat ${product.name}`, `Inquiry Gannomat ${product.name}`, `Poptávka Gannomat ${product.name}`));
  const categoryLabel = GANNOMAT_CATEGORY_LABELS[product.category][lang];
  const productPath = buildGannomatProductPath(lang, product);
  const canonical = buildCanonicalUrl(lang, productPath);
  const imageSources = getImageSources(product.image);

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
          <nav className="page-header flex items-center gap-2 text-sm text-white/40 mb-10 flex-wrap">
            <Link to={buildPath('/')} className="hover:text-white transition-colors">{tr('Startseite', 'Home', 'Domů')}</Link>
            <span>/</span>
            <Link to={buildPath('/gannomat')} className="hover:text-white transition-colors">Gannomat</Link>
            <span>/</span>
            <span className="text-white/70">{product.name}</span>
          </nav>

          <Link to={buildPath('/gannomat')} className="page-header inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-10">
            <ArrowLeft className="w-4 h-4" />
            {tr('Alle Gannomat Produkte', 'All Gannomat products', 'Všechny produkty Gannomat')}
          </Link>

          <div className="product-item grid lg:grid-cols-2 gap-10 lg:gap-16 mb-16">
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-dark-elevated">
              <picture>
                <source type="image/webp" srcSet={imageSources.webp} />
                <img src={imageSources.fallback} alt={`Gannomat ${product.name}`} className="w-full aspect-[4/3] object-cover" />
              </picture>
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-xs uppercase tracking-widest text-primary mb-3">{categoryLabel}</span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-3">Gannomat {product.name}</h1>
              <p className="text-lg text-white/50 mb-8">{product.tagline[lang]}</p>
              <p className="text-white/60 leading-relaxed mb-8">{product.description[lang]}</p>
              <a href={inquiryMail} className="btn-primary-dark self-start">
                {tr('Anfrage senden', 'Send inquiry', 'Odeslat poptávku')}
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </div>

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
                      `Unser hauseigenes Software-Team verbindet Ihre Gannomat ${product.name} nahtlos mit Ihrem ERP-, MES- oder Produktionssystem – für vollautomatisierte Dübelbearbeitungs-Workflows.`,
                      `Our in-house software team seamlessly connects your Gannomat ${product.name} to your ERP, MES, or production system – for fully automated dowel processing workflows.`,
                      `Náš interní softwarový tým bezproblémově propojí váš Gannomat ${product.name} s vaším ERP, MES nebo výrobním systémem – pro plně automatizované kolkovací procesy.`,
                    )}
                  </p>
                  <Link to={buildPath('/gannomat')} className="inline-flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 transition-colors mt-3">
                    {tr('Mehr zur Software-Integration', 'More about software integration', 'Více o softwarové integraci')}
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <div className="product-item p-8 bg-gradient-to-r from-emerald-600/20 to-transparent rounded-2xl border border-emerald-500/30">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-display font-medium text-white mb-2">
                  {tr(`Interesse an der Gannomat ${product.name}?`, `Interested in the Gannomat ${product.name}?`, `Máte zájem o Gannomat ${product.name}?`)}
                </h3>
                <p className="text-white/50">
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
