import { useEffect } from 'react';
import { ArrowUpRight, Award, Wrench, ShieldCheck, GraduationCap, Factory, MapPin, Phone } from 'lucide-react';
import gsap from 'gsap';
import { useLanguage } from '../App';
import { translatePageText } from '../i18n/pageTextTranslations';
import ManufacturerIntro from '../components/manufacturer/ManufacturerIntro';
import { buildMailto } from '../lib/email';
import SeoHead from '../seo/SeoHead';
import { breadcrumbSchema } from '../seo/structuredData';
import { buildLocalizedPath, CANONICAL_DOMAIN } from '../lib/language';

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
        overrides={{
          slug: '/ima-schelling',
          title: tr(
            'IMA Schelling Plattenaufteilsägen Service – über 30 Jahre Erfahrung | Asamer',
            'IMA Schelling Panel Saw Service – over 30 years of experience | Asamer',
            'Servis formátovacích pil IMA Schelling – přes 30 let zkušeností | Asamer',
          ),
          description: tr(
            'Service für IMA Schelling Plattenaufteilsägen in CZ, SK & HU. Wartung, Reparatur, Ersatzteile und Schulung – über 30 Jahre Erfahrung mit IMA Schelling.',
            'Service for IMA Schelling panel saws in CZ, SK & HU. Maintenance, repair, spare parts and training – over 30 years of experience with IMA Schelling.',
            'Servis formátovacích pil IMA Schelling pro CZ, SK a HU. Údržba, opravy, náhradní díly a školení – přes 30 let zkušeností s IMA Schelling.',
          ),
          keywords: ['IMA Schelling', 'Plattenaufteilsäge', 'Service', 'Wartung', 'Ersatzteile', 'Asamer'],
        }}
        structuredData={[breadcrumbs]}
      />
      <div className="bg-dark min-h-screen">

        <BarsHero />

        {/* INTRO */}
        <ManufacturerIntro
          eyebrow={tr(
            'Service · Plattenaufteilsägen · 30+ Jahre Erfahrung',
            'Service · Panel saws · 30+ years of experience',
            'Servis · Formátovací pily · 30+ let zkušeností',
          )}
          title={tr(
            'IMA Schelling Plattenaufteilsägen – Service aus erfahrener Hand',
            'IMA Schelling Panel Saws – service from experienced hands',
            'Formátovací pily IMA Schelling – servis ze zkušených rukou',
          )}
          lead={tr(
            'IMA Schelling zählt zu den weltweit führenden Herstellern von Plattenaufteilsägen. Asamer betreut diese Anlagen seit über 30 Jahren – von der präventiven Wartung über Reparatur und Ersatzteilversorgung bis zu Bedienerschulung und Optimierungsprojekten. Auf dieser Seite verkaufen wir keine neuen IMA Schelling Maschinen, sondern bündeln unser Service-Angebot für Bestandsanlagen in CZ, SK und HU.',
            'IMA Schelling is one of the world’s leading manufacturers of panel saws. Asamer has been servicing these machines for more than 30 years – from preventive maintenance to repair, spare parts supply, operator training and optimization projects. On this page we do not sell new IMA Schelling machines; we focus on service for existing installations in CZ, SK and HU.',
            'IMA Schelling patří mezi přední světové výrobce formátovacích pil. Asamer se o tato zařízení stará již více než 30 let – od preventivní údržby přes opravy a dodávky náhradních dílů až po školení obsluhy a optimalizační projekty. Na této stránce nenabízíme nové stroje IMA Schelling, ale soustředíme servis pro stávající zařízení v ČR, SR a Maďarsku.',
          )}
          facts={[
            { icon: Award, label: tr('Erfahrung', 'Experience', 'Zkušenosti'), value: tr('30+ Jahre IMA Schelling', '30+ years IMA Schelling', '30+ let s IMA Schelling'), iconClass: 'text-amber-400' },
            { icon: MapPin, label: tr('Märkte', 'Markets', 'Trhy'), value: 'CZ · SK · HU', iconClass: 'text-amber-400' },
            { icon: Wrench, label: tr('Leistungen', 'Services', 'Služby'), value: tr('Wartung · Reparatur · Teile', 'Maintenance · Repair · Parts', 'Údržba · Opravy · Díly'), iconClass: 'text-amber-400' },
          ]}
        />

        {/* SERVICE GRID */}
        <div className="container-wide pb-12">
          <div className="grid sm:grid-cols-2 gap-4">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-6 hover:border-white/20 hover:bg-white/[0.05] transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <span className="shrink-0 mt-0.5">
                      <Icon className="w-5 h-5 text-amber-400" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-white font-medium text-lg leading-snug mb-2">{s.title}</h3>
                      <p className="text-white/60 text-sm leading-relaxed">{s.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* EXPERIENCE BLOCK */}
        <div className="container-wide pb-12">
          <div className="rounded-2xl border border-amber-500/15 bg-gradient-to-br from-amber-600/8 via-transparent to-transparent p-8 md:p-10">
            <div className="flex items-start gap-4 max-w-3xl">
              <Award className="w-6 h-6 text-amber-400 shrink-0 mt-1" aria-hidden="true" />
              <div>
                <h2 className="text-2xl md:text-3xl font-display font-light text-white mb-3 leading-tight">
                  {tr(
                    'Über 30 Jahre Erfahrung mit IMA Schelling Plattenaufteilsägen',
                    'Over 30 years of experience with IMA Schelling panel saws',
                    'Přes 30 let zkušeností s formátovacími pilami IMA Schelling',
                  )}
                </h2>
                <p className="text-white/70 text-base leading-relaxed">
                  {tr(
                    'Vom klassischen Druckbalkensägen-Konzept bis zu modernen Aufteilzentren – unser Team kennt die mechanische und steuerungstechnische Bandbreite der IMA Schelling Baureihen aus Hunderten von Service-Einsätzen. Diese Erfahrung übersetzen wir in schnelle Diagnose, sauber durchgeführte Wartung und ehrliche Empfehlungen für die nächste Investitionsstufe.',
                    'From the classic pressure-beam saw concept to modern cutting centers – our team knows the mechanical and control-side breadth of the IMA Schelling product lines from hundreds of service calls. We translate that experience into fast diagnosis, clean maintenance and honest advice on the next investment step.',
                    'Od klasického konceptu pily s přítlačným trámem až po moderní nářezová centra – náš tým zná mechanickou i řídicí stránku řad IMA Schelling z více než stovek servisních zásahů. Tuto zkušenost přetavujeme do rychlé diagnostiky, čistě provedené údržby a poctivého doporučení pro další investiční krok.',
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="border-t border-white/5">
          <div className="container-wide py-12">
            <div className="text-center mb-6">
              <p className="text-white/20 text-xs">
                {tr('Hersteller-Information', 'Manufacturer information', 'Informace o výrobci')} ·{' '}
                <a
                  href="https://www.imaschelling.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary/40 hover:text-primary transition-colors"
                >
                  imaschelling.com
                  <ArrowUpRight className="w-3 h-3 inline ml-0.5" />
                </a>
              </p>
            </div>
            <div className="p-4 bg-gradient-to-r from-amber-600/8 to-transparent rounded-xl border border-amber-500/10 max-w-2xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <p className="text-white/60 text-sm">
                  {tr(
                    'Service-Anfrage für Ihre IMA Schelling Plattenaufteilsäge?',
                    'Need service for your IMA Schelling panel saw?',
                    'Potřebujete servis pro vaši formátovací pilu IMA Schelling?',
                  )}
                </p>
                <a href={inquiryMail} className="btn-primary-dark text-sm sm:whitespace-nowrap">
                  <Phone className="w-4 h-4" />
                  {tr('Service anfragen', 'Request service', 'Poptat servis')}
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

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


const BarsHero = () => {
  const css = `
    @keyframes ima-bars-fade {
      0%, 28%   { opacity: 1; }
      33%, 95%  { opacity: 0; }
      100%      { opacity: 1; }
    }
    @keyframes ima-bars-drift {
      0%   { transform: translateY(-2%); }
      100% { transform: translateY(2%); }
    }
    .ima-slide  { animation: ima-bars-fade 12s ease-in-out infinite; }
    .ima-slide-2 { animation-delay: -8s; }
    .ima-slide-3 { animation-delay: -4s; }
    .ima-bar    { animation: ima-bars-drift 8s ease-in-out infinite alternate; }
  `;

  return (
    <section className="relative min-h-[50vh] md:min-h-[55vh] overflow-hidden mb-10 md:mb-16 bg-black">
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

      {/* Bottom-fade so the section blends into the dark page */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/30 to-transparent pointer-events-none" />
    </section>
  );
};

export default ImaSchellingPage;
