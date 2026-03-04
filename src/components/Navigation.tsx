import { useState, useEffect } from 'react';
import { useLanguage, useTheme } from '../App';
import { Menu, X, ChevronDown, Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import type { Language } from '../i18n';
import { trackEvent } from '../lib/analytics';
import { stripLanguageFromPath } from '../lib/language';

const Navigation = () => {
  const { lang, t, setLang, buildPath } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const isHomePage = location.pathname === buildPath('/');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMobileMenuOpen]);

  const languages: { code: Language; label: string }[] = [
    { code: 'de', label: 'DE' },
    { code: 'en', label: 'EN' },
    { code: 'cz', label: 'CZ' },
    { code: 'sk', label: 'SK' },
    { code: 'hu', label: 'HU' },
  ];

  const getCurrentPageSlug = () => {
    const withoutLang = stripLanguageFromPath(location.pathname);
    const parts = withoutLang.split('/').filter(Boolean);
    return parts[0] ?? 'home';
  };

  const handleManufacturerClick = (target: string, placement: 'desktop' | 'mobile') => {
    trackEvent('manufacturer_cross_navigation_click', {
      from_page: getCurrentPageSlug(),
      to_page: target,
      placement: `nav_${placement}`,
    });
  };

  const handleNavigationCta = (target: string, placement: string) => {
    trackEvent('navigation_cta_click', {
      target,
      placement,
      lang,
    });
  };

  const changeLanguage = (nextLang: Language, placement: 'desktop' | 'mobile') => {
    trackEvent('navigation_cta_click', {
      target: 'language_selector',
      placement: `language_${placement}`,
      from_lang: lang,
      target_lang: nextLang,
    });
    setLang(nextLang);
  };

  // Determine background based on scroll and page
  const navBgClass = isScrolled
    ? 'nav-surface-scrolled'
    : isHomePage
      ? 'nav-surface-home'
      : 'nav-surface-inner';
  const themeLabel = theme === 'dark' ? t.nav.activateThemeDay : t.nav.activateThemeNight;
  const manufacturerLabel =
    lang === 'de' ? 'Hersteller' :
    lang === 'cz' ? 'Výrobci' :
    lang === 'sk' ? 'Výrobcovia' :
    lang === 'hu' ? 'Gyártók' :
    'Manufacturers';

  return (
    <nav
      className={`nav-readable fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBgClass} py-3 md:py-5`}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to={buildPath('/')} className="flex items-center gap-2 sm:gap-3 group">
            <div className="relative">
              <svg
                width="36"
                height="36"
                viewBox="0 0 40 40"
                fill="none"
                className="transition-transform duration-300 group-hover:scale-105"
              >
                <path
                  d="M8 12L16 20L8 28"
                  stroke="#004899"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 12L26 20L18 28"
                  stroke="#004899"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.5"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-medium tracking-tight text-white">
                asamer
              </span>
              <span className="text-[10px] tracking-widest uppercase text-white/40">
                technologie
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Manufacturer Links */}
            <div className="flex items-center gap-6 mr-4 pr-4 border-r border-white/10">
              <Link
                to={buildPath('/ott')}
                onClick={() => handleManufacturerClick('ott', 'desktop')}
                className={`text-sm transition-colors ${location.pathname === buildPath('/ott') ? 'text-primary' : 'text-white/60 hover:text-white'}`}
              >
                OTT
              </Link>
              <Link
                to={buildPath('/mayer')}
                onClick={() => handleManufacturerClick('mayer', 'desktop')}
                className={`text-sm transition-colors ${location.pathname === buildPath('/mayer') ? 'text-primary' : 'text-white/60 hover:text-white'}`}
              >
                Mayer
              </Link>
              <Link
                to={buildPath('/barbaric')}
                onClick={() => handleManufacturerClick('barbaric', 'desktop')}
                className={`text-sm transition-colors ${location.pathname === buildPath('/barbaric') ? 'text-primary' : 'text-white/60 hover:text-white'}`}
              >
                BARBARIC
              </Link>
            </div>

            <Link
              to={buildPath('/loesungen')}
              className={`text-sm transition-colors ${location.pathname === buildPath('/loesungen') ? 'text-primary' : 'text-white/60 hover:text-white'}`}
            >
              {t.nav.solutions}
            </Link>

            <Link
              to={buildPath('/finanzierung')}
              className={`text-sm transition-colors ${location.pathname === buildPath('/finanzierung') ? 'text-primary' : 'text-white/60 hover:text-white'}`}
            >
              {t.nav.automation}
            </Link>

            <Link
              to={buildPath('/service')}
              className={`text-sm transition-colors ${location.pathname === buildPath('/service') ? 'text-primary' : 'text-white/60 hover:text-white'}`}
            >
              {t.nav.service}
            </Link>

            <Link
              to={buildPath('/gebrauchtmaschinen')}
              className={`text-sm transition-colors ${location.pathname === buildPath('/gebrauchtmaschinen') ? 'text-primary' : 'text-white/60 hover:text-white'}`}
            >
              {t.nav.usedMachines}
            </Link>

            <Link
              to={buildPath('/kontakt')}
              onClick={() => handleNavigationCta('contact', 'nav_desktop')}
              className={`text-sm transition-colors ${location.pathname === buildPath('/kontakt') ? 'text-primary' : 'text-white/60 hover:text-white'}`}
            >
              {t.nav.contact}
            </Link>

            <button
              onClick={toggleTheme}
              className="theme-toggle-btn"
              aria-label={themeLabel}
              title={themeLabel}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-1 text-sm text-white/60 hover:text-white transition-colors"
              >
                {languages.find((l) => l.code === lang)?.label}
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    isLangMenuOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isLangMenuOpen && (
                <div className="absolute top-full right-0 mt-2 nav-dropdown-panel rounded-lg shadow-xl py-2 min-w-[80px] border border-white/5">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        changeLanguage(l.code, 'desktop');
                        setIsLangMenuOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-sm text-left transition-colors hover:bg-white/5 ${
                        lang === l.code
                          ? 'text-primary font-medium'
                          : 'text-white/70'
                      }`}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white/60 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 nav-mobile-panel py-5">
            <div className="flex flex-col gap-4">
              {/* Manufacturer Links */}
              <div className="px-6 pb-4 border-b border-white/5">
                <span className="text-xs uppercase tracking-widest text-white/30 mb-3 block">{manufacturerLabel}</span>
                <div className="flex flex-col gap-3">
                  <Link
                    to={buildPath('/ott')}
                    className="text-white/70 hover:text-white"
                    onClick={() => handleManufacturerClick('ott', 'mobile')}
                  >
                    OTT
                  </Link>
                  <Link
                    to={buildPath('/mayer')}
                    className="text-white/70 hover:text-white"
                    onClick={() => handleManufacturerClick('mayer', 'mobile')}
                  >
                    Mayer
                  </Link>
                  <Link
                    to={buildPath('/barbaric')}
                    className="text-white/70 hover:text-white"
                    onClick={() => handleManufacturerClick('barbaric', 'mobile')}
                  >
                    BARBARIC
                  </Link>
                </div>
              </div>

              {/* Page Links */}
              <div className="px-6 flex flex-col gap-3">
                <Link
                  to={buildPath('/loesungen')}
                  className={`text-left ${location.pathname === buildPath('/loesungen') ? 'text-primary' : 'text-white/70 hover:text-white'}`}
                >
                  {t.nav.solutions}
                </Link>
                <Link
                  to={buildPath('/finanzierung')}
                  className={`text-left ${location.pathname === buildPath('/finanzierung') ? 'text-primary' : 'text-white/70 hover:text-white'}`}
                >
                  {t.nav.automation}
                </Link>
                <Link
                  to={buildPath('/service')}
                  className={`text-left ${location.pathname === buildPath('/service') ? 'text-primary' : 'text-white/70 hover:text-white'}`}
                >
                  {t.nav.service}
                </Link>
                <Link
                  to={buildPath('/gebrauchtmaschinen')}
                  className={`text-left ${location.pathname === buildPath('/gebrauchtmaschinen') ? 'text-primary' : 'text-white/70 hover:text-white'}`}
                >
                  {t.nav.usedMachines}
                </Link>
                <Link
                  to={buildPath('/kontakt')}
                  onClick={() => handleNavigationCta('contact', 'nav_mobile')}
                  className={`text-left ${location.pathname === buildPath('/kontakt') ? 'text-primary' : 'text-white/70 hover:text-white'}`}
                >
                  {t.nav.contact}
                </Link>
              </div>

              {/* Language Selector */}
              <div className="px-6 pt-4 border-t border-white/5 space-y-4">
                <button
                  onClick={toggleTheme}
                  className="theme-toggle-btn w-full justify-center gap-2 py-2"
                  aria-label={themeLabel}
                >
                  {theme === 'dark' ? (
                    <>
                      <Sun className="w-4 h-4" />
                      <span className="text-sm">{t.nav.themeDay}</span>
                    </>
                  ) : (
                    <>
                      <Moon className="w-4 h-4" />
                      <span className="text-sm">{t.nav.themeNight}</span>
                    </>
                  )}
                </button>

                <div className="flex flex-wrap gap-2">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        changeLanguage(l.code, 'mobile');
                        setIsMobileMenuOpen(false);
                      }}
                      className={`px-3 py-1 text-sm rounded transition-colors ${
                        lang === l.code
                          ? 'bg-primary text-white'
                          : 'bg-white/5 text-white/70'
                      }`}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
