import { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowUpRight, ArrowLeft, Monitor, Wrench, Flag, Check } from 'lucide-react';
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
import {
  getOttProductBySlug, buildOttProductPath, OTT_CATEGORY_LABELS,
} from '../data/ottProducts';
import type { OttProduct } from '../data/ottProducts';
import type { Language } from '../i18n';

gsap.registerPlugin(ScrollTrigger);

const OttProductPage = () => {
  const { model } = useParams<{ model: string }>();
  const { lang, buildPath } = useLanguage();
  const locale = lang === 'de' || lang === 'en' || lang === 'cz' || lang === 'sk' || lang === 'hu' ? lang : 'en';
  const tr = (de: string, en: string, cz: string) => {
    if (locale === 'de') return de;
    if (locale === 'cz') return cz;
    if (locale === 'sk' || locale === 'hu') return translatePageText(locale, en, cz);
    return en;
  };

  const product = model ? getOttProductBySlug(model) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      gsap.fromTo('.page-header', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' });
    });
    return () => ctx.revert();
  }, [model]);

  if (!product) return <Navigate to={buildPath('/ott')} replace />;

  return <Detail product={product} lang={lang} tr={tr} buildPath={buildPath} />;
};

/* ------------------------------------------------------------------ */

interface DetailProps {
  product: OttProduct;
  lang: Language;
  tr: (de: string, en: string, cz: string) => string;
  buildPath: (slug?: string) => string;
}

