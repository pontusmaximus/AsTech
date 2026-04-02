import type { ReactNode } from 'react';

export interface BenefitItem {
  icon: ReactNode;
  label: string;
}

interface ManufacturerBenefitsBarProps {
  benefits: BenefitItem[];
  className?: string;
}

const ManufacturerBenefitsBar = ({ benefits, className = '' }: ManufacturerBenefitsBarProps) => (
  <div className={`flex flex-wrap gap-2.5 justify-center ${className}`}>
    {benefits.map((b) => (
      <span
        key={b.label}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-white/[0.03] text-sm text-white/60"
      >
        <span className="w-4 h-4 shrink-0">{b.icon}</span>
        {b.label}
      </span>
    ))}
  </div>
);

export default ManufacturerBenefitsBar;
