import { useEffect } from 'react';
import { ArrowUpRight, Flame, Droplets, Monitor, Wrench, Flag, Check, X, AlertTriangle, MapPin, Factory, Handshake, Network } from 'lucide-react';
import ProductCard from '../components/manufacturer/ProductCard';
import gsap from 'gsap';
import { useLanguage } from '../App';
import { translatePageText } from '../i18n/pageTextTranslations';
import HeroSection from '../components/manufacturer/HeroSection';
import CategorySidebar from '../components/manufacturer/CategorySidebar';
import CategorySection from '../components/manufacturer/CategorySection';
import ManufacturerIntro from '../components/manufacturer/ManufacturerIntro';
import { buildMailto } from '../lib/email';
import SeoHead from '../seo/SeoHead';
import { breadcrumbSchema, itemListSchema } from '../seo/structuredData';
import { buildLocalizedPath, CANONICAL_DOMAIN } from '../lib/language';
import { getOttProductsByCategory, buildOttProductPath, OTT_CATEGORY_LABELS } from '../data/ottProducts';
import type { OttCategory } from '../data/ottProducts';
import { OTT_CATEGORY_SEO } from '../data/seo/ottSeoContent';
import CategorySeoBlock from '../components/seo/CategorySeoBlock';

const OttPage = () => {
  const { lang, buildPath } = useLanguage();
  const locale = lang === 'de' || lang === 'en' || lang === 'cz' || lang === 'sk' || lang === 'hu' ? lang : 'en';
  const tr = (de: string, en: string, cz: string) => {
    if (locale === 'de') return de;
    if (locale === 'cz') return cz;
    if (locale === 'sk' || locale === 'hu') return translatePageText(locale, en, cz);
    return en;
  };

  const breadcrumbs = breadcrumbSchema([
    { name: tr('Startseite', 'Home', 'Domů'), url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, '/')}` },
    { name: 'OTT', url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, '/ott')}` },
  ]);
  const inquiryMail = buildMailto('office@asamer.net', tr('Anfrage OTT', 'Inquiry OTT', 'Poptávka OTT'));

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      gsap.fromTo('.page-header', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' });
    });
    return () => ctx.revert();
  }, []);

  const categories: OttCategory[] = ['edgebanding', 'gluing', 'return'];
  const categoryData = categories.map((cat) => ({ cat, products: getOttProductsByCategory(cat) })).filter((c) => c.products.length > 0);
  const sidebarItems = categoryData.map((c) => ({ id: c.cat, label: OTT_CATEGORY_LABELS[c.cat][lang], productCount: c.products.length }));

  const allProducts = categoryData.flatMap((c) => c.products);
  const productList = itemListSchema(
    tr('OTT Kantenanleimmaschinen', 'OTT Edgebanding Machines', 'OTT olepovačky hran'),
    allProducts.map((p) => ({
      name: `${p.name} OTT`,
      url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, buildOttProductPath(lang, p))}`,
      image: p.image,
      description: p.seoDescription[lang],
    })),
  );

  return (
    <>
      <SeoHead routeKey="ott" structuredData={[breadcrumbs, productList]} />
      <div className="bg-dark min-h-screen">

        {/* ====== 1. HERO ====== */}
        <HeroSection
          headline={tr('Neue Standards für PUR/EVA', 'New standards for PUR/EVA', 'Nové standardy pro PUR/EVA')}
          logoSrc="/logos/ott.jpg"
          logoAlt="OTT logo"
          logoClassName="rounded-md"
          bgVideo="/videos/ott.mp4"
          bgVideoStart={31}
          bgVideoEnd={40}
        />

        {/* ====== 1b. INTRO / DEFINITION-LEAD ====== */}
        <ManufacturerIntro
          eyebrow={tr('Deutschland · Kantenanleimtechnologie', 'Germany · Edgebanding technology', 'Německo · Olepování hran')}
          title={tr('OTT Kantenanleimmaschinen', 'OTT Edgebanding Machines', 'OTT olepovačky hran')}
          lead={tr(
            'OTT ist ein deutscher Hersteller von Kantenanleimmaschinen für die Holz- und Möbelindustrie. Das Sortiment reicht von kompakten Einstiegsmodellen wie der Pacific+ (18 m/min) bis zu industriellen Hochleistungsmaschinen wie der TopEdge mit PUR, EVA und bluEdge HyFuse Lasertechnologie. Asamer ist exklusiver OTT-Vertriebspartner für CZ, SK und HU mit lokalem Service und Softwareintegration über die offene OPC-UA-Schnittstelle.',
            'OTT is a German manufacturer of edgebanding machines for the wood and furniture industry. The range spans from compact entry-level models like the Pacific+ (18 m/min) to industrial high-performance machines like the TopEdge with PUR, EVA and bluEdge HyFuse laser technology. Asamer is the exclusive OTT distribution partner for CZ, SK and HU with local service and software integration via the open OPC-UA interface.',
            'OTT je německý výrobce olepovaček hran pro dřevařský a nábytkářský průmysl. Sortiment sahá od kompaktních vstupních modelů jako Pacific+ (18 m/min) až po průmyslové vysokovýkonné stroje jako TopEdge s PUR, EVA a laserovou technologií bluEdge HyFuse. Asamer je exkluzivní distribuční partner OTT pro CZ, SK a HU s lokálním servisem a softwarovou integrací přes otevřené rozhraní OPC-UA.',
          )}
          facts={[
            {
              icon: Factory,
              label: tr('Herkunft', 'Origin', 'Původ'),
              value: tr('Made in Germany', 'Made in Germany', 'Made in Germany'),
            },
            {
              icon: Handshake,
              label: tr('Asamer-Rolle', 'Asamer role', 'Role Asamer'),
              value: tr('Exklusiver Händler', 'Exclusive dealer', 'Exkluzivní prodejce'),
            },
            {
              icon: MapPin,
              label: tr('Märkte', 'Markets', 'Trhy'),
              value: 'CZ · SK · HU',
            },
            {
              icon: Network,
              label: tr('Schnittstelle', 'Interface', 'Rozhraní'),
              value: 'OPC-UA · ERP / MES',
            },
          ]}
        />

        {/* ====== 2. SIDEBAR + PRODUCT GRID ====== */}
        <div className="container-wide py-12">
          <div className="flex gap-10">
            {/* Left sidebar */}
            <CategorySidebar categories={sidebarItems} brandColor="primary" />

            {/* Right main content */}
            <div className="flex-1 min-w-0">
              {/* Mobile category pills (visible below lg) */}
              <div className="lg:hidden flex gap-2 overflow-x-auto pb-4 mb-6 scrollbar-hide">
                {sidebarItems.map((cat) => (
                  <button key={cat.id} type="button" onClick={() => document.getElementById(`cat-${cat.id}`)?.scrollIntoView({ behavior: 'smooth' })} className="whitespace-nowrap px-3 py-1.5 rounded-full text-sm border border-white/10 bg-white/[0.04] text-white/50 hover:text-white transition-colors shrink-0">
                    {cat.label} <span className="text-xs opacity-50">{cat.productCount}</span>
                  </button>
                ))}
              </div>

              {/* Product categories */}
              {categoryData.map((c) => (
                <CategorySection key={c.cat} id={c.cat} label={OTT_CATEGORY_LABELS[c.cat][lang]} productCount={c.products.length}>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {c.products.map((product) => (
                      <ProductCard
                        key={product.slug}
                        to={buildPath(buildOttProductPath(lang, product))}
                        image={product.image}
                        imageAlt={`${product.name} OTT`}
                        badge={product.badge}
                        categoryLabel={OTT_CATEGORY_LABELS[c.cat][lang]}
                        name={`${product.name} OTT`}
                        bullets={product.usp ? [product.usp[lang], product.tagline[lang]] : undefined}
                        detailLabel={tr('Details ansehen', 'View details', 'Zobrazit detail')}
                      />
                    ))}
                  </div>
                </CategorySection>
              ))}
            </div>
          </div>
        </div>

        {/* ====== 2b. SEO Content (per-category) ====== */}
        {categoryData.map((c) => OTT_CATEGORY_SEO[c.cat] && (
          <CategorySeoBlock key={`seo-${c.cat}`} content={OTT_CATEGORY_SEO[c.cat]} lang={lang} tr={tr} />
        ))}

        {/* ====== 3. SECONDARY INFO ====== */}
        <div className="border-t border-white/5">
          <div className="container-wide py-12">

            {/* OTT vs Konkurrenz Comparison */}
            <section className="mb-10">
              <h2 className="text-sm font-display text-white/40 mb-4">{tr('Warum OTT über Asamer?', 'Why OTT via Asamer?', 'Proč OTT přes Asamer?')}</h2>
              <div className="rounded-xl border border-white/10 overflow-hidden max-w-2xl">
                <div className="grid grid-cols-3 text-xs">
                  <div className="p-3 border-b border-r border-white/5 text-white/25">{tr('Merkmal', 'Feature', 'Vlastnost')}</div>
                  <div className="p-3 border-b border-r border-white/5 text-primary font-medium text-center">OTT / Asamer</div>
                  <div className="p-3 border-b border-white/5 text-white/25 text-center">{tr('Konkurrenz', 'Competitors', 'Konkurence')}</div>
                  {[
                    ['OPC-UA Interface', <Check key="c" className="w-3.5 h-3.5 text-emerald-400 inline" />, tr('Standard', 'Standard', 'Standard'), <X key="x" className="w-3.5 h-3.5 text-red-400/50 inline" />, tr('oft Aufpreis', 'often extra cost', 'často příplatek')],
                    [tr('PUR-Spezialisierung', 'PUR specialization', 'PUR'), <Check key="c" className="w-3.5 h-3.5 text-emerald-400 inline" />, 'CombiMelt', <AlertTriangle key="a" className="w-3.5 h-3.5 text-amber-400/50 inline" />, tr('je nach Hersteller', 'depends on brand', 'dle výrobce')],
                    [tr('ERP-Integration', 'ERP integration', 'ERP'), <Check key="c" className="w-3.5 h-3.5 text-emerald-400 inline" />, 'Asamer-Team', <AlertTriangle key="a" className="w-3.5 h-3.5 text-amber-400/50 inline" />, tr('oft kostenpflichtig', 'often paid', 'často placená')],
                    [tr('Service CZ/SK/HU', 'Service CZ/SK/HU', 'Servis CZ/SK/HU'), <Check key="c" className="w-3.5 h-3.5 text-emerald-400 inline" />, tr('vor Ort', 'on-site', 'na místě'), <AlertTriangle key="a" className="w-3.5 h-3.5 text-amber-400/50 inline" />, tr('oft zentral', 'often central', 'často centrální')],
                  ].map(([label, icon1, val1, icon2, val2], i) => (
                    <div key={i} className="contents">
                      <div className={`p-3 border-r border-white/5 text-white/40 ${i < 3 ? 'border-b border-white/5' : ''}`}>{label}</div>
                      <div className={`p-3 border-r border-white/5 text-center ${i < 3 ? 'border-b border-white/5' : ''}`}>{icon1} <span className="text-white/50 ml-1">{val1}</span></div>
                      <div className={`p-3 text-center ${i < 3 ? 'border-b border-white/5' : ''}`}>{icon2} <span className="text-white/25 ml-1">{val2}</span></div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Technology cards */}
            <section className="mb-10">
              <h2 className="text-sm font-display text-white/40 mb-4">{tr('Technologie', 'Technology', 'Technologie')}</h2>
              <div className="grid md:grid-cols-2 gap-3 max-w-2xl">
                <div className="p-4 rounded-xl border border-orange-500/15 bg-orange-500/5">
                  <div className="flex items-center gap-2 mb-2">
                    <Flame className="w-4 h-4 text-orange-500" />
                    <span className="text-sm font-medium text-white">CombiMelt PUR</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-orange-500/15 text-orange-400">{tr('Patentiert', 'Patented', 'Patent')}</span>
                  </div>
                  <p className="text-white/35 text-xs">{tr('Top-Driven-Roller · EVA + PUR · weniger Verschwendung · Servicestation', 'Top-driven roller · EVA + PUR · less waste · service station', 'Top-driven roller · EVA + PUR · méně odpadu · servisní stanice')}</p>
                </div>
                <div className="p-4 rounded-xl border border-blue-500/15 bg-blue-500/5">
                  <div className="flex items-center gap-2 mb-2">
                    <Droplets className="w-4 h-4 text-blue-500" />
                    <span className="text-sm font-medium text-white">bluEdge HyFuse</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-500/15 text-blue-400">Zero-Gap</span>
                  </div>
                  <p className="text-white/35 text-xs">{tr('Laser-Aktivierung · keine Klebefuge · nachrüstbar', 'Laser activation · no glue joint · retrofittable', 'Laser · bez spáry · montovatelná')}</p>
                </div>
              </div>
            </section>

            {/* Why buy from Asamer */}
            <section className="mb-10">
              <h2 className="text-sm font-display text-white/40 mb-4">{tr('Warum bei Asamer kaufen?', 'Why buy from Asamer?', 'Proč koupit u Asamer?')}</h2>
              <div className="grid sm:grid-cols-2 gap-3 max-w-2xl">
                {[
                  { icon: <Monitor className="w-4 h-4 text-blue-400" />, t: tr('Software-Integration', 'Software integration', 'Softwarová integrace'), d: tr('OPC-UA direkt in Ihr ERP/MES – kein Vendor-Lock-in', 'OPC-UA directly into your ERP/MES – no vendor lock-in', 'OPC-UA přímo do vašeho ERP/MES – bez vendor lock-in') },
                  { icon: <MapPin className="w-4 h-4 text-primary" />, t: tr('Exklusivhändler CZ/SK/HU', 'Exclusive dealer CZ/SK/HU', 'Exkluzivní prodejce CZ/SK/HU'), d: tr('Direkter Kontakt – kein Konzern-Umweg', 'Direct contact – no corporate detour', 'Přímý kontakt – bez koncernových oklik') },
                  { icon: <Wrench className="w-4 h-4 text-white/40" />, t: tr('Service & Montage', 'Service & installation', 'Servis a montáž'), d: tr('Techniker vor Ort in CZ/SK/HU', 'Technicians on-site in CZ/SK/HU', 'Technici na místě v CZ/SK/HU') },
                  { icon: <Flag className="w-4 h-4 text-red-400" />, t: tr('Made in Austria', 'Made in Austria', 'Made in Austria'), d: tr('Familienbetrieb seit 1963 in Lambach', 'Family business since 1963 in Lambach', 'Rodinný podnik od roku 1963 v Lambachu') },
                ].map((item) => (
                  <div key={item.t} className="flex items-start gap-3 p-3 rounded-lg border border-white/5 bg-white/[0.01]">
                    <div className="mt-0.5 shrink-0">{item.icon}</div>
                    <div>
                      <div className="text-xs font-medium text-white">{item.t}</div>
                      <div className="text-xs text-white/30">{item.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Video */}
            <section className="mb-10">
              <h2 className="text-sm font-display text-white/40 mb-3">{tr('OTT in Aktion', 'OTT in Action', 'OTT v akci')}</h2>
              <div className="relative rounded-xl overflow-hidden border border-white/10 aspect-video max-w-2xl">
                <iframe src="https://www.youtube-nocookie.com/embed/videoseries?list=UUZXwpHi0AR1dFN3h-K0-QIA" title="OTT YouTube" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute inset-0 w-full h-full" loading="lazy" />
              </div>
            </section>

            {/* Footer CTA */}
            <div className="text-center mb-6">
              <p className="text-white/20 text-xs">{tr('Produkte und Spezifikationen', 'Products and specifications', 'Produkty a specifikace')} · <a href="https://www.ottpaul.com" target="_blank" rel="noreferrer" className="text-primary/40 hover:text-primary transition-colors">ottpaul.com<ArrowUpRight className="w-3 h-3 inline ml-0.5" /></a></p>
            </div>
            <div className="p-4 bg-gradient-to-r from-red-600/8 to-transparent rounded-xl border border-red-500/10 max-w-2xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <p className="text-white/40 text-sm">{tr('Beratung zu OTT Kantenleimtechnologie?', 'Advice on OTT edgebanding?', 'Poradenství k OTT?')}</p>
                <a href={inquiryMail} className="btn-primary-dark text-sm sm:whitespace-nowrap">{tr('Anfrage senden', 'Send inquiry', 'Odeslat poptávku')}<ArrowUpRight className="w-4 h-4" /></a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default OttPage;
