import { ArrowRight, CheckCircle2, Mail, Tag } from 'lucide-react';
import { useLanguage } from '../App';
import { translatePageText } from '../i18n/pageTextTranslations';
import { buildMailto } from '../lib/email';
import { buildCanonicalUrl, CANONICAL_DOMAIN } from '../lib/language';
import { localizeSlug } from '../lib/slugs';
import SeoHead from '../seo/SeoHead';
import { trackEvent } from '../lib/analytics';

type UsedMachine = {
  name: string;
  manufacturer: string;
  year?: number;
  condition: string;
  status?: string;
  statusKey?: 'available' | 'sold';
  shortDescription: string;
  images?: string[];
  imageFit?: 'cover' | 'contain';
  imageDisplay?: 'slideshow' | 'grid';
};

const slugify = (value: string) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');

const toAbsoluteUrl = (path: string) => {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  return `${CANONICAL_DOMAIN}${path.startsWith('/') ? path : `/${path}`}`;
};

const getImageSources = (src: string) => {
  const normalized = src.replace(/\.(jpe?g|png)$/i, '');
  return {
    avif: `${normalized}.avif`,
    webp: `${normalized}.webp`,
    fallback: src,
  };
};

const getAvailability = (status?: string, statusKey?: 'available' | 'sold') => {
  if (statusKey === 'sold') return 'https://schema.org/OutOfStock';
  if (statusKey === 'available') return 'https://schema.org/InStock';
  if (!status) return 'https://schema.org/InStock';
  const normalized = status.toLowerCase();
  if (normalized.includes('verkauft') || normalized.includes('sold') || normalized.includes('ausverkauft')) {
    return 'https://schema.org/OutOfStock';
  }
  if (normalized.includes('verf') || normalized.includes('avail') || normalized.includes('k dispozici')) {
    return 'https://schema.org/InStock';
  }
  return 'https://schema.org/InStock';
};

const isSoldStatus = (status?: string, statusKey?: 'available' | 'sold') => {
  if (statusKey === 'sold') return true;
  if (statusKey === 'available') return false;
  if (!status) return false;
  const normalized = status.toLowerCase();
  return normalized.includes('verkauft') || normalized.includes('sold') || normalized.includes('ausverkauft');
};

const getItemCondition = (condition: string) => {
  const normalized = condition.toLowerCase();
  if (normalized.includes('neu') || normalized.includes('new')) {
    return 'https://schema.org/NewCondition';
  }
  return 'https://schema.org/UsedCondition';
};

