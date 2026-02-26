import { useEffect, useRef } from 'react';
import { useLanguage } from '../App';
import { ArrowRight, ArrowUpRight, Cpu, Database, Layers, TrendingDown } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { translatePageText } from '../i18n/pageTextTranslations';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const { t, lang } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);
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
  const generalInquiryMail = `mailto:office@asamer.net?subject=${encodeURIComponent(
    tr(
      'Projektanfrage Asamer Website',
      'Project inquiry Asamer website',
      'Projektová poptávka Asamer web'
    )
  )}`;
  const contactInquiryMail = `mailto:office@asamer.net?subject=${encodeURIComponent(
    tr('Allgemeine Anfrage', 'General inquiry', 'Obecná poptávka')
  )}`;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-title-line',
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: 'power3.out', delay: 0.3 }
      );

      gsap.fromTo('.hero-subtitle',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.8 }
      );

      gsap.fromTo('.hero-cta',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 1 }
      );

      gsap.fromTo('.hero-feature',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out', delay: 1.2 }
      );

      gsap.utils.toArray<HTMLElement>('.section-animate').forEach((section) => {
        gsap.fromTo(section,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const heroLines = [
    tr('Technologie mit Erfahrung.', 'Technology with experience.', 'Technologie se zkušeností.'),
    tr('Lösungen mit Zukunft.', 'Solutions with a future.', 'Řešení s budoucností.'),
  ];

  const heroFeatures = [
    { icon: Cpu, text: tr('OTT die führende Kantenanleimmaschine', 'OTT the leading edge banding machine', 'OTT přední olepovačka hran') },
    { icon: Layers, text: tr('Neue Sägetechnologien von MAYER', 'New sawing technologies from MAYER', 'Nové technologie řezání od MAYER') },
    { icon: Database, text: tr('Service & Wartung Holz + Metall', 'Service & maintenance for wood + metal', 'Servis a údržba pro dřevo + kov') },
    { icon: TrendingDown, text: tr('Reduktion von Lagerkosten', 'Reduction of storage costs', 'Snížení skladovacích nákladů') },
  ];

  const solutions = [
    {
      title: tr('Kantenbearbeitung', 'Edgebanding', 'Olepování hran'),
      subtitle: 'PUR & LASER',
      description: tr(
        'OTT Kantenleimtechnologie. Fugenlose Kantenverbindungen mit PUR-Anleimsystemen und LASER Hydrofuse.',
        'OTT edgebanding technology. Seamless edge joints with PUR gluing systems and LASER Hydrofuse.',
        'Technologie olepování hran OTT. Bezešvé spoje hran pomocí systémů PUR a LASER Hydrofuse.'
      ),
      image: 'https://www.ottpaul.com/fileadmin/_processed_/8/d/csm_entnahme-werkstueck-tornado_2ecb9d3d9c.jpg',
      link: '/ott',
    },
    {
      title: tr('Schneiden', 'Cutting', 'Řezání'),
      subtitle: tr('Sägetechnologie', 'Sawing technology', 'Technologie řezání'),
      description: tr(
        'Mayer Kappa Automatic & Advanced Line. Präzise Plattenaufteilsägen für Holz, Kunststoff und Metall.',
        'Mayer Kappa Automatic & Advanced Line. Precise panel saws for wood, plastic, and metal.',
        'Mayer Kappa Automatic & Advanced Line. Přesné pily na desky pro dřevo, plast a kov.'
      ),
      image: 'https://www.mayersaws.com/WEB/Details/Plattenaufteilsaegen/image-thumb__1115__auto_98b2870f1f48c3375f41b72d638dee59/0191eee43889bec1aa0fd51bb6b943e6cc18d659.jpg',
      link: '/mayer',
    },
    {
      title: tr('Manipulation & Lager', 'Handling & Storage', 'Manipulace a skladování'),
      subtitle: tr('Automatisierung', 'Automation', 'Automatizace'),
      description: tr(
        'BARBARIC Handling-Systeme. Von Kranlösungen bis zu chaotischen Flächenlagern.',
        'BARBARIC handling systems. From crane solutions to chaotic panel storage systems.',
        'Manipulační systémy BARBARIC. Od jeřábových řešení až po chaotické plošné sklady.'
      ),
      image: 'https://www.barbaric.at/fileadmin/_processed_/d/2/csm_UEbersichtCSF_1b60448c7a.png',
      link: '/barbaric',
    },
  ];

  const digitalProductionItems = [
    {
      title: 'ERP',
      desc: tr('SAP, Microsoft Dynamics, abas und mehr', 'SAP, Microsoft Dynamics, abas and more', 'SAP, Microsoft Dynamics, abas a další'),
    },
    {
      title: 'MES',
      desc: tr('Produktionssteuerung in Echtzeit', 'Real-time production control', 'Řízení výroby v reálném čase'),
    },
    {
      title: tr('Produktionssoftware', 'Production Software', 'Výrobní software'),
      desc: tr('Verbindung aller Prozessdaten', 'Connection of all process data', 'Propojení všech procesních dat'),
    },
  ];

  const costStats = [
    { value: tr('bis -40%', 'up to -40%', 'až -40 %'), label: tr('Lagerkostenreduktion', 'storage cost reduction', 'snížení skladových nákladů') },
    { value: '2x', label: tr('schnellere Kommissionierung', 'faster picking', 'rychlejší kompletace') },
    { value: '99.9%', label: tr('Bestandsgenauigkeit', 'inventory accuracy', 'přesnost zásob') },
  ];

  const fundingPrograms = [
    {
      title: tr('OP TAK - Digitales Unternehmen', 'OP TAK - Digital Enterprise', 'OP TAK - Digitální podnik'),
      description: tr(
        'Fördert die digitale Transformation von KMU mit ERP-Systemen, Robotik und KI-gestützten Fertigungsprozessen.',
        'Supports SME digital transformation with ERP systems, robotics, and AI-assisted production processes.',
        'Podporuje digitální transformaci MSP pomocí ERP systémů, robotiky a výrobních procesů řízených AI.'
      ),
      details: tr(
        'Antragszeitraum: 20.10.2025 bis 17.04.2026. Zuschuss: bis zu 45 % der Kosten.',
        'Application window: 20.10.2025 to 17.04.2026. Grant: up to 45% of costs.',
        'Termín podání: 20.10.2025 až 17.04.2026. Dotace: až 45 % nákladů.'
      ),
    },
    {
      title: tr('OP TAK - Innovation & Design', 'OP TAK - Innovation & Design', 'OP TAK - Inovace a design'),
      description: tr(
        'Unterstützt die Markteinführung neuer Produkte, ökologischer Materialien und modernes Möbeldesign.',
        'Supports the market launch of new products, ecological materials, and modern furniture design.',
        'Podporuje uvedení nových produktů, ekologických materiálů a moderního nábytkového designu na trh.'
      ),
      details: tr(
        'Inklusive Innovationsgutscheine für externes Know-how und Designförderung, z. B. Design pro praxi.',
        'Includes innovation vouchers for external know-how and design support, e.g. Design pro praxi.',
        'Zahrnuje inovační vouchery na externí know-how a podporu designu, např. Design pro praxi.'
      ),
    },
    {
      title: tr('MZe - Forstwirtschaft & Sägewerke', 'MZe - Forestry & Sawmills', 'MZe - Lesnictví a pily'),
      description: tr(
        'Spezielle Investitionshilfen des Landwirtschaftsministeriums für die Primärverarbeitung von Holz.',
        'Dedicated investment support from the Ministry of Agriculture for primary wood processing.',
        'Speciální investiční podpora ministerstva zemědělství pro prvotní zpracování dřeva.'
      ),
      details: tr(
        'Relevant für technologische Modernisierung in Sägewerken und vorgelagerten Holzprozessen.',
        'Relevant for technological modernization in sawmills and upstream wood-processing operations.',
        'Vhodné pro technologickou modernizaci pil a navazujících dřevozpracujících provozů.'
      ),
    },
    {
      title: tr('Energieeffizienz & Nachhaltigkeit', 'Energy Efficiency & Sustainability', 'Energetická účinnost a udržitelnost'),
      description: tr(
        'Förderfähig sind Photovoltaik, energetische Gebäudesanierung und Kreislaufwirtschaft.',
        'Eligible measures include photovoltaics, energy-efficient building renovation, and circular economy projects.',
        'Podporovaná opatření zahrnují fotovoltaiku, energetické renovace budov a projekty oběhového hospodářství.'
      ),
      details: tr(
        'Auch Maßnahmen zur Abfallverwertung können in die Förderung einbezogen werden.',
        'Waste recovery measures can also be included in the funding scope.',
        'Do podpory lze zahrnout i opatření na využití odpadu.'
      ),
    },
  ];

  const fundingStats = [
    { value: '2025-2027', label: tr('Förderfenster', 'Funding period', 'Období podpory') },
    { value: '45%', label: tr('max. Zuschuss', 'max grant', 'max. dotace') },
    { value: 'EFRE', label: tr('EU-Kofinanzierung', 'EU co-financing', 'spolufinancování EU') },
  ];

  return (
    <div ref={heroRef} className="bg-dark">
      <section className="relative min-h-[100svh] md:min-h-screen flex items-start md:items-center overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center scale-100"
            style={{ backgroundImage: 'url(https://www.ottpaul.com/fileadmin/_processed_/b/d/csm_maschine-tornado_98c5612081.jpg)' }}
          />
          <div className="hero-overlay-vertical absolute inset-0" />
          <div className="hero-overlay-horizontal absolute inset-0" />
        </div>

        <div className="absolute inset-0 grid-pattern opacity-50" />

        <div className="relative z-10 w-full container-wide pt-32 sm:pt-32 md:pt-32 pb-14 sm:pb-20">
          <div className="max-w-5xl">
            <h1 className="mt-16 sm:mt-14 md:mt-10 lg:mt-8 mb-6 sm:mb-8">
              <span className="hero-title-line block font-display font-bold text-[clamp(2.5rem,8vw,6rem)] leading-[1.05] tracking-[-0.02em] text-white">
                {heroLines[0]}
              </span>
              <span className="hero-title-line block font-display font-bold text-[clamp(2.5rem,8vw,6rem)] leading-[1.05] tracking-[-0.02em] text-primary mt-2">
                {heroLines[1]}
              </span>
            </h1>

            <p className="hero-subtitle text-lg sm:text-xl md:text-2xl text-white/60 max-w-2xl mb-8 sm:mb-10 leading-relaxed">
              {t.hero.subheadline}
            </p>

            <div className="hero-cta flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 mb-12 sm:mb-16">
              <a href={generalInquiryMail} className="btn-primary-dark">
                {t.hero.cta}
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="/mayer" className="btn-outline-dark">
                {tr('Produkte entdecken', 'Discover products', 'Objevit produkty')}
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {heroFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="hero-feature flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm text-white/50 leading-tight">{feature.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="section-large relative">
        <div className="container-wide">
          <div className="section-animate mb-16">
            <div className="accent-line mb-6" />
            <h2 className="text-section font-display font-light text-white mb-4">
              {t.solutions.title}
            </h2>
            <p className="text-subsection text-white/50 max-w-2xl">
              {tr(
                'Effizienzsteigerung durch automatisierte Prozesse und robotisierte Materialflüsse',
                'Efficiency gains through automated processes and robotic material flows',
                'Zvýšení efektivity díky automatizovaným procesům a robotizovaným tokům materiálu'
              )}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <a
                key={index}
                href={solution.link}
                className="section-animate product-card-dark group"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${solution.image})` }}
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs uppercase tracking-widest text-primary mb-2 block">
                    {solution.subtitle}
                  </span>
                  <h3 className="text-xl font-display font-medium text-white mb-3 group-hover:text-primary transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-4">
                    {solution.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm text-white/70 group-hover:text-primary transition-colors">
                    {tr('Mehr erfahren', 'Learn more', 'Zjistit více')}
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="automation" className="section-large relative bg-dark-elevated">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="container-wide relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="section-animate">
              <div className="accent-line mb-6" />
              <h2 className="text-section font-display font-light text-white mb-6">
                {t.automation.title}
              </h2>
              <p className="text-subsection text-white/50 mb-10 leading-relaxed">
                {tr(
                  'Die tschechische Holzbearbeitung transformiert sich von traditionellen Strukturen zur digitalen und ressourceneffizienten Produktion. Für 2025 bis 2027 stehen attraktive Förderprogramme bereit.',
                  'The Czech woodworking industry is shifting from traditional structures to digital and resource-efficient production. Attractive funding programs are available from 2025 to 2027.',
                  'České dřevozpracující odvětví se mění od tradičních struktur k digitální a zdrojově efektivní výrobě. Pro roky 2025 až 2027 jsou k dispozici atraktivní dotační programy.'
                )}
              </p>

              <div className="space-y-4">
                {fundingPrograms.slice(0, 2).map((item, index) => (
                  <div key={item.title} className="p-5 bg-dark-card rounded-xl border border-white/10">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-primary text-sm font-medium">0{index + 1}</span>
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-2">{item.title}</h4>
                        <p className="text-white/60 text-sm leading-relaxed mb-2">{item.description}</p>
                        <p className="text-primary/90 text-xs leading-relaxed">{item.details}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-5 bg-dark-card rounded-xl border border-primary/30">
                <h4 className="text-white font-medium mb-2">{tr('Ihr Vorteil', 'Your advantage', 'Vaše výhoda')}</h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  {tr(
                    'Nutzen Sie staatliche Zuschüsse und EFRE-Mittel, um Ihre Wettbewerbsfähigkeit mit moderner CNC-Technik, Automatisierung und nachhaltiger Produktion gezielt auszubauen.',
                    'Use state grants and ERDF funds to strengthen your competitiveness with modern CNC technology, automation, and sustainable production.',
                    'Využijte státní dotace a prostředky EFRR pro posílení konkurenceschopnosti pomocí moderních CNC technologií, automatizace a udržitelné výroby.'
                  )}
                </p>
              </div>

              <div className="mt-4 p-5 bg-dark-card rounded-xl border border-white/15">
                <h4 className="text-white font-medium mb-2">{tr('Wichtig', 'Important', 'Důležité')}</h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  {tr(
                    'Reine Ersatzinvestitionen ohne Innovations- oder Digitalisierungsschritt sind meist nicht förderfähig. Entscheidend ist der technologische Sprung.',
                    'Pure replacement investments without an innovation or digitalization step are usually not eligible. The key is a real technology leap.',
                    'Pouhé náhradní investice bez kroku inovace nebo digitalizace obvykle nejsou způsobilé. Klíčový je skutečný technologický posun.'
                  )}
                </p>
              </div>

              <a href="/finanzierung" className="btn-outline-dark mt-6 inline-flex">
                {tr('Zur Finanzierungsseite', 'Go to funding page', 'Přejít na stránku financování')}
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>

            <div className="section-animate">
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1400&q=80)' }}
                />
                <div className="automation-image-overlay absolute inset-0" />

                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 p-3 sm:p-4 bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-center">
                    {fundingStats.map((stat) => (
                      <div key={stat.value}>
                        <div className="text-xl sm:text-2xl font-display font-bold text-white">{stat.value}</div>
                        <div className="text-xs text-white/50">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-large relative">
        <div className="container-wide">
          <div className="section-animate text-center mb-16">
            <div className="accent-line mx-auto mb-6" />
            <h2 className="text-section font-display font-light text-white mb-4">
              {tr('Digitale Produktion', 'Digital Production', 'Digitální výroba')}
            </h2>
            <p className="text-subsection text-white/50 max-w-2xl mx-auto">
              {tr('Nahtlose Integration in Ihre bestehenden Systeme', 'Seamless integration into your existing systems', 'Bezproblémová integrace do vašich stávajících systémů')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {digitalProductionItems.map((item, index) => (
              <div key={index} className="section-animate text-center p-6 sm:p-8 bg-dark-card rounded-2xl border border-white/5">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Database className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-display font-medium text-white mb-3">{item.title}</h3>
                <p className="text-white/50">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-large relative bg-dark-elevated">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="container-wide relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="section-animate order-2 lg:order-1">
              <div className="relative aspect-video rounded-2xl overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: 'url(https://www.barbaric.at/fileadmin/_processed_/1/1/csm_CSF_Multilevel-Wegerer-7837_web_9285d8be71.png)' }}
                />
                <div className="cost-image-overlay absolute inset-0" />
              </div>
            </div>

            <div className="section-animate order-1 lg:order-2">
              <div className="accent-line mb-6" />
              <h2 className="text-section font-display font-light text-white mb-6">
                {tr('Reduktion von Lagerkosten', 'Reduction of Storage Costs', 'Snížení skladových nákladů')}
              </h2>
              <p className="text-subsection text-white/50 mb-8 leading-relaxed">
                {tr(
                  'Durch intelligente Lagersysteme und optimierte Materialflüsse reduzieren Sie Ihre Lagerkosten signifikant und steigern die Produktivität.',
                  'With intelligent storage systems and optimized material flows, you significantly reduce storage costs and increase productivity.',
                  'Díky inteligentním skladovým systémům a optimalizovaným tokům materiálu výrazně snížíte skladové náklady a zvýšíte produktivitu.'
                )}
              </p>

              <div className="space-y-4">
                {costStats.map((stat, index) => (
                  <div key={index} className="flex items-start sm:items-center gap-4 p-4 bg-dark-card rounded-xl">
                    <span className="text-2xl font-display font-bold text-primary">{stat.value}</span>
                    <span className="text-white/70">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="service" className="section-large relative">
        <div className="container-wide">
          <div className="section-animate mb-16">
            <div className="accent-line mb-6" />
            <h2 className="text-section font-display font-light text-white mb-4">
              {t.service.title}
            </h2>
            <p className="text-subsection text-white/50 max-w-2xl">
              {t.service.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: t.service.items.phone.title, desc: t.service.items.phone.description },
              { title: t.service.items.remote.title, desc: t.service.items.remote.description },
              { title: t.service.items.spareParts.title, desc: t.service.items.spareParts.description },
              { title: t.service.items.training.title, desc: t.service.items.training.description },
            ].map((item, index) => (
              <div key={index} className="section-animate p-6 bg-dark-card rounded-2xl border border-white/5 hover:border-primary/30 transition-colors">
                <div className="text-4xl font-display font-bold text-white/10 mb-4">0{index + 1}</div>
                <h3 className="text-lg font-display font-medium text-white mb-3">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-large relative bg-dark-elevated">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="container-wide relative">
          <div className="section-animate max-w-3xl mx-auto text-center">
            <div className="accent-line mx-auto mb-6" />
            <h2 className="text-section font-display font-light text-white mb-6">
              {t.contact.title}
            </h2>
            <p className="text-subsection text-white/50 mb-10">
              {t.contact.subtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={contactInquiryMail} className="btn-primary-dark">
                {tr('E-Mail senden', 'Send email', 'Poslat e-mail')}
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="tel:+420123456789" className="btn-outline-dark">
                {tr('Anrufen', 'Call', 'Zavolat')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
