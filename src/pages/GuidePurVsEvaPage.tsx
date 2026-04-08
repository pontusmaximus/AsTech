import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useLanguage } from '../App';
import { translatePageText } from '../i18n/pageTextTranslations';
import { buildMailto } from '../lib/email';
import SeoHead from '../seo/SeoHead';
import { faqPageSchema } from '../seo/structuredData';

const GuidePurVsEvaPage = () => {
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

  /* ── FAQ entries ── */
  const faqEntries = [
    {
      question: tr(
        'Kann man EVA auf PUR nachrüsten?',
        'Can you retrofit EVA to PUR?',
        'Lze dodatečně přejít z EVA na PUR?'
      ),
      answer: tr(
        'Ja, alle OTT-Maschinen mit CombiMelt-System können nachträglich auf PUR umgerüstet werden. Das Upgrade umfasst ein geschlossenes Leimversorgungssystem mit Feuchtigkeitsschutz und Reinigungsautomatik. Die Umrüstung ist auch im Feld durch einen Asamer-Techniker möglich.',
        'Yes, all OTT machines with the CombiMelt system can be retrofitted to PUR. The upgrade includes a closed adhesive supply system with moisture protection and automatic cleaning. The retrofit can also be performed in the field by an Asamer technician.',
        'Ano, všechny stroje OTT se systémem CombiMelt lze dodatečně přestavět na PUR. Upgrade zahrnuje uzavřený systém zásobování lepidlem s ochranou proti vlhkosti a automatickým čištěním. Přestavbu může provést technik Asamer přímo u zákazníka.'
      ),
    },
    {
      question: tr(
        'Ist PUR teurer im Betrieb?',
        'Is PUR more expensive to operate?',
        'Je PUR dražší v provozu?'
      ),
      answer: tr(
        'Die Materialkosten sind ca. 20–30 % höher als bei EVA, aber die bessere Kantenqualität und geringere Reklamationsrate gleichen die Mehrkosten in den meisten Betrieben aus. Zudem ist die Leimfuge dünner, was den Verbrauch pro Werkstück reduziert. Für Küchen- und Badmöbelhersteller ist PUR wirtschaftlich klar im Vorteil.',
        'Material costs are about 20–30% higher than EVA, but the better edge quality and lower complaint rate offset the extra cost in most operations. In addition, the thinner glue line reduces consumption per workpiece. For kitchen and bathroom furniture manufacturers, PUR is clearly more economical.',
        'Náklady na materiál jsou přibližně o 20–30 % vyšší než u EVA, ale lepší kvalita hran a nižší reklamační podíl tyto vícenáklady ve většině provozů vyrovnají. Navíc tenčí lepená spára snižuje spotřebu na obrobek. Pro výrobce kuchyňského a koupelnového nábytku je PUR ekonomicky jednoznačně výhodnější.'
      ),
    },
    {
      question: tr(
        'Welche Kanten eignen sich für Laser?',
        'Which edges are suitable for laser?',
        'Které hrany jsou vhodné pro laser?'
      ),
      answer: tr(
        'Für bluEdge HyFuse werden speziell beschichtete Kanten mit einer Funktionsschicht benötigt, die durch den Diodenlaser aktiviert wird. Diese Kanten sind von allen großen Kantenherstellern (Rehau, Döllken, Ostermann u. a.) erhältlich. Standardkanten ohne Funktionsschicht können nicht mit Laser verarbeitet werden.',
        'For bluEdge HyFuse, specially coated edges with a functional layer are required, which is activated by the diode laser. These edges are available from all major edge manufacturers (Rehau, Döllken, Ostermann, etc.). Standard edges without a functional layer cannot be processed with laser.',
        'Pro bluEdge HyFuse jsou potřeba speciálně potažené hrany s funkční vrstvou, kterou aktivuje diodový laser. Tyto hrany jsou dostupné od všech velkých výrobců hran (Rehau, Döllken, Ostermann aj.). Standardní hrany bez funkční vrstvy nelze laserem zpracovat.'
      ),
    },
    {
      question: tr(
        'Muss ich mich beim Kauf sofort für PUR entscheiden?',
        'Do I need to decide on PUR when purchasing?',
        'Musím se při nákupu hned rozhodnout pro PUR?'
      ),
      answer: tr(
        'Nein, dank CombiMelt können Sie mit EVA starten und später PUR nachrüsten, ohne eine neue Maschine kaufen zu müssen. Dieses modulare Konzept ist bei allen OTT-Modellen verfügbar und schützt Ihre Investition langfristig.',
        'No, thanks to CombiMelt you can start with EVA and retrofit PUR later without having to buy a new machine. This modular concept is available on all OTT models and protects your investment long-term.',
        'Ne, díky systému CombiMelt můžete začít s EVA a PUR dodat později, aniž byste museli kupovat nový stroj. Tento modulární koncept je dostupný u všech modelů OTT a dlouhodobě chrání vaši investici.'
      ),
    },
  ];

  /* ── Comparison table data ── */
  const comparisonRows = [
    {
      label: tr('Leimfuge', 'Glue line', 'Lepená spára'),
      eva: tr('Sichtbar (0,1–0,2 mm)', 'Visible (0.1–0.2 mm)', 'Viditelná (0,1–0,2 mm)'),
      pur: tr('Nahezu unsichtbar', 'Nearly invisible', 'Téměř neviditelná'),
      laser: tr('Keine', 'None', 'Žádná'),
    },
    {
      label: tr('Hitzebeständigkeit', 'Heat resistance', 'Tepelná odolnost'),
      eva: tr('bis 60 °C', 'up to 60 °C', 'do 60 °C'),
      pur: tr('bis 150 °C', 'up to 150 °C', 'do 150 °C'),
      laser: '> 200 °C',
    },
    {
      label: tr('Wasserbeständigkeit', 'Water resistance', 'Vodoodolnost'),
      eva: tr('Begrenzt', 'Limited', 'Omezená'),
      pur: tr('Hoch', 'High', 'Vysoká'),
      laser: tr('Sehr hoch', 'Very high', 'Velmi vysoká'),
    },
    {
      label: tr('Materialkosten', 'Material costs', 'Náklady na materiál'),
      eva: tr('Niedrig', 'Low', 'Nízké'),
      pur: tr('Mittel', 'Medium', 'Střední'),
      laser: tr('Hoch', 'High', 'Vysoké'),
    },
    {
      label: tr('Handling', 'Handling', 'Obsluha'),
      eva: tr('Einfach', 'Simple', 'Jednoduchá'),
      pur: tr('Mittel', 'Medium', 'Střední'),
      laser: tr('Mittel', 'Medium', 'Střední'),
    },
    {
      label: tr('Empfehlung', 'Recommendation', 'Doporučení'),
      eva: tr('Standardmöbel', 'Standard furniture', 'Standardní nábytek'),
      pur: tr('Küche, Bad, Outdoor', 'Kitchen, bathroom, outdoor', 'Kuchyně, koupelna, exteriér'),
      laser: tr('Premium, Zero-Gap', 'Premium, Zero-Gap', 'Premium, Zero-Gap'),
    },
  ];

  /* ── Machine support data ── */
  const machineSupport = [
    {
      models: 'Pacific+ & Tornado+',
      support: tr(
        'EVA serienmäßig, PUR nachrüstbar (CombiMelt)',
        'EVA standard, PUR retrofittable (CombiMelt)',
        'EVA standardně, PUR dodatečně (CombiMelt)'
      ),
    },
    {
      models: 'FlexEdge',
      support: tr(
        'EVA + PUR (CombiMelt serienmäßig)',
        'EVA + PUR (CombiMelt standard)',
        'EVA + PUR (CombiMelt standardně)'
      ),
    },
    {
      models: 'Storm+',
      support: tr(
        'EVA + PUR, bluEdge HyFuse optional',
        'EVA + PUR, bluEdge HyFuse optional',
        'EVA + PUR, bluEdge HyFuse volitelně'
      ),
    },
    {
      models: 'StrongEdge & TopEdge',
      support: tr(
        'EVA + PUR + bluEdge HyFuse',
        'EVA + PUR + bluEdge HyFuse',
        'EVA + PUR + bluEdge HyFuse'
      ),
    },
  ];

  /* ── Recommendations by size ── */
  const recommendations = [
    {
      size: tr('Kleine Tischlerei (1–5 MA)', 'Small workshop (1–5 employees)', 'Malá truhlárna (1–5 zaměstnanců)'),
      rec: tr(
        'EVA mit PUR-Nachrüstoption → Pacific+',
        'EVA with PUR retrofit option → Pacific+',
        'EVA s možností dodatečného PUR → Pacific+'
      ),
      color: 'border-emerald-500/20 bg-emerald-500/5',
      dot: 'bg-emerald-400',
    },
    {
      size: tr('Mittelbetrieb (5–20 MA)', 'Medium operation (5–20 employees)', 'Střední provoz (5–20 zaměstnanců)'),
      rec: tr(
        'PUR empfohlen → FlexEdge oder Storm+',
        'PUR recommended → FlexEdge or Storm+',
        'PUR doporučeno → FlexEdge nebo Storm+'
      ),
      color: 'border-primary/20 bg-primary/5',
      dot: 'bg-primary',
    },
    {
      size: tr('Industrieller Dauerbetrieb', 'Industrial continuous operation', 'Průmyslový nepřetržitý provoz'),
      rec: tr(
        'PUR + Laser → StrongEdge oder TopEdge',
        'PUR + Laser → StrongEdge or TopEdge',
        'PUR + Laser → StrongEdge nebo TopEdge'
      ),
      color: 'border-orange-500/20 bg-orange-500/5',
      dot: 'bg-orange-400',
    },
  ];

  const ctaHref = buildMailto(
    'office@asamer.net',
    tr('Anfrage Leimtechnologie', 'Gluing technology inquiry', 'Poptávka technologie lepení')
  );

  return (
    <>
      <SeoHead routeKey="guidePurVsEva" structuredData={[faqPageSchema(faqEntries)]} />
      <div className="bg-dark min-h-screen pt-24 sm:pt-28 md:pt-32 pb-20">

        {/* ── 1. Hero / Intro ── */}
        <section className="pb-16">
          <div className="container-wide">
            <div className="max-w-5xl">
              <div className="accent-line mb-6" />
              <h1 className="text-section font-display font-light text-white mb-6">
                {tr(
                  'PUR vs EVA – Leitfaden zur Leimtechnologie',
                  'PUR vs EVA – Guide to Gluing Technology',
                  'PUR vs EVA – Průvodce technologií lepení'
                )}
              </h1>
              <p className="text-white/70 text-lg leading-relaxed max-w-4xl">
                {tr(
                  'PUR und EVA sind die zwei wichtigsten Klebstofftechnologien für industrielle Kantenanleimmaschinen. Dieser Leitfaden erklärt die Unterschiede, Vor- und Nachteile und hilft bei der Wahl des richtigen Systems für Ihren Betrieb.',
                  'PUR and EVA are the two most important adhesive technologies for industrial edgebanding machines. This guide explains the differences, advantages and disadvantages, and helps you choose the right system for your operation.',
                  'PUR a EVA jsou dvě nejdůležitější technologie lepení pro průmyslové olepovačky hran. Tento průvodce vysvětluje rozdíly, výhody a nevýhody a pomůže vám vybrat správný systém pro váš provoz.'
                )}
              </p>
            </div>
          </div>
        </section>

        {/* ── 2. Was ist EVA? ── */}
        <section className="bg-dark-elevated py-16">
          <div className="container-wide">
            <div className="max-w-5xl">
              <h2 className="text-2xl md:text-3xl font-display font-light text-white mb-4">
                {tr('Was ist EVA?', 'What is EVA?', 'Co je EVA?')}
              </h2>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                {tr(
                  'EVA (Ethylenvinylacetat) ist ein thermoplastischer Schmelzklebstoff, der seit Jahrzehnten als Standard in der Kantenanleimung gilt.',
                  'EVA (ethylene vinyl acetate) is a thermoplastic hot-melt adhesive that has been the standard in edgebanding for decades.',
                  'EVA (etylenvinylacetát) je termoplastické tavné lepidlo, které je po desetiletí standardem v olepování hran.'
                )}
              </p>
              <div className="rounded-2xl border border-white/10 bg-dark-card p-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                    <span className="text-white/70 text-sm leading-relaxed">
                      {tr(
                        'Schnelles Aushärten (einige Sekunden)',
                        'Fast curing (a few seconds)',
                        'Rychlé vytvrzení (několik sekund)'
                      )}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                    <span className="text-white/70 text-sm leading-relaxed">
                      {tr(
                        'Einfache Handhabung, keine spezielle Lagerung',
                        'Simple handling, no special storage',
                        'Jednoduchá obsluha, žádné speciální skladování'
                      )}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                    <span className="text-white/70 text-sm leading-relaxed">
                      {tr(
                        'Kostengünstig in Anschaffung und Verbrauch',
                        'Cost-effective in purchase and consumption',
                        'Cenově výhodné v pořízení i spotřebě'
                      )}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/30 mt-2 shrink-0" />
                    <span className="text-white/70 text-sm leading-relaxed">
                      {tr(
                        'Leimfuge sichtbar (0,1–0,2 mm)',
                        'Visible glue line (0.1–0.2 mm)',
                        'Viditelná lepená spára (0,1–0,2 mm)'
                      )}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/30 mt-2 shrink-0" />
                    <span className="text-white/70 text-sm leading-relaxed">
                      {tr(
                        'Empfindlich gegen Hitze ab 60 °C und Feuchtigkeit',
                        'Sensitive to heat above 60 °C and moisture',
                        'Citlivé na teplo nad 60 °C a vlhkost'
                      )}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. Was ist PUR? ── */}
        <section className="py-16">
          <div className="container-wide">
            <div className="max-w-5xl">
              <h2 className="text-2xl md:text-3xl font-display font-light text-white mb-4">
                {tr('Was ist PUR?', 'What is PUR?', 'Co je PUR?')}
              </h2>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                {tr(
                  'PUR (Polyurethan-Reaktivklebstoff) ist ein feuchtigkeitshärtender Klebstoff, der eine wasserfeste und hitzebeständige Verbindung erzeugt.',
                  'PUR (polyurethane reactive adhesive) is a moisture-curing adhesive that creates a waterproof, heat-resistant bond.',
                  'PUR (polyuretanové reaktivní lepidlo) je lepidlo vytvrzující vlhkostí, které vytváří vodotěsný a tepelně odolný spoj.'
                )}
              </p>
              <div className="rounded-2xl border border-white/10 bg-dark-card p-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-white/70 text-sm leading-relaxed">
                      {tr(
                        'Reagiert mit Luftfeuchtigkeit, irreversible Aushärtung',
                        'Reacts with air moisture, irreversible curing',
                        'Reaguje se vzdušnou vlhkostí, nevratné vytvrzení'
                      )}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-white/70 text-sm leading-relaxed">
                      {tr(
                        'Dünnere Leimfuge (nahezu unsichtbar)',
                        'Thinner glue line (nearly invisible)',
                        'Tenčí lepená spára (téměř neviditelná)'
                      )}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-white/70 text-sm leading-relaxed">
                      {tr(
                        'Wasser- und hitzebeständig bis 150 °C',
                        'Water- and heat-resistant up to 150 °C',
                        'Vodotěsný a tepelně odolný do 150 °C'
                      )}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/30 mt-2 shrink-0" />
                    <span className="text-white/70 text-sm leading-relaxed">
                      {tr(
                        'Benötigt spezielle Lagerung (feuchtigkeitsgeschützt)',
                        'Requires special storage (moisture-protected)',
                        'Vyžaduje speciální skladování (ochrana proti vlhkosti)'
                      )}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/30 mt-2 shrink-0" />
                    <span className="text-white/70 text-sm leading-relaxed">
                      {tr(
                        'Höhere Materialkosten, spezielle Reinigung',
                        'Higher material costs, special cleaning',
                        'Vyšší náklady na materiál, speciální čištění'
                      )}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. bluEdge HyFuse ── */}
        <section className="bg-dark-elevated py-16">
          <div className="container-wide">
            <div className="max-w-5xl">
              <h2 className="text-2xl md:text-3xl font-display font-light text-white mb-4">
                {tr(
                  'bluEdge HyFuse – Lasertechnologie',
                  'bluEdge HyFuse – Laser Technology',
                  'bluEdge HyFuse – Laserová technologie'
                )}
              </h2>
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
                <p className="text-white/80 text-sm leading-relaxed">
                  {tr(
                    'bluEdge HyFuse ist die OTT-eigene Lasertechnologie für fugenlose Kantenverklebung (Zero-Gap). Ein Diodenlaser aktiviert die Funktionsschicht an der Kante, die ohne separaten Klebstoff mit dem Werkstück verschmilzt. Das Ergebnis sind optisch perfekte, wasserdichte Kanten ohne sichtbare Leimfuge.',
                    'bluEdge HyFuse is OTT\'s proprietary laser technology for seamless edge bonding (Zero-Gap). A diode laser activates the functional layer on the edge, which fuses with the workpiece without separate adhesive. The result is visually perfect, waterproof edges without a visible glue line.',
                    'bluEdge HyFuse je vlastní laserová technologie OTT pro bezešvé olepení hran (Zero-Gap). Diodový laser aktivuje funkční vrstvu na hraně, která splyne s obrobkem bez samostatného lepidla. Výsledkem jsou opticky dokonalé, vodotěsné hrany bez viditelné lepené spáry.'
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. Vergleichstabelle ── */}
        <section className="py-16">
          <div className="container-wide">
            <div className="accent-line mb-6" />
            <h2 className="text-2xl md:text-3xl font-display font-light text-white mb-8">
              {tr('Vergleichstabelle', 'Comparison Table', 'Srovnávací tabulka')}
            </h2>

            {/* Desktop table */}
            <div className="hidden md:block rounded-2xl border border-white/10 bg-dark-card overflow-hidden">
              <div className="grid grid-cols-4">
                <div className="p-4 border-b border-white/10" />
                <div className="p-4 border-b border-white/10 bg-emerald-500/10 text-center">
                  <span className="text-emerald-400 text-sm font-medium uppercase tracking-wider">EVA</span>
                </div>
                <div className="p-4 border-b border-white/10 bg-primary/10 text-center">
                  <span className="text-primary text-sm font-medium uppercase tracking-wider">PUR</span>
                </div>
                <div className="p-4 border-b border-white/10 bg-orange-500/10 text-center">
                  <span className="text-orange-400 text-sm font-medium uppercase tracking-wider">bluEdge HyFuse</span>
                </div>
              </div>
              {comparisonRows.map((row, i) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-4 ${i < comparisonRows.length - 1 ? 'border-b border-white/5' : ''}`}
                >
                  <div className="p-4 text-white/50 text-sm font-medium">{row.label}</div>
                  <div className="p-4 text-white/70 text-sm text-center">{row.eva}</div>
                  <div className="p-4 text-white/70 text-sm text-center">{row.pur}</div>
                  <div className="p-4 text-white/70 text-sm text-center">{row.laser}</div>
                </div>
              ))}
            </div>

            {/* Mobile cards */}
            <div className="md:hidden space-y-4">
              {/* EVA card */}
              <div className="rounded-2xl border border-emerald-500/20 bg-dark-card p-5">
                <h3 className="text-emerald-400 text-sm font-medium uppercase tracking-wider mb-4">EVA</h3>
                <div className="divide-y divide-white/5">
                  {comparisonRows.map((row) => (
                    <div key={`eva-${row.label}`} className="flex justify-between py-2.5">
                      <span className="text-white/50 text-sm">{row.label}</span>
                      <span className="text-white/70 text-sm text-right">{row.eva}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* PUR card */}
              <div className="rounded-2xl border border-primary/20 bg-dark-card p-5">
                <h3 className="text-primary text-sm font-medium uppercase tracking-wider mb-4">PUR</h3>
                <div className="divide-y divide-white/5">
                  {comparisonRows.map((row) => (
                    <div key={`pur-${row.label}`} className="flex justify-between py-2.5">
                      <span className="text-white/50 text-sm">{row.label}</span>
                      <span className="text-white/70 text-sm text-right">{row.pur}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Laser card */}
              <div className="rounded-2xl border border-orange-500/20 bg-dark-card p-5">
                <h3 className="text-orange-400 text-sm font-medium uppercase tracking-wider mb-4">bluEdge HyFuse</h3>
                <div className="divide-y divide-white/5">
                  {comparisonRows.map((row) => (
                    <div key={`laser-${row.label}`} className="flex justify-between py-2.5">
                      <span className="text-white/50 text-sm">{row.label}</span>
                      <span className="text-white/70 text-sm text-right">{row.laser}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 6. Welche OTT-Maschinen unterstützen was? ── */}
        <section className="bg-dark-elevated py-16">
          <div className="container-wide">
            <div className="max-w-5xl">
              <h2 className="text-2xl md:text-3xl font-display font-light text-white mb-4">
                {tr(
                  'Welche OTT-Maschinen unterstützen was?',
                  'Which OTT machines support what?',
                  'Které stroje OTT co podporují?'
                )}
              </h2>
              <div className="rounded-2xl border border-white/10 bg-dark-card p-6">
                <div className="divide-y divide-white/10">
                  {machineSupport.map((item) => (
                    <div key={item.models} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 py-3">
                      <span className="text-white font-medium text-sm min-w-[200px] shrink-0">{item.models}</span>
                      <span className="text-white/70 text-sm leading-relaxed">{item.support}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4">
                <Link
                  to={buildPath('/ott')}
                  className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline"
                >
                  {tr('Alle OTT-Maschinen ansehen', 'View all OTT machines', 'Zobrazit všechny stroje OTT')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── 7. Empfehlung nach Betriebsgröße ── */}
        <section className="py-16">
          <div className="container-wide">
            <div className="max-w-5xl">
              <div className="accent-line mb-6" />
              <h2 className="text-2xl md:text-3xl font-display font-light text-white mb-8">
                {tr(
                  'Empfehlung nach Betriebsgröße',
                  'Recommendation by Operation Size',
                  'Doporučení dle velikosti provozu'
                )}
              </h2>
              <div className="space-y-4">
                {recommendations.map((item) => (
                  <div
                    key={item.size}
                    className={`rounded-2xl border ${item.color} p-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6`}
                  >
                    <div className="flex items-center gap-3 sm:min-w-[280px] shrink-0">
                      <span className={`w-2.5 h-2.5 rounded-full ${item.dot} shrink-0`} />
                      <span className="text-white font-medium text-sm">{item.size}</span>
                    </div>
                    <span className="text-white/70 text-sm leading-relaxed">{item.rec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 8. FAQ ── */}
        <section className="bg-dark-elevated py-16">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto">
              <div className="accent-line mb-6" />
              <h2 className="text-2xl md:text-3xl font-display font-light text-white mb-8">
                {tr('Häufig gestellte Fragen', 'Frequently Asked Questions', 'Často kladené otázky')}
              </h2>
              <div className="space-y-3">
                {faqEntries.map((entry) => (
                  <details key={entry.question} className="group rounded-xl border border-white/10 bg-dark-card">
                    <summary className="flex items-center justify-between cursor-pointer list-none p-5 text-white font-medium text-sm leading-relaxed">
                      {entry.question}
                      <ChevronDown className="w-5 h-5 text-white/40 shrink-0 ml-4 transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="px-5 pb-5">
                      <p className="text-white/70 text-sm leading-relaxed border-t border-white/10 pt-4">{entry.answer}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 9. CTA ── */}
        <section className="py-24">
          <div className="container-wide">
            <div className="rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="max-w-xl">
                <h3 className="text-2xl md:text-3xl font-display font-light text-white mb-3">
                  {tr(
                    'Welche Leimtechnologie passt zu Ihrem Betrieb?',
                    'Which gluing technology suits your operation?',
                    'Která technologie lepení se hodí pro váš provoz?'
                  )}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {tr(
                    'Wir beraten Sie bei der Wahl zwischen EVA, PUR und Laser – abgestimmt auf Ihre Produktion und Ihre Anforderungen.',
                    'We advise you on choosing between EVA, PUR and laser – tailored to your production and requirements.',
                    'Poradíme vám s výběrem mezi EVA, PUR a laserem – přesně podle vaší výroby a požadavků.'
                  )}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href={ctaHref} className="btn-primary-dark justify-center">
                  {tr('Beratung anfragen', 'Request consultation', 'Poptat poradenství')}
                  <ArrowRight className="w-5 h-5" />
                </a>
                <Link to={buildPath('/ott')} className="btn-outline-dark justify-center">
                  {tr('OTT-Maschinen ansehen', 'View OTT machines', 'Zobrazit stroje OTT')}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default GuidePurVsEvaPage;
