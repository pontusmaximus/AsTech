import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useLanguage } from '../App';
import { translatePageText } from '../i18n/pageTextTranslations';
import { buildMailto } from '../lib/email';
import SeoHead from '../seo/SeoHead';
import { faqPageSchema, breadcrumbSchema } from '../seo/structuredData';
import { buildLocalizedPath, CANONICAL_DOMAIN } from '../lib/language';

const GuideFundingCzPage = () => {
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
        'Welche Maschinen sind förderfähig?',
        'Which machines are eligible for funding?',
        'Které stroje jsou způsobilé pro dotaci?'
      ),
      answer: tr(
        'Förderfähig sind in der Regel alle neuen Produktionsmaschinen mit CE-Konformität, die einen nachweisbaren Produktivitäts-, Digitalisierungs- oder Effizienzgewinn bringen. Dazu zählen Kantenanleimmaschinen (OTT), Plattensägen (Mayer), Dübeleintreibmaschinen (Gannomat), CNC-Bearbeitungszentren und komplette Lagerautomatisierungen (BARBARIC). Software, Schulung, Installation und Erstausrüstung sind meist mitförderfähig. Gebrauchte Maschinen sind in OP TAK grundsätzlich nicht förderfähig – hier kommen nur NRB-Darlehen oder Leasing infrage.',
        'Eligible machines generally include all new CE-certified production machines that demonstrably improve productivity, digitalisation or efficiency. This covers edgebanders (OTT), panel saws (Mayer), dowel inserters (Gannomat), CNC machining centres and full warehouse automation (BARBARIC). Software, training, installation and first tooling are usually co-eligible. Used machines are not eligible under OP TAK – only NRB loans or leasing apply there.',
        'Způsobilé jsou zpravidla všechny nové produkční stroje s CE shodou, které prokazatelně zvyšují produktivitu, digitalizaci nebo efektivitu. Sem patří olepovačky hran (OTT), formátovací pily (Mayer), kolkovací stroje (Gannomat), CNC obráběcí centra a kompletní automatizace skladu (BARBARIC). Software, školení, instalace a první nástrojové vybavení jsou obvykle spolu způsobilé. Použité stroje v OP TAK způsobilé nejsou – pro ně přichází v úvahu jen úvěr NRB nebo leasing.'
      ),
    },
    {
      question: tr(
        'Wer erstellt den Förderantrag?',
        'Who prepares the funding application?',
        'Kdo zpracuje žádost o dotaci?'
      ),
      answer: tr(
        'Den formalen Antrag stellt der Unternehmer selbst über das MS2021+ Portal der Agentura API. In der Praxis wird die Ausarbeitung meistens von einem spezialisierten Dotaz-Berater (externer Fördermittelberater) übernommen, der in Tschechien am Erfolg beteiligt ist (meist 3 – 8 % der bewilligten Fördersumme). Asamer arbeitet mit geprüften Partnern in Brno und Prag zusammen und vermittelt die Kontakte inklusive kostenloser Vorqualifizierung des Projekts.',
        'The formal application is submitted by the business owner through the MS2021+ portal of Agentura API. In practice, preparation is usually done by a specialised funding consultant (dotační poradce) who works on success fee in the Czech Republic (typically 3–8% of the awarded amount). Asamer cooperates with vetted partners in Brno and Prague and connects clients including a free project pre-qualification.',
        'Formální žádost podává podnikatel sám přes portál MS2021+ Agentury API. V praxi zpracování obvykle zajišťuje specializovaný dotační poradce, který v ČR pracuje na úspěch (typicky 3–8 % z přiznané dotace). Asamer spolupracuje s prověřenými partnery v Brně a Praze a zprostředkuje kontakty včetně bezplatné předkvalifikace projektu.'
      ),
    },
    {
      question: tr(
        'Kann ich gebrauchte Maschinen fördern lassen?',
        'Can I get used machines funded?',
        'Mohu získat dotaci na použité stroje?'
      ),
      answer: tr(
        'Im OP TAK Technologie sind gebrauchte Maschinen nicht förderfähig. Alternativen: ein vergünstigtes Investitionsdarlehen der Národní rozvojová banka (NRB) – dort können auch Gebrauchtmaschinen finanziert werden, sofern Baujahr und Restnutzungsdauer nachgewiesen sind. Zudem gibt es Leasingprogramme (Raiffeisen Leasing, UniCredit Leasing) mit staatlicher Zinsbonifikation für KMU. Asamer bietet geprüfte Gebrauchtmaschinen mit Garantie als Alternative.',
        'Used machines are not eligible under OP TAK Technologie. Alternatives: a subsidised investment loan from Národní rozvojová banka (NRB) – used machines can be financed there if year of manufacture and remaining useful life are documented. There are also leasing programmes (Raiffeisen Leasing, UniCredit Leasing) with state interest subsidy for SMEs. Asamer offers inspected used machines with warranty as an alternative.',
        'V OP TAK Technologie použité stroje způsobilé nejsou. Alternativy: zvýhodněný investiční úvěr Národní rozvojové banky (NRB) – tam lze financovat i použité stroje, pokud je doložen rok výroby a zbytková životnost. Existují také leasingové programy (Raiffeisen Leasing, UniCredit Leasing) se státní bonifikací úroku pro MSP. Asamer nabízí jako alternativu prověřené použité stroje se zárukou.'
      ),
    },
    {
      question: tr(
        'Wie lange dauert der Förderantrag?',
        'How long does the funding application take?',
        'Jak dlouho trvá vyřízení žádosti?'
      ),
      answer: tr(
        'Von der ersten Projektskizze bis zur Fördervereinbarung (Rozhodnutí o poskytnutí dotace) sollten Sie in OP TAK mit 6 – 9 Monaten rechnen: 2 – 4 Wochen Vorbereitung, 4 – 6 Wochen Einreichung bis Abgabefrist, 4 – 6 Monate Bewertung durch API, danach Bescheid. Maschinen dürfen erst nach dem Antragsdatum bestellt werden, sonst erlischt die Förderfähigkeit. Planen Sie daher Lieferzeiten von OTT, Mayer oder BARBARIC (4 – 8 Monate) gegen das Bewilligungsdatum ein.',
        'From first project outline to funding decision (Rozhodnutí o poskytnutí dotace), expect 6–9 months for OP TAK: 2–4 weeks preparation, 4–6 weeks submission window, 4–6 months evaluation by API, then decision. Machines may only be ordered after the application date, otherwise eligibility is lost. Plan delivery times from OTT, Mayer or BARBARIC (4–8 months) against the award date.',
        'Od první projektové fáze po Rozhodnutí o poskytnutí dotace počítejte v OP TAK s 6–9 měsíci: 2–4 týdny příprava, 4–6 týdnů podání v otevřené výzvě, 4–6 měsíců hodnocení API, poté rozhodnutí. Stroje smí být objednány až po datu podání žádosti, jinak zaniká způsobilost. Naplánujte proto dodací lhůty OTT, Mayer nebo BARBARIC (4–8 měsíců) proti datu vydání rozhodnutí.'
      ),
    },
    {
      question: tr(
        'Kombination mit Leasing möglich?',
        'Can I combine funding with leasing?',
        'Je možná kombinace s leasingem?'
      ),
      answer: tr(
        'Ja, OP TAK und NRB-Darlehen lassen sich mit Finanzierungsleasing kombinieren, solange der Endbegünstigte das wirtschaftliche Eigentum an der Maschine hält. Raiffeisen Leasing bietet dafür spezielle Dotační-Leasing-Produkte mit Zwischenfinanzierung bis zur Auszahlung der Fördermittel. Auf diese Weise benötigen Sie nur 10 – 20 % Eigenkapital bei Lieferung statt 30 – 40 %. Asamer stimmt den Cashflow-Plan direkt mit Ihrer Bank und dem Förderberater ab.',
        'Yes, OP TAK and NRB loans combine with finance leasing as long as the end-beneficiary retains economic ownership of the machine. Raiffeisen Leasing offers dedicated "dotační leasing" products with bridging finance until the grant is paid out. This way you only need 10–20% equity at delivery instead of 30–40%. Asamer aligns the cash-flow plan directly with your bank and funding consultant.',
        'Ano, OP TAK i úvěry NRB lze kombinovat s finančním leasingem, pokud si koncový příjemce ponechá ekonomické vlastnictví stroje. Raiffeisen Leasing nabízí speciální produkty "dotační leasing" s překlenovacím financováním do vyplacení dotace. Stačí pak 10–20 % vlastních zdrojů při dodání místo 30–40 %. Asamer zkoordinuje cashflow přímo s vaší bankou a dotačním poradcem.'
      ),
    },
  ];

  const ctaHref = buildMailto(
    'office@asamer.net',
    tr('Anfrage Förderberatung', 'Funding consultation inquiry', 'Poptávka dotační poradenství')
  );

  return (
    <>
      <SeoHead
        routeKey="guideFundingCz"
        structuredData={[
          faqPageSchema(faqEntries),
          breadcrumbSchema([
            { name: tr('Startseite', 'Home', 'Domů'), url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, '/')}` },
            { name: tr('Ratgeber', 'Guides', 'Průvodce'), url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, '/')}` },
            {
              name: tr('Förderung Holzbearbeitung CZ 2026', 'Woodworking funding CZ 2026', 'Dotace dřevoobrábění CZ 2026'),
              url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, buildPath('/ratgeber/foerderung-holzbearbeitung-cz-2026'))}`,
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
                  'Förderung für Holzbearbeitungsmaschinen in Tschechien 2026',
                  'Funding for Woodworking Machinery in the Czech Republic 2026',
                  'Dotace na dřevoobráběcí stroje v ČR 2026'
                )}
              </h1>
              <p className="text-white/70 text-lg leading-relaxed max-w-4xl">
                {tr(
                  '2026 stehen tschechischen Möbel- und Holzbearbeitungsbetrieben mehrere parallele Förderinstrumente zur Verfügung: das Operační program Technologie a aplikace pro konkurenceschopnost (OP TAK) mit bis zu 60 % Zuschussrate für Klein- und Mittelbetriebe, zinsvergünstigte Investitionskredite der Národní rozvojová banka (NRB) und EU-weite Programme unter dem InvestEU-Dach. Dieser Leitfaden zeigt, wie Sie diese Instrumente für den Kauf von OTT-Kantenanleimmaschinen, Mayer-Plattensägen, BARBARIC-Lagerautomatisierungen oder Gannomat-Dübeleintreibmaschinen kombinieren – und was Sie bei Antrag, Zeitplan und Dokumentation beachten müssen.',
                  'In 2026, Czech furniture and woodworking operations can access several parallel funding instruments: the Operační program Technologie a aplikace pro konkurenceschopnost (OP TAK) with up to 60% grant rate for SMEs, subsidised investment loans from Národní rozvojová banka (NRB), and EU-wide programmes under the InvestEU umbrella. This guide shows how to combine these instruments for OTT edgebanders, Mayer panel saws, BARBARIC warehouse automation or Gannomat dowel inserters – and what to observe regarding application, timeline and documentation.',
                  'V roce 2026 mají české nábytkářské a dřevozpracující podniky k dispozici několik paralelních dotačních nástrojů: Operační program Technologie a aplikace pro konkurenceschopnost (OP TAK) s mírou podpory až 60 % pro MSP, zvýhodněné investiční úvěry Národní rozvojové banky (NRB) a celoevropské programy pod hlavičkou InvestEU. Tento průvodce ukazuje, jak tyto nástroje zkombinovat pro nákup olepovaček OTT, formátovacích pil Mayer, automatizace skladu BARBARIC nebo kolkovacích strojů Gannomat – a co sledovat při žádosti, harmonogramu a dokumentaci.'
                )}
              </p>
            </div>
          </div>
        </section>

        {/* ── 2. OP TAK ── */}
        <section className="bg-dark-elevated py-16">
          <div className="container-wide">
            <div className="max-w-5xl">
              <div className="accent-line mb-6" />
              <h2 className="text-2xl md:text-3xl font-display font-light text-white mb-4">
                {tr(
                  'OP TAK – Operační program Technologie a aplikace pro konkurenceschopnost',
                  'OP TAK – Operational Programme Technology and Applications for Competitiveness',
                  'OP TAK – Operační program Technologie a aplikace pro konkurenceschopnost'
                )}
              </h2>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                {tr(
                  'OP TAK ist das Haupt-Förderinstrument der Tschechischen Republik für produzierende KMU in der Programmperiode 2021 – 2027 und das wichtigste Tool zur EU-kofinanzierten Modernisierung. Der für Holzbearbeitungsbetriebe relevante Call Technologie – výrobní podniky fördert die Anschaffung neuer Produktionsmaschinen, Lagerautomatisierung, Industriesoftware (ERP/MES/CAM), Digitalisierung und Industrie-4.0-Lösungen. Förderquote: 45 % für Mittelbetriebe und 60 % für Kleinbetriebe auf die förderfähigen Kosten, in schwächer strukturierten Regionen (Karlovy Vary, Ústí nad Labem, Moravskoslezský kraj) höher. Projektgröße typischerweise 1 – 40 Mio. CZK, in Einzelfällen bis 150 Mio. CZK. Voraussetzungen: mindestens 2 Jahre Geschäftshistorie, positive Bilanz, Innovationsgrad (z. B. OTT PUR/Laser-Technologie, BARBARIC Flächenlager, digitale Nesting-Produktion) und Nachhaltigkeitsnachweise. Maschinen von OTT, Mayer, Gannomat und BARBARIC erfüllen die technischen Kriterien regelmäßig.',
                  'OP TAK is the main Czech funding instrument for manufacturing SMEs in the 2021–2027 programme period and the key tool for EU co-financed modernisation. The call Technologie – výrobní podniky, relevant for woodworking operations, funds the purchase of new production machines, warehouse automation, industrial software (ERP/MES/CAM), digitalisation and Industry 4.0 solutions. Rate: 45% for medium enterprises and 60% for small enterprises on eligible costs, higher in structurally weaker regions (Karlovy Vary, Ústí nad Labem, Moravskoslezský kraj). Typical project size 1–40 million CZK, in individual cases up to 150 million CZK. Requirements: at least 2 years of business history, positive balance sheet, degree of innovation (e.g. OTT PUR/laser, BARBARIC panel storage, digital nesting production) and sustainability evidence. Machines from OTT, Mayer, Gannomat and BARBARIC regularly meet the technical criteria.',
                  'OP TAK je hlavní dotační nástroj České republiky pro výrobní MSP v programovém období 2021–2027 a klíčový nástroj EU spolufinancované modernizace. Pro dřevozpracující podniky je relevantní výzva Technologie – výrobní podniky, která podporuje pořízení nových výrobních strojů, automatizaci skladu, průmyslový software (ERP/MES/CAM), digitalizaci a řešení Průmyslu 4.0. Míra podpory: 45 % pro střední podniky a 60 % pro malé na způsobilé náklady, ve strukturálně slabších regionech (Karlovarský, Ústecký, Moravskoslezský kraj) vyšší. Velikost projektu typicky 1–40 mil. Kč, v jednotlivých případech až 150 mil. Kč. Podmínky: minimálně 2 roky historie podnikání, kladný výsledek hospodaření, míra inovace (např. OTT PUR/laser, BARBARIC plošný sklad, digitální nesting) a doklady udržitelnosti. Stroje OTT, Mayer, Gannomat a BARBARIC tato technická kritéria zpravidla splňují.'
                )}
              </p>
            </div>
          </div>
        </section>

        {/* ── 3. NRB ── */}
        <section className="py-16">
          <div className="container-wide">
            <div className="max-w-5xl">
              <h2 className="text-2xl md:text-3xl font-display font-light text-white mb-4">
                {tr(
                  'Národní rozvojová banka (NRB) – Investitionsdarlehen',
                  'Národní rozvojová banka (NRB) – Investment loans',
                  'Národní rozvojová banka (NRB) – investiční úvěry'
                )}
              </h2>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                {tr(
                  'Die NRB (ehemals Českomoravská záruční a rozvojová banka) ist die staatliche Förderbank der Tschechischen Republik. Sie vergibt zweckgebundene Investitionsdarlehen für Maschinen und Lagerautomatisierung zu Zinssätzen, die deutlich unter dem marktüblichen Niveau der Geschäftsbanken liegen (typischerweise 4 – 5 % bei Laufzeiten von 7 – 10 Jahren). Besonders attraktiv ist das Programm ENERG mit Zinsstützung bis 10 % für energieeffiziente Projekte sowie das Programm Expanze für Betriebserweiterungen. Im Gegensatz zum OP TAK sind auch gebrauchte Maschinen mit nachgewiesenem Restwert und Prüfgutachten finanzierbar. Der Antragsprozess dauert 4 – 8 Wochen und kann parallel zum OP-TAK-Zuschuss laufen, sofern keine Doppelförderung auf denselben Kostenanteil erfolgt.',
                  'NRB (formerly Českomoravská záruční a rozvojová banka) is the state development bank of the Czech Republic. It provides purpose-bound investment loans for machinery and warehouse automation at rates well below commercial banks (typically 4–5% on 7–10-year terms). Particularly attractive are the ENERG programme with up to 10% interest subsidy for energy-efficient projects and the Expanze programme for business expansion. Unlike OP TAK, used machines with documented residual value and inspection report are also eligible. The application process takes 4–8 weeks and can run in parallel with an OP TAK grant, as long as there is no double funding on the same cost element.',
                  'NRB (dříve Českomoravská záruční a rozvojová banka) je státní rozvojová banka ČR. Poskytuje účelové investiční úvěry na stroje a automatizaci skladu s úrokovými sazbami výrazně pod úrovní komerčních bank (typicky 4–5 % při splatnosti 7–10 let). Zvlášť atraktivní je program ENERG s úrokovou dotací až 10 % pro energeticky úsporné projekty a program Expanze na rozvoj firem. Na rozdíl od OP TAK lze financovat i použité stroje s doloženou zůstatkovou hodnotou a znaleckým posudkem. Proces žádosti trvá 4–8 týdnů a může běžet souběžně s dotací OP TAK, pokud nedojde k dvojímu financování stejné nákladové položky.'
                )}
              </p>
            </div>
          </div>
        </section>

        {/* ── 4. InvestEU ── */}
        <section className="bg-dark-elevated py-16">
          <div className="container-wide">
            <div className="max-w-5xl">
              <h2 className="text-2xl md:text-3xl font-display font-light text-white mb-4">
                {tr(
                  'InvestEU und ergänzende EU-Programme',
                  'InvestEU and complementary EU programmes',
                  'InvestEU a doplňkové evropské programy'
                )}
              </h2>
              <p className="text-white/70 text-sm leading-relaxed">
                {tr(
                  'Über die InvestEU-Garantie der Europäischen Investitionsbank (EIB) und lokaler Durchführungsstellen (in Tschechien: NRB, ČSOB, Komerční banka) stehen 2026 weitere Finanzierungsinstrumente mit günstigen Konditionen für Nachhaltigkeits- und Digitalisierungsinvestitionen offen. Typische Hebel sind eine EIB-Bürgschaft (reduziert Eigenkapitalanforderung) und eine Zinsbonifikation für KMU-Projekte unter dem SME Window. Ergänzend sind Programme wie Modernizační fond (Dekarbonisierung, Energieeffizienz) und Nová zelená úsporám Light (für kleinere Sanierungsprojekte) interessant, wenn Sie gleichzeitig in Hallenmodernisierung und Maschinenaustausch investieren.',
                  'Through the InvestEU guarantee from the European Investment Bank (EIB) and local implementing bodies (in Czechia: NRB, ČSOB, Komerční banka), 2026 opens additional financing instruments with favourable conditions for sustainability and digitalisation investments. Typical levers are an EIB guarantee (reducing equity requirement) and interest bonification for SME projects under the SME Window. Programmes such as Modernizační fond (decarbonisation, energy efficiency) and Nová zelená úsporám Light (smaller renovation projects) are complementary if you invest in both building modernisation and machine replacement.',
                  'Prostřednictvím záruky InvestEU od Evropské investiční banky (EIB) a místních implementačních subjektů (v ČR: NRB, ČSOB, Komerční banka) se v roce 2026 otevírají další finanční nástroje s výhodnými podmínkami pro investice do udržitelnosti a digitalizace. Typické páky jsou záruka EIB (snižuje požadavek na vlastní kapitál) a úroková bonifikace pro MSP pod SME Window. Doplňkově jsou zajímavé programy jako Modernizační fond (dekarbonizace, energetická účinnost) a Nová zelená úsporám Light (menší renovace), pokud současně investujete do haly a výměny strojů.'
                )}
              </p>
            </div>
          </div>
        </section>

        {/* ── 5. Combined models ── */}
        <section className="py-16">
          <div className="container-wide">
            <div className="max-w-5xl">
              <h2 className="text-2xl md:text-3xl font-display font-light text-white mb-4">
                {tr(
                  'Kombinationsmodelle: Zuschuss + Darlehen + Leasing',
                  'Combined models: grant + loan + leasing',
                  'Kombinované modely: dotace + úvěr + leasing'
                )}
              </h2>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                {tr(
                  'In der Praxis werden Maschineninvestitionen in CZ fast immer aus drei Quellen finanziert. Ein typisches Projekt Kantenanleimmaschine + Plattensäge + Flächenlager in Höhe von 20 Mio. CZK wird z. B. wie folgt strukturiert: 45 % OP TAK Zuschuss (9 Mio. CZK) + 35 % NRB-Investitionsdarlehen (7 Mio. CZK) + 20 % Finanzierungsleasing oder Eigenkapital (4 Mio. CZK). Raiffeisen Leasing und UniCredit Leasing bieten dazu sogenanntes Dotační Leasing mit Zwischenfinanzierung bis zur Auszahlung des OP-TAK-Zuschusses. Wichtig: auf jedem Kostenelement darf immer nur eine Fördermittelquelle liegen, eine saubere Trennung der Maschinenpositionen im Angebot ist deshalb Pflicht. Asamer bereitet die Angebote entsprechend strukturiert auf.',
                  'In practice, machine investments in CZ are almost always financed from three sources. A typical project edgebander + panel saw + panel storage of CZK 20 million is often structured as: 45% OP TAK grant (CZK 9M) + 35% NRB investment loan (CZK 7M) + 20% finance lease or equity (CZK 4M). Raiffeisen Leasing and UniCredit Leasing offer "dotační leasing" with bridging finance until OP TAK payout. Important: only one funding source may sit on each cost element, so a clean split of line items in the quote is mandatory. Asamer prepares quotes accordingly.',
                  'V praxi se investice do strojů v ČR financují téměř vždy ze tří zdrojů. Typický projekt olepovačka + formátovací pila + plošný sklad za 20 mil. Kč se obvykle strukturuje takto: 45 % dotace OP TAK (9 mil. Kč) + 35 % investiční úvěr NRB (7 mil. Kč) + 20 % finanční leasing nebo vlastní zdroje (4 mil. Kč). Raiffeisen Leasing a UniCredit Leasing k tomu nabízejí tzv. dotační leasing s překlenovacím financováním do vyplacení dotace OP TAK. Důležité: na každé položce může být pouze jeden zdroj podpory, čisté rozdělení položek v nabídce je proto nutné. Asamer nabídky takto připraví.'
                )}
              </p>
            </div>
          </div>
        </section>

        {/* ── 6. Timeline ── */}
        <section className="bg-dark-elevated py-16">
          <div className="container-wide">
            <div className="max-w-5xl">
              <h2 className="text-2xl md:text-3xl font-display font-light text-white mb-4">
                {tr(
                  'Typischer Zeitplan und benötigte Unterlagen',
                  'Typical timeline and required documentation',
                  'Typický harmonogram a potřebné dokumenty'
                )}
              </h2>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                {tr(
                  'Rechnen Sie mit 6 – 9 Monaten vom ersten Gespräch bis zur Fördervereinbarung und weiteren 4 – 8 Monaten Lieferzeit der Maschinen. Benötigt werden in der Regel: Projektbeschreibung mit technischer Spezifikation der Maschinen, drei vergleichbare Angebote (bei Einzelquellen nur eines mit Begründung), Finanzanalyse der letzten 2 – 3 Geschäftsjahre, Cashflow-Projektion, Bestätigung der Eigenmittel bzw. Finanzierungszusage der Bank, ökologische und gleichstellungspolitische Auswirkungserklärung, sowie – nach Bewilligung – die Einhaltung des Publizitätsgebots (EU- und OP-TAK-Schild am Standort, Hinweis in Angeboten und Pressetexten). Asamer liefert die technische Maschinenspezifikation direkt in API-konformem Format.',
                  'Plan for 6–9 months from first consultation to funding agreement and a further 4–8 months of machine lead time. Typically required: project description with technical machine spec, three comparable quotes (only one with justification for single source), financial analysis of the last 2–3 fiscal years, cash-flow projection, confirmation of own funds or bank financing commitment, environmental and equality impact statement, and – after approval – compliance with publicity rules (EU / OP TAK plaque on site, notice in quotes and press). Asamer delivers technical machine specification directly in API-compliant format.',
                  'Počítejte s 6–9 měsíci od první konzultace po rozhodnutí o dotaci a dalšími 4–8 měsíci dodací lhůty strojů. Obvykle jsou vyžadovány: popis projektu s technickou specifikací strojů, tři srovnatelné nabídky (u jediného zdroje pouze jedna s odůvodněním), finanční analýza posledních 2–3 účetních období, projekce cashflow, potvrzení vlastních zdrojů nebo příslib financování banky, ekologické a genderové prohlášení o dopadu a – po schválení – dodržení publicity (tabule EU / OP TAK na místě, informace v nabídkách a tiskových zprávách). Asamer dodá technickou specifikaci strojů přímo ve formátu dle API.'
                )}
              </p>
              <div className="mt-4">
                <Link
                  to={buildPath('/financovani')}
                  className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline"
                >
                  {tr('Details zu Finanzierung & Leasing', 'Details on financing & leasing', 'Podrobnosti financování a leasingu')}
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
                    'Förderpotenzial für Ihre nächste Maschineninvestition prüfen',
                    'Check funding potential for your next machine investment',
                    'Prověřit dotační potenciál další investice do strojů'
                  )}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {tr(
                    'Asamer koordiniert mit lokalen Förderberatern in Brno und Prag und stimmt OTT-, Mayer-, Gannomat- und BARBARIC-Projekte direkt auf OP TAK, NRB und Leasing ab. Kostenloses Erstgespräch für CZ, SK und HU.',
                    'Asamer coordinates with local funding consultants in Brno and Prague and aligns OTT, Mayer, Gannomat and BARBARIC projects directly with OP TAK, NRB and leasing. Free initial consultation for CZ, SK and HU.',
                    'Asamer spolupracuje s místními dotačními poradci v Brně a Praze a projekty OTT, Mayer, Gannomat a BARBARIC přímo sladí s OP TAK, NRB a leasingem. Bezplatná první konzultace pro CZ, SK a HU.'
                  )}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href={ctaHref} className="btn-primary-dark justify-center">
                  {tr('Förderberatung anfragen', 'Request funding consultation', 'Poptat dotační poradenství')}
                  <ArrowRight className="w-5 h-5" />
                </a>
                <Link to={buildPath('/financovani')} className="btn-outline-dark justify-center">
                  {tr('Finanzierung & Leasing', 'Financing & leasing', 'Financování a leasing')}
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

export default GuideFundingCzPage;
