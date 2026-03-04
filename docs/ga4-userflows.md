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
- `hero_contact_click` (Hero-Mailto, Parameter: `placement`, `target`, `lang`)
- `navigation_cta_click` (Kontakt-Link, Sprache wechseln, Parameter: `placement`, `target`, `from_lang`, `target_lang`)
- `manufacturer_cross_navigation_click` (Top-Navigation + Hersteller-CTAs; Parameter: `from_page`, `to_page`, `placement`)
- `contact_action` (Telefon/E-Mail auf der Kontaktseite; Parameter: `type`, `person`, `placement`, `lang`)
- `used_machine_inquiry_click` (Alle Mail-Buttons bei Gebrauchtmaschinen; Parameter: `product_name`, `manufacturer`, `placement`, `lang`)
- `footer_cta_click`, `footer_scroll_top_click` (Footer-Links und Back-to-top; Parameter: `target`, `lang`)
- `flow_start`, `flow_step`, `flow_submit`, `flow_result_view`, `flow_cta_click`, `flow_reset`
- `financing_details_toggle`, `financing_leasing_cta_click`

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
- `lang`
- `target`
- `target_lang`
- `person`
- `manufacturer`

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

## 6. QA-Checkliste

1. Lokal `VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX npm run dev` setzen.
2. Im Browser Cookies ablehnen -> keine Events in GA DebugView sichtbar.
3. Cookies für Statistik erlauben -> `page_view` und neue Events (Hero, Navigation, Kontakt, Used Machines, Footer) in DebugView kontrollieren.
