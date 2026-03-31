import { useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../App';
import { translatePageText } from '../i18n/pageTextTranslations';
import ManufacturerHeader from '../components/manufacturer/ManufacturerHeader';
import { trackEvent } from '../lib/analytics';
import { buildMailto } from '../lib/email';
import SeoHead from '../seo/SeoHead';
import { breadcrumbSchema } from '../seo/structuredData';
import { buildLocalizedPath, CANONICAL_DOMAIN } from '../lib/language';

gsap.registerPlugin(ScrollTrigger);

type MachineProduct = {
  name: string;
  desc: string;
  specs: string[];
  image: string;
  url?: string;
};

const MayerPage = () => {
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
  const breadcrumbs = breadcrumbSchema([
    { name: tr('Startseite', 'Home', 'Domů'), url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, '/')}` },
    { name: tr('Hersteller', 'Manufacturers', 'Výrobci'), url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, '/')}` },
    { name: 'Mayer', url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, '/mayer')}` },
  ]);

  const isExternalUrl = (url: string) => url.startsWith('http');
  const inquiryMail = buildMailto(
    'office@asamer.net',
    tr('Anfrage Mayer', 'Inquiry Mayer', 'Poptávka Mayer')
  );
  const trackBarbaricNavigation = (placement: string, productName?: string) => {
    trackEvent('manufacturer_cross_navigation_click', {
      from_page: 'mayer',
      to_page: 'barbaric',
      placement,
      product_name: productName,
    });
  };

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

  const kappaProducts: MachineProduct[] = [
    {
      name: 'Kappa Automatic 80',
      url: 'https://www.mayersaws.com/de/produkte/druckbalkensaege__plattenaufteilsaege_horizontal_kappa_automatic_80_m583845',
      image: 'https://www.mayersaws.com/WEB/FelderGroup/Machines/Machines/image-thumb__64214__auto_82ff642b6ec54a4dbb4bb21c4d8547d8/plattensaege-kappaautomatic80-mayer-feldergroup.png',
      desc: tr(
        'Kompakte Einstiegslösung für professionellen Plattenzuschnitt',
        'Compact entry-level solution for professional panel cutting',
        'Kompaktní vstupní řešení pro profesionální řezání desek'
      ),
      specs: [
        tr('Schnittlänge: 3.200 mm', 'Cutting length: 3,200 mm', 'Délka řezu: 3 200 mm'),
        tr('Schnitthöhe: 80 mm', 'Cutting height: 80 mm', 'Výška řezu: 80 mm'),
        tr('Vorschubgeschwindigkeit: bis 100 m/min', 'Feed speed: up to 100 m/min', 'Rychlost posuvu: až 100 m/min'),
      ],
    },
    {
      name: 'Kappa Automatic 100',
      image: 'https://www.mayersaws.com/WEB/FelderGroup/Machines/Machines/image-thumb__64216__auto_82ff642b6ec54a4dbb4bb21c4d8547d8/plattensaege-kappaautomatic100-mayer-feldergroup.png',
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
      image: 'https://www.mayersaws.com/WEB/FelderGroup/Machines/Machines/image-thumb__64217__auto_82ff642b6ec54a4dbb4bb21c4d8547d8/plattensaege-kappaautomatic120-mayer-feldergroup.png',
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
      image: 'https://www.mayersaws.com/WEB/FelderGroup/Machines/Machines/image-thumb__64218__auto_82ff642b6ec54a4dbb4bb21c4d8547d8/plattensaege-kappaautomatic140-mayer-feldergroup.png',
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

  const advancedLineProducts: MachineProduct[] = [
    {
      name: 'Advanced Line 100',
      image: 'https://www.mayersaws.com/_default_upload_bucket/image-thumb__65802__auto_82ff642b6ec54a4dbb4bb21c4d8547d8/65801_plattensaege-advanced-line-100-mayer-feldergroup.png',
      desc: tr('Präzisionssäge für Aluminium und NE-Metalle', 'Precision saw for aluminum and non-ferrous metals', 'Přesná pila pro hliník a neželezné kovy'),
      specs: [
        tr('Schnittlänge: 3.200 mm', 'Cutting length: 3,200 mm', 'Délka řezu: 3 200 mm'),
        tr('Schnitthöhe: 100 mm', 'Cutting height: 100 mm', 'Výška řezu: 100 mm'),
        tr('Automatische Winkelverstellung', 'Automatic angle adjustment', 'Automatické nastavení úhlu'),
      ],
    },
    {
      name: 'Advanced Line 130',
      image: 'https://www.mayersaws.com/WEB/FelderGroup/Machines/Machines/image-thumb__49294__auto_82ff642b6ec54a4dbb4bb21c4d8547d8/64926-plattensaege-al130-mayer-feldergroup.png',
      desc: tr('Vielseitige Lösung für Kunststoffbearbeitung', 'Versatile solution for plastic processing', 'Univerzální řešení pro zpracování plastů'),
      specs: [
        tr('Schnittlänge: 3.800 mm', 'Cutting length: 3,800 mm', 'Délka řezu: 3 800 mm'),
        tr('Schnitthöhe: 130 mm', 'Cutting height: 130 mm', 'Výška řezu: 130 mm'),
        tr('Integrierte Absaugung', 'Integrated extraction', 'Integrované odsávání'),
      ],
    },
    {
      name: 'Advanced Line 160',
      image: 'https://www.mayersaws.com/WEB/FelderGroup/Machines/Machines/image-thumb__65807__auto_82ff642b6ec54a4dbb4bb21c4d8547d8/plattensaege-advanced-line-160-mayer-feldergroup-01.png',
      desc: tr('Hochleistungssäge für industrielle Anwendungen', 'High-performance saw for industrial applications', 'Výkonná pila pro průmyslové aplikace'),
      specs: [
        tr('Schnittlänge: 4.300 mm', 'Cutting length: 4,300 mm', 'Délka řezu: 4 300 mm'),
        tr('Schnitthöhe: 160 mm', 'Cutting height: 160 mm', 'Výška řezu: 160 mm'),
        tr('PC-Steuerung mit Touchscreen', 'PC control with touchscreen', 'PC řízení s dotykovým displejem'),
      ],
    },
    {
      name: 'Advanced Line 160 Turn',
      image: 'https://www.mayersaws.com/WEB/FelderGroup/Machines/Machines/image-thumb__49296__auto_82ff642b6ec54a4dbb4bb21c4d8547d8/122778-plattensaege-al160turn-mayer-feldergroup.png',
      desc: tr('Mit automatischer Wendeinheit für beidseitige Bearbeitung', 'With automatic turning unit for double-sided processing', 'S automatickou otočnou jednotkou pro oboustranné zpracování'),
      specs: [
        tr('Schnittlänge: 4.300 mm', 'Cutting length: 4,300 mm', 'Délka řezu: 4 300 mm'),
        tr('Schnitthöhe: 160 mm', 'Cutting height: 160 mm', 'Výška řezu: 160 mm'),
        tr('Automatische Wendeinheit 90°', 'Automatic turning unit 90°', 'Automatická otočná jednotka 90°'),
      ],
    },
    {
      name: 'Advanced Line 200',
      image: 'https://www.mayersaws.com/WEB/FelderGroup/Machines/Machines/image-thumb__49297__auto_82ff642b6ec54a4dbb4bb21c4d8547d8/53826-plattensaege-al200-mayer-feldergroup.png',
      desc: tr('Maximale Leistung für Großformate', 'Maximum performance for large formats', 'Maximální výkon pro velké formáty'),
      specs: [
        tr('Schnittlänge: 5.600 mm', 'Cutting length: 5,600 mm', 'Délka řezu: 5 600 mm'),
        tr('Schnitthöhe: 200 mm', 'Cutting height: 200 mm', 'Výška řezu: 200 mm'),
        tr('Doppelte Vorschubgeschwindigkeit', 'Double feed speed', 'Dvojnásobná rychlost posuvu'),
      ],
    },
    {
      name: 'Advanced Line 250',
      image: 'https://www.mayersaws.com/WEB/FelderGroup/Machines/Machines/image-thumb__49298__auto_82ff642b6ec54a4dbb4bb21c4d8547d8/53827-plattensaege-al250-mayer-feldergroup.png',
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
      url: '/barbaric',
      desc: tr(
        'Automatisierte Materialzufuhr für Plattenaufteilsägen – auch für Hersteller außerhalb von MAYER.',
        'Automated material feed for panel saws - also for manufacturers beyond MAYER.',
        'Automatizované podávání materiálu pro pily na desky - také pro výrobce mimo MAYER.'
      ),
      specs: [
        tr('Schnittstellen zu gängigen Sägetypen', 'Interfaces to common saw types', 'Rozhraní pro běžné typy pil'),
        tr('Passend für Plattenaufteilsägen vieler Hersteller', 'Suitable for panel saws from many manufacturers', 'Vhodné pro pily na desky mnoha výrobců'),
        tr('Präzise Positionierung und stabiler Materialfluss', 'Precise positioning and stable material flow', 'Přesné polohování a stabilní tok materiálu'),
      ],
    },
    {
      name: 'Vollautomatische Flächenlager',
      url: '/barbaric',
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
    <>
      <SeoHead routeKey="mayer" structuredData={[breadcrumbs]} />
      <div className="bg-dark min-h-screen pt-24 sm:pt-28 md:pt-32 pb-20">
        <div className="container-wide">
        <ManufacturerHeader
          backLabel={tr('Zurück zur Übersicht', 'Back to overview', 'Zpět na přehled')}
          brandNameForSrOnly="Mayer"
          logoSrc="https://www.mayersaws.com/mayer/images/mayer_saws_4c.svg"
          logoAlt="Mayer logo"
          logoClassName="h-16 md:h-20 w-auto object-contain"
          logoWrapperClassName="bg-white text-dark border-transparent"
          introText={tr(
            'Seit über 70 Jahren stehen höchste Qualität und Präzision im Plattenzuschnitt im Fokus. Die Kappa Automatic und Advanced Line Serien setzen Maßstäbe in der Industrie.',
            'For more than 70 years, top quality and precision in panel cutting have been the focus. The Kappa Automatic and Advanced Line series set standards in the industry.',
            'Již více než 70 let jsou středem pozornosti nejvyšší kvalita a přesnost při řezání desek. Řady Kappa Automatic a Advanced Line určují průmyslové standardy.'
          )}
        />

        <section className="mb-14">
          <div className="product-item rounded-2xl border border-primary/30 bg-primary/10 p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
              <div>
                <h2 className="text-2xl font-display font-light text-white mb-2">
                  {tr(
                    'MAYER + BARBARIC als Komplettlösung',
                    'MAYER + BARBARIC as a complete solution',
                    'MAYER + BARBARIC jako kompletní řešení'
                  )}
                </h2>
                <p className="text-white/70 text-sm leading-relaxed">
                  {tr(
                    'Für Beschickung, Lager und Materialfluss arbeiten wir mit BARBARIC-Lösungen, abgestimmt auf Plattenaufteilsägen.',
                    'For feeding, storage, and material flow we use BARBARIC solutions aligned with panel saw operations.',
                    'Pro podávání, skladování a tok materiálu využíváme řešení BARBARIC sladěná s provozem pil na desky.'
                  )}
                </p>
              </div>
                <Link
                  to={buildPath('/barbaric')}
                className="btn-outline-dark sm:whitespace-nowrap"
                onClick={() => trackBarbaricNavigation('complete_solution_cta')}
              >
                {tr('Zu BARBARIC', 'Go to BARBARIC', 'Přejít na BARBARIC')}
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

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
                <div className="mb-4 rounded-xl overflow-hidden border border-white/10 bg-dark-elevated">
                  <img src={product.image} alt={product.name} className="w-full aspect-[4/3] object-cover" loading="lazy" />
                </div>
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-display font-medium text-white">{product.name}</h3>
                  {product.url ? (
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-white/30 hover:text-primary transition-colors"
                      aria-label={tr('Produkt öffnen', 'Open product', 'Otevřít produkt')}
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  ) : (
                    <ArrowUpRight className="w-5 h-5 text-white/30" />
                  )}
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
                <div className="mb-4 rounded-xl overflow-hidden border border-white/10 bg-dark-elevated">
                  <img src={product.image} alt={product.name} className="w-full aspect-[4/3] object-cover" loading="lazy" />
                </div>
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
                  {product.url ? (
                    isExternalUrl(product.url) ? (
                      <a
                        href={product.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-white/30 hover:text-primary transition-colors"
                        aria-label={tr('Produkt öffnen', 'Open product', 'Otevřít produkt')}
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </a>
                    ) : (
                      <Link
                        to={product.url}
                        className="text-white/30 hover:text-primary transition-colors"
                        aria-label={tr('Produkt öffnen', 'Open product', 'Otevřít produkt')}
                        onClick={() => trackBarbaricNavigation('automation_product_icon', product.name)}
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </Link>
                    )
                  ) : (
                    <ArrowUpRight className="w-5 h-5 text-white/30" />
                  )}
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
            <div className="flex flex-col items-start gap-3">
                <Link
                  to={buildPath('/barbaric')}
                className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-primary transition-colors"
                onClick={() => trackBarbaricNavigation('footer_cta')}
              >
                {tr('BARBARIC Handling ansehen', 'View BARBARIC handling', 'Zobrazit BARBARIC manipulaci')}
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <a href={inquiryMail} className="btn-primary-dark sm:whitespace-nowrap">
                {tr('Anfrage senden', 'Send inquiry', 'Odeslat poptávku')}
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default MayerPage;
