import { useState, useEffect, useMemo, useCallback, createContext, useContext } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
  Outlet,
  useParams,
} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Analytics } from '@vercel/analytics/react';
import type { Language, Translations } from './i18n';
import translations from './i18n';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import MayerPage from './pages/MayerPage';
import OttPage from './pages/OttPage';
import BarbaricPage from './pages/BarbaricPage';
import FinancingPage from './pages/FinancingPage';
import SolutionsPage from './pages/SolutionsPage';
import ServicePage from './pages/ServicePage';
import ContactPage from './pages/ContactPage';
import ImprintPage from './pages/ImprintPage';
import UsedMachinesPage from './pages/UsedMachinesPage';
import OttProductPage from './pages/OttProductPage';
import MayerProductPage from './pages/MayerProductPage';
import BarbaricProductPage from './pages/BarbaricProductPage';
import GannomatPage from './pages/GannomatPage';
import GannomatProductPage from './pages/GannomatProductPage';
import NotFoundPage from './pages/NotFoundPage';
import Footer from './sections/Footer';
import CookieConsent from './components/CookieConsent';
import AnalyticsTracker from './components/AnalyticsTracker';
import Ga4Loader from './components/Ga4Loader';
import {
  buildLocalizedPath,
  DEFAULT_LANGUAGE,
  isSupportedLanguage,
  stripLanguageFromPath,
} from './lib/language';
import { localizeSlug, translateSlug, getAllSlugVariants } from './lib/slugs';
import { findOttCategoryBySlug, getOttCategorySlug, OTT_CATEGORY_SLUG_VARIANTS } from './data/ottProducts';
import {
  findMayerCategoryBySlug,
  getMayerCategorySlug,
  MAYER_CATEGORY_SLUG_VARIANTS,
} from './data/mayerProducts';
import {
  findBarbaricCategoryBySlug,
  getBarbaricCategorySlug,
  BARBARIC_CATEGORY_SLUG_VARIANTS,
} from './data/barbaricProducts';
import {
  findGannomatCategoryBySlug,
  getGannomatCategorySlug,
  GANNOMAT_CATEGORY_SLUG_VARIANTS,
} from './data/gannomatProducts';
import './App.css';

interface LanguageContextType {
  lang: Language;
  t: Translations;
  setLang: (lang: Language) => void;
  buildPath: (slug?: string) => string;
}

export type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);
const ThemeContext = createContext<ThemeContextType | null>(null);

const getInitialTheme = (): Theme => {
  if (typeof window === 'undefined') {
    return 'light';
  }

  const savedTheme = localStorage.getItem('asamer-theme');
  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme;
  }

  return 'light';
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

function App() {
  return (
    <HelmetProvider>
      <>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
        <Analytics />
      </>
    </HelmetProvider>
  );
}

const LEGACY_SLUGS = [
  'mayer',
  'ott',
  'barbaric',
  'gannomat',
  'financovani',
  'reseni',
  'servis',
  'pouzite-stroje',
  'gebrauchtmaschinen',
  'used-machines',
  'hasznalt-gepek',
  'kontakt',
  'contact',
  'kapcsolat',
  'imprint',
  'impressum',
  'impresszum',
  'finanzierung',
  'financing',
  'financovanie',
  'finanszirozas',
  'loesungen',
  'solutions',
  'riesenia',
  'megoldasok',
  'service',
  'szerviz',
];

