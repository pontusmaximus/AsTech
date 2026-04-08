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
import { getGannomatProductsByCategory, buildGannomatProductPath, GANNOMAT_CATEGORY_LABELS } from '../data/gannomatProducts';
import type { GannomatCategory } from '../data/gannomatProducts';

const GannomatPage = () => {
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
    { name: 'Gannomat', url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, '/gannomat')}` },
  ]);
  const inquiryMail = buildMailto('office@asamer.net', tr('Anfrage Gannomat', 'Inquiry Gannomat', 'Poptávka Gannomat'));

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => { gsap.fromTo('.page-header', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }); });
    return () => ctx.revert();
  }, []);

  const categories: GannomatCategory[] = ['insertion', 'insertion_door', 'machining', 'fitting', 'carcass', 'boring', 'rowboring', 'gluing', 'frame', 'cornerhinge'];
  const categoryData = categories.map((cat) => ({ cat, products: getGannomatProductsByCategory(cat) })).filter((c) => c.products.length > 0);
  const sidebarItems = categoryData.map((c) => ({ id: c.cat, label: GANNOMAT_CATEGORY_LABELS[c.cat][lang], productCount: c.products.length }));

  const allProducts = categoryData.flatMap((c) => c.products);
  const productList = itemListSchema(
    tr('Gannomat Bohr-, Dübel- & Beschlägeautomaten', 'Gannomat Drilling, Dowel & Fitting Machines', 'Gannomat vrtací, kolkovací a kování stroje'),
    allProducts.map((p) => ({
      name: `Gannomat ${p.name}`,
      url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, buildGannomatProductPath(lang, p))}`,
      image: p.image,
      description: p.seoDescription[lang],
    })),
  );

  return (
    <>
      <SeoHead routeKey="gannomat" structuredData={[breadcrumbs, productList]} />
      <div className="bg-dark min-h-screen">

        <HeroSection
          logoSrc="/images/logo/gannomat-logo.png"
          logoAlt="Gannomat logo"
          bgImage="https://qmprofile.com/wp-content/uploads/2023/01/qmprofile-gannomat4.jpg"
        />

        {/* INTRO / DEFINITION-LEAD */}
        <section className="container-wide pb-8">
          <h1 className="text-2xl md:text-3xl font-display font-light text-white mb-3">
            {tr('Gannomat Bohr-, Dübel- & Beschlägeautomaten', 'Gannomat Drilling, Dowel & Fitting Machines', 'Gannomat vrtací, kolkovací a kování stroje')}
          </h1>
          <p className="text-white/70 text-sm leading-relaxed max-w-3xl">
            {tr(
              'Gannomat (Österreich) fertigt Maschinen für Bohren, Dübeleintreiben, Beschlägeset­zen und Korpusmontage in der Möbelindustrie. Das Sortiment umfasst die Selekta-Kolkovačky, Index CNC-Reihe, Express-Beschlägeautomaten und Concept-Korpuspressen. Asamer ist autorisierter Gannomat-Händler für CZ, SK und HU mit Montage, Schulung und Ersatzteillager.',
              'Gannomat (Austria) manufactures machines for drilling, dowel insertion, fitting placement and carcass assembly in the furniture industry. The range includes Selekta dowel inserters, Index CNC series, Express fitting machines and Concept carcass presses. Asamer is an authorized Gannomat dealer for CZ, SK and HU with installation, training and spare parts stock.',
              'Gannomat (Rakousko) vyrábí stroje pro vrtání, kolkování, osazování kování a montáž korpusů v nábytkářském průmyslu. Sortiment zahrnuje kolkovačky Selekta, řadu Index CNC, automatické osazovače kování Express a korpusové lisy Concept. Asamer je autorizovaný prodejce Gannomat pro CZ, SK a HU s montáží, školením a skladem náhradních dílů.',
            )}
          </p>
        </section>

        <div className="container-wide py-12">
          <div className="flex gap-10">
            <CategorySidebar categories={sidebarItems} brandColor="emerald-500" />
            <div className="flex-1 min-w-0">
              {/* Mobile pills */}
              <div className="lg:hidden flex gap-2 overflow-x-auto pb-4 mb-6 scrollbar-hide">
                {sidebarItems.map((cat) => (
                  <button key={cat.id} type="button" onClick={() => document.getElementById(`cat-${cat.id}`)?.scrollIntoView({ behavior: 'smooth' })} className="whitespace-nowrap px-3 py-1.5 rounded-full text-sm border border-white/10 bg-white/[0.04] text-white/50 hover:text-white transition-colors shrink-0">
                    {cat.label} <span className="text-xs opacity-50">{cat.productCount}</span>
                  </button>
                ))}
              </div>

              {/* Category sections */}
              {categoryData.map((c) => (
                <CategorySection key={c.cat} id={c.cat} label={GANNOMAT_CATEGORY_LABELS[c.cat][lang]} productCount={c.products.length}>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {c.products.map((product) => (
                      <ProductCard
                        key={product.slug}
                        to={buildLocalizedPath(lang, buildGannomatProductPath(lang, product))}
                        image={product.image}
                        imageAlt={`Gannomat ${product.name}`}
                        categoryLabel={GANNOMAT_CATEGORY_LABELS[c.cat][lang]}
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
              <p className="text-white/20 text-xs">{tr('Produkte und Spezifikationen', 'Products and specifications', 'Produkty a specifikace')} · <a href="https://www.gannomat.at" target="_blank" rel="noreferrer" className="text-primary/40 hover:text-primary transition-colors">gannomat.at<ArrowUpRight className="w-3 h-3 inline ml-0.5" /></a></p>
            </div>
            <div className="p-4 bg-gradient-to-r from-emerald-600/8 to-transparent rounded-xl border border-emerald-500/10 max-w-2xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <p className="text-white/40 text-sm">{tr('Selekta und Index Reihe CNC – unsere Top-Empfehlung.', 'Selekta and Index Series CNC – our top recommendation.', 'Selekta a Index Reihe CNC – naše top doporučení.')}</p>
                <a href={inquiryMail} className="btn-primary-dark text-sm sm:whitespace-nowrap">{tr('Anfrage senden', 'Send inquiry', 'Odeslat poptávku')}<ArrowUpRight className="w-4 h-4" /></a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default GannomatPage;
