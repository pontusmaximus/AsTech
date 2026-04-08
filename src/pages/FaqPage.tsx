import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useLanguage } from '../App';
import { translatePageText } from '../i18n/pageTextTranslations';
import { buildMailto } from '../lib/email';
import SeoHead from '../seo/SeoHead';
import { faqPageSchema } from '../seo/structuredData';

const FaqPage = () => {
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

  const faqEntries = [
    // ── Maschinenwahl ──
    {
      question: tr(
        'Welche Kantenanleimmaschine für den Einstieg?',
        'Which edgebander for beginners?',
        'Která olepovačka hran pro začátek?'
      ),
      answer: tr(
        'Für den Einstieg empfehlen wir die OTT Pacific+. Sie bietet 18 m/min Vorschub inklusive Eckenbearbeitung auf nur 5,7 m Baulänge. Die Maschine verarbeitet Kantenstärken von 0,3–15 mm und Werkstückstärken bis 60 mm. Mit CombiMelt ist sie zudem PUR-nachrüstbar, sodass Sie zukunftssicher investieren.',
        'For beginners we recommend the OTT Pacific+. It offers 18 m/min feed speed including corner processing in just 5.7 m length. The machine handles edge thicknesses from 0.3–15 mm and board thicknesses up to 60 mm. With CombiMelt it is also PUR-retrofittable, making it a future-proof investment.',
        'Pro začátek doporučujeme OTT Pacific+. Nabízí posuv 18 m/min včetně zpracování rohů na pouhých 5,7 m délky. Stroj zvládne tloušťku hran 0,3–15 mm a tloušťku desek do 60 mm. Díky CombiMelt je navíc dodatečně vybavitelná PUR, takže investujete do budoucnosti.'
      ),
    },
    {
      question: tr(
        'Ab wann lohnt sich eine Lagerautomatisierung?',
        'When does warehouse automation pay off?',
        'Kdy se vyplatí automatizace skladu?'
      ),
      answer: tr(
        'Eine Lagerautomatisierung lohnt sich ab einem täglichen Plattendurchsatz von ca. 50 Platten oder wenn Suchzeiten und Fehler bei der Kommissionierung die Produktivität bremsen. BARBARIC-Systeme reduzieren Lagerkosten um bis zu 40 % und erreichen 99,9 % Bestandsgenauigkeit. Der typische ROI liegt bei 2–4 Jahren, abhängig von Betriebsgröße und Materialdurchsatz.',
        'Warehouse automation pays off from a daily panel throughput of approx. 50 panels, or when search times and picking errors slow down productivity. BARBARIC systems reduce storage costs by up to 40% and achieve 99.9% inventory accuracy. Typical ROI is 2–4 years depending on operation size and material throughput.',
        'Automatizace skladu se vyplatí od denního průchodu přibližně 50 desek nebo když časy hledání a chyby při kompletaci brzdí produktivitu. Systémy BARBARIC snižují skladové náklady až o 40 % a dosahují 99,9% přesnosti zásob. Typická návratnost investice je 2–4 roky v závislosti na velikosti provozu a objemu materiálu.'
      ),
    },
    // ── Technologie ──
    {
      question: tr(
        'Was ist der Unterschied zwischen PUR und EVA Leimtechnologie?',
        'What is the difference between PUR and EVA glue technology?',
        'Jaký je rozdíl mezi PUR a EVA technologií lepení?'
      ),
      answer: tr(
        'EVA (Ethylenvinylacetat) ist ein thermoplastischer Schmelzkleber, der schnell aushärtet und einfach zu verarbeiten ist. PUR (Polyurethan-Reaktivklebstoff) reagiert mit Feuchtigkeit und bildet eine wasserfeste, hitzebeständige Verbindung. PUR liefert dünnere Leimfugen und höhere Beständigkeit gegen Hitze und Feuchtigkeit. Für Küchenmöbel und feuchte Umgebungen ist PUR die bessere Wahl, für Standardmöbel reicht EVA vollkommen aus.',
        'EVA (ethylene vinyl acetate) is a thermoplastic hot-melt adhesive that cures quickly and is easy to process. PUR (polyurethane reactive adhesive) reacts with moisture and forms a waterproof, heat-resistant bond. PUR delivers thinner glue lines and higher resistance to heat and moisture. For kitchen furniture and humid environments PUR is the better choice; for standard furniture EVA is perfectly sufficient.',
        'EVA (etylenvinylacetát) je termoplastické tavné lepidlo, které rychle tuhne a snadno se zpracovává. PUR (polyuretanové reaktivní lepidlo) reaguje s vlhkostí a vytváří vodotěsný, tepelně odolný spoj. PUR poskytuje tenčí lepené spáry a vyšší odolnost vůči teplu a vlhkosti. Pro kuchyňský nábytek a vlhké prostředí je PUR lepší volbou; pro standardní nábytek EVA plně dostačuje.'
      ),
    },
    {
      question: tr(
        'Was bedeutet Zero-Gap? Was ist bluEdge HyFuse?',
        'What does Zero-Gap mean? What is bluEdge HyFuse?',
        'Co znamená Zero-Gap? Co je bluEdge HyFuse?'
      ),
      answer: tr(
        'Zero-Gap bezeichnet eine Kantenverklebung, bei der die Leimfuge optisch unsichtbar ist – die Kante und das Plattenmaterial verschmelzen nahtlos. bluEdge HyFuse ist die OTT-eigene Lasertechnologie, die Kanten mittels Diodenlaser aktiviert und ohne separaten Klebstoff verbindet. Das Ergebnis ist eine fugenlose, wasserdichte Kante mit höchster optischer Qualität.',
        'Zero-Gap refers to edge bonding where the glue line is visually invisible – the edge and panel material merge seamlessly. bluEdge HyFuse is OTT\'s proprietary laser technology that activates edges using a diode laser and bonds them without separate adhesive. The result is a seamless, waterproof edge with the highest visual quality.',
        'Zero-Gap označuje olepení hrany, kde je lepená spára opticky neviditelná – hrana a deskový materiál splývají bezešvě. bluEdge HyFuse je vlastní laserová technologie OTT, která aktivuje hrany diodovým laserem a spojuje je bez samostatného lepidla. Výsledkem je bezešvá, vodotěsná hrana s nejvyšší optickou kvalitou.'
      ),
    },
    {
      question: tr(
        'Was ist OPC-UA und warum ist es wichtig für ERP-Integration?',
        'What is OPC-UA and why is it important for ERP integration?',
        'Co je OPC-UA a proč je důležité pro integraci ERP?'
      ),
      answer: tr(
        'OPC-UA (Open Platform Communications – Unified Architecture) ist ein offener Industriestandard für den sicheren Datenaustausch zwischen Maschinen und IT-Systemen. Alle OTT-Maschinen mit Beckhoff-Steuerung nutzen OPC-UA, sodass sie direkt mit ERP- und MES-Systemen kommunizieren können. Das ermöglicht Echtzeit-Produktionsüberwachung, automatische Auftragssteuerung und vorausschauende Wartung – ohne proprietäre Software oder Vendor-Lock-in.',
        'OPC-UA (Open Platform Communications – Unified Architecture) is an open industrial standard for secure data exchange between machines and IT systems. All OTT machines with Beckhoff controls use OPC-UA, enabling direct communication with ERP and MES systems. This allows real-time production monitoring, automatic order control and predictive maintenance – without proprietary software or vendor lock-in.',
        'OPC-UA (Open Platform Communications – Unified Architecture) je otevřený průmyslový standard pro bezpečnou výměnu dat mezi stroji a IT systémy. Všechny stroje OTT s řízením Beckhoff využívají OPC-UA, takže mohou přímo komunikovat s ERP a MES systémy. To umožňuje sledování výroby v reálném čase, automatické řízení zakázek a prediktivní údržbu – bez proprietárního softwaru nebo vendor lock-in.'
      ),
    },
    // ── Service ──
    {
      question: tr(
        'Wie schnell kommt ein Techniker bei Maschinenausfall?',
        'How quickly does a technician arrive during machine failure?',
        'Jak rychle přijede technik při poruše stroje?'
      ),
      answer: tr(
        'Im Notfall priorisiert unser Serviceteam Ihre Störung sofort. In der Regel beginnen wir innerhalb von 2–4 Stunden mit einer telefonischen oder Ferndiagnose. Ist ein Vor-Ort-Einsatz nötig, planen wir den Techniker innerhalb von 24–48 Stunden ein. Für Kunden mit Wartungsvertrag gelten verkürzte Reaktionszeiten.',
        'In an emergency our service team prioritizes your incident immediately. Typically we start a phone or remote diagnosis within 2–4 hours. If an on-site visit is needed, we schedule a technician within 24–48 hours. Customers with maintenance contracts benefit from shorter response times.',
        'V případě poruchy náš servisní tým okamžitě priorizuje váš incident. Obvykle zahájíme telefonickou nebo vzdálenou diagnostiku do 2–4 hodin. Pokud je nutný zásah na místě, naplánujeme technika do 24–48 hodin. Zákazníci s servisní smlouvou mají zkrácené reakční doby.'
      ),
    },
    {
      question: tr(
        'Welche Maschinen werden von Asamer gewartet?',
        'Which machines does Asamer service?',
        'Které stroje Asamer servisuje?'
      ),
      answer: tr(
        'Wir warten alle Maschinen aus unserem aktuellen Portfolio: OTT Kantenanleimmaschinen, Mayer Plattenaufteilsägen, BARBARIC Handling- und Lagersysteme sowie Gannomat Bohr- und Dübelmaschinen. Darüber hinaus bieten wir Service für Bestandsmaschinen von IMA Schelling, Mühlböck und weiteren Herstellern, mit denen wir seit 30 Jahren Erfahrung haben.',
        'We service all machines from our current portfolio: OTT edgebanding machines, Mayer panel saws, BARBARIC handling and storage systems, and Gannomat drilling and dowel machines. Additionally we offer service for existing machines from IMA Schelling, Mühlböck and other manufacturers we have worked with for 30 years.',
        'Servisujeme všechny stroje z našeho aktuálního portfolia: olepovačky hran OTT, formátovací pily Mayer, manipulační a skladové systémy BARBARIC a vrtací a kolkovací stroje Gannomat. Navíc nabízíme servis pro stávající stroje od IMA Schelling, Mühlböck a dalších výrobců, se kterými máme 30 let zkušeností.'
      ),
    },
    // ── Finanzierung ──
    {
      question: tr(
        'Welche Förderprogramme gibt es 2026 für Holzmaschinen in CZ?',
        'What funding programs exist in 2026 for woodworking machines in CZ?',
        'Jaké dotační programy existují v roce 2026 pro dřevoobráběcí stroje v ČR?'
      ),
      answer: tr(
        'In der Tschechischen Republik stehen 2026 mehrere Programme zur Verfügung: OP TAK – Digitální podnik fördert mit 25–45 % (max. 45 Mio. CZK) bei ERP/MES-Anbindung der Maschinen. OP TAK – Inovace bietet 15–60 % für F&E-basierte Technologien. Der NRB Úvěr Expanze gewährt zinslosen Kredit bis 50 % der Kosten mit 15 Jahren Laufzeit. Asamer berät kostenlos zur optimalen Kombination von Förderung und Leasing.',
        'In the Czech Republic several programs are available in 2026: OP TAK – Digitální podnik supports 25–45% (max. CZK 45M) with ERP/MES integration of machines. OP TAK – Inovace offers 15–60% for R&D-based technologies. NRB Úvěr Expanze provides interest-free credit for up to 50% of costs with a 15-year term. Asamer offers free consulting on optimal combination of grants and leasing.',
        'V České republice je v roce 2026 k dispozici několik programů: OP TAK – Digitální podnik podporuje 25–45 % (max. 45 mil. Kč) při integraci strojů s ERP/MES. OP TAK – Inovace nabízí 15–60 % pro technologie založené na VaV. NRB Úvěr Expanze poskytuje bezúročný úvěr až do 50 % nákladů se splatností 15 let. Asamer poradí zdarma s optimální kombinací dotace a leasingu.'
      ),
    },
    {
      question: tr(
        'Wie funktioniert Leasing über Raiffeisen für Maschinen?',
        'How does leasing through Raiffeisen work for machines?',
        'Jak funguje leasing přes Raiffeisen pro stroje?'
      ),
      answer: tr(
        'Raiffeisen Leasing finanziert neue und gebrauchte Maschinen mit Laufzeiten von 36–72 Monaten. Sie wählen zwischen Finanzierungsleasing (Eigentumsübergang nach letzter Rate) und operativem Leasing (Rückgabe oder Verlängerung). Die Anzahlung beginnt ab 10 %, Versicherung ist direkt in der Rate enthalten. Asamer übernimmt die komplette Abwicklung – vom Angebot bis zur Vertragsunterschrift.',
        'Raiffeisen Leasing finances new and used machines with terms of 36–72 months. You choose between finance leasing (ownership after final installment) and operating leasing (return or extension). Down payment starts from 10%, insurance is included in the rate. Asamer handles the complete process – from quote to contract signing.',
        'Raiffeisen Leasing financuje nové i použité stroje s dobou trvání 36–72 měsíců. Volíte mezi finančním leasingem (přechod vlastnictví po poslední splátce) a operativním leasingem (vrácení nebo prodloužení). Akontace začíná od 10 %, pojištění je přímo v splátce. Asamer zajistí kompletní vyřízení – od nabídky po podpis smlouvy.'
      ),
    },
    // ── Gebrauchtmaschinen ──
    {
      question: tr(
        'Worauf achten beim Kauf gebrauchter Kantenanleimmaschinen?',
        'What to look for when buying used edgebanders?',
        'Na co si dát pozor při nákupu použitých olepovaček hran?'
      ),
      answer: tr(
        'Prüfen Sie den Zustand der Leimeinheit, Fräsaggregate und Vorschubkette – das sind die kritischen Verschleißteile. Fragen Sie nach dem Maschinenpass mit Wartungshistorie und Betriebsstunden. Asamer prüft jede Gebrauchtmaschine technisch, bevor sie angeboten wird. Achten Sie auf die Verfügbarkeit von Ersatzteilen und darauf, ob der Hersteller noch Support bietet.',
        'Check the condition of the glue unit, milling aggregates and feed chain – these are the critical wear parts. Ask for the machine passport with maintenance history and operating hours. Asamer technically inspects every used machine before listing it. Verify spare parts availability and whether the manufacturer still provides support.',
        'Zkontrolujte stav lepicí jednotky, frézovacích agregátů a posuvného řetězu – to jsou kritické opotřebitelné díly. Požádejte o strojní pas s historií údržby a provozními hodinami. Asamer každý použitý stroj technicky prověří, než ho nabídne. Ověřte si dostupnost náhradních dílů a zda výrobce stále poskytuje podporu.'
      ),
    },
    {
      question: tr(
        'Bietet Asamer Garantie auf gebrauchte Maschinen?',
        'Does Asamer offer warranty on used machines?',
        'Poskytuje Asamer záruku na použité stroje?'
      ),
      answer: tr(
        'Ja, jede Gebrauchtmaschine von Asamer wird vor dem Verkauf technisch geprüft und ggf. aufbereitet. Je nach Zustand und Umfang der Aufbereitung bieten wir Gewährleistung auf die geprüften Komponenten. Zusätzlich steht unser Serviceteam für Wartung und Ersatzteillieferung zur Verfügung. Für die Finanzierung von Gebrauchtmaschinen arbeiten wir mit Raiffeisen Leasing zusammen.',
        'Yes, every used machine from Asamer is technically inspected and refurbished if needed before sale. Depending on condition and scope of refurbishment we provide warranty on inspected components. Additionally our service team is available for maintenance and spare parts delivery. For used machine financing we partner with Raiffeisen Leasing.',
        'Ano, každý použitý stroj od Asamer je před prodejem technicky prověřen a případně repasován. V závislosti na stavu a rozsahu repase poskytujeme záruku na prověřené komponenty. Navíc je k dispozici náš servisní tým pro údržbu a dodávky náhradních dílů. Pro financování použitých strojů spolupracujeme s Raiffeisen Leasing.'
      ),
    },
    {
      question: tr(
        'Kann Asamer bei der Software-Integration meiner neuen Maschine helfen?',
        'Can Asamer help with software integration of my new machine?',
        'Může Asamer pomoci s integrací softwaru do nového stroje?'
      ),
      answer: tr(
        'Ja, unser Software-Team verbindet Ihre Maschine über die offene OPC-UA-Schnittstelle direkt mit Ihrem ERP- oder MES-System. Die Integration umfasst Echtzeit-Produktionsdaten, automatische Auftragssteuerung und Zustandsüberwachung. Es wird keine proprietäre Software benötigt – Sie behalten die volle Kontrolle über Ihre Daten. Die Softwareanbindung ist zudem Voraussetzung für viele Förderprogramme wie OP TAK Digitální podnik.',
        'Yes, our software team connects your machine via the open OPC-UA interface directly to your ERP or MES system. Integration includes real-time production data, automatic order control and condition monitoring. No proprietary software is needed – you retain full control over your data. Software integration is also a prerequisite for many funding programs such as OP TAK Digitální podnik.',
        'Ano, náš softwarový tým propojí váš stroj přes otevřené rozhraní OPC-UA přímo s vaším ERP nebo MES systémem. Integrace zahrnuje výrobní data v reálném čase, automatické řízení zakázek a monitorování stavu. Není potřeba proprietární software – máte plnou kontrolu nad svými daty. Softwarová integrace je navíc předpokladem pro mnoho dotačních programů jako OP TAK Digitální podnik.'
      ),
    },
    {
      question: tr(
        'Liefert Asamer auch nach Ungarn und in die Slowakei?',
        'Does Asamer deliver to Hungary and Slovakia?',
        'Dodává Asamer i do Maďarska a na Slovensko?'
      ),
      answer: tr(
        'Ja, Asamer liefert in die gesamte Region CZ, SK und HU. Für OTT Kantenanleimmaschinen sind wir exklusiver Vertriebspartner. Mayer, BARBARIC und Gannomat vertreiben wir als autorisierter Händler. Wir liefern, installieren und warten Maschinen in allen drei Ländern. Die Zentrale befindet sich in Brno, von wo aus wir die Region abdecken.',
        'Yes, Asamer delivers across the entire CZ, SK and HU region. We are the exclusive distribution partner for OTT edgebanding machines. Mayer, BARBARIC and Gannomat are sold as an authorized dealer. We deliver, install and service machines in all three countries. Our headquarters are in Brno, from where we cover the region.',
        'Ano, Asamer dodává do celého regionu CZ, SK a HU. Pro olepovačky hran OTT jsme exkluzivním distribučním partnerem. Mayer, BARBARIC a Gannomat prodáváme jako autorizovaný prodejce. Dodáváme, instalujeme a servisujeme stroje ve všech třech zemích. Centrála se nachází v Brně, odkud pokrýváme celý region.'
      ),
    },
  ];

  const [open, setOpen] = useState<number[]>([]);

  const toggle = (index: number) => {
    setOpen((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const ctaHref = buildMailto(
    'office@asamer.net',
    tr('Anfrage Asamer', 'Inquiry Asamer', 'Poptávka Asamer')
  );

  return (
    <>
      <SeoHead routeKey="faq" structuredData={[faqPageSchema(faqEntries)]} />
      <div className="bg-dark min-h-screen">
        {/* ── Header ── */}
        <section className="pt-28 md:pt-36 pb-16">
          <div className="container-wide">
            <div className="max-w-5xl">
              <div className="accent-line mb-6" />
              <h1 className="text-section font-display font-light text-white mb-6">
                {tr(
                  'Häufig gestellte Fragen',
                  'Frequently Asked Questions',
                  'Často kladené otázky'
                )}
              </h1>
              <p className="text-white/70 text-lg leading-relaxed max-w-4xl">
                {tr(
                  'Antworten auf die wichtigsten Fragen rund um Kantenanleimmaschinen, Lagerautomatisierung, Leimtechnologie, Service, Finanzierung und Gebrauchtmaschinen.',
                  'Answers to the most important questions about edgebanding machines, warehouse automation, glue technology, service, financing and used machines.',
                  'Odpovědi na nejdůležitější otázky o olepovačkách hran, automatizaci skladu, technologii lepení, servisu, financování a použitých strojích.'
                )}
              </p>
            </div>
          </div>
        </section>

        {/* ── FAQ Accordion ── */}
        <section className="pb-20">
          <div className="container-wide">
            <div className="max-w-4xl">
              <div className="space-y-3">
                {faqEntries.map((entry, index) => (
                  <div key={index} className="rounded-2xl border border-white/10 bg-dark-card overflow-hidden">
                    <button onClick={() => toggle(index)} className="w-full flex items-center justify-between p-5 text-left">
                      <h2 className="text-white font-medium text-base pr-4">{entry.question}</h2>
                      <ChevronDown className={`w-5 h-5 text-white/40 shrink-0 transition-transform ${open.includes(index) ? 'rotate-180' : ''}`} />
                    </button>
                    {open.includes(index) && (
                      <div className="px-5 pb-5 text-white/70 text-sm leading-relaxed">
                        {entry.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="pb-24">
          <div className="container-wide">
            <div className="rounded-2xl border border-white/10 bg-dark-elevated p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
              <div>
                <h3 className="text-2xl font-display font-light text-white mb-2">
                  {tr(
                    'Ihre Frage nicht dabei?',
                    'Didn\'t find your question?',
                    'Nenašli jste svou otázku?'
                  )}
                </h3>
                <p className="text-white/70 text-sm">
                  {tr(
                    'Kontaktieren Sie uns direkt – wir beraten Sie gerne persönlich.',
                    'Contact us directly – we are happy to advise you personally.',
                    'Kontaktujte nás přímo – rádi vám osobně poradíme.'
                  )}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href={ctaHref} className="btn-primary-dark justify-center">
                  {tr('Anfrage senden', 'Send inquiry', 'Odeslat poptávku')}
                  <ArrowRight className="w-5 h-5" />
                </a>
                <Link to={buildPath('/kontakt')} className="btn-outline-dark justify-center">
                  {tr('Kontaktseite', 'Contact page', 'Kontaktní stránka')}
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

export default FaqPage;
