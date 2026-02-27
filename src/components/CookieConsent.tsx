import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../App';
import { translatePageText } from '../i18n/pageTextTranslations';
import {
  applyConsentToIntegrations,
  createAcceptAllCategories,
  createEssentialOnlyCategories,
  readCookieConsent,
  saveCookieConsent,
} from '../lib/cookieConsent';
import type { ConsentCategories } from '../lib/cookieConsent';

type ConsentToggleProps = {
  title: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (value: boolean) => void;
};

const ConsentToggle = ({ title, description, checked, disabled, onChange }: ConsentToggleProps) => (
  <div className="rounded-xl border border-white/10 bg-black/20 p-4">
    <div className="flex items-start justify-between gap-4">
      <div>
        <h3 className="text-white font-medium">{title}</h3>
        <p className="text-white/60 text-sm mt-1">{description}</p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={title}
        disabled={disabled}
        onClick={() => onChange(!checked)}
        className={`relative mt-0.5 inline-flex h-7 w-12 items-center rounded-full transition-colors ${
          checked ? 'bg-primary' : 'bg-white/20'
        } ${disabled ? 'cursor-not-allowed opacity-60' : ''}`}
      >
        <span
          className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
            checked ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  </div>
);

const CookieConsent = () => {
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

  const initialConsent = useMemo(() => readCookieConsent(), []);
  const [consentSet, setConsentSet] = useState(Boolean(initialConsent));
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [draft, setDraft] = useState<ConsentCategories>(
    initialConsent?.categories ?? createEssentialOnlyCategories()
  );
  const secondaryButtonClass =
    'inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium border border-white/20 text-white/85 hover:text-white hover:border-white/35 hover:bg-white/5 transition-colors';
  const primaryButtonClass =
    'inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium bg-primary text-white hover:bg-[#0066cc] transition-colors';

  useEffect(() => {
    const existing = readCookieConsent();
    applyConsentToIntegrations(existing?.categories ?? createEssentialOnlyCategories());
  }, []);

  useEffect(() => {
    if (!isSettingsOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isSettingsOpen]);

  const applyAndClose = (categories: ConsentCategories, source: 'banner' | 'settings') => {
    const next = saveCookieConsent(categories, source);
    applyConsentToIntegrations(next.categories);
    setConsentSet(true);
    setDraft(next.categories);
    setIsSettingsOpen(false);
  };

  const acceptAll = (source: 'banner' | 'settings') => {
    applyAndClose(createAcceptAllCategories(), source);
  };

  const acceptEssentialOnly = (source: 'banner' | 'settings') => {
    applyAndClose(createEssentialOnlyCategories(), source);
  };

  const saveSelection = () => {
    applyAndClose(
      {
        ...draft,
        necessary: true,
      },
      'settings'
    );
  };

  return (
    <>
      {!consentSet ? (
        <div className="fixed inset-x-0 bottom-0 z-[70] p-3 sm:p-4">
          <div className="container-wide">
            <div className="rounded-2xl border border-white/10 bg-dark-card/95 backdrop-blur-xl p-4 sm:p-5 shadow-2xl">
              <div className="flex flex-col lg:flex-row lg:items-end gap-4 lg:gap-6">
                <div className="flex-1">
                  <h2 className="text-white text-lg font-display font-medium mb-2">
                    {tr('Cookie-Einstellungen', 'Cookie settings', 'Nastavení cookies')}
                  </h2>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {tr(
                      'Wir verwenden Cookies, um die Website sicher zu betreiben und optionale Funktionen wie Statistik und Marketing nur mit Ihrer Einwilligung zu aktivieren.',
                      'We use cookies to run the website securely and activate optional features like analytics and marketing only with your consent.',
                      'Používáme cookies pro bezpečný provoz webu a volitelné funkce jako analytika a marketing aktivujeme pouze s vaším souhlasem.'
                    )}{' '}
                    <Link to="/impressum" className="text-primary hover:text-primary/80 transition-colors">
                      {tr('Mehr erfahren', 'Learn more', 'Zjistit více')}
                    </Link>
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:justify-end">
                  <button
                    type="button"
                    onClick={() => acceptEssentialOnly('banner')}
                    className={secondaryButtonClass}
                  >
                    {tr('Nur notwendige', 'Necessary only', 'Pouze nezbytné')}
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsSettingsOpen(true)}
                    className={secondaryButtonClass}
                  >
                    {tr('Einstellungen', 'Settings', 'Nastavení')}
                  </button>
                  <button type="button" onClick={() => acceptAll('banner')} className={primaryButtonClass}>
                    {tr('Alle akzeptieren', 'Accept all', 'Přijmout vše')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {isSettingsOpen ? (
        <div className="fixed inset-0 z-[80] bg-black/70 backdrop-blur-sm p-3 sm:p-6">
          <div className="mx-auto w-full max-w-3xl rounded-2xl border border-white/10 bg-dark-card p-5 sm:p-6 max-h-[92vh] overflow-y-auto">
            <div className="flex items-start justify-between gap-4 mb-5">
              <div>
                <h2 className="text-2xl font-display font-light text-white">
                  {tr('Cookie-Präferenzen', 'Cookie preferences', 'Předvolby cookies')}
                </h2>
                <p className="text-white/60 text-sm mt-2">
                  {tr(
                    'Sie können Ihre Auswahl jederzeit ändern.',
                    'You can change your selection at any time.',
                    'Své nastavení můžete kdykoli změnit.'
                  )}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsSettingsOpen(false)}
                className="text-white/60 hover:text-white transition-colors text-sm"
              >
                {tr('Schließen', 'Close', 'Zavřít')}
              </button>
            </div>

            <div className="space-y-3 mb-6">
              <ConsentToggle
                title={tr('Notwendige Cookies', 'Necessary cookies', 'Nezbytné cookies')}
                description={tr(
                  'Erforderlich für Sicherheit, Sprache und Grundfunktionen der Website.',
                  'Required for security, language, and core website functions.',
                  'Nezbytné pro bezpečnost, jazyk a základní funkce webu.'
                )}
                checked
                disabled
                onChange={() => undefined}
              />
              <ConsentToggle
                title={tr('Funktionale Cookies', 'Functional cookies', 'Funkční cookies')}
                description={tr(
                  'Speichern Komforteinstellungen und verbessern die Nutzung.',
                  'Store convenience settings and improve usability.',
                  'Ukládají komfortní nastavení a zlepšují použitelnost.'
                )}
                checked={draft.functional}
                onChange={(value) => setDraft((current) => ({ ...current, functional: value }))}
              />
              <ConsentToggle
                title={tr('Statistik / Analyse', 'Statistics / analytics', 'Statistiky / analytika')}
                description={tr(
                  'Helfen uns zu verstehen, wie Besucher die Website nutzen.',
                  'Help us understand how visitors use the website.',
                  'Pomáhají nám porozumět tomu, jak návštěvníci používají web.'
                )}
                checked={draft.analytics}
                onChange={(value) => setDraft((current) => ({ ...current, analytics: value }))}
              />
              <ConsentToggle
                title={tr('Marketing', 'Marketing', 'Marketing')}
                description={tr(
                  'Erlauben relevante Inhalte und Kampagnenmessung über Kanäle hinweg.',
                  'Allow relevant content and campaign measurement across channels.',
                  'Umožňují relevantní obsah a měření kampaní napříč kanály.'
                )}
                checked={draft.marketing}
                onChange={(value) => setDraft((current) => ({ ...current, marketing: value }))}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
              <button type="button" onClick={() => acceptEssentialOnly('settings')} className={secondaryButtonClass}>
                {tr('Nur notwendige', 'Necessary only', 'Pouze nezbytné')}
              </button>
              <button type="button" onClick={saveSelection} className={secondaryButtonClass}>
                {tr('Auswahl speichern', 'Save selection', 'Uložit výběr')}
              </button>
              <button type="button" onClick={() => acceptAll('settings')} className={primaryButtonClass}>
                {tr('Alle akzeptieren', 'Accept all', 'Přijmout vše')}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default CookieConsent;
