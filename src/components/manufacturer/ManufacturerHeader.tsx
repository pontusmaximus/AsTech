import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../../App';

export interface ManufacturerHeaderProps {
  backLabel: string;
  brandNameForSrOnly: string;
  logoSrc: string;
  logoAlt: string;
  introText: string;
  logoClassName?: string;
  logoWrapperClassName?: string;
}

const ManufacturerHeader = ({
  backLabel,
  brandNameForSrOnly,
  logoSrc,
  logoAlt,
  introText,
  logoClassName,
  logoWrapperClassName,
}: ManufacturerHeaderProps) => {
  const { buildPath } = useLanguage();

  return (
    <>
      <a
        href={buildPath('/')}
        className="page-header inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-12"
      >
        <ArrowLeft className="w-4 h-4" />
        {backLabel}
      </a>

      <div className="page-header mb-16">
        <h1 className="sr-only">{brandNameForSrOnly}</h1>
        <div className="mb-8 flex justify-center">
          <div
            className={`inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/[0.04] px-6 sm:px-8 py-5 backdrop-blur-sm shadow-[0_12px_32px_rgba(0,0,0,0.25)] ${
              logoWrapperClassName ?? ''
            }`}
          >
            <img
              src={logoSrc}
              alt={logoAlt}
              className={logoClassName ?? 'h-16 sm:h-20 md:h-24 w-auto object-contain'}
              loading="lazy"
            />
          </div>
        </div>
        <p className="text-xl text-white/50 max-w-3xl mx-auto text-center">{introText}</p>
      </div>
    </>
  );
};

export default ManufacturerHeader;
