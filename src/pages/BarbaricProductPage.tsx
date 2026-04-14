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
import { getBarbaricProductBySlug, buildBarbaricProductPath, BARBARIC_CATEGORY_LABELS } from '../data/barbaricProducts';
import type { BarbaricProduct } from '../data/barbaricProducts';
import type { Language } from '../i18n';

gsap.registerPlugin(ScrollTrigger);

const BarbaricProductPage = () => {
  const { model } = useParams<{ model: string }>();
  const { lang, buildPath } = useLanguage();
  const locale = lang === 'de' || lang === 'en' || lang === 'cz' || lang === 'sk' || lang === 'hu' ? lang : 'en';
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
      gsap.fromTo('.page-header', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' });
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
  const breadcrumbs = breadcrumbSchema([
    { name: tr('Startseite', 'Home', 'Domů'), url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, '/')}` },
    { name: 'BARBARIC', url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, '/barbaric')}` },
    { name: product.name, url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, productPath)}` },
  ]);

  const specRows: { label: string; value: string }[] = [];
  if (product.specs?.[lang]) {
    for (const [key, value] of Object.entries(product.specs[lang])) {
      specRows.push({ label: key, value });
    }
  }

  const highlightItems = product.highlights ?? product.features?.[lang] ?? [];

  return (
    <>
      <SeoHead
        overrides={{ title: product.seoTitle[lang], description: product.seoDescription[lang], image: product.image, slug: productPath }}
        buildAlternateSlug={(al) => buildBarbaricProductPath(al, product)}
        ogType="product"
        structuredData={[breadcrumbs]}
      />

      <div className="bg-dark min-h-screen pt-24 sm:pt-28 md:pt-32 pb-20">
        <div className="container-wide">
          {/* Breadcrumb */}
          <nav className="page-header flex items-center gap-2 text-[11px] uppercase tracking-widest text-white/35 mb-6 flex-wrap">
            <Link to={buildPath('/')} className="hover:text-white/60 transition-colors">{tr('Startseite', 'Home', 'Domů')}</Link>
            <span>/</span>
            <Link to={buildPath('/barbaric')} className="hover:text-white/60 transition-colors">BARBARIC</Link>
            <span>/</span>
            <span className="text-white/50">{product.name}</span>
          </nav>

          <Link to={buildPath('/barbaric')} className="page-header inline-flex items-center gap-2 text-[11px] uppercase tracking-widest text-white/40 hover:text-white/60 transition-colors mb-8">
            <ArrowLeft className="w-3.5 h-3.5" />
            {tr('Alle BARBARIC Produkte', 'All BARBARIC products', 'Všechny produkty BARBARIC')}
          </Link>

          {/* ── Hero ── */}
          <div className="page-header grid lg:grid-cols-2 gap-10 lg:gap-16 mb-16">
            <div className="border border-white/10 overflow-hidden">
              <img src={product.image} alt={`${product.name} Barbaric`} className="w-full aspect-[4/3] object-contain bg-white/[0.02] p-6" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-[11px] uppercase tracking-widest text-white/40 mb-3">{categoryLabel}</span>
              <h1 className="text-3xl sm:text-4xl font-display font-bold text-white mb-2">{product.name} Barbaric</h1>
              <p className="text-base text-white/55 mb-3">{product.tagline[lang]}</p>

              {/* Definition-Lead for AEO */}
              <p className="text-sm text-white/70 leading-relaxed mb-5 border-l-2 border-primary/40 pl-3">
                {tr(
                  `BARBARIC ${product.name} ist ein ${categoryLabel}${product.category === 'storage' ? ', das Plattenmaterial chaotisch oder sortenrein lagert und Just-in-Time an Säge oder CNC liefert' : product.category === 'feeding' ? ', das Plattenaufteilsägen vollautomatisch mit dem richtigen Material beschickt' : product.category === 'return' ? ' für den automatischen Rücktransport von Rest- und Fertigteilen zwischen Maschinen und Lager' : product.category === 'nesting' ? ' für die automatische Entnahme und Sortierung von CNC-Fertigteilen' : ` für die automatisierte Plattenverarbeitung`}. Asamer liefert, installiert und wartet BARBARIC-Systeme in CZ, SK und HU.`,
                  `BARBARIC ${product.name} is a ${categoryLabel.toLowerCase()}${product.category === 'storage' ? ' that stores panel material chaotically or by type and delivers just-in-time to saw or CNC' : product.category === 'feeding' ? ' that automatically feeds panel saws with the correct material' : product.category === 'return' ? ' for automatic return transport of offcuts and finished parts between machines and storage' : product.category === 'nesting' ? ' for automatic removal and sorting of CNC finished parts' : ' for automated panel processing'}. Asamer delivers, installs and services BARBARIC systems in CZ, SK and HU.`,
                  `BARBARIC ${product.name} je ${categoryLabel.toLowerCase()}${product.category === 'storage' ? ', který skladuje deskový materiál chaoticky nebo dle druhu a dodává Just-in-Time k pile nebo CNC' : product.category === 'feeding' ? ', který automaticky podává formátovacím pilám správný materiál' : product.category === 'return' ? ' pro automatický zpětný transport zbytků a hotových dílů mezi stroji a skladem' : product.category === 'nesting' ? ' pro automatický odběr a třídění CNC hotových dílů' : ' pro automatizované zpracování desek'}. Asamer dodává, instaluje a servisuje systémy BARBARIC v CZ, SK a HU.`,
                )}
              </p>

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
            {highlightItems.length > 0 && (
              <section className="product-item">
                <div className="flex items-baseline gap-3 mb-4 pb-2.5 border-b border-white/8">
                  <h2 className="text-[11px] uppercase tracking-widest font-medium text-white/55">Highlights</h2>
                </div>
                <ul className="divide-y divide-white/[0.06]">
                  {highlightItems.map((h) => (
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
                    {tr('Technische Daten', 'Specifications', 'Technické údaje')}
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
                  `BARBARIC-Systeme wie das ${product.name} verfügen über offene Schnittstellen zu Maschinenherstellern. Unser Software-Team erweitert diese Anbindung auf Ihr ERP- oder Produktionssystem.`,
                  `BARBARIC systems like the ${product.name} feature open interfaces to machine manufacturers. Our software team extends this to your ERP or production system.`,
                  `Systémy BARBARIC disponují otevřenými rozhraními. Náš tým propojí ${product.name} s vaším ERP nebo výrobním systémem.`,
                )}
              </p>
              <Link to={buildPath('/barbaric')} className="inline-flex items-center gap-1 text-xs text-white/35 hover:text-white/55 transition-colors uppercase tracking-wider">
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
                  {tr(
                    'Wir planen mit Ihnen die optimale Lösung für Ihre Produktion.',
                    'We work with you to plan the optimal solution for your production.',
                    'Společně s vámi navrhneme optimální řešení pro vaši výrobu.',
                  )}
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
