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
  'financovani',
  'reseni',
  'servis',
  'pouzite-stroje',
  'kontakt',
  'imprint',
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
        <Route path="ott" element={<OttPage />} />
        <Route path="barbaric" element={<BarbaricPage />} />
        <Route path="financovani" element={<FinancingPage />} />
        <Route path="reseni" element={<SolutionsPage />} />
        <Route path="servis" element={<ServicePage />} />
        <Route path="pouzite-stroje" element={<UsedMachinesPage />} />
        <Route path="kontakt" element={<ContactPage />} />
        <Route path="imprint" element={<ImprintPage />} />
        {/* Redirects for old German slugs */}
        <Route path="finanzierung" element={<SlugRedirect newSlug="/financovani" />} />
        <Route path="loesungen" element={<SlugRedirect newSlug="/reseni" />} />
        <Route path="service" element={<SlugRedirect newSlug="/servis" />} />
        <Route path="gebrauchtmaschinen" element={<SlugRedirect newSlug="/pouzite-stroje" />} />
        <Route path="impressum" element={<SlugRedirect newSlug="/imprint" />} />
        <Route path="*" element={<LanguageFallbackRedirect />} />
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
      const slug = stripLanguageFromPath(location.pathname);
      const nextPath = `${buildLocalizedPath(nextLang, slug)}${location.search}`;
      navigate(nextPath, { replace: false });
    },
    [lang, location.pathname, location.search, navigate]
  );

  const buildPath = useCallback(
    (slug: string = '/') => buildLocalizedPath(lang, slug),
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

const LanguageFallbackRedirect = () => {
  const { buildPath } = useLanguage();
  return <Navigate to={buildPath('/')} replace />;
};

const SlugRedirect = ({ newSlug }: { newSlug: string }) => {
  const { buildPath } = useLanguage();
  return <Navigate to={buildPath(newSlug)} replace />;
};

export default App;