const UsedMachinesPage = () => {
  const { lang } = useLanguage();
  const locale =
    lang === 'de' || lang === 'en' || lang === 'cz' || lang === 'sk' || lang === 'hu'
      ? lang
      : 'en';

  const tr = (de: string, en: string, cz: string) => {
    if (locale === 'de') return de;
    if (locale === 'cz') return cz;
    if (locale === 'sk' || locale === 'hu') {
      return translatePageText(locale, en, cz);
    }
    return en;
  };

  const machines: UsedMachine[] = [
    {
      name: 'Tornado Top',
      manufacturer: 'OTT',
      year: 2011,
      condition: tr('gut', 'good', 'dobrý'),
      status: tr('verfügbar', 'available', 'k dispozici'),
      statusKey: 'available',
      images: [
        '/images/used-machines/ott-tornado-top-1.jpg',
        '/images/used-machines/ott-tornado-top-2.jpg',
      ],
      shortDescription: tr(
        'Kantenleimmaschine mit 330.000 lfm Laufleistung.',
        'Edgebanding machine with 330,000 lfm of usage.',
        'Olepovačka hran s nájezdem 330 000 lfm.'
      ),
    },
    {
      name: 'FH 4 330 220 automatic',
      manufacturer: 'SCHELLING',
      year: 2015,
      condition: tr('sehr gut', 'very good', 'velmi dobrý'),
      status: tr('verfügbar', 'available', 'k dispozici'),
      statusKey: 'available',
      images: [
        '/images/used-machines/schelling-fh4-330-220-automatic-1.jpg',
        '/images/used-machines/schelling-fh4-330-220-automatic-2.jpg',
      ],
      shortDescription: tr(
        'Automatisches Plattensägezentrum für effizienten Zuschnitt.',
        'Automatic panel saw for efficient cutting.',
        'Automatická panelová pila pro efektivní řezání.'
      ),
    },
    {
      name: 'PT',
      manufacturer: 'Gabbiani',
      year: 2021,
      condition: tr('gut', 'good', 'dobrý'),
      status: tr('verfügbar', 'available', 'k dispozici'),
      statusKey: 'available',
      images: ['/images/used-machines/gabbiani-pt-1.jpg', '/images/used-machines/gabbiani-pt-2.jpg'],
      shortDescription: tr(
        'Plattenaufteilsäge mit automatischer Beschickung.',
        'Panel saw with automatic feeding.',
        'Formátovací pila s automatickým podáváním.',
      ),
    },
    {
      name: 'Solution MD',
      manufacturer: 'SCM Stefani',
      year: 2016,
      condition: tr('gut', 'good', 'dobrý'),
      status: tr('verfügbar', 'available', 'k dispozici'),
      statusKey: 'available',
      imageFit: 'cover',
      images: [
        '/images/used-machines/scm-stefani-solution-md-1.jpg',
        '/images/used-machines/scm-stefani-solution-md-2.jpg',
      ],
      shortDescription: tr(
        'Kantenleimmaschine, automatische Beschickung, 450.000 lfm.',
        'Edgebanding machine, automatic feeding, 450,000 lfm.',
        'Olepovačka hran, automatické podávání, 450 000 lfm.',
      ),
    },
    {
      name: 'S 200',
      manufacturer: 'HOMAG',
      year: 2022,
      condition: tr('sehr gut', 'very good', 'velmi dobrý'),
      status: tr('verfügbar', 'available', 'k dispozici'),
      statusKey: 'available',
      images: ['/images/used-machines/homag-s-200-1.jpg', '/images/used-machines/homag-s-200-2.jpg'],
      shortDescription: tr(
        'Kantenleimmaschine mit 93.000 lfm Laufleistung.',
        'Edgebanding machine with 93,000 lfm of usage.',
        'Olepovačka hran s nájezdem 93 000 lfm.'
      ),
    },
    {
      name: '1308XL Power',
      manufacturer: 'HOLZ-HER',
      condition: tr('sehr gut', 'very good', 'velmi dobrý'),
      status: tr('verkauft', 'sold', 'prodáno'),
      statusKey: 'sold',
      images: ['/images/used-machines/holz-her-1308xl-power.jpg'],
      shortDescription: tr(
        'Kantenleimmaschine für präzise Kantenbearbeitung.',
        'Edgebanding machine for precise edge finishing.',
        'Olepovačka hran pro přesné dokončení hran.'
      ),
    },
  ];

  const sortedMachines = [...machines].sort(
    (a, b) => Number(isSoldStatus(a.status, a.statusKey)) - Number(isSoldStatus(b.status, b.statusKey)),
  );

  const generalInquiryMail = buildMailto(
    'office@asamer.net',
    tr('Gebrauchtmaschine Anfrage', 'Used machine inquiry', 'Poptávka na použitý stroj')
  );

  const baseUrl = buildCanonicalUrl(lang, localizeSlug('/pouzite-stroje', lang));
  const category = tr('Gebrauchtmaschinen', 'Used machines', 'Použité stroje');
  const slideDurationSec = 5;
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: sortedMachines.map((machine, index) => {
      const slug = slugify(`${machine.manufacturer} ${machine.name}`);
      const anchorUrl = `${baseUrl}#${slug}`;
      const images = (machine.images ?? []).map((src) => toAbsoluteUrl(src));
      const itemCondition = getItemCondition(machine.condition);
      return {
        '@type': 'ListItem',
        position: index + 1,
        url: anchorUrl,
        item: {
          '@type': 'Product',
          name: `${machine.manufacturer} ${machine.name}`,
          description: machine.shortDescription,
          ...(images.length ? { image: images } : {}),
          brand: {
            '@type': 'Brand',
            name: machine.manufacturer,
          },
          manufacturer: {
            '@type': 'Organization',
            name: machine.manufacturer,
          },
          category,
          ...(typeof machine.year === 'number' ? { productionDate: String(machine.year) } : {}),
          itemCondition,
          offers: {
            '@type': 'Offer',
            url: anchorUrl,
            availability: getAvailability(machine.status, machine.statusKey),
            itemCondition,
          },
        },
      };
    }),
  };

  const handleMachineInquiryClick = (machine: UsedMachine, placement: string) => {
    trackEvent('used_machine_inquiry_click', {
      product_name: machine.name,
      manufacturer: machine.manufacturer,
      placement,
      lang,
    });
  };

  return (
    <>
      <SeoHead
        routeKey="usedMachines"
        structuredData={[itemListSchema]}
      />
      <div className="bg-dark min-h-screen">
      <section className="pt-28 md:pt-36 pb-16">
        <div className="container-wide">
          <div className="max-w-5xl">
            <div className="accent-line mb-6" />
            <h1 className="text-section font-display font-light text-white mb-6">
              {tr('Gebrauchtmaschinen', 'Used machines', 'Použité stroje')}
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-4xl">
              {tr(
                'Ausgewählte Maschinen aus dem Bestand. Jedes Angebot wird technisch geprüft und mit klarem Zustand gelistet.',
                'Selected machines from stock. Each offer is technically checked and listed with a clear condition.',
                'Vybrané stroje ze skladu. Každá nabídka je technicky ověřena a má jasně uvedený stav.'
              )}
            </p>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-wide grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedMachines.map((machine) => {
            const inquiryMail = buildMailto(
              'office@asamer.net',
              `${tr('Gebrauchtmaschine Anfrage', 'Used machine inquiry', 'Poptávka na použitý stroj')}: ${machine.manufacturer} ${machine.name}`
            );
            const slug = slugify(`${machine.manufacturer} ${machine.name}`);
            const images = machine.images ?? [];
            const hasMultipleImages = images.length > 1;
            const totalDuration = Math.max(images.length, 1) * slideDurationSec;
            const isSold = isSoldStatus(machine.status, machine.statusKey);
            const imageFit = machine.imageFit ?? 'cover';
            const imageFitClass = imageFit === 'contain' ? 'object-contain' : 'object-cover';
            const imageHoverClass = imageFit === 'contain' ? '' : 'group-hover:scale-[1.03]';
            const imageDisplay = machine.imageDisplay ?? 'slideshow';
            return (
              <article
                id={slug}
                key={`${machine.manufacturer}-${machine.name}`}
                className="group bg-dark-card rounded-2xl border border-white/10 p-6"
              >
                {images.length > 0 ? (
                  <div className="mb-5 rounded-xl border border-white/10 bg-white/10 p-2">
                    {imageDisplay === 'grid' ? (
                      <div className="grid gap-2 sm:grid-cols-2">
                        {images.map((src, index) => {
                          const sources = getImageSources(src);
                          return (
                            <picture
                              key={`${machine.manufacturer}-${machine.name}-${index}`}
                              className="block overflow-hidden rounded-lg bg-dark-elevated border border-white/10"
                            >
                              <source type="image/avif" srcSet={sources.avif} />
                              <source type="image/webp" srcSet={sources.webp} />
                              <img
                                src={sources.fallback}
                                alt={`${machine.manufacturer} ${machine.name} ${index + 1}`}
                                className={`used-machine-photo w-full aspect-[4/3] ${imageFitClass} transition-transform duration-700 ease-out ${imageHoverClass}`}
                                loading="lazy"
                                decoding="async"
                              />
                            </picture>
                          );
                        })}
                      </div>
                    ) : (
                      <div
                        className={`relative aspect-[4/3] overflow-hidden rounded-lg ${hasMultipleImages ? 'used-machine-slideshow' : ''}`}
                      >
                        {machine.status ? (
                          <span
                            className={`absolute top-3 right-3 z-10 text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border ${
                              isSold
                                ? 'bg-red-500/20 text-red-100 border-red-400/40'
                                : 'bg-emerald-500/20 text-emerald-100 border-emerald-400/40'
                            }`}
                          >
                            {machine.status}
                          </span>
                        ) : null}
                        {images.map((src, index) => {
                          const sources = getImageSources(src);
                          return (
                            <picture
                              key={`${machine.manufacturer}-${machine.name}-${index}`}
                              className={`${hasMultipleImages ? 'used-machine-slide' : 'block'} block`}
                              style={
                                hasMultipleImages
                                  ? {
                                      animationDelay: `${index * slideDurationSec}s`,
                                      animationDuration: `${totalDuration}s`,
                                    }
                                  : undefined
                              }
                            >
                              <source type="image/avif" srcSet={sources.avif} />
                              <source type="image/webp" srcSet={sources.webp} />
                              <img
                                src={sources.fallback}
                                alt={`${machine.manufacturer} ${machine.name} ${index + 1}`}
                                className={`used-machine-photo w-full h-full ${imageFitClass} transition-transform duration-700 ease-out ${imageHoverClass}`}
                                loading="lazy"
                                decoding="async"
                              />
                            </picture>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center mb-5">
                    <Tag className="w-5 h-5 text-primary" />
                  </div>
                )}
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h2 className="text-2xl font-display font-light text-white">
                      {machine.manufacturer} {machine.name}
                    </h2>
                    {typeof machine.year === 'number' ? (
                      <p className="text-white/50 text-sm">
                        {tr('Baujahr', 'Year', 'Rok')}: {machine.year}
                      </p>
                    ) : null}
                  </div>
                  {machine.status ? (
                    <span className="text-xs uppercase tracking-widest text-primary">
                      {machine.status}
                    </span>
                  ) : null}
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-4">{machine.shortDescription}</p>
                <div className="space-y-2 mb-5">
                  <div className="flex items-start gap-2 text-white/75 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                    <span>{tr('Zustand', 'Condition', 'Stav')}: {machine.condition}</span>
                  </div>
                </div>
                <a
                  href={inquiryMail}
                  className="btn-outline-dark w-full justify-center"
                  onClick={() => handleMachineInquiryClick(machine, 'card')}
                >
                  <Mail className="w-4 h-4" />
                  {tr('Anfrage senden', 'Send inquiry', 'Odeslat poptávku')}
                </a>
              </article>
            );
          })}
        </div>
      </section>

      <section className="pb-24">
        <div className="container-wide">
          <div className="rounded-2xl border border-primary/30 bg-primary/10 p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div>
              <h3 className="text-2xl font-display font-light text-white mb-2">
                {tr('Gebrauchtmaschine anfragen', 'Request a used machine', 'Poptat použitý stroj')}
              </h3>
              <p className="text-white/75 text-sm leading-relaxed">
                {tr(
                  'Sagen Sie uns, welche Maschine Sie suchen. Wir melden uns mit verfügbaren Optionen.',
                  'Tell us which machine you are looking for. We will respond with available options.',
                  'Řekněte nám, jaký stroj hledáte. Ozveme se s dostupnými možnostmi.'
                )}
              </p>
            </div>
            <a
              href={generalInquiryMail}
              className="btn-primary-dark sm:whitespace-nowrap justify-center"
              onClick={() =>
                trackEvent('used_machine_inquiry_click', {
                  product_name: 'general',
                  manufacturer: 'general',
                  placement: 'general_cta',
                  lang,
                })
              }
            >
              {tr('Anfrage starten', 'Start inquiry', 'Zahájit poptávku')}
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default UsedMachinesPage;
