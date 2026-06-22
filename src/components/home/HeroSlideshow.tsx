import { useEffect, useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../../App';
import { translatePageText } from '../../i18n/pageTextTranslations';
import { buildMailto } from '../../lib/email';
import { trackEvent } from '../../lib/analytics';
import { HERO_FUNDING } from '../../data/heroFunding';
import { usePrefersReducedMotion } from '../../hooks/use-prefers-reduced-motion';

const SLIDE_COUNT = 3;
const AUTO_MS = 7000;

const OTT_IMAGE =
  'https://www.ottpaul.com/fileadmin/_processed_/d/7/csm_translift_storm_system_4f9149b8e4.jpg';
const VACUUM_IMAGE =
  'https://www.barbaric.at/fileadmin/_processed_/2/9/csm_UWL3-0364_web_7eeaa62d8e.png';
const HUNGARY_IMAGE =
  'https://wunderbaresungarn.de/wp-content/uploads/2020/08/balaton-felvidek-szet-gyorgy-hegy-kapolna-keszthelyi-hegyseg-tapolcai-medence-2020aprilis-josef-jordan4-csodalatosbalaton.jpg';

/**
 * Startseiten-Hero als automatische Slideshow.
 * Slide 1: dunkler Hero (Technologie/Lösungen).
 * Slide 2: Barbaric-Vakuumheber – Vollbild-Hintergrundbild, helle Schrift-Zone.
 * Slide 3: „Asamer goes Hungary".
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
  const hungaryInquiryMail = buildMailto(
    'max@asamer.net',
    tr('Anfrage – Asamer goes Hungary', 'Inquiry – Asamer goes Hungary', 'Poptávka – Asamer goes Hungary')
  );

  const heroLines = [
    tr('Technologie mit Erfahrung.', 'Technology with experience.', 'Technologie se zkušeností.'),
    tr('Lösungen mit Zukunft.', 'Solutions with a future.', 'Řešení s budoucností.'),
  ];
  const funding = HERO_FUNDING[lang];

  // Headline-Wortspiel „entlassen vs. entlasten" – nativ pro Sprache.
  const hl = ({
    de: { strike: 'Entlassen', rest: ' Sie Ihre Arbeitnehmer –', pre: 'oder ', accent: 'entlasten', post: ' Sie Ihr Team.' },
    en: { strike: 'Lay off', rest: ' your workers –', pre: 'or ', accent: 'relieve', post: ' your team.' },
    cz: { strike: 'Propusťte', rest: ' své zaměstnance –', pre: 'nebo jim ', accent: 'ulevte', post: '.' },
    sk: { strike: 'Prepustite', rest: ' svojich zamestnancov –', pre: 'alebo im ', accent: 'uľavte', post: '.' },
    hu: { strike: 'Bocsássa el', rest: ' a dolgozóit –', pre: 'vagy ', accent: 'tehermentesítse', post: ' a csapatát.' },
  } as const)[lang];

  const hu3 = ({
    de: { eyebrow: 'Asamer · Neu in Ungarn', body: 'Wir bauen ein neues Vertriebsnetzwerk in Ungarn auf – für bestmöglichen Service, Support und das passende Maschinenportfolio. Wir freuen uns auf Ihre Anfrage.', cta: 'Anfrage senden' },
    en: { eyebrow: 'Asamer · Now in Hungary', body: 'We’re building a new sales network in Hungary – for the best possible service, support and machine portfolio. We look forward to your inquiry.', cta: 'Send inquiry' },
    cz: { eyebrow: 'Asamer · Nově v Maďarsku', body: 'Budujeme novou prodejní síť v Maďarsku – pro nejlepší možný servis, podporu a portfolio strojů. Těšíme se na vaši poptávku.', cta: 'Odeslat poptávku' },
    sk: { eyebrow: 'Asamer · Novo v Maďarsku', body: 'Budujeme novú predajnú sieť v Maďarsku – pre čo najlepší servis, podporu a portfólio strojov. Tešíme sa na váš dopyt.', cta: 'Odoslať dopyt' },
    hu: { eyebrow: 'Asamer · Már Magyarországon', body: 'Új értékesítési hálózatot építünk Magyarországon – a lehető legjobb szerviz, támogatás és gépportfólió érdekében. Várjuk megkeresését.', cta: 'Ajánlatkérés' },
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

        {/* ── Slide 2 — Barbaric Vakuumheber, Vollbild-Hintergrundbild ── */}
        <div className="relative w-full shrink-0 flex items-center">
          <div className="absolute inset-0 overflow-hidden bg-[#eef1f6]">
            <div className={kenBurns(1)} style={kenBurnsStyle(VACUUM_IMAGE)} />
            {/* Lesbarkeits-Verlauf: links deckend hell, rechts Bild sichtbar */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#eef1f6] via-[#eef1f6]/85 to-[#eef1f6]/25" />
          </div>

          <div className={`relative z-10 w-full container-wide pt-20 sm:pt-28 md:pt-32 pb-10 ${contentClass(1)}`}>
            <div className="max-w-2xl">
              <span className="inline-block text-xs sm:text-sm uppercase tracking-[0.2em] text-primary font-medium mb-5">
                {tr('Barbaric · Vakuum-Handling für Holz', 'Barbaric · Vacuum handling for wood', 'Barbaric · Vakuová manipulace se dřevem')}
              </span>

              <h2 className="mb-5 font-display font-bold text-[clamp(2rem,6vw,4.5rem)] leading-[1.07] tracking-[-0.02em] text-[#0f172a]">
                <span className="block">
                  <span className="line-through decoration-red-600 decoration-[3px] text-[#0f172a]/45">{hl.strike}</span>
                  {hl.rest}
                </span>
                <span className="block mt-1">
                  {hl.pre}
                  <span className="text-primary">{hl.accent}</span>
                  {hl.post}
                </span>
              </h2>

              <p className="text-lg sm:text-2xl font-display font-medium text-[#0f172a] mb-3">
                {tr('Denken Sie an morgen', 'Think about tomorrow', 'Myslete na zítřek')}
                <span className="text-red-600">.</span>
              </p>

              <p className="text-sm sm:text-base text-[#0f172a]/70 max-w-xl mb-6 leading-relaxed">
                {tr(
                  'Eine einzige Person bewegt mühelos große, schwere Platten – ergonomisch, sicher und schnell. So schützen Sie Ihre Fachkräfte und halten sie im Betrieb.',
                  'A single person moves large, heavy panels effortlessly – ergonomic, safe and fast. Protect your skilled workers and keep them on the team.',
                  'Jediný člověk snadno přesune velké, těžké desky – ergonomicky, bezpečně a rychle. Chraňte své odborníky a udržte si je.'
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

        {/* ── Slide 3 — Asamer goes Hungary ── */}
        <div className="relative w-full shrink-0 flex items-center">
          <div className="absolute inset-0 overflow-hidden">
            <div className={kenBurns(2)} style={kenBurnsStyle(HUNGARY_IMAGE)} />
            <div className="hero-overlay-vertical absolute inset-0" />
            <div className="hero-overlay-horizontal absolute inset-0" />
            <div className="absolute inset-0 grid-pattern opacity-40" />
          </div>

          <div className={`relative z-10 w-full container-wide pt-20 sm:pt-28 md:pt-32 pb-6 sm:pb-10 md:pb-12 ${contentClass(2)}`}>
            <div className="max-w-3xl">
              <span className="inline-block text-xs sm:text-sm uppercase tracking-[0.2em] text-white/80 font-medium mb-5">
                {hu3.eyebrow}
              </span>
              <h2 className="font-display font-bold text-[clamp(2.25rem,8vw,6rem)] leading-[1.05] tracking-[-0.02em] text-white mb-5 sm:mb-6">
                Asamer goes <span className="text-primary">Hungary</span>.
              </h2>
              <p className="text-base sm:text-lg md:text-2xl text-white/70 max-w-2xl mb-6 sm:mb-8 leading-relaxed">
                {hu3.body}
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
                <a
                  href={hungaryInquiryMail}
                  className="btn-primary-dark"
                  onClick={() => trackEvent('hero_contact_click', { placement: 'home_hero_hungary', lang, target: 'max@asamer.net' })}
                >
                  {hu3.cta}
                  <ArrowRight className="w-5 h-5" />
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
