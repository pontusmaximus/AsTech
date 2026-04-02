import { Link } from 'react-router-dom';

export interface ProductCardProps {
  to: string;
  image: string;
  imageAlt: string;
  badge?: string;
  categoryLabel?: string;
  name: string;
  bullets?: string[];
  detailLabel: string;
}

const badgeStyle: Record<string, string> = {
  NEU: 'bg-emerald-500 text-white',
  FLAGGSCHIFF: 'bg-primary text-white',
  SPEZIAL: 'bg-purple-500 text-white',
  PROFI: 'bg-blue-500 text-white',
  ADDON: 'bg-amber-600 text-white',
  SYSTEM: 'bg-cyan-600 text-white',
  TOP: 'bg-emerald-500 text-white',
};

const ProductCard = ({
  to,
  image,
  imageAlt,
  badge,
  categoryLabel,
  name,
  bullets,
  detailLabel,
}: ProductCardProps) => (
  <Link
    to={to}
    className="group flex flex-col bg-white/[0.04] border border-white/10 rounded-sm hover:border-primary/40 hover:bg-white/[0.06] transition-all"
  >
    {/* Image area */}
    <div className="relative aspect-[4/3] bg-dark-elevated border-b border-white/8 overflow-hidden">
      <img
        src={image}
        alt={imageAlt}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        loading="lazy"
      />
      {badge && (
        <span
          className={`absolute top-2.5 left-2.5 text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 ${
            badgeStyle[badge] ?? 'bg-white/15 text-white/70'
          }`}
        >
          {badge}
        </span>
      )}
    </div>

    {/* Card body */}
    <div className="flex flex-col flex-1 p-4">
      {categoryLabel && (
        <span className="text-[10px] uppercase tracking-widest text-white/25 mb-1.5">
          {categoryLabel}
        </span>
      )}
      <h3 className="text-base font-semibold text-white mb-2 line-clamp-2 leading-snug">
        {name}
      </h3>

      {bullets && bullets.length > 0 && (
        <ul className="space-y-1 mb-4 flex-1">
          {bullets.slice(0, 3).map((b) => (
            <li key={b} className="text-xs text-white/50 flex items-start gap-1.5">
              <span className="text-white/25 mt-px">·</span>
              <span className="line-clamp-1">{b}</span>
            </li>
          ))}
        </ul>
      )}

      {(!bullets || bullets.length === 0) && <div className="flex-1" />}

      <span className="inline-flex items-center text-xs font-medium text-primary group-hover:text-primary/80 transition-colors mt-auto">
        {detailLabel}
        <svg className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </div>
  </Link>
);

export default ProductCard;
