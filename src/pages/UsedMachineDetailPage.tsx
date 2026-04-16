import { useEffect, useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Check, Mail, Tag, ChevronDown, Lightbulb, HelpCircle } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../App';
import { translatePageText } from '../i18n/pageTextTranslations';
import { buildMailto } from '../lib/email';
import { breadcrumbSchema, faqPageSchema } from '../seo/structuredData';
import SeoHead from '../seo/SeoHead';
import { buildLocalizedPath, CANONICAL_DOMAIN } from '../lib/language';
import { localizeSlug } from '../lib/slugs';
import { getUsedMachineBySlug } from '../data/usedMachines';
import type { UsedMachine } from '../data/usedMachines';
import type { MultiLangText } from '../data/seo/types';
import type { Language } from '../i18n';

gsap.registerPlugin(ScrollTrigger);

const ml = (obj: MultiLangText, lang: Language): string => {
  if (lang === 'sk') return obj.sk ?? obj.cz;
  if (lang === 'hu') return obj.hu ?? obj.en;
  if (lang === 'de') return obj.de;
  if (lang === 'cz') return obj.cz;
  return obj.en;
};

const getAvailabilitySchema = (status: 'available' | 'sold') =>
  status === 'sold' ? 'https://schema.org/OutOfStock' : 'https://schema.org/InStock';

const UsedMachineDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { lang, buildPath } = useLanguage();
  const locale = lang === 'de' || lang === 'en' || lang === 'cz' || lang === 'sk' || lang === 'hu' ? lang : 'en';
  const tr = (de: string, en: string, cz: string) => {
    if (locale === 'de') return de;
    if (locale === 'cz') return cz;
    if (locale === 'sk' || locale === 'hu') return translatePageText(locale, en, cz);
    return en;
  };

  const machine = getUsedMachineBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      gsap.fromTo('.page-header', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' });
    });
    return () => ctx.revert();
  }, [slug]);

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!machine) return <Navigate to={buildPath('/pouzite-stroje')} replace />;

  return <Detail machine={machine} lang={lang} tr={tr} buildPath={buildPath} openFaq={openFaq} setOpenFaq={setOpenFaq} />;
};

/* ------------------------------------------------------------------ */

interface DetailProps {
  machine: UsedMachine;
  lang: Language;
  tr: (de: string, en: string, cz: string) => string;
  buildPath: (slug?: string) => string;
  openFaq: number | null;
  setOpenFaq: (idx: number | null) => void;
}

