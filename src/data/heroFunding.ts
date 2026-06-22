import type { Language } from '../i18n';

export interface HeroFundingEntry {
  /** Kurze Kennzahl fürs Badge, z.B. "50 %". */
  percent: string;
  /** Programmname (verlinkt zur Finanzierungsseite). */
  program: string;
  /** Satzteil vor dem Programmnamen. */
  sentencePre: string;
  /** Satzteil nach dem Programmnamen. */
  sentencePost: string;
}

/**
 * Inhalt des Förderungs-Badges im Vakuumheber-Hero-Slide, je nach aktiver Sprache.
 * Programmnamen spiegeln FinancingPage.tsx (Abschnitt „Förderungen & Zuschüsse").
 * Märkte sind CZ / SK / HU. DE/EN sind Übersichts-Locales ohne nationales
 * Einzelprogramm und zeigen die marktübergreifende „bis 50 %"-Aussage.
 * Sätze sind vollständig lokalisiert (auch nativ SK/HU), damit der
 * tr()-Fallback umgangen wird und das Badge je Sprache korrekt erscheint.
 */
export const HERO_FUNDING: Record<Language, HeroFundingEntry> = {
  de: {
    percent: '50 %',
    program: 'Förderprogramm Ihres Marktes',
    sentencePre: 'Sparen Sie jetzt bis zu 50 % mit dem ',
    sentencePost: '!',
  },
  en: {
    percent: '50%',
    program: 'funding programme of your market',
    sentencePre: 'Save up to 50% now with the ',
    sentencePost: '!',
  },
  cz: {
    percent: '45 %',
    program: 'OP TAK – Digitální podnik',
    sentencePre: 'Ušetřete až 45 % s dotací ',
    sentencePost: '!',
  },
  sk: {
    percent: '50 %',
    program: 'Program Slovensko 2021–2027',
    sentencePre: 'Ušetrite až 50 % s dotáciou ',
    sentencePost: '!',
  },
  hu: {
    percent: '50%',
    program: 'GINOP Plusz-1.2.4',
    sentencePre: 'Spóroljon most akár 50%-ot a ',
    sentencePost: ' támogatással!',
  },
};
