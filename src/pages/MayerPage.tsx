import { useEffect } from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../App';

gsap.registerPlugin(ScrollTrigger);

const MayerPage = () => {
  const { lang } = useLanguage();
  const locale = lang === 'de' || lang === 'en' || lang === 'cz' ? lang : 'en';
  const tr = (de: string, en: string, cz: string) => (
    locale === 'de' ? de : locale === 'cz' ? cz : en
  );
  const inquiryMail = `mailto:office@asamer.net?subject=${encodeURIComponent(
    tr('Anfrage Mayer', 'Inquiry Mayer', 'Poptávka Mayer')
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

  const kappaProducts = [
    {
      name: 'Kappa Automatic 100',
      desc: tr(
        'Kompakte Einstiegslösung für professionellen Plattenzuschnitt',
        'Compact entry-level solution for professional panel cutting',
        'Kompaktní vstupní řešení pro profesionální řezání desek'
      ),
      specs: [
        tr('Schnittlänge: 3.200 mm', 'Cutting length: 3,200 mm', 'Délka řezu: 3 200 mm'),
        tr('Schnitthöhe: 100 mm', 'Cutting height: 100 mm', 'Výška řezu: 100 mm'),
        tr('Vorschubgeschwindigkeit: bis 100 m/min', 'Feed speed: up to 100 m/min', 'Rychlost posuvu: až 100 m/min'),
      ],
    },
    {
      name: 'Kappa Automatic 120',
      desc: tr(
        'Erweiterte Kapazität für mittlere Produktionsvolumen',
        'Extended capacity for medium production volumes',
        'Rozšířená kapacita pro střední objemy výroby'
      ),
      specs: [
        tr('Schnittlänge: 3.800 mm', 'Cutting length: 3,800 mm', 'Délka řezu: 3 800 mm'),
        tr('Schnitthöhe: 120 mm', 'Cutting height: 120 mm', 'Výška řezu: 120 mm'),
        tr('Vorschubgeschwindigkeit: bis 120 m/min', 'Feed speed: up to 120 m/min', 'Rychlost posuvu: až 120 m/min'),
      ],
    },
    {
      name: 'Kappa Automatic 140',
      desc: tr(
        'Höchste Präzision für industrielle Serienfertigung',
        'Maximum precision for industrial series production',
        'Maximální přesnost pro průmyslovou sériovou výrobu'
      ),
      specs: [
        tr('Schnittlänge: 4.300 mm', 'Cutting length: 4,300 mm', 'Délka řezu: 4 300 mm'),
        tr('Schnitthöhe: 140 mm', 'Cutting height: 140 mm', 'Výška řezu: 140 mm'),
        tr('Vorschubgeschwindigkeit: bis 150 m/min', 'Feed speed: up to 150 m/min', 'Rychlost posuvu: až 150 m/min'),
      ],
    },
  ];

  const advancedLineProducts = [
    {
      name: 'Advanced Line 100',
      desc: tr('Präzisionssäge für Aluminium und NE-Metalle', 'Precision saw for aluminum and non-ferrous metals', 'Přesná pila pro hliník a neželezné kovy'),
      specs: [
        tr('Schnittlänge: 3.200 mm', 'Cutting length: 3,200 mm', 'Délka řezu: 3 200 mm'),
        tr('Schnitthöhe: 100 mm', 'Cutting height: 100 mm', 'Výška řezu: 100 mm'),
        tr('Automatische Winkelverstellung', 'Automatic angle adjustment', 'Automatické nastavení úhlu'),
      ],
    },
    {
      name: 'Advanced Line 130',
      desc: tr('Vielseitige Lösung für Kunststoffbearbeitung', 'Versatile solution for plastic processing', 'Univerzální řešení pro zpracování plastů'),
      specs: [
        tr('Schnittlänge: 3.800 mm', 'Cutting length: 3,800 mm', 'Délka řezu: 3 800 mm'),
        tr('Schnitthöhe: 130 mm', 'Cutting height: 130 mm', 'Výška řezu: 130 mm'),
        tr('Integrierte Absaugung', 'Integrated extraction', 'Integrované odsávání'),
      ],
    },
    {
      name: 'Advanced Line 160',
      desc: tr('Hochleistungssäge für industrielle Anwendungen', 'High-performance saw for industrial applications', 'Výkonná pila pro průmyslové aplikace'),
      specs: [
        tr('Schnittlänge: 4.300 mm', 'Cutting length: 4,300 mm', 'Délka řezu: 4 300 mm'),
        tr('Schnitthöhe: 160 mm', 'Cutting height: 160 mm', 'Výška řezu: 160 mm'),
        tr('PC-Steuerung mit Touchscreen', 'PC control with touchscreen', 'PC řízení s dotykovým displejem'),
      ],
    },
    {
      name: 'Advanced Line 160 Turn',
      desc: tr('Mit automatischer Wendeinheit für beidseitige Bearbeitung', 'With automatic turning unit for double-sided processing', 'S automatickou otočnou jednotkou pro oboustranné zpracování'),
      specs: [
        tr('Schnittlänge: 4.300 mm', 'Cutting length: 4,300 mm', 'Délka řezu: 4 300 mm'),
        tr('Schnitthöhe: 160 mm', 'Cutting height: 160 mm', 'Výška řezu: 160 mm'),
        tr('Automatische Wendeinheit 90°', 'Automatic turning unit 90°', 'Automatická otočná jednotka 90°'),
      ],
    },
    {
      name: 'Advanced Line 200',
      desc: tr('Maximale Leistung für Großformate', 'Maximum performance for large formats', 'Maximální výkon pro velké formáty'),
      specs: [
        tr('Schnittlänge: 5.600 mm', 'Cutting length: 5,600 mm', 'Délka řezu: 5 600 mm'),
        tr('Schnitthöhe: 200 mm', 'Cutting height: 200 mm', 'Výška řezu: 200 mm'),
        tr('Doppelte Vorschubgeschwindigkeit', 'Double feed speed', 'Dvojnásobná rychlost posuvu'),
      ],
    },
    {
      name: 'Advanced Line 250',
      desc: tr('Das Flaggschiff für höchste Anforderungen', 'Flagship model for top-level requirements', 'Vlajkový model pro nejnáročnější požadavky'),
      specs: [
        tr('Schnittlänge: 7.200 mm', 'Cutting length: 7,200 mm', 'Délka řezu: 7 200 mm'),
        tr('Schnitthöhe: 250 mm', 'Cutting height: 250 mm', 'Výška řezu: 250 mm'),
        tr('Vollautomatische Bedienung', 'Fully automatic operation', 'Plně automatické ovládání'),
      ],
    },
  ];

  const automationProducts = [
    {
      name: 'Vakuumbeschickung mit Linienportal',
      desc: tr(
        'Automatisierte Materialzufuhr für kontinuierliche Produktion',
        'Automated material feed for continuous production',
        'Automatizované podávání materiálu pro kontinuální výrobu'
      ),
      specs: [
        tr('Traglast: bis 500 kg', 'Payload: up to 500 kg', 'Nosnost: až 500 kg'),
        tr('Positioniergenauigkeit: ±0,1 mm', 'Positioning accuracy: ±0.1 mm', 'Přesnost polohování: ±0,1 mm'),
        tr('Integration in bestehende Sägen', 'Integration into existing saws', 'Integrace do stávajících pil'),
      ],
    },
    {
      name: 'Vollautomatische Flächenlager',
      desc: tr(
        'Intelligente Lagerung und Kommissionierung von Plattenware',
        'Intelligent storage and picking of panel material',
        'Inteligentní skladování a kompletace deskového materiálu'
      ),
      specs: [
        tr('Kapazität: bis 500 Platten', 'Capacity: up to 500 panels', 'Kapacita: až 500 desek'),
        tr('Chaotische Lagerung möglich', 'Chaotic storage possible', 'Možné chaotické skladování'),
        tr('Verbindung zu ERP-Systemen', 'Connection to ERP systems', 'Napojení na ERP systémy'),
      ],
    },
  ];

  return (
    <div className="bg-dark min-h-screen pt-32 pb-20">
      <div className="container-wide">
        <a href="/" className="page-header inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" />
          {tr('Zurück zur Übersicht', 'Back to overview', 'Zpět na přehled')}
        </a>

        <div className="page-header mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
              <span className="text-primary font-display font-bold text-xl">M</span>
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-primary">{tr('Hersteller', 'Manufacturer', 'Výrobce')}</span>
              <h1 className="text-4xl md:text-5xl font-display font-light text-white">Mayer</h1>
            </div>
          </div>
          <p className="text-xl text-white/50 max-w-2xl">
            {tr(
              'Seit über 70 Jahren steht Mayer für höchste Qualität und Präzision im Plattenzuschnitt. Die Kappa Automatic und Advanced Line Serien setzen Maßstäbe in der Industrie.',
              'For more than 70 years, Mayer has stood for top quality and precision in panel cutting. The Kappa Automatic and Advanced Line series set standards in the industry.',
              'Již více než 70 let je Mayer synonymem nejvyšší kvality a přesnosti při řezání desek. Řady Kappa Automatic a Advanced Line určují průmyslové standardy.'
            )}
          </p>
        </div>

        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="accent-line" />
            <h2 className="text-2xl font-display font-light text-white">Kappa Automatic {tr('Serie', 'Series', 'řada')}</h2>
          </div>
          <p className="text-white/50 mb-8 max-w-3xl">
            {tr(
              'Horizontale Plattenaufteilsägen für professionellen Zuschnitt. Das Mayer-Einstiegsmodell für den professionellen Plattenzuschnitt setzt neue Maßstäbe in der Kompaktklasse.',
              'Horizontal panel saws for professional cutting. Mayer\'s entry-level model for professional panel cutting sets new standards in the compact class.',
              'Horizontální pily na desky pro profesionální řezání. Vstupní model Mayer pro profesionální řezání desek stanovuje nové standardy v kompaktní třídě.'
            )}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {kappaProducts.map((product, index) => (
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
            <h2 className="text-2xl font-display font-light text-white">Advanced Line {tr('Serie', 'Series', 'řada')}</h2>
          </div>
          <p className="text-white/50 mb-8 max-w-3xl">
            {tr(
              'Die Advanced Line ist das Resultat jahrzehntelanger Erfahrung im Bereich des Aluminium-, Kunststoff- und Holzzuschnittes und überzeugt durch höchste Präzision und Schnittgenauigkeit.',
              'The Advanced Line is the result of decades of experience in cutting aluminum, plastic, and wood, and impresses with maximum precision and cutting accuracy.',
              'Advanced Line je výsledkem desetiletí zkušeností v oblasti řezání hliníku, plastů a dřeva a přesvědčí nejvyšší přesností i kvalitou řezu.'
            )}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advancedLineProducts.map((product, index) => (
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
            <h2 className="text-2xl font-display font-light text-white">{tr('Beschickung & Lagertechnologie', 'Feeding & Storage Technology', 'Podávání a skladovací technologie')}</h2>
          </div>
          <p className="text-white/50 mb-8 max-w-3xl">
            {tr(
              'Automatisieren Sie Ihre Materialzufuhr und Lagerverwaltung für maximale Effizienz.',
              'Automate your material feed and storage management for maximum efficiency.',
              'Automatizujte podávání materiálu a správu skladu pro maximální efektivitu.'
            )}
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {automationProducts.map((product, index) => (
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

        <div className="product-item p-8 bg-gradient-to-r from-primary/20 to-transparent rounded-2xl border border-primary/30">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-display font-medium text-white mb-2">
                {tr('Interesse an Mayer Produkten?', 'Interested in Mayer products?', 'Máte zájem o produkty Mayer?')}
              </h3>
              <p className="text-white/50">
                {tr(
                  'Wir beraten Sie gerne und erstellen Ihnen ein individuelles Angebot.',
                  'We are happy to advise you and prepare an individual offer.',
                  'Rádi vám poradíme a připravíme individuální nabídku.'
                )}
              </p>
            </div>
            <a href={inquiryMail} className="btn-primary-dark whitespace-nowrap">
              {tr('Anfrage senden', 'Send inquiry', 'Odeslat poptávku')}
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MayerPage;
