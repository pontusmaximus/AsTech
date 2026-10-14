import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Monitor, Wrench, Flag, Check, X, AlertTriangle, MapPin, Factory, Handshake, Network, Banknote } from 'lucide-react';
import gsap from 'gsap';
import { useLanguage } from '../App';
import { translatePageText } from '../i18n/pageTextTranslations';
import HeroSection from '../components/manufacturer/HeroSection';
import ManufacturerIntro from '../components/manufacturer/ManufacturerIntro';
import { buildMailto } from '../lib/email';
import SeoHead from '../seo/SeoHead';
import { breadcrumbSchema, itemListSchema } from '../seo/structuredData';
import { buildLocalizedPath, CANONICAL_DOMAIN } from '../lib/language';
import { getOttProductsByCategory, buildOttCategoryPath, OTT_CATEGORY_LABELS } from '../data/ottProducts';
import type { OttCategory } from '../data/ottProducts';

/**
 * Marken-Hub OTT — die Antwort auf „OTT", „OTT Paul", „OTT prodejce".
 *
 * Bewusst *keine* Kategorieseite: Modelluebersicht, Klebstoff-Block und FAQ zu
 * den Kantenanleimmaschinen wohnen auf /{lang}/ott/{kategorie}. Bis Oktober 2026
 * stand all das auch hier, und Hub, Kategorieseite und Ratgeber zielten mit je
 * 22–25 Nennungen auf dasselbe Keyword. Hier steht der Kategoriebegriff nur noch
 * als Kachel, die auf die Kategorieseite verlinkt.
 */
