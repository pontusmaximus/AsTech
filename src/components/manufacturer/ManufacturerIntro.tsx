import type { LucideIcon } from 'lucide-react';

export interface ManufacturerIntroFact {
  icon?: LucideIcon;
  label: string;
  value: string;
  /** Optional tone/tint for the icon (tailwind color utility, e.g. 'text-primary'). */
  iconClass?: string;
}

export interface ManufacturerIntroProps {
  /** Short label shown above the headline (e.g. "Deutschland · Kantenanleimmaschinen"). */
  eyebrow?: string;
  /** Main H1 — the category / page topic. */
  title: string;
  /** Lead paragraph (longer, descriptive). */
  lead: string;
  /** Optional row of fact chips under the lead. */
  facts?: ManufacturerIntroFact[];
}

const ManufacturerIntro = ({ eyebrow, title, lead, facts }: ManufacturerIntroProps) => (
  <section className="container-wide pt-2 pb-16 md:pb-24">
    <div className="max-w-4xl">
      <div className="accent-line mb-5" />
      {eyebrow && (
        <span className="block text-[11px] uppercase tracking-[0.22em] text-primary mb-4">
          {eyebrow}
        </span>
      )}
      <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-display font-light leading-[1.15] tracking-tight text-white mb-5">
        {title}
      </h1>
      <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-3xl">
        {lead}
      </p>

      {facts && facts.length > 0 && (
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((fact) => {
            const Icon = fact.icon;
            return (
              <li
                key={fact.label}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 hover:border-white/20 hover:bg-white/[0.05] transition-colors"
              >
                {Icon && (
                  <span className="mt-0.5 shrink-0">
                    <Icon className={`w-4 h-4 ${fact.iconClass ?? 'text-primary'}`} aria-hidden="true" />
                  </span>
                )}
                <span className="min-w-0">
                  <span className="block text-[10px] uppercase tracking-widest text-white/40 mb-1">
                    {fact.label}
                  </span>
                  <span className="block text-sm font-medium text-white leading-snug">
                    {fact.value}
                  </span>
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  </section>
);

export default ManufacturerIntro;
