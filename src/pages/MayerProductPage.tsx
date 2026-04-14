import { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowUpRight, ArrowLeft, Monitor } from 'lucide-react';
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
import { getMayerProductBySlug, buildMayerProductPath, MAYER_CATEGORY_SHORT } from '../data/mayerProducts';
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
  const locale = lang === 'de' || lang === 'en' || lang === 'cz' || lang === 'sk' || lang === 'hu' ? lang : 'en';
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
      gsap.fromTo('.page-header', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' });
    });
    return () => ctx.revert();
  }, [model]);

  if (!product) return <Navigate to={buildPath('/mayer')} replace />;

  return <Detail product={product} lang={lang} tr={tr} buildPath={buildPath} />;
};

/* ------------------------------------------------------------------ */

interface DetailProps {
  product: MayerProduct;
  lang: Language;
  tr: (de: string, en: string, cz: string) => string;
  buildPath: (slug?: string) => string;
}

const Detail = ({ product, lang, tr, buildPath }: DetailProps) => {
  const inquiryMail = buildMailto('office@asamer.net', tr(`Anfrage Mayer ${product.name}`, `Inquiry Mayer ${product.name}`, `Poptávka Mayer ${product.name}`));
  const categoryLabel = MAYER_CATEGORY_SHORT[product.category][lang];
  const productPath = buildMayerProductPath(lang, product);
  const breadcrumbs = breadcrumbSchema([
    { name: tr('Startseite', 'Home', 'Domů'), url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, '/')}` },
    { name: 'Mayer', url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, '/mayer')}` },
    { name: product.name, url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, productPath)}` },
  ]);

  const specRows: { label: string; value: string }[] = [];
  if (product.specs.cuttingLength) specRows.push({ label: tr('Schnittlänge', 'Cutting length', 'Délka řezu'), value: product.specs.cuttingLength });
  if (product.specs.cuttingHeight) specRows.push({ label: tr('Schnitthöhe', 'Cutting height', 'Výška řezu'), value: product.specs.cuttingHeight });
  if (product.specs.feedSpeed) specRows.push({ label: tr('Vorschub', 'Feed speed', 'Posuv'), value: product.specs.feedSpeed });
  if (product.specs.motor) specRows.push({ label: tr('Motorleistung', 'Motor power', 'Výkon motoru'), value: product.specs.motor });
  if (product.specs.bladeDiameter) specRows.push({ label: tr('Sägeblatt ∅', 'Blade diameter', 'Průměr kotouče'), value: product.specs.bladeDiameter });
  if (product.specs.bladeProjection) specRows.push({ label: tr('Projektion', 'Projection', 'Projekce'), value: product.specs.bladeProjection });
  if (product.specs.notes) specRows.push({ label: tr('Hinweis', 'Note', 'Poznámka'), value: product.specs.notes[lang] });

  return (
    <>
      <SeoHead
        overrides={{ title: product.seoTitle[lang], description: product.seoDescription[lang], image: product.image, slug: productPath, keywords: product.seoKeywords?.[lang] }}
        buildAlternateSlug={(al) => buildMayerProductPath(al, product)}
        ogType="product"
        structuredData={[breadcrumbs]}
      />

      <div className="bg-dark min-h-screen pt-24 sm:pt-28 md:pt-32 pb-20">
        <div className="container-wide">
          {/* Breadcrumb */}
          <nav className="page-header flex items-center gap-2 text-[11px] uppercase tracking-widest text-white/35 mb-6 flex-wrap">
            <Link to={buildPath('/')} className="hover:text-white/60 transition-colors">{tr('Startseite', 'Home', 'Domů')}</Link>
            <span>/</span>
            <Link to={buildPath('/mayer')} className="hover:text-white/60 transition-colors">Mayer</Link>
            <span>/</span>
            <span className="text-white/50">{product.name}</span>
          </nav>

          <Link to={buildPath('/mayer')} className="page-header inline-flex items-center gap-2 text-[11px] uppercase tracking-widest text-white/40 hover:text-white/60 transition-colors mb-8">
            <ArrowLeft className="w-3.5 h-3.5" />
            {tr('Alle Mayer Produkte', 'All Mayer products', 'Všechny produkty Mayer')}
          </Link>

          {/* ── Hero ── */}
          <div className="page-header grid lg:grid-cols-2 gap-10 lg:gap-16 mb-16">
            <div className="border border-white/10 overflow-hidden">
              <img src={product.image} alt={`${product.name} Mayer`} className="w-full aspect-[4/3] object-contain bg-white/[0.02] p-6" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-[11px] uppercase tracking-widest text-white/40 mb-3">{categoryLabel}</span>
              <h1 className="text-3xl sm:text-4xl font-display font-bold text-white mb-2">{product.name} Mayer</h1>
              <p className="text-base text-white/55 mb-3">{product.tagline[lang]}</p>

              {/* Definition-Lead for AEO */}
              <p className="text-sm text-white/70 leading-relaxed mb-6 border-l-2 border-primary/40 pl-3">
                {tr(
                  `Die Mayer ${product.name} ist eine ${categoryLabel} für ${product.materials.includes('aluminium') ? 'die Verarbeitung von Aluminium, Kunststoff und NE-Metallen' : 'die präzise Aufteilung von Holz- und Plattenwerkstoffen'}${product.specs.cuttingLength ? ` mit ${product.specs.cuttingLength} Schnittlänge` : ''}.`,
                  `The Mayer ${product.name} is a ${categoryLabel.toLowerCase()} for ${product.materials.includes('aluminium') ? 'processing aluminium, plastics and non-ferrous metals' : 'precise cutting of wood and panel materials'}${product.specs.cuttingLength ? ` with ${product.specs.cuttingLength} cutting length` : ''}.`,
                  `Mayer ${product.name} je ${categoryLabel.toLowerCase()} pro ${product.materials.includes('aluminium') ? 'zpracování hliníku, plastů a neželezných kovů' : 'přesné dělení dřeva a deskových materiálů'}${product.specs.cuttingLength ? ` s délkou řezu ${product.specs.cuttingLength}` : ''}.`,
                )}
              </p>

              {/* Materials inline */}
              <div className="flex flex-wrap items-center gap-0 mb-6 text-xs text-white/40">
                {product.materials.map((m, i) => (
                  <span key={m} className="inline-flex items-center">
                    {i > 0 && <span className="mx-3 text-white/20" aria-hidden="true">·</span>}
                    {MATERIAL_LABELS[m]?.[lang] ?? m}
                  </span>
                ))}
              </div>

              <p className="text-sm text-white/60 leading-relaxed mb-8">{product.description[lang]}</p>

              <a href={inquiryMail} className="btn-primary-dark self-start">
                {tr('Anfrage senden', 'Send inquiry', 'Odeslat poptávku')}
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* ── Highlights + Specs side by side ── */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mb-14">
            {/* Highlights */}
            {product.highlights && product.highlights.length > 0 && (
              <section className="product-item">
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

            {/* Specs */}
            {specRows.length > 0 && (
              <section className="product-item">
                <div className="flex items-baseline gap-3 mb-4 pb-2.5 border-b border-white/8">
                  <h2 className="text-[11px] uppercase tracking-widest font-medium text-white/55">
                    {tr('Technische Daten', 'Technical Specifications', 'Technické údaje')}
                  </h2>
                  <span className="text-xs text-white/25 tabular-nums">{specRows.length}</span>
                </div>
                <dl className="divide-y divide-white/[0.06]">
                  {specRows.map((row) => (
                    <div key={row.label} className="flex items-center justify-between py-3">
                      <dt className="text-sm text-white/40">{row.label}</dt>
                      <dd className="text-sm text-white tabular-nums">{row.value}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            )}
          </div>

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
                  `Unser hauseigenes Software-Team verbindet Ihre Mayer ${product.name} nahtlos mit Ihrem ERP-, MES- oder Produktionssystem.`,
                  `Our in-house software team seamlessly connects your Mayer ${product.name} to your ERP, MES, or production system.`,
                  `Náš interní softwarový tým bezproblémově propojí váš Mayer ${product.name} s vaším ERP nebo výrobním systémem.`,
                )}
              </p>
              <Link to={buildPath('/mayer')} className="inline-flex items-center gap-1 text-xs text-white/35 hover:text-white/55 transition-colors uppercase tracking-wider">
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

export default MayerProductPage;
