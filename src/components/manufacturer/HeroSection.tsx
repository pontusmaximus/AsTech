export interface HeroSectionProps {
  logoSrc: string;
  logoAlt: string;
  logoClassName?: string;
  logoWrapperClassName?: string;
  headline?: string;
  headlineColor?: string;
  headlineAlign?: 'center' | 'right';
  bgImage?: string;
  /** On mobile, show full image without cropping */
  bgContainMobile?: boolean;
  bgVideo?: string;
  bgVideoStart?: number;
  bgVideoEnd?: number;
  heroClassName?: string;
}

const HeroSection = ({
  logoSrc,
  logoAlt,
  logoClassName,
  logoWrapperClassName,
  headline,
  headlineColor = '#ffffff',
  headlineAlign = 'center',
  bgImage,
  bgContainMobile = false,
  bgVideo,
  bgVideoStart,
  bgVideoEnd,
  heroClassName,
}: HeroSectionProps) => {
  return (
    <section
      className={`relative min-h-[50vh] md:min-h-[55vh] overflow-hidden mb-10 md:mb-16 ${heroClassName ?? ''}`}
    >
      {/* Background */}
      {bgVideo ? (
        <video
          autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover"
          onLoadedMetadata={(e) => { if (bgVideoStart != null) e.currentTarget.currentTime = bgVideoStart; }}
          onTimeUpdate={(e) => { const v = e.currentTarget; if (bgVideoEnd != null && v.currentTime >= bgVideoEnd) v.currentTime = bgVideoStart ?? 0; }}
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
      ) : bgImage ? (
        <div className={`absolute inset-0 bg-center ${bgContainMobile ? 'bg-contain md:bg-cover bg-no-repeat' : 'bg-cover'}`} style={{ backgroundImage: `url(${bgImage})` }} />
      ) : (
        <div className="absolute inset-0 bg-dark-elevated" />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent" />

      {/* Desktop: Logo bottom-left, Headline positioned per align prop — UNCHANGED from before */}
      <div className="hidden md:block">
        {/* Logo — bottom left */}
        <div className="absolute bottom-8 left-0 z-10 container-wide">
          <div className="page-header">
            <div
              className={`inline-flex items-center justify-center rounded-lg border border-transparent bg-white px-5 py-3 shadow-[0_6px_20px_rgba(0,0,0,0.25)] ${logoWrapperClassName ?? ''}`}
            >
              <img src={logoSrc} alt={logoAlt} className={`h-10 md:h-14 w-auto max-w-[160px] object-contain ${logoClassName ?? ''}`} />
            </div>
          </div>
        </div>

        {/* Headline */}
        {headline && (
          <div className={`absolute inset-0 z-10 flex pb-16 px-6 ${
            headlineAlign === 'right' ? 'items-end justify-end pr-16' : 'items-end justify-center'
          }`}>
            <h1 className={`page-header text-5xl lg:text-6xl font-display font-bold leading-[1.1] whitespace-pre-line ${
              headlineAlign === 'right' ? 'text-right' : 'text-center'
            }`} style={{ color: headlineColor }}>
              {headline}
            </h1>
          </div>
        )}
      </div>

      {/* Mobile: Logo left + Headline right, side by side at bottom */}
      <div className="md:hidden absolute inset-0 z-10 flex items-end">
        <div className="w-full px-5 pb-6">
          <div className="page-header flex items-end justify-between gap-4">
            <div
              className={`inline-flex items-center justify-center rounded-lg border border-transparent bg-white px-3 py-2 shadow-[0_4px_12px_rgba(0,0,0,0.2)] shrink-0 ${logoWrapperClassName ?? ''}`}
            >
              <img src={logoSrc} alt={logoAlt} className={`h-8 w-auto max-w-[100px] object-contain ${logoClassName ?? ''}`} />
            </div>
            {headline && (
              <h1 className="text-2xl sm:text-3xl font-display font-bold leading-[1.1] whitespace-pre-line text-right" style={{ color: headlineColor }}>
                {headline}
              </h1>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
