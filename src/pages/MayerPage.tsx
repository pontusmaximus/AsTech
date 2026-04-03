import { useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/manufacturer/ProductCard';
import gsap from 'gsap';
import { useLanguage } from '../App';
import { translatePageText } from '../i18n/pageTextTranslations';
import HeroSection from '../components/manufacturer/HeroSection';
import CategorySidebar from '../components/manufacturer/CategorySidebar';
import CategorySection from '../components/manufacturer/CategorySection';
import { buildMailto } from '../lib/email';
import SeoHead from '../seo/SeoHead';
import { breadcrumbSchema } from '../seo/structuredData';
import { buildLocalizedPath, CANONICAL_DOMAIN } from '../lib/language';
import { getMayerProductsByCategory, buildMayerProductPath, MAYER_CATEGORY_LABELS } from '../data/mayerProducts';
import type { MayerCategory } from '../data/mayerProducts';

const SUBTITLES: Record<MayerCategory, (tr: (d: string, e: string, c: string) => string) => string> = {
  kappa: (tr) => tr('Horizontale Druckbalkensägen für Holz', 'Horizontal pressure beam saws for wood', 'Horizontální pily pro dřevo'),
  advanced: (tr) => tr('Für Aluminium, NE-Metalle und Kunststoffe', 'For aluminium, non-ferrous metals and plastics', 'Pro hliník a plasty'),
  industrial: (tr) => tr('Maßgeschneiderte Schneidlösungen', 'Custom cutting solutions', 'Zakázková řezací řešení'),
};

const MayerPage = () => {
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
    { name: 'Mayer', url: `${CANONICAL_DOMAIN}${buildLocalizedPath(lang, '/mayer')}` },
  ]);
  const inquiryMail = buildMailto('office@asamer.net', tr('Anfrage Mayer', 'Inquiry Mayer', 'Poptávka Mayer'));

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => { gsap.fromTo('.page-header', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }); });
    return () => ctx.revert();
  }, []);

  const categories: MayerCategory[] = ['kappa', 'advanced', 'industrial'];
  const categoryData = categories.map((cat) => ({ cat, products: getMayerProductsByCategory(cat) })).filter((c) => c.products.length > 0);
  const sidebarItems = categoryData.map((c) => ({ id: c.cat, label: MAYER_CATEGORY_LABELS[c.cat][lang], productCount: c.products.length }));

  return (
    <>
      <SeoHead routeKey="mayer" structuredData={[breadcrumbs]} />
      <div className="bg-dark min-h-screen">

        <HeroSection
          headline={tr('Die schwere Säge', 'The heavy saw', 'Těžká pila')}
          headlineColor="#000000"
          logoSrc="https://www.mayersaws.com/mayer/images/mayer_saws_4c.svg"
          logoAlt="Mayer logo"
          logoWrapperClassName="text-dark"
          bgImage="/images/mayer/hero-mayer-asamer.jpg"
          bgContainMobile
        />

        <div className="container-wide py-12">
          <div className="flex gap-10">
            <CategorySidebar categories={sidebarItems} brandColor="primary" />
            <div className="flex-1 min-w-0">
              <div className="lg:hidden flex gap-2 overflow-x-auto pb-4 mb-6 scrollbar-hide">
                {sidebarItems.map((cat) => (
                  <button key={cat.id} type="button" onClick={() => document.getElementById(`cat-${cat.id}`)?.scrollIntoView({ behavior: 'smooth' })} className="whitespace-nowrap px-3 py-1.5 rounded-full text-sm border border-white/10 bg-white/[0.04] text-white/50 hover:text-white transition-colors shrink-0">
                    {cat.label} <span className="text-xs opacity-50">{cat.productCount}</span>
                  </button>
                ))}
              </div>

              {categoryData.map((c) => (
                <CategorySection key={c.cat} id={c.cat} label={MAYER_CATEGORY_LABELS[c.cat][lang]} subtitle={SUBTITLES[c.cat](tr)} productCount={c.products.length}>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {c.products.map((product) => (
                      <ProductCard
                        key={product.slug}
                        to={buildLocalizedPath(lang, buildMayerProductPath(lang, product))}
                        image={product.image}
                        imageAlt={`Mayer ${product.name}`}
                        categoryLabel={MAYER_CATEGORY_LABELS[c.cat][lang]}
                        name={`Mayer ${product.name}`}
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

        {/* Secondary info */}
        <div className="border-t border-white/5">
          <div className="container-wide py-12">
            <div className="mb-8 rounded-xl border border-primary/15 bg-primary/5 p-4 max-w-2xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span className="text-sm text-white/60"><span className="font-medium text-white">MAYER + BARBARIC</span> · {tr('Vakuumbeschickung, Flächenlager und Hubtische als Addon', 'Vacuum feeding, panel storage and lifting tables as add-on', 'Vakuové podávání, sklady a stoly jako doplněk')}</span>
                <Link to={buildPath('/barbaric')} className="text-sm text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1 shrink-0">BARBARIC <ArrowUpRight className="w-3.5 h-3.5" /></Link>
              </div>
            </div>

            <div className="text-center mb-6">
              <p className="text-white/20 text-xs">{tr('Produkte und Spezifikationen', 'Products and specifications', 'Produkty a specifikace')} · <a href="https://www.mayersaws.com" target="_blank" rel="noreferrer" className="text-primary/40 hover:text-primary transition-colors">mayersaws.com<ArrowUpRight className="w-3 h-3 inline ml-0.5" /></a></p>
            </div>
            <div className="p-4 bg-gradient-to-r from-primary/8 to-transparent rounded-xl border border-primary/10 max-w-2xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <p className="text-white/40 text-sm">{tr('Interesse an Mayer Plattensägen?', 'Interested in Mayer panel saws?', 'Máte zájem o pily Mayer?')}</p>
                <a href={inquiryMail} className="btn-primary-dark text-sm sm:whitespace-nowrap">{tr('Anfrage senden', 'Send inquiry', 'Odeslat poptávku')}<ArrowUpRight className="w-4 h-4" /></a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default MayerPage;
