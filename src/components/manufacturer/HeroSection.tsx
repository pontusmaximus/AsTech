export interface HeroSectionProps {
  logoSrc: string;
  logoAlt: string;
  logoClassName?: string;
  logoWrapperClassName?: string;
  headline?: string;
  headlineColor?: string;
  bgImage?: string;
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
  bgImage,
  bgVideo,
  bgVideoStart,
  bgVideoEnd,
  heroClassName,
}: HeroSectionProps) => {
  return (
    <section
      className={`relative min-h-[55vh] overflow-hidden mb-16 ${heroClassName ?? ''}`}
    >
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
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }} />
      ) : (
        <div className="absolute inset-0 bg-dark-elevated" />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent" />

      {/* Logo — bottom left with padding */}
      <div className="absolute bottom-8 left-0 z-10 container-wide">
        <div className="page-header">
          <div
            className={`inline-flex items-center justify-center rounded-lg border border-transparent bg-white px-5 py-3 shadow-[0_6px_20px_rgba(0,0,0,0.25)] ${
              logoWrapperClassName ?? ''
            }`}
          >
            <img
              src={logoSrc}
              alt={logoAlt}
              className={`h-10 md:h-14 w-auto max-w-[160px] object-contain ${logoClassName ?? ''}`}
            />
          </div>
        </div>
      </div>

      {/* Headline — centered, bottom area with generous padding */}
      {headline && (
        <div className="absolute inset-0 z-10 flex items-end justify-center pb-12 md:pb-16">
          <h1 className="page-header text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight text-center px-6" style={{ color: headlineColor }}>
            {headline}
          </h1>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
