import type { Language } from '../../i18n';

/**
 * Event-Logo „Innovationstage 2026" als Bild, Sprachzuordnung wie vom Kunden
 * vorgegeben: deutsches Logo für de/en, tschechisches für cz/sk, ungarisches
 * für hu. Die PNGs sind freigestellt und in der Invers-Fassung abgelegt: weiße
 * Wortmarke, Chevrons und Unterzeile im Event-Gelb. Auf dem dunklen Slide bleibt
 * damit auch die gelbe Unterzeile lesbar — auf hellem Grund wäre sie es nicht.
 */

type Variant = { src: string; alt: string };

const DE: Variant = {
  src: '/images/events/innovationstage-2026-de.png',
  alt: 'Innovationstage 2026 – Holz, Technik, Zukunft',
};
const CZ: Variant = {
  src: '/images/events/innovationstage-2026-cz.png',
  alt: 'Inovační dny 2026 – dřevo, technika, budoucnost',
};
const HU: Variant = {
  src: '/images/events/innovationstage-2026-hu.png',
  alt: 'Innovációs Napok 2026 – fa, technika, jövő',
};

const VARIANTS: Record<Language, Variant> = {
  de: DE,
  en: DE,
  cz: CZ,
  sk: CZ,
  hu: HU,
};

/**
 * Chevron-Zeichen des Event-Logos als eigenständige Marke — für kleine Flächen
 * (Teaser-Badge), wo der volle Schriftzug nicht lesbar wäre. Einfarbig, die
 * Farbe kommt über `currentColor` vom Elternelement.
 */
export const EventChevronMark = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 100 170" className={className} role="presentation" aria-hidden="true" fill="currentColor">
    {[0, 45, 90].map((dy) => (
      <path key={dy} d={`M50 ${dy} L100 ${dy + 50} L100 ${dy + 80} L50 ${dy + 30} L0 ${dy + 80} L0 ${dy + 50} Z`} />
    ))}
  </svg>
);

const InnovationDaysLogo = ({ lang, className = '' }: { lang: Language; className?: string }) => {
  const { src, alt } = VARIANTS[lang];
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={`w-[min(100%,17rem)] h-auto sm:w-auto sm:h-24 md:h-28 object-contain object-left ${className}`}
    />
  );
};

export default InnovationDaysLogo;
