/**
 * Sprachmarker-Heuristik für den SEO-Audit (Masterplan 7.1).
 *
 * Kein vollwertiger Spracherkenner — der Zweck ist eng: erkennen, wenn eine
 * /hu/-Seite englischen und eine /sk/-Seite tschechischen Fließtext ausliefert.
 * Genau diese beiden Fehlerfälle sind in Phase 3 des Masterplans belegt.
 *
 * Vorgehen: pro Sprache eine Liste von Funktionswörtern, die in der Zielsprache
 * häufig und in den Verwechslungssprachen selten oder gar nicht vorkommen.
 * Gewertet wird der Anteil der Marker an allen Wörtern des Body-Textes.
 */

import type { Language } from '../src/i18n';

/**
 * Marker je Sprache. Bewusst auf *unterscheidende* Formen gesetzt:
 * CZ/SK teilen sich `a s v na je`, deshalb stehen dort nur die Formen,
 * die die jeweils andere Sprache nicht kennt (`pro` vs. `pre`, `-ní` vs. `-nie`).
 */
export const LANGUAGE_MARKERS: Record<Language, string[]> = {
  // Ungarisch: Artikel, Konjunktionen, Postpositionen, typische Suffixwörter.
  hu: [
    'az', 'egy', 'és', 'hogy', 'nem', 'van', 'már', 'vagy', 'ha', 'meg',
    'ez', 'ezt', 'ami', 'amely', 'való', 'lehet', 'kell', 'illetve', 'között',
    'szerint', 'esetén', 'során', 'által', 'után', 'előtt', 'mint', 'is',
  ],
  // Tschechisch: unterscheidende Formen gegenüber SK.
  cz: [
    'pro', 'který', 'která', 'které', 'jsou', 'jako', 'nebo', 'nejsou',
    'více', 'vždy', 'však', 'při', 'této', 'jejich', 'včetně', 'může',
    'lze', 'jsme', 'být', 'ještě', 'zařízení', 'řešení', 'provozu',
  ],
  // Slowakisch: unterscheidende Formen gegenüber CZ.
  sk: [
    'pre', 'ktorý', 'ktorá', 'ktoré', 'sú', 'ako', 'alebo', 'nie',
    'viac', 'vždy', 'však', 'pri', 'tejto', 'ich', 'vrátane', 'môže',
    'možno', 'sme', 'byť', 'ešte', 'zariadenie', 'riešenie', 'prevádzky',
  ],
  // Deutsch.
  de: [
    'der', 'die', 'das', 'und', 'für', 'mit', 'von', 'ist', 'sind', 'auf',
    'ein', 'eine', 'einen', 'nicht', 'auch', 'wird', 'werden', 'sich',
    'bei', 'aus', 'dem', 'den', 'oder', 'durch', 'zum', 'zur',
  ],
  // Englisch.
  en: [
    'the', 'and', 'for', 'with', 'from', 'this', 'that', 'are', 'you',
    'your', 'which', 'their', 'they', 'have', 'has', 'been', 'more',
    'into', 'than', 'when', 'each', 'other', 'about', 'also', 'these',
  ],
};

/** Sprachen, gegen die eine Seite geprüft wird — die Zielsprache plus ihre Verwechslungskandidaten. */
export const CONFUSION_LANGUAGES: Record<Language, Language[]> = {
  hu: ['hu', 'en', 'de'],
  sk: ['sk', 'cz'],
  cz: ['cz', 'sk'],
  de: ['de', 'en'],
  en: ['en', 'de'],
};

const WORD_RE = /[\p{L}\p{M}]+/gu;

export interface LanguageVerdict {
  /** Sprache mit dem höchsten Markeranteil. */
  detected: Language | null;
  /** Markeranteil je geprüfter Sprache, absolute Treffer. */
  hits: Partial<Record<Language, number>>;
  /** Gesamtzahl gewerteter Wörter. */
  words: number;
  /** true, wenn die erwartete Sprache gewinnt (oder zu wenig Text für ein Urteil vorliegt). */
  ok: boolean;
  /** Kurzbegründung für den Report. */
  reason: string;
}

/**
 * Prüft, ob `text` plausibel in `expected` verfasst ist.
 *
 * Unter `minWords` Wörtern wird nicht geurteilt — bei 30 Wörtern Fließtext ist
 * jede Heuristik Rauschen. Solche Seiten fallen ohnehin schon durch die
 * Wortzahl-Prüfung.
 */
export function checkLanguage(text: string, expected: Language, minWords = 80): LanguageVerdict {
  const words = (text.toLowerCase().match(WORD_RE) ?? []).filter((w) => w.length > 1);
  const total = words.length;

  if (total < minWords) {
    return { detected: null, hits: {}, words: total, ok: true, reason: `zu wenig Text (${total} Wörter) für ein Sprachurteil` };
  }

  const candidates = CONFUSION_LANGUAGES[expected];
  const counts = new Map<string, number>();
  for (const w of words) counts.set(w, (counts.get(w) ?? 0) + 1);

  const hits: Partial<Record<Language, number>> = {};
  for (const lang of candidates) {
    hits[lang] = LANGUAGE_MARKERS[lang].reduce((sum, marker) => sum + (counts.get(marker) ?? 0), 0);
  }

  let detected: Language | null = null;
  let best = -1;
  for (const lang of candidates) {
    const h = hits[lang] ?? 0;
    if (h > best) {
      best = h;
      detected = lang;
    }
  }

  const expectedHits = hits[expected] ?? 0;
  // Gleichstand zählt als bestanden — die Heuristik soll klare Fehlfälle fangen,
  // nicht bei jedem Grenzfall Alarm schlagen.
  const ok = detected === expected || expectedHits === best;

  const detail = candidates.map((l) => `${l}=${hits[l] ?? 0}`).join(' ');
  return {
    detected,
    hits,
    words: total,
    ok,
    reason: ok
      ? `Marker ${detail} (${total} Wörter)`
      : `erwartet ${expected}, dominiert ${detected} — Marker ${detail} (${total} Wörter)`,
  };
}
