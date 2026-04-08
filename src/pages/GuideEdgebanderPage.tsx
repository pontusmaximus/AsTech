import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Check, X, Minus } from 'lucide-react';
import { useLanguage } from '../App';
import { translatePageText } from '../i18n/pageTextTranslations';
import { buildMailto } from '../lib/email';
import SeoHead from '../seo/SeoHead';
import { breadcrumbSchema } from '../seo/structuredData';
import { buildLocalizedPath, CANONICAL_DOMAIN } from '../lib/language';

const GuideEdgebanderPage = () => {
  const { lang, buildPath } = useLanguage();
  const locale =
    lang === 'de' || lang === 'en' || lang === 'cz' || lang === 'sk' || lang === 'hu'
      ? lang
      : 'en';

  const tr = (de: string, en: string, cz: string) => {
    if (locale === 'de') return de;
    if (locale === 'cz') return cz;
    if (locale === 'sk' || locale === 'hu') {
      return translatePageText(locale, en, cz);
    }
    return en;
  };

  const inquiryMail = buildMailto(
    'office@asamer.net',
    tr(
      'Beratung Kantenanleimmaschine',
      'Edgebander consultation',
      'Konzultace olepovačka hran'
    )
  );

  const models = [
    {
      name: 'Pacific+',
      target: tr('Kleine Tischlerei', 'Small joinery', 'Malá truhlárna'),
      length: '5,7 m',
      feed: '18 m/min',
      pur: 'option',
      laser: false,
      badge: tr('EINSTIEG', 'ENTRY', 'VSTUP'),
    },
    {
      name: 'Tornado+',
      target: tr('Klein–Mittel', 'Small–Mid', 'Malý–Střední'),
      length: '6,2 m',
      feed: '12–18 m/min',
      pur: 'option',
      laser: false,
      badge: tr('MITTEL', 'MID', 'STŘED'),
    },
    {
      name: 'FlexEdge',
      target: tr('Mittelbetrieb', 'Mid-size', 'Střední provoz'),
      length: '7,1 m',
      feed: '12–20 m/min',
      pur: true,
      laser: false,
      badge: tr('NEU', 'NEW', 'NOVINKA'),
    },
    {
      name: 'Storm+',
      target: tr('Mittel–Groß', 'Mid–Large', 'Střední–Velký'),
      length: '–',
      feed: '–',
      pur: true,
      laser: 'option',
      badge: tr('PROFI', 'PRO', 'PROFI'),
    },
    {
      name: 'StrongEdge',
      target: tr('Industrie', 'Industrial', 'Průmysl'),
      length: '7,7 m',
      feed: '16–25 m/min',
      pur: true,
      laser: 'option',
      badge: tr('PROFI', 'PRO', 'PROFI'),
    },
    {
      name: 'TopEdge',
      target: tr('Industrie', 'Industrial', 'Průmysl'),
      length: '–',
      feed: '–',
      pur: true,
      laser: true,
      badge: tr('FLAGGSCHIFF', 'FLAGSHIP', 'VLAJKOVÁ LOĎ'),
    },
    {
      name: 'Door Edition',
      target: tr('Türenfertigung', 'Door mfg.', 'Výroba dveří'),
      length: '–',
      feed: '–',
      pur: true,
      laser: 'option',
      badge: tr('SPEZIAL', 'SPECIAL', 'SPECIÁL'),
    },
  ];

  const renderFlag = (value: boolean | string) => {
    if (value === true) return <Check className="w-4 h-4 text-green-400" />;
    if (value === 'option') return <Minus className="w-4 h-4 text-yellow-400" />;
    return <X className="w-4 h-4 text-white/30" />;
  };

  return (
    <>
      <SeoHead routeKey="guideEdgebander" structuredData={[breadcrumbSchema([
        { name: tr('Startseite', 'Home', 'Domů'), url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, '/')}` },
        { name: tr('Ratgeber', 'Guides', 'Průvodce'), url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, '/')}` },
        { name: tr('Kantenanleimmaschine wählen', 'Choose edgebander', 'Výběr olepovačky'), url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, buildPath('/ratgeber/kantenanleimmaschine-waehlen'))}` },
      ])]} />
      <div className="bg-dark min-h-screen pt-24 sm:pt-28 md:pt-32 pb-20">

        {/* Hero / H1 + Definition Lead */}
        <section className="pb-12">
          <div className="container-wide">
            <div className="max-w-5xl">
              <div className="accent-line mb-6" />
              <h1 className="text-section font-display font-light text-white mb-6">
                {tr(
                  'Kantenanleimmaschine nach Betriebsgröße wählen',
                  'Choose an Edgebander by Operation Size',
                  'Výběr olepovačky hran podle velikosti provozu'
                )}
              </h1>
              <p className="text-white/70 text-lg leading-relaxed max-w-4xl">
                {tr(
                  'Die richtige Kantenanleimmaschine hängt von Ihrer Betriebsgröße, dem täglichen Durchsatz und den verarbeiteten Materialien ab. Dieser Ratgeber hilft Ihnen, das passende OTT-Modell für Ihre Anforderungen zu finden.',
                  'The right edgebanding machine depends on your operation size, daily throughput and materials processed. This guide helps you find the matching OTT model for your requirements.',
                  'Správná olepovačka hran závisí na velikosti vašeho provozu, denním průchodu a zpracovávaných materiálech. Tento průvodce vám pomůže najít vhodný model OTT pro vaše požadavky.'
                )}
              </p>
            </div>
          </div>
        </section>

        {/* Section 1: Kleine Tischlerei */}
        <section className="pb-8">
          <div className="container-wide">
            <div className="rounded-2xl border border-white/10 bg-dark-card p-6 md:p-8 mb-8">
              <h2 className="text-2xl md:text-3xl font-display font-light text-white mb-5">
                {tr(
                  'Kleine Tischlerei (1–5 Mitarbeiter)',
                  'Small Joinery (1–5 Employees)',
                  'Malá truhlárna (1–5 zaměstnanců)'
                )}
              </h2>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                {tr(
                  'Für kleine Betriebe mit 1–5 Mitarbeitern steht die Kompaktheit und Vielseitigkeit im Vordergrund. Der tägliche Durchsatz liegt typischerweise bei 20–80 Werkstücken, die Materialvielfalt ist hoch (Echtholz, Melamin, Kunststoff). Die Maschine muss schnelle Kantenwechsel ermöglichen und auf engem Raum arbeiten.',
                  'For small workshops with 1–5 employees, compactness and versatility come first. Daily throughput typically ranges from 20–80 workpieces, material variety is high (solid wood, melamine, plastic). The machine must allow quick edge changes and fit into tight spaces.',
                  'U malých dílen s 1–5 zaměstnanci je na prvním místě kompaktnost a univerzálnost. Denní průchod se typicky pohybuje mezi 20–80 obrobky, rozmanitost materiálů je vysoká (masivní dřevo, melamin, plast). Stroj musí umožňovat rychlou výměnu hran a pracovat na omezeném prostoru.'
                )}
              </p>
              <div className="border-l-2 border-primary/50 pl-5">
                <p className="text-white/80 text-sm leading-relaxed font-medium mb-1">
                  {tr('Unsere Empfehlung: OTT Pacific+', 'Our recommendation: OTT Pacific+', 'Naše doporučení: OTT Pacific+')}
                </p>
                <p className="text-white/70 text-sm leading-relaxed">
                  {tr(
                    'Mit nur 5,7 m Baulänge passt sie in jede Werkstatt. 18 m/min Vorschub inklusive Eckenbearbeitung – das bedeutet, Sie brauchen keine separate Eckenrundungsmaschine. Kantenstärken von 0,3–15 mm decken alle Standardanwendungen ab. Mit CombiMelt ist die Pacific+ zudem PUR-nachrüstbar, sodass Sie bei steigenden Anforderungen nicht die Maschine tauschen müssen.',
                    'At only 5.7 m in length it fits any workshop. 18 m/min feed rate including corner rounding – no separate corner rounding machine needed. Edge thicknesses from 0.3–15 mm cover all standard applications. With CombiMelt the Pacific+ is also PUR-upgradable, so you won\'t need to replace the machine as requirements grow.',
                    'S délkou pouhých 5,7 m se vejde do každé dílny. Posuv 18 m/min včetně opracování rohů – nepotřebujete samostatný stroj na zaoblení rohů. Tloušťky hran 0,3–15 mm pokrývají všechny standardní aplikace. S CombiMelt je Pacific+ navíc rozšířitelná o PUR, takže při rostoucích požadavcích nemusíte měnit stroj.'
                  )}
                </p>
              </div>
              <div className="mt-5">
                <Link
                  to={buildPath('/ott')}
                  className="inline-flex items-center gap-1.5 text-primary text-sm font-medium hover:underline"
                >
                  {tr('Pacific+ auf der OTT-Seite ansehen', 'View Pacific+ on the OTT page', 'Zobrazit Pacific+ na stránce OTT')}
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Mittelbetrieb */}
        <section className="pb-8">
          <div className="container-wide">
            <div className="rounded-2xl border border-white/10 bg-dark-card p-6 md:p-8 mb-8">
              <h2 className="text-2xl md:text-3xl font-display font-light text-white mb-5">
                {tr(
                  'Mittelbetrieb (5–20 Mitarbeiter)',
                  'Mid-size Operation (5–20 Employees)',
                  'Střední provoz (5–20 zaměstnanců)'
                )}
              </h2>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                {tr(
                  'Mittelbetriebe verarbeiten 80–300 Werkstücke täglich und benötigen höhere Vorschubgeschwindigkeiten und Flexibilität. Die Anforderungen an Kantenqualität steigen – PUR-Verleimung wird zunehmend vom Markt gefordert, besonders bei Küchenmöbeln.',
                  'Mid-size operations process 80–300 workpieces daily and need higher feed speeds and flexibility. Edge quality demands are rising – PUR gluing is increasingly required by the market, especially for kitchen furniture.',
                  'Střední provozy zpracovávají 80–300 obrobků denně a potřebují vyšší rychlosti posuvu a flexibilitu. Požadavky na kvalitu hran rostou – PUR lepení je stále více vyžadováno trhem, zejména u kuchyňského nábytku.'
                )}
              </p>
              <div className="border-l-2 border-primary/50 pl-5">
                <p className="text-white/80 text-sm leading-relaxed font-medium mb-1">
                  {tr('Unsere Empfehlung: OTT FlexEdge oder Storm+', 'Our recommendation: OTT FlexEdge or Storm+', 'Naše doporučení: OTT FlexEdge nebo Storm+')}
                </p>
                <p className="text-white/70 text-sm leading-relaxed">
                  {tr(
                    'Die FlexEdge ist die neueste OTT-Maschine und schließt die Lücke zwischen Tornado+ und Storm+. Mit 7,1 m Baulänge, 12–20 m/min Vorschub und Beckhoff 18,5″-Steuerung bietet sie OPC-UA-Konnektivität für ERP-Integration. Die Storm+ bietet zusätzlich die Option auf bluEdge HyFuse Lasertechnologie für Zero-Gap-Kanten.',
                    'The FlexEdge is OTT\'s newest machine, bridging the gap between Tornado+ and Storm+. At 7.1 m length, 12–20 m/min feed and Beckhoff 18.5″ control it offers OPC-UA connectivity for ERP integration. The Storm+ additionally provides the option for bluEdge HyFuse laser technology for zero-gap edges.',
                    'FlexEdge je nejnovější stroj OTT, který překlenuje mezeru mezi Tornado+ a Storm+. S délkou 7,1 m, posuvem 12–20 m/min a řídicím systémem Beckhoff 18,5″ nabízí OPC-UA konektivitu pro ERP integraci. Storm+ navíc poskytuje možnost laserové technologie bluEdge HyFuse pro hrany s nulovými spárami.'
                  )}
                </p>
              </div>
              <div className="mt-5">
                <Link
                  to={buildPath('/ott')}
                  className="inline-flex items-center gap-1.5 text-primary text-sm font-medium hover:underline"
                >
                  {tr('FlexEdge & Storm+ auf der OTT-Seite ansehen', 'View FlexEdge & Storm+ on the OTT page', 'Zobrazit FlexEdge a Storm+ na stránce OTT')}
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Industrieller Dauerbetrieb */}
        <section className="pb-8">
          <div className="container-wide">
            <div className="rounded-2xl border border-white/10 bg-dark-card p-6 md:p-8 mb-8">
              <h2 className="text-2xl md:text-3xl font-display font-light text-white mb-5">
                {tr(
                  'Industrieller Dauerbetrieb (20+ Mitarbeiter)',
                  'Industrial Continuous Operation (20+ Employees)',
                  'Průmyslový nepřetržitý provoz (20+ zaměstnanců)'
                )}
              </h2>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                {tr(
                  'Industriebetriebe mit Mehrschichtbetrieb verarbeiten 300+ Werkstücke pro Schicht. Hier zählen Zuverlässigkeit, Durchsatz und höchste Kantenqualität. PUR und Laser sind Standard, automatische Kantenwechsel und Anbindung an übergeordnete Systeme sind Pflicht.',
                  'Industrial operations running multiple shifts process 300+ workpieces per shift. Reliability, throughput and top edge quality are what count. PUR and laser are standard, automatic edge changes and integration with higher-level systems are mandatory.',
                  'Průmyslové provozy s vícesměnným provozem zpracovávají 300+ obrobků na směnu. Rozhoduje spolehlivost, průchodnost a nejvyšší kvalita hran. PUR a laser jsou standardem, automatická výměna hran a napojení na nadřazené systémy jsou nutností.'
                )}
              </p>
              <div className="border-l-2 border-primary/50 pl-5">
                <p className="text-white/80 text-sm leading-relaxed font-medium mb-1">
                  {tr('Unsere Empfehlung: OTT StrongEdge oder TopEdge', 'Our recommendation: OTT StrongEdge or TopEdge', 'Naše doporučení: OTT StrongEdge nebo TopEdge')}
                </p>
                <p className="text-white/70 text-sm leading-relaxed">
                  {tr(
                    'Die StrongEdge bietet 7,7 m Baulänge und 16–25 m/min Vorschub – ausgelegt auf industriellen Dauereinsatz. Die TopEdge als Flaggschiff vereint alle verfügbaren Technologien: EVA, PUR, bluEdge HyFuse Laser und vollautomatische Kantenmagazine. Beide Maschinen verfügen über Beckhoff OPC-UA-Steuerung für nahtlose Industry 4.0 Integration.',
                    'The StrongEdge offers 7.7 m length and 16–25 m/min feed – built for industrial continuous operation. The TopEdge flagship combines all available technologies: EVA, PUR, bluEdge HyFuse laser and fully automatic edge magazines. Both machines feature Beckhoff OPC-UA control for seamless Industry 4.0 integration.',
                    'StrongEdge nabízí délku 7,7 m a posuv 16–25 m/min – navržena pro průmyslový nepřetržitý provoz. Vlajková loď TopEdge spojuje všechny dostupné technologie: EVA, PUR, bluEdge HyFuse laser a plně automatické zásobníky hran. Oba stroje jsou vybaveny řídicím systémem Beckhoff OPC-UA pro bezproblémovou integraci Industry 4.0.'
                  )}
                </p>
              </div>
              <div className="mt-5">
                <Link
                  to={buildPath('/ott')}
                  className="inline-flex items-center gap-1.5 text-primary text-sm font-medium hover:underline"
                >
                  {tr('StrongEdge & TopEdge auf der OTT-Seite ansehen', 'View StrongEdge & TopEdge on the OTT page', 'Zobrazit StrongEdge a TopEdge na stránce OTT')}
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Sonderfall Türenfertigung */}
        <section className="pb-12">
          <div className="container-wide">
            <div className="rounded-2xl border border-white/10 bg-dark-card p-6 md:p-8 mb-8">
              <h2 className="text-2xl md:text-3xl font-display font-light text-white mb-5">
                {tr(
                  'Sonderfall: Türenfertigung',
                  'Special Case: Door Manufacturing',
                  'Speciální případ: Výroba dveří'
                )}
              </h2>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                {tr(
                  'Türenhersteller haben besondere Anforderungen: schwere Werkstücke, breite Kanten und oft durchlaufende Produktion mit wenigen Formatwechseln. Die OTT Door Edition ist speziell für diese Anwendung konzipiert – mit angepasster Werkstückführung, verstärktem Vorschub und optimierter Andrucktechnik für massive Türelemente.',
                  'Door manufacturers have specific demands: heavy workpieces, wide edges and often continuous production with few format changes. The OTT Door Edition is purpose-built for this application – with adapted workpiece guidance, reinforced feed and optimized pressure technology for solid door elements.',
                  'Výrobci dveří mají specifické požadavky: těžké obrobky, široké hrany a často nepřetržitá výroba s malým počtem změn formátu. OTT Door Edition je speciálně navržena pro tuto aplikaci – s upraveným vedením obrobků, zesíleným posuvem a optimalizovanou přítlačnou technikou pro masivní dveřní prvky.'
                )}
              </p>
              <div className="border-l-2 border-primary/50 pl-5">
                <p className="text-white/70 text-sm leading-relaxed">
                  {tr(
                    'Wenn Ihr Schwerpunkt in der Türenfertigung liegt, empfehlen wir ein direktes Beratungsgespräch – die Door Edition wird individuell auf Ihr Produktionsprofil konfiguriert.',
                    'If your focus is door manufacturing, we recommend a direct consultation – the Door Edition is individually configured to your production profile.',
                    'Pokud se zaměřujete na výrobu dveří, doporučujeme přímou konzultaci – Door Edition se individuálně konfiguruje podle vašeho výrobního profilu.'
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="pb-12">
          <div className="container-wide">
            <h2 className="text-2xl md:text-3xl font-display font-light text-white mb-6">
              {tr('Vergleichsübersicht', 'Comparison Overview', 'Srovnávací přehled')}
            </h2>
            <div className="rounded-2xl border border-white/10 bg-dark-card overflow-x-auto">
              <table className="w-full text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left text-white/50 font-medium px-4 py-3 whitespace-nowrap">
                      {tr('Modell', 'Model', 'Model')}
                    </th>
                    <th className="text-left text-white/50 font-medium px-4 py-3 whitespace-nowrap">
                      {tr('Zielgruppe', 'Target', 'Cílová skupina')}
                    </th>
                    <th className="text-left text-white/50 font-medium px-4 py-3 whitespace-nowrap">
                      {tr('Baulänge', 'Length', 'Délka')}
                    </th>
                    <th className="text-left text-white/50 font-medium px-4 py-3 whitespace-nowrap">
                      {tr('Vorschub', 'Feed', 'Posuv')}
                    </th>
                    <th className="text-center text-white/50 font-medium px-4 py-3">PUR</th>
                    <th className="text-center text-white/50 font-medium px-4 py-3">Laser</th>
                    <th className="text-right text-white/50 font-medium px-4 py-3">Badge</th>
                  </tr>
                </thead>
                <tbody>
                  {models.map((m) => (
                    <tr key={m.name} className="border-b border-white/5 last:border-b-0">
                      <td className="px-4 py-3 text-white font-medium whitespace-nowrap">{m.name}</td>
                      <td className="px-4 py-3 text-white/70 whitespace-nowrap">{m.target}</td>
                      <td className="px-4 py-3 text-white/70 whitespace-nowrap">{m.length}</td>
                      <td className="px-4 py-3 text-white/70 whitespace-nowrap">{m.feed}</td>
                      <td className="px-4 py-3 text-center">{renderFlag(m.pur)}</td>
                      <td className="px-4 py-3 text-center">{renderFlag(m.laser)}</td>
                      <td className="px-4 py-3 text-right">
                        <span className="inline-block text-[10px] tracking-widest uppercase text-primary border border-primary/30 rounded px-2 py-0.5">
                          {m.badge}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-white/40 text-xs mt-3">
              {tr(
                '✓ = Serie · – = Option · ✕ = nicht verfügbar. Alle Angaben ohne Gewähr.',
                '✓ = Standard · – = Option · ✕ = not available. All specifications without guarantee.',
                '✓ = Standard · – = Volitelně · ✕ = nedostupné. Všechny údaje bez záruky.'
              )}
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="pb-24">
          <div className="container-wide">
            <div className="rounded-2xl border border-primary/30 bg-primary/10 p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
              <div>
                <h3 className="text-2xl font-display font-light text-white mb-2">
                  {tr(
                    'Welche Maschine passt zu Ihrem Betrieb?',
                    'Which machine fits your operation?',
                    'Který stroj se hodí pro váš provoz?'
                  )}
                </h3>
                <p className="text-white/75 text-sm leading-relaxed">
                  {tr(
                    'Wir beraten Sie persönlich – abgestimmt auf Durchsatz, Platz und Budget.',
                    'We advise you personally – tailored to throughput, space and budget.',
                    'Poradíme vám osobně – s ohledem na průchodnost, prostor a rozpočet.'
                  )}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to={buildPath('/ott')}
                  className="btn-primary-dark sm:whitespace-nowrap justify-center"
                >
                  {tr('Alle OTT-Maschinen', 'All OTT machines', 'Všechny stroje OTT')}
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href={inquiryMail}
                  className="btn-primary-dark sm:whitespace-nowrap justify-center"
                >
                  {tr('Beratung anfragen', 'Request consultation', 'Požádat o konzultaci')}
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default GuideEdgebanderPage;