const AppRoutes = () => {
  const legacyRedirects = LEGACY_SLUGS.map((slug) => (
    <Route
      key={slug}
      path={`/${slug}`}
      element={<Navigate to={buildLocalizedPath(DEFAULT_LANGUAGE, `/${slug}`)} replace />}
    />
  ));

  return (
    <Routes>
      <Route path="/" element={<Navigate to={`/${DEFAULT_LANGUAGE}`} replace />} />
      {legacyRedirects}
      <Route path="/:lang/*" element={<LanguageAppLayout />}>
        <Route index element={<Home />} />
        <Route path="mayer" element={<MayerPage />} />
        <Route path="mayer/:category/:model" element={<LocalizedMayerProductRoute />} />
        <Route path="ott" element={<OttPage />} />
        <Route path="ott/:category/:model" element={<LocalizedOttProductRoute />} />
        <Route path="barbaric" element={<BarbaricPage />} />
        <Route path="barbaric/:category/:model" element={<LocalizedBarbaricProductRoute />} />
        <Route path="gannomat" element={<GannomatPage />} />
        <Route path="gannomat/:category/:model" element={<LocalizedGannomatProductRoute />} />
        {getAllSlugVariants('/financovani').map((s) => (
          <Route key={s} path={s} element={<LocalizedRoute page={<FinancingPage />} czSlug="/financovani" />} />
        ))}
        {getAllSlugVariants('/reseni').map((s) => (
          <Route key={s} path={s} element={<LocalizedRoute page={<SolutionsPage />} czSlug="/reseni" />} />
        ))}
        {getAllSlugVariants('/servis').map((s) => (
          <Route key={s} path={s} element={<LocalizedRoute page={<ServicePage />} czSlug="/servis" />} />
        ))}
        {getAllSlugVariants('/pouzite-stroje').map((s) => (
          <Route key={s} path={s} element={<LocalizedRoute page={<UsedMachinesPage />} czSlug="/pouzite-stroje" />} />
        ))}
        {getAllSlugVariants('/kontakt').map((s) => (
          <Route key={s} path={s} element={<LocalizedRoute page={<ContactPage />} czSlug="/kontakt" />} />
        ))}
        {getAllSlugVariants('/imprint').map((s) => (
          <Route key={s} path={s} element={<LocalizedRoute page={<ImprintPage />} czSlug="/imprint" />} />
        ))}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      <Route path="*" element={<Navigate to={`/${DEFAULT_LANGUAGE}`} replace />} />
    </Routes>
  );
};

