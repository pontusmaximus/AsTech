import { useEffect } from 'react';
import { ArrowLeft, ArrowUpRight, Boxes, GripVertical } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../App';
import { translatePageText } from '../i18n/pageTextTranslations';

gsap.registerPlugin(ScrollTrigger);

const BarbaricPage = () => {
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
  const inquiryMail = `mailto:office@asamer.net?subject=${encodeURIComponent(
    tr('Anfrage BARBARIC', 'Inquiry BARBARIC', 'Poptávka BARBARIC')
  )}`;

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      gsap.fromTo('.page-header',
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
      );

      gsap.utils.toArray<HTMLElement>('.product-item').forEach((item, i) => {
        gsap.fromTo(item,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            delay: i * 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  const storageSystems = [
    {
      name: 'Flächenlager Standard',
      desc: tr('Automatische Lagerung und Bereitstellung von Plattenware', 'Automatic storage and retrieval of panel material', 'Automatické skladování a vyskladnění deskového materiálu'),
      specs: [
        tr('Kapazität: bis 500 Platten', 'Capacity: up to 500 panels', 'Kapacita: až 500 desek'),
        tr('Plattenformat: bis 4.000 x 2.000 mm', 'Panel format: up to 4,000 x 2,000 mm', 'Formát desek: až 4 000 x 2 000 mm'),
        tr('Umlaufzeit: < 2 Minuten', 'Cycle time: < 2 minutes', 'Doba cyklu: < 2 minuty'),
        tr('Chaotische oder definierte Lagerung', 'Chaotic or fixed storage logic', 'Chaotické nebo definované skladování'),
      ],
    },
    {
      name: 'Flächenlager XL',
      desc: tr('Großvolumige Lösung für industrielle Produktion', 'High-volume solution for industrial production', 'Velkokapacitní řešení pro průmyslovou výrobu'),
      specs: [
        tr('Kapazität: bis 2.000 Platten', 'Capacity: up to 2,000 panels', 'Kapacita: až 2 000 desek'),
        tr('Plattenformat: bis 7.000 x 2.500 mm', 'Panel format: up to 7,000 x 2,500 mm', 'Formát desek: až 7 000 x 2 500 mm'),
        tr('Mehrfachentnahme möglich', 'Multiple retrieval possible', 'Možný vícenásobný odběr'),
        tr('Vollautomatische Kommissionierung', 'Fully automatic picking', 'Plně automatická kompletace'),
      ],
    },
    {
      name: 'Chaotisches Lagersystem',
      desc: tr('Optimale Flächennutzung durch intelligente Software', 'Optimal space usage through intelligent software', 'Optimální využití plochy pomocí inteligentního softwaru'),
      specs: [
        tr('Dynamische Plattenzuordnung', 'Dynamic panel allocation', 'Dynamické přiřazování desek'),
        'ERP integration',
        tr('Bestandsmanagement in Echtzeit', 'Real-time inventory management', 'Správa zásob v reálném čase'),
        tr('Bis zu 40% mehr Kapazität', 'Up to 40% more capacity', 'Až o 40 % vyšší kapacita'),
      ],
    },
  ];

  const vacuumSystems = [
    {
      name: 'Vakuumheber Basic',
      desc: tr('Manuelle Handhabung für Werkstatt und Tischlerei', 'Manual handling for workshop and carpentry', 'Ruční manipulace pro dílnu a truhlářství'),
      specs: [
        tr('Traglast: bis 200 kg', 'Payload: up to 200 kg', 'Nosnost: až 200 kg'),
        tr('Saugscheiben: 4-8 Stück', 'Suction pads: 4-8 units', 'Přísavky: 4-8 ks'),
        tr('Drehbar: 360°', 'Rotatable: 360°', 'Otáčení: 360°'),
        tr('Neigbar: 90°', 'Tiltable: 90°', 'Naklápění: 90°'),
      ],
    },
    {
      name: 'Vakuumheber Pro',
      desc: tr('Professionelle Lösung mit erweiterten Funktionen', 'Professional solution with advanced features', 'Profesionální řešení s rozšířenými funkcemi'),
      specs: [
        tr('Traglast: bis 500 kg', 'Payload: up to 500 kg', 'Nosnost: až 500 kg'),
        tr('Saugscheiben: 6-12 Stück', 'Suction pads: 6-12 units', 'Přísavky: 6-12 ks'),
        tr('Elektrische Neigung', 'Electric tilting', 'Elektrické naklápění'),
        tr('Sicherheitswarnsystem', 'Safety warning system', 'Bezpečnostní výstražný systém'),
      ],
    },
    {
      name: 'Vakuum-Portalsystem',
      desc: tr('Vollautomatische Beschickung mit Linienportal', 'Fully automatic feeding with gantry system', 'Plně automatické podávání s portálovým systémem'),
      specs: [
        tr('Traglast: bis 800 kg', 'Payload: up to 800 kg', 'Nosnost: až 800 kg'),
        tr('Positioniergenauigkeit: ±0,5 mm', 'Positioning accuracy: ±0.5 mm', 'Přesnost polohování: ±0,5 mm'),
        tr('Geschwindigkeit: bis 120 m/min', 'Speed: up to 120 m/min', 'Rychlost: až 120 m/min'),
        tr('Integration in Sägen', 'Integration into saws', 'Integrace do pil'),
      ],
    },
  ];

  const handlingSystems = [
    {
      name: 'Pufferspeicher',
      desc: tr('Zwischenpuffer für kontinuierliche Produktion', 'Buffer storage for continuous production', 'Mezisklad pro kontinuální výrobu'),
      specs: [
        tr('Kapazität: 10-50 Platten', 'Capacity: 10-50 panels', 'Kapacita: 10-50 desek'),
        tr('Automatische Zuführung', 'Automatic feeding', 'Automatické podávání'),
        'FIFO control',
      ],
    },
    {
      name: 'Rückführanlage',
      desc: tr('Automatische Rückführung von Restplatten', 'Automatic return of residual panels', 'Automatické vracení zbytkových desek'),
      specs: [
        tr('Restplattenmanagement', 'Residual panel management', 'Správa zbytkových desek'),
        tr('Automatische Sortierung', 'Automatic sorting', 'Automatické třídění'),
        'ERP integration',
      ],
    },
    {
      name: 'Krananlagen',
      desc: tr('Brückenkrane für schwere Lasten', 'Bridge cranes for heavy loads', 'Mostové jeřáby pro těžká břemena'),
      specs: [
        tr('Traglast: bis 5.000 kg', 'Payload: up to 5,000 kg', 'Nosnost: až 5 000 kg'),
        tr('Steuerung: Funk oder Kabel', 'Control: radio or cable', 'Ovládání: rádiové nebo kabelové'),
        tr('Sicherheitssysteme', 'Safety systems', 'Bezpečnostní systémy'),
      ],
    },
  ];

  const benefits = [
    {
      value: '40%',
      label: tr('mehr Lagerkapazität', 'more storage capacity', 'vyšší skladovací kapacita'),
      desc: tr('Durch chaotische Lagerung', 'Through chaotic storage', 'Díky chaotickému skladování'),
    },
    {
      value: '2x',
      label: tr('schneller', 'faster', 'rychlejší'),
      desc: tr('Kommissionierung vs. manuell', 'Picking vs. manual handling', 'Kompletace vs. ruční práce'),
    },
    {
      value: '99.9%',
      label: tr('Genauigkeit', 'accuracy', 'přesnost'),
      desc: tr('Bestandsverwaltung', 'inventory management', 'správa zásob'),
    },
    {
      value: '1',
      label: tr('Mitarbeiter', 'operator', 'pracovník'),
      desc: tr('Statt 3 für Manipulation', 'instead of 3 for handling', 'místo 3 pro manipulaci'),
    },
  ];

  return (
    <div className="bg-dark min-h-screen pt-24 sm:pt-28 md:pt-32 pb-20">
      <div className="container-wide">
        <a href="/" className="page-header inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" />
          {tr('Zurück zur Übersicht', 'Back to overview', 'Zpět na přehled')}
        </a>

        <div className="page-header mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
              <span className="text-orange-500 font-display font-bold text-xl">B</span>
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-orange-500">{tr('Hersteller', 'Manufacturer', 'Výrobce')}</span>
              <h1 className="text-4xl md:text-5xl font-display font-light text-white">BARBARIC</h1>
            </div>
          </div>
          <p className="text-xl text-white/50 max-w-2xl">
            {tr(
              'Made in Austria – BARBARIC bietet Automatisierungs- und Handlinglösungen vom manuellen Vakuumheber bis zum vollautomatischen Flächenlager.',
              'Made in Austria - BARBARIC offers automation and handling solutions from manual vacuum lifters to fully automatic panel storage systems.',
              'Made in Austria - BARBARIC nabízí automatizační a manipulační řešení od ručních vakuových zvedáků až po plně automatické plošné sklady.'
            )}
          </p>
        </div>

        <div className="product-item mb-16 flex items-center gap-4 p-6 bg-gradient-to-r from-orange-500/10 to-transparent rounded-xl border border-orange-500/20">
          <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center">
            <span className="text-2xl">🇦🇹</span>
          </div>
          <div>
            <h3 className="text-white font-medium">{tr('Made in Austria', 'Made in Austria', 'Vyrobeno v Rakousku')}</h3>
            <p className="text-white/50 text-sm">
              {tr(
                'Höchste Qualität und Präzision – entwickelt und gefertigt in Österreich',
                'Highest quality and precision - developed and manufactured in Austria',
                'Nejvyšší kvalita a přesnost - vyvinuto a vyrobeno v Rakousku'
              )}
            </p>
          </div>
        </div>

        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="accent-line" />
            <Boxes className="w-5 h-5 text-primary" />
            <h2 className="text-2xl font-display font-light text-white">{tr('Flächenlager', 'Panel Storage Systems', 'Plošné sklady')}</h2>
          </div>
          <p className="text-white/50 mb-8 max-w-3xl">
            {tr(
              'Vollautomatische Lagersysteme für effiziente Materialflüsse. Von der Einlagerung bis zur Kommissionierung – alles automatisiert.',
              'Fully automatic storage systems for efficient material flow. From storage to picking - everything is automated.',
              'Plně automatické skladové systémy pro efektivní tok materiálu. Od naskladnění po kompletaci - vše automatizováno.'
            )}
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {storageSystems.map((product, index) => (
              <div key={index} className="product-item product-card-dark p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-display font-medium text-white">{product.name}</h3>
                  <ArrowUpRight className="w-5 h-5 text-white/30" />
                </div>
                <p className="text-white/50 text-sm mb-4">{product.desc}</p>
                <ul className="space-y-2">
                  {product.specs.map((spec, i) => (
                    <li key={i} className="text-xs text-white/40 flex items-center gap-2">
                      <span className="w-1 h-1 bg-primary rounded-full" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="accent-line" />
            <GripVertical className="w-5 h-5 text-primary" />
            <h2 className="text-2xl font-display font-light text-white">{tr('Vakuumhandling', 'Vacuum Handling', 'Vakuová manipulace')}</h2>
          </div>
          <p className="text-white/50 mb-8 max-w-3xl">
            {tr(
              'Effiziente Handhabung von schweren Platten – mit höchster Ergonomie und ohne körperliche Anstrengung.',
              'Efficient handling of heavy panels with excellent ergonomics and minimal physical effort.',
              'Efektivní manipulace s těžkými deskami s maximální ergonomií a bez fyzické námahy.'
            )}
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {vacuumSystems.map((product, index) => (
              <div key={index} className="product-item product-card-dark p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-display font-medium text-white">{product.name}</h3>
                  <ArrowUpRight className="w-5 h-5 text-white/30" />
                </div>
                <p className="text-white/50 text-sm mb-4">{product.desc}</p>
                <ul className="space-y-2">
                  {product.specs.map((spec, i) => (
                    <li key={i} className="text-xs text-white/40 flex items-center gap-2">
                      <span className="w-1 h-1 bg-primary rounded-full" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="accent-line" />
            <h2 className="text-2xl font-display font-light text-white">{tr('Zusätzliche Handlinglösungen', 'Additional Handling Solutions', 'Další manipulační řešení')}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {handlingSystems.map((product, index) => (
              <div key={index} className="product-item product-card-dark p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-display font-medium text-white">{product.name}</h3>
                  <ArrowUpRight className="w-5 h-5 text-white/30" />
                </div>
                <p className="text-white/50 text-sm mb-4">{product.desc}</p>
                <ul className="space-y-2">
                  {product.specs.map((spec, i) => (
                    <li key={i} className="text-xs text-white/40 flex items-center gap-2">
                      <span className="w-1 h-1 bg-primary rounded-full" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((stat, index) => (
              <div key={index} className="product-item text-center p-6 bg-dark-card rounded-2xl border border-white/5">
                <div className="text-4xl font-display font-bold text-orange-500 mb-2">{stat.value}</div>
                <div className="text-white font-medium mb-1">{stat.label}</div>
                <div className="text-white/40 text-sm">{stat.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <div className="product-item p-8 bg-gradient-to-r from-orange-500/20 to-transparent rounded-2xl border border-orange-500/30">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-display font-medium text-white mb-2">
                {tr('Interesse an BARBARIC Produkten?', 'Interested in BARBARIC products?', 'Máte zájem o produkty BARBARIC?')}
              </h3>
              <p className="text-white/50">
                {tr(
                  'Wir planen mit Ihnen die optimale Handling-Lösung für Ihre Produktion.',
                  'We work with you to plan the optimal handling solution for your production.',
                  'Společně s vámi navrhneme optimální manipulační řešení pro vaši výrobu.'
                )}
              </p>
            </div>
            <a href={inquiryMail} className="btn-primary-dark sm:whitespace-nowrap">
              {tr('Anfrage senden', 'Send inquiry', 'Odeslat poptávku')}
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarbaricPage;
