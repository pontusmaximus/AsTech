import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, ChevronDown } from 'lucide-react';
import { useLanguage } from '../App';
import { translatePageText } from '../i18n/pageTextTranslations';
import { buildMailto } from '../lib/email';
import SeoHead from '../seo/SeoHead';
import { faqPageSchema } from '../seo/structuredData';

const GuideWarehouseAutomationPage = () => {
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
        'Wie viel Platz braucht ein automatisches Lagersystem?',
        'How much space does an automatic storage system require?',
        'Kolik místa potřebuje automatický skladový systém?'
      ),
      answer: tr(
        'Der Platzbedarf hängt vom Systemtyp ab. Ein CSF Multilevel nutzt die volle Hallenhöhe und spart bis zu 50 % Grundfläche. Die Mindestanforderung liegt bei ca. 6 × 12 m Stellfläche für ein Einstiegssystem.',
        'Space requirements depend on the system type. A CSF Multilevel uses the full hall height and saves up to 50% floor space. The minimum requirement is approx. 6 × 12 m of floor area for an entry-level system.',
        'Potřeba místa závisí na typu systému. CSF Multilevel využívá plnou výšku haly a šetří až 50 % podlahové plochy. Minimální požadavek je cca 6 × 12 m podlahové plochy pro základní systém.'
      ),
    },
    {
      question: tr(
        'Kann ein BARBARIC-System an mein bestehendes ERP angebunden werden?',
        'Can a BARBARIC system be connected to my existing ERP?',
        'Lze systém BARBARIC propojit s mým stávajícím ERP?'
      ),
      answer: tr(
        'Ja, alle BARBARIC-Systeme verfügen über standardisierte Schnittstellen für ERP- und MES-Anbindung. Asamer übernimmt die Softwareintegration und stellt die Kommunikation zwischen Lager, Säge und Ihrem Warenwirtschaftssystem her.',
        'Yes, all BARBARIC systems have standardised interfaces for ERP and MES integration. Asamer handles the software integration and establishes communication between storage, saw and your inventory management system.',
        'Ano, všechny systémy BARBARIC mají standardizovaná rozhraní pro napojení na ERP a MES. Asamer zajistí softwarovou integraci a nastaví komunikaci mezi skladem, pilou a vaším systémem řízení zásob.'
      ),
    },
    {
      question: tr(
        'Ist eine schrittweise Automatisierung möglich?',
        'Is step-by-step automation possible?',
        'Je možná postupná automatizace?'
      ),
      answer: tr(
        'Ja, BARBARIC-Systeme sind modular aufgebaut. Sie können mit einem Einzelsystem starten und es später um Beschickung, Rücktransport oder zusätzliche Lagerplätze erweitern. Die Steuerung ist von Beginn an auf Erweiterungen ausgelegt.',
        'Yes, BARBARIC systems are modular in design. You can start with a single system and later add feeding, return transport or additional storage locations. The control system is designed for expansion from the outset.',
        'Ano, systémy BARBARIC jsou modulární. Můžete začít s jedním systémem a později přidat podávání, zpětný transport nebo další skladovací místa. Řídicí systém je od začátku navržen pro rozšíření.'
      ),
    },
    {
      question: tr(
        'Welche Plattenformate können gelagert werden?',
        'What panel formats can be stored?',
        'Jaké formáty desek lze skladovat?'
      ),
      answer: tr(
        'BARBARIC-Systeme lagern alle gängigen Plattenformate bis 2.100 × 6.000 mm bei Einzelplattengewichten bis 150 kg. Sonderformate und Übergrößen können durch angepasste Lagerplätze berücksichtigt werden. Die Zuschnittverwaltung erfolgt automatisch über die Lagersoftware.',
        'BARBARIC systems store all common panel formats up to 2,100 × 6,000 mm with individual panel weights up to 150 kg. Special formats and oversizes can be accommodated through customised storage slots. Off-cut management is handled automatically by the storage software.',
        'Systémy BARBARIC skladují všechny běžné formáty desek do 2 100 × 6 000 mm při hmotnosti jednotlivých desek do 150 kg. Speciální formáty a nadrozměry lze zohlednit přizpůsobenými skladovacími místy. Správa přířezů probíhá automaticky přes skladový software.'
      ),
    },
    {
      question: tr(
        'Wie lange dauert die Installation eines Lagersystems?',
        'How long does the installation of a storage system take?',
        'Jak dlouho trvá instalace skladového systému?'
      ),
      answer: tr(
        'Die Installationsdauer hängt von der Systemgröße ab. Ein CSF Professional ist typischerweise in 2–3 Wochen installiert und betriebsbereit. Ein CSF Multilevel mit vollständiger Materialflussintegration benötigt 4–8 Wochen. Asamer plant die Installation so, dass Ihre laufende Produktion möglichst wenig beeinträchtigt wird.',
        'Installation duration depends on system size. A CSF Professional is typically installed and operational in 2–3 weeks. A CSF Multilevel with full material flow integration requires 4–8 weeks. Asamer plans the installation to minimise disruption to your ongoing production.',
        'Doba instalace závisí na velikosti systému. CSF Professional je typicky nainstalován a provozuschopný za 2–3 týdny. CSF Multilevel s plnou integrací materiálového toku vyžaduje 4–8 týdnů. Asamer plánuje instalaci tak, aby co nejméně narušila vaši probíhající výrobu.'
      ),
    },
  ];

  const [open, setOpen] = useState<number[]>([]);
  const toggle = (index: number) => {
    setOpen((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  /* ── System cards ── */
  const systems = [
    {
      title: tr('CSF Flächenlager', 'CSF Panel Storage', 'CSF Plošný sklad'),
      subtitle: tr('Plattenlagerung', 'Panel storage', 'Skladování desek'),
      description: tr(
        'Das CSF Flächenlager ist ein chaotisches Lagersystem für Platten und Zuschnitte. Es speichert Material sortenrein oder gemischt und liefert die richtige Platte Just-in-Time an die Säge oder CNC-Maschine. Verfügbar als CSF Professional (Einstieg), CSF Industrial (Großbetrieb) und CSF Multilevel (maximale Raumnutzung).',
        'The CSF panel storage is a chaotic storage system for panels and off-cuts. It stores material sorted or mixed and delivers the right panel just-in-time to the saw or CNC machine. Available as CSF Professional (entry-level), CSF Industrial (large-scale) and CSF Multilevel (maximum space utilisation).',
        'CSF plošný sklad je chaotický skladový systém pro desky a přířezy. Skladuje materiál tříděně nebo smíšeně a dodává správnou desku just-in-time k pile nebo CNC stroji. K dispozici jako CSF Professional (základní), CSF Industrial (velkovýroba) a CSF Multilevel (maximální využití prostoru).'
      ),
    },
    {
      title: tr('LCV Beschickung', 'LCV Panel Feeding', 'LCV Podávání'),
      subtitle: tr('Plattenbeschickung', 'Panel feeding', 'Podávání desek'),
      description: tr(
        'LCV Performance-Systeme beschicken Plattenaufteilsägen vollautomatisch. Sie entnehmen die richtige Platte aus dem Lager und positionieren sie exakt auf dem Maschinentisch – ohne manuelles Handling, ohne Wartezeiten.',
        'LCV Performance systems feed panel saws fully automatically. They retrieve the right panel from storage and position it precisely on the machine table – no manual handling, no waiting times.',
        'Systémy LCV Performance podávají desky do formátovacích pil plně automaticky. Odeberou správnou desku ze skladu a přesně ji umístí na stůl stroje – bez ručního manipulování, bez čekání.'
      ),
    },
    {
      title: tr('NST Nesting & Rücktransport', 'NST Nesting & Return Transport', 'NST Nesting a zpětný transport'),
      subtitle: tr('Nesting & RTS', 'Nesting & RTS', 'Nesting a RTS'),
      description: tr(
        'NST-Systeme (Nesting Picker) und RTS-Rücktransportsysteme bilden die Verbindung zwischen CNC-Bearbeitungszentren und dem restlichen Materialfluss. Sie entnehmen Fertigteile, sortieren Restplatten und führen sie dem Lager oder der nächsten Station zu.',
        'NST systems (nesting picker) and RTS return transport systems form the connection between CNC machining centres and the rest of the material flow. They pick finished parts, sort offcut panels and feed them back to storage or the next station.',
        'Systémy NST (nesting picker) a zpětné transportní systémy RTS tvoří spojení mezi CNC obráběcími centry a zbytkem materiálového toku. Odebírají hotové díly, třídí zbytkové desky a vracejí je do skladu nebo na další stanici.'
      ),
    },
  ];

  /* ── Use cases ── */
  const useCases = [
    tr('Möbelindustrie', 'Furniture industry', 'Nábytkářský průmysl'),
    tr('Küchenhersteller', 'Kitchen manufacturers', 'Výrobci kuchyní'),
    tr('Innenausbau', 'Interior construction', 'Interiérová výstavba'),
    tr('Holzbau und Türenfertigung', 'Timber construction and door manufacturing', 'Dřevostavby a výroba dveří'),
  ];

  /* ── CTA mailto ── */
  const ctaHref = buildMailto(
    'office@asamer.net',
    tr(
      'Beratung Lagerautomatisierung',
      'Warehouse automation consultation',
      'Konzultace automatizace skladu'
    )
  );

  return (
    <>
      <SeoHead routeKey="guideWarehouseAutomation" structuredData={[faqPageSchema(faqEntries)]} />
      <div className="bg-dark min-h-screen pt-24 sm:pt-28 md:pt-32 pb-20">

        {/* ── H1 & Definition-Lead ── */}
        <section className="pb-16">
          <div className="container-wide">
            <div className="max-w-5xl">
              <div className="accent-line mb-6" />
              <h1 className="text-section font-display font-light text-white mb-6">
                {tr(
                  'Lagerautomatisierung – Wann lohnt sie sich?',
                  'Warehouse Automation – When Does It Pay Off?',
                  'Automatizace skladu – Kdy se vyplatí?'
                )}
              </h1>
              <p className="text-white/70 text-lg leading-relaxed max-w-4xl">
                {tr(
                  'Lagerautomatisierung bezeichnet die automatische Ein- und Auslagerung von Plattenmaterial durch computergesteuerte Systeme. BARBARIC-Systeme reduzieren Lagerkosten um bis zu 40 %, verdoppeln die Kommissioniergeschwindigkeit und erreichen 99,9 % Bestandsgenauigkeit.',
                  'Warehouse automation refers to the automatic storage and retrieval of panel material through computer-controlled systems. BARBARIC systems reduce storage costs by up to 40%, double picking speed and achieve 99.9% inventory accuracy.',
                  'Automatizace skladu znamená automatické naskladňování a vyskladňování deskového materiálu pomocí počítačem řízených systémů. Systémy BARBARIC snižují skladové náklady až o 40 %, zdvojnásobují rychlost kompletace a dosahují 99,9% přesnosti zásob.'
                )}
              </p>
            </div>
          </div>
        </section>

        {/* ── Was ist Lagerautomatisierung? ── */}
        <section className="pb-16">
          <div className="container-wide">
            <div className="max-w-4xl">
              <h2 className="text-2xl md:text-3xl font-display font-light text-white mb-6">
                {tr(
                  'Was ist Lagerautomatisierung?',
                  'What is warehouse automation?',
                  'Co je automatizace skladu?'
                )}
              </h2>
              <div className="space-y-4 text-white/70 text-base leading-relaxed">
                <p>
                  {tr(
                    'In der holzverarbeitenden Industrie werden täglich hunderte Platten unterschiedlicher Materialien, Stärken und Formate bewegt. Bei manueller Lagerhaltung entstehen dabei typische Probleme: lange Suchzeiten, Materialbeschädigungen durch falsches Handling, Bestandsabweichungen und ineffiziente Flächennutzung. Die Folge sind Produktionsverzögerungen, Nachbestellungen und unnötige Kosten.',
                    'In the wood processing industry, hundreds of panels of different materials, thicknesses and formats are moved every day. With manual warehousing, typical problems arise: long search times, material damage from incorrect handling, inventory discrepancies and inefficient use of space. The consequences are production delays, reorders and unnecessary costs.',
                    'V dřevozpracujícím průmyslu se denně přesouvají stovky desek různých materiálů, tlouštěk a formátů. Při manuálním skladování vznikají typické problémy: dlouhé časy hledání, poškození materiálu nesprávnou manipulací, nesrovnalosti v zásobách a neefektivní využití prostoru. Důsledkem jsou výrobní zpoždění, dodatečné objednávky a zbytečné náklady.'
                  )}
                </p>
                <p>
                  {tr(
                    'Ein automatisches Lagersystem löst diese Probleme durch computergesteuerte Ein- und Auslagerung. Das System kennt den exakten Standort jeder Platte, stellt Material auf Abruf bereit und dokumentiert jeden Vorgang in Echtzeit. Die Platten werden schonend transportiert, sortenrein oder chaotisch gelagert und Just-in-Time an die Maschine geliefert.',
                    'An automatic storage system solves these problems through computer-controlled storage and retrieval. The system knows the exact location of every panel, provides material on demand and documents every operation in real time. Panels are transported carefully, stored sorted or chaotically and delivered just-in-time to the machine.',
                    'Automatický skladový systém řeší tyto problémy pomocí počítačem řízeného naskladňování a vyskladňování. Systém zná přesnou polohu každé desky, poskytuje materiál na vyžádání a dokumentuje každou operaci v reálném čase. Desky jsou šetrně transportovány, skladovány tříděně nebo chaoticky a dodávány just-in-time ke stroji.'
                  )}
                </p>
                <p>
                  {tr(
                    'Moderne Lagersysteme wie die BARBARIC CSF-Reihe integrieren sich nahtlos in bestehende Produktionslinien. Sie kommunizieren über standardisierte Schnittstellen mit Sägen, CNC-Maschinen und ERP-Systemen – vom Auftragseingang bis zur fertigen Kommissionierung ohne manuelle Eingriffe.',
                    'Modern storage systems like the BARBARIC CSF series integrate seamlessly into existing production lines. They communicate via standardised interfaces with saws, CNC machines and ERP systems – from order entry to finished picking without manual intervention.',
                    'Moderní skladové systémy jako řada BARBARIC CSF se bezproblémově integrují do stávajících výrobních linek. Komunikují přes standardizovaná rozhraní s pilami, CNC stroji a ERP systémy – od přijetí zakázky až po dokončenou kompletaci bez ručních zásahů.'
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── ROI Section ── */}
        <section className="pb-16">
          <div className="container-wide">
            <h2 className="text-2xl md:text-3xl font-display font-light text-white mb-8">
              {tr(
                'ROI – Wann lohnt sich die Investition?',
                'ROI – When Does the Investment Pay Off?',
                'ROI – Kdy se investice vyplatí?'
              )}
            </h2>

            {/* Stats box */}
            <div className="rounded-2xl border border-white/10 bg-dark-card p-6 md:p-8 mb-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-display font-bold text-primary mb-2">
                    {tr('bis -40 %', 'up to -40%', 'až -40 %')}
                  </div>
                  <div className="text-white/60 text-sm">
                    {tr('Lagerkosten', 'Storage costs', 'Skladové náklady')}
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-display font-bold text-primary mb-2">
                    {tr('2× schneller', '2× faster', '2× rychlejší')}
                  </div>
                  <div className="text-white/60 text-sm">
                    {tr('Kommissionierung', 'Picking speed', 'Rychlost kompletace')}
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-display font-bold text-primary mb-2">99,9 %</div>
                  <div className="text-white/60 text-sm">
                    {tr('Bestandsgenauigkeit', 'Inventory accuracy', 'Přesnost zásob')}
                  </div>
                </div>
              </div>
            </div>

            {/* ROI paragraphs */}
            <div className="max-w-4xl space-y-4 text-white/70 text-base leading-relaxed">
              <p>
                {tr(
                  'Die Investition in ein automatisches Lagersystem lohnt sich ab einem täglichen Plattendurchsatz von ca. 50 Platten. Bei manueller Lagerhaltung verbringen Mitarbeiter bis zu 30 % ihrer Arbeitszeit mit Suchen, Transportieren und Sortieren. Ein automatisches System eliminiert diese Zeiten nahezu vollständig.',
                  'Investing in an automatic storage system pays off from a daily panel throughput of approx. 50 panels. With manual warehousing, employees spend up to 30% of their working time searching, transporting and sorting. An automatic system eliminates these times almost entirely.',
                  'Investice do automatického skladového systému se vyplatí od denního průchodu přibližně 50 desek. Při manuálním skladování tráví pracovníci až 30 % pracovní doby hledáním, přepravou a tříděním. Automatický systém tyto časy téměř kompletně eliminuje.'
                )}
              </p>
              <p>
                {tr(
                  'Der typische ROI liegt bei 2–4 Jahren. Neben den direkten Einsparungen bei Personalkosten und Materialbeschädigung profitieren Sie von besserer Flächennutzung – ein BARBARIC Multilevel-System nutzt die Hallenhöhe optimal und spart bis zu 50 % Grundfläche gegenüber konventioneller Lagerung.',
                  'Typical ROI is 2–4 years. In addition to direct savings in labour costs and material damage, you benefit from better space utilisation – a BARBARIC Multilevel system makes optimal use of hall height and saves up to 50% floor space compared to conventional storage.',
                  'Typická návratnost investice je 2–4 roky. Kromě přímých úspor na mzdových nákladech a poškození materiálu profitujete z lepšího využití prostoru – systém BARBARIC Multilevel optimálně využívá výšku haly a šetří až 50 % podlahové plochy oproti konvenčnímu skladování.'
                )}
              </p>
              <p>
                {tr(
                  'Durch die Integration mit ERP-Systemen werden Bestände in Echtzeit verwaltet. Das eliminiert Überbestellungen und verhindert Produktionsstillstände durch fehlende Materialien.',
                  'Through integration with ERP systems, inventory is managed in real time. This eliminates over-ordering and prevents production downtime due to missing materials.',
                  'Díky integraci s ERP systémy jsou zásoby spravovány v reálném čase. To eliminuje nadměrné objednávky a zabraňuje výrobním prostojům kvůli chybějícímu materiálu.'
                )}
              </p>
            </div>
          </div>
        </section>

        {/* ── BARBARIC Systems Overview ── */}
        <section className="pb-16">
          <div className="container-wide">
            <h2 className="text-2xl md:text-3xl font-display font-light text-white mb-8">
              {tr(
                'BARBARIC-Systeme im Überblick',
                'BARBARIC Systems Overview',
                'Přehled systémů BARBARIC'
              )}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {systems.map((system) => (
                <article
                  key={system.title}
                  className="rounded-2xl border border-white/10 bg-dark-card p-6 flex flex-col"
                >
                  <div className="text-xs uppercase tracking-widest text-primary/80 mb-2">
                    {system.subtitle}
                  </div>
                  <h3 className="text-xl font-display font-light text-white mb-3">
                    {system.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed flex-1 mb-5">
                    {system.description}
                  </p>
                  <Link
                    to={buildPath('/barbaric')}
                    className="inline-flex items-center gap-1.5 text-primary text-sm font-medium hover:underline"
                  >
                    {tr('Mehr erfahren', 'Learn more', 'Zjistit více')}
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Use Cases ── */}
        <section className="pb-16">
          <div className="container-wide">
            <h2 className="text-2xl md:text-3xl font-display font-light text-white mb-6">
              {tr('Einsatzbereiche', 'Use Cases', 'Oblasti nasazení')}
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {useCases.map((uc) => (
                <div
                  key={uc}
                  className="rounded-2xl border border-white/10 bg-dark-card px-5 py-4 text-white/80 text-sm"
                >
                  {uc}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="pb-20">
          <div className="container-wide">
            <h2 className="text-2xl md:text-3xl font-display font-light text-white mb-8">
              {tr(
                'Häufige Fragen zur Lagerautomatisierung',
                'Frequently Asked Questions About Warehouse Automation',
                'Časté otázky k automatizaci skladu'
              )}
            </h2>
            <div className="max-w-4xl space-y-3">
              {faqEntries.map((entry, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-dark-card overflow-hidden"
                >
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <h3 className="text-white font-medium text-base pr-4">{entry.question}</h3>
                    <ChevronDown
                      className={`w-5 h-5 text-white/40 shrink-0 transition-transform ${open.includes(index) ? 'rotate-180' : ''}`}
                    />
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
        </section>

        {/* ── CTA ── */}
        <section className="pb-24">
          <div className="container-wide">
            <div className="rounded-2xl border border-white/10 bg-dark-elevated p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
              <div>
                <h3 className="text-2xl font-display font-light text-white mb-2">
                  {tr(
                    'Lagerautomatisierung planen',
                    'Plan your warehouse automation',
                    'Naplánujte automatizaci skladu'
                  )}
                </h3>
                <p className="text-white/70 text-sm">
                  {tr(
                    'Lassen Sie sich unverbindlich beraten – wir analysieren Ihren Materialfluss und empfehlen das passende BARBARIC-System.',
                    'Get a free consultation – we analyse your material flow and recommend the right BARBARIC system.',
                    'Nechte se nezávazně poradit – zanalyzujeme váš materiálový tok a doporučíme vhodný systém BARBARIC.'
                  )}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href={ctaHref} className="btn-primary-dark justify-center">
                  {tr('Beratung anfragen', 'Request consultation', 'Požádat o konzultaci')}
                  <ArrowRight className="w-5 h-5" />
                </a>
                <Link to={buildPath('/barbaric')} className="btn-secondary-dark justify-center">
                  {tr('BARBARIC-Systeme', 'BARBARIC systems', 'Systémy BARBARIC')}
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

export default GuideWarehouseAutomationPage;
