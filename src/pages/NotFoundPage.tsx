import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../App';

const T = {
  title: { de: 'Seite nicht gefunden', en: 'Page not found', cz: 'Stránka nenalezena', sk: 'Stránka nenájdená', hu: 'Az oldal nem található' },
  heading: { de: '404', en: '404', cz: '404', sk: '404', hu: '404' },
  message: {
    de: 'Die angeforderte Seite existiert nicht oder wurde verschoben.',
    en: 'The requested page does not exist or has been moved.',
    cz: 'Požadovaná stránka neexistuje nebo byla přesunuta.',
    sk: 'Požadovaná stránka neexistuje alebo bola presunutá.',
    hu: 'A kért oldal nem létezik vagy áthelyezték.',
  },
  back: { de: 'Zur Startseite', en: 'Go to homepage', cz: 'Na hlavní stránku', sk: 'Na hlavnú stránku', hu: 'Főoldalra' },
} as const;

const NotFoundPage = () => {
  const { lang, buildPath } = useLanguage();
  const locale = (lang === 'de' || lang === 'en' || lang === 'cz' || lang === 'sk' || lang === 'hu') ? lang : 'en';

  return (
    <>
      <Helmet>
        <title>{T.title[locale]} | Asamer Technologie</title>
        <meta name="robots" content="noindex,follow" />
      </Helmet>
      <div className="bg-dark min-h-screen flex items-center justify-center text-white">
        <div className="text-center px-6">
          <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
          <p className="text-xl text-white/60 mb-8 max-w-md">{T.message[locale]}</p>
          <Link
            to={buildPath('/')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors"
          >
            {T.back[locale]}
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
