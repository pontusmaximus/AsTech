import { FileText, ShoppingCart, Truck, Wrench, Scale } from 'lucide-react';
import { useLanguage } from '../App';
import { translatePageText } from '../i18n/pageTextTranslations';
import SeoHead from '../seo/SeoHead';
import { organizationSchema } from '../seo/structuredData';

const LAST_UPDATED = '2026-04-12';

const TermsPage = () => {
  const { lang } = useLanguage();
  const locale =
    lang === 'de' || lang === 'en' || lang === 'cz' || lang === 'sk' || lang === 'hu' ? lang : 'en';

  const tr = (de: string, en: string, cz: string) => {
    if (locale === 'de') return de;
    if (locale === 'cz') return cz;
    if (locale === 'sk' || locale === 'hu') return translatePageText(locale, en, cz);
    return en;
  };

  return (
    <>
      <SeoHead routeKey="terms" structuredData={[organizationSchema()]} />
      <div className="bg-dark min-h-screen">
        <section className="pt-28 md:pt-36 pb-10">
          <div className="container-wide">
            <div className="max-w-4xl">
              <div className="accent-line mb-6" />
              <h1 className="text-section font-display font-light text-white mb-5">
                {tr(
                  'Allgemeine Geschäftsbedingungen',
                  'Terms & Conditions',
                  'Obchodní podmínky',
                )}
              </h1>
              <p className="text-white/70 text-lg leading-relaxed">
                {tr(
                  'Diese AGB regeln den Verkauf, die Montage und den Service industrieller Maschinen im B2B-Geschäft zwischen der Asamer Technologie GmbH bzw. ASAMER spol. s r.o. und ihren gewerblichen Kunden.',
                  'These terms govern the sale, installation and service of industrial machinery in B2B business between Asamer Technologie GmbH / ASAMER spol. s r.o. and commercial customers.',
                  'Tyto obchodní podmínky upravují prodej, montáž a servis průmyslových strojů v B2B vztahu mezi společnostmi Asamer Technologie GmbH / ASAMER spol. s r.o. a podnikatelskými zákazníky.',
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
              <article className="rounded-2xl border border-white/10 bg-dark-card p-6">
                <div className="flex items-start gap-3 mb-3">
                  <FileText className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <h2 className="text-xl font-display font-light text-white">
                    § 1 {tr('Geltungsbereich', 'Scope', 'Působnost')}
                  </h2>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">
                  {tr(
                    'Diese AGB gelten für alle Angebote, Lieferungen und Leistungen an Unternehmer im Sinne des § 1 UGB bzw. § 420 des tschechischen Bürgerlichen Gesetzbuches. Abweichende Bedingungen des Kunden werden nur mit schriftlicher Zustimmung wirksam. Ein Verbrauchergeschäft ist ausgeschlossen.',
                    'These terms apply to all offers, deliveries and services to entrepreneurs within the meaning of § 1 UGB or § 420 of the Czech Civil Code. Customer terms to the contrary apply only with written acceptance. Consumer transactions are excluded.',
                    'Tyto podmínky se vztahují na všechny nabídky, dodávky a služby podnikatelům ve smyslu § 1 UGB nebo § 420 občanského zákoníku ČR. Odchylné podmínky zákazníka platí pouze s písemným souhlasem. Spotřebitelské obchody jsou vyloučeny.',
                  )}
                </p>
              </article>

              <article className="rounded-2xl border border-white/10 bg-dark-card p-6">
                <div className="flex items-start gap-3 mb-3">
                  <ShoppingCart className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <h2 className="text-xl font-display font-light text-white">
                    § 2 {tr('Angebot und Vertragsschluss', 'Offer and Conclusion', 'Nabídka a uzavření smlouvy')}
                  </h2>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">
                  {tr(
                    'Unsere Angebote sind freibleibend. Ein Vertrag kommt erst mit schriftlicher Auftragsbestätigung durch uns zustande. Abbildungen, Zeichnungen und technische Daten in Prospekten oder auf der Website sind Richtwerte; technische Änderungen der Hersteller (OTT, Mayer/Felder Group, Barbaric, Gannomat) bleiben vorbehalten.',
                    'Our offers are non-binding. A contract is only concluded upon our written order confirmation. Images, drawings and technical data in brochures or on the website are indicative; manufacturers (OTT, Mayer/Felder Group, Barbaric, Gannomat) reserve the right to make technical changes.',
                    'Naše nabídky jsou nezávazné. Smlouva je uzavřena až naším písemným potvrzením objednávky. Obrázky, výkresy a technické údaje v prospektech nebo na webu jsou orientační; výrobci (OTT, Mayer/Felder Group, Barbaric, Gannomat) si vyhrazují právo na technické změny.',
                  )}
                </p>
              </article>

              <article className="rounded-2xl border border-white/10 bg-dark-card p-6">
                <h2 className="text-xl font-display font-light text-white mb-3">
                  § 3 {tr('Preise und Zahlung', 'Prices and Payment', 'Ceny a platba')}
                </h2>
                <p className="text-white/70 text-sm leading-relaxed">
                  {tr(
                    'Preise verstehen sich netto ab Werk, zzgl. Verpackung, Transport, Versicherung und gesetzlicher Umsatzsteuer. Zahlungsbedingungen werden im Angebot festgelegt. Bei Zahlungsverzug fallen Verzugszinsen in gesetzlicher Höhe an. Das Eigentum an gelieferten Maschinen geht erst mit vollständiger Bezahlung auf den Kunden über (Eigentumsvorbehalt).',
                    'Prices are net ex-works, plus packaging, transport, insurance and statutory VAT. Payment terms are set out in the offer. Default interest accrues at the statutory rate. Title passes only upon full payment (retention of title).',
                    'Ceny jsou netto ze závodu, bez obalu, dopravy, pojištění a zákonné DPH. Platební podmínky jsou uvedeny v nabídce. Při prodlení se uplatňují zákonné úroky z prodlení. Vlastnické právo přechází na zákazníka až úplným zaplacením (výhrada vlastnictví).',
                  )}
                </p>
              </article>

              <article className="rounded-2xl border border-white/10 bg-dark-card p-6">
                <div className="flex items-start gap-3 mb-3">
                  <Truck className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <h2 className="text-xl font-display font-light text-white">
                    § 4 {tr('Lieferung und Montage', 'Delivery and Installation', 'Dodání a montáž')}
                  </h2>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">
                  {tr(
                    'Liefertermine sind unverbindlich, sofern nicht ausdrücklich als Fixtermin vereinbart. Der Kunde stellt geeignete Aufstellbedingungen (Fundament, Strom, Druckluft, Absaugung) auf eigene Kosten bereit. Die Gefahr geht mit Übergabe an den Transporteur auf den Kunden über.',
                    'Delivery dates are non-binding unless expressly agreed as fixed dates. The customer provides suitable installation conditions (foundation, power, compressed air, extraction) at their own expense. Risk passes to the customer upon handover to the carrier.',
                    'Termíny dodání jsou nezávazné, pokud nejsou výslovně sjednány jako pevné. Zákazník na vlastní náklady zajistí vhodné podmínky pro instalaci (základ, elektřinu, stlačený vzduch, odsávání). Nebezpečí přechází na zákazníka předáním dopravci.',
                  )}
                </p>
              </article>

              <article className="rounded-2xl border border-white/10 bg-dark-card p-6">
                <div className="flex items-start gap-3 mb-3">
                  <Wrench className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <h2 className="text-xl font-display font-light text-white">
                    § 5 {tr('Gewährleistung', 'Warranty', 'Záruka')}
                  </h2>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">
                  {tr(
                    'Die Gewährleistungsfrist beträgt 12 Monate ab Lieferung bei Neumaschinen, bei Gebrauchtmaschinen gilt die gesetzliche Mindestfrist, soweit zulässig eingeschränkt. Der Kunde hat Mängel unverzüglich schriftlich zu rügen. Bei berechtigter Mängelrüge erfolgt nach unserer Wahl Nachbesserung oder Ersatzlieferung. Verschleißteile sind ausgenommen.',
                    'Warranty is 12 months from delivery for new machines; for used machines the statutory minimum applies, restricted where permitted. Defects must be notified in writing without undue delay. In case of justified notice of defect we, at our choice, remedy the defect or deliver a replacement. Wear parts are excluded.',
                    'Záruční doba činí 12 měsíců od dodání u nových strojů; u použitých strojů platí zákonné minimum v přípustném rozsahu omezené. Vady je nutné neprodleně písemně reklamovat. Při oprávněné reklamaci podle naší volby opravíme vadu nebo dodáme náhradu. Opotřebitelné díly jsou vyloučeny.',
                  )}
                </p>
              </article>

              <article className="rounded-2xl border border-white/10 bg-dark-card p-6">
                <h2 className="text-xl font-display font-light text-white mb-3">
                  § 6 {tr('Haftung', 'Liability', 'Odpovědnost')}
                </h2>
                <p className="text-white/70 text-sm leading-relaxed">
                  {tr(
                    'Wir haften unbeschränkt für Vorsatz und grobe Fahrlässigkeit sowie für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit. Im Übrigen ist die Haftung auf den vertragstypischen, vorhersehbaren Schaden begrenzt. Die Haftung für entgangenen Gewinn, Produktionsausfall und mittelbare Schäden ist ausgeschlossen, soweit gesetzlich zulässig.',
                    'We are liable without limitation for intent and gross negligence and for injury to life, body or health. Otherwise liability is limited to typical, foreseeable contract damages. Liability for lost profit, production downtime and indirect damages is excluded to the extent permitted by law.',
                    'Odpovídáme neomezeně za úmysl a hrubou nedbalost a za škody na životě, zdraví nebo tělesné integritě. Jinak je odpovědnost omezena na typickou, předvídatelnou smluvní škodu. Odpovědnost za ušlý zisk, výpadek výroby a nepřímé škody je v zákonem přípustném rozsahu vyloučena.',
                  )}
                </p>
              </article>

              <article className="rounded-2xl border border-white/10 bg-dark-card p-6">
                <div className="flex items-start gap-3 mb-3">
                  <Scale className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <h2 className="text-xl font-display font-light text-white">
                    § 7 {tr('Anwendbares Recht und Gerichtsstand', 'Applicable Law and Jurisdiction', 'Rozhodné právo a příslušnost soudu')}
                  </h2>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">
                  {tr(
                    'Für Verträge mit der Asamer Technologie GmbH gilt österreichisches Recht unter Ausschluss des UN-Kaufrechts; Gerichtsstand ist Wels. Für Verträge mit der ASAMER spol. s r.o. gilt tschechisches Recht; Gerichtsstand ist Brno.',
                    'Contracts with Asamer Technologie GmbH are governed by Austrian law excluding the CISG; venue is Wels. Contracts with ASAMER spol. s r.o. are governed by Czech law; venue is Brno.',
                    'Smlouvy s Asamer Technologie GmbH se řídí rakouským právem s vyloučením Úmluvy OSN o smlouvách o mezinárodní koupi zboží; sudištěm je Wels. Smlouvy s ASAMER spol. s r.o. se řídí českým právem; sudištěm je Brno.',
                  )}
                </p>
              </article>

              <article className="rounded-2xl border border-white/10 bg-dark-card p-6">
                <h2 className="text-xl font-display font-light text-white mb-3">
                  § 8 {tr('Schlussbestimmungen', 'Final Provisions', 'Závěrečná ustanovení')}
                </h2>
                <p className="text-white/70 text-sm leading-relaxed">
                  {tr(
                    'Sollten einzelne Bestimmungen unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt. An ihre Stelle tritt eine Regelung, die dem wirtschaftlichen Zweck am nächsten kommt.',
                    'Should individual provisions be invalid, the validity of the remaining provisions remains unaffected. They are replaced by provisions closest to the economic purpose.',
                    'Pokud jsou jednotlivá ustanovení neúčinná, platnost ostatních ustanovení zůstává nedotčena. Nahradí je ustanovení co nejblíže hospodářskému účelu.',
                  )}
                </p>
              </article>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TermsPage;