const Detail = ({ product, lang, tr, buildPath }: DetailProps) => {
  const inquiryMail = buildMailto('office@asamer.net', tr(`Anfrage OTT ${product.name}`, `Inquiry OTT ${product.name}`, `Poptávka OTT ${product.name}`));
  const categoryLabel = OTT_CATEGORY_LABELS[product.category][lang];
  const productPath = buildOttProductPath(lang, product);
  const canonical = buildCanonicalUrl(lang, productPath);

  const breadcrumbs = breadcrumbSchema([
    { name: tr('Startseite', 'Home', 'Domů'), url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, '/')}` },
    { name: 'OTT', url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, '/ott')}` },
    { name: product.name, url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, productPath)}` },
  ]);

  const productSchema = {
    '@context': 'https://schema.org', '@type': 'Product',
    name: `OTT ${product.name}`, description: product.seoDescription[lang], image: product.image,
    brand: { '@type': 'Brand', name: 'OTT' }, category: categoryLabel,
    offers: { '@type': 'Offer', availability: 'https://schema.org/InStock', seller: { '@type': 'Organization', name: 'Asamer Technologie GmbH', url: CANONICAL_DOMAIN } },
  };

  const specRows: { label: string; value: string }[] = [];
  if (product.specs.length) specRows.push({ label: tr('Baulänge', 'Length', 'Délka'), value: product.specs.length });
  if (product.specs.edgeThickness) specRows.push({ label: tr('Kantenstärke', 'Edge thickness', 'Tloušťka hrany'), value: product.specs.edgeThickness });
  if (product.specs.boardThickness) specRows.push({ label: tr('Werkstückstärke', 'Board thickness', 'Tloušťka obrobku'), value: `${tr('bis', 'up to', 'do')} ${product.specs.boardThickness}` });
  if (product.specs.feedSpeed) specRows.push({ label: tr('Vorschub', 'Feed speed', 'Posuv'), value: product.specs.feedSpeed });
  if (product.specs.notes) specRows.push({ label: tr('Hinweis', 'Note', 'Poznámka'), value: product.specs.notes[lang] });

  // Get recommended products
  const recommendedProducts = (product.recommended ?? [])
    .map((slug) => getOttProductBySlug(slug))
    .filter(Boolean) as OttProduct[];

  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>{product.seoTitle[lang]}</title>
        <meta name="description" content={product.seoDescription[lang]} />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href={canonical} />
        {SUPPORTED_LANGUAGES.map((sl) => (
          <link key={sl} rel="alternate" hrefLang={languageToHreflang(sl)} href={buildCanonicalUrl(sl, buildOttProductPath(sl, product))} />
        ))}
        <link rel="alternate" hrefLang="x-default" href={buildCanonicalUrl(HREFLANG_DEFAULT, buildOttProductPath(HREFLANG_DEFAULT, product))} />
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
          <nav className="page-header flex items-center gap-2 text-sm text-white/40 mb-6 flex-wrap">
            <Link to={buildPath('/')} className="hover:text-white transition-colors">{tr('Startseite', 'Home', 'Domů')}</Link>
            <span>/</span>
            <Link to={buildPath('/ott')} className="hover:text-white transition-colors">OTT</Link>
            <span>/</span>
            <span className="text-white/70">{product.name}</span>
          </nav>

          <Link to={buildPath('/ott')} className="page-header inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            {tr('Alle OTT Produkte', 'All OTT products', 'Všechny produkty OTT')}
          </Link>

          {/* === Hero: Image + Info === */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
            <div className="relative rounded-xl overflow-hidden border border-white/10 bg-dark-elevated">
              {product.badge && (
                <span className={`absolute top-3 right-3 z-10 text-[10px] font-bold tracking-wider px-2 py-1 rounded ${
                  product.badge === 'NEU' ? 'bg-emerald-500 text-white' :
                  product.badge === 'FLAGGSCHIFF' ? 'bg-primary text-white' :
                  product.badge === 'SPEZIAL' ? 'bg-purple-500 text-white' :
                  'bg-white/15 text-white/70'
                }`}>{product.badge}</span>
              )}
              <img src={product.image} alt={`OTT ${product.name}`} className="w-full aspect-[4/3] object-cover" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-xs uppercase tracking-widest text-primary mb-2">{categoryLabel}</span>
              <h1 className="text-3xl sm:text-4xl font-display font-bold text-white mb-2">OTT {product.name}</h1>
              <p className="text-base text-white/50 mb-4">{product.tagline[lang]}</p>
              {product.usp && <p className="text-sm text-primary/80 mb-6">{product.usp[lang]}</p>}
              <p className="text-white/55 text-sm leading-relaxed mb-6">{product.description[lang]}</p>

              {/* Quick advantages */}
              <div className="flex flex-wrap gap-3 mb-6">
                {[
                  { icon: <Monitor className="w-3.5 h-3.5" />, label: 'Beckhoff OPC-UA' },
                  { icon: <Wrench className="w-3.5 h-3.5" />, label: tr('PUR + EVA', 'PUR + EVA', 'PUR + EVA') },
                  { icon: <Flag className="w-3.5 h-3.5" />, label: tr('Made in Austria', 'Made in Austria', 'Made in Austria') },
                ].map((a) => (
                  <span key={a.label} className="inline-flex items-center gap-1.5 text-xs text-white/50 px-2.5 py-1 rounded-full border border-white/8 bg-white/[0.02]">
                    {a.icon}{a.label}
                  </span>
                ))}
              </div>

              <a href={inquiryMail} className="btn-primary-dark self-start">
                {tr('Anfrage senden', 'Send inquiry', 'Odeslat poptávku')}
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* === Two-column: Specs + Equipment / Why this model === */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Left: Specs + Equipment */}
            <div>
              {specRows.length > 0 && (
                <div className="mb-6">
                  <h2 className="text-sm font-display text-white/50 mb-3">{tr('Technische Daten', 'Technical Specifications', 'Technické údaje')}</h2>
                  <div className="rounded-xl border border-white/10 overflow-hidden">
                    {specRows.map((row, i) => (
                      <div key={row.label} className={`flex items-center justify-between px-4 py-2.5 text-sm ${i % 2 === 0 ? 'bg-white/[0.02]' : ''} ${i < specRows.length - 1 ? 'border-b border-white/5' : ''}`}>
                        <span className="text-white/40">{row.label}</span>
                        <span className="text-white font-medium">{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {product.equipment && product.equipment.length > 0 && (
                <div>
                  <h2 className="text-sm font-display text-white/50 mb-3">{tr('Ausstattung', 'Equipment', 'Vybavení')}</h2>
                  <div className="grid grid-cols-2 gap-2">
                    {product.equipment.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs text-white/50 px-3 py-2 rounded-lg border border-white/5 bg-white/[0.01]">
                        <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right: Why this model + Software integration */}
            <div>
              <div className="p-5 rounded-xl border border-blue-500/15 bg-gradient-to-br from-blue-500/5 to-transparent mb-6">
                <h2 className="text-sm font-display text-white mb-3">{tr('Vorteile auf einen Blick', 'Advantages at a glance', 'Výhody na první pohled')}</h2>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2 text-xs text-white/55">
                    <Monitor className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>{tr('Beckhoff OPC-UA – offene ERP/MES-Integration ohne Vendor-Lock-in', 'Beckhoff OPC-UA – open ERP/MES integration without vendor lock-in', 'Beckhoff OPC-UA – otevřená integrace ERP/MES bez vendor lock-in')}</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs text-white/55">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{tr('PUR + EVA Leimverarbeitung möglich (CombiMelt)', 'PUR + EVA adhesive processing possible (CombiMelt)', 'Zpracování lepidla PUR + EVA (CombiMelt)')}</span>
                  </li>
                  {product.specs.feedSpeed && (
                    <li className="flex items-start gap-2 text-xs text-white/55">
                      <ArrowUpRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{product.specs.feedSpeed} {tr('inkl. Eckenbearbeitung', 'incl. corner processing', 'vč. zpracování rohů')}</span>
                    </li>
                  )}
                  <li className="flex items-start gap-2 text-xs text-white/55">
                    <Flag className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span>{tr('Made in Austria seit 1963 – Familienbetrieb', 'Made in Austria since 1963 – family business', 'Made in Austria od roku 1963 – rodinný podnik')}</span>
                  </li>
                </ul>
              </div>

              <div className="p-5 rounded-xl border border-white/8 bg-white/[0.02]">
                <h2 className="text-sm font-display text-white mb-2">{tr('Software-Integration', 'Software integration', 'Softwarová integrace')}</h2>
                <p className="text-xs text-white/45 leading-relaxed">
                  {tr(
                    `Unser Software-Team verbindet die ${product.name} via OPC-UA direkt mit Ihrem ERP/MES – keine proprietäre Software nötig, kein Vendor-Lock-in.`,
                    `Our software team connects the ${product.name} via OPC-UA directly to your ERP/MES – no proprietary software needed, no vendor lock-in.`,
                    `Náš softwarový tým propojí ${product.name} přes OPC-UA přímo s vaším ERP/MES – bez proprietárního softwaru, bez vendor lock-in.`,
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* === Recommended companion products === */}
          {recommendedProducts.length > 0 && (
            <section className="mb-12">
              <h2 className="text-sm font-display text-white/50 mb-3">{tr('Passende Systemlösungen', 'Matching system solutions', 'Vhodná systémová řešení')}</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {recommendedProducts.map((rec) => (
                  <Link key={rec.slug} to={buildPath(buildOttProductPath(lang, rec))} className="flex items-center gap-3 p-3 rounded-lg border border-white/10 bg-white/[0.03] hover:border-primary/30 transition-colors">
                    <img src={rec.image} alt={`OTT ${rec.name}`} className="h-10 w-10 rounded-md object-cover border border-white/10" loading="lazy" />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm text-white">{rec.name}</div>
                      <div className="text-xs text-white/35">{rec.tagline[lang]}</div>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-white/25 shrink-0" />
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* === CTA === */}
          <div className="p-5 bg-gradient-to-r from-red-600/10 to-transparent rounded-xl border border-red-500/15">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-white font-medium">{tr(`Interesse an der OTT ${product.name}?`, `Interested in the OTT ${product.name}?`, `Máte zájem o OTT ${product.name}?`)}</span>
                <p className="text-xs text-white/40 mt-1">{tr('Beratung, Angebot und Montage aus einer Hand.', 'Consulting, quote and installation from a single source.', 'Poradenství, nabídka a montáž z jednoho zdroje.')}</p>
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

export default OttProductPage;
