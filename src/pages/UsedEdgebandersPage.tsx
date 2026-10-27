import { ArrowRight, ArrowUpRight, Banknote, CheckCircle2, Layers, Mail, Recycle, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../App';
import { translatePageText } from '../i18n/pageTextTranslations';
import { buildMailto } from '../lib/email';
import { buildLocalizedPath, CANONICAL_DOMAIN } from '../lib/language';
import { localizeSlug } from '../lib/slugs';
import SeoHead from '../seo/SeoHead';
import { breadcrumbSchema, itemListSchema } from '../seo/structuredData';
import { trackEvent } from '../lib/analytics';
import { buildOttCategoryPath } from '../data/ottProducts';
import { getUsedMachinesByCategory } from '../data/usedMachines';
import type { MultiLangText } from '../data/seo/types';
import type { Language } from '../i18n';

const ml = (obj: MultiLangText, lang: Language): string => {
  if (lang === 'sk') return obj.sk ?? obj.cz;
  if (lang === 'hu') return obj.hu ?? obj.en;
  if (lang === 'de') return obj.de;
  if (lang === 'cz') return obj.cz;
  return obj.en;
};

/** Gleiche Bildvarianten wie auf der Gebrauchtmaschinen-Uebersicht. */
const imageSources = (src: string) => {
  const base = src.replace(/\.(jpe?g|png)$/i, '');
  return { avif: `${base}.avif`, webp: `${base}.webp`, fallback: src };
};

/**
 * Spezifikationen, die auf der Karte stehen. Baujahr und Zustand zeigt die
 * Karte ohnehin, Typ und Preis sind auf allen Maschinen gleich bzw. „auf
 * Anfrage" — uebrig bleiben Laufleistung und Leimsystem.
 */
const CARD_SPEC_LABELS = new Set(['Laufleistung', 'Leimsystem']);

/**
 * Gebrauchte Kantenanleimmaschinen — /{lang}/pouzite-stroje/olepovacky-hran.
 *
 * Inhalt kommt vollstaendig aus `src/data/usedMachines.ts` (Kategorie
 * 'edgebanding'). Die Seite erfindet keine Zustaende, Preise oder Daten: was
 * dort nicht steht, steht hier nicht.
 */
const UsedEdgebandersPage = () => {
  const { lang, buildPath } = useLanguage();
  const locale = lang === 'de' || lang === 'en' || lang === 'cz' || lang === 'sk' || lang === 'hu' ? lang : 'en';
  const tr = (de: string, en: string, cz: string) => {
    if (locale === 'de') return de;
    if (locale === 'cz') return cz;
    if (locale === 'sk' || locale === 'hu') return translatePageText(locale, en, cz);
    return en;
  };

  // Verfuegbare zuerst, verkaufte (falls noch gelistet) dahinter.
  const machines = [...getUsedMachinesByCategory('edgebanding')].sort(
    (a, b) => Number(a.status === 'sold') - Number(b.status === 'sold'),
  );
  const manufacturers = [...new Set(machines.map((m) => m.manufacturer))];

  const overviewPath = localizeSlug('/pouzite-stroje', lang);
  const pagePath = localizeSlug('/pouzite-stroje/olepovacky-hran', lang);
  const heading = tr('Gebrauchte Kantenanleimmaschinen', 'Used edgebanding machines', 'Použité olepovačky hran');

  const breadcrumbs = breadcrumbSchema([
    { name: tr('Startseite', 'Home', 'Domů'), url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, '/')}` },
    { name: tr('Gebrauchtmaschinen', 'Used machines', 'Použité stroje'), url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, overviewPath)}` },
    { name: heading, url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, pagePath)}` },
  ]);
  // Summary-Format (ListItem + url) wie auf den Kategorieseiten: keine
  // Product-Objekte ohne Preis, die Google als ungueltige Snippets meldet.
  const machineList = itemListSchema(
    heading,
    machines.map((m) => ({
      name: `${m.manufacturer} ${m.name}`,
      url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, `${overviewPath}/${m.slug}`)}`,
    })),
  );

  const generalInquiryMail = buildMailto(
    'office@asamer.net',
    tr('Anfrage gebrauchte Kantenanleimmaschine', 'Inquiry used edgebanding machine', 'Poptávka použité olepovačky hran'),
  );

  const formatPrice = (price: number, currency: string) => {
    const numberLocale =
      lang === 'de' ? 'de-DE' : lang === 'cz' ? 'cs-CZ' : lang === 'sk' ? 'sk-SK' : lang === 'hu' ? 'hu-HU' : 'en-US';
    const formatted = price.toLocaleString(numberLocale);
    return currency === 'EUR' ? `€ ${formatted}` : `${formatted} ${currency}`;
  };

  return (
    <>
      <SeoHead routeKey="usedEdgebanders" overrides={{ image: machines.find((m) => m.images?.length)?.images?.[0] }} structuredData={[breadcrumbs, machineList]} />

      <div className="bg-dark min-h-screen pt-24 sm:pt-28 md:pt-32 pb-20">
        <div className="container-wide">
          <nav className="page-header flex items-center gap-2 text-[11px] uppercase tracking-widest text-white/35 mb-6 flex-wrap">
            <Link to={buildLocalizedPath(lang, '/')} className="hover:text-white/60 transition-colors">
              {tr('Startseite', 'Home', 'Domů')}
            </Link>
            <span>/</span>
            <Link to={buildPath('/pouzite-stroje')} className="hover:text-white/60 transition-colors">
              {tr('Gebrauchtmaschinen', 'Used machines', 'Použité stroje')}
            </Link>
            <span>/</span>
            <span className="text-white/50">{heading}</span>
          </nav>

          <header className="page-header mb-10 max-w-3xl">
            <div className="accent-line mb-6" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-light text-white mb-4">{heading}</h1>
            <p className="text-white/70 text-base md:text-lg leading-relaxed mb-3">
              {tr(
                'Geprüfte gebrauchte Kantenanleimmaschinen aus dem Bestand von Asamer – technisch kontrolliert vor der Übergabe, auf Wunsch mit Montage und Finanzierung in CZ, SK und HU.',
                'Inspected used edgebanding machines from Asamer stock – technically checked before handover, with installation and financing on request in CZ, SK and HU.',
                'Prověřené použité olepovačky hran ze skladu Asamer – technicky zkontrolované před předáním, na přání s montáží a financováním v ČR, SR a Maďarsku.',
              )}
            </p>
            {manufacturers.length > 0 && (
              <p className="text-white/45 text-sm">
                {tr('Aktuell im Angebot', 'Currently available', 'Aktuálně v nabídce')}: {manufacturers.join(' · ')}
              </p>
            )}
          </header>

          <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
            {machines.map((machine) => {
              const detailPath = buildLocalizedPath(lang, `${overviewPath}/${machine.slug}`);
              const image = machine.images?.[0];
              const sources = image ? imageSources(image) : null;
              const cardSpecs = (machine.specs ?? []).filter((s) => CARD_SPEC_LABELS.has(s.label.de));
              const isSold = machine.status === 'sold';
              return (
                <article key={machine.slug} className="flex flex-col bg-dark-card rounded-2xl border border-white/10 overflow-hidden">
                  <Link to={detailPath} className="block">
                    {sources ? (
                      <picture className="block aspect-[4/3] overflow-hidden bg-white/10">
                        <source type="image/avif" srcSet={sources.avif} />
                        <source type="image/webp" srcSet={sources.webp} />
                        <img
                          src={sources.fallback}
                          alt={`${machine.manufacturer} ${machine.name}`}
                          className={`w-full h-full ${machine.imageFit === 'contain' ? 'object-contain' : 'object-cover'}`}
                          loading="lazy"
                          decoding="async"
                        />
                      </picture>
                    ) : (
                      <div className="aspect-[4/3] flex items-center justify-center bg-white/[0.03]">
                        <Layers className="w-10 h-10 text-white/20" aria-hidden="true" />
                      </div>
                    )}
                  </Link>
                  <div className="flex flex-col flex-1 p-6">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h2 className="text-xl font-display font-light text-white">
                        <Link to={detailPath} className="hover:text-primary/90 transition-colors">
                          {machine.manufacturer} {machine.name}
                        </Link>
                      </h2>
                      <span className={`text-[10px] uppercase tracking-widest shrink-0 mt-1.5 ${isSold ? 'text-red-300' : 'text-primary'}`}>
                        {isSold ? tr('verkauft', 'sold', 'prodáno') : tr('verfügbar', 'available', 'k dispozici')}
                      </span>
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed mb-4">{ml(machine.shortDescription, lang)}</p>
                    <dl className="space-y-1.5 text-sm mb-5">
                      {typeof machine.year === 'number' && (
                        <div className="flex gap-2">
                          <dt className="text-white/45">{tr('Baujahr', 'Year', 'Rok výroby')}:</dt>
                          <dd className="text-white/80">{machine.year}</dd>
                        </div>
                      )}
                      <div className="flex gap-2">
                        <dt className="text-white/45">{tr('Zustand', 'Condition', 'Stav')}:</dt>
                        <dd className="text-white/80">{ml(machine.condition, lang)}</dd>
                      </div>
                      {cardSpecs.map((spec) => (
                        <div key={spec.label.de} className="flex gap-2">
                          <dt className="text-white/45">{ml(spec.label, lang)}:</dt>
                          <dd className="text-white/80">{spec.value}</dd>
                        </div>
                      ))}
                      <div className="flex gap-2">
                        <dt className="text-white/45">{tr('Preis', 'Price', 'Cena')}:</dt>
                        <dd className="text-white/80">
                          {typeof machine.price === 'number'
                            ? formatPrice(machine.price, machine.priceCurrency ?? 'EUR')
                            : tr('auf Anfrage', 'on request', 'na vyžádání')}
                        </dd>
                      </div>
                    </dl>
                    <div className="mt-auto flex flex-col gap-2">
                      <Link to={detailPath} className="btn-outline-dark justify-center">
                        {tr('Details ansehen', 'View details', 'Zobrazit detail')}
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                      <a
                        href={buildMailto(
                          'office@asamer.net',
                          `${tr('Gebrauchtmaschine Anfrage', 'Used machine inquiry', 'Poptávka na použitý stroj')}: ${machine.manufacturer} ${machine.name}`,
                        )}
                        className="btn-primary-dark justify-center"
                        onClick={() =>
                          trackEvent('used_machine_inquiry_click', {
                            product_name: machine.name,
                            manufacturer: machine.manufacturer,
                            placement: 'used_edgebanders_card',
                            lang,
                          })
                        }
                      >
                        <Mail className="w-4 h-4" />
                        {tr('Anfrage', 'Inquiry', 'Poptávka')}
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </section>

          {/* Pruefung und Service — nur, was im Repo belegt ist: Pruefung vor
              Uebergabe (UsedMachinesPage, buyingAdvice), Transport/Montage/
              Einweisung auf Wunsch (buyingAdvice HOLZ-HER), Techniker aus
              Lambach und Bruenn (edgebanderGuide), Leasing (FinancingPage-FAQ).
              TODO(Max): Gewaehrleistung fuer Gebrauchtmaschinen — der Ratgeber
              nennt „se zárukou", Dauer und Umfang stehen nirgends. Wenn es eine
              gibt, hier als vierten Punkt ergaenzen. */}
          <section className="max-w-3xl mb-14">
            <h2 className="text-2xl md:text-3xl font-display font-light text-white mb-5">
              {tr('Prüfung und Service', 'Inspection and service', 'Kontrola a servis')}
            </h2>
            <ul className="space-y-3 text-white/70 text-sm leading-relaxed">
              <li className="flex gap-3">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  {tr(
                    'Jede Maschine wird vor der Übergabe technisch geprüft und mit klar angegebenem Zustand gelistet.',
                    'Every machine is technically inspected before handover and listed with a clearly stated condition.',
                    'Každý stroj je před předáním technicky zkontrolován a uveden s jasně popsaným stavem.',
                  )}
                </span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  {tr(
                    'Auf Wunsch organisiert Asamer Transport, Montage und Bedienereinweisung – mit Technikern aus Lambach und Brünn.',
                    'On request, Asamer organises transport, installation and operator training – with technicians from Lambach and Brno.',
                    'Na přání Asamer zajistí dopravu, montáž a zaškolení obsluhy – s techniky z Lambachu a Brna.',
                  )}
                </span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  {tr(
                    'Raiffeisen Leasing finanziert neue und gebrauchte Maschinen; jede Gebrauchtmaschine aus dem Asamer-Angebot wird vor der Finanzierungszusage technisch geprüft.',
                    'Raiffeisen Leasing finances new and used machines; every used machine from Asamer is technically inspected before financing approval.',
                    'Raiffeisen Leasing financuje nové i použité stroje; každý použitý stroj z nabídky Asamer je před schválením financování technicky prověřen.',
                  )}
                </span>
              </li>
            </ul>
          </section>

          <nav aria-label={tr('Weiterführend', 'Further reading', 'Další informace')} className="mb-14">
            <p className="text-[11px] uppercase tracking-widest text-white/35 mb-4">
              {tr('Weiterführend', 'Further reading', 'Další informace')}
            </p>
            <div className="grid sm:grid-cols-3 gap-3 max-w-4xl">
              <Link
                to={buildPath(buildOttCategoryPath(lang, 'edgebanding'))}
                className="p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors"
              >
                <Layers className="w-4 h-4 text-white/40 mb-2" />
                <p className="text-white/80 text-sm mb-1">{tr('Neue OTT Kantenanleimmaschinen', 'New OTT edgebanding machines', 'Nové olepovačky hran OTT')}</p>
                <p className="text-white/40 text-xs leading-relaxed">{tr('Sieben Modelle von Pacific+ bis TopEdge.', 'Seven models from Pacific+ to TopEdge.', 'Sedm modelů od Pacific+ po TopEdge.')}</p>
              </Link>
              <Link
                to={buildPath('/financovani')}
                className="p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors"
              >
                <Banknote className="w-4 h-4 text-white/40 mb-2" />
                <p className="text-white/80 text-sm mb-1">{tr('Finanzierung & Förderung', 'Financing & grants', 'Financování a dotace')}</p>
                <p className="text-white/40 text-xs leading-relaxed">{tr('Leasing und Förderungen bis 50 %.', 'Leasing and grants up to 50%.', 'Leasing a dotace až 50 %.')}</p>
              </Link>
              <Link
                to={buildPath('/pouzite-stroje')}
                className="p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors"
              >
                <Recycle className="w-4 h-4 text-white/40 mb-2" />
                <p className="text-white/80 text-sm mb-1">{tr('Alle Gebrauchtmaschinen', 'All used machines', 'Všechny použité stroje')}</p>
                <p className="text-white/40 text-xs leading-relaxed">{tr('Plattensägen, Trockenkammern und mehr.', 'Panel saws, drying kilns and more.', 'Formátovací pily, sušárny a další.')}</p>
              </Link>
            </div>
          </nav>

          <section className="rounded-2xl border border-primary/30 bg-primary/10 p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div>
              <h2 className="text-2xl font-display font-light text-white mb-2">
                {tr('Nicht das Passende dabei?', 'Nothing suitable?', 'Nenašli jste vhodný stroj?')}
              </h2>
              <p className="text-white/75 text-sm leading-relaxed">
                {tr(
                  'Sagen Sie uns, welche Maschine Sie suchen. Wir melden uns mit verfügbaren Optionen.',
                  'Tell us which machine you are looking for. We will respond with available options.',
                  'Řekněte nám, jaký stroj hledáte. Ozveme se s dostupnými možnostmi.',
                )}
              </p>
            </div>
            <a href={generalInquiryMail} className="btn-primary-dark sm:whitespace-nowrap justify-center">
              <Tag className="w-4 h-4" />
              {tr('Anfrage starten', 'Start inquiry', 'Zahájit poptávku')}
              <ArrowRight className="w-5 h-5" />
            </a>
          </section>
        </div>
      </div>
    </>
  );
};

export default UsedEdgebandersPage;
