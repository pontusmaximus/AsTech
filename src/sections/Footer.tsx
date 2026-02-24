import { useLanguage } from '../App';
import { ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { translatePageText } from '../i18n/pageTextTranslations';

const Footer = () => {
  const { lang, t } = useLanguage();

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer relative py-16 border-t border-white/5">
      <div className="container-wide">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <svg
                width="36"
                height="36"
                viewBox="0 0 40 40"
                fill="none"
                className="text-primary"
              >
                <path
                  d="M8 12L16 20L8 28"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 12L26 20L18 28"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.5"
                />
              </svg>
              <div className="flex flex-col">
                <span className="text-base font-medium tracking-tight text-white">
                  asamer technologie
                </span>
                <span className="text-[10px] tracking-widest uppercase text-white/40">
                  gmbh
                </span>
              </div>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm mb-6">
              {tr(
                'Seit über 30 Jahren Ihr Partner für industrielle Lösungen in der Holz-, Kunststoff- und Metallbearbeitung.',
                'For over 30 years, your partner for industrial solutions in wood, plastic and metal processing.',
                'Již více než 30 let váš partner pro průmyslová řešení ve zpracování dřeva, plastů a kovů.'
              )}
            </p>
            <div className="flex items-center gap-3 text-white/30 text-sm">
              <span>{tr('Tschechien', 'Czech Republic', 'Česká republika')}</span>
              <span className="w-1 h-1 bg-white/20 rounded-full" />
              <span>{tr('Slowakei', 'Slovakia', 'Slovensko')}</span>
              <span className="w-1 h-1 bg-white/20 rounded-full" />
              <span>{tr('Ungarn', 'Hungary', 'Maďarsko')}</span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4 text-sm uppercase tracking-wider">
              {tr('Produkte', 'Products', 'Produkty')}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/mayer" className="text-white/40 text-sm hover:text-white transition-colors">
                  {tr('Mayer Sägen', 'Mayer Saws', 'Pily Mayer')}
                </Link>
              </li>
              <li>
                <Link to="/ott" className="text-white/40 text-sm hover:text-white transition-colors">
                  {tr('OTT Kantenleimer', 'OTT Edgebanders', 'Olepovačky hran OTT')}
                </Link>
              </li>
              <li>
                <Link to="/barbaric" className="text-white/40 text-sm hover:text-white transition-colors">
                  {tr('BARBARIC Lager', 'BARBARIC Storage', 'Sklady BARBARIC')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4 text-sm uppercase tracking-wider">
              {tr('Unternehmen', 'Company', 'Společnost')}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/loesungen" className="text-white/40 text-sm hover:text-white transition-colors">
                  {t.nav.solutions}
                </Link>
              </li>
              <li>
                <Link to="/service" className="text-white/40 text-sm hover:text-white transition-colors">
                  {t.nav.service}
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="text-white/40 text-sm hover:text-white transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white/30 text-sm">
            {t.footer.copyright}
          </div>

          <div className="flex items-center gap-6">
            <Link
              to="/impressum"
              className="text-white/30 text-sm hover:text-white transition-colors"
            >
              {t.footer.imprint}
            </Link>
            <a
              href="#"
              className="text-white/30 text-sm hover:text-white transition-colors"
            >
              {t.footer.privacy}
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary hover:text-white text-white/40 transition-all duration-300"
            aria-label={tr('Nach oben scrollen', 'Scroll to top', 'Posunout nahoru')}
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
