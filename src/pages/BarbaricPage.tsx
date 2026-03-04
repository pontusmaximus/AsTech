import { useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../App';
import { translatePageText } from '../i18n/pageTextTranslations';
import ManufacturerHeader from '../components/manufacturer/ManufacturerHeader';
import SeoHead from '../seo/SeoHead';

gsap.registerPlugin(ScrollTrigger);

type BarbaricProduct = {
  name: string;
  image: string;
  url: string;
  desc: string;
  specs: string[];
  extraLink?: {
    href: string;
    label: string;
  };
};

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

  const automationProducts: BarbaricProduct[] = [
    {
      name: 'Flächenlager',
      image: 'https://www.barbaric.at/fileadmin/_processed_/2/e/csm_CSF_Prof_Akkordeon_51f9e20cc9.png',
      url: 'https://www.barbaric.at/flaechenlager/',
      desc: tr(
        'Vollautomatische Lagerung und Kommissionierung von Platten mit hoher Transparenz im Materialfluss.',
        'Fully automatic storage and picking of panels with high material-flow transparency.',
        'Plně automatické skladování a kompletace desek s vysokou transparentností toku materiálu.'
      ),
      specs: [
        tr('Ein Lagerplatz pro Platte für klare Bestandsführung', 'One storage position per panel for clear stock control', 'Jedna skladová pozice na desku pro přehledné řízení zásob'),
        tr('Optimale Flächennutzung und hohe Prozesssicherheit', 'Optimized space usage and high process reliability', 'Optimální využití plochy a vysoká spolehlivost procesů'),
        tr('ERP-Schnittstelle für laufenden Bestandsüberblick', 'ERP interface for continuous inventory visibility', 'ERP rozhraní pro průběžný přehled o zásobách'),
      ],
    },
    {
      name: 'Nesting Picker',
      image: 'https://www.barbaric.at/fileadmin/_processed_/9/3/csm_Nesting-Picker_web01_0adfb35b3b.png',
      url: 'https://www.barbaric.at/nesting-picker/',
      desc: tr(
        'Automatisches Abstapeln von Nesting-Teilen mit weniger Fehlern und schonender Teilehandhabung.',
        'Automated stacking of nesting parts with fewer errors and gentle part handling.',
        'Automatické stohování nesting dílů s menším počtem chyb a šetrnou manipulací.'
      ),
      specs: [
        tr('Reduziert Beschädigungen und manuelle Fehlerquellen', 'Reduces damage and manual error sources', 'Snižuje poškození a manuální chybovost'),
        tr('Sortiert Bauteile und markiert Leimflächen softwaregestützt', 'Classifies parts and marks glue areas through software', 'Softwarově třídí díly a označuje lepicí plochy'),
        tr('Transportschutz durch Folierung möglich', 'Transport protection via foil application possible', 'Možná ochrana při transportu pomocí fólie'),
      ],
    },
    {
      name: tr('Beschickung für Plattenaufteilsägen', 'Feeding for panel saws', 'Podávání pro pily na desky'),
      image: 'https://www.barbaric.at/fileadmin/_processed_/e/b/csm_Barbaric_LCV_Performance_Layout01_c1dad1eb46.jpg',
      url: 'https://www.barbaric.at/beschickung/',
      desc: tr(
        'Automatische Beschickung für Plattenaufteilsägen mit präziser Positionierung und hoher Taktstabilität.',
        'Automatic feeding for panel saws with precise positioning and stable cycle performance.',
        'Automatické podávání pro pily na desky s přesným polohováním a stabilním taktem.'
      ),
      specs: [
        tr('Passend für Sägen aller gängigen Hersteller', 'Suitable for saws from all common manufacturers', 'Vhodné pro pily všech běžných výrobců'),
        tr('Schnittstellen zu allen gängigen Sägetypen', 'Interfaces to all common saw types', 'Rozhraní pro všechny běžné typy pil'),
        tr('Reibungsloses Handling bei hoher Prozesssicherheit', 'Smooth handling with high process reliability', 'Plynulá manipulace při vysoké spolehlivosti procesu'),
      ],
      extraLink: {
        href: '/mayer',
        label: tr('Zu MAYER Plattenaufteilsägen', 'Go to MAYER panel saws', 'Přejít na pily MAYER'),
      },
    },
  ];

  const specialHandlingProducts: BarbaricProduct[] = [
    {
      name: 'Massivholzhandling',
      image: 'https://www.barbaric.at/fileadmin/_processed_/c/5/csm_IMG_3563_web_47ef084d58.png',
      url: 'https://www.barbaric.at/massivholzhandling/',
      desc: tr(
        'Automatisierte und manuelle Handlinglösungen für Massivholz, KVH, BSH und Stangenware.',
        'Automated and manual handling solutions for solid wood, KVH, glulam, and long goods.',
        'Automatizovaná i manuální manipulační řešení pro masivní dřevo, KVH, BSH a dlouhé profily.'
      ),
      specs: [
        tr('Standard- und kundenspezifische Anlagenkonzepte', 'Standard and custom plant concepts', 'Standardní i zákaznické koncepce zařízení'),
        tr('Materialschonende Handhabung schwerer Holzbauteile', 'Material-friendly handling of heavy timber parts', 'Šetrná manipulace s těžkými dřevěnými prvky'),
        tr('Ausgelegt für robuste Produktionsumgebungen', 'Designed for robust production environments', 'Navrženo pro náročné výrobní prostředí'),
      ],
    },
    {
      name: 'Türenhandling',
      image: 'https://www.barbaric.at/fileadmin/_processed_/f/b/csm_TMP_Akk_a3b6a50a7e.jpg',
      url: 'https://www.barbaric.at/tuerenhandling/',
      desc: tr(
        'Schnelle, kompakte Systeme für Beschickung, Handling und Stapelung von Türen in der Fertigung.',
        'Fast and compact systems for feeding, handling, and stacking doors in production.',
        'Rychlé a kompaktní systémy pro podávání, manipulaci a stohování dveří ve výrobě.'
      ),
      specs: [
        tr('Optimierte Produktionsabläufe und höhere Produktivität', 'Optimized production flows and higher productivity', 'Optimalizované výrobní toky a vyšší produktivita'),
        tr('Entlastung der Mitarbeiter durch automatisierte Schritte', 'Reduced operator workload through automation steps', 'Odlehčení pracovníků díky automatizovaným krokům'),
        tr('Lager- und Handlingkonzepte je nach Automatisierungsgrad', 'Storage and handling concepts by automation level', 'Skladové a manipulační koncepty dle úrovně automatizace'),
      ],
    },
  ];

  const vacuumProducts: BarbaricProduct[] = [
    {
      name: tr('Säulenschwenkkran SSK', 'Pillar jib crane SSK', 'Sloupový otočný jeřáb SSK'),
      image: 'https://www.barbaric.at/fileadmin/_processed_/e/0/csm_UWL3_SSK_Akk_web_defb4e939b.png',
      url: 'https://www.barbaric.at/vakuumhandling-holz/',
      desc: tr(
        'Kompakter Kran für ergonomisches Vakuumhandling im täglichen Holzplatten-Handling.',
        'Compact crane for ergonomic vacuum handling in daily wood panel operations.',
        'Kompaktní jeřáb pro ergonomickou vakuovou manipulaci při každodenní práci s deskami.'
      ),
      specs: [
        tr('Traglast bis 100 kg', 'Load capacity up to 100 kg', 'Nosnost až 100 kg'),
        tr('Schwenkbereich 360°', '360° swivel range', 'Rozsah otočení 360°'),
        tr('Kippbereich 90°', '90° tilting range', 'Rozsah naklopení 90°'),
      ],
    },
    {
      name: 'UniWood UWL 3',
      image: 'https://www.barbaric.at/fileadmin/_processed_/9/8/csm_UWL3_Akkordeon_9a5c0310b5.png',
      url: 'https://www.barbaric.at/vakuumhandling-holz/',
      desc: tr(
        'Der Standardheber für das Holzhandling mit 90° Kippwerk für stehende und liegende Manipulation.',
        'The standard lifter for wood handling with 90° tilting for vertical and horizontal manipulation.',
        'Standardní zvedák pro manipulaci se dřevem s náklonem 90° pro svislé i vodorovné operace.'
      ),
      specs: [
        tr('Traglast bis 250 kg', 'Load capacity up to 250 kg', 'Nosnost až 250 kg'),
        tr('Geeignet für OSB, Spanplatten und MDF ab 8 mm', 'Suitable for OSB, chipboard, and MDF from 8 mm', 'Vhodné pro OSB, dřevotřísku a MDF od 8 mm'),
        tr('Leichte Bauweise mit einfacher Bedienung', 'Lightweight design with easy operation', 'Lehká konstrukce a jednoduché ovládání'),
      ],
    },
  ];

  return (
    <>
      <SeoHead routeKey="barbaric" />
      <div className="bg-dark min-h-screen pt-24 sm:pt-28 md:pt-32 pb-20">
        <div className="container-wide">
        <ManufacturerHeader
          backLabel={tr('Zurück zur Übersicht', 'Back to overview', 'Zpět na přehled')}
          brandNameForSrOnly="BARBARIC"
          logoSrc="https://www.barbaric.at/fileadmin/user_upload/Bilder_Barbaric/Logos/Logo_Barbaric_withSlogan.png"
          logoAlt="BARBARIC logo"
          introText={tr(
            'Automatisierungs- und Handlinglösungen vom manuellen Vakuumheber bis zum vollautomatischen Flächenlager.',
            'Automation and handling solutions from manual vacuum lifters to fully automatic panel storage systems.',
            'Automatizační a manipulační řešení od ručních vakuových zvedáků až po plně automatické plošné sklady.'
          )}
        />

        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="accent-line" />
            <h2 className="text-2xl font-display font-light text-white">
              {tr('BARBARIC Produktübersicht', 'BARBARIC Product Overview', 'Přehled produktů BARBARIC')}
            </h2>
          </div>
          <p className="text-white/50 mb-8 max-w-3xl">
            {tr(
              'Aktualisierte Lösungen für Plattenaufteilsägen, Lager, Türen- und Massivholzprozesse.',
              'Updated solutions for panel saws, storage, door handling, and solid wood processes.',
              'Aktualizovaná řešení pro pily na desky, sklady, dveřní a masivní dřevěné procesy.'
            )}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {automationProducts.map((product) => (
              <article key={product.name} className="product-item product-card-dark p-6">
                <div className="mb-4 rounded-xl overflow-hidden border border-white/10 bg-dark-elevated">
                  <img src={product.image} alt={product.name} className="w-full aspect-[4/3] object-cover" loading="lazy" />
                </div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <h3 className="text-lg font-display font-medium text-white">{product.name}</h3>
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white/30 hover:text-primary transition-colors"
                    aria-label={tr('Produkt öffnen', 'Open product', 'Otevřít produkt')}
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-white/50 text-sm mb-4">{product.desc}</p>
                <ul className="space-y-2 mb-4">
                  {product.specs.map((spec) => (
                    <li key={spec} className="text-xs text-white/40 flex items-center gap-2">
                      <span className="w-1 h-1 bg-primary rounded-full" />
                      {spec}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  {product.extraLink ? (
                    <a href={product.extraLink.href} className="text-sm text-white/70 hover:text-white transition-colors">
                      {product.extraLink.label}
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="accent-line" />
            <h2 className="text-2xl font-display font-light text-white">
              {tr('Speziallösungen', 'Special Solutions', 'Speciální řešení')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {specialHandlingProducts.map((product) => (
              <article key={product.name} className="product-item product-card-dark p-6">
                <div className="mb-4 rounded-xl overflow-hidden border border-white/10 bg-dark-elevated">
                  <img src={product.image} alt={product.name} className="w-full aspect-[4/3] object-cover" loading="lazy" />
                </div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <h3 className="text-lg font-display font-medium text-white">{product.name}</h3>
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white/30 hover:text-primary transition-colors"
                    aria-label={tr('Produkt öffnen', 'Open product', 'Otevřít produkt')}
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-white/50 text-sm mb-4">{product.desc}</p>
                <ul className="space-y-2 mb-4">
                  {product.specs.map((spec) => (
                    <li key={spec} className="text-xs text-white/40 flex items-center gap-2">
                      <span className="w-1 h-1 bg-primary rounded-full" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="accent-line" />
            <h2 className="text-2xl font-display font-light text-white">
              {tr('Vakuumhandling Holz', 'Vacuum Handling Wood', 'Vakuová manipulace dřevo')}
            </h2>
          </div>
          <p className="text-white/50 mb-8 max-w-3xl">
            {tr(
              'Säulenschwenkkran SSK und UniWood UWL 3 sind zwei starke Standardlösungen. Weitere Produkte aus dem BARBARIC Holz-Vakuumhandling bieten wir auf Anfrage an.',
              'Pillar jib crane SSK and UniWood UWL 3 are two strong standard solutions. Additional BARBARIC wood vacuum handling products are available on request.',
              'Sloupový jeřáb SSK a UniWood UWL 3 jsou dvě silná standardní řešení. Další produkty BARBARIC pro vakuovou manipulaci se dřevem nabízíme na vyžádání.'
            )}
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {vacuumProducts.map((product) => (
              <article key={product.name} className="product-item product-card-dark p-6">
                <div className="mb-4 rounded-xl overflow-hidden border border-white/10 bg-dark-elevated">
                  <img src={product.image} alt={product.name} className="w-full aspect-[4/3] object-cover" loading="lazy" />
                </div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <h3 className="text-lg font-display font-medium text-white">{product.name}</h3>
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white/30 hover:text-primary transition-colors"
                    aria-label={tr('Produkt öffnen', 'Open product', 'Otevřít produkt')}
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-white/50 text-sm mb-4">{product.desc}</p>
                <ul className="space-y-2 mb-4">
                  {product.specs.map((spec) => (
                    <li key={spec} className="text-xs text-white/40 flex items-center gap-2">
                      <span className="w-1 h-1 bg-primary rounded-full" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </article>
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
    </>
  );
};

export default BarbaricPage;
