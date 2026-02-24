import { Building2 } from 'lucide-react';
import { useLanguage } from '../App';
import { translatePageText } from '../i18n/pageTextTranslations';

const ImprintPage = () => {
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
      <section className="pt-36 pb-16">
        <div className="container-wide">
          <div className="max-w-4xl">
            <div className="accent-line mb-6" />
            <h1 className="text-section font-display font-light text-white mb-5">
              {tr('Impressum', 'Imprint', 'Tiráž')}
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              {tr(
                'Angaben gemäß Unternehmensinformationen.',
                'Information according to company details.',
                'Údaje dle firemních informací.'
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
            <p className="text-white/75 leading-relaxed">Salzburgerstr 73, 4650 Lambach</p>
          </article>

          <article className="rounded-2xl border border-white/10 bg-dark-card p-6">
            <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center mb-4">
              <Building2 className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-2xl font-display font-light text-white mb-4">Asamer s.r.o.</h2>
            <p className="text-white/75 leading-relaxed">Šámalova 748/107, 61500 Brünn - Zábrdovice, Tschechien</p>
          </article>
        </div>
      </section>
    </div>
  );
};

export default ImprintPage;
