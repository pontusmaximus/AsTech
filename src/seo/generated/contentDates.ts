/**
 * AUTOMATISCH ERZEUGT von scripts/generate-content-dates.ts — nicht bearbeiten.
 *
 * Veroeffentlichungs- und Aenderungsdatum je Route, abgeleitet aus der
 * Git-Historie der inhaltstragenden Dateien. Quelle fuer `datePublished` und
 * `dateModified` im Article-Schema der Ratgeberseiten.
 */

import type { SeoRouteKey } from '../routes';

export interface ContentDates {
  /**
   * Erster Commit der inhaltstragenden Datei. Fehlt, wenn das Repo flach
   * geklont ist und die Datei schon vor der Historiengrenze existierte —
   * dann waere jedes Datum geraten.
   */
  published?: string;
  modified: string;
}

export const CONTENT_DATES: Partial<Record<SeoRouteKey, ContentDates>> = {
  barbaric: { modified: '2026-08-29T00:03:48+02:00' },
  contact: { modified: '2026-08-28T09:05:44+00:00' },
  faq: { modified: '2026-08-28T09:05:44+00:00' },
  financing: { modified: '2026-08-28T09:05:44+00:00' },
  gannomat: { modified: '2026-08-28T19:23:55+02:00' },
  guideEdgebander: { modified: '2026-08-28T23:44:42+02:00' },
  guideFundingCz: { modified: '2026-08-28T09:05:44+00:00' },
  guidePanelSawComparison: { modified: '2026-08-28T09:05:44+00:00' },
  guidePurVsEva: { modified: '2026-08-28T09:05:44+00:00' },
  guideVacuumLifter: { published: '2026-06-22T15:30:28+02:00', modified: '2026-08-28T09:05:44+00:00' },
  guideWarehouseAutomation: { modified: '2026-08-28T09:05:44+00:00' },
  home: { modified: '2026-08-28T09:05:44+00:00' },
  imaSchelling: { modified: '2026-08-28T09:05:44+00:00' },
  imprint: { modified: '2026-08-28T09:05:44+00:00' },
  mayer: { modified: '2026-08-28T19:23:55+02:00' },
  ott: { modified: '2026-08-29T00:03:48+02:00' },
  privacy: { modified: '2026-08-28T09:05:44+00:00' },
  service: { modified: '2026-08-28T09:05:44+00:00' },
  solutions: { modified: '2026-08-28T09:05:44+00:00' },
  terms: { modified: '2026-08-28T09:05:44+00:00' },
  usedMachines: { modified: '2026-08-28T09:05:44+00:00' },
};
