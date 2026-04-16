import { useLanguage } from '../App';
import { ArrowUp, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { translatePageText } from '../i18n/pageTextTranslations';
import { trackEvent } from '../lib/analytics';

const Footer = () => {
  const { lang, t, buildPath } = useLanguage();

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

  const handleFooterLinkClick = (target: string) => {
    trackEvent('footer_cta_click', {
      target,
      lang,
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    trackEvent('footer_scroll_top_click', { lang });
  };

  return (
    <footer className="site-footer relative py-12 md:py-16 border-t border-white/5">
      <div className="container-wide">
        <div className="grid gap-10 md:gap-12 mb-12 md:mb-16 md:grid-cols-12">
          {/* Brand + claim + locations */}
          <div className="md:col-span-12 lg:col-span-4">
            <Link to={buildPath('/')} className="flex items-center gap-3 mb-6" aria-label="Asamer Technologie – Startseite">
              <svg
                width="36"
                height="36"
                viewBox="0 0 40 40"
                fill="none"
                className="text-primary"
                aria-hidden="true"
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
            <p className="text-white/55 text-sm leading-relaxed max-w-sm mb-6">
              {tr(
                'Seit über 30 Jahren Ihr Partner für industrielle Lösungen in der Holz-, Kunststoff- und Metallbearbeitung.',
                'For over 30 years, your partner for industrial solutions in wood, plastic and metal processing.',
                'Již více než 30 let váš partner pro průmyslová řešení ve zpracování dřeva, plastů a kovů.'
              )}
            </p>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-white/40 text-sm">
              <span>{tr('Tschechien', 'Czech Republic', 'Česká republika')}</span>
              <span className="w-1 h-1 bg-white/25 rounded-full" aria-hidden="true" />
              <span>{tr('Slowakei', 'Slovakia', 'Slovensko')}</span>
              <span className="w-1 h-1 bg-white/25 rounded-full" aria-hidden="true" />
              <span>{tr('Ungarn', 'Hungary', 'Maďarsko')}</span>
            </div>
          </div>

          {/* Direct contact — prominent */}
          <div className="md:col-span-6 lg:col-span-3">
            <h4 className="text-white font-medium mb-4 text-sm uppercase tracking-wider">
              {tr('Direkter Kontakt', 'Direct contact', 'Přímý kontakt')}
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:+436642633132"
                  onClick={() => handleFooterLinkClick('phone_at')}
                  className="inline-flex items-center gap-2 text-white/75 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-primary" aria-hidden="true" />
                  <span>+43 664 26 33 132 <span className="text-white/40">(AT)</span></span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+420724056965"
                  onClick={() => handleFooterLinkClick('phone_cz')}
                  className="inline-flex items-center gap-2 text-white/75 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-primary" aria-hidden="true" />
                  <span>+420 724 056 965 <span className="text-white/40">(CZ)</span></span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:office@asamer.net"
                  onClick={() => handleFooterLinkClick('email')}
                  className="inline-flex items-center gap-2 text-white/75 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-primary" aria-hidden="true" />
                  <span>office@asamer.net</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="md:col-span-6 lg:col-span-3">
            <h4 className="text-white font-medium mb-4 text-sm uppercase tracking-wider">
              {tr('Produkte', 'Products', 'Produkty')}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to={buildPath('/mayer')} className="text-white/55 text-sm hover:text-white transition-colors">
                  {tr('Mayer Sägen', 'Mayer Saws', 'Pily Mayer')}
                </Link>
              </li>
              <li>
                <Link to={buildPath('/ott')} className="text-white/55 text-sm hover:text-white transition-colors">
                  {tr('OTT Kantenleimer', 'OTT Edgebanders', 'Olepovačky hran OTT')}
                </Link>
              </li>
              <li>
                <Link to={buildPath('/barbaric')} className="text-white/55 text-sm hover:text-white transition-colors">
                  {tr('BARBARIC Lager', 'BARBARIC Storage', 'Sklady BARBARIC')}
                </Link>
              </li>
              <li>
                <Link to={buildPath('/gannomat')} className="text-white/55 text-sm hover:text-white transition-colors">
                  {tr('Gannomat Dübel', 'Gannomat Dowel', 'Gannomat kolkování')}
                </Link>
              </li>
              <li>
                <Link to={buildPath('/pouzite-stroje')} className="text-white/55 text-sm hover:text-white transition-colors">
                  {tr('Gebrauchtmaschinen', 'Used machines', 'Použité stroje')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-12 lg:col-span-2">
            <h4 className="text-white font-medium mb-4 text-sm uppercase tracking-wider">
              {tr('Unternehmen', 'Company', 'Společnost')}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to={buildPath('/reseni')} className="text-white/55 text-sm hover:text-white transition-colors">
                  {t.nav.solutions}
                </Link>
              </li>
              <li>
                <Link to={buildPath('/servis')} className="text-white/55 text-sm hover:text-white transition-colors">
                  {t.nav.service}
                </Link>
              </li>
              <li>
                <Link to={buildPath('/kontakt')} className="text-white/55 text-sm hover:text-white transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 grid gap-4 lg:grid-cols-[1fr_auto_auto] lg:items-center">
          <div className="text-white/40 text-sm leading-relaxed">
            {t.footer.copyright}
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link
              to={buildPath('/imprint')}
              onClick={() => handleFooterLinkClick('imprint')}
              className="text-white/40 text-sm hover:text-white transition-colors"
            >
              {t.footer.imprint}
            </Link>
            <Link
              to={buildPath('/privacy')}
              onClick={() => handleFooterLinkClick('privacy')}
              className="text-white/40 text-sm hover:text-white transition-colors"
            >
              {t.footer.privacy}
            </Link>
            <Link
              to={buildPath('/terms')}
              onClick={() => handleFooterLinkClick('terms')}
              className="text-white/40 text-sm hover:text-white transition-colors"
            >
              {t.footer.terms}
            </Link>
            <button
              type="button"
              onClick={() => {
                handleFooterLinkClick('cookie-settings');
                window.dispatchEvent(new Event('asamer:open-cookie-settings'));
              }}
              className="text-white/40 text-sm hover:text-white transition-colors"
            >
              {t.footer.cookieSettings}
            </button>
          </div>

          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary hover:text-white text-white/55 transition-all duration-300 justify-self-start lg:justify-self-end"
            aria-label={tr('Nach oben scrollen', 'Scroll to top', 'Posunout nahoru')}
          >
            <ArrowUp className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
