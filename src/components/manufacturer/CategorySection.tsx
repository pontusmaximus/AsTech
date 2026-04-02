interface CategorySectionProps {
  id: string;
  label: string;
  subtitle?: string;
  productCount: number;
  defaultOpen?: boolean;
  brandColor?: string;
  children: React.ReactNode;
}

const CategorySection = ({
  id,
  label,
  subtitle,
  productCount,
  children,
}: CategorySectionProps) => (
  <section id={`cat-${id}`} className="mb-6 scroll-mt-[120px]">
    <div className="flex items-baseline gap-3 mb-3">
      <h2 className="text-lg font-display font-light text-white">{label}</h2>
      <span className="text-xs text-white/25">{productCount}</span>
      {subtitle && <span className="text-xs text-white/35 hidden sm:inline">· {subtitle}</span>}
    </div>
    {children}
  </section>
);

export default CategorySection;
