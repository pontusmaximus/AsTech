import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

interface CategorySectionProps {
  id: string;
  label: string;
  subtitle?: string;
  productCount: number;
  defaultOpen?: boolean;
  brandColor?: string;
  /** Optionaler Link zur Kategorie-Übersichtsseite. */
  moreLink?: { to: string; label: string };
  children: React.ReactNode;
}

const CategorySection = ({
  id,
  label,
  subtitle,
  productCount,
  moreLink,
  children,
}: CategorySectionProps) => (
  <section id={`cat-${id}`} className="mb-6 scroll-mt-[120px]">
    <div className="flex flex-wrap items-baseline gap-3 mb-3">
      <h2 className="text-lg font-display font-light text-white">{label}</h2>
      <span className="text-xs text-white/25">{productCount}</span>
      {subtitle && <span className="text-xs text-white/35 hidden sm:inline">· {subtitle}</span>}
      {moreLink && (
        <Link
          to={moreLink.to}
          className="ml-auto inline-flex items-center gap-1 text-xs text-primary/70 hover:text-primary transition-colors"
        >
          {moreLink.label}
          <ArrowUpRight className="w-3 h-3" />
        </Link>
      )}
    </div>
    {children}
  </section>
);

export default CategorySection;
