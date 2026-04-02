import { Check, ArrowUpRight } from 'lucide-react';

interface QuickWinsBoxProps {
  wins: string[];
  cta: { label: string; href: string };
  accentColor?: 'primary' | 'emerald' | 'orange';
}

const accentMap = {
  primary: { border: 'border-primary/25', bg: 'from-primary/8', check: 'text-primary' },
  emerald: { border: 'border-emerald-500/25', bg: 'from-emerald-500/8', check: 'text-emerald-400' },
  orange: { border: 'border-orange-500/25', bg: 'from-orange-500/8', check: 'text-orange-400' },
};

const QuickWinsBox = ({ wins, cta, accentColor = 'primary' }: QuickWinsBoxProps) => {
  const a = accentMap[accentColor];

  return (
    <section className="mb-10">
      <div className={`rounded-xl border ${a.border} bg-gradient-to-r ${a.bg} to-transparent p-5 md:p-6`}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {wins.map((win) => (
              <li key={win} className="flex items-center gap-2 text-sm text-white/70">
                <Check className={`w-4 h-4 shrink-0 ${a.check}`} />
                {win}
              </li>
            ))}
          </ul>
          <a href={cta.href} className="btn-primary-dark text-sm sm:whitespace-nowrap shrink-0">
            {cta.label}
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default QuickWinsBox;
