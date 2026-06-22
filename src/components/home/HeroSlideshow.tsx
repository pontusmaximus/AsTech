import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../../App';
import { translatePageText } from '../../i18n/pageTextTranslations';
import { buildMailto } from '../../lib/email';
import { trackEvent } from '../../lib/analytics';
import { HERO_FUNDING } from '../../data/heroFunding';
import { usePrefersReducedMotion } from '../../hooks/use-prefers-reduced-motion';

const SLIDE_COUNT = 3;
const AUTO_MS = 7000;

const VACUUM_IMAGE =
  'https://www.barbaric.at/fileadmin/_processed_/2/9/csm_UWL3-0364_web_7eeaa62d8e.png';
const HUNGARY_IMAGE =
  'https://wunderbaresungarn.de/wp-content/uploads/2020/08/balaton-felvidek-szet-gyorgy-hegy-kapolna-keszthelyi-hegyseg-tapolcai-medence-2020aprilis-josef-jordan4-csodalatosbalaton.jpg';

/**
 * Startseiten-Hero als Crossfade-Slideshow.
 * Slide 1: bestehender dunkler Hero (Technologie/Lösungen).
 * Slide 2: heller Barbaric-Vakuumheber-Slide nach Skizze.
 * Auto-Advance (Pause bei Hover), Dots, GSAP-Eintritt pro aktivem Slide,
 * vollständig deaktiviert bei prefers-reduced-motion.
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

  const heroLines = [
    tr('Technologie mit Erfahrung.', 'Technology with experience.', 'Technologie se zkušeností.'),
    tr('Lösungen mit Zukunft.', 'Solutions with a future.', 'Řešení s budoucností.'),
  ];
  const funding = HERO_FUNDING[lang];

  // Headline-Wortspiel „entlassen vs. entlasten" – nativ pro Sprache
  // (HU/SK hier bewusst eigenständig statt tr()-Fallback).
  const hl = ({
    de: { strike: 'Entlassen', rest: ' Sie Ihre Arbeitnehmer –', pre: 'oder ', accent: 'entlasten', post: ' Sie Ihr Team.' },
    en: { strike: 'Lay off', rest: ' your workers –', pre: 'or ', accent: 'relieve', post: ' your team.' },
    cz: { strike: 'Propusťte', rest: ' své zaměstnance –', pre: 'nebo jim ', accent: 'ulevte', post: '.' },
    sk: { strike: 'Prepustite', rest: ' svojich zamestnancov –', pre: 'alebo im ', accent: 'uľavte', post: '.' },
    hu: { strike: 'Bocsássa el', rest: ' a dolgozóit –', pre: 'vagy ', accent: 'tehermentesítse', post: ' a csapatát.' },
  } as const)[lang];

  // Slide 3 — „Asamer goes Hungary" (nativ pro Sprache, HU besonders relevant)
  const hungaryInquiryMail = buildMailto(
    'max@asamer.net',
    tr('Anfrage – Asamer in Ungarn', 'Inquiry – Asamer in Hungary', 'Poptávka – Asamer v Maďarsku')
  );
  const hu3 = ({
    de: { eyebrow: 'Asamer · Neu in Ungarn', body: 'Wir bauen ein neues Vertriebsnetzwerk in Ungarn auf – für bestmöglichen Service, Support und das passende Maschinenportfolio. Wir freuen uns auf Ihre Anfrage.', cta: 'Anfrage senden' },
    en: { eyebrow: 'Asamer · Now in Hungary', body: 'We’re building a new sales network in Hungary – for the best possible service, support and machine portfolio. We look forward to your inquiry.', cta: 'Send inquiry' },
    cz: { eyebrow: 'Asamer · Nově v Maďarsku', body: 'Budujeme novou prodejní síť v Maďarsku – pro nejlepší možný servis, podporu a portfolio strojů. Těšíme se na vaši poptávku.', cta: 'Odeslat poptávku' },
    sk: { eyebrow: 'Asamer · Novo v Maďarsku', body: 'Budujeme novú predajnú sieť v Maďarsku – pre čo najlepší servis, podporu a portfólio strojov. Tešíme sa na váš dopyt.', cta: 'Odoslať dopyt' },
    hu: { eyebrow: 'Asamer · Már Magyarországon', body: 'Új értékesítési hálózatot építünk Magyarországon – a lehető legjobb szerviz, támogatás és gépportfólió érdekében. Várjuk megkeresését.', cta: 'Ajánlatkérés' },
  } as const)[lang];

  const rootRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const reduceMotion = usePrefersReducedMotion();

  // Auto-Advance — läuft immer automatisch, kein Klick und keine Hover-Pause.
  useEffect(() => {
    const id = window.setInterval(() => setActive((i) => (i + 1) % SLIDE_COUNT), AUTO_MS);
    return () => window.clearInterval(id);
  }, []);

  // Sanfter Reveal pro Slide rein über CSS (keine GSAP-Abhängigkeit) – der
  // aktive Slide-Inhalt fährt leicht hoch, sichtbarer Endzustand ist garantiert
  // (kein „stuck at opacity 0" bei Autoplay-Wechseln/StrictMode).
  const contentClass = (i: number) =>
    reduceMotion ? '' : `transition-transform duration-700 ease-out ${i === active ? 'translate-y-0' : 'translate-y-4'}`;

  const slideLayer = (i: number) =>
    `absolute inset-0 flex items-center transition-opacity duration-700 ease-out ${
      i === active ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`;

  return (
    <section
      ref={rootRef}
      className="relative min-h-[100svh] md:min-h-[100vh] flex items-center overflow-hidden"
      aria-roledescription="carousel"
      aria-label={tr('Startseiten-Slideshow', 'Homepage slideshow', 'Úvodní slideshow')}
    >
      {/* ── Slide 1 — dunkel (bestehend) ── */}
      <div data-slide={0} aria-hidden={active !== 0} className={slideLayer(0)}>
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center scale-100"
            style={{ backgroundImage: 'url(https://www.ottpaul.com/fileadmin/_processed_/d/7/csm_translift_storm_system_4f9149b8e4.jpg)' }}
          />
          <div className="hero-overlay-vertical absolute inset-0" />
          <div className="hero-overlay-horizontal absolute inset-0" />
          <div className="absolute inset-0 grid-pattern opacity-50" />
        </div>

        <div className={`relative z-10 w-full container-wide pt-20 sm:pt-28 md:pt-32 pb-6 sm:pb-10 md:pb-12 ${contentClass(0)}`}>
          <div className="max-w-5xl">
            <h1 className="mt-6 sm:mt-10 md:mt-8 lg:mt-6 mb-5 sm:mb-8">
              <span className="hero-title-line block font-display font-bold text-[clamp(2.25rem,8vw,6rem)] sm:text-[clamp(2.5rem,8vw,6rem)] leading-[1.05] tracking-[-0.02em] text-white">
                {heroLines[0]}
              </span>
              <span className="hero-title-line block font-display font-bold text-[clamp(2.25rem,8vw,6rem)] sm:text-[clamp(2.5rem,8vw,6rem)] leading-[1.05] tracking-[-0.02em] text-primary mt-2">
                {heroLines[1]}
              </span>
            </h1>
            <p className="hero-subtitle text-base sm:text-lg md:text-2xl text-white/60 max-w-2xl mb-6 sm:mb-10 leading-relaxed">
              {t.hero.subheadline}
            </p>

            <div className="hero-cta flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-6 mb-2 sm:mb-0">
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

      {/* ── Slide 2 — hell, Barbaric Vakuumheber ── */}
      <div data-slide={1} aria-hidden={active !== 1} className={slideLayer(1)}>
        <div className="absolute inset-0 bg-[#eef1f6]">
          {/* feines Raster wie in der Skizze */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.04) 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />
          {/* Maschinenfoto rechts */}
          <div
            className="absolute inset-y-0 right-0 w-full md:w-[62%] bg-no-repeat bg-right bg-contain"
            style={{ backgroundImage: `url(${VACUUM_IMAGE})` }}
          />
          {/* Lesbarkeits-Gradient nach links */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#eef1f6] via-[#eef1f6]/90 to-[#eef1f6]/20 md:via-[#eef1f6]/80 md:to-transparent" />
        </div>

        <div className={`relative z-10 w-full container-wide pt-20 sm:pt-28 md:pt-32 pb-10 ${contentClass(1)}`}>
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <span className="hero-subtitle inline-block text-xs sm:text-sm uppercase tracking-[0.2em] text-primary font-medium mb-5">
              {tr('Barbaric · Vakuum-Handling für Holz', 'Barbaric · Vacuum handling for wood', 'Barbaric · Vakuová manipulace se dřevem')}
            </span>

            {/* Headline: "Entlassen" durchgestrichen, "entlasten" blau */}
            <h2 className="mb-5 font-display font-bold text-[clamp(2rem,6vw,4.5rem)] leading-[1.07] tracking-[-0.02em] text-[#0f172a]">
              <span className="hero-title-line block">
                <span className="line-through decoration-red-600 decoration-[3px] text-[#0f172a]/45">{hl.strike}</span>
                {hl.rest}
              </span>
              <span className="hero-title-line block mt-1">
                {hl.pre}
                <span className="text-primary">{hl.accent}</span>
                {hl.post}
              </span>
            </h2>

            {/* Subline */}
            <p className="hero-subtitle text-lg sm:text-2xl font-display font-medium text-[#0f172a] mb-3">
              {tr('Denken Sie an morgen', 'Think about tomorrow', 'Myslete na zítřek')}
              <span className="text-red-600">.</span>
            </p>

            {/* Body */}
            <p className="hero-subtitle text-sm sm:text-base text-[#0f172a]/65 max-w-xl mb-6 leading-relaxed">
              {tr(
                'Eine einzige Person bewegt mühelos große, schwere Platten – ergonomisch, sicher und schnell. So schützen Sie Ihre Fachkräfte und halten sie im Betrieb.',
                'A single person moves large, heavy panels effortlessly – ergonomic, safe and fast. Protect your skilled workers and keep them on the team.',
                'Jediný člověk snadno přesune velké, těžké desky – ergonomicky, bezpečně a rychle. Chraňte své odborníky a udržte si je.'
              )}
            </p>

            {/* Förderungs-Badge: weiße Karte, roter linker Rand, Programm je Sprache */}
            <a
              href={buildPath('/financovani')}
              className="hero-subtitle inline-flex items-stretch rounded-xl bg-white border border-black/5 border-l-4 border-l-red-600 shadow-sm overflow-hidden mb-7 max-w-md hover:shadow-md transition-shadow"
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

            {/* CTAs */}
            <div className="hero-cta flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
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
      <div data-slide={2} aria-hidden={active !== 2} className={slideLayer(2)}>
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${HUNGARY_IMAGE})` }}
          />
          <div className="hero-overlay-vertical absolute inset-0" />
          <div className="hero-overlay-horizontal absolute inset-0" />
          <div className="absolute inset-0 grid-pattern opacity-40" />
        </div>

        <div className={`relative z-10 w-full container-wide pt-20 sm:pt-28 md:pt-32 pb-6 sm:pb-10 md:pb-12 ${contentClass(2)}`}>
          <div className="max-w-3xl">
            <span className="hero-subtitle inline-block text-xs sm:text-sm uppercase tracking-[0.2em] text-white/80 font-medium mb-5">
              {hu3.eyebrow}
            </span>
            <h2 className="hero-title-line font-display font-bold text-[clamp(2.25rem,8vw,6rem)] leading-[1.05] tracking-[-0.02em] text-white mb-5 sm:mb-6">
              Asamer goes <span className="text-primary">Hungary</span>.
            </h2>
            <p className="hero-subtitle text-base sm:text-lg md:text-2xl text-white/70 max-w-2xl mb-6 sm:mb-8 leading-relaxed">
              {hu3.body}
            </p>
            <div className="hero-cta flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
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
