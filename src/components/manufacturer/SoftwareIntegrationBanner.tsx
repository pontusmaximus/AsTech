import type { ReactNode } from 'react';
import { Monitor } from 'lucide-react';

interface BadgeItem {
  icon: ReactNode;
  label: string;
  desc: string;
}

interface SoftwareIntegrationBannerProps {
  title: string;
  description: string;
  badges: BadgeItem[];
  highlightValue: string;
  highlightLabel: string;
  accentColor?: 'blue' | 'emerald' | 'orange';
}

const accentMap = {
  blue: {
    border: 'border-blue-500/20',
    bg: 'bg-gradient-to-br from-blue-600/10 to-transparent',
    highlight: 'text-blue-500/15',
    icon: 'bg-blue-500/20 text-blue-400',
  },
  emerald: {
    border: 'border-emerald-500/20',
    bg: 'bg-gradient-to-br from-emerald-600/10 to-transparent',
    highlight: 'text-emerald-500/15',
    icon: 'bg-emerald-500/20 text-emerald-400',
  },
  orange: {
    border: 'border-orange-500/20',
    bg: 'bg-gradient-to-br from-orange-600/10 to-transparent',
    highlight: 'text-orange-500/15',
    icon: 'bg-orange-500/20 text-orange-400',
  },
};

const SoftwareIntegrationBanner = ({
  title,
  description,
  badges,
  highlightValue,
  highlightLabel,
  accentColor = 'blue',
}: SoftwareIntegrationBannerProps) => {
  const a = accentMap[accentColor];

  return (
    <section className="mb-14">
      <div className={`relative rounded-2xl ${a.border} ${a.bg} p-6 md:p-8 overflow-hidden`}>
        {/* Accent number */}
        <div className={`absolute top-4 right-6 md:top-6 md:right-8 text-5xl md:text-6xl font-display font-bold ${a.highlight} select-none pointer-events-none`}>
          {highlightValue}
        </div>

        {/* Header */}
        <div className="flex items-center gap-3 mb-4 relative">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${a.icon}`}>
            <Monitor className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg md:text-xl font-display font-light text-white">{title}</h2>
            <span className="text-xs text-white/30">{highlightLabel}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-white/55 text-sm leading-relaxed mb-5 max-w-3xl relative">
          {description}
        </p>

        {/* Feature badges */}
        <div className="flex flex-wrap gap-2.5 relative">
          {badges.map((badge) => (
            <span
              key={badge.label}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/5 bg-white/[0.03] text-xs text-white/50"
            >
              <span className="w-4 h-4 shrink-0">{badge.icon}</span>
              <span>
                <span className="font-medium text-white/70">{badge.label}</span>
                <span className="hidden sm:inline"> · {badge.desc}</span>
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftwareIntegrationBanner;
