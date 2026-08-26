import type { Language } from '../../i18n';

/**
 * Wortmarke „Innovationstage 2026" als Vektor-Nachbau.
 * Die drei Chevrons stammen aus dem Event-Logo (zweifarbiger Gelbverlauf),
 * der Schriftzug wird je Sprache gesetzt: Deutsch für de/en, Tschechisch für
 * cz/sk, Ungarisch für hu — wie vom Kunden vorgegeben.
 */

const WORDMARK: Record<Language, { line1: string; line2: string; sub: string }> = {
  de: { line1: 'INNOVATIONS', line2: 'TAGE 2026', sub: 'HOLZ » TECHNIK » ZUKUNFT »' },
  en: { line1: 'INNOVATIONS', line2: 'TAGE 2026', sub: 'HOLZ » TECHNIK » ZUKUNFT »' },
  cz: { line1: 'INOVAČNÍ', line2: 'DNY 2026', sub: 'DŘEVO » TECHNIKA » BUDOUCNOST »' },
  sk: { line1: 'INOVAČNÍ', line2: 'DNY 2026', sub: 'DŘEVO » TECHNIKA » BUDOUCNOST »' },
  hu: { line1: 'INNOVÁCIÓS', line2: 'NAPOK 2026', sub: 'FA » TECHNIKA » JÖVŐ »' },
};

const CHEVRON_LEFT = '#E9D02A';
const CHEVRON_RIGHT = '#F4E13C';
const INK = '#3C3C3B';
const ACCENT = '#EFD500';

const ChevronMark = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 100 170" className={className} role="presentation" aria-hidden="true">
    {[0, 45, 90].map((dy) => (
      <g key={dy} transform={`translate(0 ${dy})`}>
        <path d="M50 0 L0 50 L0 80 L50 30 Z" fill={CHEVRON_LEFT} />
        <path d="M50 0 L100 50 L100 80 L50 30 Z" fill={CHEVRON_RIGHT} />
      </g>
    ))}
  </svg>
);

const InnovationDaysLogo = ({ lang, className = '' }: { lang: Language; className?: string }) => {
  const w = WORDMARK[lang];
  return (
    <div
      className={`flex items-center gap-4 sm:gap-6 ${className}`}
      role="img"
      aria-label={`${w.line1} ${w.line2} — ${w.sub.replace(/»/g, '·')}`}
    >
      <ChevronMark className="h-[4.5rem] sm:h-24 md:h-28 w-auto shrink-0" />
      <div className="font-display font-bold leading-[0.92] tracking-[-0.01em]">
        <span className="block text-[clamp(1.6rem,5vw,3.25rem)]" style={{ color: INK }}>
          {w.line1}
        </span>
        <span className="block text-[clamp(1.6rem,5vw,3.25rem)]" style={{ color: INK }}>
          {w.line2}
        </span>
        <span
          className="block text-[clamp(0.7rem,1.9vw,1.2rem)] tracking-[0.01em] mt-0.5"
          style={{ color: ACCENT }}
        >
          {w.sub}
        </span>
      </div>
    </div>
  );
};

export default InnovationDaysLogo;
