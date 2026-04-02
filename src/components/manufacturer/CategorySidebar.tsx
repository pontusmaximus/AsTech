import { useEffect, useState } from 'react';

export interface SidebarCategory {
  id: string;
  label: string;
  productCount: number;
}

interface CategorySidebarProps {
  categories: SidebarCategory[];
  brandColor?: string;
}

const CategorySidebar = ({ categories, brandColor = 'primary' }: CategorySidebarProps) => {
  const [activeId, setActiveId] = useState(categories[0]?.id ?? '');

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
      { rootMargin: '-100px 0px -60% 0px', threshold: 0 },
    );
    sectionEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [categories]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(`cat-${id}`);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const borderColor: Record<string, string> = {
    primary: 'border-primary',
    'emerald-500': 'border-emerald-500',
    'orange-500': 'border-orange-500',
  };
  const activeBorder = borderColor[brandColor] ?? borderColor.primary;

  return (
    <nav className="hidden lg:block w-[220px] shrink-0">
      <div className="sticky top-[88px] space-y-0.5">
        {categories.map((cat) => {
          const isActive = cat.id === activeId;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => scrollTo(cat.id)}
              className={`w-full flex items-center justify-between text-left px-3 py-2 text-sm transition-colors border-l-2 ${
                isActive
                  ? `${activeBorder} text-white bg-white/[0.03]`
                  : 'border-transparent text-white/40 hover:text-white/70 hover:bg-white/[0.02]'
              }`}
            >
              <span className="truncate">{cat.label}</span>
              <span className="text-xs text-white/25 ml-2 shrink-0">{cat.productCount}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default CategorySidebar;
