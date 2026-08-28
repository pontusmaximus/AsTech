# i18n-Lücken — Übersetzungsvorlage für SK und HU

Erzeugt von `scripts/i18n-coverage.ts` (`npm run seo:i18n`). Nicht von Hand bearbeiten —
der Report wird bei jedem Lauf neu geschrieben.

## Wie die Lücken entstehen

Beide Übersetzungswege fallen bei fehlendem Text **still** auf eine andere Sprache zurück:

```ts
// src/i18n/pageTextTranslations.ts
if (locale === 'sk') return pageSkTranslations[cz] ?? cz;   // SK → CZ
return pageHuTranslations[en] ?? en;                        // HU → EN

// scripts/prerender.ts, ml() / mlGuide() / mlText()
if (lang === 'sk') return obj.sk ?? obj.cz;
if (lang === 'hu') return obj.hu ?? obj.en;
```

Ein slowakischer Leser versteht den tschechischen Text — deshalb fällt SK niemandem auf.
Für Google ist eine SK-Seite mit tschechischem Inhalt und `hreflang="sk"` dagegen ein
Widerspruch, der im günstigsten Fall ignoriert und im ungünstigsten als Duplikat gewertet wird.

## Abdeckung

| Ebene | Sprache | vorhanden | fehlt | Abdeckung |
|---|---|---:|---:|---:|
| A · Datenmodule (`MultiLangText`) | SK | 1704 | 302 | **84.9 %** |
| A · Datenmodule (`MultiLangText`) | HU | 1891 | 115 | **94.3 %** |
| B · Seitentexte (`tr()`) | SK | 735 | 0 | **100.0 %** |
| B · Seitentexte (`tr()`) | HU | 742 | 0 | **100.0 %** |

## Eigener Befund: `tr()`-Aufrufe mit dynamischem Text

11 `tr()`-Aufrufe setzen ihren Text zur Laufzeit zusammen (Template-Literale mit
`${…}`). Für sie kann es **grundsätzlich keinen** Wörterbucheintrag geben: der Schlüssel entsteht
erst im Browser und trifft nie auf einen statischen Eintrag. Diese Stellen bleiben auf SK und HU
dauerhaft im Fallback, egal wie vollständig die Wörterbücher werden.

