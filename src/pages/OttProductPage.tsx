import { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowUpRight, ArrowLeft, Monitor, Check } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../App';
import { translatePageText } from '../i18n/pageTextTranslations';
import { buildMailto } from '../lib/email';
import { breadcrumbSchema } from '../seo/structuredData';
import SeoHead from '../seo/SeoHead';
import {
  buildLocalizedPath, CANONICAL_DOMAIN,
} from '../lib/language';
import {
  getOttProductBySlug, buildOttProductPath, OTT_CATEGORY_LABELS,
} from '../data/ottProducts';
import type { OttProduct } from '../data/ottProducts';
import type { Language } from '../i18n';
import { OTT_PRODUCT_SEO } from '../data/seo/ottSeoContent';
import ProductSeoBlock from '../components/seo/ProductSeoBlock';

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
  const breadcrumbs = breadcrumbSchema([
    { name: tr('Startseite', 'Home', 'Domů'), url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, '/')}` },
    { name: 'OTT', url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, '/ott')}` },
    { name: product.name, url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, productPath)}` },
  ]);

  const specRows: { label: string; value: string }[] = [];
  if (product.specs.length) specRows.push({ label: tr('Baulänge', 'Length', 'Délka'), value: product.specs.length });
  if (product.specs.edgeThickness) specRows.push({ label: tr('Kantenstärke', 'Edge thickness', 'Tloušťka hrany'), value: product.specs.edgeThickness });
  if (product.specs.boardThickness) specRows.push({ label: tr('Werkstückstärke', 'Board thickness', 'Tloušťka obrobku'), value: product.specs.boardThickness });
  if (product.specs.feedSpeed) specRows.push({ label: tr('Vorschub', 'Feed speed', 'Posuv'), value: product.specs.feedSpeed });
  if (product.specs.notes) specRows.push({ label: tr('Hinweis', 'Note', 'Poznámka'), value: product.specs.notes[lang] });

  const recommendedProducts = (product.recommended ?? [])
    .map((slug) => getOttProductBySlug(slug))
    .filter(Boolean) as OttProduct[];

  return (
    <>
      <SeoHead
        overrides={{ title: product.seoTitle[lang], description: product.seoDescription[lang], image: product.image, slug: productPath }}
        buildAlternateSlug={(al) => buildOttProductPath(al, product)}
        ogType="product"
        structuredData={[breadcrumbs]}
      />

      <div className="bg-dark min-h-screen pt-24 sm:pt-28 md:pt-32 pb-20">
        <div className="container-wide">
          {/* Breadcrumb */}
          <nav className="page-header flex items-center gap-2 text-[11px] uppercase tracking-widest text-white/35 mb-6 flex-wrap">
            <Link to={buildPath('/')} className="hover:text-white/60 transition-colors">{tr('Startseite', 'Home', 'Domů')}</Link>
            <span>/</span>
            <Link to={buildPath('/ott')} className="hover:text-white/60 transition-colors">OTT</Link>
            <span>/</span>
            <span className="text-white/50">{product.name}</span>
          </nav>

          <Link to={buildPath('/ott')} className="page-header inline-flex items-center gap-2 text-[11px] uppercase tracking-widest text-white/40 hover:text-white/60 transition-colors mb-8">
            <ArrowLeft className="w-3.5 h-3.5" />
            {tr('Alle OTT Produkte', 'All OTT products', 'Všechny produkty OTT')}
          </Link>

          {/* ── Hero: Image + Info ── */}
          <div className="page-header grid lg:grid-cols-2 gap-10 lg:gap-16 mb-16">
            <div className="border border-white/10 overflow-hidden">
              <img src={product.image} alt={`${product.name} OTT`} className="w-full aspect-[4/3] object-cover" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-[11px] uppercase tracking-widest text-white/40 mb-3">{categoryLabel}</span>
              <h1 className="text-3xl sm:text-4xl font-display font-bold text-white mb-2">{product.name} OTT</h1>
              <p className="text-base text-white/55 mb-3">{product.tagline[lang]}</p>

              {/* Definition-Lead for AEO */}
              <p className="text-sm text-white/70 leading-relaxed mb-6 border-l-2 border-primary/40 pl-3">
                {tr(
                  `Die OTT ${product.name} ist eine ${categoryLabel} für ${product.badge === 'EINSTIEG' ? 'kleine und mittlere Tischlereien' : product.badge === 'MITTEL' ? 'mittlere Betriebe mit variantenreicher Fertigung' : product.badge === 'NEU' ? 'professionelle Betriebe mit steigenden Anforderungen' : product.badge === 'FLAGGSCHIFF' ? 'industrielle Großbetriebe im Dauerbetrieb' : 'professionelle Fertigungsbetriebe'}${product.usp?.[lang] ? ` – ${product.usp[lang]}` : ''}.`,
                  `The OTT ${product.name} is an ${categoryLabel.toLowerCase()} for ${product.badge === 'EINSTIEG' ? 'small and medium-sized joineries' : product.badge === 'MITTEL' ? 'mid-sized operations with varied production' : product.badge === 'NEU' ? 'professional operations with growing demands' : product.badge === 'FLAGGSCHIFF' ? 'industrial large-scale continuous operation' : 'professional manufacturing operations'}${product.usp?.[lang] ? ` – ${product.usp[lang]}` : ''}.`,
                  `OTT ${product.name} je ${categoryLabel.toLowerCase()} pro ${product.badge === 'EINSTIEG' ? 'malé a střední truhlárny' : product.badge === 'MITTEL' ? 'střední provozy s různorodou výrobou' : product.badge === 'NEU' ? 'profesionální provozy s rostoucími nároky' : product.badge === 'FLAGGSCHIFF' ? 'průmyslové velkoprovozy v nepřetržitém režimu' : 'profesionální výrobní provozy'}${product.usp?.[lang] ? ` – ${product.usp[lang]}` : ''}.`,
                )}
              </p>

              {/* Highlights or description */}
              {product.highlights?.[lang] ? (
                <ul className="mb-6 space-y-1.5">
                  {product.highlights[lang].map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-white/60">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-white/55 leading-relaxed mb-6">{product.description[lang]}</p>
              )}

              <a href={inquiryMail} className="btn-primary-dark self-start">
                {tr('Anfrage senden', 'Send inquiry', 'Odeslat poptávku')}
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* ── Two-column: Specs+Equipment / Software ── */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Left column */}
            <div>
              {/* Spec table */}
              {specRows.length > 0 && (
                <div className="product-item mb-10">
                  <div className="flex items-baseline gap-3 mb-4 pb-2.5 border-b border-white/8">
                    <h2 className="text-[11px] uppercase tracking-widest font-medium text-white/55">{tr('Technische Daten', 'Technical Specifications', 'Technické údaje')}</h2>
                  </div>
                  <table className="w-full text-sm border-collapse">
                    <tbody className="divide-y divide-white/[0.06]">
                      {specRows.map((row) => (
                        <tr key={row.label}>
                          <td className="py-2.5 pr-6 text-xs text-white/40 w-2/5">{row.label}</td>
                          <td className="py-2.5 font-medium text-white/85">{row.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Equipment list */}
              {product.equipment && product.equipment.length > 0 && (
                <div className="product-item">
                  <div className="flex items-baseline gap-3 mb-4 pb-2.5 border-b border-white/8">
                    <h2 className="text-[11px] uppercase tracking-widest font-medium text-white/55">{tr('Ausstattung', 'Equipment', 'Vybavení')}</h2>
                  </div>
                  <ul className="grid grid-cols-2 gap-x-6 gap-y-1.5">
                    {product.equipment.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-white/55">
                        <Check className="w-3 h-3 text-primary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right column */}
            <div>
              {/* Description (if highlights were shown in hero, show full description here) */}
              {product.highlights?.[lang] && (
                <div className="product-item mb-10">
                  <div className="flex items-baseline gap-3 mb-4 pb-2.5 border-b border-white/8">
                    <h2 className="text-[11px] uppercase tracking-widest font-medium text-white/55">{tr('Beschreibung', 'Description', 'Popis')}</h2>
                  </div>
                  <p className="text-sm text-white/55 leading-relaxed">{product.description[lang]}</p>
                </div>
              )}

              {/* Software integration */}
              <div className="product-item">
                <div className="border-l-2 border-primary/50 pl-5 py-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Monitor className="w-4 h-4 text-primary/70 shrink-0" />
                    <h3 className="text-sm font-medium text-white/80">
                      {tr('Software-Integration', 'Software integration', 'Softwarová integrace')}
                    </h3>
                  </div>
                  <p className="text-sm text-white/45 leading-relaxed mb-3">
                    {tr(
                      `Unser Software-Team verbindet die ${product.name} via OPC-UA direkt mit Ihrem ERP/MES – keine proprietäre Software, kein Vendor-Lock-in.`,
                      `Our software team connects the ${product.name} via OPC-UA directly to your ERP/MES – no proprietary software, no vendor lock-in.`,
                      `Náš softwarový tým propojí ${product.name} přes OPC-UA přímo s vaším ERP/MES – bez proprietárního softwaru, bez vendor lock-in.`,
                    )}
                  </p>
                  <Link to={buildPath('/ott')} className="inline-flex items-center gap-1 text-xs text-white/35 hover:text-white/55 transition-colors uppercase tracking-wider">
                    {tr('Mehr erfahren', 'Learn more', 'Více informací')}
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ── Recommended products ── */}
          {recommendedProducts.length > 0 && (
            <section className="product-item mb-16">
              <div className="flex items-baseline gap-3 mb-4 pb-2.5 border-b border-white/8">
                <h2 className="text-[11px] uppercase tracking-widest font-medium text-white/55">{tr('Passende Systemlösungen', 'Matching system solutions', 'Vhodná systémová řešení')}</h2>
              </div>
              <div className="divide-y divide-white/[0.06]">
                {recommendedProducts.map((rec) => (
                  <Link key={rec.slug} to={buildPath(buildOttProductPath(lang, rec))} className="group flex items-center gap-3 py-3 hover:bg-white/[0.02] -mx-2 px-2 transition-colors">
                    <img src={rec.image} alt={`OTT ${rec.name}`} className="h-10 w-10 object-cover border border-white/10 rounded-sm shrink-0" loading="lazy" />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm text-white/85">{rec.name}</div>
                      <div className="text-xs text-white/35 truncate">{rec.tagline[lang]}</div>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-white/25 group-hover:text-primary transition-colors shrink-0" />
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* ── SEO Content Block ── */}
          {OTT_PRODUCT_SEO[product.slug] && (
            <ProductSeoBlock content={OTT_PRODUCT_SEO[product.slug]} lang={lang} tr={tr} />
          )}

          {/* ── CTA ── */}
          <div className="product-item border-t border-white/10 pt-10">
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

export default OttProductPage;
