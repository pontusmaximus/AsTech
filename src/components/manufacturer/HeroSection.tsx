export interface HeroSectionProps {
  logoSrc: string;
  logoAlt: string;
  logoClassName?: string;
  logoWrapperClassName?: string;
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
  bgImage,
  bgVideo,
  bgVideoStart,
  bgVideoEnd,
  heroClassName,
}: HeroSectionProps) => {
  return (
    <section
      className={`relative min-h-[55vh] flex items-end overflow-hidden mb-16 ${heroClassName ?? ''}`}
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

      <div className="relative z-10 w-full container-wide pb-12 pt-28">
        <div className="page-header">
          <div
            className={`inline-flex items-center justify-center rounded-lg border border-transparent bg-white px-5 py-3 shadow-[0_6px_20px_rgba(0,0,0,0.25)] mb-4 ${
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
    </section>
  );
};

export default HeroSection;
