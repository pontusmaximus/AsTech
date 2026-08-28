import { Link } from 'react-router-dom';

export interface ProductCardProps {
  to: string;
  image: string;
  imageAlt: string;
  /** Kennzahl unter dem Produktnamen, z. B. Vorschub "18 m/min" */
  kpiLabel?: string;
  kpiValue?: string;
  categoryLabel?: string;
  name: string;
  bullets?: string[];
  detailLabel: string;
}

const ProductCard = ({
  to,
  image,
  imageAlt,
  kpiLabel,
  kpiValue,
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

      {kpiValue && (
        <div className="flex items-baseline gap-2 mb-3 pb-3 border-b border-white/[0.07]">
          <span className="text-sm font-semibold text-primary tabular-nums">{kpiValue}</span>
          {kpiLabel && (
            <span className="text-[10px] uppercase tracking-widest text-white/35">{kpiLabel}</span>
          )}
        </div>
      )}

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
