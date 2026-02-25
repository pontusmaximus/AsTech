import { useEffect } from 'react';
import { ArrowUpRight, Flame, Droplets } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../App';
import { translatePageText } from '../i18n/pageTextTranslations';
import ManufacturerHeader from '../components/manufacturer/ManufacturerHeader';

gsap.registerPlugin(ScrollTrigger);

type OttProduct = {
  name: string;
  desc: string;
  type: string;
  specs: string[];
  image: string;
};

const OttPage = () => {
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
    tr('Anfrage OTT', 'Inquiry OTT', 'Poptávka OTT')
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

  const edgebanders: OttProduct[] = [
    {
      name: 'Pacific+',
      image: 'https://www.ottpaul.com/fileadmin/_processed_/c/7/csm_pacific-plus_4a95031bd4.png',
      desc: tr('Kompakte Kantenanleimmaschine für Handwerk und Tischlerei', 'Compact edgebander for craft and carpentry shops', 'Kompaktní olepovačka hran pro řemeslo a truhlářství'),
      type: 'EVA',
      specs: [
        tr('Kantenstärke: 0,4 - 3 mm', 'Edge thickness: 0.4 - 3 mm', 'Tloušťka hrany: 0,4 - 3 mm'),
        tr('Vorschub: 12 m/min', 'Feed speed: 12 m/min', 'Posuv: 12 m/min'),
        tr('Schmelzbehälter: 1,5 kg', 'Melting tank: 1.5 kg', 'Tavná nádoba: 1,5 kg'),
      ],
    },
    {
      name: 'Tornado+',
      image: 'https://www.ottpaul.com/fileadmin/_processed_/b/a/csm_tornado-plus-ansicht-re_207e512b4f.png',
      desc: tr('Leistungsstarke Lösung für mittlere Betriebe', 'Powerful solution for medium-sized operations', 'Výkonné řešení pro střední provozy'),
      type: 'EVA/PUR',
      specs: [
        tr('Kantenstärke: 0,4 - 5 mm', 'Edge thickness: 0.4 - 5 mm', 'Tloušťka hrany: 0,4 - 5 mm'),
        tr('Vorschub: 15 m/min', 'Feed speed: 15 m/min', 'Posuv: 15 m/min'),
        tr('Schmelzbehälter: 2,5 kg', 'Melting tank: 2.5 kg', 'Tavná nádoba: 2,5 kg'),
      ],
    },
    {
      name: 'Flexedge',
      image: 'https://www.ottpaul.com/fileadmin/_processed_/b/e/csm_flex-edge-01-spiegel_f344a91e0b.png',
      desc: tr('Flexible Kantenbearbeitung mit modularer Ausstattung', 'Flexible edgebanding with modular equipment', 'Flexibilní olepování hran s modulární výbavou'),
      type: 'EVA/PUR',
      specs: [
        tr('Kantenstärke: 0,4 - 8 mm', 'Edge thickness: 0.4 - 8 mm', 'Tloušťka hrany: 0,4 - 8 mm'),
        tr('Vorschub: 18 m/min', 'Feed speed: 18 m/min', 'Posuv: 18 m/min'),
        tr('Werkzeugwechsler: 6-fach', 'Tool changer: 6-fold', 'Měnič nástrojů: 6násobný'),
      ],
    },
    {
      name: 'Storm+',
      image: 'https://www.ottpaul.com/fileadmin/_processed_/2/9/csm_storm2020-spiegel-001_4baf02d446.png',
      desc: tr('Hochleistungsmaschine für industrielle Anforderungen', 'High-performance machine for industrial requirements', 'Vysokovýkonný stroj pro průmyslové požadavky'),
      type: 'PUR',
      specs: [
        tr('Kantenstärke: 0,4 - 12 mm', 'Edge thickness: 0.4 - 12 mm', 'Tloušťka hrany: 0,4 - 12 mm'),
        tr('Vorschub: 22 m/min', 'Feed speed: 22 m/min', 'Posuv: 22 m/min'),
        tr('Nullfuge-Technologie', 'Zero-joint technology', 'Technologie nulové spáry'),
      ],
    },
    {
      name: 'Strongedge',
      image: 'https://www.ottpaul.com/fileadmin/_processed_/1/0/csm_strongedge_a4f3c0a00e.png',
      desc: tr('Maximale Stabilität für schwere Kanten', 'Maximum stability for heavy edges', 'Maximální stabilita pro silné hrany'),
      type: 'PUR',
      specs: [
        tr('Kantenstärke: 1 - 20 mm', 'Edge thickness: 1 - 20 mm', 'Tloušťka hrany: 1 - 20 mm'),
        tr('Vorschub: 20 m/min', 'Feed speed: 20 m/min', 'Posuv: 20 m/min'),
        tr('Doppelvorschub', 'Dual feed', 'Dvojitý posuv'),
      ],
    },
    {
      name: 'Topedge',
      image: 'https://www.ottpaul.com/fileadmin/_processed_/e/5/csm_topedge_4c89d6967e.jpg',
      desc: tr('Premium-Lösung mit höchster Präzision', 'Premium solution with highest precision', 'Prémiové řešení s nejvyšší přesností'),
      type: 'PUR/LASER',
      specs: [
        tr('Kantenstärke: 0,4 - 20 mm', 'Edge thickness: 0.4 - 20 mm', 'Tloušťka hrany: 0,4 - 20 mm'),
        tr('Vorschub: 25 m/min', 'Feed speed: 25 m/min', 'Posuv: 25 m/min'),
        tr('Hydrofuse-Technologie', 'Hydrofuse technology', 'Technologie Hydrofuse'),
      ],
    },
    {
      name: 'DoorEdition',
      image: 'https://www.ottpaul.com/fileadmin/_processed_/6/0/csm_Titelseite_Door_MINI__78df2f3ba3.jpg',
      desc: tr('Spezialisiert auf Tür- und Möbelkanten', 'Specialized for door and furniture edges', 'Specializováno na dveřní a nábytkové hrany'),
      type: 'PUR',
      specs: [
        tr('Kantenstärke: 0,4 - 15 mm', 'Edge thickness: 0.4 - 15 mm', 'Tloušťka hrany: 0,4 - 15 mm'),
        tr('Vorschub: 18 m/min', 'Feed speed: 18 m/min', 'Posuv: 18 m/min'),
        tr('3D-Kantenbearbeitung', '3D edge processing', '3D opracování hran'),
      ],
    },
    {
      name: 'CombiMelt',
      image: 'https://www.ottpaul.com/fileadmin/_processed_/5/6/csm_ott-130319-0628-2_f3762079d4.jpg',
      desc: tr('Kombiniert EVA und PUR in einem System', 'Combines EVA and PUR in one system', 'Kombinuje EVA a PUR v jednom systému'),
      type: 'EVA/PUR',
      specs: [
        tr('Kantenstärke: 0,4 - 8 mm', 'Edge thickness: 0.4 - 8 mm', 'Tloušťka hrany: 0,4 - 8 mm'),
        tr('Vorschub: 15 m/min', 'Feed speed: 15 m/min', 'Posuv: 15 m/min'),
        tr('Schnellwechselsystem', 'Quick-change system', 'Systém rychlé výměny'),
      ],
    },
    {
      name: 'bluEdge',
      image: 'https://www.ottpaul.com/fileadmin/_processed_/9/7/csm_blu_edge_hyfuse_on_pacific_in_showroom__1__a1a1e7262f.jpg',
      desc: tr('Einstiegsmodell mit professioneller Ausstattung', 'Entry-level model with professional equipment', 'Vstupní model s profesionální výbavou'),
      type: 'EVA',
      specs: [
        tr('Kantenstärke: 0,4 - 3 mm', 'Edge thickness: 0.4 - 3 mm', 'Tloušťka hrany: 0,4 - 3 mm'),
        tr('Vorschub: 12 m/min', 'Feed speed: 12 m/min', 'Posuv: 12 m/min'),
        tr('Intuitive Bedienung', 'Intuitive operation', 'Intuitivní ovládání'),
      ],
    },
  ];

  const systemSolutions = [
    {
      name: 'TransCompact',
      desc: tr('Kompaktes Transportsystem für kleine bis mittlere Betriebe', 'Compact transport system for small to medium operations', 'Kompaktní transportní systém pro malé až střední provozy'),
      specs: [
        tr('Traglast: 150 kg', 'Payload: 150 kg', 'Nosnost: 150 kg'),
        tr('Geschwindigkeit: 15 m/min', 'Speed: 15 m/min', 'Rychlost: 15 m/min'),
        'Plug & Play Installation',
      ],
    },
    {
      name: 'TransLift',
      desc: tr('Automatisches Hebe- und Transportsystem', 'Automatic lifting and transport system', 'Automatický zvedací a transportní systém'),
      specs: [
        tr('Hubhöhe: 2.000 mm', 'Lifting height: 2,000 mm', 'Výška zdvihu: 2 000 mm'),
        tr('Traglast: 300 kg', 'Payload: 300 kg', 'Nosnost: 300 kg'),
        tr('Integrierte Sicherheitssensoren', 'Integrated safety sensors', 'Integrované bezpečnostní senzory'),
      ],
    },
    {
      name: 'TransEdge',
      desc: tr('Vollautomatische Kantenrückführung', 'Fully automatic edge return system', 'Plně automatické vracení hran'),
      specs: [
        tr('Rückführgeschwindigkeit: 20 m/min', 'Return speed: 20 m/min', 'Rychlost vrácení: 20 m/min'),
        tr('Automatische Kantenzufuhr', 'Automatic edge feeding', 'Automatické podávání hran'),
        'ERP integration',
      ],
    },
  ];

  return (
    <div className="bg-dark min-h-screen pt-24 sm:pt-28 md:pt-32 pb-20">
      <div className="container-wide">
        <ManufacturerHeader
          backLabel={tr('Zurück zur Übersicht', 'Back to overview', 'Zpět na přehled')}
          brandNameForSrOnly="OTT"
          logoSrc="https://stadtkarte.at/wp-content/uploads/2023/10/firmen-Lambach-stadt-OTT.jpg"
          logoAlt="OTT logo"
          logoClassName="h-16 sm:h-20 md:h-24 w-auto object-contain rounded-md"
          introText={tr(
            'Innovative Kantenleimtechnologie mit PUR-Anleimsystemen und LASER Hydrofuse für fugenlose, übergangslose Kantenverbindungen.',
            'Innovative edgebanding technology with PUR gluing systems and LASER Hydrofuse for seamless, jointless edge connections.',
            'Inovativní technologie olepování hran se systémy PUR a LASER Hydrofuse pro bezešvé a plynulé spojení hran.'
          )}
        />

        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="product-item p-8 bg-gradient-to-br from-orange-500/10 to-transparent rounded-2xl border border-orange-500/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                  <Flame className="w-5 h-5 text-orange-500" />
                </div>
                <h3 className="text-xl font-display font-medium text-white">
                  {tr('PUR-Technologie', 'PUR Technology', 'PUR technologie')}
                </h3>
              </div>
              <p className="text-white/50 mb-4">
                {tr(
                  'Polyurethan-Klebstoffe bieten höchste Festigkeit und Temperaturbeständigkeit. Ideal für anspruchsvolle Anwendungen in Küchen- und Möbelbau.',
                  'Polyurethane adhesives provide maximum strength and temperature resistance. Ideal for demanding applications in kitchen and furniture manufacturing.',
                  'Polyuretanová lepidla nabízejí nejvyšší pevnost a tepelnou odolnost. Ideální pro náročné použití v kuchyňském a nábytkářském průmyslu.'
                )}
              </p>
              <ul className="space-y-2 text-sm text-white/40">
                <li>• {tr('Wasser- und hitzebeständig', 'Water and heat resistant', 'Odolné vůči vodě a teplu')}</li>
                <li>• {tr('Extrem hohe Klebekraft', 'Extremely high adhesive strength', 'Extrémně vysoká pevnost lepení')}</li>
                <li>• {tr('Nahezu unsichtbare Klebefuge', 'Almost invisible glue joint', 'Téměř neviditelná lepicí spára')}</li>
              </ul>
            </div>

            <div className="product-item p-8 bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl border border-blue-500/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Droplets className="w-5 h-5 text-blue-500" />
                </div>
                <h3 className="text-xl font-display font-medium text-white">
                  {tr('LASER Hydrofuse', 'LASER Hydrofuse', 'LASER Hydrofuse')}
                </h3>
              </div>
              <p className="text-white/50 mb-4">
                {tr(
                  'Die revolutionäre LASER-Technologie aktiviert die Funktionsschicht der Kante direkt – ohne sichtbare Klebefuge, für perfekte Ästhetik.',
                  'The revolutionary LASER technology activates the functional edge layer directly without a visible glue joint for perfect aesthetics.',
                  'Revoluční technologie LASER aktivuje funkční vrstvu hrany přímo bez viditelné lepicí spáry pro perfektní vzhled.'
                )}
              </p>
              <ul className="space-y-2 text-sm text-white/40">
                <li>• {tr('Völlig unsichtbare Fuge', 'Completely invisible joint', 'Zcela neviditelná spára')}</li>
                <li>• {tr('Kein Klebstoff erforderlich', 'No adhesive required', 'Není potřeba lepidlo')}</li>
                <li>• {tr('Premium-Optik für hochwertige Möbel', 'Premium look for high-end furniture', 'Prémiový vzhled pro kvalitní nábytek')}</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="accent-line" />
            <h2 className="text-2xl font-display font-light text-white">{tr('Kantenleimmaschinen', 'Edgebanding Machines', 'Olepovačky hran')}</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {edgebanders.map((product, index) => (
              <div key={index} className="product-item product-card-dark p-6">
                <div className="mb-4 rounded-xl overflow-hidden border border-white/10 bg-dark-elevated">
                  <img src={product.image} alt={product.name} className="w-full aspect-[4/3] object-cover" loading="lazy" />
                </div>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-display font-medium text-white">{product.name}</h3>
                    <span className="text-xs text-primary">{product.type}</span>
                  </div>
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
            <h2 className="text-2xl font-display font-light text-white">{tr('Systemlösungen & Manipulation', 'System Solutions & Handling', 'Systémová řešení a manipulace')}</h2>
          </div>
          <p className="text-white/50 mb-8 max-w-3xl">
            {tr(
              'Automatisierte Transportsysteme für nahtlose Integration in Ihre Produktionslinie.',
              'Automated transport systems for seamless integration into your production line.',
              'Automatizované transportní systémy pro bezproblémovou integraci do vaší výrobní linky.'
            )}
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {systemSolutions.map((product, index) => (
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

        <div className="product-item p-8 bg-gradient-to-r from-red-600/20 to-transparent rounded-2xl border border-red-500/30">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-display font-medium text-white mb-2">
                {tr('Interesse an OTT Produkten?', 'Interested in OTT products?', 'Máte zájem o produkty OTT?')}
              </h3>
              <p className="text-white/50">
                {tr('Wir beraten Sie gerne zu PUR- und LASER-Technologie.', 'We are happy to advise you on PUR and LASER technology.', 'Rádi vám poradíme s technologií PUR a LASER.')}
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

export default OttPage;
