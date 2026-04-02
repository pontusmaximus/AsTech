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
  getMayerProductBySlug,
  buildMayerProductPath,
  MAYER_CATEGORY_SHORT,
} from '../data/mayerProducts';
import type { MayerProduct } from '../data/mayerProducts';
import type { Language } from '../i18n';

gsap.registerPlugin(ScrollTrigger);

const MATERIAL_LABELS: Record<string, Record<Language, string>> = {
  wood: { de: 'Holz', en: 'Wood', cz: 'Dřevo', sk: 'Drevo', hu: 'Fa' },
  aluminium: { de: 'Aluminium', en: 'Aluminium', cz: 'Hliník', sk: 'Hliník', hu: 'Alumínium' },
  plastics: { de: 'Kunststoff', en: 'Plastics', cz: 'Plasty', sk: 'Plasty', hu: 'Műanyag' },
  'non-ferrous': { de: 'NE-Metalle', en: 'Non-ferrous metals', cz: 'Neželezné kovy', sk: 'Neželezné kovy', hu: 'Színesfémek' },
};

const MayerProductPage = () => {
  const { model } = useParams<{ model: string }>();
  const { lang, buildPath } = useLanguage();

  const locale =
    lang === 'de' || lang === 'en' || lang === 'cz' || lang === 'sk' || lang === 'hu'
      ? lang
      : 'en';
  const tr = (de: string, en: string, cz: string) => {
    if (locale === 'de') return de;
    if (locale === 'cz') return cz;
    if (locale === 'sk' || locale === 'hu') return translatePageText(locale, en, cz);
    return en;
  };

  const product = model ? getMayerProductBySlug(model) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      gsap.fromTo('.page-header', { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' });
      gsap.utils.toArray<HTMLElement>('.product-item').forEach((item, i) => {
        gsap.fromTo(item, { y: 50, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.6, delay: i * 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: item, start: 'top 85%', toggleActions: 'play none none reverse' },
        });
      });
    });
    return () => ctx.revert();
  }, [model]);

  if (!product) return <Navigate to={buildPath('/mayer')} replace />;

  return <ProductDetail product={product} lang={lang} tr={tr} buildPath={buildPath} />;
};

/* ------------------------------------------------------------------ */

interface DetailProps {
  product: MayerProduct;
  lang: Language;
  tr: (de: string, en: string, cz: string) => string;
  buildPath: (slug?: string) => string;
}

