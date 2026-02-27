# GA4 Userflow Tracking

## 1. GA4 aktivieren

Lege in deiner Vercel-Umgebung (oder lokal in `.env`) die Measurement-ID an:

```bash
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Die Website lädt GA4 nur, wenn die ID gesetzt ist.

## 2. Consent beachten

Tracking wird nur gesendet, wenn der Nutzer bei Cookies `Statistik / Analyse` erlaubt.

## 3. Wichtige Events

- `page_view`
- `flow_start`, `flow_step`, `flow_submit`, `flow_result_view`, `flow_cta_click`, `flow_reset`
- `financing_details_toggle`, `financing_leasing_cta_click`
- `manufacturer_cross_navigation_click` (MAYER <-> BARBARIC)

## 4. Empfohlene Custom Dimensions in GA4

Für Event-Parameter als benutzerdefinierte Dimensionen anlegen:

- `flow_name`
- `flow_session_id`
- `flow_step`
- `placement`
- `from_page`
- `to_page`
- `product_name`
- `program_id`
- `status`

## 5. Userflows analysieren (Google Analytics)

1. GA4 -> `Explore` -> `Path exploration`
2. Startpunkt: Event-Name `flow_start` oder Seite `/finanzierung`
3. Breakdown hinzufügen:
   - `flow_name`
   - `flow_step`
   - `to_page` (für MAYER/BARBARIC Wechsel)
4. Filter setzen:
   - `event_name = manufacturer_cross_navigation_click` für Hersteller-Wechsel
   - `event_name contains flow_` für Finanzierungs-Funnel
