import { useMemo } from 'react';
import { Building2, Mail, Phone, UserRound } from 'lucide-react';
import { useLanguage } from '../App';
import { translatePageText } from '../i18n/pageTextTranslations';
import SeoHead from '../seo/SeoHead';
import { organizationSchema, localBusinessSchemas } from '../seo/structuredData';
import { trackEvent } from '../lib/analytics';
import { buildMailto } from '../lib/email';

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

  const structuredData = useMemo(() => {
    const businesses = localBusinessSchemas();
    return [organizationSchema(), ...businesses];
  }, []);

  const handleContactAction = (type: 'phone' | 'email', person: string, placement: string) => {
    trackEvent('contact_action', {
      type,
      person,
      placement,
      lang,
    });
  };

  return (
    <>
      <SeoHead routeKey="contact" structuredData={structuredData} />
      <div className="bg-dark min-h-screen">
      <section className="pt-28 md:pt-36 pb-12">
        <div className="container-wide">
          <div className="max-w-4xl">
            <div className="accent-line mb-6" />
            <h1 className="text-section font-display font-light text-white mb-5">
              {tr('Über uns', 'About us', 'O nás')}
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              {tr(
                'Unternehmensinformationen, Impressum und direkte Ansprechpartner für Maschinen- und Servicethemen.',
                'Company information, imprint details, and direct contacts for machinery and service topics.',
                'Firemní informace, údaje o společnosti a přímé kontakty pro stroje a servis.'
              )}
            </p>
          </div>
        </div>
      </section>

      <section className="pb-10">
        <div className="container-wide grid md:grid-cols-2 gap-6">
          <article className="rounded-2xl border border-white/10 bg-dark-card p-6">
            <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center mb-4">
              <Building2 className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-2xl font-display font-light text-white mb-4">Asamer Technologie GmbH</h2>
            <div className="space-y-2 text-white/75 text-sm leading-relaxed">
              <p>Salzburgerstrasse 73</p>
              <p>4650 Lambach, AT</p>
              <p className="pt-1">{tr('UID', 'VAT ID', 'DIČ')}: ATU 72811406</p>
              <p>{tr('Registriert', 'Registered', 'Registrováno')}: Gerichtstand Wels, FN 481620 s</p>
            </div>
          </article>

          <article className="rounded-2xl border border-white/10 bg-dark-card p-6">
            <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center mb-4">
              <Building2 className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-2xl font-display font-light text-white mb-4">ASAMER spol. s r.o.</h2>
            <div className="space-y-2 text-white/75 text-sm leading-relaxed">
              <p>Šámalova 748/107</p>
              <p>CZ 615 00 Brno</p>
              <p className="pt-1">ICO: 60699761</p>
              <p>DIC: CZ60699761</p>
              <p>{tr('Registriert', 'Registered', 'Registrováno')}: Krajsky soud Brno, oddíl C, vložka 14536</p>
            </div>
          </article>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-wide">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-display font-light text-white">
              {tr('Direkte Kontakte', 'Direct contacts', 'Přímé kontakty')}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <article className="rounded-2xl border border-white/10 bg-dark-card p-6">
              <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center mb-4">
                <UserRound className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-display font-medium text-white mb-1">Asamer Technologie GmbH</h3>
              <p className="text-white/60 text-sm mb-4">{tr('für Maschinen', 'for machinery', 'pro stroje')}</p>
              <div className="space-y-3 text-white/75">
                <a
                  href="tel:+436642633132"
                  onClick={() => handleContactAction('phone', 'asamer_gmbh', 'contact_card')}
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  <span>+43 664 26 33 132</span>
                </a>
                <a
                  href={buildMailto('eli@asamer.net')}
                  onClick={() => handleContactAction('email', 'eli@asamer.net', 'contact_card')}
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  <span>eli@asamer.net</span>
                </a>
              </div>
            </article>

            <article className="rounded-2xl border border-white/10 bg-dark-card p-6">
              <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center mb-4">
                <UserRound className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-display font-medium text-white mb-1">Asamer s.r.o.</h3>
              <p className="text-white/60 text-sm mb-4">{tr('für Servicefragen', 'for service inquiries', 'pro servisní dotazy')}</p>
              <div className="space-y-3 text-white/75">
                <a
                  href="tel:+420724056965"
                  onClick={() => handleContactAction('phone', 'asamer_sro', 'contact_card')}
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  <span>Herr Petras: +420 724 056 965</span>
                </a>
                <a
                  href={buildMailto('office@asamer.net')}
                  onClick={() => handleContactAction('email', 'office@asamer.net', 'contact_card')}
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  <span>office@asamer.net</span>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default ContactPage;
