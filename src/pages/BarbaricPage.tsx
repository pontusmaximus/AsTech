import { useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import ProductCard from '../components/manufacturer/ProductCard';
import gsap from 'gsap';
import { useLanguage } from '../App';
import { translatePageText } from '../i18n/pageTextTranslations';
import HeroSection from '../components/manufacturer/HeroSection';
import CategorySidebar from '../components/manufacturer/CategorySidebar';
import CategorySection from '../components/manufacturer/CategorySection';
import { buildMailto } from '../lib/email';
import SeoHead from '../seo/SeoHead';
import { breadcrumbSchema, itemListSchema } from '../seo/structuredData';
import { buildLocalizedPath, CANONICAL_DOMAIN } from '../lib/language';
import { getBarbaricProductsByCategory, buildBarbaricProductPath, BARBARIC_CATEGORY_LABELS } from '../data/barbaricProducts';
import type { BarbaricCategory } from '../data/barbaricProducts';

const BarbaricPage = () => {
  const { lang } = useLanguage();
  const locale = lang === 'de' || lang === 'en' || lang === 'cz' || lang === 'sk' || lang === 'hu' ? lang : 'en';
  const tr = (de: string, en: string, cz: string) => {
    if (locale === 'de') return de;
    if (locale === 'cz') return cz;
    if (locale === 'sk' || locale === 'hu') return translatePageText(locale, en, cz);
    return en;
  };

  const breadcrumbs = breadcrumbSchema([
    { name: tr('Startseite', 'Home', 'Domů'), url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, '/')}` },
    { name: 'BARBARIC', url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, '/barbaric')}` },
  ]);
  const inquiryMail = buildMailto('office@asamer.net', tr('Anfrage BARBARIC', 'Inquiry BARBARIC', 'Poptávka BARBARIC'));

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => { gsap.fromTo('.page-header', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }); });
    return () => ctx.revert();
  }, []);

  const categories: BarbaricCategory[] = ['storage', 'feeding', 'nesting', 'return', 'buffer', 'door', 'labeling'];
  const categoryData = categories.map((cat) => ({ cat, products: getBarbaricProductsByCategory(cat) })).filter((c) => c.products.length > 0);
  const sidebarItems = categoryData.map((c) => ({ id: c.cat, label: BARBARIC_CATEGORY_LABELS[c.cat][lang], productCount: c.products.length }));

  const allProducts = categoryData.flatMap((c) => c.products);
  const productList = itemListSchema(
    tr('BARBARIC Automatisierung & Plattenhandling', 'BARBARIC Automation & Panel Handling', 'BARBARIC automatizace a manipulace s deskami'),
    allProducts.map((p) => ({
      name: `BARBARIC ${p.name}`,
      url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, buildBarbaricProductPath(lang, p))}`,
      image: p.image,
      description: p.seoDescription[lang],
    })),
  );

  return (
    <>
      <SeoHead routeKey="barbaric" structuredData={[breadcrumbs, productList]} />
      <div className="bg-dark min-h-screen">

        <HeroSection
          headline={tr('Automatisierung\nfür jeden', 'Automation\nfor everyone', 'Automatizace\npro každého')}
          headlineColor="#ff0000"
          headlineAlign="right"
          logoSrc="https://www.barbaric.at/fileadmin/user_upload/Bilder_Barbaric/Logos/Logo_Barbaric_withSlogan.png"
          logoAlt="BARBARIC logo"
          bgImage="https://www.barbaric.at/fileadmin/_processed_/4/d/csm_Header_UEberblick_02_06af4bb331.png"
        />

        {/* INTRO / DEFINITION-LEAD */}
        <section className="container-wide pb-8">
          <h1 className="text-2xl md:text-3xl font-display font-light text-white mb-3">
            {tr('BARBARIC Lagerautomatisierung & Plattenhandling', 'BARBARIC Warehouse Automation & Panel Handling', 'BARBARIC automatizace skladu a manipulace s deskami')}
          </h1>
          <p className="text-white/70 text-sm leading-relaxed max-w-3xl">
            {tr(
              'BARBARIC (Österreich) entwickelt Systeme für automatische Plattenlagerung, Beschickung und Rücktransport in der Holz- und Möbelindustrie. Vom CSF Flächenlager über LCV-Beschickungssysteme bis zu NST Nesting Pickern – BARBARIC automatisiert den Materialfluss zwischen Lager, Säge und CNC. Asamer ist autorisierter BARBARIC-Händler für CZ, SK und HU mit Montage, Service und ERP-Anbindung.',
              'BARBARIC (Austria) develops systems for automatic panel storage, feeding and return transport in the wood and furniture industry. From CSF panel storage to LCV feeding systems and NST nesting pickers – BARBARIC automates material flow between warehouse, saw and CNC. Asamer is an authorized BARBARIC dealer for CZ, SK and HU with installation, service and ERP integration.',
              'BARBARIC (Rakousko) vyvíjí systémy pro automatické skladování desek, podávání a zpětný transport v dřevařském a nábytkářském průmyslu. Od plošných skladů CSF přes podávací systémy LCV až po NST nesting pickery – BARBARIC automatizuje tok materiálu mezi skladem, pilou a CNC. Asamer je autorizovaný prodejce BARBARIC pro CZ, SK a HU s montáží, servisem a integrací ERP.',
            )}
          </p>
        </section>

        <div className="container-wide py-12">
          <div className="flex gap-10">
            <CategorySidebar categories={sidebarItems} brandColor="orange-500" />
            <div className="flex-1 min-w-0">
              <div className="lg:hidden flex gap-2 overflow-x-auto pb-4 mb-6 scrollbar-hide">
                {sidebarItems.map((cat) => (
                  <button key={cat.id} type="button" onClick={() => document.getElementById(`cat-${cat.id}`)?.scrollIntoView({ behavior: 'smooth' })} className="whitespace-nowrap px-3 py-1.5 rounded-full text-sm border border-white/10 bg-white/[0.04] text-white/50 hover:text-white transition-colors shrink-0">
                    {cat.label} <span className="text-xs opacity-50">{cat.productCount}</span>
                  </button>
                ))}
              </div>

              {categoryData.map((c) => (
                <CategorySection key={c.cat} id={c.cat} label={BARBARIC_CATEGORY_LABELS[c.cat][lang]} productCount={c.products.length}>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {c.products.map((product) => (
                      <ProductCard
                        key={product.slug}
                        to={buildLocalizedPath(lang, buildBarbaricProductPath(lang, product))}
                        image={product.image}
                        imageAlt={`Barbaric ${product.name}`}
                        categoryLabel={BARBARIC_CATEGORY_LABELS[c.cat][lang]}
                        name={product.name}
                        bullets={[product.tagline[lang]]}
                        detailLabel={tr('Details ansehen', 'View details', 'Zobrazit detail')}
                      />
                    ))}
                  </div>
                </CategorySection>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5">
          <div className="container-wide py-12">
            <div className="text-center mb-6">
              <p className="text-white/20 text-xs">{tr('Produkte und Spezifikationen', 'Products and specifications', 'Produkty a specifikace')} · <a href="https://www.barbaric.at" target="_blank" rel="noreferrer" className="text-primary/40 hover:text-primary transition-colors">barbaric.at<ArrowUpRight className="w-3 h-3 inline ml-0.5" /></a></p>
            </div>
            <div className="p-4 bg-gradient-to-r from-orange-500/8 to-transparent rounded-xl border border-orange-500/10 max-w-2xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <p className="text-white/40 text-sm">{tr('Interesse an BARBARIC Automatisierung?', 'Interested in BARBARIC automation?', 'Máte zájem o automatizaci BARBARIC?')}</p>
                <a href={inquiryMail} className="btn-primary-dark text-sm sm:whitespace-nowrap">{tr('Anfrage senden', 'Send inquiry', 'Odeslat poptávku')}<ArrowUpRight className="w-4 h-4" /></a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default BarbaricPage;