| Datei | Zeile | Aufruf |
|---|---:|---|
| `src/pages/BarbaricProductPage.tsx` | 158 | `tr(`Anfrage Barbaric ${product.name}`, `Inquiry Barbaric ${product.name}`, `Poptávka Barbaric ${product.name}`)` |
| `src/pages/BarbaricProductPage.tsx` | 286 | `tr( `BARBARIC-Systeme wie das ${product.name} verfügen über offene Schnittstellen zu Maschinenherstell` |
| `src/pages/GannomatProductPage.tsx` | 59 | `tr(`Anfrage Gannomat ${product.name}`, `Inquiry Gannomat ${product.name}`, `Poptávka Gannomat ${product.name}`)` |
| `src/pages/GannomatProductPage.tsx` | 119 | `tr( `Gannomat ${product.name} ist eine ${categoryLabel}${product.category === 'insertion' ? ' – sie bo` |
| `src/pages/GannomatProductPage.tsx` | 181 | `tr( `Unser hauseigenes Software-Team verbindet Ihre Gannomat ${product.name} nahtlos mit Ihrem ERP-, M` |
| `src/pages/MayerProductPage.tsx` | 66 | `tr(`Anfrage Mayer ${product.name}`, `Inquiry Mayer ${product.name}`, `Poptávka Mayer ${product.name}`)` |
| `src/pages/MayerProductPage.tsx` | 133 | `tr( `Die Mayer ${product.name} ist eine ${categoryLabel} für ${product.materials.includes('aluminium')` |
| `src/pages/MayerProductPage.tsx` | 209 | `tr( `Unser hauseigenes Software-Team verbindet Ihre Mayer ${product.name} nahtlos mit Ihrem ERP-, MES-` |
| `src/pages/OttProductPage.tsx` | 91 | `tr(`Anfrage OTT ${product.name}`, `Inquiry OTT ${product.name}`, `Poptávka OTT ${product.name}`)` |
| `src/pages/OttProductPage.tsx` | 173 | `tr( `Die OTT ${product.name} ist eine ${categoryLabel} für ${audience.de}${product.usp?.[lang] ? ` – $` |
| `src/pages/OttProductPage.tsx` | 264 | `tr( `Unser Software-Team verbindet die ${product.name} via OPC-UA direkt mit Ihrem ERP/MES – keine` |

---

# Ebene B — Seitentexte je Datei

Der Schlüssel ist gleichzeitig die Übersetzungsvorlage: SK wird über den **tschechischen**,
HU über den **englischen** Quelltext nachgeschlagen. Ein neuer Eintrag in
`src/i18n/pageTextTranslations.ts` besteht aus genau diesem Schlüssel und der Übersetzung.

---

# Ebene A — Datenmodule

Hier fehlt der Schlüssel `sk` bzw. `hu` im `MultiLangText`-Objekt selbst. Der angezeigte Text
ist das, was heute stattdessen ausgeliefert wird — also die Vorlage.

## gannomatSeoContent · Produkte (209)

### SK — 209 fehlend

| Pfad im Modul | ausgelieferter Text |
|---|---|
| `selekta.applicationSections[0].heading` | Pro sériovou výrobu korpusu |
| `selekta.applicationSections[0].body` | V sériové výrobě kuchyní nebo kancelářského nábytku dodává Selekta reprodukovatelnou kvalitu při vysoké průchodnosti. CNC řízení umožňuje rychlou změnu programu … |
| `selekta.applicationSections[1].heading` | Pro dodavatelské provozy s dávkou 1 |
| `selekta.applicationSections[1].body` | Přímým napojením na ERP systémy může Selekta i při výrobě dávky 1 jet individuální vrtací a kolíkovací vzor pro každý obrobek. Ideální pro dodavatelské provozy  … |
| `selekta.buyingAdvice` | Selekta je správnou volbou pro střední až velké výrobce korpusu s požadavky na automatizaci a variabilní výrobu. Pro menší provozy s přehledným počtem variant j … |
| `selekta.faq[0].question` | Jaké průměry kolíků Selekta zpracovává? |
| `selekta.faq[0].answer` | Standardní kolíky o průměru 6 až 10 mm. Speciální rozměry na vyžádání. |
| `selekta.faq[1].question` | Jak rychlá je změna formátu? |
| `selekta.faq[1].answer` | Přes výběr CNC programu během několika minut. Mechanické přestavení nutné jen u velmi odlišných obrobků. |
| `selekta.faq[2].question` | Existuje napojení na ERP? |
| `selekta.faq[2].answer` | Ano — přes OPC-UA nebo individuální rozhraní. Softwarový tým Asamer programuje integraci s SAP, Navision nebo oborovými řešeními. |
| `elite.longDescription` | Gannomat Elite je kompaktní poloautomatický vrtací, lepicí a kolíkovací stroj pro střední truhlárny a výrobce korpusu. Nabízí tři centrální procesní kroky — vrt … |
| `elite.applicationSections[0].heading` | Pro střední truhlárny |
| `elite.applicationSections[0].body` | Elite přináší truhlárnám s 5–20 pracovníky průmyslový kvalitativní standard při přehledné investici. Průchodnost a uživatelský komfort jsou výrazně nad ruční vý … |
| `elite.buyingAdvice` | Zvolte Elite při středních počtech kusů a omezené variabilitě. Pro vysokou variabilitu a výrobu dávky 1 je lepší Selekta s CNC flexibilitou; pro vysoce průmyslo … |
| `elite.faq[0].question` | Jaká je potřeba školení? |
| `elite.faq[0].answer` | 2–3 dny pro solidní základní obsluhu. Asamer školí na místě po zprovoznění. |
| `elite.faq[1].question` | Mohu Elite později upgradovat na Selekta? |
| `elite.faq[1].answer` | Výměna je možná, upgrade technicky omezený. Při jisté expanzi doporučujeme rovnou zvolit Selekta. |
| `elite.faq[2].question` | Jaký je servis? |
| `elite.faq[2].answer` | Asamer nabízí roční údržbu, vzdálenou podporu a garantované reakční časy pro CZ, SK a HU. |
| `index-reihe-cnc.longDescription` | Gannomat Index Reihe CNC je vysoce flexibilní CNC řízený vrtací stroj pro vsazování kování, který automaticky vrtá a vsazuje kolíky, kování a spojovací prvky. J … |
| `index-reihe-cnc.applicationSections[0].heading` | Pro výrobu ready-to-assemble |
| `index-reihe-cnc.applicationSections[0].body` | U RTA nábytku dostává každý korpus kromě kolíků řadu kování: excentrická kování, šrouby, pouzdra. Index Reihe CNC vsazuje všechny tyto prvky v jednom průchodu — … |
| `index-reihe-cnc.buyingAdvice` | Index Reihe CNC je správnou volbou pro průmyslové výrobce RTA nábytku nebo nábytkových stavebnic s vysokým počtem variant a rozmanitostí kování. Pro standardní  … |
| `index-reihe-cnc.faq[0].question` | Jaká kování jsou podporována? |
| `index-reihe-cnc.faq[0].answer` | Všechna běžná kování: excentry (Hettich, Blum, Grass), šrouby, pouzdra, kolíky, univerzální spojovací prvky. |
| `index-reihe-cnc.faq[1].question` | Existuje programovací software? |
| `index-reihe-cnc.faq[1].answer` | Ano — Gannomat nabízí grafický programovací software s importem CAD. Asamer školí váš tým. |
| `index-reihe-cnc.faq[2].question` | Je stroj způsobilý pro linku? |
| `index-reihe-cnc.faq[2].answer` | Ano — Index Reihe CNC lze kombinovat s dopravníky, pufry a návratovými systémy do průběžné výrobní linky. |
| `express-s5.longDescription` | Gannomat Express S5 je vrcholný model řady Express — poloautomatický stroj pro vsazování kolíků s pěti vřeteny, navržený pro vysoké denní průtoky. Vsazování pět … |
| `express-s5.applicationSections[0].heading` | Pro průmyslovou sériovou výrobu |
| `express-s5.applicationSections[0].body` | S pěti paralelně vsazujícími vřeteny dosahuje Express S5 průchodnosti blížící se plně automatickým strojům — při výrazně nižší investici. Ideální pro výrobu kor … |
| `express-s5.buyingAdvice` | Express S1–S5 se liší počtem vřeten: S1 pro nízký průtok, S5 pro nejvyšší. Zvolte počet vřeten podle denního výstupu. Pro variantně bohatou výrobu je lepší volb … |
| `express-s5.faq[0].question` | Jaké rozteče kolíků jsou možné? |
| `express-s5.faq[0].answer` | Express S5 pracuje se standardizovanými roztečemi otvorů (obvykle 32 mm rastr). Speciální rozteče vyžadují mechanické přestavení. |
| `express-s5.faq[1].question` | Potřebuje stroj obsluhu? |
| `express-s5.faq[1].answer` | Ano — Express je poloautomatický a potřebuje obsluhu k polohování obrobku. Obsluha může paralelně zvládat i jiné úkoly. |
| `express-s5.faq[2].question` | Jaké velikosti kolíků se zpracovávají? |
| `express-s5.faq[2].answer` | 6 mm, 8 mm a 10 mm standard — další velikosti na vyžádání. |
| `concept-primus.longDescription` | Gannomat Concept Primus je korpusový lis pro průmyslové lepení a stabilizaci korpusu během schnutí kolíků. Po vrtání a lepení musí být korpusové díly fixovány p … |
| `concept-primus.applicationSections[0].heading` | Pro průběžnou linku výroby korpusu |
| `concept-primus.applicationSections[0].body` | Concept Primus tvoří spolu se Selekta (vsazování kolíků), dopravou a balením průběžnou výrobní linku. V této lince putuje korpus automaticky ze stanice na stani … |
| `concept-primus.buyingAdvice` | Řada Concept má několik variant: Concept Easy jako vstup, Concept Eco pro střední průtok, Concept Primus pro průmyslový nepřetržitý provoz, Korpus-Montagelinie  … |
| `concept-primus.faq[0].question` | Jaké velikosti korpusu se lisují? |
| `concept-primus.faq[0].answer` | Standardní korpusy od cca 300 × 300 × 300 mm do cca 1.200 × 800 × 600 mm. Speciální rozměry na vyžádání. |
| `concept-primus.faq[1].question` | Jak dlouhý je lisovací cyklus? |
| `concept-primus.faq[1].answer` | Podle lepidla 30–90 sekund. Přesný čas je uložen v řídicím systému. |
| `concept-primus.faq[2].question` | Lze lis integrovat do linky? |
| `concept-primus.faq[2].answer` | Ano — vstupní a výstupní dopravníky i napojení na ERP jsou standardní volby. Asamer plánuje linku individuálně. |
| `protec-profit.longDescription` | Gannomat ProTec Profit je CNC obráběcí centrum pro díly nábytku, které provádí frézování, vrtání a kolíkování v jediném upnutí. Obrobek se upne jednou — všechny … |
| `protec-profit.applicationSections[0].heading` | Pro složité obrobky s frézováním a vrtáním |
| `protec-profit.applicationSections[0].body` | U obrobků kombinujících výřezy, vrtací vzor a vsazování kování se u ProTec Profit vyhnete vícenásobnému přesazování. Výsledkem je vyšší rozměrová přesnost a niž … |
| `protec-profit.buyingAdvice` | ProTec Profit je ekonomický od středních počtů kusů se složitým zpracováním. Pro čisté vrtání a kolíkování je ekonomičtější Selekta; čisté frézování levněji zvl … |
| `protec-profit.faq[0].question` | Jaké frézovací nástroje jsou podporovány? |
| `protec-profit.faq[0].answer` | Nástrojové upínání HSK pro všechny běžné frézy. Automatická výměna nástrojů je volba. |
| `protec-profit.faq[1].question` | Lze importovat CAD? |
| `protec-profit.faq[1].answer` | Ano — standardní import DXF/DWG/STEP. Postprocesor se přizpůsobí vašemu konstrukčnímu softwaru. |
| `protec-profit.faq[2].question` | Je stroj prachově přívětivý? |
| `protec-profit.faq[2].answer` | Odsávání je standard — kompatibilní se všemi běžnými odsávacími zařízeními. |
| `db-21-27-35.longDescription` | Gannomat DB 21-27-35 je klasický kolíkovací vrtací stroj pro boky korpusu, záda a další díly nábytku se standardizovanými vzory otvorů. Označení 21-27-35 odkazu … |
| `db-21-27-35.applicationSections[0].heading` | Pro standardní výrobu korpusu |
| `db-21-27-35.applicationSections[0].body` | Ve standardní výrobě kuchyní nebo kancelářského nábytku je 32mm rastr otvorů průmyslovým standardem. Řada DB je optimalizována na tento rastr a dodává potřebné  … |
| `db-21-27-35.buyingAdvice` | DB 21-27-35 je správnou volbou pro střední výrobu se standardními vzory otvorů. Pro vyšší průtok se vyplatí varianta WA s automatickým podáváním obrobku; při vy … |
| `db-21-27-35.faq[0].question` | Jaké rozteče otvorů jsou možné? |
| `db-21-27-35.faq[0].answer` | 32mm rastr standard, speciální rozteče po přestavení. |
| `db-21-27-35.faq[1].question` | Lze nastavit hloubku vrtání? |
| `db-21-27-35.faq[1].answer` | Ano — mechanické hloubkové dorazy na vřeteno. Obvykle 10–40 mm. |
| `db-21-27-35.faq[2].question` | Lze zapínat jednotlivá vřetena? |
| `db-21-27-35.faq[2].answer` | Ano — nepotřebná vřetena lze jednotlivě deaktivovat. |
| `vantage.longDescription` | Gannomat Vantage 76-152 je řadový vrtací stroj se 76 až 152 vřeteny pro vysoce výkonné sériové vrtání v průmyslové výrobě nábytku. S tímto počtem vřeten se celé … |
| `vantage.applicationSections[0].heading` | Pro průmyslovou velkosériovou výrobu |
| `vantage.applicationSections[0].body` | Ve velkosériové výrobě standardního nábytku (skříně, police, kuchyňské skříně) je doba taktu rozhodujícím faktorem. Vantage redukuje vrtací operaci na samotný z … |
| `vantage.buyingAdvice` | Vantage se vyplatí až od velmi vysokých denních počtů (500+ korpusů). Pro menší množství nebo variantně bohatší výrobu jsou ekonomičtější DB nebo CNC modely. |
| `vantage.faq[0].question` | Jak dlouho trvá přestavení? |
| `vantage.faq[0].answer` | Mechanické přestavení na jiné vzory otvorů 1–4 hodiny. Proto je Vantage ekonomický jen při stabilních výrobních programech. |
| `vantage.faq[1].question` | Kolik vřeten má smysl? |
| `vantage.faq[1].answer` | 76 pro střední obrobky, 152 pro maximální flexibilitu u různých délek. |
| `vantage.faq[2].question` | Automatické podávání obrobku? |
| `vantage.faq[2].answer` | Volitelně — kombinace s dopravníkem a návratovým systémem pro plně automatický provoz je možná. |
| `expert.longDescription` | Gannomat Expert je vrtací stroj pro závěsy pro profesionální zpracování nábytkových front a dveří. Vytváří přesné otvory pro miskové závěsy všech běžných výrobc … |
| `expert.applicationSections[0].heading` | Pro výrobu kuchyní |
| `expert.applicationSections[0].body` | Ve výrobě kuchyní se vyskytuje mnoho dveří s miskovými závěsy. Expert vrtá všechny tři otvory (misku plus dva šrouby) současně v přesné pozici — následná montáž … |
| `expert.buyingAdvice` | Expert je správnou volbou pro provozy s pravidelnou výrobou dveří nebo front. Pro velmi variabilní nebo zakázkovou výrobu je ekonomičtější Twin (se dvěma pracov … |
| `expert.faq[0].question` | Jaké typy závěsů jsou podporovány? |
| `expert.faq[0].answer` | Všechny běžné: Blum Clip top, Hettich Sensys, Grass Nexis, Salice atd. |
| `expert.faq[1].question` | Velikosti misek? |
| `expert.faq[1].answer` | 26 mm a 35 mm standard. |
| `expert.faq[2].question` | Je stroj řízen CNC? |
| `expert.faq[2].answer` | Expert je ovládán ručně; pro CNC řízení existují speciální modely. |
| `leimfix.longDescription` | Gannomat Leimfix je automatický lepicí systém pro kolíky a spojovací prvky, který automatizuje přesné nanášení lepidla před montáží kolíku. Stroj pracuje s dávk … |
| `leimfix.applicationSections[0].heading` | Pro konzistentní lepené spoje |
| `leimfix.applicationSections[0].body` | Ruční dávkování lepidla vede k výkyvům mezi různými obsluhami. Leimfix tento faktor eliminuje — každý spoj dostává přesně stejné množství lepidla nezávisle na d … |
| `leimfix.buyingAdvice` | Leimfix se vyplatí od středních denních množství kolíků. Při velmi malé výrobě je ruční dávkování ještě přijatelné; od několika tisíc kolíků denně má automatiza … |
| `leimfix.faq[0].question` | Jaká lepidla se zpracovávají? |
| `leimfix.faq[0].answer` | Standardní D3 bílé lepidlo a PUR lepidla. Ostatní na vyžádání. |
| `leimfix.faq[1].question` | Lze nastavit dávkování? |
| `leimfix.faq[1].answer` | Ano — elektronicky přes řízení, i podle průměru kolíku. |
| `leimfix.faq[2].question` | Nároky na čištění? |
| `leimfix.faq[2].answer` | Denně krátké čištění trysky — pár minut. Týdně důkladné propláchnutí. |
| `master-325.longDescription` | Gannomat Master 325 je rámový vrtací stroj pro nábytkové rámy, okenní a dveřní rámy s přesným vrtáním na všech stranách rámu. Pracuje s několika vrtacími hlavam … |
| `master-325.applicationSections[0].heading` | Pro výrobu dveřních a okenních rámů |
| `master-325.applicationSections[0].body` | Dveřní a okenní rámy vyžadují přesné otvory pro závěsy, zámky a spoje. Master 325 vrtá všechny tyto otvory v přesné pozici vzhledem k profilu rámu — bez nutnost … |
| `master-325.buyingAdvice` | Řada Master pokrývá většinu aplikací rámového vrtání. Pro jednodušší požadavky je levnější Junior 323; pro složité vrtací vzory ve speciálních rámech se doporuč … |
| `master-325.faq[0].question` | Jaké velikosti rámů jsou možné? |
| `master-325.faq[0].answer` | Obvykle od cca 300 × 300 mm do 2.500 × 1.200 mm. Nadměrné formáty po dohodě. |
| `master-325.faq[1].question` | Masivní nebo povrstvené rámy? |
| `master-325.faq[1].answer` | Oboje — masivní dřevo, MDF, povrstvená dřevotříska. Nástroje jsou standardně navrženy pro všechny materiály. |
| `master-325.faq[2].question` | Jsou pozice vrtání volně programovatelné? |
| `master-325.faq[2].answer` | Mechanicky přes dorazy, speciální nastavení za příplatek. CNC řízení u speciálních modelů. |
| `basica.applicationSections[0].heading` | Pro malé truhlárny a zakázkovou výrobu |
| `basica.applicationSections[0].body` | Při výrobě jednotlivých kusů a malých sérií — například u vestavěného nábytku nebo speciálních korpusů — se velké CNC zařízení nevyplatí. Basica zde tvoří most  … |
| `basica.applicationSections[1].heading` | Pro vstup do mechanizované výroby korpusu |
| `basica.applicationSections[1].body` | Kdo dnes kolíkuje ručně a chce udělat další krok směrem k automatizaci, najde v Basice mírný vstup. Žádný nový personál obsluhy, žádné náročné programování — st … |
| `basica.faq[0].question` | Kolik místa Basica potřebuje? |
| `basica.faq[1].question` | Potřebuji stlačený vzduch? |
| `basica.faq[2].question` | Jak dlouho trvá školení obsluhy? |
| `variabel.applicationSections[0].heading` | Pro variantně bohatou malosériovou výrobu |
| `variabel.applicationSections[0].body` | Kdo dnes vyrábí obývákové korpusy, zítra kuchyňské spodní skříňky a pozítří kancelářské regály, potřebuje stroj, který s touto změnou jde. Variabel umožňuje pře … |
| `variabel.applicationSections[1].heading` | Jako most mezi vstupní a sériovou mašinou |
| `variabel.applicationSections[1].body` | Pro provozy, jimž je Basica příliš jednoduchá a Express S3 příliš specializovaný, zaplňuje Variabel přesně tuto mezeru. Spojuje mechanickou robustnost s konfigu … |
| `variabel.faq[0].question` | Kolik konfigurací je možných? |
| `variabel.faq[1].question` | Jak dlouho trvá přestavba? |
| `variabel.faq[2].question` | Je Variabel pneumatický nebo hydraulický? |
| `red-baron-p.applicationSections[0].heading` | Pro robustní dílenský provoz |
| `red-baron-p.applicationSections[0].body` | V dílnách se dvěma až třemi směnami, střídajícím se personálem a intenzivním nepřetržitým provozem je Red Baron P tažným koněm. Pneumatické komponenty odpouštěj … |
| `red-baron-p.applicationSections[1].heading` | Jako náhrada za starší kolíkovací stroje |
| `red-baron-p.applicationSections[1].body` | Mnoho truhláren nahrazuje Red Baron P stávající, léty opotřebený kolíkovací stroj. Rozvržení, přípojky a filozofie obsluhy zůstávají známé — skok v produktivitě … |
| `red-baron-p.faq[0].question` | Proč pneumaticky místo hydraulicky? |
| `red-baron-p.faq[1].question` | Jaký denní průtok je reálný? |
| `red-baron-p.faq[2].question` | Jaká je spotřeba vzduchu? |
| `express-s1.applicationSections[0].heading` | Pro vstup do světa Express |
| `express-s1.applicationSections[0].body` | Kdo se chce seznámit s technikou Express, aniž by hned investoval do vícevřetenového modelu, najde v S1 přirozený vstup. Obsluha a údržba jsou identické s větší … |
| `express-s1.applicationSections[1].heading` | Pro malé až střední truhlárny |
| `express-s1.applicationSections[1].body` | Při denních průtocích do přibližně 50 korpusů není investice do více vřeten ekonomicky ospravedlnitelná. S1 vsazuje kolíky v reprodukovatelné kvalitě, aniž by s … |
| `express-s1.faq[0].question` | Kdy se vyplatí přechod na S2? |
| `express-s1.faq[1].question` | Lze vsazovat různé průměry kolíků? |
| `express-s1.faq[2].question` | Jak přesné je vsazení? |
| `express-s2.applicationSections[0].heading` | Pro pravidelnou výrobu korpusu |
| `express-s2.applicationSections[0].body` | Kdo týden co týden vyrábí několik desítek korpusů, získává se S2 oproti S1 výrazně čas — dva kolíky v jednom zdvihu znamenají méně obslužných úkonů na obrobek a … |
| `express-s2.applicationSections[1].heading` | Pro výrobce kuchyní a kancelářského nábytku |
| `express-s2.applicationSections[1].body` | Výrobci kuchyní a kancelářského nábytku se standardizovanými rozměry korpusu profitují dvakrát: vsazování dvou kolíků přesně odpovídá mnoha schémat korpusového  … |
| `express-s2.faq[0].question` | Jak velká je úspora doby taktu oproti S1? |
| `express-s2.faq[1].question` | Jsou obě vřetena nastavitelná nezávisle? |
| `express-s2.faq[2].question` | Hodí se S2 pro RTA nábytek? |
| `express-s3.applicationSections[0].heading` | Pro střední sériovou výrobu |
| `express-s3.applicationSections[0].body` | U sérií několika set korpusů za den se třetí vřeteno výrazně vyplatí. S3 nabízí citelně vyšší průtok než S2, aniž by přecházel do investiční a prostorové dimenz … |
| `express-s3.applicationSections[1].heading` | Pro trojbodové kolíkové spoje |
| `express-s3.applicationSections[1].body` | Mnoho korpusových spojů standardně používá tři kolíky na stranu. Se S3 tak jedna pracovní operace znamená kompletní spojovací bod — počet manipulací s obrobkem  … |
| `express-s3.faq[0].question` | Jaké počty kusů jsou reálné? |
| `express-s3.faq[1].question` | Lze změnit rozteč vřeten? |
| `express-s3.faq[2].question` | Je možný upgrade z S2? |
| `express-s4.applicationSections[0].heading` | Pro sériové výrobce s vysokým objemem |
| `express-s4.applicationSections[0].body` | Při denních výstupech kolem 500 korpusů je Express S4 optimálně umístěn — pod plně automatickými systémy, ale jasně nad střední třídou. Čtyři současně vsazující … |
| `express-s4.applicationSections[1].heading` | Jako základ produktivní předmontážní linky |
| `express-s4.applicationSections[1].body` | S podáváním, výstupem a navazujícím korpusovým lisem tvoří S4 páteř produktivní předmontážní linky. Obsluha se soustředí na manipulaci s obrobkem, stroj přebírá … |
| `express-s4.faq[0].question` | Jak velký je rozdíl oproti S3? |
| `express-s4.faq[1].question` | Potřebuje S4 speciální obsluhu? |
| `express-s4.faq[2].question` | Vejde se S4 do stávající linky? |
| `express-s1-rta.applicationSections[0].heading` | Pro výrobce stavebnicového nábytku |
| `express-s1-rta.applicationSections[0].body` | RTA nábytek žije z toho, že jej koncový zákazník zvládne smontovat několika pohyby. To vyžaduje, aby excentrická kování a kolíky byly již z výroby perfektně umí … |
| `express-s1-rta.applicationSections[1].heading` | Jako vstup do vsazování kování |
| `express-s1-rta.applicationSections[1].body` | Kdo dosud vsazoval jen kolíky a chce začít s první RTA linkou, najde v S1 RTA přehlednou investici. Jedno vřeteno, obě funkce — jasný krok do nového produktovéh … |
| `express-s1-rta.faq[0].question` | Jaké systémy kování jsou podporovány? |
| `express-s1-rta.faq[1].question` | Přestavuje se mezi kolíkem a kováním? |
| `express-s1-rta.faq[2].question` | Hodí se S1 RTA pro OEM zakázky? |
| `express-s2-rta.applicationSections[0].heading` | Pro e-commerce nabízející nábytek |
| `express-s2-rta.applicationSections[0].body` | Kdo prodává nábytek jako stavebnici na internetu, je pod trvalým objemovým tlakem. S2 RTA poskytuje dostatečný průtok pro e-commerce počty — při zároveň konstan … |
| `express-s2-rta.applicationSections[1].heading` | Pro kuchyňské a skříňové stavebnice |
| `express-s2-rta.applicationSections[1].body` | Kuchyňské a skříňové stavebnice mají typicky dvě polohy spojení na stranu korpusu. Dvě vřetena S2 RTA pokrývají přesně toto schéma a zkracují dobu zpracování op … |
| `express-s2-rta.faq[0].question` | Jak velká je výhoda průtoku oproti S1 RTA? |
| `express-s2-rta.faq[1].question` | Lze kombinovat kolíky a kování v jednom obrobku? |
| `express-s2-rta.faq[2].question` | Existují zkušenosti s velkými výrobci RTA? |
| `express-s1-cnc.applicationSections[0].heading` | Pro variantně bohaté truhlárny |
| `express-s1-cnc.applicationSections[0].body` | Když je dnes kuchyně, zítra kancelářský regál a pozítří vestavěná skříň, jsou mechanické přestavby limitujícím faktorem. CNC řízení S1 CNC tento problém řeší —  … |
| `express-s1-cnc.applicationSections[1].heading` | Pro provozy s digitálním výrobním řetězcem |
| `express-s1-cnc.applicationSections[1].body` | Kdo používá CAD/CAM a digitální správu zakázek, může přenášet vrtací programy přímo z konstrukčního systému do S1 CNC. Softwarový tým Asamer podporuje integraci … |
| `express-s1-cnc.faq[0].question` | Kolik programů lze uložit? |
| `express-s1-cnc.faq[1].question` | Jak náročné je školení obsluhy? |
| `express-s1-cnc.faq[2].question` | Hodí se S1 CNC pro RTA výrobu? |
| `express-807.applicationSections[0].heading` | Pro specializovanou výrobu nábytku |
| `express-807.applicationSections[0].body` | U obrobků se zvláště hustým nebo neobvykle rozloženým vsazováním kolíků standardní stroje selhávají kvůli geometrii. Express 807 přináší požadovaný počet vřeten … |
| `express-807.applicationSections[1].heading` | Jako doplnění ke stávající lince Express |
| `express-807.applicationSections[1].body` | Provozy s již instalovaným Express S2 nebo S3 často doplňují 807 pro speciální úkoly. Společná platforma znamená: stejné obsluhy, stejná údržba, stejné skladová … |
| `express-807.faq[0].question` | Je 807 volně konfigurovatelný? |
| `express-807.faq[1].question` | Jak jsou dostupné náhradní díly? |
| `express-807.faq[2].question` | Potřebuje 807 samostatné místo? |
| `vector-cnc.applicationSections[0].heading` | Pro variantně bohatou průmyslovou výrobu |
| `vector-cnc.applicationSections[0].body` | Provozy, které dnes vyrábějí kuchyni, zítra skříň, pozítří komodu — a to v průmyslovém počtu — potřebují stroj, který bez přestavby přepíná mezi programy. Vecto … |
| `vector-cnc.applicationSections[1].heading` | Jako srdce automatizované výrobní buňky |
| `vector-cnc.applicationSections[1].body` | V propojení s podávací robotikou, korpusovým lisem a navazujícím balením vzniká kolem Vector CNC převážně bezobslužná výrobní buňka. Tím lze variantní programy  … |
| `vector-cnc.faq[0].question` | Je plánováno napojení na ERP? |
| `vector-cnc.faq[1].question` | Jak velká je obsluha? |
| `vector-cnc.faq[2].question` | Hodí se Vector CNC pro dávku 1? |
| `spectrum.applicationSections[0].heading` | Pro průmyslovou výrobu RTA nábytku |
| `spectrum.applicationSections[0].body` | Spectrum je první volbou pro průmyslové RTA zákazníky s pětimístnými denními počty kusů. Kolíky a excentrická kování se vsazují v jedné lince — ušetří celou obr … |
| `spectrum.applicationSections[1].heading` | Jako prémiové doplnění k lince Selekta |
| `spectrum.applicationSections[1].body` | Provozy, které již nasadily Selektu, často rozšiřují Spectrum o druhou výrobní větev pro programy s intenzivním vsazováním kování. Podobnost platforem usnadňuje … |
| `spectrum.faq[0].question` | Jaké velikosti kování a kolíků se zpracovávají? |
| … | 9 weitere |

## gannomatSeoContent · Kategorien (93)

### SK — 93 fehlend

| Pfad im Modul | ausgelieferter Text |
|---|---|
| `insertion.introExpanded` | Gannomat stroje pro vrtání, lepení a zarážení kolíků jsou srdcem každé průmyslové výroby korpusu. Spojují tři kritické procesní kroky — vrtání kolíkových otvorů … |
| `insertion.sections[0].heading` | Poloautomatické vs. plně automatické |
| `insertion.sections[0].body` | Poloautomatické stroje (Elite, Express) potřebují obsluhu k polohování obrobku a jsou ekonomické pro střední průtok. Plně automatické stroje (Selekta, Spectrum, … |
| `insertion.sections[1].heading` | Vsazování kování dodatečně ke kolíkům |
| `insertion.sections[1].body` | Index Reihe CNC a Spectrum vsazují kromě kolíků i kování (excentry, šrouby, pouzdra) — nepostradatelné pro výrobu RTA nábytku. Selekta se soustředí na čisté vrt … |
| `insertion.faq[0].question` | Který stroj se hodí pro jaký provoz? |
| `insertion.faq[0].answer` | Truhlářství do 20 pracovníků: Elite. Středně velký 20–80 pracovníků: Selekta. Průmyslový: Spectrum nebo Index Reihe CNC. Asamer poradí na základě konkrétních vý … |
| `insertion.faq[1].question` | Existují možnosti financování? |
| `insertion.faq[1].answer` | Ano — Asamer spolupracuje s leasingovými bankami pro splátkový prodej a leasing. Podmínky si prosím vyžádejte přímo. |
| `insertion.faq[2].question` | Jaká je typická dodací lhůta? |
| `insertion.faq[2].answer` | Skladové stroje 2–4 týdny, speciální provedení 8–16 týdnů. Asamer drží běžné modely skladem. |
| `insertion_door.introExpanded` | Gannomat stroje pro zarážení kolíků pro dveře a okna (Selekta HD, Injecta HD, Index DW Reihe CNC) jsou přizpůsobeny specifickým požadavkům výroby dveří a oken.  … |
| `insertion_door.sections[0].heading` | Dřevo, hliník, plast |
| `insertion_door.sections[0].body` | HD modely zpracovávají všechny běžné rámové materiály. Nástroje se vybírají podle materiálu, vrtací parametry jsou uloženy v CNC řízení. |
| `insertion_door.faq[0].question` | Odpovídají HD stroje rakouským a německým rámovým standardům? |
| `insertion_door.faq[0].answer` | Ano — řada HD je navržena pro evropské standardy (Eurodrážka, Eurokolejnice). |
| `insertion_door.faq[1].question` | Lze Selekta HD zapojit do výrobní linky? |
| `insertion_door.faq[1].answer` | Ano — se vstupním, výstupním dopravníkem a pufrem. Asamer linku projektuje. |
| `insertion_door.faq[2].answer` | Interval údržby 6 měsíců, roční hlavní kontrola. Servisní smlouva doporučena. |
| `machining.introExpanded` | Gannomat CNC obráběcí centra — především ProTec Profit — spojují frézování, vrtání a zarážení kolíků v jednom stroji s jediným upnutím. Je to klíč ke složitým d … |
| `machining.sections[0].heading` | CNC obráběcí centrum vs. jednotlivé stroje |
| `machining.sections[0].body` | Jednotlivé stroje jsou často rychlejší u velmi vysokých počtů kusů s málo variantami; CNC obráběcí centra vítězí u složitých obrobků a dávky 1. Rozhodnutí závis … |
| `machining.faq[0].question` | Jak probíhá programování? |
| `machining.faq[0].answer` | Přes grafický CAD software se standardními importními formáty (DXF, DWG, STEP). Asamer školí váš tým. |
| `machining.faq[1].question` | Správa nástrojů? |
| `machining.faq[1].answer` | Automatický měnič nástrojů až s 30 místy, automatické měření nástrojů. |
| `machining.faq[2].question` | Je odsávání prachu integrováno? |
| `machining.faq[2].answer` | Ano — napojení na stávající odsávací zařízení standard. |
| `fitting.introExpanded` | Gannomat stroje pro vsazování kolíků (řada Express S1 až S5, Basica, Variabel, Red Baron, Vector CNC) pokrývají široké spektrum korpusového zpracování kolíků. O … |
| `fitting.sections[0].heading` | Který počet vřeten je správný? |
| `fitting.sections[0].body` | Hrubá orientace: S1 do 50 obrobků/den, S2 do 150, S3 do 300, S4 do 500, S5 přes 500. Více vřeten znamená lepší výkon u konstantních obrobků; při vysoké variabil … |
| `fitting.sections[1].heading` | RTA vs. standardní stroj pro vsazování kolíků |
| `fitting.sections[1].body` | RTA varianty vsazují ke kolíkům i kování. Nepostradatelné pro výrobce nábytkových stavebnic nebo RTA nábytku. Pro nábytek montovaný na pracovním stole stačí sta … |
| `fitting.faq[0].question` | Jaké velikosti kolíků? |
| `fitting.faq[0].answer` | 6, 8 a 10 mm standard. Speciální rozměry možné. |
| `fitting.faq[1].question` | Požadavky na pneumatiku? |
| `fitting.faq[1].answer` | Standardní dílenský stlačený vzduch (6–8 bar) postačuje. |
| `fitting.faq[2].question` | Jak rychlá je změna modelu? |
| `fitting.faq[2].answer` | U S modelů mechanicky 30–60 min, u CNC modelů výběr programu za sekundy. |
| `carcass.introExpanded` | Gannomat korpusové lisy (Concept Easy, Eco, Primus, Korpus-Montagelinie, Lift, Lift Jumper) zajišťují tvarově stabilní lepení korpusu po vsazení kolíků. Lepidlo … |
| `carcass.sections[0].heading` | Concept Easy / Eco / Primus — pomůcka při výběru |
| `carcass.sections[0].body` | Concept Easy: truhlárna, vstup, ruční zakládání. Concept Eco: střední výroba, poloautomatický. Concept Primus: průmysl, plně automatický. Korpus-Montagelinie: p … |
| `carcass.faq[0].question` | Jaké velikosti korpusu? |
| `carcass.faq[0].answer` | Obvykle 300 × 300 × 300 až 1.200 × 800 × 600 mm. Nadměrné formáty na vyžádání. |
| `carcass.faq[1].question` | Doba lisování? |
| `carcass.faq[1].answer` | 30–120 sekund podle lepidla a velikosti korpusu. |
| `carcass.faq[2].question` | Integrace do linky? |
| `carcass.faq[2].answer` | Ano — se Selekta, dopravníkem a vybalovačem jako kompletní linka. |
| `boring.introExpanded` | Gannomat kolíkovací vrtací stroje (DB 21-27-35 a DB 21-27-35 WA) jsou klasické vícevřetenové vrtací stroje pro bočnice korpusu, záda a díly nábytku se standardn … |
| `boring.sections[0].heading` | Kolíkovací vrtací stroj vs. CNC stroj |
| `boring.sections[0].body` | Kolíkovací vrtací stroje jsou optimalizovány pro standardní vzory otvorů — rychlejší a levnější než CNC stroje. Při vysokém počtu variant nebo neobvyklých vrtac … |
| `boring.faq[0].question` | Co znamená WA? |
| `boring.faq[0].answer` | Automatika obrobku — podávání a odběr probíhají automaticky dopravníkem. |
| `boring.faq[1].question` | Hloubkové dorazy? |
| `boring.faq[1].answer` | Nastavitelné na vřeteno. Standardně 10–40 mm. |
| `boring.faq[2].question` | Výměna nástrojů? |
| `boring.faq[2].answer` | Ručně, několik minut na vřeteno. |
| `rowboring.introExpanded` | Gannomat řadové vrtací stroje (ProLine 50, Vantage 76-152) jsou vysoce výkonné vrtací stroje s 50 až 152 vřeteny pro velkosériovou výrobu. Jediný stroj vrtá cel … |
| `rowboring.sections[0].heading` | Kdy se vyplatí řadový vrtací stroj? |
| `rowboring.sections[0].body` | Od cca 500 obrobků denně při stabilním výrobním programu. Přestavení na jiné vrtací vzory je mechanicky náročné — proto má smysl jen u několika standardních typ … |
| `rowboring.faq[0].question` | Doba přestavení? |
| `rowboring.faq[0].answer` | 1–4 hodiny podle složitosti. |
| `rowboring.faq[1].question` | Jaký počet vřeten pro můj provoz? |
| `rowboring.faq[1].answer` | 76 pro střední obrobky, 152 pro maximální flexibilitu. |
| `rowboring.faq[2].question` | Automatické podávání obrobku? |
| `rowboring.faq[2].answer` | Volitelně, doporučeno pro plně automatický provoz. |
| `gluing.introExpanded` | Gannomat lepicí systémy (Leimfix, Injecta) automatizují přesné nanášení lepidla na kolíky nebo přímo do vrtání — kritický procesní krok pro spolehlivé spoje náb … |
| `gluing.sections[0].heading` | Leimfix vs. Injecta |
| `gluing.sections[0].body` | Leimfix: dávkování na kolík před vsazením — standardní případ. Injecta: vstřikování přímo do otvoru po vsazení kolíku — pro speciální aplikace s vyššími nároky  … |
| `gluing.faq[0].question` | Jaká lepidla jsou kompatibilní? |
| `gluing.faq[0].answer` | D3 bílé lepidlo a PUR lepidla jsou standard. |
| `gluing.faq[1].question` | Dovybavení stávajících strojů? |
| `gluing.faq[1].answer` | Ano — na stroje Gannomat bezprostředně, na cizí stroje podle projektu. |
| `gluing.faq[2].question` | Nároky na čištění? |
| `gluing.faq[2].answer` | Denně 2–5 minut. Týdně důkladné propláchnutí. |
| `frame.introExpanded` | Gannomat rámové vrtací stroje (Junior 323, Master 325, Mod 160) jsou specializované na zpracování nábytkových, dveřních a okenních rámů. Na rozdíl od bočnicovýc … |
| `frame.sections[0].heading` | Junior 323 vs. Master 325 vs. Mod 160 |
| `frame.sections[0].body` | Junior 323: vstup, jednoduché rámy. Master 325: standard pro nábytkové, dveřní, okenní rámy. Mod 160: speciální rámy se složitými vrtacími vzory. |
| `frame.faq[0].question` | Jaké materiály rámů? |
| `frame.faq[0].answer` | Masivní dřevo, MDF, povrstvená dřevotříska, částečně hliník (se speciálními nástroji). |
| `frame.faq[1].question` | Velikosti obrobků? |
| `frame.faq[1].answer` | Obvykle 300 × 300 až 2.500 × 1.200 mm. |
| `frame.faq[2].question` | Je k dispozici CNC řízení? |
| `frame.faq[2].answer` | U Mod 160 a speciálních modelů. |
| `cornerhinge.introExpanded` | Gannomat vrtací stroje pro závěsy (Expert, Twin) vytvářejí přesné otvory pro nábytkové závěsy všech běžných výrobců (Blum, Hettich, Grass, Salice). Vrtají misku … |
| `cornerhinge.sections[0].heading` | Expert vs. Twin |
| `cornerhinge.sections[0].body` | Expert: jedna pracovní stanice, ideální pro truhlárnu a střední průtok. Twin: dvě pracovní stanice paralelně, dvojnásobný průtok — pro průmyslovou výrobu front. |
| `cornerhinge.faq[0].question` | Jaké typy závěsů? |
| `cornerhinge.faq[0].answer` | Blum, Hettich, Grass, Salice, GTV, Häfele — všechny běžné. |
| `cornerhinge.faq[1].question` | Průměry misek? |
| `cornerhinge.faq[1].answer` | 26 mm a 35 mm standard, jiné na vyžádání. |
| `cornerhinge.faq[2].question` | Automatické polohování? |
| `cornerhinge.faq[2].answer` | Mechanické dorazy, CNC u speciálních modelů. |

## edgebanderGuide (49)

### HU — 49 fehlend

| Pfad im Modul | ausgelieferter Text |
|---|---|
| `lead` | Which edgebander to buy depends on your operation size, the materials processed and your target production volume. For small joineries up to 5 employees we reco … |
| `decisionCriteria[0].question` | 1. How big is your operation? |
| `decisionCriteria[0].body` | The first criterion is headcount and daily throughput. A small joinery (1–5 people) processes 20–80 workpieces per day, a mid-size operation (5–20 people) 80–30 … |
| `decisionCriteria[1].question` | 2. Which materials and edges will you process? |
| `decisionCriteria[1].body` | The second criterion is materials: chipboard, MDF, solid wood, plastic, aluminium. For standard ABS and PVC edges up to 3 mm in dry environments, EVA glue is su … |
| `decisionCriteria[2].question` | 3. What is your production volume? |
| `decisionCriteria[2].body` | The third criterion is the number of shifts and operating hours. Single-shift operation works with feed speeds of 18–20 m/min. Multi-shift production with 300+  … |
| `decisionCriteria[3].question` | 4. What is your budget and TCO? |
| `decisionCriteria[3].body` | The fourth criterion is total cost of ownership (TCO): purchase price, energy use, glue, maintenance, lifetime and resale value. OTT edgebanders typically last  … |
| `usedVsNew.heading` | Used vs new edgebander |
| `usedVsNew.body` | A used edgebander is a smart choice when it combines savings with quality. Vetted OTT used machines from a reputable source — with complete service history, tec … |
| `purVsEva.heading` | PUR or EVA glue? Quick comparison |
| `purVsEva.body` | The choice between PUR and EVA glue affects bond quality and durability. EVA is the thermoplastic standard: cheap, fast, suitable for dry interiors. PUR (polyur … |
| `service.heading` | Service and availability in CZ, SK and HU |
| `service.body` | Asamer has been the authorized OTT dealer for the Czech Republic, Slovakia and Hungary since 1991. Our scope: consulting, project planning, delivery, installati … |
| `faq[0].question` | Which edgebander for a small joinery? |
| `faq[0].answer` | For small joineries we recommend the OTT Pacific+ (5.7 m, 18 m/min) as a compact entry model or the OTT Tornado+ (6.2 m, 18–20 m/min) for greater flexibility wi … |
| `faq[1].question` | What is the difference between a PUR and an EVA edgebander? |
| `faq[1].answer` | EVA is a thermoplastic glue: fast, cheap, fine for standard edges in dry environments. PUR (polyurethane) makes a waterproof, heat-resistant bond — mandatory fo … |
| `faq[2].question` | Is it worth buying a used edgebander? |
| `faq[2].answer` | A used edgebander from a vetted source with technical inspection and service history can save 30–60 % over new. Key checks: complete history, spare-parts availa … |
| `faq[3].question` | How much does an edgebander cost? |
| `faq[3].answer` | The price of an edgebander depends on the model, configuration and equipment. Entry models (Pacific+) start in the low six-figure EUR range, professional models … |
| `faq[4].question` | How long does an edgebander installation take? |
| `faq[4].answer` | A standard OTT edgebander installation takes 2–5 working days, including commissioning and operator training. Industrial models with ERP integration and multipl … |
| `faq[5].question` | How long does an edgebander last? |
| `faq[5].answer` | With proper preventive maintenance OTT edgebanders last 15–25 years. Key drivers: glue quality, regular cleaning of the glue system, replacing worn tooling (cut … |
| `faq[6].question` | What is bluEdge featuring HyFuse and when do I need it? |
| `faq[6].answer` | bluEdge featuring HyFuse is a zero glue line technology: the edge's functional layer is activated by a hydrogen-oxygen flame and thermally bonded to the panel w … |
| `faq[7].question` | Can I integrate an edgebander with my ERP? |
| `faq[7].answer` | Yes. OTT machines run Beckhoff controllers with OPC-UA — the open standard for ERP/MES integration without vendor lock-in. Asamer has an in-house software team  … |
| `faq[8].question` | Which edges can an OTT edgebander process? |
| `faq[8].answer` | OTT edgebanders handle edges from 0.3 to 25 mm — ABS, PVC, melamine, paper edges, solid wood, aluminium. Maximum thickness depends on the model: Pacific+ and To … |
| `faq[9].question` | Do I need a return system for the edgebander? |
| `faq[9].answer` | A return system saves a second operator and lifts productivity significantly. For Pacific+ and Tornado+ we recommend TRANScompact; for Storm+ and StrongEdge, TR … |
| `faq[10].question` | Is there OTT service in CZ, SK and HU? |
| `faq[10].answer` | Yes. Asamer runs a branch in Brno with a service team and spare-parts stock covering CZ, SK and HU. Key components are available within 24 hours. Remote service … |
| `faq[11].question` | Who manufactures OTT edgebanders? |
| `faq[11].answer` | OTT edgebanders are made by Paul OTT GmbH, headquartered in Lambach (Austria) — a family business since 1963. OTT is among the leading edgebander brands, focuse … |
| `howTo[0].name` | Define your operation size and daily throughput |
| `howTo[0].text` | Count your employees and the workpieces processed per day. This number drives the model class (entry / pro / industrial). |
| `howTo[1].name` | Assess materials and edge types |
| `howTo[1].text` | Identify edge thickness (0.3–25 mm) and material (ABS, PVC, solid wood). For wet environments choose PUR or bluEdge featuring HyFuse. |
| `howTo[2].name` | Set the operating mode and shifts |
| `howTo[2].text` | Single-shift: 18–20 m/min is enough. Multi-shift: 22–25 m/min, automatic magazines and OPC-UA for ERP integration. |
| `howTo[3].name` | Calculate budget and TCO |
| `howTo[3].text` | Include purchase price, glue, energy, maintenance and lifetime (15–25 years). On a smaller budget, consider a vetted used machine. |
| `howTo[4].name` | Request a consultation with Asamer |
| `howTo[4].text` | Asamer prepares an individual offer based on your operation, materials and budget. Consultation in CZ, SK and HU in the local language. |

## ratgeberFaqHub · FAQ (36)

### HU — 36 fehlend

| Pfad im Modul | ausgelieferter Text |
|---|---|
| `[0].items[0].question` | Which edgebander for beginners? |
| `[0].items[0].answer` | For beginners we recommend the OTT Pacific+. It offers 18 m/min feed speed including corner processing in just 5.7 m length. The machine handles edge thicknesse … |
| `[0].items[1].question` | When does warehouse automation pay off? |
| `[0].items[1].answer` | Warehouse automation pays off from a daily panel throughput of approx. 50 panels, or when search times and picking errors slow down productivity. BARBARIC syste … |
| `[0].items[2].question` | Which edges can an OTT edgebander process? |
| `[0].items[2].answer` | OTT edgebanders handle edges from 0.3 to 25 mm — ABS, PVC, melamine, paper edges, solid wood, aluminium. Maximum thickness depends on the model: Pacific+ and To … |
| `[0].items[3].question` | What is the difference between PUR and EVA glue technology? |
| `[0].items[3].answer` | EVA (ethylene vinyl acetate) is a thermoplastic hot-melt adhesive that cures quickly and is easy to process. PUR (polyurethane reactive adhesive) reacts with mo … |
| `[0].items[4].question` | What does Zero-Gap mean? What is bluEdge HyFuse? |
| `[0].items[4].answer` | Zero-Gap refers to edge bonding where the glue line is visually invisible – the edge and panel material merge seamlessly. bluEdge featuring HyFuse is OTT's prop … |
| `[1].items[0].question` | What is OPC-UA and why is it important for ERP integration? |
| `[1].items[0].answer` | OPC-UA (Open Platform Communications – Unified Architecture) is an open industrial standard for secure data exchange between machines and IT systems. All OTT ma … |
| `[1].items[1].question` | Do I need a return system for the edgebander? |
| `[1].items[1].answer` | A return system saves a second operator and lifts productivity significantly. For Pacific+ and Tornado+ we recommend TRANScompact; for Storm+ and StrongEdge, TR … |
| `[1].items[2].question` | Can Asamer help with software integration of my new machine? |
| `[1].items[2].answer` | Yes, our software team connects your machine via the open OPC-UA interface directly to your ERP or MES system. Integration includes real-time production data, a … |
| `[2].items[0].question` | How quickly does a technician arrive during machine failure? |
| `[2].items[0].answer` | In an emergency our service team prioritizes your incident immediately. Typically we start a phone or remote diagnosis within 2–4 hours. If an on-site visit is  … |
| `[2].items[1].question` | Which machines does Asamer service? |
| `[2].items[1].answer` | We service all machines from our current portfolio: OTT edgebanding machines, Mayer panel saws, BARBARIC handling and storage systems, and Gannomat drilling and … |
| `[2].items[2].question` | How long does an edgebander last? |
| `[2].items[2].answer` | With proper preventive maintenance OTT edgebanders last 15–25 years. Key drivers: glue quality, regular cleaning of the glue system, replacing worn tooling (cut … |
| `[2].items[3].question` | How long does an edgebander installation take? |
| `[2].items[3].answer` | A standard OTT edgebander installation takes 2–5 working days, including commissioning and operator training. Industrial models with ERP integration and multipl … |
| `[3].items[0].question` | How much does an edgebander cost? |
| `[3].items[0].answer` | The price of an edgebander depends on the model, configuration and equipment. Entry models (Pacific+) start in the low six-figure EUR range, professional models … |
| `[3].items[1].question` | What funding programs exist in 2026 for woodworking machines in CZ? |
| `[3].items[1].answer` | In the Czech Republic several programs are available in 2026: OP TAK – Digitální podnik supports 25–45% (max. CZK 45M) with ERP/MES integration of machines. OP  … |
| `[3].items[2].question` | How does leasing through Raiffeisen work for machines? |
| `[3].items[2].answer` | Raiffeisen Leasing finances new and used machines with terms of 36–72 months. You choose between finance leasing (ownership after final installment) and operati … |
| `[4].items[0].question` | What to look for when buying used edgebanders? |
| `[4].items[0].answer` | Check the condition of the glue unit, milling aggregates and feed chain – these are the critical wear parts. Ask for the machine passport with maintenance histo … |
| `[4].items[1].question` | Does Asamer offer warranty on used machines? |
| `[4].items[1].answer` | Yes, every used machine from Asamer is technically inspected and refurbished if needed before sale. Depending on condition and scope of refurbishment we provide … |
| `[4].items[2].question` | Does Asamer deliver to Hungary and Slovakia? |
| `[4].items[2].answer` | Yes, Asamer delivers across the entire CZ, SK and HU region. We are the exclusive distribution partner for OTT edgebanding machines. Mayer, BARBARIC and Gannoma … |

## barbaricSeoContent · Kategorien (30)

### HU — 30 fehlend

| Pfad im Modul | ausgelieferter Text |
|---|---|
| `buffer.sections[0].heading` | When do you need a buffer conveyor? |
| `buffer.faq[0].question` | How many workpieces can a TMP buffer? |
| `buffer.faq[1].question` | Does a TMP make sense for every machine combination? |
| `buffer.faq[2].question` | Can the TMP be combined with an existing line? |
| `door.sections[0].heading` | Vacuum handling for individual doors |
| `door.sections[1].heading` | Automatic door storage |
| `door.faq[0].question` | What door sizes are processed? |
| `door.faq[1].question` | Are doors with fittings processed? |
| `door.faq[2].question` | Are there labelling solutions? |
| `labeling.sections[0].heading` | Why digital labelling? |
| `labeling.faq[0].question` | Barcode or RFID? |
| `labeling.faq[1].question` | ERP integration? |
| `labeling.faq[2].question` | What printing performance? |
| `vacuum-lifters.sections[0].heading` | Ergonomics and occupational safety |
| `vacuum-lifters.sections[1].heading` | Which UWL is the right one? |
| `vacuum-lifters.faq[0].question` | Can curved surfaces also be lifted? |
| `vacuum-lifters.faq[1].question` | Do we need compressed air? |
| `vacuum-lifters.faq[2].question` | How often must they be inspected? |
| `vacuum-special.sections[0].heading` | When is special vacuum technology worthwhile? |
| `vacuum-special.faq[0].question` | Is there a special solution for our geometry? |
| `vacuum-special.faq[1].question` | How long does development of a special solution take? |
| `vacuum-special.faq[2].question` | Can a standard vacuum lifter be retrofitted? |
| `vacuum-traverses.sections[0].heading` | Thin panel traverse vs. standard lifter |
| `vacuum-traverses.faq[0].question` | What workpiece lengths are possible? |
| `vacuum-traverses.faq[1].question` | What panel thicknesses is the thin panel traverse suitable for? |
| `vacuum-traverses.faq[2].question` | Is there a sheet metal traverse? |
| `vacuum-cranes.sections[0].heading` | SSK vs. SSY vs. truss bridge |
| `vacuum-cranes.faq[0].question` | Is a vacuum crane cheaper than a panel storage? |
| `vacuum-cranes.faq[1].question` | Do we need a foundation? |
| `vacuum-cranes.faq[2].question` | Automatic or manual? |
