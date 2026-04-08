import { useEffect, useMemo, useRef } from 'react';
import { useLanguage } from '../App';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { translatePageText } from '../i18n/pageTextTranslations';
import { buildMailto } from '../lib/email';
import SeoHead from '../seo/SeoHead';
import { organizationSchema, localBusinessSchemas, websiteSchema } from '../seo/structuredData';
import { trackEvent } from '../lib/analytics';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const { t, lang, buildPath } = useLanguage();
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
  const generalInquiryMail = buildMailto(
    'office@asamer.net',
    tr(
      'Projektanfrage Asamer Website',
      'Project inquiry Asamer website',
      'Projektová poptávka Asamer web'
    )
  );
  const contactInquiryMail = buildMailto(
    'office@asamer.net',
    tr('Allgemeine Anfrage', 'General inquiry', 'Obecná poptávka')
  );

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
  const structuredData = useMemo(() => {
    const businesses = localBusinessSchemas();
    return [organizationSchema(), ...businesses, websiteSchema()];
  }, []);

  const handleHeroContactClick = () => {
    trackEvent('hero_contact_click', {
      placement: 'home_hero',
      lang,
      target: 'office@asamer.net',
    });
  };

  const handleHomeContactClick = (placement: string, target: string = 'office@asamer.net') => {
    trackEvent('home_contact_click', {
      placement,
      lang,
      target,
    });
  };

  interface SolutionCard {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    link: string;
    logo?: {
      src: string;
      alt: string;
      className?: string;
      wrapperClassName?: string;
    };
  }

  const getOptionalWebp = (src: string) => {
    if (!src.startsWith('/')) return null;
    if (!/\.(jpe?g|png)$/i.test(src)) return null;
    return src.replace(/\.(jpe?g|png)$/i, '.webp');
  };

  const solutions: SolutionCard[] = [
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
      logo: {
        src: '/logos/ott.jpg',
        alt: 'OTT logo',
        className: 'h-9',
        wrapperClassName: 'bg-white px-4 py-2',
      },
    },
    {
      title: tr('Schneiden', 'Cutting', 'Řezání'),
      subtitle: tr('Sägetechnologie', 'Sawing technology', 'Technologie řezání'),
      description: tr(
        'Mayer Kappa Automatic & Advanced Line. Präzise Plattenaufteilsägen für Holz, Kunststoff und Metall.',
        'Mayer Kappa Automatic & Advanced Line. Precise panel saws for wood, plastic, and metal.',
        'Mayer Kappa Automatic & Advanced Line. Přesné pily na desky pro dřevo, plast a kov.'
      ),
      image:
        'https://www.mayersaws.com/WEB/Details/Plattenaufteilsaegen/image-thumb__1115__auto_fc62367104dd002b13630a858c3d0ea0/0191eee43889bec1aa0fd51bb6b943e6cc18d659.jpg',
      link: '/mayer',
      logo: {
        src: '/logos/mayer.svg',
        alt: 'Mayer logo',
        className: 'h-8',
        wrapperClassName: 'bg-white',
      },
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
      logo: {
        src: '/logos/barbaric.png',
        alt: 'Barbaric logo',
        className: 'h-10',
        wrapperClassName: 'bg-white',
      },
    },
    {
      title: tr('Dübelbearbeitung', 'Dowel Processing', 'Kolkování'),
      subtitle: tr('Bohren & Beleimen', 'Drilling & Gluing', 'Vrtání a lepení'),
      description: tr(
        'Gannomat: Fräsen, Bohren, Dübeln, CNC, Vakuumpresse uvm.',
        'Gannomat: milling, drilling, doweling, CNC, vacuum press and more.',
        'Gannomat: frézování, vrtání, kolíkování, CNC, vakuový lis a další.'
      ),
      image: 'https://www.gannomat.at/Bilder_0571/Gannomat_Bearbeitungszentrum_ProTec_pic01%20(mouseover).jpg',
      link: '/gannomat',
      logo: {
        src: '/images/logo/gannomat-logo.png',
        alt: 'Gannomat logo',
        className: 'h-8',
        wrapperClassName: 'bg-white',
      },
    },
  ];

  const costStats = [
    { value: tr('bis -40%', 'up to -40%', 'až -40 %'), label: tr('Lagerkostenreduktion', 'storage cost reduction', 'snížení skladových nákladů') },
    { value: '2x', label: tr('schnellere Kommissionierung', 'faster picking', 'rychlejší kompletace') },
    { value: '99.9%', label: tr('Bestandsgenauigkeit', 'inventory accuracy', 'přesnost zásob') },
  ];

  const financingOptions = [
    {
      title: tr('Finanzierung durch Förderung', 'Funding via grants', 'Financování prostřednictvím dotací'),
      description: tr('Nutzen Sie unseren Förderkompass.', 'Use our funding compass.', 'Využijte náš dotační kompas.'),
      linkLabel: tr('Zum Förderkompass', 'Go to funding compass', 'Přejít na dotační kompas'),
      link: '/financovani',
    },
    {
      title: tr('Finanzierung durch Leasing', 'Funding via leasing', 'Financování prostřednictvím leasingu'),
      description: tr(
        'Durch unseren Partner Raiffeisen Leasing garantieren wir Ihnen eine faire Finanzierung.',
        'Through our partner Raiffeisen Leasing, we ensure fair financing for your project.',
        'Díky našemu partnerovi Raiffeisen Leasing vám zajistíme férové financování.'
      ),
      linkLabel: tr('Mehr zu Leasing', 'More about leasing', 'Více o leasingu'),
      link: '/financovani',
    },
  ];

  return (
    <>
      <SeoHead routeKey="home" structuredData={structuredData} />
      <div ref={heroRef} className="bg-dark home-sections">
      <section className="relative min-h-[100svh] md:min-h-[100vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center scale-100"
            style={{ backgroundImage: 'url(https://www.ottpaul.com/fileadmin/_processed_/d/7/csm_translift_storm_system_4f9149b8e4.jpg)' }}
          />
          <div className="hero-overlay-vertical absolute inset-0" />
          <div className="hero-overlay-horizontal absolute inset-0" />
        </div>

        <div className="absolute inset-0 grid-pattern opacity-50" />

        <div className="relative z-10 w-full container-wide pt-20 sm:pt-28 md:pt-32 pb-6 sm:pb-10 md:pb-12">
          <div className="max-w-5xl">
            <h1 className="mt-6 sm:mt-10 md:mt-8 lg:mt-6 mb-5 sm:mb-8">
              <span className="hero-title-line block font-display font-bold text-[clamp(2.25rem,8vw,6rem)] sm:text-[clamp(2.5rem,8vw,6rem)] leading-[1.05] tracking-[-0.02em] text-white">
                {heroLines[0]}
              </span>
              <span className="hero-title-line block font-display font-bold text-[clamp(2.25rem,8vw,6rem)] sm:text-[clamp(2.5rem,8vw,6rem)] leading-[1.05] tracking-[-0.02em] text-primary mt-2">
                {heroLines[1]}
              </span>
            </h1>

            <p className="hero-subtitle text-sm sm:text-base text-white/70 max-w-2xl mb-3 sm:mb-4 leading-relaxed">
              {tr(
                'Asamer Technologie ist exklusiver OTT-Vertriebspartner und autorisierter Händler für Mayer, BARBARIC und Gannomat in Tschechien, der Slowakei und Ungarn – Maschinen, Automatisierung, Software-Integration und Service aus einer Hand.',
                'Asamer Technology is the exclusive OTT distribution partner and authorized dealer for Mayer, BARBARIC and Gannomat in the Czech Republic, Slovakia and Hungary – machines, automation, software integration and service from a single source.',
                'Asamer Technologie je exkluzivní distribuční partner OTT a autorizovaný prodejce Mayer, BARBARIC a Gannomat v České republice, na Slovensku a v Maďarsku – stroje, automatizace, softwarová integrace a servis z jednoho zdroje.',
              )}
            </p>
            <p className="hero-subtitle text-base sm:text-lg md:text-2xl text-white/60 max-w-2xl mb-6 sm:mb-10 leading-relaxed">
              {t.hero.subheadline}
            </p>

            <div className="hero-cta flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 mb-2 sm:mb-0">
              <a href={generalInquiryMail} className="btn-primary-dark" onClick={handleHeroContactClick}>
                {t.hero.cta}
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href={buildPath('/ott')} className="btn-outline-dark">
                {tr('Produkte entdecken', 'Discover products', 'Objevit produkty')}
                <ArrowUpRight className="w-5 h-5" />
              </a>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, index) => {
              const href = solution.link.startsWith('http') ? solution.link : buildPath(solution.link);
              const webp = getOptionalWebp(solution.image);
              return (
                <a key={index} href={href} className="section-animate product-card-dark group">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <picture className="absolute inset-0">
                      {webp && <source type="image/webp" srcSet={webp} />}
                      <img
                        src={solution.image}
                        alt=""
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                    </picture>
                    {solution.logo && (
                      <div
                        className={`absolute top-3 left-3 inline-flex h-12 min-w-[56px] items-center justify-center rounded-full px-3 py-1 shadow-lg backdrop-blur ${
                          solution.logo.wrapperClassName ?? 'bg-white/80'
                        }`}
                      >
                        <img
                          src={solution.logo.src}
                          alt={solution.logo.alt}
                          className={`w-auto object-contain ${solution.logo.className ?? 'h-6'}`}
                          loading="lazy"
                        />
                      </div>
                    )}
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
              );
            })}
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
                {tr('Finanzierung', 'Financing', 'Financování')}
              </h2>
              <p className="text-subsection text-white/50 mb-10 leading-relaxed">
                {tr(
                  'Zwei klare Wege zur Investition in Ihre Produktion: Förderung oder Leasing.',
                  'Two clear ways to finance your production investment: grants or leasing.',
                  'Dvě jasné cesty pro investici do výroby: dotace nebo leasing.'
                )}
              </p>

              <div className="space-y-4 mb-6">
                {financingOptions.map((item, index) => (
                  <div key={item.title} className="p-5 bg-dark-card rounded-xl border border-white/10">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-primary text-sm font-medium">0{index + 1}</span>
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-2">{item.title}</h4>
                        <p className="text-white/60 text-sm leading-relaxed mb-2">{item.description}</p>
                        <a
                          href={item.link.startsWith('http') ? item.link : buildPath(item.link)}
                          className="text-primary/90 text-xs hover:text-primary transition-colors"
                        >
                          {item.linkLabel}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <a href={buildPath('/financovani')} className="btn-outline-dark inline-flex">
                {tr('Zur Finanzierungsseite', 'Go to funding page', 'Přejít na stránku financování')}
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>

            <div className="section-animate">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-white border border-black/5">
                <div className="w-full h-full flex items-center justify-center p-6 sm:p-8 md:p-10">
                  <img
                    src="https://www.raiffeisen-leasing.at/de/ueber-uns/_jcr_content/root/responsivegrid/contentcontainer_1102821433/contentbox/downloadlist.download.html/1/Raiffeisen-Leasing%20Logo%20_1faerbig_%20schwarz_weiss_.png"
                    alt="Raiffeisen Leasing Logo"
                    className="max-w-full max-h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 p-3 sm:p-4 bg-black/55 backdrop-blur-md rounded-xl border border-white/20">
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-display font-bold text-white">Förderung + Leasing</div>
                    <div className="text-xs text-white/80">
                      {tr(
                        'Ein Ziel: faire Finanzierung Ihrer Investition',
                        'One goal: fair financing for your investment',
                        'Jeden cíl: férové financování vaší investice'
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                  style={{ backgroundImage: 'url(/images/barbaric/csf-multilevel.jpg)' }}
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

          <a href={buildPath('/servis')} className="btn-outline-dark mt-6 inline-flex">
            {tr('Zur Service-Seite', 'Go to service page', 'Přejít na stránku servisu')}
            <ArrowUpRight className="w-5 h-5" />
          </a>
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
              <a
                href={contactInquiryMail}
                className="btn-primary-dark"
                onClick={() => handleHomeContactClick('contact_section')}
              >
                {tr('E-Mail senden', 'Send email', 'Poslat e-mail')}
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+420123456789"
                className="btn-outline-dark"
                onClick={() => handleHomeContactClick('contact_section_phone', 'tel:+420123456789')}
              >
                {tr('Anrufen', 'Call', 'Zavolat')}
              </a>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Home;
