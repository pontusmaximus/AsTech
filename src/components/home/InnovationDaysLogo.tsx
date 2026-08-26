import type { Language } from '../../i18n';

/**
 * Event-Logo „Innovationstage 2026" als Bild, Sprachzuordnung wie vom Kunden
 * vorgegeben: deutsches Logo für de/en, tschechisches für cz/sk, ungarisches
 * für hu. Die Logos liegen freigestellt als PNG mit Alphakanal vor, damit sie
 * auf jedem Slide-Hintergrund ohne sichtbaren weißen Kasten sitzen.
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
