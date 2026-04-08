import { ArrowRight, Landmark, FileCheck, RefreshCw, Banknote, Flag, ChevronDown, BadgePercent } from 'lucide-react';
import { useLanguage } from '../App';
import { translatePageText } from '../i18n/pageTextTranslations';
import { buildMailto } from '../lib/email';
import SeoHead from '../seo/SeoHead';
import { faqPageSchema } from '../seo/structuredData';

const FinancingPage = () => {
  const { lang } = useLanguage();
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

  const faqEntries = [
    {
      question: tr(
        'Jaké stroje lze financovat přes Raiffeisen Leasing?',
        'Which machines can be financed through Raiffeisen Leasing?',
        'Jaké stroje lze financovat přes Raiffeisen Leasing?'
      ),
      answer: tr(
        'Alle Maschinen aus dem Asamer-Portfolio – neu und gebraucht: OTT Kantenanleimmaschinen, Mayer Sägen, BARBARIC-Handlingsysteme, Gannomat-Beschlägeautomaten, Mühlböck-Trockner und komplette Fertigungslinien. Raiffeisen Leasing finanziert Maschinen seit 1994 – mit Versicherung direkt in der Leasingrate.',
        'All machines from the Asamer portfolio – new and used: OTT edgebanding machines, Mayer saws, BARBARIC handling systems, Gannomat fitting automation, Mühlböck dryers and complete production lines. Raiffeisen Leasing has been financing machinery since 1994 – with insurance directly in the lease rate.',
        'Financovat lze veškeré stroje z portfolia Asamer – nové i použité: olepovačky hran OTT, pily na desky Mayer, automatizační systémy BARBARIC a Gannomat, sušárny Mühlböck i celé výrobní linky. Raiffeisen Leasing financuje strojní zařízení od roku 1994 – s možností pojištění přímo v leasingové splátce.'
      ),
    },
    {
      question: tr(
        'Was ist der Unterschied zwischen Finanzierungs- und operativem Leasing?',
        'What is the difference between finance leasing and operating leasing?',
        'Jaký je rozdíl mezi finančním a operativním leasingem?'
      ),
      answer: tr(
        'Beim Finanzierungsleasing geht die Maschine nach der letzten Rate in Ihr Eigentum über. Beim operativen Leasing geben Sie sie zurück oder verlängern – niedrigere Raten, gesamter Mietaufwand steuerlich absetzbar. Raiffeisen Leasing bietet beide Varianten, Laufzeit 36–72 Monate.',
        'With finance leasing the machine becomes your property after the final installment. With operating leasing you return it or extend – lower rates, full lease expense tax-deductible. Raiffeisen Leasing offers both, term 36–72 months.',
        'Při finančním leasingu přechází stroj po poslední splátce do vašeho vlastnictví. Při operativním leasingu stroj vracíte nebo smlouvu prodlužujete – nižší splátky, celý nájemný výdaj daňově uznatelný. Raiffeisen Leasing nabízí obě varianty, doba trvání 36–72 měsíců.'
      ),
    },
    {
      question: tr(
        'Können auch Gebrauchtmaschinen finanziert werden?',
        'Can used machines also be financed?',
        'Lze financovat i použité stroje?'
      ),
      answer: tr(
        'Ja. Raiffeisen Leasing finanziert neue und gebrauchte Maschinen. Jede Gebrauchtmaschine aus dem Asamer-Angebot wird vor der Finanzierungsgenehmigung technisch geprüft. Leaseback ist auch für Maschinen möglich, die Sie bereits besitzen.',
        'Yes. Raiffeisen Leasing finances new and used machines. Every used machine from Asamer is technically inspected before financing approval. Leaseback is also possible for machines you already own.',
        'Ano. Raiffeisen Leasing financuje nové i použité stroje. Každý použitý stroj z nabídky Asamer je před schválením financování technicky prověřen. Zpětný leasing je možný i pro stroje, které již vlastníte.'
      ),
    },
    {
      question: tr(
        'Welche Förderungen gibt es in der Tschechischen Republik?',
        'What grants are available in the Czech Republic?',
        'Jaké dotace jsou dostupné v České republice?'
      ),
      answer: tr(
        'Hauptprogramme: OP TAK – Digitální podnik (25–45 %, max. 45 Mio. CZK, ERP/MES-Anbindung nötig), OP TAK – Inovace (15–60 %, für F&E-basierte Technologien) und NRB Úvěr Expanze (0 % Zinsen, bis 50 % der Kosten, 15 Jahre Laufzeit). Raiffeisen Leasing CZ kann Leasing direkt mit diesen Programmen kombinieren.',
        'Main programs: OP TAK – Digitální podnik (25–45%, max. CZK 45M, ERP/MES required), OP TAK – Inovace (15–60%, R&D-based technologies) and NRB Úvěr Expanze (0% interest, up to 50% of costs, 15-year term). Raiffeisen Leasing CZ can combine leasing directly with these programs.',
        'Hlavní programy: OP TAK – Digitální podnik (25–45 %, max. 45 mil. Kč, nutná integrace ERP/MES), OP TAK – Inovace (15–60 %, technologie na základě VaV) a NRB Úvěr Expanze (0 % úrok, až 50 % nákladů, 15 let splatnost). Raiffeisen Leasing CZ může leasing přímo kombinovat s těmito programy.'
      ),
    },
    {
      question: tr(
        'Welche Förderungen gibt es in der Slowakei?',
        'What grants are available in Slovakia?',
        'Jaké dotace jsou dostupné na Slovensku?'
      ),
      answer: tr(
        'Program Slovensko 2021–2027 (bis 50 %, max. 2 Mio. EUR), SIH-Garantieinstrument (80 % Haftung + 0–30 % Zuschuss, max. 2,8 Mio. EUR Kredit) und Plán obnovy SR (Förderfrist August 2026). Tatra Leasing (Raiffeisen) steht als Finanzierungspartner in der Slowakei zur Verfügung.',
        'Program Slovensko 2021–2027 (up to 50%, max. EUR 2M), SIH guarantee instrument (80% guarantee + 0–30% grant, max. EUR 2.8M) and Slovak Recovery Plan (funding deadline August 2026). Tatra Leasing (Raiffeisen) is the financing partner in Slovakia.',
        'Program Slovensko 2021–2027 (až 50 %, max. 2 mil. EUR), záručný nástroj SIH (80 % ručenie + 0–30 % príspevok, max. 2,8 mil. EUR) a Plán obnovy SR (termín august 2026). Tatra Leasing (Raiffeisen) je finančným partnerom na Slovensku.'
      ),
    },
    {
      question: tr(
        'Welche Förderungen gibt es in Ungarn?',
        'What grants are available in Hungary?',
        'Jaké dotace jsou dostupné v Maďarsku?'
      ),
      answer: tr(
        'GINOP Plusz-1.2.4 (50 % Zuschuss, 5–120 Mio. HUF, Frist April 2026), Széchenyi Kártya (3 % Zins, staatlich subventioniert, Budget 2.000 Mrd. HUF 2026) und MFB-Entwicklungskredite. Raiffeisen Leasing Zrt. ist der Leasingpartner in Ungarn.',
        'GINOP Plusz-1.2.4 (50% grant, HUF 5–120M, deadline April 2026), Széchenyi Kártya (3% interest, state-subsidized, budget HUF 2,000B 2026) and MFB development loans. Raiffeisen Leasing Zrt. is the leasing partner in Hungary.',
        'GINOP Plusz-1.2.4 (50 % příspěvek, 5–120 mil. HUF, lhůta duben 2026), Széchenyi Kártya (3 % úrok, státně dotovaný, rozpočet 2 000 mld. HUF 2026) a rozvojové úvěry MFB. Raiffeisen Leasing Zrt. je leasingovým partnerem v Maďarsku.'
      ),
    },
    {
      question: tr(
        'Wie lange dauert die Finanzierungsgenehmigung?',
        'How long does financing approval take?',
        'Jak dlouho trvá schválení financování?'
      ),
      answer: tr(
        'Raiffeisen Leasing: 3–7 Werktage ab Einreichung der Unterlagen. Förderprogramme (OP TAK, GINOP, Program Slovensko): 4–12 Wochen je nach Programm – Asamer koordiniert die Antragstellung.',
        'Raiffeisen Leasing: 3–7 business days from document submission. Grant programs (OP TAK, GINOP, Program Slovensko): 4–12 weeks depending on the program – Asamer coordinates the application.',
        'Raiffeisen Leasing: 3–7 pracovních dnů od podání podkladů. Dotační programy (OP TAK, GINOP, Program Slovensko): 4–12 týdnů dle programu – Asamer koordinuje žádost.'
      ),
    },
    {
      question: tr(
        'Was brauche ich, um eine Finanzierung zu starten?',
        'What do I need to start financing?',
        'Co potřebuji k zahájení financování?'
      ),
      answer: tr(
        'Für die erste Einschätzung brauchen wir nur: Firmenname und UID, Maschinentyp und Kaufpreis, gewünschte Laufzeit. Detaillierte Unterlagen (Bilanz, GuV) sind erst beim formellen Antrag bei Raiffeisen Leasing nötig.',
        'For an initial assessment we only need: company name and tax ID, machine type and purchase price, preferred term. Detailed documents (balance sheet, P&L) are only required for the formal application with Raiffeisen Leasing.',
        'Pro úvodní posouzení potřebujeme pouze: název firmy a IČO, typ a cenu stroje, preferovanou dobu splácení. Detailní podklady (rozvaha, výsledovka) jsou nutné až při formální žádosti u Raiffeisen Leasing.'
      ),
    },
  ];

  const raiffeisenFacts = [
    {
      label: tr('Leasingarten', 'Lease types', 'Typy leasingu'),
      value: tr(
        'Finanzierungsleasing · Operatives Leasing · Leaseback',
        'Finance lease · Operating lease · Leaseback',
        'Finanční leasing · Operativní leasing · Zpětný leasing'
      ),
    },
    {
      label: tr('Laufzeiten', 'Terms', 'Doby trvání'),
      value: tr('36–72 Monate', '36–72 months', '36–72 měsíců'),
    },
    {
      label: tr('Währung', 'Currency', 'Měna'),
      value: tr(
        'EUR oder CZK · fest oder variabel',
        'EUR or CZK · fixed or floating',
        'EUR nebo CZK · pevná nebo pohyblivá sazba'
      ),
    },
    {
      label: tr('Eigenanteil', 'Down payment', 'Vlastní podíl'),
      value: tr('Bis 50 % des Kaufpreises', 'Up to 50% of purchase price', 'Až 50 % kupní ceny'),
    },
    {
      label: tr('Neu + Gebraucht', 'New + Used', 'Nové + Použité'),
      value: tr(
        'Finanzierung von neuen und gebrauchten Maschinen',
        'Financing of new and used machines',
        'Financování nových i použitých strojů'
      ),
    },
    {
      label: tr('Versicherung', 'Insurance', 'Pojištění'),
      value: tr(
        'Direkt in die Leasingrate integrierbar',
        'Directly integrable into lease rate',
        'Přímo integrovatelné do leasingové splátky'
      ),
    },
    {
      label: tr('Dotationsberatung', 'Subsidy consulting', 'Dotační poradenství'),
      value: tr(
        'Raiffeisen Leasing CZ kombiniert Leasing mit OP TAK / NRB Förderprogrammen',
        'Raiffeisen Leasing CZ combines leasing with OP TAK / NRB grant programs',
        'Raiffeisen Leasing CZ kombinuje leasing s programy OP TAK / NRB'
      ),
    },
  ];


  const leasingModels = [
    {
      num: '01',
      title: tr('Finanzierungsleasing', 'Finance Lease', 'Finanční leasing'),
      text: tr(
        'Sie nutzen die Maschine ab Tag 1, Raiffeisen Leasing bleibt rechtlich Eigentümer. Nach der letzten Rate geht das Eigentum an Sie über. Laufzeit 36–72 Monate, feste monatliche Rate – planbare Kosten. Ideal für Investitionen, die Sie langfristig behalten möchten.',
        'You use the machine from day one while Raiffeisen Leasing remains the legal owner. Ownership transfers to you after the final installment. Term 36–72 months, fixed monthly rate – predictable costs. Ideal for investments you want to keep long-term.',
        'Stroj používáte od prvního dne, Raiffeisen Leasing zůstává právním vlastníkem. Po poslední splátce přechází vlastnictví na vás. Doba trvání 36–72 měsíců, pevná měsíční splátka – plánovatelné náklady. Ideální pro investice, které si chcete dlouhodobě ponechat.'
      ),
      icon: FileCheck,
      borderColor: 'border-primary/15',
      bgTint: 'bg-primary/5',
      iconBg: 'bg-primary/15',
      iconColor: 'text-primary',
    },
    {
      num: '02',
      title: tr('Operatives Leasing', 'Operating Lease', 'Operativní leasing'),
      text: tr(
        'Niedrigere Monatsraten, kein Eigentumsübergang – die Maschine wird nach Ablauf zurückgegeben oder der Vertrag verlängert. Gesamter Mietaufwand als Betriebsausgabe steuerlich absetzbar. Geeignet, wenn Sie Technologie regelmäßig erneuern möchten.',
        'Lower monthly rates, no ownership transfer – the machine is returned or the lease extended at the end. The entire lease expense is tax-deductible as a business cost. Suitable if you want to regularly update technology.',
        'Nižší měsíční splátky, bez převodu vlastnictví – stroj po skončení smlouvy vracíte nebo smlouvu prodlužujete. Celý nájemný výdaj je daňově uznatelný jako provozní náklad. Vhodné, pokud chcete pravidelně obnovovat technologie.'
      ),
      icon: RefreshCw,
      borderColor: 'border-emerald-500/15',
      bgTint: 'bg-emerald-500/5',
      iconBg: 'bg-emerald-500/15',
      iconColor: 'text-emerald-400',
    },
    {
      num: '03',
      title: tr('Leaseback', 'Sale & Lease Back', 'Zpětný leasing'),
      text: tr(
        'Sie verkaufen eine vorhandene Maschine an Raiffeisen Leasing und leasen sie sofort zurück. Das setzt gebundenes Kapital frei – für neue Investitionen oder Betriebsmittel – während die Maschine weiterhin bei Ihnen im Einsatz bleibt.',
        'You sell an existing machine to Raiffeisen Leasing and lease it back immediately. This frees up tied-up capital – for new investments or working capital – while the machine continues operating at your facility.',
        'Prodáte stávající stroj Raiffeisen Leasing a okamžitě si jej pronajmete zpět. Tím uvolníte vázaný kapitál – pro nové investice nebo provozní prostředky – zatímco stroj dál běží ve vašem provozu.'
      ),
      icon: Banknote,
      borderColor: 'border-orange-500/15',
      bgTint: 'bg-orange-500/5',
      iconBg: 'bg-orange-500/15',
      iconColor: 'text-orange-400',
    },
  ];

  const processSteps = [
    {
      num: '01',
      title: tr('Maschine auswählen', 'Choose your machine', 'Vyberte stroj'),
      text: tr(
        'Neu oder gebraucht aus dem Asamer-Portfolio. Wir erstellen ein Angebot inklusive Finanzierungsvarianten.',
        'New or used from the Asamer portfolio. We prepare a quote including financing options.',
        'Nový nebo použitý z portfolia Asamer. Připravíme nabídku včetně variant financování.'
      ),
    },
    {
      num: '02',
      title: tr('Finanzierung prüfen', 'Review financing', 'Posouzení financování'),
      text: tr(
        'Wir prüfen gemeinsam mit Raiffeisen Leasing Ihre Optionen: Leasingart, Laufzeit, Förderkombination. Dauer: 3–7 Werktage.',
        'We review your options with Raiffeisen Leasing: lease type, term, grant combination. Duration: 3–7 business days.',
        'Společně s Raiffeisen Leasing posoudíme vaše možnosti: typ leasingu, dobu trvání, kombinaci s dotacemi. Doba: 3–7 pracovních dnů.'
      ),
    },
    {
      num: '03',
      title: tr('Vertrag & Förderantrag', 'Contract & grant application', 'Smlouva & žádost o dotaci'),
      text: tr(
        'Leasingvertrag unterzeichnen. Bei Förderkombination koordiniert Asamer die Antragstellung parallel.',
        'Sign leasing contract. For grant combinations Asamer coordinates the application in parallel.',
        'Podpis leasingové smlouvy. Při kombinaci s dotací Asamer koordinuje žádost paralelně.'
      ),
    },
    {
      num: '04',
      title: tr('Lieferung & Inbetriebnahme', 'Delivery & commissioning', 'Dodání & uvedení do provozu'),
      text: tr(
        'Installation und Schulung durch Asamer-Techniker. Die Finanzierung läuft – Sie produzieren.',
        'Installation and training by Asamer technicians. Financing is running – you produce.',
        'Instalace a školení techniky Asamer. Financování běží – vy vyrábíte.'
      ),
    },
  ];

  const ctaHref = buildMailto(
    'office@asamer.net',
    tr('Anfrage Finanzierung', 'Financing inquiry', 'Poptávka financování')
  );


  return (
    <>
      <SeoHead routeKey="financing" structuredData={[faqPageSchema(faqEntries)]} />
      <div className="bg-dark min-h-screen">

        {/* ── 1. Hero ── */}
        <section className="pt-28 md:pt-36 pb-16">
          <div className="container-wide">
            <div className="max-w-5xl">
              <div className="accent-line mb-6" />
              <h1 className="text-section font-display font-light text-white mb-6">
                {tr('Maschinenfinanzierung & Förderung 2026', 'Machine Financing & Grants 2026', 'Financování strojů a dotace 2026')}
              </h1>

              {/* Definition-Lead for AEO */}
              <p className="text-white/80 text-lg leading-relaxed max-w-4xl mb-4 border-l-2 border-primary/40 pl-4">
                {tr(
                  'Asamer Technologie finanziert Holzbearbeitungsmaschinen (OTT, Mayer, BARBARIC, Gannomat) über Raiffeisen Leasing mit 36–72 Monaten Laufzeit und unterstützt bei EU-Förderanträgen in CZ, SK und HU. Dieser Ratgeber erklärt die verfügbaren Programme, den Antragsprozess und welche Maschinen förderfähig sind.',
                  'Asamer Technology finances woodworking machines (OTT, Mayer, BARBARIC, Gannomat) through Raiffeisen Leasing with 36–72 month terms and supports EU grant applications in CZ, SK and HU. This guide explains the available programs, the application process and which machines are eligible.',
                  'Asamer Technologie financuje dřevoobráběcí stroje (OTT, Mayer, BARBARIC, Gannomat) přes Raiffeisen Leasing s dobou trvání 36–72 měsíců a pomáhá s žádostmi o dotace EU v CZ, SK a HU. Tento průvodce vysvětluje dostupné programy, proces žádosti a které stroje jsou způsobilé.'
                )}
              </p>

              <p className="text-white/60 text-base leading-relaxed max-w-4xl">
                {tr(
                  'Neue oder gebrauchte Holzbearbeitungsmaschinen müssen keine Einmalausgabe sein. Gemeinsam mit unserem Partner Raiffeisen Leasing bieten wir Finanzierungslösungen für Betriebe in CZ, SK und HU – von Leasing über Ratenkauf bis zur Unterstützung bei EU-Förderanträgen.',
                  'New or used woodworking machines don\'t have to be a one-time expense. Together with our partner Raiffeisen Leasing, we offer financing solutions for businesses in CZ, SK and HU – from leasing to installment purchase to EU grant support.',
                  'Nové nebo použité dřevoobráběcí stroje nemusí být jednorázovým výdajem. Společně s naším partnerem Raiffeisen Leasing nabízíme řešení financování pro podniky v CZ, SK a HU – od leasingu přes splátkový prodej až po pomoc s dotacemi EU.'
                )}
              </p>
            </div>
          </div>
        </section>

        {/* ── 2. Raiffeisen Leasing – Partnerblock ── */}
        <section className="bg-dark-elevated py-16">
          <div className="container-wide">
            <div className="flex items-start gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center shrink-0 mt-1">
                <Landmark className="w-6 h-6 text-primary" />
              </div>
              <div className="border-l-2 border-primary/30 pl-6">
                <h2 className="text-2xl md:text-3xl font-display font-light text-white mb-4">
                  {tr('Raiffeisen Leasing – Partnerfinanzierung', 'Raiffeisen Leasing – Partner Financing', 'Raiffeisen Leasing – Partnerské financování')}
                </h2>
                <p className="text-white/70 leading-relaxed">
                  {tr(
                    'Als langjähriger Partner arbeitet Asamer Technologie mit Raiffeisen Leasing zusammen – einem der größten Leasinggeber in Mitteleuropa mit Präsenz in CZ, SK und HU. Das bedeutet: schnelle Abwicklung, flexible Konditionen und ein einziger Ansprechpartner für Maschine und Finanzierung.',
                    'As a long-standing partner, Asamer Technologie works with Raiffeisen Leasing – one of the largest leasing providers in Central Europe, present in CZ, SK and HU. This means fast processing, flexible terms and a single point of contact for machine and financing.',
                    'Jako dlouholetý partner spolupracuje Asamer Technologie s Raiffeisen Leasing – jednou z největších leasingových společností ve střední Evropě s působností v CZ, SK a HU. To znamená: rychlé vyřízení, flexibilní podmínky a jediný kontaktní bod pro stroj i financování.'
                  )}
                </p>
              </div>
            </div>

            {/* Fakten-Tabelle */}
            <div className="rounded-2xl border border-white/10 bg-dark-card p-6 mb-8">
              <div className="divide-y divide-white/10">
                {raiffeisenFacts.map((fact) => (
                  <div key={fact.label} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 py-3">
                    <span className="text-white/50 text-sm font-medium min-w-[180px] shrink-0">{fact.label}</span>
                    <span className="text-white/80 text-sm leading-relaxed">{fact.value}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ── 3. Leasingarten ── */}
        <section className="py-16">
          <div className="container-wide">
            <h2 className="text-2xl md:text-3xl font-display font-light text-white mb-6">
              {tr('3 Leasingmodelle', '3 Leasing Models', '3 modely leasingu')}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {leasingModels.map((model) => {
                const Icon = model.icon;
                return (
                  <article key={model.num} className={`rounded-2xl border ${model.borderColor} ${model.bgTint} p-6`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-11 h-11 rounded-xl ${model.iconBg} flex items-center justify-center`}>
                        <Icon className={`w-5 h-5 ${model.iconColor}`} />
                      </div>
                      <div className={`${model.iconColor} text-xs uppercase tracking-widest`}>{model.num}</div>
                    </div>
                    <h3 className="text-xl font-display font-light text-white mb-3">{model.title}</h3>
                    <p className="text-white/75 text-sm leading-relaxed">{model.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── 4. Förderungen ── */}
        <section className="bg-dark-elevated py-16">
          <div className="container-wide">
            <h2 className="text-2xl md:text-3xl font-display font-light text-white mb-8">
              {tr('Förderungen & Zuschüsse', 'Grants & Subsidies', 'Dotace a podpory')}
            </h2>

            <div className="space-y-3">

              {/* CZ */}
              <details className="group rounded-xl border border-primary/15 bg-dark-card">
                <summary className="flex items-center justify-between cursor-pointer list-none p-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center">
                      <Flag className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <span className="text-primary text-xs uppercase tracking-widest block">CZ</span>
                      <h3 className="text-lg font-display font-light text-white">{tr('Česká republika', 'Czech Republic', 'Česká republika')}</h3>
                    </div>
                  </div>
                  <ChevronDown className="w-5 h-5 text-white/40 shrink-0 ml-4 transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-5 pb-5 space-y-4">
                  <div className="rounded-xl border border-primary/10 bg-dark/50 p-5">
                    <div className="flex flex-wrap items-baseline gap-3 mb-3">
                      <h4 className="text-white font-medium">OP TAK – Digitální podnik</h4>
                      <span className="text-primary text-xs font-medium bg-primary/10 px-2 py-0.5 rounded">25–45 %</span>
                    </div>
                    <p className="text-white/75 text-sm leading-relaxed">
                      {tr(
                        'Operační program Technologie a aplikace pro konkurenceschopnost. Fördert Produktionsmaschinen mit digitaler Anbindung (ERP/MES-Integration erforderlich). Projektbudget 2,5–100 Mio. CZK, max. Förderung 45 Mio. CZK. Kleine Betriebe erhalten bis 45 %.',
                        'Operational Programme Technology and Application for Competitiveness. Supports production machinery with digital connectivity (ERP/MES integration required). Project budget CZK 2.5–100M, max. grant CZK 45M. Small enterprises receive up to 45%.',
                        'Operační program Technologie a aplikace pro konkurenceschopnost. Podporuje výrobní stroje s digitálním propojením (nutná integrace ERP/MES). Rozpočet projektu 2,5–100 mil. Kč, max. dotace 45 mil. Kč. Malé podniky získají až 45 %.'
                      )}
                    </p>
                  </div>

                  <div className="rounded-xl border border-primary/10 bg-dark/50 p-5">
                    <div className="flex flex-wrap items-baseline gap-3 mb-3">
                      <h4 className="text-white font-medium">OP TAK – Inovace</h4>
                      <span className="text-primary text-xs font-medium bg-primary/10 px-2 py-0.5 rounded">15–60 %</span>
                    </div>
                    <p className="text-white/75 text-sm leading-relaxed">
                      {tr(
                        'Fördert Einführung von Innovationen in die Produktion – neue Maschinen und Technologien auf Basis von F&E-Ergebnissen. Förderung 1–80 Mio. CZK. Voraussetzung: Innovationsnachweis.',
                        'Supports introducing innovations into production – new machines and technologies based on R&D results. Grant CZK 1–80M. Requirement: proof of innovation.',
                        'Podporuje zavádění inovací do výroby – nové stroje a technologie na základě výsledků VaV. Dotace 1–80 mil. Kč. Podmínka: průkaz inovace.'
                      )}
                    </p>
                  </div>

                  <div className="rounded-xl border border-primary/10 bg-dark/50 p-5">
                    <div className="flex flex-wrap items-baseline gap-3 mb-3">
                      <h4 className="text-white font-medium">NRB – Úvěr Expanze</h4>
                      <span className="text-primary text-xs font-medium bg-primary/10 px-2 py-0.5 rounded">
                        {tr('0 % Zinsen · bis 50 %', '0% interest · up to 50%', '0 % úrok · až 50 %')}
                      </span>
                    </div>
                    <p className="text-white/75 text-sm leading-relaxed">
                      {tr(
                        'Zinsloser Investitionskredit der Národní rozvojová banka (ehem. ČMZRB). Laufzeit bis 15 Jahre, deckt bis 50 % der förderfähigen Ausgaben – Maschinen, Produktionslinien, Software, Betriebsräume. Für KMU in allen Branchen.',
                        'Interest-free investment loan from the National Development Bank (formerly ČMZRB). Term up to 15 years, covers up to 50% of eligible expenses – machines, production lines, software, premises. For SMEs in all sectors.',
                        'Bezúročný investiční úvěr od Národní rozvojové banky (dříve ČMZRB). Splatnost až 15 let, pokrývá až 50 % způsobilých výdajů – stroje, výrobní linky, software, provozní prostory. Pro MSP ve všech odvětvích.'
                      )}
                    </p>
                  </div>

                  <div className="border-l-2 border-primary/30 pl-4 py-2 bg-primary/5 rounded-r-lg">
                    <p className="text-white/60 text-sm italic leading-relaxed">
                      {tr(
                        'Raiffeisen Leasing CZ bietet eigene Dotationsberatung an und kann Leasing direkt mit Förderprogrammen (OP TAK, NRB) kombinieren – z.B. 0 % Zins auf den geförderten Anteil.',
                        'Raiffeisen Leasing CZ offers its own subsidy consulting and can combine leasing directly with grant programs (OP TAK, NRB) – e.g. 0% interest on the subsidized portion.',
                        'Raiffeisen Leasing CZ nabízí vlastní dotační poradenství a může kombinovat leasing přímo s dotačními programy (OP TAK, NRB) – např. 0 % úrok na dotovanou část.'
                      )}
                    </p>
                  </div>
                </div>
              </details>

              {/* SK */}
              <details className="group rounded-xl border border-emerald-500/15 bg-dark-card">
                <summary className="flex items-center justify-between cursor-pointer list-none p-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/15 flex items-center justify-center">
                      <Flag className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <span className="text-emerald-400 text-xs uppercase tracking-widest block">SK</span>
                      <h3 className="text-lg font-display font-light text-white">{tr('Slowakei', 'Slovakia', 'Slovensko')}</h3>
                    </div>
                  </div>
                  <ChevronDown className="w-5 h-5 text-white/40 shrink-0 ml-4 transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-5 pb-5 space-y-4">
                  <div className="rounded-xl border border-emerald-500/10 bg-dark/50 p-5">
                    <div className="flex flex-wrap items-baseline gap-3 mb-3">
                      <h4 className="text-white font-medium">Program Slovensko 2021–2027</h4>
                      <span className="text-emerald-400 text-xs font-medium bg-emerald-500/10 px-2 py-0.5 rounded">
                        {tr('bis 50 %', 'up to 50%', 'až 50 %')}
                      </span>
                    </div>
                    <p className="text-white/75 text-sm leading-relaxed">
                      {tr(
                        'Operačný program für Technologieinvestitionen und Maschinenkäufe. Max. 2 Mio. EUR pro Projekt. Förderfähig: Maschinen, Software, Patente, Personalkosten für neue Mitarbeiter.',
                        'Operational programme for technology investment and machinery purchases. Max. EUR 2M per project. Eligible: machines, software, patents, personnel costs for new employees.',
                        'Operačný program pre investície do technológií a nákup strojov. Max. 2 mil. EUR na projekt. Oprávnené výdaje: stroje, software, patenty, mzdové náklady na nových zamestnancov.'
                      )}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-500/10 bg-dark/50 p-5">
                    <div className="flex flex-wrap items-baseline gap-3 mb-3">
                      <h4 className="text-white font-medium">SIH – Záručný nástroj</h4>
                      <span className="text-emerald-400 text-xs font-medium bg-emerald-500/10 px-2 py-0.5 rounded">
                        {tr('80 % Garantie + 0–30 % Zuschuss', '80% guarantee + 0–30% grant', '80 % záruka + 0–30 % príspevok')}
                      </span>
                    </div>
                    <p className="text-white/75 text-sm leading-relaxed">
                      {tr(
                        'Slovak Investment Holding garantiert 80 % des Kreditrisikos bei Partnerbanken. Zusätzlich Zuschusskomponente 0–30 % des Kreditbetrags je nach Region. Max. Kredit 2,8 Mio. EUR, Laufzeit bis 10 Jahre. Ergebnis: niedrigere Zinsen, weniger Sicherheiten nötig.',
                        'Slovak Investment Holding guarantees 80% of credit risk at partner banks. Additional grant component 0–30% of loan amount depending on region. Max. loan EUR 2.8M, term up to 10 years. Result: lower interest rates, fewer collateral requirements.',
                        'Slovak Investment Holding ručí za 80 % úverového rizika u partnerských bank. Navyše grantová zložka 0–30 % výšky úveru podľa regiónu. Max. úver 2,8 mil. EUR, splatnosť do 10 rokov. Výsledok: nižšie úroky, menšie požiadavky na zabezpečenie.'
                      )}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-500/10 bg-dark/50 p-5">
                    <div className="flex flex-wrap items-baseline gap-3 mb-3">
                      <h4 className="text-white font-medium">Plán obnovy a odolnosti SR (RRF)</h4>
                      <span className="text-emerald-400 text-xs font-medium bg-emerald-500/10 px-2 py-0.5 rounded">
                        {tr('Frist: August 2026', 'Deadline: August 2026', 'Termín: august 2026')}
                      </span>
                    </div>
                    <p className="text-white/75 text-sm leading-relaxed">
                      {tr(
                        'Slowakischer Aufbauplan (6,4 Mrd. EUR). Investitionsförderung für Maschinen und Digitalisierung. Alle Maßnahmen müssen bis 31. August 2026 abgeschlossen sein.',
                        'Slovak recovery plan (EUR 6.4B). Investment support for machinery and digitalization. All measures must be completed by 31 August 2026.',
                        'Slovenský plán obnovy (6,4 mld. EUR). Investičná podpora pre stroje a digitalizáciu. Všetky opatrenia musia byť dokončené do 31. augusta 2026.'
                      )}
                    </p>
                  </div>
                </div>
              </details>

              {/* HU */}
              <details className="group rounded-xl border border-orange-500/15 bg-dark-card">
                <summary className="flex items-center justify-between cursor-pointer list-none p-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-orange-500/15 flex items-center justify-center">
                      <Flag className="w-5 h-5 text-orange-400" />
                    </div>
                    <div>
                      <span className="text-orange-400 text-xs uppercase tracking-widest block">HU</span>
                      <h3 className="text-lg font-display font-light text-white">{tr('Ungarn', 'Hungary', 'Maďarsko')}</h3>
                    </div>
                  </div>
                  <ChevronDown className="w-5 h-5 text-white/40 shrink-0 ml-4 transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-5 pb-5 space-y-4">
                  <div className="rounded-xl border border-orange-500/10 bg-dark/50 p-5">
                    <div className="flex flex-wrap items-baseline gap-3 mb-3">
                      <h4 className="text-white font-medium">GINOP Plusz-1.2.4</h4>
                      <span className="text-orange-400 text-xs font-medium bg-orange-500/10 px-2 py-0.5 rounded">
                        {tr('50 % nicht rückzahlbar', '50% non-repayable', '50 % nevratná')}
                      </span>
                    </div>
                    <p className="text-white/75 text-sm leading-relaxed">
                      {tr(
                        'Investitionszuschuss für Mikro- und Kleinbetriebe in benachteiligten Regionen. 50 % nicht rückzahlbar, 5–120 Mio. HUF pro Antragsteller. Förderfähig: neue Maschinen (min. 10 % des Budgets), IT-Systeme, Betriebsräume. Antragsfrist: 30. April 2026.',
                        'Investment grant for micro and small enterprises in disadvantaged regions. 50% non-repayable, HUF 5–120M per applicant. Eligible: new machinery (min. 10% of budget), IT systems, premises. Application deadline: 30 April 2026.',
                        'Investiční příspěvek pro mikro a malé podniky v znevýhodněných regionech. 50 % nevratné, 5–120 mil. HUF na žadatele. Způsobilé: nové stroje (min. 10 % rozpočtu), IT systémy, prostory. Lhůta: 30. dubna 2026.'
                      )}
                    </p>
                  </div>

                  <div className="rounded-xl border border-orange-500/10 bg-dark/50 p-5">
                    <div className="flex flex-wrap items-baseline gap-3 mb-3">
                      <h4 className="text-white font-medium">Széchenyi Kártya Program</h4>
                      <span className="text-orange-400 text-xs font-medium bg-orange-500/10 px-2 py-0.5 rounded">
                        {tr('3 % Zins – staatlich gefördert', '3% interest – state-subsidized', '3 % úrok – státně dotovaný')}
                      </span>
                    </div>
                    <p className="text-white/75 text-sm leading-relaxed">
                      {tr(
                        'Staatlich subventionierter KMU-Kredit mit einheitlichem Kundenzins 3 % p.a. (Green-Bonus: 8 % Staatszuschuss). Budget 2026: 2.000 Mrd. HUF. Einsetzbar für Maschinenkauf, Fuhrpark, Betriebsimmobilien. Für Betriebe ab 1 Jahr Geschäftstätigkeit.',
                        'State-subsidized SME credit at a uniform customer rate of 3% p.a. (green bonus: 8% state subsidy). Budget 2026: HUF 2,000B. Usable for machine purchase, fleet, business property. For businesses with at least 1 year of activity.',
                        'Státně dotovaný úvěr pro MSP s jednotnou zákaznickou sazbou 3 % p.a. (zelený bonus: 8 % státní dotace). Rozpočet 2026: 2 000 mld. HUF. Použitelné na nákup strojů, vozový park, provozní nemovitosti. Pro podniky s min. 1 rokem činnosti.'
                      )}
                    </p>
                  </div>

                  <div className="rounded-xl border border-orange-500/10 bg-dark/50 p-5">
                    <div className="flex flex-wrap items-baseline gap-3 mb-3">
                      <h4 className="text-white font-medium">MFB – Magyar Fejlesztési Bank</h4>
                      <span className="text-orange-400 text-xs font-medium bg-orange-500/10 px-2 py-0.5 rounded">
                        {tr('Entwicklungsbank', 'Development bank', 'Rozvojová banka')}
                      </span>
                    </div>
                    <p className="text-white/75 text-sm leading-relaxed">
                      {tr(
                        'Die staatliche Entwicklungsbank bietet zinsgünstige Darlehen für Maschinen- und Technologieinvestitionen, besonders für Energieeffizienzprojekte. Ergänzend zu GINOP einsetzbar.',
                        'The state development bank offers subsidized loans for machinery and technology investment, especially for energy efficiency projects. Can be combined with GINOP grants.',
                        'Státní rozvojová banka poskytuje zvýhodněné úvěry na strojní a technologické investice, zvláště pro energeticky úsporné projekty. Lze kombinovat s dotacemi GINOP.'
                      )}
                    </p>
                  </div>
                </div>
              </details>

            </div>
          </div>
        </section>

        {/* ── 5. Ablauf – 4 Schritte ── */}
        <section className="py-16">
          <div className="container-wide">
            <div className="accent-line mb-6" />
            <h2 className="text-2xl md:text-3xl font-display font-light text-white mb-10">
              {tr('Ablauf in 4 Schritten', 'Process in 4 Steps', 'Postup ve 4 krocích')}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step) => (
                <div key={step.num} className="relative">
                  <div className="w-12 h-12 rounded-full border-2 border-primary/30 bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-primary font-medium text-sm">{step.num}</span>
                  </div>
                  <h3 className="text-white text-sm font-medium mb-2">{step.title}</h3>
                  <p className="text-white/70 text-xs leading-relaxed">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. FAQ ── */}
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

        {/* ── 7. Förderfähige Maschinen ── */}
        <section className="py-16">
          <div className="container-wide">
            <div className="accent-line mb-6" />
            <h2 className="text-2xl md:text-3xl font-display font-light text-white mb-4">
              {tr('Welche Maschinen sind förderfähig?', 'Which machines are eligible for grants?', 'Které stroje jsou způsobilé pro dotace?')}
            </h2>
            <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-3xl">
              {tr(
                'Grundsätzlich sind alle Maschinen aus dem Asamer-Portfolio förderfähig – entscheidend ist die Kombination aus Programm, Unternehmensform und digitaler Anbindung. OTT-Maschinen mit Beckhoff OPC-UA-Steuerung erfüllen die Anforderung der ERP/MES-Integration für OP TAK automatisch.',
                'In principle all machines from the Asamer portfolio are eligible for grants – the decisive factor is the combination of program, company type and digital connectivity. OTT machines with Beckhoff OPC-UA controls automatically meet the ERP/MES integration requirement for OP TAK.',
                'V zásadě jsou všechny stroje z portfolia Asamer způsobilé pro dotace – rozhodující je kombinace programu, typu podniku a digitálního propojení. Stroje OTT s řízením Beckhoff OPC-UA automaticky splňují požadavek integrace ERP/MES pro OP TAK.'
              )}
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="rounded-xl border border-white/10 bg-dark-card p-5">
                <h3 className="text-white font-medium text-sm mb-2">OTT</h3>
                <p className="text-white/55 text-xs leading-relaxed">
                  {tr(
                    'Kantenanleimmaschinen: Pacific+, Tornado+, FlexEdge, Storm+, StrongEdge, TopEdge. Alle mit OPC-UA für Förderprogramme mit Digitalisierungsanforderung.',
                    'Edgebanding machines: Pacific+, Tornado+, FlexEdge, Storm+, StrongEdge, TopEdge. All with OPC-UA for grant programs requiring digitalization.',
                    'Olepovačky hran: Pacific+, Tornado+, FlexEdge, Storm+, StrongEdge, TopEdge. Všechny s OPC-UA pro dotační programy vyžadující digitalizaci.'
                  )}
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-dark-card p-5">
                <h3 className="text-white font-medium text-sm mb-2">Mayer</h3>
                <p className="text-white/55 text-xs leading-relaxed">
                  {tr(
                    'Plattenaufteilsägen: Kappa Automatic 80–140 und Advanced Line 100–250. Für Holz, Kunststoff, Aluminium und NE-Metalle.',
                    'Panel saws: Kappa Automatic 80–140 and Advanced Line 100–250. For wood, plastics, aluminium and non-ferrous metals.',
                    'Formátovací pily: Kappa Automatic 80–140 a Advanced Line 100–250. Pro dřevo, plasty, hliník a neželezné kovy.'
                  )}
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-dark-card p-5">
                <h3 className="text-white font-medium text-sm mb-2">BARBARIC</h3>
                <p className="text-white/55 text-xs leading-relaxed">
                  {tr(
                    'Lagersysteme und Handling: CSF Flächenlager, LCV Beschickung, NST Nesting, RTS Rücktransport. Besonders förderfähig durch Automatisierungskomponente.',
                    'Storage and handling: CSF panel storage, LCV feeding, NST nesting, RTS return transport. Especially eligible due to automation component.',
                    'Skladové systémy a manipulace: CSF plošné sklady, LCV podávání, NST nesting, RTS zpětný transport. Zvláště způsobilé díky automatizační složce.'
                  )}
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-dark-card p-5">
                <h3 className="text-white font-medium text-sm mb-2">Gannomat</h3>
                <p className="text-white/55 text-xs leading-relaxed">
                  {tr(
                    'Bohr- und Dübelmaschinen: Selekta, Index, ProTec, Express-Serie. Für die automatisierte Möbelfertigung.',
                    'Drilling and dowel machines: Selekta, Index, ProTec, Express series. For automated furniture manufacturing.',
                    'Vrtací a kolkovací stroje: Selekta, Index, ProTec, řada Express. Pro automatizovanou výrobu nábytku.'
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 8. CTA ── */}
        <section className="py-24">
          <div className="container-wide">
            <div className="rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="max-w-xl">
                <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-5">
                  <BadgePercent className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-light text-white mb-3">
                  {tr(
                    'Finanzierungsoption für Ihre Maschine besprechen?',
                    'Want to discuss a financing option for your machine?',
                    'Chcete probrat možnosti financování vašeho stroje?'
                  )}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {tr(
                    'Kostenlose Erstberatung mit Raiffeisen Leasing – kein Antrag, keine Verpflichtung.',
                    'Free initial consultation with Raiffeisen Leasing – no application, no obligation.',
                    'Bezplatné úvodní poradenství s Raiffeisen Leasing – bez žádosti, bez závazků.'
                  )}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href={ctaHref} className="btn-primary-dark justify-center">
                  {tr('Anfrage senden', 'Send inquiry', 'Odeslat poptávku')}
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default FinancingPage;
