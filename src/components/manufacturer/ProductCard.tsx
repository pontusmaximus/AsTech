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
    className="group flex flex-col bg-dark-card border border-white/10 rounded-xl overflow-hidden hover:border-primary/40 hover:-translate-y-1 transition-[transform,border-color,background-color,box-shadow] duration-300 hover:shadow-[0_12px_32px_rgba(0,0,0,0.32)]"
  >
    {/* Image area */}
    <div className="relative aspect-[4/3] overflow-hidden" style={{ backgroundColor: '#f0f1f3' }}>
      <img
        src={image}
        alt={imageAlt}
        className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-[1.04]"
        loading="lazy"
      />
      {badge && (
        <span
          className={`absolute top-3 left-3 text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded ${
            badgeStyle[badge] ?? 'bg-white/15 text-white/70'
          }`}
        >
          {badge}
        </span>
      )}
    </div>

    {/* Card body */}
    <div className="flex flex-col flex-1 p-5">
      {categoryLabel && (
        <span className="text-[10px] uppercase tracking-widest text-primary/80 mb-2">
          {categoryLabel}
        </span>
      )}
      <h3 className="text-base font-semibold text-white mb-2 line-clamp-2 leading-snug group-hover:text-primary/90 transition-colors">
        {name}
      </h3>

      {bullets && bullets.length > 0 && (
        <ul className="space-y-1.5 mb-4 flex-1">
          {bullets.slice(0, 3).map((b) => (
            <li key={b} className="text-xs text-white/60 flex items-start gap-1.5 leading-relaxed">
              <span className="text-primary/50 mt-px">·</span>
              <span className="line-clamp-1">{b}</span>
            </li>
          ))}
        </ul>
      )}

      {(!bullets || bullets.length === 0) && <div className="flex-1" />}

      <span className="inline-flex items-center text-xs font-medium text-primary group-hover:text-primary/80 transition-colors mt-auto">
        {detailLabel}
        <svg
          className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </div>
  </Link>
);

export default ProductCard;
