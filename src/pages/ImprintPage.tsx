import { Building2, Mail, Phone, Globe, Shield } from 'lucide-react';
import { useLanguage } from '../App';
import { translatePageText } from '../i18n/pageTextTranslations';
import SeoHead from '../seo/SeoHead';

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
    <>
      <SeoHead routeKey="imprint" />
      <div className="bg-dark min-h-screen">
        <section className="pt-28 md:pt-36 pb-12">
          <div className="container-wide">
            <div className="max-w-4xl">
              <div className="accent-line mb-6" />
              <h1 className="text-section font-display font-light text-white mb-5">
                {tr('Impressum', 'Imprint', 'Tiráž')}
              </h1>
              <p className="text-white/70 text-lg leading-relaxed">
                {tr(
                  'Angaben gemäß § 5 ECG und § 14 UGB. Offenlegung gemäß § 25 MedienG.',
                  'Information pursuant to § 5 ECG and § 14 UGB. Disclosure pursuant to § 25 MedienG.',
                  'Údaje dle § 5 ECG a § 14 UGB. Zveřejnění dle § 25 MedienG.',
                )}
              </p>
            </div>
          </div>
        </section>

        {/* Company cards */}
        <section className="pb-12">
          <div className="container-wide grid md:grid-cols-2 gap-6">
            {/* AT entity */}
            <article className="rounded-2xl border border-white/10 bg-dark-card p-6">
              <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center mb-4">
                <Building2 className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-light text-white mb-4">
                Asamer Technologie GmbH
              </h2>
              <div className="space-y-3 text-white/75 text-sm leading-relaxed">
                <div>
                  <p>Salzburgerstrasse 73</p>
                  <p>4650 Lambach, {tr('Österreich', 'Austria', 'Rakousko')}</p>
                </div>
                <div className="pt-1 space-y-1">
                  <p>
                    <span className="text-white/40 mr-2">{tr('Geschäftsführer', 'Managing Director', 'Jednatel')}:</span>
                    Elias Asamer
                  </p>
                  <p>
                    <span className="text-white/40 mr-2">{tr('UID-Nr.', 'VAT ID', 'DIČ')}:</span>
                    ATU 72811406
                  </p>
                  <p>
                    <span className="text-white/40 mr-2">{tr('Firmenbuch', 'Commercial register', 'Obchodní rejstřík')}:</span>
                    FN 481620 s
                  </p>
                  <p>
                    <span className="text-white/40 mr-2">{tr('Firmenbuchgericht', 'Register court', 'Rejstříkový soud')}:</span>
                    {tr('Landesgericht Wels', 'Regional Court Wels', 'Zemský soud Wels')}
                  </p>
                </div>
                <div className="pt-2 flex flex-col gap-2">
                  <a href="tel:+436642633132" className="inline-flex items-center gap-2 hover:text-white transition-colors">
                    <Phone className="w-4 h-4 text-primary" />
                    +43 664 26 33 132
                  </a>
                  <a href="mailto:office@asamer.net" className="inline-flex items-center gap-2 hover:text-white transition-colors">
                    <Mail className="w-4 h-4 text-primary" />
                    office@asamer.net
                  </a>
                  <a href="https://asamer.cz" className="inline-flex items-center gap-2 hover:text-white transition-colors">
                    <Globe className="w-4 h-4 text-primary" />
                    asamer.cz
                  </a>
                </div>
              </div>
            </article>

            {/* CZ entity */}
            <article className="rounded-2xl border border-white/10 bg-dark-card p-6">
              <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center mb-4">
                <Building2 className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-light text-white mb-4">
                ASAMER spol. s r.o.
              </h2>
              <div className="space-y-3 text-white/75 text-sm leading-relaxed">
                <div>
                  <p>Šámalova 748/107</p>
                  <p>615 00 Brno – Zábrdovice, {tr('Tschechien', 'Czech Republic', 'Česká republika')}</p>
                </div>
                <div className="pt-1 space-y-1">
                  <p>
                    <span className="text-white/40 mr-2">IČO:</span>
                    60699761
                  </p>
                  <p>
                    <span className="text-white/40 mr-2">DIČ:</span>
                    CZ60699761
                  </p>
                  <p>
                    <span className="text-white/40 mr-2">{tr('Registriert', 'Registered', 'Zapsáno')}:</span>
                    {tr(
                      'Kreisgericht Brno, Abt. C, Einlage 14536',
                      'Regional Court Brno, Section C, File 14536',
                      'Krajský soud v Brně, oddíl C, vložka 14536',
                    )}
                  </p>
                </div>
                <div className="pt-2 flex flex-col gap-2">
                  <a href="tel:+420724056965" className="inline-flex items-center gap-2 hover:text-white transition-colors">
                    <Phone className="w-4 h-4 text-primary" />
                    +420 724 056 965
                  </a>
                  <a href="mailto:office@asamer.net" className="inline-flex items-center gap-2 hover:text-white transition-colors">
                    <Mail className="w-4 h-4 text-primary" />
                    office@asamer.net
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Business activity + authorized brands */}
        <section className="pb-12">
          <div className="container-wide">
            <div className="max-w-4xl">
              <div className="rounded-2xl border border-white/10 bg-dark-card p-6">
                <h2 className="text-xl font-display font-light text-white mb-4">
                  {tr('Unternehmensgegenstand', 'Business Activity', 'Předmět podnikání')}
                </h2>
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  {tr(
                    'Vertrieb, Montage und Service von industriellen Maschinen und Automatisierungslösungen für die Holz-, Kunststoff- und Metallverarbeitung in Mitteleuropa (CZ, SK, HU).',
                    'Sales, installation and service of industrial machinery and automation solutions for wood, plastics and metal processing in Central Europe (CZ, SK, HU).',
                    'Prodej, montáž a servis průmyslových strojů a automatizačních řešení pro zpracování dřeva, plastů a kovů ve střední Evropě (CZ, SK, HU).',
                  )}
                </p>
                <p className="text-white/40 text-sm mb-3">{tr('Autorisierter Händler für:', 'Authorized dealer for:', 'Autorizovaný prodejce:')}
                </p>
                <div className="flex flex-wrap gap-3">
                  {['OTT', 'Mayer (Felder Group)', 'BARBARIC', 'Gannomat'].map((brand) => (
                    <span key={brand} className="px-3 py-1.5 text-xs rounded-full bg-white/[0.06] border border-white/10 text-white/70">
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Legal disclaimers */}
        <section className="pb-24">
          <div className="container-wide">
            <div className="max-w-4xl space-y-6">
              <div className="rounded-2xl border border-white/10 bg-dark-card p-6">
                <div className="flex items-start gap-3 mb-3">
                  <Shield className="w-5 h-5 text-white/30 mt-0.5 shrink-0" />
                  <h2 className="text-lg font-display font-light text-white">
                    {tr('Haftungsausschluss', 'Disclaimer', 'Vyloučení odpovědnosti')}
                  </h2>
                </div>
                <p className="text-white/50 text-sm leading-relaxed">
                  {tr(
                    'Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Eine Verpflichtung zur Überwachung übermittelter oder gespeicherter fremder Informationen besteht nicht.',
                    'The contents of this website have been created with the utmost care. However, we cannot guarantee the accuracy, completeness and timeliness of the contents. As a service provider, we are responsible for our own content on these pages in accordance with general laws. There is no obligation to monitor transmitted or stored third-party information.',
                    'Obsah těchto webových stránek byl vytvořen s maximální pečlivostí. Za správnost, úplnost a aktuálnost obsahu však nemůžeme převzít žádnou záruku. Jako poskytovatel služeb jsme odpovědní za vlastní obsah na těchto stránkách v souladu s obecnými zákony. Povinnost sledovat přenášené nebo uložené informace třetích stran neexistuje.',
                  )}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-dark-card p-6">
                <div className="flex items-start gap-3 mb-3">
                  <Shield className="w-5 h-5 text-white/30 mt-0.5 shrink-0" />
                  <h2 className="text-lg font-display font-light text-white">
                    {tr('Urheberrecht', 'Copyright', 'Autorské právo')}
                  </h2>
                </div>
                <p className="text-white/50 text-sm leading-relaxed">
                  {tr(
                    'Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem österreichischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Produktbilder und Spezifikationen stammen von den jeweiligen Herstellern (OTT, Mayer/Felder Group, Barbaric, Gannomat).',
                    'The contents and works created by the site operator on these pages are subject to Austrian copyright law. Reproduction, editing, distribution and any kind of exploitation beyond the limits of copyright require the written consent of the respective author or creator. Product images and specifications are from the respective manufacturers (OTT, Mayer/Felder Group, Barbaric, Gannomat).',
                    'Obsah a díla vytvořená provozovatelem stránek podléhají rakouskému autorskému právu. Rozmnožování, úpravy, šíření a jakékoli využití mimo hranice autorského práva vyžaduje písemný souhlas příslušného autora nebo tvůrce. Obrázky produktů a specifikace pocházejí od příslušných výrobců (OTT, Mayer/Felder Group, Barbaric, Gannomat).',
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ImprintPage;
