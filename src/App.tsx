import { useState, useEffect, createContext, useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import Footer from './sections/Footer';
import './App.css';

interface LanguageContextType {
  lang: Language;
  t: Translations;
  setLang: (lang: Language) => void;
}

export type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);
const ThemeContext = createContext<ThemeContextType | null>(null);

const getInitialLanguage = (): Language => {
  if (typeof window === 'undefined') {
    return 'cz';
  }

  const savedLang = localStorage.getItem('asamer-lang') as Language | null;
  if (savedLang && translations[savedLang]) {
    return savedLang;
  }

  return 'cz';
};

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
  const [lang, setLang] = useState<Language>(getInitialLanguage);
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  useEffect(() => {
    localStorage.setItem('asamer-lang', lang);
  }, [lang]);

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

  const toggleTheme = () => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  };

  const t = translations[lang];

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      <LanguageContext.Provider value={{ lang, t, setLang }}>
        <BrowserRouter>
          <div className={`app ${isLoaded ? 'loaded' : ''}`}>
            <Navigation />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mayer" element={<MayerPage />} />
                <Route path="/ott" element={<OttPage />} />
                <Route path="/barbaric" element={<BarbaricPage />} />
                <Route path="/finanzierung" element={<FinancingPage />} />
                <Route path="/loesungen" element={<SolutionsPage />} />
                <Route path="/service" element={<ServicePage />} />
                <Route path="/kontakt" element={<ContactPage />} />
                <Route path="/impressum" element={<ImprintPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
