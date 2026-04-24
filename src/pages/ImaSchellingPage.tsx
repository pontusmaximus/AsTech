import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Award, Wrench, ShieldCheck, GraduationCap, Factory, Phone, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { useLanguage } from '../App';
import { translatePageText } from '../i18n/pageTextTranslations';
import { buildMailto } from '../lib/email';
import SeoHead from '../seo/SeoHead';
import { breadcrumbSchema, faqPageSchema } from '../seo/structuredData';
import { buildLocalizedPath, CANONICAL_DOMAIN } from '../lib/language';
import { localizeSlug } from '../lib/slugs';

const ImaSchellingPage = () => {
  const { lang } = useLanguage();
  const locale = lang === 'de' || lang === 'en' || lang === 'cz' || lang === 'sk' || lang === 'hu' ? lang : 'en';
  const tr = (de: string, en: string, cz: string) => {
    if (locale === 'de') return de;
    if (locale === 'cz') return cz;
    if (locale === 'sk' || locale === 'hu') return translatePageText(locale, en, cz);
    return en;
  };

  const breadcrumbs = breadcrumbSchema([
    { name: tr('Startseite', 'Home', 'Domů'), url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, '/')}` },
    { name: 'IMA Schelling', url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, '/ima-schelling')}` },
  ]);
  const inquiryMail = buildMailto(
    'office@asamer.net',
    tr('Service-Anfrage IMA Schelling', 'Service inquiry IMA Schelling', 'Servisní poptávka IMA Schelling'),
  );

  const pageUrl = `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, '/ima-schelling')}`;

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: tr('Service für IMA Schelling Plattenaufteilsägen', 'Service for IMA Schelling panel saws', 'Servis formátovacích pil IMA Schelling'),
    name: tr(
      'IMA Schelling Plattenaufteilsägen Service',
      'IMA Schelling Panel Saw Service',
      'Servis formátovacích pil IMA Schelling',
    ),
    description: tr(
      'Wartung, Reparatur, Ersatzteile und Bedienerschulung für IMA Schelling Plattenaufteilsägen (HKL, FH, FK, VH, VKS) – über 30 Jahre Erfahrung.',
      'Maintenance, repair, spare parts and operator training for IMA Schelling panel saws (HKL, FH, FK, VH, VKS) – over 30 years of experience.',
      'Údržba, opravy, náhradní díly a školení obsluhy pro formátovací pily IMA Schelling (HKL, FH, FK, VH, VKS) – přes 30 let zkušeností.',
    ),
    url: pageUrl,
    provider: {
      '@type': 'Organization',
      name: 'Asamer Technologie GmbH',
      url: CANONICAL_DOMAIN,
    },
    brand: { '@type': 'Brand', name: 'IMA Schelling' },
    areaServed: [
      { '@type': 'Country', name: 'Czech Republic' },
      { '@type': 'Country', name: 'Slovakia' },
      { '@type': 'Country', name: 'Hungary' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: tr('IMA Schelling Service-Leistungen', 'IMA Schelling service offerings', 'Servisní služby IMA Schelling'),
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: tr('Wartung & Inspektion', 'Maintenance & inspection', 'Údržba a inspekce') } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: tr('Reparatur & Notfallservice', 'Repair & emergency service', 'Oprava a nouzový servis') } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: tr('Ersatzteile & Verschleißteile', 'Spare & wear parts', 'Náhradní a opotřebitelné díly') } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: tr('Schulung & Optimierung', 'Training & optimization', 'Školení a optimalizace') } },
      ],
    },
  };

  const faqs = [
    {
      question: tr(
        'Bietet Asamer Service für ältere IMA Schelling Plattenaufteilsägen?',
        'Does Asamer service older IMA Schelling panel saws?',
        'Provádí Asamer servis i starších formátovacích pil IMA Schelling?',
      ),
      answer: tr(
        'Ja. Wir betreuen sowohl klassische Druckbalkensägen (HKL, FH, FK Reihe) als auch moderne Aufteilzentren (VH, VKS und neuere Baureihen). Unsere Techniker haben über 30 Jahre Erfahrung mit IMA Schelling und IMA, einschließlich elektrischer Steuerungen verschiedener Generationen.',
        'Yes. We service both classic pressure-beam saws (HKL, FH, FK series) and modern cutting centers (VH, VKS and newer series). Our technicians have over 30 years of experience with IMA Schelling and IMA, including electrical controls of multiple generations.',
        'Ano. Servisujeme klasické pily s přítlačným trámem (řady HKL, FH, FK) i moderní nářezová centra (VH, VKS a novější řady). Naši technici mají přes 30 let zkušeností s IMA Schelling a IMA, včetně elektrických řízení různých generací.',
      ),
    },
    {
      question: tr(
        'Welche IMA Schelling Modellreihen werden betreut?',
        'Which IMA Schelling model series are supported?',
        'Které řady strojů IMA Schelling servisujete?',
      ),
      answer: tr(
        'HKL, FH, FK, FH-3/4/5/6, FK-5/6, VH, VKS sowie aktuelle Schelling Baureihen. Auch frühere IMA Modelle (vor der Fusion zu IMA Schelling) werden betreut. Bei Sonderausführungen prüfen wir die Machbarkeit individuell.',
        'HKL, FH, FK, FH-3/4/5/6, FK-5/6, VH, VKS and current Schelling series. We also service earlier IMA models (predating the merger into IMA Schelling). For special configurations we check feasibility case by case.',
        'HKL, FH, FK, FH-3/4/5/6, FK-5/6, VH, VKS a aktuální řady Schelling. Servisujeme i dřívější modely IMA (před fúzí na IMA Schelling). U speciálních provedení posuzujeme proveditelnost individuálně.',
      ),
    },
    {
      question: tr(
        'Verkauft Asamer auch neue IMA Schelling Maschinen?',
        'Does Asamer also sell new IMA Schelling machines?',
        'Prodává Asamer i nové stroje IMA Schelling?',
      ),
      answer: tr(
        'Nein. Wir sind autorisierter Händler für Formatkreissägen von Mayer Deutschland (Felder Group); bei IMA Schelling fokussieren wir uns auf Service und Lifecycle-Support bestehender Maschinen, nicht auf den Verkauf. Planen Sie eine Neuinvestition, beraten wir gerne unabhängig und vergleichen Mayer mit IMA Schelling Varianten. In der Rubrik Gebrauchtmaschinen ist gelegentlich eine gebrauchte Schelling im Angebot.',
        'No. We are an authorized dealer of Mayer Germany (Felder Group) panel sizing saws; for IMA Schelling we focus on service and lifecycle support for existing machines, not sales. If you are planning a new purchase, we are happy to advise independently and compare Mayer with IMA Schelling options. In our used machines section a used Schelling is occasionally on offer.',
        'Ne. Jsme autorizovaný prodejce formátovacích pil Mayer Německo (Felder Group) a u IMA Schelling se zaměřujeme na servis a podporu životního cyklu stávajících strojů, nikoli na prodej. Pokud plánujete novou investici, rádi poradíme nezávisle a srovnáme Mayer s variantami IMA Schelling. V oddílu použité stroje je občas v nabídce použitý stroj Schelling.',
      ),
    },
    {
      question: tr(
        'Liefert ihr Originalersatzteile für IMA Schelling?',
        'Do you supply original IMA Schelling spare parts?',
        'Dodáváte originální náhradní díly pro IMA Schelling?',
      ),
      answer: tr(
        'Ja, wir beschaffen Originalersatzteile sowie hochwertige Verschleißteile (Sägeblätter, Vorritzer, Druckbalkenleisten, Zahnriemen, Sensorik). Bei Steuerungskomponenten und elektronischen Baugruppen arbeiten wir mit dem Hersteller bzw. Drittanbietern, um auch ältere Maschinen wirtschaftlich am Laufen zu halten.',
        'Yes, we source original spare parts as well as high-quality wear parts (saw blades, scoring units, pressure-beam strips, timing belts, sensors). For controls and electronic assemblies we work with the manufacturer or third-party suppliers to keep older machines economically running.',
        'Ano, dodáváme originální náhradní díly i kvalitní opotřebitelné díly (pilové kotouče, předřezy, lišty přítlačného trámu, ozubené řemeny, snímače). U řídicích komponent a elektronických celků spolupracujeme s výrobcem i s třetími stranami, abychom udrželi v provozu i starší stroje.',
      ),
    },
    {
      question: tr(
        'Verkauft Asamer auch neue IMA Schelling Maschinen?',
        'Does Asamer also sell new IMA Schelling machines?',
        'Prodává Asamer i nové stroje IMA Schelling?',
      ),
      answer: tr(
        'Nein. Wir sind autorisierter Händler für Mayer Plattenaufteilsägen (Felder Group) und konzentrieren uns bei IMA Schelling auf Service und Lifecycle-Support für Bestandsanlagen. Wenn Sie eine Neuanschaffung planen, beraten wir gerne herstellerneutral und vergleichen Mayer mit den IMA Schelling Optionen.',
        'No. We are an authorized dealer for Mayer panel saws (Felder Group) and on IMA Schelling we focus on service and lifecycle support for existing installations. If you plan a new purchase, we are happy to advise vendor-neutrally and compare Mayer with IMA Schelling options.',
        'Ne. Jsme autorizovaný prodejce formátovacích pil Mayer (Felder Group) a u IMA Schelling se zaměřujeme na servis a podporu životního cyklu stávajících strojů. Pokud plánujete nový nákup, rádi poradíme nezávisle a srovnáme Mayer s variantami IMA Schelling.',
      ),
    },
  ];

  const faqSchema = faqPageSchema(faqs);

  const seriesGroups = [
    {
      label: tr('Druckbalkensägen (klassisch)', 'Pressure-beam saws (classic)', 'Pily s přítlačným trámem (klasické)'),
      models: ['HKL', 'FH', 'FH 3', 'FH 4', 'FH 5', 'FH 6', 'FK 5', 'FK 6'],
    },
    {
      label: tr('Aufteilzentren & Winkelanlagen', 'Cutting centers & angular plants', 'Nářezová centra a úhlové linky'),
      models: ['VH', 'VKS', 'fk5', 'ah4', 'lh4', 'sh4'],
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      gsap.fromTo('.page-header', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' });
    });
    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: Wrench,
      title: tr('Wartung & Inspektion', 'Maintenance & inspection', 'Údržba a inspekce'),
      description: tr(
        'Planbare Wartungsfenster, Zustandskontrollen an Sägeaggregat, Druckbalken und Vorschub – damit Ihre IMA Schelling Plattenaufteilsäge zuverlässig läuft.',
        'Planned maintenance windows, condition checks on saw unit, pressure beam and feed system – keeping your IMA Schelling panel saw running reliably.',
        'Plánovaná servisní okna, kontroly stavu pilového agregátu, přítlačného trámu a posuvu – aby vaše formátovací pila IMA Schelling spolehlivě fungovala.',
      ),
    },
    {
      icon: ShieldCheck,
      title: tr('Reparatur & Notfallservice', 'Repair & emergency service', 'Oprava a nouzový servis'),
      description: tr(
        'Bei Stillstand priorisieren wir Ihre Anlage sofort: Ferndiagnose, Vor-Ort-Service und schnelle Wiederinbetriebnahme – auch bei älteren IMA Schelling Maschinen.',
        'When production is down, we prioritize your machine immediately: remote diagnostics, on-site service and fast restart – also for older IMA Schelling models.',
        'Při odstávce váš stroj okamžitě priorizujeme: vzdálená diagnostika, servis na místě a rychlé znovuuvedení do provozu – i u starších strojů IMA Schelling.',
      ),
    },
    {
      icon: Factory,
      title: tr('Ersatzteile & Verschleißteile', 'Spare & wear parts', 'Náhradní a opotřebitelné díly'),
      description: tr(
        'Beschaffung von Originalersatzteilen und Verschleißteilen für IMA Schelling Plattenaufteilsägen – inkl. Sägeblätter, Steuerungskomponenten und Mechanik.',
        'Sourcing of original spare and wear parts for IMA Schelling panel saws – incl. saw blades, control components and mechanical parts.',
        'Dodávka originálních náhradních a opotřebitelných dílů pro formátovací pily IMA Schelling – vč. pilových kotoučů, řídicích komponent a mechaniky.',
      ),
    },
    {
      icon: GraduationCap,
      title: tr('Schulung & Optimierung', 'Training & optimization', 'Školení a optimalizace'),
      description: tr(
        'Bedienerschulung, Optimierungsprojekte und Beratung zur Steigerung von Schnittleistung, Maßgenauigkeit und Maschinenverfügbarkeit.',
        'Operator training, optimization projects and consulting to improve cutting performance, dimensional accuracy and machine availability.',
        'Školení obsluhy, optimalizační projekty a poradenství pro zvýšení řezného výkonu, rozměrové přesnosti a dostupnosti stroje.',
      ),
    },
  ];

  return (
    <>
      <SeoHead
        routeKey="imaSchelling"
        structuredData={[breadcrumbs, serviceSchema, faqSchema]}
      />
      <div className="bg-dark min-h-screen">

        <BarsHero
          eyebrow={tr('Asamer Service', 'Asamer Service', 'Asamer Service')}
          title="IMA Schelling"
          subtitle={tr(
            'Plattenaufteilsägen · Service & Lifecycle',
            'Panel saws · Service & Lifecycle',
            'velkoplošna pila / nárezové centrum · Servis & údržba',
          )}
        />

        {/* INTRO + STAT STRIP */}
        <section className="container-wide pt-2 pb-10 md:pb-14">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <div className="accent-line mb-5" />
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-light leading-[1.2] tracking-tight text-white mb-5">
                {tr(
                  'Plattenaufteilsägen-Service aus erfahrener Hand',
                  'Panel saw service from experienced hands',
                  'Servis velkoplošných pil',
                )}
              </h2>
              <p className="text-white/70 text-base md:text-lg leading-relaxed">
                {tr(
                  'IMA Schelling zählt zu den weltweit führenden Herstellern von Plattenaufteilsägen. Asamer betreut diese Anlagen seit über 30 Jahren – von präventiver Wartung über Reparatur und Ersatzteilversorgung bis zu Bedienerschulung und Optimierungsprojekten. Wir verkaufen keine neuen IMA Schelling Maschinen, sondern bündeln unser Service-Angebot für Bestandsanlagen in CZ, SK und HU.',
                  'IMA Schelling is one of the world’s leading panel-saw manufacturers. Asamer has been servicing these machines for more than 30 years – from preventive maintenance to repair, spare parts and operator training. We do not sell new IMA Schelling machines; we focus on service for existing installations in CZ, SK and HU.',
                  'Servisujeme velkoplošné pily značky SCHELLING, identifikujeme náhradní díly, řešíme software ve spojení s optimalizací jak HPO i jiným zapojením na ERP …',
                )}
              </p>
            </div>

            {/* Stat strip — vertical on lg, horizontal on mobile */}
            <aside className="lg:col-span-5">
              <dl className="grid grid-cols-3 gap-3 lg:gap-4">
                <Stat value="30+" label={tr('Jahre IMA Schelling', 'years IMA Schelling', 'let IMA Schelling')} />
                <Stat value="3" label={tr('Märkte (CZ·SK·HU)', 'markets (CZ·SK·HU)', 'trhy (CZ·SK·HU)')} />
                <Stat value="24/7" label={tr('Notfall-Hotline', 'Emergency hotline', 'Nouzová linka')} />
              </dl>
            </aside>
          </div>
        </section>

        {/* SERVICE GRID */}
        <section className="container-wide pb-14">
          <header className="mb-6 flex items-end justify-between gap-6">
            <div>
              <span className="text-[11px] uppercase tracking-[0.22em] text-red-400/80 mb-2 block">
                {tr('Leistungen', 'Services', 'Služby')}
              </span>
              <h2 className="text-2xl md:text-3xl font-display font-light text-white leading-tight">
                {tr(
                  'Was wir für Ihre Anlage tun',
                  'What we do for your machine',
                  'Co děláme pro vaše zařízení',
                )}
              </h2>
            </div>
          </header>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <article
                  key={s.title}
                  className="group relative rounded-xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-red-500/40 hover:bg-white/[0.05] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_-12px_rgba(239,68,68,0.25)] overflow-hidden"
                >
                  <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="mb-4 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 group-hover:bg-red-500/15 transition-colors">
                    <Icon className="w-5 h-5 text-red-400" aria-hidden="true" />
                  </div>
                  <h3 className="text-white font-medium text-base leading-snug mb-2">{s.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{s.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        {/* EXPERIENCE BLOCK */}
        <section className="container-wide pb-14">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-red-950/40 via-zinc-950 to-black p-8 md:p-12">
            {/* decorative bars in background */}
            <div className="absolute inset-y-0 right-0 w-1/3 opacity-[0.06] pointer-events-none" aria-hidden="true">
              <div className="absolute top-0 bottom-0 left-[20%] w-8 bg-red-500 -rotate-6" />
              <div className="absolute top-0 bottom-0 left-[45%] w-12 bg-white -rotate-6" />
              <div className="absolute top-0 bottom-0 left-[75%] w-6 bg-red-500 -rotate-6" />
            </div>

            <div className="relative grid md:grid-cols-12 gap-8 md:gap-10 items-center">
              <div className="md:col-span-4">
                <div className="flex items-baseline gap-2">
                  <span className="font-display font-bold text-white text-7xl md:text-8xl leading-none tracking-tight">
                    30
                  </span>
                  <span className="font-display font-light text-red-500 text-5xl md:text-6xl leading-none">+</span>
                </div>
                <span className="block text-[11px] uppercase tracking-[0.28em] text-white/50 mt-3">
                  {tr('Jahre Praxis', 'Years of practice', 'Let praxe')}
                </span>
              </div>
              <div className="md:col-span-8">
                <div className="flex items-center gap-3 mb-3 text-red-400/90">
                  <Award className="w-4 h-4" aria-hidden="true" />
                  <span className="text-[11px] uppercase tracking-[0.22em]">
                    {tr('Erfahrung mit IMA Schelling', 'IMA Schelling experience', 'Zkušenosti s IMA Schelling')}
                  </span>
                </div>
                <p className="text-white/80 text-base md:text-lg leading-relaxed">
                  {tr(
                    'Vom klassischen Druckbalkensägen-Konzept bis zu modernen Aufteilzentren – unser Team kennt die mechanische und steuerungstechnische Bandbreite der IMA Schelling Baureihen aus Hunderten Service-Einsätzen. Diese Erfahrung übersetzen wir in schnelle Diagnose, saubere Wartung und ehrliche Empfehlungen für die nächste Investitionsstufe.',
                    'From the classic pressure-beam saw concept to modern cutting centers – our team knows the mechanical and control-side breadth of the IMA Schelling lines from hundreds of service calls. We translate that experience into fast diagnosis, clean maintenance and honest advice on the next investment step.',
                    'Od klasického konceptu pily s přítlačným trámem až po moderní nářezová centra – náš tým zná mechanickou i řídicí stránku řad IMA Schelling ze stovek servisních zásahů. Zkušenost přetavujeme do rychlé diagnostiky, čisté údržby a poctivého doporučení pro další investiční krok.',
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SUPPORTED MODELS */}
        <section className="container-wide pb-14">
          <header className="mb-6">
            <span className="text-[11px] uppercase tracking-[0.22em] text-red-400/80 mb-2 block">
              {tr('Modellabdeckung', 'Model coverage', 'Pokrytí modelů')}
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-light text-white leading-tight mb-3">
              {tr(
                'Modellreihen, die wir betreuen',
                'Model series we support',
                'Řady strojů, které servisujeme',
              )}
            </h2>
            <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-3xl">
              {tr(
                'Unser Service deckt klassische IMA Schelling Druckbalkensägen ebenso ab wie moderne Aufteilzentren. Auch frühere IMA-Modelle (vor der Fusion zu IMA Schelling) sind betreubar.',
                'Our service covers classic IMA Schelling pressure-beam saws as well as modern cutting centers. Earlier IMA models (predating the merger into IMA Schelling) are also supported.',
                'Náš servis pokrývá klasické pily s přítlačným trámem IMA Schelling i moderní nářezová centra.',
              )}
            </p>
          </header>
          <div className="grid sm:grid-cols-2 gap-4">
            {seriesGroups.map((group, idx) => (
              <div
                key={group.label}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-6 hover:border-white/15 transition-colors"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-white font-medium text-base">{group.label}</h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.models.map((m) => (
                    <li
                      key={m}
                      className="px-2.5 py-1 rounded-md text-xs font-mono uppercase tracking-wide bg-white/[0.04] border border-white/10 text-white/75 hover:border-red-500/30 hover:text-white transition-colors"
                    >
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-white/40 text-xs mt-4">
            {tr(
              'Modellbezeichnungen ohne Gewähr – bei Sondermaschinen prüfen wir die Servicierbarkeit individuell.',
              'Model names without warranty – for special machines we check serviceability case by case.',
              'Označení modelů bez záruky – u speciálních strojů ověřujeme servisovatelnost individuálně.',
            )}
          </p>
        </section>

        {/* FAQ */}
        <section className="container-wide pb-14">
          <header className="mb-6">
            <span className="text-[11px] uppercase tracking-[0.22em] text-red-400/80 mb-2 block">FAQ</span>
            <h2 className="text-2xl md:text-3xl font-display font-light text-white leading-tight">
              {tr(
                'Häufige Fragen zum IMA Schelling Service',
                'Frequently asked questions about IMA Schelling service',
                'Časté dotazy k servisu IMA Schelling',
              )}
            </h2>
          </header>
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] divide-y divide-white/5 overflow-hidden">
            {faqs.map((f) => (
              <details key={f.question} className="group">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-5 md:px-6 py-5 hover:bg-white/[0.03] transition-colors">
                  <h3 className="text-white font-medium text-base md:text-lg leading-snug pr-2">
                    {f.question}
                  </h3>
                  <span className="shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-md border border-white/10 text-white/50 group-hover:text-white group-hover:border-red-500/40 transition-colors">
                    <ChevronRight
                      className="w-4 h-4 transition-transform group-open:rotate-90"
                      aria-hidden="true"
                    />
                  </span>
                </summary>
                <div className="px-5 md:px-6 pb-5 -mt-1">
                  <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-3xl">
                    {f.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* RELATED LINKS */}
        <section className="container-wide pb-14">
          <h2 className="text-xl font-display font-light text-white mb-4">
            {tr('Verwandte Seiten', 'Related pages', 'Související stránky')}
          </h2>
          <ul className="grid sm:grid-cols-3 gap-3">
            <RelatedLink
              to={buildLocalizedPath(lang, localizeSlug('/servis', lang))}
              title={tr('Service & Lifecycle Support', 'Service & lifecycle support', 'Servis a podpora životního cyklu')}
              hint={tr('Allgemeines Service-Angebot', 'General service offering', 'Obecná nabídka servisu')}
            />
            <RelatedLink
              to={buildLocalizedPath(lang, '/mayer')}
              title={tr('Mayer Plattensägen (Verkauf)', 'Mayer panel saws (sales)', 'Mayer formátovací pily (prodej)')}
              hint={tr('Neuanschaffung Plattenaufteilsäge', 'New panel saw purchase', 'Nákup nové formátovací pily')}
            />
            <RelatedLink
              to={buildLocalizedPath(lang, localizeSlug('/faq', lang))}
              title="FAQ"
              hint={tr('Antworten zu Service & Maschinen', 'Answers about service & machines', 'Odpovědi k servisu a strojům')}
            />
          </ul>
        </section>

        {/* CTA */}
        <section className="border-t border-white/5 mt-4">
          <div className="container-wide py-14 md:py-20">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-red-950/30 via-zinc-950 to-black p-8 md:p-12">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-red-500/10 blur-3xl rounded-full pointer-events-none" />
              <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-10">
                <div className="max-w-xl">
                  <span className="text-[11px] uppercase tracking-[0.28em] text-red-400/90">
                    {tr('Service-Anfrage', 'Service request', 'Servisní poptávka')}
                  </span>
                  <h2 className="mt-3 text-2xl md:text-3xl font-display font-light text-white leading-tight">
                    {tr(
                      'Steht Ihre IMA Schelling Säge oder läuft sie nicht mehr rund?',
                      'Is your IMA Schelling saw down or not running smoothly?',
                      'Stojí vaše pila IMA Schelling nebo neběží jak má?',
                    )}
                  </h2>
                  <p className="mt-3 text-white/60 text-sm md:text-base leading-relaxed">
                    {tr(
                      'Schreiben Sie uns Modell und Fehlerbild – wir melden uns innerhalb weniger Stunden mit konkreten nächsten Schritten.',
                      'Send us your model and the symptom – we get back within a few hours with concrete next steps.',
                      'Napište nám model a popis závady – ozveme se během několika hodin s konkrétními dalšími kroky.',
                    )}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
                  <a href={inquiryMail} className="btn-primary-dark text-sm justify-center">
                    <Phone className="w-4 h-4" />
                    {tr('Service anfragen', 'Request service', 'Poptat servis')}
                  </a>
                  <a
                    href="tel:+420724056965"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 px-4 py-2 text-sm text-white/80 hover:text-white hover:border-white/30 transition-colors"
                  >
                    +420 724 056 965
                  </a>
                </div>
              </div>
            </div>

            <p className="mt-6 text-center text-white/30 text-xs">
              {tr('Hersteller-Information', 'Manufacturer information', 'Informace o výrobci')} ·{' '}
              <a
                href="https://www.imaschelling.com"
                target="_blank"
                rel="noreferrer"
                className="text-white/50 hover:text-white transition-colors"
              >
                imaschelling.com
                <ArrowUpRight className="w-3 h-3 inline ml-0.5" />
              </a>
            </p>
          </div>
        </section>

      </div>
    </>
  );
};

/* ----------------------------------------------------------------- */

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-4 md:px-4 md:py-5 text-center">
    <dt className="font-display font-semibold text-white text-2xl md:text-3xl leading-none tracking-tight">
      {value}
    </dt>
    <dd className="mt-2 text-[10px] md:text-[11px] uppercase tracking-widest text-white/50 leading-snug">
      {label}
    </dd>
  </div>
);

const RelatedLink = ({ to, title, hint }: { to: string; title: string; hint: string }) => (
  <li>
    <Link
      to={to}
      className="group flex items-start justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 hover:border-red-500/30 hover:bg-white/[0.05] transition-colors"
    >
      <span>
        <span className="text-white text-sm font-medium block mb-1">{title}</span>
        <span className="text-white/50 text-xs">{hint}</span>
      </span>
      <ChevronRight className="w-4 h-4 text-white/30 group-hover:text-red-400 group-hover:translate-x-0.5 transition-all shrink-0 mt-0.5" aria-hidden="true" />
    </Link>
  </li>
);

/* ----------------------------------------------------------------- */
/*  BarsHero – 3-frame slideshow of wide, slightly skewed red & black */
/*  vertical bars. Pure CSS, no images.                                */
/* ----------------------------------------------------------------- */

const Bar = ({
  left,
  width,
  rotate,
  color,
  delay,
}: {
  left: string;
  width: string;
  rotate: number;
  color: string;
  delay?: string;
}) => (
  <div
    className="ima-bar absolute"
    style={{ left, width, top: '-15%', bottom: '-15%', animationDelay: delay }}
  >
    <div
      className={`absolute inset-0 ${color}`}
      style={{ transform: `rotate(${rotate}deg)`, transformOrigin: 'center' }}
    />
  </div>
);


const BarsHero = ({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) => {
  const css = `
    @keyframes ima-bars-fade {
      0%, 28%   { opacity: 0.55; }
      33%, 95%  { opacity: 0; }
      100%      { opacity: 0.55; }
    }
    @keyframes ima-bars-drift {
      0%   { transform: translateY(-2%); }
      100% { transform: translateY(2%); }
    }
    .ima-slide  { animation: ima-bars-fade 14s ease-in-out infinite; }
    .ima-slide-2 { animation-delay: -9.3s; }
    .ima-slide-3 { animation-delay: -4.6s; }
    .ima-bar    { animation: ima-bars-drift 9s ease-in-out infinite alternate; }
  `;

  return (
    <section className="ima-hero relative min-h-[55vh] md:min-h-[62vh] overflow-hidden mb-10 md:mb-16 bg-[#0a0a0a]">
      <style>{css}</style>

      {/* Slide 1 — three vertical bars, slight CCW tilt */}
      <div className="absolute inset-0 ima-slide">
        <Bar left="8%"  width="18%" rotate={-4} color="bg-red-600" />
        <Bar left="38%" width="22%" rotate={-5} color="bg-zinc-900" delay="-3s" />
        <Bar left="72%" width="14%" rotate={-3} color="bg-red-700" delay="-5s" />
      </div>

      {/* Slide 2 — two thick bars + accent, opposite tilt */}
      <div className="absolute inset-0 ima-slide ima-slide-2">
        <Bar left="6%"  width="28%" rotate={4}  color="bg-black" />
        <Bar left="46%" width="10%" rotate={5}  color="bg-red-600" delay="-2s" />
        <Bar left="64%" width="24%" rotate={3}  color="bg-zinc-950" delay="-4s" />
      </div>

      {/* Slide 3 — alternating thin/thick vertical stripes */}
      <div className="absolute inset-0 ima-slide ima-slide-3">
        <Bar left="4%"  width="12%" rotate={-6} color="bg-red-700" />
        <Bar left="22%" width="20%" rotate={-5} color="bg-zinc-900" delay="-1s" />
        <Bar left="50%" width="14%" rotate={-7} color="bg-red-600" delay="-3s" />
        <Bar left="72%" width="22%" rotate={-5} color="bg-black" delay="-5s" />
      </div>

      {/* Vignette + bottom-fade for legibility */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.55)_100%)] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent pointer-events-none" />

      {/* Wordmark overlay */}
      <div className="absolute inset-0 z-10 flex items-end">
        <div className="container-wide pb-10 md:pb-14">
          <div className="page-header max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block h-px w-10 bg-white/80" />
              <span className="text-[11px] uppercase tracking-[0.28em] text-white">
                {eyebrow}
              </span>
            </div>
            <h1 className="font-display text-white font-semibold leading-[0.95] tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-8xl drop-shadow-[0_4px_24px_rgba(0,0,0,0.55)]">
              {title}
            </h1>
            <p className="mt-4 text-white text-sm sm:text-base md:text-lg max-w-xl">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImaSchellingPage;