const OttPage = () => {
  const { lang, buildPath } = useLanguage();
  const locale = lang === 'de' || lang === 'en' || lang === 'cz' || lang === 'sk' || lang === 'hu' ? lang : 'en';
  const tr = (de: string, en: string, cz: string) => {
    if (locale === 'de') return de;
    if (locale === 'cz') return cz;
    if (locale === 'sk' || locale === 'hu') return translatePageText(locale, en, cz);
    return en;
  };

  const breadcrumbs = breadcrumbSchema([
    { name: tr('Startseite', 'Home', 'Domů'), url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, '/')}` },
    { name: 'OTT', url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, '/ott')}` },
  ]);
  const inquiryMail = buildMailto('office@asamer.net', tr('Anfrage OTT', 'Inquiry OTT', 'Poptávka OTT'));

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      gsap.fromTo('.page-header', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' });
    });
    return () => ctx.revert();
  }, []);

  // Kurzbeschreibung je Produktbereich. Bewusst ohne den Kategoriebegriff —
  // der steht nur im Kachel-Titel, der auf die Kategorieseite verlinkt.
  const categoryTeaser: Record<OttCategory, string> = {
    edgebanding: tr(
      'Sieben Modelle für Tischlerei und Industrie: Vorschub 18–25 m/min, Kanten 0,3–25 mm, EVA und PUR.',
      'Seven models for joinery and industry: feed 18–25 m/min, edges 0.3–25 mm, EVA and PUR.',
      'Sedm modelů pro truhlárny i průmysl: posuv 18–25 m/min, hrany 0,3–25 mm, lepidla EVA i PUR.',
    ),
    gluing: tr(
      'CombiMelt verarbeitet EVA und PUR, bluEdge featuring HyFuse erzeugt die Nullfuge ohne Klebstoff.',
      'CombiMelt processes EVA and PUR; bluEdge featuring HyFuse creates a zero glue line without adhesive.',
      'CombiMelt zpracuje EVA i PUR, bluEdge featuring HyFuse vytvoří nulovou spáru bez lepidla.',
    ),
    return: tr(
      'TRANScompact, TRANSlift und TRANSedge führen Werkstücke zurück – ein Bediener fährt die ganze Zelle.',
      'TRANScompact, TRANSlift and TRANSedge return workpieces – one operator runs the entire cell.',
      'TRANScompact, TRANSlift a TRANSedge vracejí dílce zpět – celou buňku obslouží jeden pracovník.',
    ),
  };

  const categories: OttCategory[] = ['edgebanding', 'gluing', 'return'];
  const categoryData = categories
    .map((cat) => ({ cat, products: getOttProductsByCategory(cat) }))
    .filter((c) => c.products.length > 0);

  // ItemList der drei Produktbereiche statt aller zwoelf Produkte: die
  // Produktliste gehoert zur jeweiligen Kategorieseite.
  const categoryList = itemListSchema(
    tr('OTT Produktbereiche', 'OTT product areas', 'Produktové oblasti OTT'),
    categoryData.map((c) => ({
      name: OTT_CATEGORY_LABELS[c.cat][lang],
      url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, buildOttCategoryPath(lang, c.cat))}`,
    })),
  );

  const reasons = [
    { icon: <Monitor className="w-4 h-4 text-blue-400" />, t: tr('Software-Integration', 'Software integration', 'Softwarová integrace'), d: tr('OPC-UA direkt in Ihr ERP/MES – kein Vendor-Lock-in', 'OPC-UA directly into your ERP/MES – no vendor lock-in', 'OPC-UA přímo do vašeho ERP/MES – bez vendor lock-in') },
    { icon: <MapPin className="w-4 h-4 text-primary" />, t: tr('Exklusivhändler CZ/SK/HU', 'Exclusive dealer CZ/SK/HU', 'Exkluzivní prodejce CZ/SK/HU'), d: tr('Direkter Kontakt – kein Konzern-Umweg', 'Direct contact – no corporate detour', 'Přímý kontakt – bez koncernových oklik') },
    { icon: <Wrench className="w-4 h-4 text-white/40" />, t: tr('Service & Montage', 'Service & installation', 'Servis a montáž'), d: tr('Techniker vor Ort in CZ/SK/HU', 'Technicians on-site in CZ/SK/HU', 'Technici na místě v CZ/SK/HU'), to: buildPath('/servis') },
    { icon: <Banknote className="w-4 h-4 text-emerald-400" />, t: tr('Finanzierung & Förderung', 'Financing & grants', 'Financování a dotace'), d: tr('Leasing und Förderungen bis 50 %.', 'Leasing and grants up to 50%.', 'Leasing a dotace až 50 %.'), to: buildPath('/financovani') },
    { icon: <Flag className="w-4 h-4 text-red-400" />, t: tr('Made in Austria', 'Made in Austria', 'Made in Austria'), d: tr('Familienbetrieb seit 1963 in Lambach', 'Family business since 1963 in Lambach', 'Rodinný podnik od roku 1963 v Lambachu') },
  ];

  return (
    <>
      <SeoHead routeKey="ott" structuredData={[breadcrumbs, categoryList]} />
      <div className="bg-dark min-h-screen">

        {/* ====== 1. HERO ====== */}
        <HeroSection
          headline={tr('Neue Standards für PUR/EVA', 'New standards for PUR/EVA', 'Nové standardy pro PUR/EVA')}
          logoSrc="/logos/ott.jpg"
          logoAlt="OTT logo"
          logoClassName="rounded-md"
          bgVideo="/videos/ott.mp4"
          bgVideoStart={31}
          bgVideoEnd={40}
        />

        {/* ====== 1b. INTRO — kurz zu OTT Paul ====== */}
        <ManufacturerIntro
          eyebrow={tr('Österreich · Kantenanleimtechnologie', 'Austria · Edgebanding technology', 'Rakousko · Olepování hran')}
          title={tr('OTT Paul – Kantentechnik aus Österreich', 'OTT Paul – Edge Technology from Austria', 'OTT Paul – technologie olepování hran z Rakouska')}
          lead={tr(
            'OTT Paul ist ein österreichischer Familienbetrieb aus Lambach mit Geschichte seit 1963. OTT baut Maschinen zum Bekanten von Möbel- und Plattenteilen – von der kompakten Pacific+ bis zur industriellen TopEdge –, dazu die Klebetechnologien CombiMelt und bluEdge featuring HyFuse sowie die Rückführsysteme TRANScompact, TRANSlift und TRANSedge. Asamer ist exklusiver OTT-Vertriebspartner für Tschechien, die Slowakei und Ungarn – mit lokalem Service, Finanzierung und Softwareintegration über die offene OPC-UA-Schnittstelle.',
            'OTT Paul is an Austrian family business from Lambach with a history dating back to 1963. OTT builds machines for edging furniture and board parts – from the compact Pacific+ to the industrial TopEdge – along with the CombiMelt and bluEdge featuring HyFuse gluing technologies and the TRANScompact, TRANSlift and TRANSedge return systems. Asamer is the exclusive OTT distribution partner for the Czech Republic, Slovakia and Hungary – with local service, financing and software integration via the open OPC-UA interface.',
            'OTT Paul je rakouská rodinná firma z Lambachu s historií od roku 1963. OTT vyrábí stroje pro olepování hran nábytkových a deskových dílů – od kompaktní Pacific+ až po průmyslovou TopEdge –, k tomu lepicí technologie CombiMelt a bluEdge featuring HyFuse a vratné systémy TRANScompact, TRANSlift a TRANSedge. Asamer je exkluzivní distribuční partner OTT pro Českou republiku, Slovensko a Maďarsko s lokálním servisem, financováním a softwarovou integrací přes otevřené rozhraní OPC-UA.',
          )}
          facts={[
            {
              icon: Factory,
              label: tr('Herkunft', 'Origin', 'Původ'),
              value: tr('Made in Austria', 'Made in Austria', 'Made in Austria'),
            },
            {
              icon: Handshake,
              label: tr('Asamer-Rolle', 'Asamer role', 'Role Asamer'),
              value: tr('Exklusiver Händler', 'Exclusive dealer', 'Exkluzivní prodejce'),
            },
            {
              icon: MapPin,
              label: tr('Märkte', 'Markets', 'Trhy'),
              value: 'CZ · SK · HU',
            },
            {
              icon: Network,
              label: tr('Schnittstelle', 'Interface', 'Rozhraní'),
              value: 'OPC-UA · ERP / MES',
            },
          ]}
        />

        {/* ====== 2. PRODUKTBEREICHE — drei Kacheln auf die Kategorieseiten ====== */}
        <section className="container-wide pb-12">
          <h2 className="text-2xl md:text-3xl font-display font-light text-white mb-6">
            {tr('Das OTT-Programm', 'The OTT range', 'Sortiment OTT')}
          </h2>
          <div className="grid md:grid-cols-3 gap-4 max-w-5xl">
            {categoryData.map((c) => (
              <Link
                key={`cat-${c.cat}`}
                to={buildPath(buildOttCategoryPath(lang, c.cat))}
                className="group flex flex-col p-5 rounded-xl border border-white/10 bg-white/[0.02] hover:border-primary/40 hover:bg-white/[0.04] transition-colors"
              >
                <span className="flex items-center justify-between gap-3 mb-2">
                  <span className="text-base font-medium text-white group-hover:text-primary/90 transition-colors">
                    {OTT_CATEGORY_LABELS[c.cat][lang]}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-white/25 group-hover:text-primary transition-colors shrink-0" />
                </span>
                <span className="text-sm text-white/60 leading-relaxed mb-3">{categoryTeaser[c.cat]}</span>
                <span className="mt-auto text-xs text-white/35">{c.products.map((p) => p.name).join(' · ')}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* ====== 3. WARUM ASAMER ====== */}
        <div className="border-t border-white/5">
          <div className="container-wide py-12">

            {/* OTT vs Konkurrenz Comparison */}
            <section className="mb-10">
              <h2 className="text-sm font-display text-white/40 mb-4">{tr('Warum OTT über Asamer?', 'Why OTT via Asamer?', 'Proč OTT přes Asamer?')}</h2>
              <div className="rounded-xl border border-white/10 overflow-hidden max-w-2xl">
                <div className="grid grid-cols-3 text-xs">
                  <div className="p-3 border-b border-r border-white/5 text-white/25">{tr('Merkmal', 'Feature', 'Vlastnost')}</div>
                  <div className="p-3 border-b border-r border-white/5 text-primary font-medium text-center">OTT / Asamer</div>
                  <div className="p-3 border-b border-white/5 text-white/25 text-center">{tr('Konkurrenz', 'Competitors', 'Konkurence')}</div>
                  {[
                    ['OPC-UA Interface', <Check key="c" className="w-3.5 h-3.5 text-emerald-400 inline" />, tr('Standard', 'Standard', 'Standard'), <X key="x" className="w-3.5 h-3.5 text-red-400/50 inline" />, tr('oft Aufpreis', 'often extra cost', 'často příplatek')],
                    [tr('PUR-Spezialisierung', 'PUR specialization', 'PUR'), <Check key="c" className="w-3.5 h-3.5 text-emerald-400 inline" />, 'CombiMelt', <AlertTriangle key="a" className="w-3.5 h-3.5 text-amber-400/50 inline" />, tr('je nach Hersteller', 'depends on brand', 'dle výrobce')],
                    [tr('ERP-Integration', 'ERP integration', 'ERP'), <Check key="c" className="w-3.5 h-3.5 text-emerald-400 inline" />, 'Asamer-Team', <AlertTriangle key="a" className="w-3.5 h-3.5 text-amber-400/50 inline" />, tr('oft kostenpflichtig', 'often paid', 'často placená')],
                    [tr('Service CZ/SK/HU', 'Service CZ/SK/HU', 'Servis CZ/SK/HU'), <Check key="c" className="w-3.5 h-3.5 text-emerald-400 inline" />, tr('vor Ort', 'on-site', 'na místě'), <AlertTriangle key="a" className="w-3.5 h-3.5 text-amber-400/50 inline" />, tr('oft zentral', 'often central', 'často centrální')],
                  ].map(([label, icon1, val1, icon2, val2], i) => (
                    <div key={i} className="contents">
                      <div className={`p-3 border-r border-white/5 text-white/40 ${i < 3 ? 'border-b border-white/5' : ''}`}>{label}</div>
                      <div className={`p-3 border-r border-white/5 text-center ${i < 3 ? 'border-b border-white/5' : ''}`}>{icon1} <span className="text-white/50 ml-1">{val1}</span></div>
                      <div className={`p-3 text-center ${i < 3 ? 'border-b border-white/5' : ''}`}>{icon2} <span className="text-white/25 ml-1">{val2}</span></div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Why buy from Asamer — Service und Finanzierung verlinkt */}
            <section className="mb-10">
              <h2 className="text-sm font-display text-white/40 mb-4">{tr('Warum bei Asamer kaufen?', 'Why buy from Asamer?', 'Proč koupit u Asamer?')}</h2>
              <div className="grid sm:grid-cols-2 gap-3 max-w-2xl">
                {reasons.map((item) => {
                  const body = (
                    <>
                      <div className="mt-0.5 shrink-0">{item.icon}</div>
                      <div>
                        <div className="text-xs font-medium text-white">{item.t}</div>
                        <div className="text-xs text-white/30">{item.d}</div>
                      </div>
                    </>
                  );
                  const className = 'flex items-start gap-3 p-3 rounded-lg border border-white/5 bg-white/[0.01]';
                  return item.to ? (
                    <Link key={item.t} to={item.to} className={`${className} hover:border-primary/30 transition-colors`}>{body}</Link>
                  ) : (
                    <div key={item.t} className={className}>{body}</div>
                  );
                })}
              </div>
            </section>

            {/* Video */}
            <section className="mb-10">
              <h2 className="text-sm font-display text-white/40 mb-3">{tr('OTT in Aktion', 'OTT in Action', 'OTT v akci')}</h2>
              <div className="relative rounded-xl overflow-hidden border border-white/10 aspect-video max-w-2xl">
                <iframe src="https://www.youtube-nocookie.com/embed/videoseries?list=UUZXwpHi0AR1dFN3h-K0-QIA" title="OTT YouTube" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute inset-0 w-full h-full" loading="lazy" />
              </div>
            </section>

            {/* Footer CTA */}
            <div className="text-center mb-6">
              <p className="text-white/20 text-xs">{tr('Produkte und Spezifikationen', 'Products and specifications', 'Produkty a specifikace')} · <a href="https://www.ottpaul.com" target="_blank" rel="noreferrer" className="text-primary/40 hover:text-primary transition-colors">ottpaul.com<ArrowUpRight className="w-3 h-3 inline ml-0.5" /></a></p>
            </div>
            <div className="p-4 bg-gradient-to-r from-red-600/8 to-transparent rounded-xl border border-red-500/10 max-w-2xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <p className="text-white/40 text-sm">{tr('Beratung zu OTT Kantenleimtechnologie?', 'Advice on OTT edgebanding?', 'Poradenství k OTT?')}</p>
                <a href={inquiryMail} className="btn-primary-dark text-sm sm:whitespace-nowrap">{tr('Anfrage senden', 'Send inquiry', 'Odeslat poptávku')}<ArrowUpRight className="w-4 h-4" /></a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default OttPage;