const LanguageAppLayout = () => {
  const params = useParams<{ lang?: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const langParam = params.lang;

  const lang: Language = isSupportedLanguage(langParam) ? langParam : DEFAULT_LANGUAGE;
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  useEffect(() => {
    localStorage.setItem('asamer-theme', theme);
  }, [theme]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('theme-light', theme === 'light');
    root.classList.toggle('theme-dark', theme === 'dark');
    root.classList.toggle('dark', theme === 'dark');
    root.style.colorScheme = theme;
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('asamer-lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const handleSetLang = useCallback(
    (nextLang: Language) => {
      if (nextLang === lang) return;
      const rawPath = stripLanguageFromPath(location.pathname);

      let translatedPath: string;
      const ottMatch = rawPath.match(/^\/ott\/([^/]+)\/(.+)$/);
      const mayerMatch = rawPath.match(/^\/mayer\/([^/]+)\/(.+)$/);
      const barbaricMatch = rawPath.match(/^\/barbaric\/([^/]+)\/(.+)$/);
      const gannomatMatch = rawPath.match(/^\/gannomat\/([^/]+)\/(.+)$/);
      if (ottMatch && OTT_CATEGORY_SLUG_VARIANTS.includes(ottMatch[1])) {
        const cat = findOttCategoryBySlug(ottMatch[1]);
        translatedPath = cat
          ? `/ott/${getOttCategorySlug(cat, nextLang)}/${ottMatch[2]}`
          : rawPath;
      } else if (mayerMatch && MAYER_CATEGORY_SLUG_VARIANTS.includes(mayerMatch[1])) {
        const cat = findMayerCategoryBySlug(mayerMatch[1]);
        translatedPath = cat
          ? `/mayer/${getMayerCategorySlug(cat, nextLang)}/${mayerMatch[2]}`
          : rawPath;
      } else if (barbaricMatch && BARBARIC_CATEGORY_SLUG_VARIANTS.includes(barbaricMatch[1])) {
        const cat = findBarbaricCategoryBySlug(barbaricMatch[1]);
        translatedPath = cat
          ? `/barbaric/${getBarbaricCategorySlug(cat, nextLang)}/${barbaricMatch[2]}`
          : rawPath;
      } else if (gannomatMatch && GANNOMAT_CATEGORY_SLUG_VARIANTS.includes(gannomatMatch[1])) {
        const cat = findGannomatCategoryBySlug(gannomatMatch[1]);
        translatedPath = cat
          ? `/gannomat/${getGannomatCategorySlug(cat, nextLang)}/${gannomatMatch[2]}`
          : rawPath;
      } else {
        translatedPath = translateSlug(rawPath, lang, nextLang);
      }

      const nextUrl = `${buildLocalizedPath(nextLang, translatedPath)}${location.search}`;
      navigate(nextUrl, { replace: false });
    },
    [lang, location.pathname, location.search, navigate]
  );

  const buildPath = useCallback(
    (slug: string = '/') => buildLocalizedPath(lang, localizeSlug(slug, lang)),
    [lang]
  );

  const toggleTheme = () => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  };

  const t = useMemo(() => translations[lang], [lang]);

  if (!langParam || !isSupportedLanguage(langParam)) {
    const segments = location.pathname.split('/').slice(2);
    const remainder = segments.length ? `/${segments.join('/')}` : '/';
    const target = `${buildLocalizedPath(DEFAULT_LANGUAGE, remainder)}${location.search}`;
    return <Navigate to={target} replace />;
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      <LanguageContext.Provider value={{ lang, t, setLang: handleSetLang, buildPath }}>
        <Ga4Loader />
        <AnalyticsTracker />
        <div className={`app ${isLoaded ? 'loaded' : ''}`}>
          <Navigation />
          <main>
            <Outlet />
          </main>
          <Footer />
          <CookieConsent />
        </div>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
};


const LocalizedOttProductRoute = () => {
  const { lang } = useLanguage();
  const { category, model } = useParams<{ category: string; model: string }>();
  const ottCat = category ? findOttCategoryBySlug(category) : undefined;
  const correctCategory = ottCat ? getOttCategorySlug(ottCat, lang) : undefined;

  if (!correctCategory || category !== correctCategory) {
    if (correctCategory && model) {
      return (
        <Navigate
          to={buildLocalizedPath(lang, `/ott/${correctCategory}/${model}`)}
          replace
        />
      );
    }
    return <Navigate to={buildLocalizedPath(lang, '/ott')} replace />;
  }

  return <OttProductPage />;
};

const LocalizedMayerProductRoute = () => {
  const { lang } = useLanguage();
  const { category, model } = useParams<{ category: string; model: string }>();
  const mayerCat = category ? findMayerCategoryBySlug(category) : undefined;
  const correctCategory = mayerCat ? getMayerCategorySlug(mayerCat, lang) : undefined;

  if (!correctCategory || category !== correctCategory) {
    if (correctCategory && model) {
      return (
        <Navigate
          to={buildLocalizedPath(lang, `/mayer/${correctCategory}/${model}`)}
          replace
        />
      );
    }
    return <Navigate to={buildLocalizedPath(lang, '/mayer')} replace />;
  }

  return <MayerProductPage />;
};

const LocalizedBarbaricProductRoute = () => {
  const { lang } = useLanguage();
  const { category, model } = useParams<{ category: string; model: string }>();
  const barbaricCat = category ? findBarbaricCategoryBySlug(category) : undefined;
  const correctCategory = barbaricCat ? getBarbaricCategorySlug(barbaricCat, lang) : undefined;

  if (!correctCategory || category !== correctCategory) {
    if (correctCategory && model) {
      return (
        <Navigate
          to={buildLocalizedPath(lang, `/barbaric/${correctCategory}/${model}`)}
          replace
        />
      );
    }
    return <Navigate to={buildLocalizedPath(lang, '/barbaric')} replace />;
  }

  return <BarbaricProductPage />;
};

const LocalizedGannomatProductRoute = () => {
  const { lang } = useLanguage();
  const { category, model } = useParams<{ category: string; model: string }>();
  const gannomatCat = category ? findGannomatCategoryBySlug(category) : undefined;
  const correctCategory = gannomatCat ? getGannomatCategorySlug(gannomatCat, lang) : undefined;

  if (!correctCategory || category !== correctCategory) {
    if (correctCategory && model) {
      return <Navigate to={buildLocalizedPath(lang, `/gannomat/${correctCategory}/${model}`)} replace />;
    }
    return <Navigate to={buildLocalizedPath(lang, '/gannomat')} replace />;
  }

  return <GannomatProductPage />;
};

const LocalizedRoute = ({ page, czSlug }: { page: React.ReactNode; czSlug: string }) => {
  const { lang, buildPath } = useLanguage();
  const location = useLocation();
  const currentSlug = '/' + stripLanguageFromPath(location.pathname).replace(/^\//, '');
  const correctSlug = localizeSlug(czSlug, lang);

  if (currentSlug !== correctSlug) {
    return <Navigate to={buildPath(czSlug)} replace />;
  }

  return <>{page}</>;
};

export default App;
