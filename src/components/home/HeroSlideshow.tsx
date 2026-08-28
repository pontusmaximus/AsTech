import { useEffect, useState } from 'react';
import { ArrowRight, ArrowUpRight, CalendarDays } from 'lucide-react';
import { useLanguage } from '../../App';
import { translatePageText } from '../../i18n/pageTextTranslations';
import { buildMailto } from '../../lib/email';
import { trackEvent } from '../../lib/analytics';
import { HERO_FUNDING } from '../../data/heroFunding';
import { usePrefersReducedMotion } from '../../hooks/use-prefers-reduced-motion';
import InnovationDaysLogo, { EventChevronMark } from './InnovationDaysLogo';

const SLIDE_COUNT = 3;
const AUTO_MS = 7000;

const OTT_IMAGE =
  'https://www.ottpaul.com/fileadmin/_processed_/d/7/csm_translift_storm_system_4f9149b8e4.jpg';
const VACUUM_IMAGE =
  'https://www.barbaric.at/fileadmin/_processed_/2/9/csm_UWL3-0364_web_7eeaa62d8e.png';

/**
 * Startseiten-Hero als automatische Slideshow.
 * Slide 1: dunkler Hero (Technologie/Lösungen).
 * Slide 2: „Innovationstage 2026" – Event-Logo je Sprache + Anmeldung.
 * Slide 3: Barbaric-Vakuumheber – Vollbild-Hintergrundbild, helle Schrift-Zone.
 * Animation: horizontaler Swipe (Track) + Content-Fade/Rise + langsamer
 * Ken-Burns-Zoom auf den Bildern. Rein CSS (kein GSAP). Läuft immer automatisch;
 * bei prefers-reduced-motion ohne Bewegung (harter Schnitt, alles sichtbar).
 */