const ProductDetail = ({ product, lang, tr, buildPath }: DetailProps) => {
  const inquiryMail = buildMailto(
    'office@asamer.net',
    tr(`Anfrage Mayer ${product.name}`, `Inquiry Mayer ${product.name}`, `Poptávka Mayer ${product.name}`),
  );

  const categoryLabel = MAYER_CATEGORY_SHORT[product.category][lang];
  const productPath = buildMayerProductPath(lang, product);

  const breadcrumbs = breadcrumbSchema([
    { name: tr('Startseite', 'Home', 'Domů'), url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, '/')}` },
    { name: 'Mayer', url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, '/mayer')}` },
    { name: product.name, url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, productPath)}` },
  ]);

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `Mayer ${product.name}`,
    description: product.seoDescription[lang],
    image: product.image,
    brand: { '@type': 'Brand', name: 'Mayer' },
    category: categoryLabel,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      seller: { '@type': 'Organization', name: 'Asamer Technologie GmbH', url: CANONICAL_DOMAIN },
    },
  };

  const canonical = buildCanonicalUrl(lang, productPath);

  const specRows: { label: string; value: string }[] = [];
  if (product.specs.cuttingLength) specRows.push({ label: tr('Schnittlänge', 'Cutting length', 'Délka řezu'), value: product.specs.cuttingLength });
  if (product.specs.cuttingHeight) specRows.push({ label: tr('Schnitthöhe', 'Cutting height', 'Výška řezu'), value: product.specs.cuttingHeight });
  if (product.specs.feedSpeed) specRows.push({ label: tr('Vorschub', 'Feed speed', 'Rychlost posuvu'), value: `${tr('bis', 'up to', 'do')} ${product.specs.feedSpeed}` });
  if (product.specs.motor) specRows.push({ label: tr('Motorleistung', 'Motor power', 'Výkon motoru'), value: product.specs.motor });
  if (product.specs.bladeDiameter) specRows.push({ label: tr('Sägeblatt ∅', 'Blade diameter', 'Průměr kotouče'), value: product.specs.bladeDiameter });
  if (product.specs.bladeProjection) specRows.push({ label: tr('Projektion', 'Projection', 'Projekce'), value: product.specs.bladeProjection });
  if (product.specs.notes) specRows.push({ label: tr('Hinweis', 'Note', 'Poznámka'), value: product.specs.notes[lang] });

  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>{product.seoTitle[lang]}</title>
        <meta name="description" content={product.seoDescription[lang]} />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href={canonical} />
        {SUPPORTED_LANGUAGES.map((sl) => (
          <link key={sl} rel="alternate" hrefLang={languageToHreflang(sl)} href={buildCanonicalUrl(sl, buildMayerProductPath(sl, product))} />
        ))}
        <link rel="alternate" hrefLang="x-default" href={buildCanonicalUrl(HREFLANG_DEFAULT, buildMayerProductPath(HREFLANG_DEFAULT, product))} />
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
          <nav className="page-header flex items-center gap-2 text-sm text-white/40 mb-10 flex-wrap">
            <Link to={buildPath('/')} className="hover:text-white transition-colors">{tr('Startseite', 'Home', 'Domů')}</Link>
            <span>/</span>
            <Link to={buildPath('/mayer')} className="hover:text-white transition-colors">Mayer</Link>
            <span>/</span>
            <span className="text-white/70">{product.name}</span>
          </nav>

          <Link to={buildPath('/mayer')} className="page-header inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-10">
            <ArrowLeft className="w-4 h-4" />
            {tr('Alle Mayer Produkte', 'All Mayer products', 'Všechny produkty Mayer')}
          </Link>

          {/* Hero */}
          <div className="product-item grid lg:grid-cols-2 gap-10 lg:gap-16 mb-16">
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-dark-elevated">
              <img src={product.image} alt={`Mayer ${product.name}`} className="w-full aspect-[4/3] object-cover" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-xs uppercase tracking-widest text-primary mb-3">{categoryLabel}</span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-3">
                Mayer {product.name}
              </h1>
              <p className="text-lg text-white/50 mb-6">{product.tagline[lang]}</p>

              {/* Material badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {product.materials.map((m) => (
                  <span key={m} className="px-3 py-1 text-xs rounded-full bg-white/[0.06] border border-white/10 text-white/60">
                    {MATERIAL_LABELS[m]?.[lang] ?? m}
                  </span>
                ))}
              </div>

              <p className="text-white/60 leading-relaxed mb-8">{product.description[lang]}</p>
              <a href={inquiryMail} className="btn-primary-dark self-start">
                {tr('Anfrage senden', 'Send inquiry', 'Odeslat poptávku')}
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </div>

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
                      `Unser hauseigenes Software-Team verbindet Ihre Mayer ${product.name} nahtlos mit Ihrem ERP-, MES- oder Produktionssystem – vom Auftragsimport über optimierte Schnittpläne bis zur Maschinenausführung.`,
                      `Our in-house software team seamlessly connects your Mayer ${product.name} to your ERP, MES, or production system – from order import through optimized cut plans to machine execution.`,
                      `Náš interní softwarový tým bezproblémově propojí váš Mayer ${product.name} s vaším ERP, MES nebo výrobním systémem – od importu zakázek přes optimalizované řezné plány po provedení na stroji.`,
                    )}
                  </p>
                  <Link to={buildPath('/mayer')} className="inline-flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 transition-colors mt-3">
                    {tr('Mehr zur Software-Integration', 'More about software integration', 'Více o softwarové integraci')}
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="product-item p-8 bg-gradient-to-r from-primary/20 to-transparent rounded-2xl border border-primary/30">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-display font-medium text-white mb-2">
                  {tr(`Interesse an der Mayer ${product.name}?`, `Interested in the Mayer ${product.name}?`, `Máte zájem o Mayer ${product.name}?`)}
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

export default MayerProductPage;