const Detail = ({ machine, lang, tr, buildPath, openFaq, setOpenFaq }: DetailProps) => {
  const categoryPath = localizeSlug('/pouzite-stroje', lang);
  const detailPath = `${categoryPath}/${machine.slug}`;
  const inquiryMail = buildMailto(
    'office@asamer.net',
    `${tr('Gebrauchtmaschine Anfrage', 'Used machine inquiry', 'Poptávka na použitý stroj')}: ${machine.manufacturer} ${machine.name}`,
  );

  const crumbs = breadcrumbSchema([
    { name: tr('Startseite', 'Home', 'Domů'), url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, '/')}` },
    { name: tr('Gebrauchtmaschinen', 'Used machines', 'Použité stroje'), url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, categoryPath)}` },
    { name: `${machine.manufacturer} ${machine.name}`, url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, detailPath)}` },
  ]);

  const productSchema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${machine.manufacturer} ${machine.name}`,
    description: ml(machine.shortDescription, lang),
    brand: { '@type': 'Brand', name: machine.manufacturer },
    manufacturer: { '@type': 'Organization', name: machine.manufacturer },
    category: tr('Gebrauchtmaschinen', 'Used machines', 'Použité stroje'),
    itemCondition: 'https://schema.org/UsedCondition',
    ...(machine.images?.length ? { image: machine.images.map((src) => src.startsWith('http') ? src : `${CANONICAL_DOMAIN}${src}`) } : {}),
    ...(typeof machine.year === 'number' ? { productionDate: String(machine.year) } : {}),
    ...(typeof machine.price === 'number'
      ? {
          offers: {
            '@type': 'Offer',
            url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, detailPath)}`,
            availability: getAvailabilitySchema(machine.status),
            itemCondition: 'https://schema.org/UsedCondition',
            price: machine.price,
            priceCurrency: machine.priceCurrency ?? 'EUR',
          },
        }
      : {}),
  };

  const faqSchema = machine.faq && machine.faq.length > 0
    ? faqPageSchema(machine.faq.map((f) => ({ question: ml(f.question, lang), answer: ml(f.answer, lang) })))
    : null;

  const structuredData = [crumbs, productSchema, ...(faqSchema ? [faqSchema] : [])];

  const formatPrice = (price: number, currency: string) => {
    const numberLocale =
      lang === 'de' ? 'de-DE' : lang === 'cz' ? 'cs-CZ' : lang === 'sk' ? 'sk-SK' : lang === 'hu' ? 'hu-HU' : 'en-US';
    const formatted = price.toLocaleString(numberLocale);
    return currency === 'EUR' ? `€ ${formatted}` : `${formatted} ${currency}`;
  };

  const isSold = machine.status === 'sold';
  const imageFit = machine.imageFit ?? 'cover';
  const imageFitClass = imageFit === 'contain' ? 'object-contain' : 'object-cover';

  return (
    <>
      <SeoHead
        overrides={{
          title: `${machine.manufacturer} ${machine.name} – ${tr('Gebrauchtmaschine', 'Used machine', 'Použitý stroj')} | Asamer`,
          description: ml(machine.shortDescription, lang),
          image: machine.images?.[0],
          slug: detailPath,
        }}
        buildAlternateSlug={(alLang) => `${localizeSlug('/pouzite-stroje', alLang)}/${machine.slug}`}
        ogType="product"
        structuredData={structuredData}
      />

      <div className="bg-dark min-h-screen pt-24 sm:pt-28 md:pt-32 pb-20">
        <div className="container-wide">
          {/* Breadcrumb */}
          <nav className="page-header flex items-center gap-2 text-[11px] uppercase tracking-widest text-white/35 mb-6 flex-wrap">
            <Link to={buildPath('/')} className="hover:text-white/60 transition-colors">
              {tr('Startseite', 'Home', 'Domů')}
            </Link>
            <span>/</span>
            <Link to={buildPath('/pouzite-stroje')} className="hover:text-white/60 transition-colors">
              {tr('Gebrauchtmaschinen', 'Used machines', 'Použité stroje')}
            </Link>
            <span>/</span>
            <span className="text-white/50">{machine.manufacturer} {machine.name}</span>
          </nav>

          <Link to={buildPath('/pouzite-stroje')} className="page-header inline-flex items-center gap-2 text-[11px] uppercase tracking-widest text-white/40 hover:text-white/60 transition-colors mb-8">
            <ArrowLeft className="w-3.5 h-3.5" />
            {tr('Alle Gebrauchtmaschinen', 'All used machines', 'Všechny použité stroje')}
          </Link>

          {/* Hero: Image + Info */}
          <div className="page-header grid lg:grid-cols-2 gap-10 lg:gap-16 mb-16">
            <div className="space-y-3">
              {machine.images && machine.images.length > 0 ? (
                machine.images.map((src, i) => (
                  <div key={i} className="border border-white/10 bg-white/5 rounded-xl overflow-hidden">
                    <img
                      src={src}
                      alt={`${machine.manufacturer} ${machine.name} ${i + 1}`}
                      className={`w-full aspect-[4/3] ${imageFitClass}`}
                      loading={i === 0 ? 'eager' : 'lazy'}
                    />
                  </div>
                ))
              ) : (
                <div className="border border-white/10 rounded-xl aspect-[4/3] bg-primary/10 flex items-center justify-center">
                  <Tag className="w-12 h-12 text-primary/40" />
                </div>
              )}
            </div>

            <div className="flex flex-col justify-center">
              <span className="text-[11px] uppercase tracking-widest text-white/40 mb-3">
                {tr('Gebrauchtmaschine', 'Used machine', 'Použitý stroj')}
                {typeof machine.year === 'number' ? ` · ${machine.year}` : ''}
              </span>
              <h1 className="text-3xl sm:text-4xl font-display font-bold text-white mb-2">
                {machine.manufacturer} {machine.name}
              </h1>
              <p className="text-base text-white/65 mb-5">{ml(machine.shortDescription, lang)}</p>

              {/* Status + Price */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span
                  className={`inline-flex items-center gap-1.5 text-xs uppercase tracking-widest px-3 py-1.5 rounded-full border ${
                    isSold
                      ? 'bg-red-500/15 text-red-200 border-red-400/30'
                      : 'bg-emerald-500/15 text-emerald-200 border-emerald-400/30'
                  }`}
                >
                  {isSold
                    ? tr('Verkauft', 'Sold', 'Prodáno')
                    : tr('Verfügbar', 'Available', 'K dispozici')}
                </span>
                <span className="text-sm text-white/60">
                  {tr('Zustand', 'Condition', 'Stav')}: <span className="text-white/85">{ml(machine.condition, lang)}</span>
                </span>
              </div>

              {/* Price block */}
              <div className="mb-6 rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4">
                <div className="text-[11px] uppercase tracking-widest text-white/40 mb-1">
                  {tr('Preis', 'Price', 'Cena')}
                </div>
                {typeof machine.price === 'number' ? (
                  <div className="flex items-baseline gap-3">
                    {typeof machine.listPrice === 'number' && machine.listPrice > machine.price ? (
                      <span className="text-white/35 line-through text-base">
                        {formatPrice(machine.listPrice, machine.priceCurrency ?? 'EUR')}
                      </span>
                    ) : null}
                    <span className="text-2xl font-display text-primary font-medium">
                      {formatPrice(machine.price, machine.priceCurrency ?? 'EUR')}
                    </span>
                  </div>
                ) : (
                  <div className="text-lg text-white/80">
                    {tr('auf Anfrage', 'on request', 'na vyžádání')}
                  </div>
                )}
              </div>

              <a href={inquiryMail} className="btn-primary-dark self-start">
                <Mail className="w-4 h-4" />
                {tr('Anfrage senden', 'Send inquiry', 'Odeslat poptávku')}
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Two-column: Specs / Long description */}
          <div className="grid lg:grid-cols-[1fr,1.5fr] gap-10 lg:gap-16 mb-16">
            {machine.specs && machine.specs.length > 0 && (
              <div className="product-item">
                <div className="flex items-baseline gap-3 mb-4 pb-2.5 border-b border-white/8">
                  <h2 className="text-[11px] uppercase tracking-widest font-medium text-white/55">
                    {tr('Technische Daten', 'Technical Specifications', 'Technické údaje')}
                  </h2>
                </div>
                <table className="w-full text-sm border-collapse">
                  <tbody className="divide-y divide-white/[0.06]">
                    {machine.specs.map((row, i) => (
                      <tr key={i}>
                        <td className="py-2.5 pr-6 text-xs text-white/40 w-2/5">{ml(row.label, lang)}</td>
                        <td className="py-2.5 font-medium text-white/85">{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {machine.longDescription && (
              <div className="product-item">
                <div className="flex items-center gap-3 mb-5">
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary">
                    <Tag className="w-4 h-4" />
                  </div>
                  <h2 className="text-lg sm:text-xl font-display font-medium text-white tracking-tight">
                    {tr('Im Detail', 'In Detail', 'Podrobnosti')}
                  </h2>
                </div>
                <div className="text-[15px] sm:text-base text-white/75 leading-[1.75] space-y-4">
                  {ml(machine.longDescription, lang)
                    .split(/\n{2,}/)
                    .map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                </div>
              </div>
            )}
          </div>

          {/* Buying Advice */}
          {machine.buyingAdvice && (
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-5">
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <h2 className="text-lg sm:text-xl font-display font-medium text-white tracking-tight">
                  {tr('Kaufberatung', 'Buying Guide', 'Nákupní poradce')}
                </h2>
              </div>
              <div className="max-w-3xl rounded-xl border-l-4 border-primary bg-primary/[0.06] px-5 py-4">
                <p className="text-[15px] text-white/80 leading-[1.7]">
                  {ml(machine.buyingAdvice, lang)}
                </p>
              </div>
            </section>
          )}

          {/* FAQ */}
          {machine.faq && machine.faq.length > 0 && (
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-5">
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary">
                  <HelpCircle className="w-4 h-4" />
                </div>
                <h2 className="text-lg sm:text-xl font-display font-medium text-white tracking-tight">
                  {tr('Häufige Fragen', 'FAQ', 'Časté dotazy')}
                </h2>
              </div>
              <div className="max-w-3xl space-y-2.5">
                {machine.faq.map((item, i) => {
                  const isOpen = openFaq === i;
                  return (
                    <div
                      key={i}
                      className={`rounded-xl border transition-colors ${
                        isOpen
                          ? 'border-primary/30 bg-primary/[0.04]'
                          : 'border-white/8 bg-white/[0.02] hover:border-white/15'
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                        aria-expanded={isOpen}
                      >
                        <span className="text-[15px] font-medium text-white/90">
                          {ml(item.question, lang)}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-white/40 shrink-0 transition-transform duration-200 ${
                            isOpen ? 'rotate-180 text-primary' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-5">
                          <p className="text-[14px] text-white/70 leading-[1.75]">
                            {ml(item.answer, lang)}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* CTA */}
          <div className="product-item border-t border-white/10 pt-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-widest text-white/35 mb-2">
                  {isSold
                    ? tr('Interesse an ähnlichen Maschinen?', 'Interested in similar machines?', 'Zájem o podobné stroje?')
                    : tr('Interesse geweckt?', 'Interested?', 'Máte zájem?')}
                </p>
                <p className="text-white/55 text-sm">
                  {isSold
                    ? tr('Wir melden uns mit aktuell verfügbaren Angeboten.', 'We will respond with currently available options.', 'Ozveme se s aktuálně dostupnými nabídkami.')
                    : tr('Inklusive technischer Prüfung, Transport und Installation.', 'Including technical inspection, transport and installation.', 'Včetně technické kontroly, dopravy a instalace.')}
                </p>
              </div>
              <a href={inquiryMail} className="btn-primary-dark text-sm sm:whitespace-nowrap">
                <Check className="w-4 h-4" />
                {tr('Anfrage senden', 'Send inquiry', 'Odeslat poptávku')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsedMachineDetailPage;
