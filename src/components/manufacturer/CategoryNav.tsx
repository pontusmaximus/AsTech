import { useEffect, useRef, useState } from 'react';

export interface CategoryNavItem {
  id: string;
  label: string;
  productCount: number;
}

interface CategoryNavProps {
  categories: CategoryNavItem[];
  brandColor?: string;
}

const CategoryNav = ({ categories, brandColor = 'primary' }: CategoryNavProps) => {
  const [activeId, setActiveId] = useState(categories[0]?.id ?? '');
  const navRef = useRef<HTMLDivElement>(null);
  const isSticky = categories.length >= 4;

  useEffect(() => {
    const sectionEls = categories
      .map((c) => document.getElementById(`cat-${c.id}`))
      .filter(Boolean) as HTMLElement[];

    if (sectionEls.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id.replace('cat-', ''));
          }
        }
      },
      { rootMargin: '-120px 0px -60% 0px', threshold: 0 },
    );

    sectionEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [categories]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(`cat-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const colorMap: Record<string, { active: string; hover: string }> = {
    primary: { active: 'border-primary/50 bg-primary/10 text-white', hover: 'hover:border-primary/30' },
    'emerald-500': { active: 'border-emerald-500/50 bg-emerald-500/10 text-white', hover: 'hover:border-emerald-500/30' },
    'orange-500': { active: 'border-orange-500/50 bg-orange-500/10 text-white', hover: 'hover:border-orange-500/30' },
  };
  const colors = colorMap[brandColor] ?? colorMap.primary;

  return (
    <div
      ref={navRef}
      className={`${isSticky ? 'sticky top-[64px] z-30 py-3 -mx-4 px-4 backdrop-blur-md bg-dark/80' : 'py-3'} mb-8`}
    >
      <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
        {categories.map((cat) => {
          const isActive = cat.id === activeId;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => scrollTo(cat.id)}
              className={`whitespace-nowrap px-3 py-1.5 rounded-full text-sm border transition-colors shrink-0 ${
                isActive
                  ? colors.active
                  : `border-white/10 bg-white/[0.04] text-white/50 ${colors.hover} hover:text-white`
              }`}
            >
              {cat.label}
              <span className="ml-1.5 text-xs opacity-50">{cat.productCount}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryNav;
