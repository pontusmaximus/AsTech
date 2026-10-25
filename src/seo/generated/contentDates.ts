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
  barbaric: { published: '2026-02-24T00:06:04-08:00', modified: '2026-09-15T11:14:41Z' },
  contact: { published: '2026-02-24T00:58:29-08:00', modified: '2026-10-14T22:33:28Z' },
  faq: { published: '2026-04-08T09:00:22-07:00', modified: '2026-09-15T11:14:41Z' },
  financing: { published: '2026-02-24T00:06:04-08:00', modified: '2026-08-24T23:19:14Z' },
  gannomat: { published: '2026-04-03T00:35:42+02:00', modified: '2026-09-15T11:14:41Z' },
  guideEdgebander: { published: '2026-04-08T09:00:22-07:00', modified: '2026-10-14T22:29:15Z' },
  guideFundingCz: { published: '2026-04-16T09:44:08+02:00', modified: '2026-10-14T22:29:15Z' },
  guidePanelSawComparison: { published: '2026-04-16T09:44:08+02:00', modified: '2026-10-14T22:29:15Z' },
  guidePurVsEva: { published: '2026-04-08T09:00:22-07:00', modified: '2026-10-14T22:03:25Z' },
  guideVacuumLifter: { published: '2026-06-22T15:30:28+02:00', modified: '2026-10-14T22:03:25Z' },
  guideWarehouseAutomation: { published: '2026-04-08T09:00:22-07:00', modified: '2026-08-24T23:19:14Z' },
  home: { published: '2026-02-24T00:06:04-08:00', modified: '2026-10-25T22:26:55Z' },
  imaSchelling: { published: '2026-04-24T11:50:03+02:00', modified: '2026-08-24T23:19:14Z' },
  imprint: { published: '2026-02-24T00:58:29-08:00', modified: '2026-04-08T16:00:22Z' },
  mayer: { published: '2026-02-24T00:06:04-08:00', modified: '2026-09-15T11:14:41Z' },
  ott: { published: '2026-02-24T00:06:04-08:00', modified: '2026-10-14T22:03:25Z' },
  privacy: { published: '2026-04-14T23:01:04+02:00', modified: '2026-04-14T21:01:04Z' },
  service: { published: '2026-02-24T00:58:29-08:00', modified: '2026-08-24T23:19:14Z' },
  solutions: { published: '2026-02-24T00:58:29-08:00', modified: '2026-08-24T23:19:14Z' },
  terms: { published: '2026-04-14T23:01:04+02:00', modified: '2026-10-25T22:39:33Z' },
  usedEdgebanders: { published: '2026-04-16T09:44:08+02:00', modified: '2026-10-14T22:24:20Z' },
  usedMachines: { published: '2026-02-27T13:27:35-08:00', modified: '2026-10-14T22:24:20Z' },
};
