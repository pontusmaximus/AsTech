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
  barbaric: { published: '2026-02-24T00:06:04-08:00', modified: '2026-08-28T03:01:45+02:00' },
  contact: { published: '2026-02-24T00:58:29-08:00', modified: '2026-08-28T03:01:45+02:00' },
  faq: { published: '2026-04-08T09:00:22-07:00', modified: '2026-08-28T03:01:45+02:00' },
  financing: { published: '2026-02-24T00:06:04-08:00', modified: '2026-08-28T03:01:45+02:00' },
  gannomat: { published: '2026-04-03T00:35:42+02:00', modified: '2026-08-28T03:01:45+02:00' },
  guideEdgebander: { published: '2026-04-08T09:00:22-07:00', modified: '2026-08-28T03:01:45+02:00' },
  guideFundingCz: { published: '2026-04-16T09:44:08+02:00', modified: '2026-08-28T03:01:45+02:00' },
  guidePanelSawComparison: { published: '2026-04-16T09:44:08+02:00', modified: '2026-08-28T03:01:45+02:00' },
  guidePurVsEva: { published: '2026-04-08T09:00:22-07:00', modified: '2026-08-28T03:01:45+02:00' },
  guideVacuumLifter: { published: '2026-06-22T15:30:28+02:00', modified: '2026-08-28T03:01:45+02:00' },
  guideWarehouseAutomation: { published: '2026-04-08T09:00:22-07:00', modified: '2026-08-28T03:01:45+02:00' },
  home: { published: '2026-02-24T00:06:04-08:00', modified: '2026-08-28T03:01:45+02:00' },
  imaSchelling: { published: '2026-04-24T11:50:03+02:00', modified: '2026-08-28T03:01:45+02:00' },
  imprint: { published: '2026-02-24T00:58:29-08:00', modified: '2026-08-28T03:01:45+02:00' },
  mayer: { published: '2026-02-24T00:06:04-08:00', modified: '2026-08-28T03:01:45+02:00' },
  ott: { published: '2026-02-24T00:06:04-08:00', modified: '2026-08-28T03:01:45+02:00' },
  privacy: { published: '2026-04-14T23:01:04+02:00', modified: '2026-08-28T03:01:45+02:00' },
  service: { published: '2026-02-24T00:58:29-08:00', modified: '2026-08-28T03:01:45+02:00' },
  solutions: { published: '2026-02-24T00:58:29-08:00', modified: '2026-08-28T03:01:45+02:00' },
  terms: { published: '2026-04-14T23:01:04+02:00', modified: '2026-08-28T03:01:45+02:00' },
  usedMachines: { published: '2026-02-27T13:27:35-08:00', modified: '2026-08-28T03:01:45+02:00' },
};
