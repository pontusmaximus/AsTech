import { Building2, Phone } from 'lucide-react';
import { useLanguage } from '../App';
import { translatePageText } from '../i18n/pageTextTranslations';

const ContactPage = () => {
  const { lang } = useLanguage();
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

  return (
    <div className="bg-dark min-h-screen">
      <section className="pt-28 md:pt-36 pb-12">
        <div className="container-wide">
          <div className="max-w-4xl">
            <div className="accent-line mb-6" />
            <h1 className="text-section font-display font-light text-white mb-5">
              {tr('Kontakt', 'Contact', 'Kontakt')}
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              {tr(
                'Direkte Ansprechpartner für Vertrieb, Service und Projektanfragen.',
                'Direct contact points for sales, service, and project inquiries.',
                'Přímé kontakty pro obchod, servis a projektové poptávky.'
              )}
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-wide grid md:grid-cols-2 gap-6">
          <article className="rounded-2xl border border-white/10 bg-dark-card p-6">
            <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center mb-4">
              <Building2 className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-2xl font-display font-light text-white mb-4">Asamer Technologie GmbH</h2>
            <div className="space-y-3 text-white/75">
              <a href="tel:+437245208450" className="inline-flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-primary" />
                <span>+43 7245 208450</span>
              </a>
              <p>Salzburgerstr 73, 4650 Lambach</p>
            </div>
          </article>

          <article className="rounded-2xl border border-white/10 bg-dark-card p-6">
            <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center mb-4">
              <Building2 className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-2xl font-display font-light text-white mb-4">Asamer s.r.o.</h2>
            <div className="space-y-3 text-white/75">
              <a href="tel:+420548539287" className="inline-flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-primary" />
                <span>+420 548 539 287</span>
              </a>
              <p>Šámalova 748/107, 61500 Brünn - Zábrdovice, Tschechien</p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
