import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useLanguage } from '../App';
import { translatePageText } from '../i18n/pageTextTranslations';
import { buildMailto } from '../lib/email';
import SeoHead from '../seo/SeoHead';
import { faqPageSchema, breadcrumbSchema } from '../seo/structuredData';
import { buildLocalizedPath, CANONICAL_DOMAIN } from '../lib/language';

const GuidePanelSawComparisonPage = () => {
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

  /* ── FAQ ── */
  const faqEntries = [
    {
      question: tr(
        'Kann ich Holz auf einer Alu-Formatsäge schneiden?',
        'Can I cut wood on an aluminium panel saw?',
        'Mohu řezat dřevo na formátovací pile pro hliník?'
      ),
      answer: tr(
        'Technisch ja, wirtschaftlich nein. Die Mayer Advanced Line verwendet langsame Vorschübe (1–15 m/min), feine NE-Sägeblätter und eine Kühlschmierung. Ein Spanplatten- oder HPL-Zuschnitt liefe damit zwar, aber mit deutlich geringerem Durchsatz, höherem Blattverschleiß und Verunreinigung des Kühlkreislaufs durch Holzstaub. Umgekehrt darf auf einer reinen Kappa-Holzmaschine kein Aluminium gefahren werden, da Vorschubdruck, Spanabsaugung und Sägeblattgeometrie dafür nicht ausgelegt sind.',
        'Technically yes, economically no. The Mayer Advanced Line uses slow feeds (1–15 m/min), fine non-ferrous blades and coolant lubrication. Cutting chipboard or HPL would work, but with much lower throughput, higher blade wear and coolant contamination from wood dust. Conversely, a pure Kappa wood machine must not run aluminium, because pressure beam, extraction and blade geometry are not designed for it.',
        'Technicky ano, ekonomicky ne. Mayer Advanced Line používá pomalé posuvy (1–15 m/min), jemné neželezné kotouče a chladicí mazání. Řezání dřevotřísky nebo HPL by fungovalo, ale s výrazně nižším výkonem, vyšším opotřebením kotouče a znečištěním chladicího okruhu dřevným prachem. Naopak na čistě dřevní Kappa stroj nesmí jít hliník, protože přítlak, odsávání a geometrie kotouče na to nejsou dimenzované.'
      ),
    },
    {
      question: tr(
        'Was kostet eine Formatsäge?',
        'What does a panel saw cost?',
        'Kolik stojí formátovací pila?'
      ),
      answer: tr(
        'Eine Mayer Kappa Automatic für Holzzuschnitt startet je nach Sägeblattlänge und Ausstattung bei rund 80 000 – 120 000 EUR. Eine Advanced Line für Aluminium und Komposit liegt durch Kühlung, Späneförderung und verstärkten Druckbalken typischerweise 15 – 25 % höher. Bei vollautomatischen Modellen mit Etikettierer, Winkelanlage und Puffer kann der Projektpreis 250 000 EUR und mehr erreichen. Asamer erstellt für CZ/SK/HU eine kalkulierte Angebotsaufstellung inkl. Aufstellung, Schulung und Servicevertrag.',
        'A Mayer Kappa Automatic for wood sizing starts at around EUR 80,000–120,000 depending on blade length and equipment. An Advanced Line for aluminium and composite typically costs 15–25% more due to coolant system, chip conveyor and reinforced pressure beam. Fully automatic models with labelling, angle infeed and buffer can exceed EUR 250,000. Asamer prepares calculated quotes for CZ/SK/HU including installation, training and service contract.',
        'Mayer Kappa Automatic pro řezání dřeva začíná podle délky kotouče a výbavy na cca 80 000 – 120 000 EUR. Advanced Line pro hliník a kompozity je kvůli chlazení, dopravníku třísek a zesílenému přítlaku obvykle o 15–25 % dražší. Plně automatické modely s etiketovačem, úhlovým přísunem a bufferem mohou přesáhnout 250 000 EUR. Asamer zpracuje pro CZ/SK/HU kalkulovanou nabídku včetně instalace, školení a servisní smlouvy.'
      ),
    },
    {
      question: tr(
        'Welche Toleranzen sind möglich?',
        'What tolerances can be achieved?',
        'Jakých tolerancí lze dosáhnout?'
      ),
      answer: tr(
        'Bei Mayer Kappa-Holzmaschinen werden Längen- und Diagonaltoleranzen von ±0,1 mm auf 3000 mm Zuschnitt erreicht – ausreichend für Möbelfronten und Korpusteile. Die Advanced Line ist auf ±0,05 mm ausgelegt, was für Aluminium-Fassadenprofile, PMMA-Displays und Leichtbauplatten zwingend nötig ist. Entscheidend für die Toleranz ist nicht nur die Maschine, sondern auch Werkstoff-Temperatur (bei Alu kritisch), Werkzeugzustand und Aufspannung.',
        'Mayer Kappa wood machines achieve length and diagonal tolerances of ±0.1 mm over 3000 mm cuts – sufficient for furniture fronts and carcass parts. The Advanced Line is designed for ±0.05 mm, which is required for aluminium facade profiles, PMMA displays and lightweight panels. Tolerance depends not only on the machine but also on material temperature (critical for aluminium), tool condition and clamping.',
        'Mayer Kappa pro dřevo dosahují délkových a diagonálních tolerancí ±0,1 mm na 3000 mm řezu – dostatečné pro dvířka nábytku a korpusové díly. Advanced Line je dimenzovaná na ±0,05 mm, což je nutné pro hliníkové fasádní profily, PMMA displeje a lehčené desky. Toleranci neurčuje jen stroj, ale i teplota materiálu (u hliníku kritická), stav nástroje a upnutí.'
      ),
    },
    {
      question: tr(
        'Lohnt sich der Mehrpreis für die Alu-Variante?',
        'Is the extra cost for the aluminium variant worth it?',
        'Vyplatí se příplatek za hliníkovou variantu?'
      ),
      answer: tr(
        'Wenn Ihr Anteil an Alu-, HPL- oder Kompositzuschnitten unter 10 % liegt, rechnet sich eine Advanced Line selten – besser auslagern oder manuell kappen. Ab 20 – 30 % Anteil an NE-Metallen oder technischen Kunststoffen amortisiert sich die Maschine durch vermiedene Ausschussteile, bessere Kantenqualität und entfallende Fremdvergabe meist in 2 – 4 Jahren. Asamer erstellt hierzu gerne eine Produktmix-Analyse für Ihren Betrieb.',
        'If your share of aluminium, HPL or composite cuts is below 10%, an Advanced Line rarely pays off – better to outsource or crosscut manually. At 20–30% non-ferrous or engineering plastic share, the machine typically amortises in 2–4 years through avoided scrap, better edge quality and eliminated subcontracting. Asamer provides a product-mix analysis for your operation.',
        'Pokud je podíl hliníkových, HPL nebo kompozitních řezů pod 10 %, Advanced Line se vyplatí zřídka – lepší zadat externě nebo řezat ručně. Při 20–30 % podílu neželezných kovů nebo technických plastů se stroj obvykle zaplatí za 2–4 roky díky sníženému zmetkování, lepší kvalitě hran a vyloučení externí kooperace. Asamer pro vás zpracuje analýzu produktového mixu.'
      ),
    },
    {
      question: tr(
        'Gebraucht oder neu – was macht Sinn?',
        'Used or new – what makes sense?',
        'Použitá nebo nová – co dává smysl?'
      ),
      answer: tr(
        'Gebrauchte Mayer-Kappa-Maschinen der letzten Generation (ab Baujahr 2015) bieten ein sehr gutes Preis-Leistungs-Verhältnis, wenn Steuerung, Druckbalken und Sägeaggregat geprüft sind. Für Advanced-Line-Maschinen empfehlen wir tendenziell Neuware: Kühlschmierung, Späneförderung und Sägeblattstabilisierung haben sich in den letzten Jahren stark weiterentwickelt. Asamer bietet in CZ, SK und HU geprüfte Gebrauchtmaschinen mit Garantie sowie Neumaschinen direkt vom Werk.',
        'Used Mayer Kappa machines from recent generations (2015+) offer excellent value if controller, pressure beam and saw unit are verified. For Advanced Line machines we generally recommend new units: coolant, chip handling and blade stabilisation have improved significantly in recent years. Asamer offers inspected used machines with warranty and factory-new units in CZ, SK and HU.',
        'Použité Mayer Kappa poslední generace (od roku 2015) nabízejí výborný poměr cena/výkon, pokud je prověřena řídicí jednotka, přítlak a řezací agregát. U Advanced Line obecně doporučujeme nové stroje: chlazení, odvod třísek a stabilizace kotouče se v posledních letech výrazně vyvinuly. Asamer v CZ, SK a HU nabízí prověřené použité stroje se zárukou i nové přímo z výroby.'
      ),
    },
  ];

  /* ── Comparison table ── */
  const comparisonRows = [
    {
      label: tr('Hauptmaterial', 'Primary material', 'Hlavní materiál'),
      wood: tr('Span, MDF, HPL, Massivholz', 'Chipboard, MDF, HPL, solid wood', 'Dřevotříska, MDF, HPL, masiv'),
      alu: tr('Alu-Profile, PMMA, Verbund', 'Aluminium, PMMA, composite', 'Hliník, PMMA, kompozity'),
    },
    {
      label: tr('Sägeblatt', 'Saw blade', 'Pilový kotouč'),
      wood: tr('HW 72–96 Z, grob', 'TCT 72–96 teeth, coarse', 'SK 72–96 Z, hrubý'),
      alu: tr('NE-Blatt 96–120 Z, fein', 'Non-ferrous 96–120 teeth, fine', 'NE kotouč 96–120 Z, jemný'),
    },
    {
      label: tr('Vorschub', 'Feed rate', 'Posuv'),
      wood: '20–120 m/min',
      alu: '1–15 m/min',
    },
    {
      label: tr('Kühlung', 'Coolant', 'Chlazení'),
      wood: tr('Trocken', 'Dry', 'Suché'),
      alu: tr('MMS / Sprühnebel', 'MQL / spray mist', 'MMS / rozstřik'),
    },
    {
      label: tr('Druckbalken', 'Pressure beam', 'Přítlak'),
      wood: tr('Standard', 'Standard', 'Standard'),
      alu: tr('Verstärkt, profilgerecht', 'Reinforced, profile-safe', 'Zesílený, vhodný pro profily'),
    },
    {
      label: tr('Toleranz', 'Tolerance', 'Tolerance'),
      wood: '±0,1 mm',
      alu: '±0,05 mm',
    },
    {
      label: tr('Späne-Handling', 'Chip handling', 'Odvod třísek'),
      wood: tr('Absaugung', 'Extraction', 'Odsávání'),
      alu: tr('Förderband + Filter', 'Conveyor + filter', 'Dopravník + filtr'),
    },
  ];

  /* ── Decision flow ── */
  const decisionRows = [
    {
      share: tr('> 90 % Holz / Plattenwerkstoffe', '> 90% wood / panel materials', '> 90 % dřevo / deskové materiály'),
      rec: tr('Mayer Kappa Automatic', 'Mayer Kappa Automatic', 'Mayer Kappa Automatic'),
      color: 'border-emerald-500/20 bg-emerald-500/5',
      dot: 'bg-emerald-400',
    },
    {
      share: tr('Mix Holz + bis 20 % Alu/HPL', 'Mix wood + up to 20% alu/HPL', 'Mix dřevo + do 20 % hliník/HPL'),
      rec: tr('Kappa mit Zusatzausstattung oder Fremdvergabe Alu', 'Kappa with add-on or outsource aluminium', 'Kappa s doplňky nebo externí řezání hliníku'),
      color: 'border-primary/20 bg-primary/5',
      dot: 'bg-primary',
    },
    {
      share: tr('> 30 % Alu, PMMA, Komposit', '> 30% aluminium, PMMA, composite', '> 30 % hliník, PMMA, kompozity'),
      rec: tr('Mayer Advanced Line', 'Mayer Advanced Line', 'Mayer Advanced Line'),
      color: 'border-orange-500/20 bg-orange-500/5',
      dot: 'bg-orange-400',
    },
  ];

  const ctaHref = buildMailto(
    'office@asamer.net',
    tr('Anfrage Formatsäge', 'Panel saw inquiry', 'Poptávka formátovací pily')
  );

  return (
    <>
      <SeoHead
        routeKey="guidePanelSawComparison"
        structuredData={[
          faqPageSchema(faqEntries),
          breadcrumbSchema([
            { name: tr('Startseite', 'Home', 'Domů'), url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, '/')}` },
            { name: tr('Ratgeber', 'Guides', 'Průvodce'), url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, '/')}` },
            {
              name: tr('Formatsäge Alu vs Holz', 'Panel saw aluminium vs wood', 'Formátovací pila hliník vs dřevo'),
              url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, buildPath('/ratgeber/formatsaege-aluminium-vs-holz'))}`,
            },
          ]),
        ]}
      />
      <div className="bg-dark min-h-screen pt-24 sm:pt-28 md:pt-32 pb-20">

        {/* ── 1. Hero ── */}
        <section className="pb-16">
          <div className="container-wide">
            <div className="max-w-5xl">
              <div className="accent-line mb-6" />
              <h1 className="text-section font-display font-light text-white mb-6">
                {tr(
                  'Formatsäge für Holz oder Aluminium – Mayer Kappa vs Advanced Line',
                  'Panel Saw for Wood or Aluminium – Mayer Kappa vs Advanced Line',
                  'Formátovací pila na dřevo nebo hliník – Mayer Kappa vs Advanced Line'
                )}
              </h1>
              <p className="text-white/70 text-lg leading-relaxed max-w-4xl">
                {tr(
                  'Plattenaufteilsägen sind keine Universalmaschinen: Die Geometrie des Sägeblatts, die Vorschubdynamik und die Kühlung entscheiden, ob eine Säge für Holz oder Aluminium und Kunststoff geeignet ist. Wer beide Materialien auf derselben Maschine fährt, riskiert Sägeblattbruch, Toleranzabweichungen und vorzeitigen Verschleiß. Dieser Leitfaden vergleicht die Mayer Kappa Automatic (Holzproduktion) mit der Mayer Advanced Line (Alu/Komposit) und hilft bei der richtigen Wahl für Ihren Materialmix in CZ, SK und HU.',
                  'Panel sizing saws are not universal machines: blade geometry, feed dynamics and coolant decide whether a saw is suitable for wood or for aluminium and plastics. Running both materials on the same machine risks blade breakage, tolerance drift and premature wear. This guide compares the Mayer Kappa Automatic (wood production) with the Mayer Advanced Line (aluminium/composite) and helps you select the right configuration for your material mix in CZ, SK and HU.',
                  'Formátovací pily nejsou univerzální stroje: geometrie kotouče, dynamika posuvu a chlazení rozhodují, zda je pila vhodná pro dřevo nebo pro hliník a plasty. Provoz obou materiálů na stejném stroji vede k riziku prasknutí kotouče, odchylkám tolerance a předčasnému opotřebení. Tento průvodce srovnává Mayer Kappa Automatic (výroba ze dřeva) s Mayer Advanced Line (hliník/kompozity) a pomůže vám zvolit správnou konfiguraci pro váš materiálový mix v CZ, SK a HU.'
                )}
              </p>
            </div>
          </div>
        </section>

        {/* ── 2. Comparison table ── */}
        <section className="bg-dark-elevated py-16">
          <div className="container-wide">
            <div className="accent-line mb-6" />
            <h2 className="text-2xl md:text-3xl font-display font-light text-white mb-8">
              {tr('Die wichtigsten Unterschiede im Vergleich', 'Key differences at a glance', 'Klíčové rozdíly v přehledu')}
            </h2>

            {/* Desktop table */}
            <div className="hidden md:block rounded-2xl border border-white/10 bg-dark-card overflow-hidden">
              <div className="grid grid-cols-3">
                <div className="p-4 border-b border-white/10" />
                <div className="p-4 border-b border-white/10 bg-emerald-500/10 text-center">
                  <span className="text-emerald-400 text-sm font-medium uppercase tracking-wider">
                    {tr('Kappa (Holz)', 'Kappa (Wood)', 'Kappa (Dřevo)')}
                  </span>
                </div>
                <div className="p-4 border-b border-white/10 bg-orange-500/10 text-center">
                  <span className="text-orange-400 text-sm font-medium uppercase tracking-wider">
                    {tr('Advanced Line (Alu)', 'Advanced Line (Alu)', 'Advanced Line (Hliník)')}
                  </span>
                </div>
              </div>
              {comparisonRows.map((row, i) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-3 ${i < comparisonRows.length - 1 ? 'border-b border-white/5' : ''}`}
                >
                  <div className="p-4 text-white/50 text-sm font-medium">{row.label}</div>
                  <div className="p-4 text-white/70 text-sm text-center">{row.wood}</div>
                  <div className="p-4 text-white/70 text-sm text-center">{row.alu}</div>
                </div>
              ))}
            </div>

            {/* Mobile cards */}
            <div className="md:hidden space-y-4">
              <div className="rounded-2xl border border-emerald-500/20 bg-dark-card p-5">
                <h3 className="text-emerald-400 text-sm font-medium uppercase tracking-wider mb-4">
                  {tr('Kappa (Holz)', 'Kappa (Wood)', 'Kappa (Dřevo)')}
                </h3>
                <div className="divide-y divide-white/5">
                  {comparisonRows.map((row) => (
                    <div key={`wood-${row.label}`} className="flex justify-between py-2.5">
                      <span className="text-white/50 text-sm">{row.label}</span>
                      <span className="text-white/70 text-sm text-right">{row.wood}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-orange-500/20 bg-dark-card p-5">
                <h3 className="text-orange-400 text-sm font-medium uppercase tracking-wider mb-4">
                  {tr('Advanced Line (Alu)', 'Advanced Line (Alu)', 'Advanced Line (Hliník)')}
                </h3>
                <div className="divide-y divide-white/5">
                  {comparisonRows.map((row) => (
                    <div key={`alu-${row.label}`} className="flex justify-between py-2.5">
                      <span className="text-white/50 text-sm">{row.label}</span>
                      <span className="text-white/70 text-sm text-right">{row.alu}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. Kappa for wood ── */}
        <section className="py-16">
          <div className="container-wide">
            <div className="max-w-5xl">
              <h2 className="text-2xl md:text-3xl font-display font-light text-white mb-4">
                {tr(
                  'Mayer Kappa Automatic – für die Holzproduktion',
                  'Mayer Kappa Automatic – for wood production',
                  'Mayer Kappa Automatic – pro výrobu ze dřeva'
                )}
              </h2>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                {tr(
                  'Die Kappa-Serie ist auf den Großserien-Plattenzuschnitt in Möbel- und Korpusfertigung ausgelegt. Hauptsägeblatt mit Durchmesser 400–520 mm, Vorschub bis 120 m/min, Schnittlängen von 3 200 bis 5 600 mm. Typische Materialien: melaminbeschichtete Spanplatte, MDF, HDF, HPL auf Trägerplatte, Massivholz-Leimholz und Sperrholz. Die Maschine arbeitet trocken – Absaugung löst Späne ab. Der Druckbalken mit parametrischem Druck schützt empfindliche Dekore vor Markierungen. Durch optimierte Bohrbildmuster (Nesting) und Etikettenanbindung an die ERP ist die Kappa Automatic die Standardlösung für tschechische, slowakische und ungarische Möbelproduzenten mit Stückzahlen ab 30 Platten pro Schicht.',
                  'The Kappa series is designed for high-volume panel sizing in furniture and carcass production. Main blade diameter 400–520 mm, feed up to 120 m/min, cut lengths from 3,200 to 5,600 mm. Typical materials: melamine-faced chipboard, MDF, HDF, HPL on substrate, solid-wood glued board and plywood. The machine runs dry – extraction removes chips. The pressure beam with parametric force protects sensitive decors from marks. With optimised nesting patterns and ERP label integration, the Kappa Automatic is the default choice for Czech, Slovak and Hungarian furniture makers with throughput from 30 panels per shift.',
                  'Řada Kappa je určena pro velkosériové řezání desek ve výrobě nábytku a korpusů. Hlavní kotouč průměr 400–520 mm, posuv až 120 m/min, délky řezu 3 200 až 5 600 mm. Typické materiály: lamino (melamin), MDF, HDF, HPL na nosiči, spárovka a překližka. Stroj pracuje za sucha – odsávání odstraňuje třísky. Přítlak s parametrickou silou chrání citlivé dekory před otisky. Díky optimalizovaným nesting vzorům a napojení etiket na ERP je Kappa Automatic standardním řešením pro české, slovenské a maďarské nábytkáře s kapacitou od 30 desek za směnu.'
                )}
              </p>
              <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6">
                <h3 className="text-white font-medium text-sm mb-3">
                  {tr('Typische Anwendungen', 'Typical applications', 'Typické aplikace')}
                </h3>
                <ul className="space-y-2 text-white/70 text-sm leading-relaxed">
                  <li>{tr('Küchen- und Badmöbelkorpusse', 'Kitchen and bathroom carcasses', 'Kuchyňské a koupelnové korpusy')}</li>
                  <li>{tr('Büromöbel, Schrankwände, Tischbauteile', 'Office furniture, wall units, table parts', 'Kancelářský nábytek, skříňové stěny, stolové díly')}</li>
                  <li>{tr('Türblätter und Rahmen für Innentüren', 'Door panels and frames for interior doors', 'Dveřní křídla a rámy pro interiérové dveře')}</li>
                  <li>{tr('PUR-/EVA-verleimte Spanplatte, kein Alu-Anteil', 'PUR/EVA-bonded chipboard, no aluminium share', 'Dřevotříska lepená PUR/EVA, bez hliníku')}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. Advanced Line for alu ── */}
        <section className="bg-dark-elevated py-16">
          <div className="container-wide">
            <div className="max-w-5xl">
              <h2 className="text-2xl md:text-3xl font-display font-light text-white mb-4">
                {tr(
                  'Mayer Advanced Line – für Aluminium, Kunststoff und Komposit',
                  'Mayer Advanced Line – for aluminium, plastics and composite',
                  'Mayer Advanced Line – pro hliník, plasty a kompozity'
                )}
              </h2>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                {tr(
                  'Die Advanced Line basiert auf dem Kappa-Maschinenbett, ist aber gezielt auf Nichteisen-Werkstoffe umgerüstet: Sägeblätter mit 96–120 Zähnen und feiner Zahngeometrie, Vorschübe von 1–15 m/min (je nach Materialstärke), Minimalmengenschmierung (MMS) oder Sprühnebelkühlung, verstärkter Druckbalken mit profilsicherer Auflage sowie ein Spänekanal mit Siebförderband und Filtereinheit. Typische Einsatzfelder sind Alu-Fassadenbauteile (ACP/ACM Platten), PMMA- und Polycarbonat-Displays, HPL in hoher Stärke, Leichtbau- und Waben-Kernplatten sowie Verbundmaterialien mit Kunststoffkern. Die Toleranz ±0,05 mm macht die Advanced Line zur bevorzugten Wahl für Fenster-, Displaybauer und Composite-Fertiger, die in Tschechien, der Slowakei und Ungarn in CNC-Fassaden- oder Maschinenbau-Zulieferketten arbeiten.',
                  'The Advanced Line shares the Kappa bed but is purpose-built for non-ferrous materials: blades with 96–120 teeth and fine tooth geometry, feeds of 1–15 m/min (depending on thickness), minimum quantity lubrication (MQL) or spray mist, a reinforced pressure beam with profile-safe support, and a chip channel with sieve conveyor and filter unit. Typical applications include aluminium facade elements (ACP/ACM panels), PMMA and polycarbonate displays, thick HPL, lightweight honeycomb panels and composites with plastic cores. The ±0.05 mm tolerance makes the Advanced Line the preferred choice for window, display and composite producers serving CNC facade or machinery supply chains in CZ, SK and HU.',
                  'Advanced Line sdílí lože stroje Kappa, ale je upravená pro neželezné materiály: kotouče s 96–120 zuby a jemnou geometrií, posuvy 1–15 m/min (dle tloušťky), minimální mazání (MMS) nebo rozstřik, zesílený přítlak s profilovou podporou a odvod třísek s dopravníkem a filtrem. Typické nasazení: hliníkové fasádní prvky (ACP/ACM), PMMA a polykarbonátové displeje, silný HPL, lehčené voštinové desky a kompozity s plastovým jádrem. Tolerance ±0,05 mm dělá z Advanced Line preferovanou volbu pro výrobce oken, displejů a kompozitů v CZ, SK a HU dodávajících do CNC fasádních nebo strojírenských řetězců.'
                )}
              </p>
              <div className="rounded-2xl border border-orange-500/20 bg-orange-500/5 p-6">
                <h3 className="text-white font-medium text-sm mb-3">
                  {tr('Typische Materialien', 'Typical materials', 'Typické materiály')}
                </h3>
                <ul className="space-y-2 text-white/70 text-sm leading-relaxed">
                  <li>{tr('Alu-Strangprofile und Strangpresshohlteile', 'Aluminium extrusions and hollow profiles', 'Hliníkové profily a duté profily')}</li>
                  <li>{tr('ACP/ACM (Alu-Verbund-Fassadenplatten)', 'ACP/ACM (aluminium composite facade panels)', 'ACP/ACM (hliníkové kompozitní fasádní desky)')}</li>
                  <li>{tr('HPL ≥ 10 mm, PMMA, Polycarbonat', 'HPL ≥ 10 mm, PMMA, polycarbonate', 'HPL ≥ 10 mm, PMMA, polykarbonát')}</li>
                  <li>{tr('Wabenplatten, GFK, CFK-Komposit', 'Honeycomb, GRP, CFRP composite', 'Voštinové desky, sklolaminát, uhlíkový kompozit')}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. Hybrid? ── */}
        <section className="py-16">
          <div className="container-wide">
            <div className="max-w-5xl">
              <h2 className="text-2xl md:text-3xl font-display font-light text-white mb-4">
                {tr(
                  'Hybridbetrieb – eine Maschine für beides?',
                  'Hybrid operation – one machine for both?',
                  'Hybridní provoz – jeden stroj na obojí?'
                )}
              </h2>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                {tr(
                  'Die Versuchung ist groß, beide Materialien auf einer Säge zu fahren. Technisch ist das nur eingeschränkt möglich und wirtschaftlich selten sinnvoll: Holzstaub verunreinigt den Kühlkreislauf einer Advanced Line, Alu-Späne setzen die Holzabsaugung zu und können sich am heiß gelaufenen Sägeblatt entzünden. Hinzu kommt der laufende Wechsel von Zahngeometrie, Vorschubparametern und Druckbalken-Programm, der pro Umbau 30 – 60 Minuten Stillstand kostet. Wer selten Alu zuschneidet, fährt günstiger mit einer reinen Kappa plus Vergabe der Alu-Anteile an einen Partner oder einem Tischkreissägen-Arbeitsplatz mit dedizierter Winkel- und Formatsäge für NE-Metalle. Asamer empfiehlt Hybridlösungen nur, wenn der Alu-Anteil dauerhaft zwischen 15 und 40 % liegt – und dann mit zwei getrennten Maschinen, nicht mit einer Kompromissmaschine.',
                  'The temptation to run both materials on one saw is strong. Technically this is only partly possible and economically rarely sensible: wood dust contaminates the coolant of an Advanced Line, aluminium chips clog wood extraction and can ignite on a hot blade. On top of that, changing tooth geometry, feed parameters and pressure beam programme costs 30–60 minutes of downtime per changeover. Shops that rarely cut aluminium are cheaper off with a pure Kappa plus subcontracting the aluminium share, or a table saw workstation with a dedicated crosscut and panel saw for non-ferrous metals. Asamer only recommends hybrid setups when the aluminium share is permanently between 15 and 40% – and then with two separate machines, not one compromise.',
                  'Pokušení řezat oba materiály na jedné pile je velké. Technicky je to možné jen omezeně a ekonomicky je to zřídka smysluplné: dřevný prach znečistí chladicí okruh Advanced Line, hliníkové třísky ucpou odsávání dřeva a mohou se na horkém kotouči vznítit. K tomu patří i průběžná změna geometrie zubů, parametrů posuvu a programu přítlaku – každý přechod stojí 30–60 minut prostoje. Provozy, které řežou hliník zřídka, jsou levnější s čistou Kappou a externím zadáním hliníku, případně s dílenskou okružní pilou s vyhrazeným kapovacím a formátovacím strojem pro neželezné kovy. Asamer doporučuje hybridní řešení jen při trvalém podílu hliníku 15–40 % – a to s dvěma samostatnými stroji, ne s jedním kompromisem.'
                )}
              </p>
            </div>
          </div>
        </section>

        {/* ── 6. Decision flow ── */}
        <section className="bg-dark-elevated py-16">
          <div className="container-wide">
            <div className="max-w-5xl">
              <div className="accent-line mb-6" />
              <h2 className="text-2xl md:text-3xl font-display font-light text-white mb-8">
                {tr('Wahl nach primärem Material', 'Choice by primary material', 'Výběr podle hlavního materiálu')}
              </h2>
              <div className="space-y-4">
                {decisionRows.map((item) => (
                  <div
                    key={item.share}
                    className={`rounded-2xl border ${item.color} p-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6`}
                  >
                    <div className="flex items-center gap-3 sm:min-w-[300px] shrink-0">
                      <span className={`w-2.5 h-2.5 rounded-full ${item.dot} shrink-0`} />
                      <span className="text-white font-medium text-sm">{item.share}</span>
                    </div>
                    <span className="text-white/70 text-sm leading-relaxed">{item.rec}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Link
                  to={buildPath('/mayer')}
                  className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline"
                >
                  {tr('Alle Mayer-Plattensägen ansehen', 'View all Mayer panel saws', 'Zobrazit všechny pily Mayer')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── 7. FAQ ── */}
        <section className="py-16">
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

        {/* ── 8. CTA ── */}
        <section className="py-24">
          <div className="container-wide">
            <div className="rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="max-w-xl">
                <h3 className="text-2xl md:text-3xl font-display font-light text-white mb-3">
                  {tr(
                    'Welche Formatsäge passt zu Ihrem Materialmix?',
                    'Which panel saw fits your material mix?',
                    'Která formátovací pila se hodí pro váš materiálový mix?'
                  )}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {tr(
                    'Asamer berät Holz- und Alu-Zuschnitt in CZ, SK und HU – von der Kappa Automatic bis zur Advanced Line. Inklusive Installation, Schulung und Servicevertrag.',
                    'Asamer advises on wood and aluminium sizing in CZ, SK and HU – from Kappa Automatic to Advanced Line. Including installation, training and service contract.',
                    'Asamer poradí s řezáním dřeva i hliníku v CZ, SK a HU – od Kappa Automatic po Advanced Line. Včetně instalace, školení a servisní smlouvy.'
                  )}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href={ctaHref} className="btn-primary-dark justify-center">
                  {tr('Beratung anfragen', 'Request consultation', 'Poptat poradenství')}
                  <ArrowRight className="w-5 h-5" />
                </a>
                <Link to={buildPath('/mayer')} className="btn-outline-dark justify-center">
                  {tr('Mayer-Plattensägen', 'Mayer panel saws', 'Pily Mayer')}
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

export default GuidePanelSawComparisonPage;