const HeroSlideshow = () => {
  const { t, lang, buildPath } = useLanguage();
  const locale =
    lang === 'de' || lang === 'en' || lang === 'cz' || lang === 'sk' || lang === 'hu'
      ? lang
      : 'en';
  const tr = (de: string, en: string, cz: string) => {
    if (locale === 'de') return de;
    if (locale === 'cz') return cz;
    if (locale === 'sk' || locale === 'hu') return translatePageText(locale, en, cz);
    return en;
  };

  const generalInquiryMail = buildMailto(
    'office@asamer.net',
    tr('Projektanfrage Asamer Website', 'Project inquiry Asamer website', 'Projektová poptávka Asamer web')
  );
  const vacuumInquiryMail = buildMailto(
    'office@asamer.net',
    tr('Beratung Vakuumheber Barbaric', 'Vacuum lifter consultation', 'Konzultace vakuový zvedák Barbaric')
  );
  const eventInquiryMail = buildMailto(
    'eli@asamer.net',
    tr('Anmeldung Innovationstage 2026', 'Registration Innovation Days 2026', 'Registrace Inovační dny 2026')
  );

  const heroLines = [
    tr('Technologie mit Erfahrung.', 'Technology with experience.', 'Technologie se zkušeností.'),
    tr('Lösungen mit Zukunft.', 'Solutions with a future.', 'Řešení s budoucností.'),
  ];
  const funding = HERO_FUNDING[lang];

  const slide2Hl = ({
    de: { line1: 'Wir unterstützen Ihre Arbeitsprozesse', accent: 'Barbaric', post: ' Vakuum-Handling.' },
    en: { line1: 'We support your work processes with', accent: 'Barbaric', post: ' vacuum handling.' },
    cz: { line1: 'Podporujeme vaše pracovní procesy', accent: 'Barbaric', post: ' vakuovou manipulací.' },
    sk: { line1: 'Podporujeme vaše pracovné procesy', accent: 'Barbaric', post: ' vakuovou manipuláciou.' },
    hu: { line1: 'Támogatjuk az Ön munkafolyamatait', accent: 'Barbaric', post: ' vákuumos anyagmozgatással.' },
  } as const)[lang];

  const ev = ({
    de: {
      eyebrow: 'Asamer · Innovationstage 2026 bei OTT Paul',
      headline: 'Willkommen zu unseren Innovationstagen.',
      date: '30.09. – 01.11.2026',
      body: 'Wir laden Sie herzlich zu den Innovationstagen 2026 bei OTT Paul ein. Lernen Sie die gesamte Produktion und den Betrieb der OTT Paul Kantenanleimmaschinen direkt im Werk kennen – Holz, Technik und Zukunft live vor Ort. Melden Sie sich hier bei uns an.',
      cta: 'Jetzt anmelden',
      teaserLabel: 'Einladung',
      teaser: 'Innovationstage 2026 bei OTT Paul · 30.09. – 01.11.',
    },
    en: {
      eyebrow: 'Asamer · Innovation Days 2026 at OTT Paul',
      headline: 'Welcome to our Innovation Days.',
      date: '30 Sep – 1 Nov 2026',
      body: 'We warmly invite you to the Innovation Days 2026 at OTT Paul. Get to know the entire production and operation of OTT Paul edgebanding machines directly at the factory – wood, technology and the future live on site. Register with us here.',
      cta: 'Register now',
      teaserLabel: 'Invitation',
      teaser: 'Innovation Days 2026 at OTT Paul · 30 Sep – 1 Nov',
    },
    cz: {
      eyebrow: 'Asamer · Inovační dny 2026 u OTT Paul',
      headline: 'Vítejte na našich Inovačních dnech.',
      date: '30. 9. – 1. 11. 2026',
      body: 'Srdečně vás zveme na Inovační dny 2026 u OTT Paul. Poznejte celou výrobu a provoz olepovaček hran OTT Paul přímo v závodě – dřevo, techniku a budoucnost naživo. Přihlaste se u nás zde.',
      cta: 'Přihlásit se',
      teaserLabel: 'Pozvánka',
      teaser: 'Inovační dny 2026 u OTT Paul · 30. 9. – 1. 11.',
    },
    sk: {
      eyebrow: 'Asamer · Inovačné dni 2026 u OTT Paul',
      headline: 'Vitajte na našich Inovačných dňoch.',
      date: '30. 9. – 1. 11. 2026',
      body: 'Srdečne vás pozývame na Inovačné dni 2026 u OTT Paul. Spoznajte celú výrobu a prevádzku olepovačiek hrán OTT Paul priamo v závode – drevo, techniku a budúcnosť naživo. Prihláste sa u nás tu.',
      cta: 'Prihlásiť sa',
      teaserLabel: 'Pozvánka',
      teaser: 'Inovačné dni 2026 u OTT Paul · 30. 9. – 1. 11.',
    },
    hu: {
      eyebrow: 'Asamer · Innovációs Napok 2026 az OTT Paulnál',
      headline: 'Üdvözöljük Innovációs Napjainkon.',
      date: '2026. 09. 30. – 11. 01.',
      body: 'Szeretettel meghívjuk Önt a 2026-os Innovációs Napokra az OTT Paulnál. Ismerje meg az OTT Paul élzárógépek teljes gyártását és üzemeltetését közvetlenül a gyárban – fa, technika és jövő élőben. Jelentkezzen nálunk itt.',
      cta: 'Jelentkezem',
      teaserLabel: 'Meghívó',
      teaser: 'Innovációs Napok 2026 az OTT Paulnál · 2026. 09. 30. – 11. 01.',
    },
  } as const)[lang];

  const [active, setActive] = useState(0);
  const reduceMotion = usePrefersReducedMotion();

  // Auto-Advance — läuft immer automatisch, kein Klick und keine Hover-Pause.
  useEffect(() => {
    const id = window.setInterval(() => setActive((i) => (i + 1) % SLIDE_COUNT), AUTO_MS);
    return () => window.clearInterval(id);
  }, []);

  // Ken-Burns: aktives Bild zoomt langsam, ansonsten Ruhezustand.
  const kenBurns = (i: number) =>
    `absolute inset-0 bg-cover bg-center will-change-transform ${i === active ? 'scale-105' : 'scale-100'}`;
  const kenBurnsStyle = (img: string) => ({
    backgroundImage: `url(${img})`,
    transition: reduceMotion ? 'none' : 'transform 7000ms ease-out',
  });
  // Content fährt sanft hoch und blendet ein, sobald der Slide aktiv ist.
  const contentClass = (i: number) =>
    reduceMotion
      ? ''
      : `transition-all duration-700 ease-out ${i === active ? 'opacity-100 translate-y-0 delay-200' : 'opacity-0 translate-y-6'}`;

  return (
    <section
      className="relative min-h-[100svh] md:min-h-[100vh] overflow-hidden"
      aria-roledescription="carousel"
      aria-label={tr('Startseiten-Slideshow', 'Homepage slideshow', 'Úvodní slideshow')}
    >
      {/* Swipe-Track */}
      <div
        className="absolute inset-0 flex"
        style={{
          transform: `translateX(-${active * 100}%)`,
          transition: reduceMotion ? 'none' : 'transform 1000ms cubic-bezier(0.65, 0.05, 0.2, 1)',
        }}
      >
        {/* ── Slide 1 — dunkel (Technologie / Lösungen) ── */}
        <div className="relative w-full shrink-0 flex items-center">
          <div className="absolute inset-0 overflow-hidden">
            <div className={kenBurns(0)} style={kenBurnsStyle(OTT_IMAGE)} />
            <div className="hero-overlay-vertical absolute inset-0" />
            <div className="hero-overlay-horizontal absolute inset-0" />
            <div className="absolute inset-0 grid-pattern opacity-50" />
          </div>

          <div className={`relative z-10 w-full container-wide pt-20 sm:pt-28 md:pt-32 pb-6 sm:pb-10 md:pb-12 ${contentClass(0)}`}>
            <div className="max-w-5xl">
              <h1 className="mt-6 sm:mt-10 md:mt-8 lg:mt-6 mb-5 sm:mb-8">
                <span className="block font-display font-bold text-[clamp(2.25rem,8vw,6rem)] sm:text-[clamp(2.5rem,8vw,6rem)] leading-[1.05] tracking-[-0.02em] text-white">
                  {heroLines[0]}
                </span>
                <span className="block font-display font-bold text-[clamp(2.25rem,8vw,6rem)] sm:text-[clamp(2.5rem,8vw,6rem)] leading-[1.05] tracking-[-0.02em] text-primary mt-2">
                  {heroLines[1]}
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-2xl text-white/60 max-w-2xl mb-6 sm:mb-10 leading-relaxed">
                {t.hero.subheadline}
              </p>

              <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-6 mb-2 sm:mb-0">
                <a
                  href={generalInquiryMail}
                  className="btn-primary-dark"
                  onClick={() => trackEvent('hero_contact_click', { placement: 'home_hero', lang, target: 'office@asamer.net' })}
                >
                  {t.hero.cta}
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a href={buildPath('/ott')} className="btn-ghost-dark text-sm sm:text-base">
                  {tr('Produkte entdecken', 'Discover products', 'Objevit produkty')}
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              {/* Teaser auf Slide 2 — Event-Chevron auf Gelb, springt direkt zur Einladung.
                  `hero-event-dark`, weil die Karte auch im Light-Mode dunkel bleibt. */}
              <button
                type="button"
                onClick={() => {
                  setActive(1);
                  trackEvent('hero_teaser_click', { placement: 'home_hero_innovationstage_teaser', lang });
                }}
                className="hero-event-dark group mt-7 sm:mt-9 inline-flex max-w-full items-stretch overflow-hidden rounded-xl border border-[#EFD500]/40 bg-[#0b1220]/75 text-left shadow-lg shadow-black/25 backdrop-blur-sm transition-colors hover:border-[#EFD500] hover:bg-[#0b1220]/90"
              >
                <span className="flex shrink-0 items-center bg-[#EFD500] px-3 sm:px-3.5">
                  <EventChevronMark className="h-6 sm:h-7 w-auto text-[#1f2430]" />
                </span>
                <span className="flex items-center gap-3 sm:gap-4 px-3.5 sm:px-4 py-2 sm:py-2.5">
                  <span className="block">
                    <span className="block text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-[#EFD500]">
                      {ev.teaserLabel}
                    </span>
                    <span className="block text-xs sm:text-sm leading-snug text-white">{ev.teaser}</span>
                  </span>
                  <ArrowRight className="w-4 h-4 shrink-0 text-[#EFD500] transition-transform group-hover:translate-x-0.5" />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* ── Slide 2 — Innovationstage 2026 ── */}
        <div className="relative w-full shrink-0 flex items-center">
          <div className="absolute inset-0 overflow-hidden bg-[#0d1526]">
            <div className="absolute inset-0 bg-[radial-gradient(130%_100%_at_12%_0%,#1c2942_0%,#101b30_55%,#070d18_100%)]" />
            {/* gelber Lichtkegel in Event-Farbe */}
            <div className="absolute -top-1/3 right-[-10%] w-[70vw] h-[70vw] rounded-full bg-[#EFD500]/10 blur-3xl" />
            <div className="absolute inset-0 grid-pattern opacity-40" />
          </div>

          <div className={`hero-event-dark relative z-10 w-full container-wide pt-20 sm:pt-28 md:pt-32 pb-6 sm:pb-10 md:pb-12 ${contentClass(1)}`}>
            <div className="max-w-3xl">
              <span className="inline-block text-xs sm:text-sm uppercase tracking-[0.2em] text-[#EFD500] font-medium mb-5">
                {ev.eyebrow}
              </span>

              <InnovationDaysLogo lang={lang} className="mb-7 sm:mb-9" />

              <h2 className="font-display font-bold text-[clamp(1.75rem,5vw,3.5rem)] leading-[1.08] tracking-[-0.02em] text-white mb-4 sm:mb-5">
                {ev.headline}
              </h2>
              <p className="inline-flex items-center gap-2.5 rounded-full border border-[#EFD500]/40 bg-[#EFD500]/10 px-4 py-1.5 text-sm sm:text-base font-semibold tracking-wide text-[#EFD500] mb-4 sm:mb-5">
                <CalendarDays className="w-4 h-4 shrink-0" aria-hidden="true" />
                {ev.date}
              </p>
              <p className="text-base sm:text-lg text-white/70 max-w-2xl mb-6 sm:mb-8 leading-relaxed">
                {ev.body}
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
                <a
                  href={eventInquiryMail}
                  className="btn-primary-dark"
                  onClick={() =>
                    trackEvent('hero_contact_click', {
                      placement: 'home_hero_innovationstage',
                      lang,
                      target: 'eli@asamer.net',
                    })
                  }
                >
                  {ev.cta}
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* ── Slide 3 — Barbaric Vakuumheber, Vollbild-Hintergrundbild ── */}
        <div className="relative w-full shrink-0 flex items-center">
          <div className="absolute inset-0 overflow-hidden bg-[#eef1f6]">
            <div className={kenBurns(2)} style={kenBurnsStyle(VACUUM_IMAGE)} />
            {/* Lesbarkeits-Verlauf: links deckend hell, rechts Bild sichtbar */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#eef1f6] via-[#eef1f6]/85 to-[#eef1f6]/25" />
          </div>

          <div className={`relative z-10 w-full container-wide pt-20 sm:pt-28 md:pt-32 pb-10 ${contentClass(2)}`}>
            <div className="max-w-2xl">
              <span className="inline-block text-xs sm:text-sm uppercase tracking-[0.2em] text-primary font-medium mb-5">
                {tr('Barbaric · Vakuum-Handling für Holz', 'Barbaric · Vacuum handling for wood', 'Barbaric · Vakuová manipulace se dřevem')}
              </span>

              <h2 className="mb-5 font-display font-bold text-[clamp(2rem,6vw,4.5rem)] leading-[1.07] tracking-[-0.02em] text-[#0f172a]">
                <span className="block">{slide2Hl.line1}</span>
                <span className="block mt-1">
                  <span className="text-primary">{slide2Hl.accent}</span>
                  {slide2Hl.post}
                </span>
              </h2>

              <p className="text-lg sm:text-2xl font-display font-medium text-[#0f172a] mb-3">
                {tr('Denken Sie an morgen', 'Think about tomorrow', 'Myslete na zítřek')}
                <span className="text-red-600">.</span>
              </p>

              <p className="text-sm sm:text-base text-[#0f172a]/70 max-w-xl mb-6 leading-relaxed">
                {tr(
                  'Eine einzige Person bewegt mühelos große, schwere Platten – ergonomisch, sicher und schnell. Ob an der Kantenanleimmaschine, Plattenaufteilsäge oder anderen Maschinen: So schützen Sie Ihre Fachkräfte langfristig.',
                  'A single person moves large, heavy panels effortlessly – ergonomic, safe and fast. Whether at the edgebander, panel saw, or any other machine: protect your skilled workers for the long term.',
                  'Jediný člověk snadno přesune velké, těžké desky – ergonomicky, bezpečně a rychle. Ať u okrajovačky, pily nebo jiných strojů: chraňte své odborníky dlouhodobě.'
                )}
              </p>

              {/* Förderungs-Badge: weiße Karte, roter linker Rand, Programm je Sprache */}
              <a
                href={buildPath('/financovani')}
                className="inline-flex items-stretch rounded-xl bg-white border border-black/5 border-l-4 border-l-red-600 shadow-sm overflow-hidden mb-7 max-w-md hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col items-center justify-center bg-primary text-white px-3 py-2 leading-none shrink-0">
                  <span className="text-base font-display font-bold">{funding.percent}</span>
                  <span className="text-[9px] uppercase tracking-wider mt-0.5">{tr('Förderung', 'Funding', 'Dotace')}</span>
                </div>
                <p className="text-xs sm:text-sm text-[#0f172a]/80 px-3 py-2 self-center">
                  {funding.sentencePre}
                  <span className="text-primary font-medium underline decoration-dotted underline-offset-2">{funding.program}</span>
                  {funding.sentencePost}
                </p>
              </a>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                <a
                  href={vacuumInquiryMail}
                  className="btn-primary-dark"
                  onClick={() => trackEvent('hero_contact_click', { placement: 'home_hero_vacuum', lang, target: 'office@asamer.net' })}
                >
                  {tr('Beratung anfragen', 'Request consultation', 'Požádat o konzultaci')}
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href={buildPath('/pruvodce/vakuovy-zvedak-holz')}
                  className="inline-flex items-center justify-center gap-2 rounded-[var(--radius-sm)] bg-white text-[#0f172a] border border-black/10 px-5 py-3 text-sm font-medium hover:bg-black/[0.04] transition-colors"
                >
                  {tr('Mehr erfahren', 'Learn more', 'Zjistit více')}
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* ── Dot-Indikatoren ── */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
        {Array.from({ length: SLIDE_COUNT }).map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`${tr('Slide', 'Slide', 'Snímek')} ${i + 1}`}
            aria-current={active === i}
            className={`h-2.5 rounded-full transition-all ${
              active === i ? 'w-8 bg-primary' : 'w-2.5 bg-zinc-400/70 hover:bg-zinc-300'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlideshow;
