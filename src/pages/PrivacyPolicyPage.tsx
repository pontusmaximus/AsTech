import { Shield, Cookie, BarChart3, Mail, UserCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../App';
import { translatePageText } from '../i18n/pageTextTranslations';
import SeoHead from '../seo/SeoHead';
import { organizationSchema } from '../seo/structuredData';

const LAST_UPDATED = '2026-04-12';

const PrivacyPolicyPage = () => {
  const { lang, buildPath } = useLanguage();
  const locale =
    lang === 'de' || lang === 'en' || lang === 'cz' || lang === 'sk' || lang === 'hu' ? lang : 'en';

  const tr = (de: string, en: string, cz: string) => {
    if (locale === 'de') return de;
    if (locale === 'cz') return cz;
    if (locale === 'sk' || locale === 'hu') return translatePageText(locale, en, cz);
    return en;
  };

  const openCookieSettings = () => {
    window.dispatchEvent(new Event('asamer:open-cookie-settings'));
  };

  return (
    <>
      <SeoHead routeKey="privacy" structuredData={[organizationSchema()]} />
      <div className="bg-dark min-h-screen">
        <section className="pt-28 md:pt-36 pb-10">
          <div className="container-wide">
            <div className="max-w-4xl">
              <div className="accent-line mb-6" />
              <h1 className="text-section font-display font-light text-white mb-5">
                {tr('Datenschutzerklärung', 'Privacy Policy', 'Ochrana osobních údajů')}
              </h1>
              <p className="text-white/70 text-lg leading-relaxed">
                {tr(
                  'Informationen zur Verarbeitung personenbezogener Daten gemäß Art. 13 DSGVO.',
                  'Information on the processing of personal data pursuant to Art. 13 GDPR.',
                  'Informace o zpracování osobních údajů dle čl. 13 GDPR.',
                )}
              </p>
              <p className="text-white/40 text-sm mt-3">
                {tr('Zuletzt aktualisiert:', 'Last updated:', 'Naposledy aktualizováno:')} {LAST_UPDATED}
              </p>
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="container-wide">
            <div className="max-w-4xl space-y-6">
              {/* Verantwortlicher */}
              <article className="rounded-2xl border border-white/10 bg-dark-card p-6">
                <div className="flex items-start gap-3 mb-4">
                  <UserCheck className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <h2 className="text-xl font-display font-light text-white">
                    {tr('Verantwortlicher', 'Data Controller', 'Správce údajů')}
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6 text-white/75 text-sm leading-relaxed">
                  <div>
                    <p className="text-white font-medium mb-2">Asamer Technologie GmbH</p>
                    <p>Salzburgerstrasse 73, 4650 Lambach</p>
                    <p>{tr('Österreich', 'Austria', 'Rakousko')}</p>
                    <p className="mt-2">
                      <a href="mailto:office@asamer.net" className="text-primary hover:text-primary/80">
                        office@asamer.net
                      </a>
                    </p>
                  </div>
                  <div>
                    <p className="text-white font-medium mb-2">ASAMER spol. s r.o.</p>
                    <p>Šámalova 748/107, 615 00 Brno – Zábrdovice</p>
                    <p>{tr('Tschechien', 'Czech Republic', 'Česká republika')}</p>
                    <p className="mt-2">
                      <a href="mailto:office@asamer.net" className="text-primary hover:text-primary/80">
                        office@asamer.net
                      </a>
                    </p>
                  </div>
                </div>
              </article>

              {/* Zwecke */}
              <article className="rounded-2xl border border-white/10 bg-dark-card p-6">
                <div className="flex items-start gap-3 mb-4">
                  <Shield className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <h2 className="text-xl font-display font-light text-white">
                    {tr('Zwecke und Rechtsgrundlagen', 'Purposes and Legal Bases', 'Účely a právní základy')}
                  </h2>
                </div>
                <ul className="space-y-3 text-white/70 text-sm leading-relaxed list-disc pl-5">
                  <li>
                    {tr(
                      'Bereitstellung der Website und Gewährleistung der IT-Sicherheit (Art. 6 Abs. 1 lit. f DSGVO – berechtigtes Interesse).',
                      'Providing the website and ensuring IT security (Art. 6(1)(f) GDPR – legitimate interest).',
                      'Provoz webu a zajištění IT bezpečnosti (čl. 6 odst. 1 písm. f GDPR – oprávněný zájem).',
                    )}
                  </li>
                  <li>
                    {tr(
                      'Bearbeitung von Anfragen über Kontaktformular oder E-Mail (Art. 6 Abs. 1 lit. b DSGVO – Vertragsanbahnung bzw. lit. f).',
                      'Handling inquiries via contact form or email (Art. 6(1)(b) GDPR – pre-contractual steps, or (f)).',
                      'Zpracování dotazů z kontaktního formuláře nebo e-mailu (čl. 6 odst. 1 písm. b GDPR – předsmluvní jednání, případně f).',
                    )}
                  </li>
                  <li>
                    {tr(
                      'Reichweitenmessung und Produktverbesserung mittels Google Analytics 4 und Vercel Analytics (Art. 6 Abs. 1 lit. a DSGVO – Einwilligung).',
                      'Analytics and product improvement via Google Analytics 4 and Vercel Analytics (Art. 6(1)(a) GDPR – consent).',
                      'Měření návštěvnosti a zlepšování produktu pomocí Google Analytics 4 a Vercel Analytics (čl. 6 odst. 1 písm. a GDPR – souhlas).',
                    )}
                  </li>
                </ul>
              </article>

              {/* Hosting */}
              <article className="rounded-2xl border border-white/10 bg-dark-card p-6">
                <h2 className="text-xl font-display font-light text-white mb-3">
                  {tr('Hosting & Server-Logs', 'Hosting & Server Logs', 'Hosting a server-logy')}
                </h2>
                <p className="text-white/70 text-sm leading-relaxed">
                  {tr(
                    'Die Website wird von Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA gehostet. Beim Abruf speichert der Server automatisch Zugriffsdaten (IP-Adresse gekürzt, Zeitstempel, User-Agent, Referrer) zur Gewährleistung von Stabilität und Sicherheit. Es besteht ein EU-US Data Privacy Framework für Vercel.',
                    'The website is hosted by Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA. When accessed, the server automatically logs access data (truncated IP, timestamp, user agent, referrer) to ensure stability and security. Vercel is covered by the EU-US Data Privacy Framework.',
                    'Webové stránky jsou hostovány společností Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA. Při přístupu server automaticky zaznamenává údaje o přístupu (zkrácenou IP, časové razítko, user-agent, referrer) pro zajištění stability a bezpečnosti. Vercel podléhá rámci EU-US Data Privacy Framework.',
                  )}
                </p>
              </article>

              {/* Cookies */}
              <article className="rounded-2xl border border-white/10 bg-dark-card p-6">
                <div className="flex items-start gap-3 mb-4">
                  <Cookie className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <h2 className="text-xl font-display font-light text-white">
                    {tr('Cookies & Einwilligung', 'Cookies & Consent', 'Cookies a souhlas')}
                  </h2>
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  {tr(
                    'Notwendige Cookies werden zur technischen Bereitstellung gesetzt. Funktionale, Statistik- und Marketing-Cookies werden ausschließlich nach Ihrer Einwilligung aktiviert. Ihre Einwilligung können Sie jederzeit widerrufen.',
                    'Necessary cookies are set for technical operation. Functional, analytics and marketing cookies are only activated after your consent. You can withdraw your consent at any time.',
                    'Nezbytné cookies se nastavují pro technický provoz. Funkční, statistické a marketingové cookies jsou aktivovány pouze na základě vašeho souhlasu. Svůj souhlas můžete kdykoli odvolat.',
                  )}
                </p>
                <button
                  type="button"
                  onClick={openCookieSettings}
                  className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium bg-primary text-white hover:bg-[#0066cc] transition-colors"
                >
                  {tr('Cookie-Einstellungen öffnen', 'Open cookie settings', 'Otevřít nastavení cookies')}
                </button>
              </article>

              {/* Analytics */}
              <article className="rounded-2xl border border-white/10 bg-dark-card p-6">
                <div className="flex items-start gap-3 mb-4">
                  <BarChart3 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <h2 className="text-xl font-display font-light text-white">
                    {tr('Analyse-Dienste', 'Analytics Services', 'Analytické služby')}
                  </h2>
                </div>
                <div className="space-y-4 text-white/70 text-sm leading-relaxed">
                  <div>
                    <p className="text-white font-medium mb-1">Google Analytics 4</p>
                    <p>
                      {tr(
                        'Anbieter: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. IP-Anonymisierung ist aktiv. Daten werden nur bei erteilter Einwilligung verarbeitet (Google Consent Mode v2). Speicherdauer: 14 Monate.',
                        'Provider: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland. IP anonymization is active. Data is only processed with consent (Google Consent Mode v2). Retention: 14 months.',
                        'Poskytovatel: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irsko. IP anonymizace je aktivní. Data se zpracovávají pouze se souhlasem (Google Consent Mode v2). Doba uchovávání: 14 měsíců.',
                      )}
                    </p>
                  </div>
                  <div>
                    <p className="text-white font-medium mb-1">Vercel Analytics</p>
                    <p>
                      {tr(
                        'Anbieter: Vercel Inc. Anonyme, aggregierte Nutzungsstatistiken ohne Cookies und ohne Fingerprinting.',
                        'Provider: Vercel Inc. Anonymous, aggregated usage statistics without cookies and without fingerprinting.',
                        'Poskytovatel: Vercel Inc. Anonymní, agregované statistiky využití bez cookies a bez otisků.',
                      )}
                    </p>
                  </div>
                </div>
              </article>

              {/* Kontaktformular */}
              <article className="rounded-2xl border border-white/10 bg-dark-card p-6">
                <div className="flex items-start gap-3 mb-4">
                  <Mail className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <h2 className="text-xl font-display font-light text-white">
                    {tr('Kontaktformular & E-Mail', 'Contact Form & Email', 'Kontaktní formulář a e-mail')}
                  </h2>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">
                  {tr(
                    'Bei Kontaktaufnahme verarbeiten wir Name, Firma, E-Mail-Adresse, Telefonnummer und Ihre Nachricht zur Bearbeitung Ihrer Anfrage. Die Daten werden nach Abschluss der Bearbeitung gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten (7 Jahre handels-/steuerrechtlich) entgegenstehen.',
                    'When you contact us we process your name, company, email address, phone number and message to handle your inquiry. Data is deleted after processing unless subject to statutory retention (7 years under commercial/tax law).',
                    'Při kontaktování zpracováváme jméno, společnost, e-mailovou adresu, telefon a zprávu k vyřízení dotazu. Údaje mažeme po vyřízení, ledaže se na ně vztahují zákonné povinnosti uchovávání (7 let dle obchodního/daňového práva).',
                  )}
                </p>
              </article>

              {/* Rechte */}
              <article className="rounded-2xl border border-white/10 bg-dark-card p-6">
                <h2 className="text-xl font-display font-light text-white mb-3">
                  {tr('Ihre Rechte', 'Your Rights', 'Vaše práva')}
                </h2>
                <p className="text-white/70 text-sm leading-relaxed mb-3">
                  {tr(
                    'Sie haben das Recht auf Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch (Art. 21) DSGVO. Eine erteilte Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen (Art. 7 Abs. 3 DSGVO).',
                    'You have the right to access (Art. 15), rectification (Art. 16), erasure (Art. 17), restriction of processing (Art. 18), data portability (Art. 20) and objection (Art. 21) under the GDPR. You may withdraw consent at any time with future effect (Art. 7(3) GDPR).',
                    'Máte právo na přístup (čl. 15), opravu (čl. 16), výmaz (čl. 17), omezení zpracování (čl. 18), přenositelnost (čl. 20) a vznesení námitky (čl. 21) dle GDPR. Udělený souhlas můžete kdykoli odvolat s účinky do budoucna (čl. 7 odst. 3 GDPR).',
                  )}
                </p>
                <p className="text-white/70 text-sm leading-relaxed">
                  {tr(
                    'Beschwerden können Sie bei der österreichischen Datenschutzbehörde (dsb.gv.at) oder dem tschechischen Úřad pro ochranu osobních údajů (uoou.cz) einreichen.',
                    'You can lodge complaints with the Austrian DPA (dsb.gv.at) or the Czech DPA Úřad pro ochranu osobních údajů (uoou.cz).',
                    'Stížnosti můžete podat u rakouského úřadu pro ochranu osobních údajů (dsb.gv.at) nebo u českého Úřadu pro ochranu osobních údajů (uoou.cz).',
                  )}
                </p>
              </article>

              <p className="text-white/40 text-sm">
                {tr('Siehe auch unser', 'See also our', 'Viz také naše')}{' '}
                <Link to={buildPath('/imprint')} className="text-primary hover:text-primary/80">
                  {tr('Impressum', 'Imprint', 'Tiráž')}
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
