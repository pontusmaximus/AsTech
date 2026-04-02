import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../../App';
import ManufacturerBenefitsBar from './ManufacturerBenefitsBar';
import type { BenefitItem } from './ManufacturerBenefitsBar';

export interface ManufacturerHeaderProps {
  backLabel: string;
  brandNameForSrOnly: string;
  logoSrc: string;
  logoAlt: string;
  introText: string;
  logoClassName?: string;
  logoWrapperClassName?: string;
  benefits?: BenefitItem[];
}

const ManufacturerHeader = ({
  backLabel,
  brandNameForSrOnly,
  logoSrc,
  logoAlt,
  introText,
  logoClassName,
  logoWrapperClassName,
  benefits,
}: ManufacturerHeaderProps) => {
  const { buildPath } = useLanguage();

  return (
    <>
      <a
        href={buildPath('/')}
        className="page-header inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        {backLabel}
      </a>

      <div className="page-header mb-8">
        <h1 className="sr-only">{brandNameForSrOnly}</h1>
        <div className="flex justify-center mb-5">
          <div
            className={`inline-flex items-center justify-center rounded-xl border border-transparent bg-white px-7 py-4 shadow-[0_8px_24px_rgba(0,0,0,0.2)] ${
              logoWrapperClassName ?? ''
            }`}
          >
            <img
              src={logoSrc}
              alt={logoAlt}
              className={`h-16 md:h-20 w-auto max-w-[260px] object-contain ${logoClassName ?? ''}`}
              loading="lazy"
            />
          </div>
        </div>
        <p className="text-sm text-white/50 leading-relaxed text-center max-w-2xl mx-auto mb-4">{introText}</p>
        {benefits && benefits.length > 0 && (
          <ManufacturerBenefitsBar benefits={benefits} className="justify-center" />
        )}
      </div>
    </>
  );
};

export default ManufacturerHeader;
