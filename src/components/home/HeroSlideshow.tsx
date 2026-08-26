import { useEffect, useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../../App';
import { translatePageText } from '../../i18n/pageTextTranslations';
import { buildMailto } from '../../lib/email';
import { trackEvent } from '../../lib/analytics';
import { HERO_FUNDING } from '../../data/heroFunding';
import { usePrefersReducedMotion } from '../../hooks/use-prefers-reduced-motion';
import InnovationDaysLogo from './InnovationDaysLogo';

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
      eyebrow: 'Asamer · Innovationstage 2026',
      headline: 'Willkommen zu unseren Innovationstagen.',
      body: 'Erleben Sie Holz, Technik und Zukunft live bei uns vor Ort. Melden Sie sich hier bei uns an – wir freuen uns auf Ihren Besuch.',
      cta: 'Jetzt anmelden',
    },
    en: {
      eyebrow: 'Asamer · Innovation Days 2026',
      headline: 'Welcome to our Innovation Days.',
      body: 'Experience wood, technology and the future live on site. Register with us here – we look forward to your visit.',
      cta: 'Register now',
    },
    cz: {
      eyebrow: 'Asamer · Inovační dny 2026',
      headline: 'Vítejte na našich Inovačních dnech.',
      body: 'Zažijte dřevo, techniku a budoucnost naživo u nás. Přihlaste se u nás zde – těšíme se na vaši návštěvu.',
      cta: 'Přihlásit se',
    },
    sk: {
      eyebrow: 'Asamer · Inovačné dni 2026',
      headline: 'Vitajte na našich Inovačných dňoch.',
      body: 'Zažite drevo, techniku a budúcnosť naživo u nás. Prihláste sa u nás tu – tešíme sa na vašu návštevu.',
      cta: 'Prihlásiť sa',
    },
    hu: {
      eyebrow: 'Asamer · Innovációs Napok 2026',
      headline: 'Üdvözöljük Innovációs Napjainkon.',
      body: 'Tapasztalja meg élőben a fát, a technikát és a jövőt nálunk. Jelentkezzen nálunk itt – várjuk látogatását.',
      cta: 'Jelentkezem',
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
            </div>
          </div>
        </div>

        {/* ── Slide 2 — Innovationstage 2026 ── */}
        <div className="relative w-full shrink-0 flex items-center">
          <div className="absolute inset-0 overflow-hidden bg-[#eef1f6]">
            <div className="absolute inset-0 bg-[radial-gradient(130%_100%_at_12%_0%,#ffffff_0%,#f2f4f8_50%,#e3e7ee_100%)]" />
            {/* dezenter gelber Lichtkegel in Event-Farbe */}
            <div className="absolute -top-1/3 right-[-10%] w-[70vw] h-[70vw] rounded-full bg-[#EFD500]/15 blur-3xl" />
          </div>

          <div className={`relative z-10 w-full container-wide pt-20 sm:pt-28 md:pt-32 pb-6 sm:pb-10 md:pb-12 ${contentClass(1)}`}>
            <div className="max-w-3xl">
              <span className="inline-block text-xs sm:text-sm uppercase tracking-[0.2em] text-primary font-medium mb-5">
                {ev.eyebrow}
              </span>

              <InnovationDaysLogo lang={lang} className="mb-7 sm:mb-9" />

              <h2 className="font-display font-bold text-[clamp(1.75rem,5vw,3.5rem)] leading-[1.08] tracking-[-0.02em] text-[#0f172a] mb-4 sm:mb-5">
                {ev.headline}
              </h2>
              <p className="text-base sm:text-lg text-[#0f172a]/70 max-w-2xl mb-6 sm:mb-8 leading-relaxed">
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
