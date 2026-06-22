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
import { breadcrumbSchema, itemListSchema, faqPageSchema } from '../seo/structuredData';
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

  const faqs = [
    {
      question: tr('Was ist eine OTT Kantenanleimmaschine?', 'What is an OTT edgebanding machine?', 'Co je olepovačka hran OTT?'),
      answer: tr(
        'Eine OTT Kantenanleimmaschine trägt Kantenmaterial auf Möbel- und Plattenteile auf und besäumt es bündig. OTT bietet Modelle von der kompakten Pacific+ bis zur industriellen TopEdge mit PUR, EVA und bluEdge HyFuse Lasertechnologie.',
        'An OTT edgebanding machine applies and flush-trims edge material on furniture and board parts. OTT offers models from the compact Pacific+ to the industrial TopEdge with PUR, EVA and bluEdge HyFuse laser technology.',
        'Olepovačka hran OTT nanáší a začišťuje hranový materiál na nábytkové a deskové díly. OTT nabízí modely od kompaktní Pacific+ až po průmyslovou TopEdge s technologiemi PUR, EVA a bluEdge HyFuse.',
      ),
    },
    {
      question: tr('Was kostet eine OTT Kantenanleimmaschine?', 'How much does an OTT edgebanding machine cost?', 'Kolik stojí olepovačka hran OTT?'),
      answer: tr(
        'Der Preis hängt von Modell, Ausstattung und Automatisierungsgrad ab. Asamer erstellt ein unverbindliches Angebot nach Maß und berät zu Finanzierung und Förderungen von bis zu 50 %.',
        'The price depends on model, configuration and level of automation. Asamer prepares a tailored, no-obligation quote and advises on financing and grants of up to 50%.',
        'Cena olepovačky hran OTT závisí na modelu, výbavě a stupni automatizace. Asamer připraví nezávaznou nabídku na míru a poradí s financováním i dotacemi až 50 %.',
      ),
    },
    {
      question: tr('Was ist der Unterschied zwischen PUR und EVA?', 'What is the difference between PUR and EVA glue?', 'Jaký je rozdíl mezi lepidlem PUR a EVA?'),
      answer: tr(
        'EVA ist ein universeller Schmelzklebstoff, PUR erzeugt eine wasserfeste Verbindung ohne sichtbare Fuge. Das OTT CombiMelt-System verarbeitet beide Klebstofftypen.',
        'EVA is a universal hot-melt adhesive; PUR creates a waterproof joint with no visible glue line. The OTT CombiMelt system processes both adhesive types.',
        'EVA je univerzální tavné lepidlo, PUR vytváří voděodolný spoj bez viditelné spáry. Systém OTT CombiMelt zvládá oba typy lepidla.',
      ),
    },
    {
      question: tr('Bietet Asamer auch gebrauchte OTT Kantenanleimmaschinen?', 'Does Asamer also offer used OTT edgebanding machines?', 'Nabízíte i použité olepovačky hran OTT?'),
      answer: tr(
        'Ja. Asamer bietet neue und technisch geprüfte gebrauchte OTT Kantenanleimmaschinen inklusive Service und Montage in CZ, SK und HU.',
        'Yes. Asamer offers new and technically inspected used OTT edgebanding machines including service and installation in CZ, SK and HU.',
        'Ano. Asamer nabízí nové i technicky prověřené použité olepovačky hran OTT včetně servisu a montáže v ČR, na Slovensku a v Maďarsku.',
      ),
    },
  ];

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
      <SeoHead routeKey="ott" structuredData={[breadcrumbs, productList, faqPageSchema(faqs)]} />
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
            'OTT Kantenanleimmaschinen zählen zur Spitze beim Bekanten von Möbel- und Plattenteilen – von der kompakten Pacific+ (18 m/min) bis zur industriellen TopEdge mit PUR, EVA und bluEdge HyFuse Lasertechnologie. OTT ist ein deutscher Hersteller von Kantenanleimmaschinen für die Holz- und Möbelindustrie. Asamer ist exklusiver OTT-Vertriebspartner für CZ, SK und HU mit lokalem Service und Softwareintegration über die offene OPC-UA-Schnittstelle.',
            'OTT edgebanding machines are among the best for banding furniture and board panels – from the compact Pacific+ (18 m/min) to the industrial TopEdge with PUR, EVA and bluEdge HyFuse laser technology. OTT is a German manufacturer of edgebanding machines for the wood and furniture industry. Asamer is the exclusive OTT distribution partner for CZ, SK and HU with local service and software integration via the open OPC-UA interface.',
            'Olepovačka hran OTT patří ke špičce v olepování nábytkových a deskových dílů – od kompaktní Pacific+ (18 m/min) až po průmyslovou TopEdge s technologiemi PUR, EVA a bluEdge HyFuse. OTT je německý výrobce olepovaček hran pro dřevařský a nábytkářský průmysl. Asamer je exkluzivní distribuční partner OTT pro ČR, SK a Maďarsko s lokálním servisem a softwarovou integrací přes otevřené rozhraní OPC-UA.',
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

            {/* FAQ */}
            <section className="mb-10">
              <h2 className="text-sm font-display text-white/40 mb-4">{tr('Häufige Fragen zu OTT Kantenanleimmaschinen', 'FAQ on OTT edgebanding machines', 'Časté dotazy k olepovačkám hran OTT')}</h2>
              <div className="max-w-2xl divide-y divide-white/5 rounded-xl border border-white/10">
                {faqs.map((faq) => (
                  <details key={faq.question} className="group p-4">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-medium text-white/80 [&::-webkit-details-marker]:hidden">
                      {faq.question}
                      <span className="shrink-0 text-white/30 transition-transform group-open:rotate-45">+</span>
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-white/40">{faq.answer}</p>
                  </details>
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
