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
| A · Datenmodule (`MultiLangText`) | SK | 1314 | 692 | **65.5 %** |
| A · Datenmodule (`MultiLangText`) | HU | 1891 | 115 | **94.3 %** |
| B · Seitentexte (`tr()`) | SK | 40 | 683 | **5.5 %** |
| B · Seitentexte (`tr()`) | HU | 731 | 0 | **100.0 %** |

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
| `src/pages/OttProductPage.tsx` | 61 | `tr(`Anfrage OTT ${product.name}`, `Inquiry OTT ${product.name}`, `Poptávka OTT ${product.name}`)` |
| `src/pages/OttProductPage.tsx` | 130 | `tr( `Die OTT ${product.name} ist eine ${categoryLabel} für ${product.badge === 'EINSTIEG' ? 'kleine un` |
| `src/pages/OttProductPage.tsx` | 221 | `tr( `Unser Software-Team verbindet die ${product.name} via OPC-UA direkt mit Ihrem ERP/MES – keine` |

---

# Ebene B — Seitentexte je Datei

Der Schlüssel ist gleichzeitig die Übersetzungsvorlage: SK wird über den **tschechischen**,
HU über den **englischen** Quelltext nachgeschlagen. Ein neuer Eintrag in
`src/i18n/pageTextTranslations.ts` besteht aus genau diesem Schlüssel und der Übersetzung.

## `src/pages/FinancingPage.tsx` (79)

### SK — 79 fehlend

- Zeile 26: `Jaké stroje lze financovat přes Raiffeisen Leasing?`
- Zeile 31: `Financovat lze veškeré stroje z portfolia Asamer – nové i použité: olepovačky hran OTT, pily na desky Mayer, automatizační systémy BARBARIC a Gannomat, sušárny Mühlböck i celé výrobní linky. Raiffeisen Leasing financuje strojní zařízení od roku 1994 – s možností pojištění přímo v leasingové splátce.`
- Zeile 38: `Jaký je rozdíl mezi finančním a operativním leasingem?`
- Zeile 43: `Při finančním leasingu přechází stroj po poslední splátce do vašeho vlastnictví. Při operativním leasingu stroj vracíte nebo smlouvu prodlužujete – nižší splátky, celý nájemný výdaj daňově uznatelný. Raiffeisen Leasing nabízí obě varianty, doba trvání 36–72 měsíců.`
- Zeile 50: `Lze financovat i použité stroje?`
- Zeile 55: `Ano. Raiffeisen Leasing financuje nové i použité stroje. Každý použitý stroj z nabídky Asamer je před schválením financování technicky prověřen. Zpětný leasing je možný i pro stroje, které již vlastníte.`
- Zeile 62: `Jaké dotace jsou dostupné v České republice?`
- Zeile 67: `Hlavní programy: OP TAK – Digitální podnik (25–45 %, max. 45 mil. Kč, nutná integrace ERP/MES), OP TAK – Inovace (15–60 %, technologie na základě VaV) a NRB Úvěr Expanze (0 % úrok, až 50 % nákladů, 15 let splatnost). Raiffeisen Leasing CZ může leasing přímo kombinovat s těmito programy.`
- Zeile 74: `Jaké dotace jsou dostupné na Slovensku?`
- Zeile 79: `Program Slovensko 2021–2027 (až 50 %, max. 2 mil. EUR), záručný nástroj SIH (80 % ručenie + 0–30 % príspevok, max. 2,8 mil. EUR) a Plán obnovy SR (termín august 2026). Tatra Leasing (Raiffeisen) je finančným partnerom na Slovensku.`
- Zeile 86: `Jaké dotace jsou dostupné v Maďarsku?`
- Zeile 91: `GINOP Plusz-1.2.4 (50 % příspěvek, 5–120 mil. HUF, lhůta duben 2026), Széchenyi Kártya (3 % úrok, státně dotovaný, rozpočet 2 000 mld. HUF 2026) a rozvojové úvěry MFB. Raiffeisen Leasing Zrt. je leasingovým partnerem v Maďarsku.`
- Zeile 98: `Jak dlouho trvá schválení financování?`
- Zeile 103: `Raiffeisen Leasing: 3–7 pracovních dnů od podání podkladů. Dotační programy (OP TAK, GINOP, Program Slovensko): 4–12 týdnů dle programu – Asamer koordinuje žádost.`
- Zeile 110: `Co potřebuji k zahájení financování?`
- Zeile 115: `Pro úvodní posouzení potřebujeme pouze: název firmy a IČO, typ a cenu stroje, preferovanou dobu splácení. Detailní podklady (rozvaha, výsledovka) jsou nutné až při formální žádosti u Raiffeisen Leasing.`
- Zeile 125: `Typy leasingu`
- Zeile 126: `Finanční leasing · Operativní leasing · Zpětný leasing`
- Zeile 133: `Doby trvání`
- Zeile 134: `36–72 měsíců`
- Zeile 137: `Měna`
- Zeile 138: `EUR nebo CZK · pevná nebo pohyblivá sazba`
- Zeile 145: `Vlastní podíl`
- Zeile 146: `Až 50 % kupní ceny`
- Zeile 149: `Nové + Použité`
- Zeile 150: `Financování nových i použitých strojů`
- Zeile 157: `Pojištění`
- Zeile 158: `Přímo integrovatelné do leasingové splátky`
- Zeile 165: `Dotační poradenství`
- Zeile 166: `Raiffeisen Leasing CZ kombinuje leasing s programy OP TAK / NRB`
- Zeile 178: `Finanční leasing`
- Zeile 179: `Stroj používáte od prvního dne, Raiffeisen Leasing zůstává právním vlastníkem. Po poslední splátce přechází vlastnictví na vás. Doba trvání 36–72 měsíců, pevná měsíční splátka – plánovatelné náklady. Ideální pro investice, které si chcete dlouhodobě ponechat.`
- Zeile 192: `Operativní leasing`
- Zeile 193: `Nižší měsíční splátky, bez převodu vlastnictví – stroj po skončení smlouvy vracíte nebo smlouvu prodlužujete. Celý nájemný výdaj je daňově uznatelný jako provozní náklad. Vhodné, pokud chcete pravidelně obnovovat technologie.`
- Zeile 206: `Zpětný leasing`
- Zeile 207: `Prodáte stávající stroj Raiffeisen Leasing a okamžitě si jej pronajmete zpět. Tím uvolníte vázaný kapitál – pro nové investice nebo provozní prostředky – zatímco stroj dál běží ve vašem provozu.`
- Zeile 223: `Vyberte stroj`
- Zeile 224: `Nový nebo použitý z portfolia Asamer. Připravíme nabídku včetně variant financování.`
- Zeile 232: `Posouzení financování`
- Zeile 233: `Společně s Raiffeisen Leasing posoudíme vaše možnosti: typ leasingu, dobu trvání, kombinaci s dotacemi. Doba: 3–7 pracovních dnů.`
- Zeile 241: `Smlouva & žádost o dotaci`
- Zeile 242: `Podpis leasingové smlouvy. Při kombinaci s dotací Asamer koordinuje žádost paralelně.`
- Zeile 250: `Dodání & uvedení do provozu`
- Zeile 251: `Instalace a školení techniky Asamer. Financování běží – vy vyrábíte.`
- Zeile 261: `Poptávka financování`
- Zeile 276: `Financování strojů a dotace 2026`
- Zeile 281: `Asamer Technologie financuje dřevoobráběcí stroje (OTT, Mayer, BARBARIC, Gannomat) přes Raiffeisen Leasing s dobou trvání 36–72 měsíců a pomáhá s žádostmi o dotace EU v CZ, SK a HU. Tento průvodce vysvětluje dostupné programy, proces žádosti a které stroje jsou způsobilé.`
- Zeile 289: `Nové nebo použité dřevoobráběcí stroje nemusí být jednorázovým výdajem. Společně s naším partnerem Raiffeisen Leasing nabízíme řešení financování pro podniky v CZ, SK a HU – od leasingu přes splátkový prodej až po pomoc s dotacemi EU.`
- Zeile 308: `Raiffeisen Leasing – Partnerské financování`
- Zeile 311: `Jako dlouholetý partner spolupracuje Asamer Technologie s Raiffeisen Leasing – jednou z největších leasingových společností ve střední Evropě s působností v CZ, SK a HU. To znamená: rychlé vyřízení, flexibilní podmínky a jediný kontaktní bod pro stroj i financování.`
- Zeile 339: `3 modely leasingu`
- Zeile 365: `Dotace a podpory`
- Zeile 391: `Operační program Technologie a aplikace pro konkurenceschopnost. Podporuje výrobní stroje s digitálním propojením (nutná integrace ERP/MES). Rozpočet projektu 2,5–100 mil. Kč, max. dotace 45 mil. Kč. Malé podniky získají až 45 %.`
- Zeile 405: `Podporuje zavádění inovací do výroby – nové stroje a technologie na základě výsledků VaV. Dotace 1–80 mil. Kč. Podmínka: průkaz inovace.`
- Zeile 417: `0 % úrok · až 50 %`
- Zeile 421: `Bezúročný investiční úvěr od Národní rozvojové banky (dříve ČMZRB). Splatnost až 15 let, pokrývá až 50 % způsobilých výdajů – stroje, výrobní linky, software, provozní prostory. Pro MSP ve všech odvětvích.`
- Zeile 431: `Raiffeisen Leasing CZ nabízí vlastní dotační poradenství a může kombinovat leasing přímo s dotačními programy (OP TAK, NRB) – např. 0 % úrok na dotovanou část.`
- Zeile 460: `až 50 %`
- Zeile 464: `Operačný program pre investície do technológií a nákup strojov. Max. 2 mil. EUR na projekt. Oprávnené výdaje: stroje, software, patenty, mzdové náklady na nových zamestnancov.`
- Zeile 476: `80 % záruka + 0–30 % príspevok`
- Zeile 480: `Slovak Investment Holding ručí za 80 % úverového rizika u partnerských bank. Navyše grantová zložka 0–30 % výšky úveru podľa regiónu. Max. úver 2,8 mil. EUR, splatnosť do 10 rokov. Výsledok: nižšie úroky, menšie požiadavky na zabezpečenie.`
- Zeile 492: `Termín: august 2026`
- Zeile 496: `Slovenský plán obnovy (6,4 mld. EUR). Investičná podpora pre stroje a digitalizáciu. Všetky opatrenia musia byť dokončené do 31. augusta 2026.`
- Zeile 525: `50 % nevratná`
- Zeile 529: `Investiční příspěvek pro mikro a malé podniky v znevýhodněných regionech. 50 % nevratné, 5–120 mil. HUF na žadatele. Způsobilé: nové stroje (min. 10 % rozpočtu), IT systémy, prostory. Lhůta: 30. dubna 2026.`
- Zeile 541: `3 % úrok – státně dotovaný`
- Zeile 545: `Státně dotovaný úvěr pro MSP s jednotnou zákaznickou sazbou 3 % p.a. (zelený bonus: 8 % státní dotace). Rozpočet 2026: 2 000 mld. HUF. Použitelné na nákup strojů, vozový park, provozní nemovitosti. Pro podniky s min. 1 rokem činnosti.`
- Zeile 557: `Rozvojová banka`
- Zeile 561: `Státní rozvojová banka poskytuje zvýhodněné úvěry na strojní a technologické investice, zvláště pro energeticky úsporné projekty. Lze kombinovat s dotacemi GINOP.`
- Zeile 580: `Postup ve 4 krocích`
- Zeile 602: `Často kladené otázky`
- Zeile 626: `Které stroje jsou způsobilé pro dotace?`
- Zeile 629: `V zásadě jsou všechny stroje z portfolia Asamer způsobilé pro dotace – rozhodující je kombinace programu, typu podniku a digitálního propojení. Stroje OTT s řízením Beckhoff OPC-UA automaticky splňují požadavek integrace ERP/MES pro OP TAK.`
- Zeile 639: `Olepovačky hran: Pacific+, Tornado+, FlexEdge, Storm+, StrongEdge, TopEdge. Všechny s OPC-UA pro dotační programy vyžadující digitalizaci.`
- Zeile 649: `Formátovací pily: Kappa Automatic 80–140 a Advanced Line 100–250. Pro dřevo, plasty, hliník a neželezné kovy.`
- Zeile 659: `Skladové systémy a manipulace: CSF plošné sklady, LCV podávání, NST nesting, RTS zpětný transport. Zvláště způsobilé díky automatizační složce.`
- Zeile 669: `Vrtací a kolkovací stroje: Selekta, Index, ProTec, řada Express. Pro automatizovanou výrobu nábytku.`
- Zeile 689: `Chcete probrat možnosti financování vašeho stroje?`
- Zeile 696: `Bezplatné úvodní poradenství s Raiffeisen Leasing – bez žádosti, bez závazků.`

## `src/pages/GuidePurVsEvaPage.tsx` (62)

### SK — 62 fehlend

- Zeile 28: `Lze dodatečně přejít z EVA na PUR?`
- Zeile 33: `Ano, všechny stroje OTT se systémem CombiMelt lze dodatečně přestavět na PUR. Upgrade zahrnuje uzavřený systém zásobování lepidlem s ochranou proti vlhkosti a automatickým čištěním. Přestavbu může provést technik Asamer přímo u zákazníka.`
- Zeile 40: `Je PUR dražší v provozu?`
- Zeile 45: `Náklady na materiál jsou přibližně o 20–30 % vyšší než u EVA, ale lepší kvalita hran a nižší reklamační podíl tyto vícenáklady ve většině provozů vyrovnají. Navíc tenčí lepená spára snižuje spotřebu na obrobek. Pro výrobce kuchyňského a koupelnového nábytku je PUR ekonomicky jednoznačně výhodnější.`
- Zeile 52: `Které hrany jsou vhodné pro bluEdge HyFuse?`
- Zeile 57: `Pro bluEdge HyFuse jsou potřeba speciálně potažené hrany s funkční vrstvou, kterou aktivuje vodíko-kyslíkový plamen. Tyto hrany jsou dostupné od všech velkých výrobců hran (Rehau, Döllken, Ostermann aj.). Standardní hrany bez funkční vrstvy nelze technologií bluEdge HyFuse zpracovat.`
- Zeile 64: `Musím se při nákupu hned rozhodnout pro PUR?`
- Zeile 69: `Ne, díky systému CombiMelt můžete začít s EVA a PUR dodat později, aniž byste museli kupovat nový stroj. Tento modulární koncept je dostupný u všech modelů OTT a dlouhodobě chrání vaši investici.`
- Zeile 80: `Lepená spára`
- Zeile 81: `Viditelná (0,1–0,2 mm)`
- Zeile 82: `Téměř neviditelná`
- Zeile 83: `Žádná`
- Zeile 86: `Tepelná odolnost`
- Zeile 87: `do 60 °C`
- Zeile 88: `do 150 °C`
- Zeile 92: `Vodoodolnost`
- Zeile 93: `Omezená`
- Zeile 94: `Vysoká`
- Zeile 95: `Velmi vysoká`
- Zeile 98: `Náklady na materiál`
- Zeile 99: `Nízké`
- Zeile 100: `Střední`
- Zeile 101: `Vysoké`
- Zeile 104: `Obsluha`
- Zeile 105: `Jednoduchá`
- Zeile 110: `Doporučení`
- Zeile 111: `Standardní nábytek`
- Zeile 112: `Kuchyně, koupelna, exteriér`
- Zeile 113: `Premium, Zero-Gap`
- Zeile 121: `EVA standardně, PUR dodatečně (CombiMelt)`
- Zeile 129: `EVA + PUR (CombiMelt standardně)`
- Zeile 137: `EVA + PUR, bluEdge HyFuse volitelně`
- Zeile 145: `EVA + PUR + bluEdge HyFuse`
- Zeile 157: `EVA s možností dodatečného PUR → Pacific+`
- Zeile 167: `PUR doporučeno → FlexEdge nebo Storm+`
- Zeile 176: `Průmyslový nepřetržitý provoz`
- Zeile 177: `PUR + bluEdge HyFuse → StrongEdge nebo TopEdge`
- Zeile 189: `Poptávka technologie lepení`
- Zeile 203: `PUR vs EVA – Průvodce technologií lepení`
- Zeile 210: `PUR a EVA jsou dvě nejdůležitější technologie lepení pro průmyslové olepovačky hran. Tento průvodce vysvětluje rozdíly, výhody a nevýhody a pomůže vám vybrat správný systém pro váš provoz.`
- Zeile 225: `Co je EVA?`
- Zeile 228: `EVA (etylenvinylacetát) je termoplastické tavné lepidlo, které je po desetiletí standardem v olepování hran.`
- Zeile 239: `Rychlé vytvrzení (několik sekund)`
- Zeile 249: `Jednoduchá obsluha, žádné speciální skladování`
- Zeile 259: `Cenově výhodné v pořízení i spotřebě`
- Zeile 269: `Viditelná lepená spára (0,1–0,2 mm)`
- Zeile 279: `Citlivé na teplo nad 60 °C a vlhkost`
- Zeile 297: `Co je PUR?`
- Zeile 300: `PUR (polyuretanové reaktivní lepidlo) je lepidlo vytvrzující vlhkostí, které vytváří vodotěsný a tepelně odolný spoj.`
- Zeile 311: `Reaguje se vzdušnou vlhkostí, nevratné vytvrzení`
- Zeile 321: `Tenčí lepená spára (téměř neviditelná)`
- Zeile 331: `Vodotěsný a tepelně odolný do 150 °C`
- Zeile 341: `Vyžaduje speciální skladování (ochrana proti vlhkosti)`
- Zeile 351: `Vyšší náklady na materiál, speciální čištění`
- Zeile 369: `bluEdge HyFuse – Technologie nulové spáry`
- Zeile 377: `bluEdge featuring HyFuse je vlastní technologie nulové spáry od OTT pro bezešvé olepení hran (Zero-Gap). Vodíko-kyslíkový plamen aktivuje funkční vrstvu na hraně, která splyne s obrobkem bez samostatného lepidla. Výsledkem jsou opticky dokonalé, vodotěsné hrany bez viditelné lepené spáry.`
- Zeile 393: `Srovnávací tabulka`
- Zeile 470: `Které stroje OTT co podporují?`
- Zeile 491: `Zobrazit olepovačky hran OTT`
- Zeile 505: `Doporučení dle velikosti provozu`
- Zeile 560: `Která technologie lepení se hodí pro váš provoz?`
- Zeile 567: `Poradíme vám s výběrem mezi EVA, PUR a bluEdge HyFuse – přesně podle vaší výroby a požadavků.`

## `src/pages/GuidePanelSawComparisonPage.tsx` (60)

### SK — 60 fehlend

- Zeile 29: `Mohu řezat dřevo na formátovací pile pro hliník?`
- Zeile 34: `Technicky ano, ekonomicky ne. Mayer Advanced Line používá pomalé posuvy (1–15 m/min), jemné neželezné kotouče a chladicí mazání. Řezání dřevotřísky nebo HPL by fungovalo, ale s výrazně nižším výkonem, vyšším opotřebením kotouče a znečištěním chladicího okruhu dřevným prachem. Naopak na čistě dřevní Kappa stroj nesmí jít hliník, protože přítlak, odsávání a geometrie kotouče na to nejsou dimenzované.`
- Zeile 41: `Kolik stojí formátovací pila?`
- Zeile 46: `Mayer Kappa Automatic pro řezání dřeva začíná podle délky kotouče a výbavy na cca 80 000 – 120 000 EUR. Advanced Line pro hliník a kompozity je kvůli chlazení, dopravníku třísek a zesílenému přítlaku obvykle o 15–25 % dražší. Plně automatické modely s etiketovačem, úhlovým přísunem a bufferem mohou přesáhnout 250 000 EUR. Asamer zpracuje pro CZ/SK/HU kalkulovanou nabídku včetně instalace, školení a servisní smlouvy.`
- Zeile 53: `Jakých tolerancí lze dosáhnout?`
- Zeile 58: `Mayer Kappa pro dřevo dosahují délkových a diagonálních tolerancí ±0,1 mm na 3000 mm řezu – dostatečné pro dvířka nábytku a korpusové díly. Advanced Line je dimenzovaná na ±0,05 mm, což je nutné pro hliníkové fasádní profily, PMMA displeje a lehčené desky. Toleranci neurčuje jen stroj, ale i teplota materiálu (u hliníku kritická), stav nástroje a upnutí.`
- Zeile 65: `Vyplatí se příplatek za hliníkovou variantu?`
- Zeile 70: `Pokud je podíl hliníkových, HPL nebo kompozitních řezů pod 10 %, Advanced Line se vyplatí zřídka – lepší zadat externě nebo řezat ručně. Při 20–30 % podílu neželezných kovů nebo technických plastů se stroj obvykle zaplatí za 2–4 roky díky sníženému zmetkování, lepší kvalitě hran a vyloučení externí kooperace. Asamer pro vás zpracuje analýzu produktového mixu.`
- Zeile 77: `Použitá nebo nová – co dává smysl?`
- Zeile 82: `Použité Mayer Kappa poslední generace (od roku 2015) nabízejí výborný poměr cena/výkon, pokud je prověřena řídicí jednotka, přítlak a řezací agregát. U Advanced Line obecně doporučujeme nové stroje: chlazení, odvod třísek a stabilizace kotouče se v posledních letech výrazně vyvinuly. Asamer v CZ, SK a HU nabízí prověřené použité stroje se zárukou i nové přímo z výroby.`
- Zeile 93: `Hlavní materiál`
- Zeile 94: `Dřevotříska, MDF, HPL, masiv`
- Zeile 95: `Hliník, PMMA, kompozity`
- Zeile 98: `Pilový kotouč`
- Zeile 99: `SK 72–96 Z, hrubý`
- Zeile 100: `NE kotouč 96–120 Z, jemný`
- Zeile 108: `Chlazení`
- Zeile 109: `Suché`
- Zeile 110: `MMS / rozstřik`
- Zeile 113: `Přítlak`
- Zeile 114: `Standard`
- Zeile 115: `Zesílený, vhodný pro profily`
- Zeile 118: `Tolerance`
- Zeile 123: `Odvod třísek`
- Zeile 124: `Odsávání`
- Zeile 125: `Dopravník + filtr`
- Zeile 132: `> 90 % dřevo / deskové materiály`
- Zeile 133: `Mayer Kappa Automatic`
- Zeile 138: `Mix dřevo + do 20 % hliník/HPL`
- Zeile 139: `Kappa s doplňky nebo externí řezání hliníku`
- Zeile 144: `> 30 % hliník, PMMA, kompozity`
- Zeile 145: `Mayer Advanced Line`
- Zeile 153: `Poptávka formátovací pily`
- Zeile 166: `Formátovací pila hliník vs dřevo`
- Zeile 180: `Formátovací pila na dřevo nebo hliník – Mayer Kappa vs Advanced Line`
- Zeile 187: `Formátovací pily nejsou univerzální stroje: geometrie kotouče, dynamika posuvu a chlazení rozhodují, zda je pila vhodná pro dřevo nebo pro hliník a plasty. Provoz obou materiálů na stejném stroji vede k riziku prasknutí kotouče, odchylkám tolerance a předčasnému opotřebení. Tento průvodce srovnává Mayer Kappa Automatic (výroba ze dřeva) s Mayer Advanced Line (hliník/kompozity) a pomůže vám zvolit správnou konfiguraci pro váš materiálový mix v CZ, SK a HU.`
- Zeile 202: `Klíčové rozdíly v přehledu`
- Zeile 211: `Kappa (Dřevo)`
- Zeile 216: `Advanced Line (Hliník)`
- Zeile 269: `Mayer Kappa Automatic – pro výrobu ze dřeva`
- Zeile 276: `Řada Kappa je určena pro velkosériové řezání desek ve výrobě nábytku a korpusů. Hlavní kotouč průměr 400–520 mm, posuv až 120 m/min, délky řezu 3 200 až 5 600 mm. Typické materiály: lamino (melamin), MDF, HDF, HPL na nosiči, spárovka a překližka. Stroj pracuje za sucha – odsávání odstraňuje třísky. Přítlak s parametrickou silou chrání citlivé dekory před otisky. Díky optimalizovaným nesting vzorům a napojení etiket na ERP je Kappa Automatic standardním řešením pro české, slovenské a maďarské nábytkáře s kapacitou od 30 desek za směnu.`
- Zeile 284: `Typické aplikace`
- Zeile 287: `Kuchyňské a koupelnové korpusy`
- Zeile 288: `Kancelářský nábytek, skříňové stěny, stolové díly`
- Zeile 289: `Dveřní křídla a rámy pro interiérové dveře`
- Zeile 290: `Dřevotříska lepená PUR/EVA, bez hliníku`
- Zeile 302: `Mayer Advanced Line – pro hliník, plasty a kompozity`
- Zeile 309: `Advanced Line sdílí lože stroje Kappa, ale je upravená pro neželezné materiály: kotouče s 96–120 zuby a jemnou geometrií, posuvy 1–15 m/min (dle tloušťky), minimální mazání (MMS) nebo rozstřik, zesílený přítlak s profilovou podporou a odvod třísek s dopravníkem a filtrem. Typické nasazení: hliníkové fasádní prvky (ACP/ACM), PMMA a polykarbonátové displeje, silný HPL, lehčené voštinové desky a kompozity s plastovým jádrem. Tolerance ±0,05 mm dělá z Advanced Line preferovanou volbu pro výrobce oken, displejů a kompozitů v CZ, SK a HU dodávajících do CNC fasádních nebo strojírenských řetězců.`
- Zeile 317: `Typické materiály`
- Zeile 320: `Hliníkové profily a duté profily`
- Zeile 321: `ACP/ACM (hliníkové kompozitní fasádní desky)`
- Zeile 322: `HPL ≥ 10 mm, PMMA, polykarbonát`
- Zeile 323: `Voštinové desky, sklolaminát, uhlíkový kompozit`
- Zeile 335: `Hybridní provoz – jeden stroj na obojí?`
- Zeile 342: `Pokušení řezat oba materiály na jedné pile je velké. Technicky je to možné jen omezeně a ekonomicky je to zřídka smysluplné: dřevný prach znečistí chladicí okruh Advanced Line, hliníkové třísky ucpou odsávání dřeva a mohou se na horkém kotouči vznítit. K tomu patří i průběžná změna geometrie zubů, parametrů posuvu a programu přítlaku – každý přechod stojí 30–60 minut prostoje. Provozy, které řežou hliník zřídka, jsou levnější s čistou Kappou a externím zadáním hliníku, případně s dílenskou okružní pilou s vyhrazeným kapovacím a formátovacím strojem pro neželezné kovy. Asamer doporučuje hybridní řešení jen při trvalém podílu hliníku 15–40 % – a to s dvěma samostatnými stroji, ne s jedním kompromisem.`
- Zeile 358: `Výběr podle hlavního materiálu`
- Zeile 379: `Zobrazit všechny pily Mayer`
- Zeile 418: `Která formátovací pila se hodí pro váš materiálový mix?`
- Zeile 425: `Asamer poradí s řezáním dřeva i hliníku v CZ, SK a HU – od Kappa Automatic po Advanced Line. Včetně instalace, školení a servisní smlouvy.`
- Zeile 434: `Poptat poradenství`

## `src/pages/ImaSchellingPage.tsx` (51)

### SK — 51 fehlend

- Zeile 29: `Servisní poptávka IMA Schelling`
- Zeile 37: `Servis formátovacích pil IMA Schelling`
- Zeile 43: `Údržba, opravy, náhradní díly a školení obsluhy pro formátovací pily IMA Schelling (HKL, FH, FK, VH, VKS) – přes 30 let zkušeností.`
- Zeile 62: `Servisní služby IMA Schelling`
- Zeile 64: `Údržba a inspekce`
- Zeile 65: `Oprava a nouzový servis`
- Zeile 66: `Náhradní a opotřebitelné díly`
- Zeile 67: `Školení a optimalizace`
- Zeile 74: `Provádí Asamer servis i starších formátovacích pil IMA Schelling?`
- Zeile 79: `Ano. Servisujeme klasické pily s přítlačným trámem (řady HKL, FH, FK) i moderní nářezová centra (VH, VKS a novější řady). Naši technici mají přes 30 let zkušeností s IMA Schelling a IMA, včetně elektrických řízení různých generací.`
- Zeile 86: `Které řady strojů IMA Schelling servisujete?`
- Zeile 91: `HKL, FH, FK, FH-3/4/5/6, FK-5/6, VH, VKS a aktuální řady Schelling. Servisujeme i dřívější modely IMA (před fúzí na IMA Schelling). U speciálních provedení posuzujeme proveditelnost individuálně.`
- Zeile 98: `Prodává Asamer i nové stroje IMA Schelling?`
- Zeile 103: `Ne. Jsme autorizovaný prodejce formátovacích pil Mayer Německo (Felder Group) a u IMA Schelling se zaměřujeme na servis a podporu životního cyklu stávajících strojů, nikoli na prodej. Pokud plánujete novou investici, rádi poradíme nezávisle a srovnáme Mayer s variantami IMA Schelling. V oddílu použité stroje je občas v nabídce použitý stroj Schelling.`
- Zeile 110: `Dodáváte originální náhradní díly pro IMA Schelling?`
- Zeile 115: `Ano, dodáváme originální náhradní díly i kvalitní opotřebitelné díly (pilové kotouče, předřezy, lišty přítlačného trámu, ozubené řemeny, snímače). U řídicích komponent a elektronických celků spolupracujeme s výrobcem i s třetími stranami, abychom udrželi v provozu i starší stroje.`
- Zeile 127: `Ne. Jsme autorizovaný prodejce formátovacích pil Mayer (Felder Group) a u IMA Schelling se zaměřujeme na servis a podporu životního cyklu stávajících strojů. Pokud plánujete nový nákup, rádi poradíme nezávisle a srovnáme Mayer s variantami IMA Schelling.`
- Zeile 139: `Pily s přítlačným trámem (klasické)`
- Zeile 143: `Nářezová centra a úhlové linky`
- Zeile 160: `Plánovaná servisní okna, kontroly stavu pilového agregátu, přítlačného trámu a posuvu – aby vaše formátovací pila IMA Schelling spolehlivě fungovala.`
- Zeile 169: `Při odstávce váš stroj okamžitě priorizujeme: vzdálená diagnostika, servis na místě a rychlé znovuuvedení do provozu – i u starších strojů IMA Schelling.`
- Zeile 178: `Dodávka originálních náhradních a opotřebitelných dílů pro formátovací pily IMA Schelling – vč. pilových kotoučů, řídicích komponent a mechaniky.`
- Zeile 187: `Školení obsluhy, optimalizační projekty a poradenství pro zvýšení řezného výkonu, rozměrové přesnosti a dostupnosti stroje.`
- Zeile 204: `Asamer Service`
- Zeile 206: `velkoplošna pila / nárezové centrum · Servis & údržba`
- Zeile 219: `Servis velkoplošných pil`
- Zeile 226: `Servisujeme velkoplošné pily značky SCHELLING, identifikujeme náhradní díly, řešíme software ve spojení s optimalizací jak HPO i jiným zapojením na ERP …`
- Zeile 237: `let IMA Schelling`
- Zeile 238: `trhy (CZ·SK·HU)`
- Zeile 239: `Nouzová linka`
- Zeile 250: `Služby`
- Zeile 253: `Co děláme pro vaše zařízení`
- Zeile 300: `Let praxe`
- Zeile 307: `Zkušenosti s IMA Schelling`
- Zeile 311: `Od klasického konceptu pily s přítlačným trámem až po moderní nářezová centra – náš tým zná mechanickou i řídicí stránku řad IMA Schelling ze stovek servisních zásahů. Zkušenost přetavujeme do rychlé diagnostiky, čisté údržby a poctivého doporučení pro další investiční krok.`
- Zeile 326: `Pokrytí modelů`
- Zeile 329: `Řady strojů, které servisujeme`
- Zeile 336: `Náš servis pokrývá klasické pily s přítlačným trámem IMA Schelling i moderní nářezová centra.`
- Zeile 369: `Označení modelů bez záruky – u speciálních strojů ověřujeme servisovatelnost individuálně.`
- Zeile 382: `Časté dotazy k servisu IMA Schelling`
- Zeile 416: `Související stránky`
- Zeile 421: `Servis a podpora životního cyklu`
- Zeile 422: `Obecná nabídka servisu`
- Zeile 426: `Mayer formátovací pily (prodej)`
- Zeile 427: `Nákup nové formátovací pily`
- Zeile 432: `Odpovědi k servisu a strojům`
- Zeile 445: `Servisní poptávka`
- Zeile 448: `Stojí vaše pila IMA Schelling nebo neběží jak má?`
- Zeile 455: `Napište nám model a popis závady – ozveme se během několika hodin s konkrétními dalšími kroky.`
- Zeile 465: `Poptat servis`
- Zeile 478: `Informace o výrobci`

## `src/pages/GuideEdgebanderPage.tsx` (47)

### SK — 47 fehlend

- Zeile 37: `Konzultace olepovačka hran`
- Zeile 47: `Malá truhlárna`
- Zeile 52: `VSTUP`
- Zeile 56: `Malý–Střední`
- Zeile 61: `STŘED`
- Zeile 65: `Střední provoz`
- Zeile 70: `NOVINKA`
- Zeile 74: `Střední–Velký`
- Zeile 79: `PROFI`
- Zeile 83: `Průmysl`
- Zeile 97: `VLAJKOVÁ LOĎ`
- Zeile 101: `Výroba dveří`
- Zeile 106: `SPECIÁL`
- Zeile 118: `Průvodce`
- Zeile 119: `Olepovačka hran – výběr`
- Zeile 126: `Jakou olepovačku hran koupit`
- Zeile 142: `Jakou olepovačku hran koupit? Průvodce výběrem 2026`
- Zeile 159: `Čtyři kritéria pro rozhodnutí`
- Zeile 177: `Malá truhlárna (1–5 zaměstnanců)`
- Zeile 184: `U malých dílen s 1–5 zaměstnanci je na prvním místě kompaktnost a univerzálnost. Denní průchod se typicky pohybuje mezi 20–80 obrobky, rozmanitost materiálů je vysoká (masivní dřevo, melamin, plast). Stroj musí umožňovat rychlou výměnu hran a pracovat na omezeném prostoru.`
- Zeile 192: `Naše doporučení: OTT Pacific+`
- Zeile 195: `S délkou pouhých 5,7 m se vejde do každé dílny. Posuv 18 m/min včetně opracování rohů – nepotřebujete samostatný stroj na zaoblení rohů. Tloušťky hran 0,3–15 mm pokrývají všechny standardní aplikace. S CombiMelt je Pacific+ navíc rozšířitelná o PUR, takže při rostoucích požadavcích nemusíte měnit stroj.`
- Zeile 207: `Zobrazit Pacific+ na stránce OTT`
- Zeile 220: `Střední provoz (5–20 zaměstnanců)`
- Zeile 227: `Střední provozy zpracovávají 80–300 obrobků denně a potřebují vyšší rychlosti posuvu a flexibilitu. Požadavky na kvalitu hran rostou – PUR lepení je stále více vyžadováno trhem, zejména u kuchyňského nábytku.`
- Zeile 235: `Naše doporučení: OTT FlexEdge nebo Storm+`
- Zeile 238: `FlexEdge je nejnovější stroj OTT, který překlenuje mezeru mezi Tornado+ a Storm+. S délkou 7,1 m, posuvem 12–20 m/min a řídicím systémem Beckhoff 18,5″ nabízí OPC-UA konektivitu pro ERP integraci. Storm+ navíc poskytuje možnost technologie nulové spáry bluEdge featuring HyFuse pro hrany s nulovými spárami.`
- Zeile 250: `Zobrazit FlexEdge a Storm+ na stránce OTT`
- Zeile 263: `Průmyslový nepřetržitý provoz (20+ zaměstnanců)`
- Zeile 270: `Průmyslové provozy s vícesměnným provozem zpracovávají 300+ obrobků na směnu. Rozhoduje spolehlivost, průchodnost a nejvyšší kvalita hran. PUR a technologie nulové spáry jsou standardem, automatická výměna hran a napojení na nadřazené systémy jsou nutností.`
- Zeile 278: `Naše doporučení: OTT StrongEdge nebo TopEdge`
- Zeile 281: `StrongEdge nabízí délku 7,7 m a posuv 16–25 m/min – navržena pro průmyslový nepřetržitý provoz. Vlajková loď TopEdge spojuje všechny dostupné technologie: EVA, PUR, bluEdge featuring HyFuse a plně automatické zásobníky hran. Oba stroje jsou vybaveny řídicím systémem Beckhoff OPC-UA pro bezproblémovou integraci Industry 4.0.`
- Zeile 293: `Zobrazit StrongEdge a TopEdge na stránce OTT`
- Zeile 306: `Speciální případ: Výroba dveří`
- Zeile 313: `Výrobci dveří mají specifické požadavky: těžké obrobky, široké hrany a často nepřetržitá výroba s malým počtem změn formátu. OTT Door Edition je speciálně navržena pro tuto aplikaci – s upraveným vedením obrobků, zesíleným posuvem a optimalizovanou přítlačnou technikou pro masivní dveřní prvky.`
- Zeile 321: `Pokud se zaměřujete na výrobu dveří, doporučujeme přímou konzultaci – Door Edition se individuálně konfiguruje podle vašeho výrobního profilu.`
- Zeile 336: `Srovnávací přehled`
- Zeile 343: `Model`
- Zeile 346: `Cílová skupina`
- Zeile 349: `Délka`
- Zeile 352: `Posuv`
- Zeile 379: `✓ = Standard · – = Volitelně · ✕ = nedostupné. Všechny údaje bez záruky.`
- Zeile 402: `Zobrazit ověřené použité stroje`
- Zeile 423: `Detailní průvodce PUR vs EVA`
- Zeile 472: `Který stroj se hodí pro váš provoz?`
- Zeile 479: `Poradíme vám osobně – s ohledem na průchodnost, prostor a rozpočet.`
- Zeile 491: `Všechny olepovačky hran OTT`

## `src/pages/GuideWarehouseAutomationPage.tsx` (43)

### SK — 43 fehlend

- Zeile 29: `Kolik místa potřebuje automatický skladový systém?`
- Zeile 34: `Potřeba místa závisí na typu systému. CSF Multilevel využívá plnou výšku haly a šetří až 50 % podlahové plochy. Minimální požadavek je cca 6 × 12 m podlahové plochy pro základní systém.`
- Zeile 41: `Lze systém BARBARIC propojit s mým stávajícím ERP?`
- Zeile 46: `Ano, všechny systémy BARBARIC mají standardizovaná rozhraní pro napojení na ERP a MES. Asamer zajistí softwarovou integraci a nastaví komunikaci mezi skladem, pilou a vaším systémem řízení zásob.`
- Zeile 53: `Je možná postupná automatizace?`
- Zeile 58: `Ano, systémy BARBARIC jsou modulární. Můžete začít s jedním systémem a později přidat podávání, zpětný transport nebo další skladovací místa. Řídicí systém je od začátku navržen pro rozšíření.`
- Zeile 65: `Jaké formáty desek lze skladovat?`
- Zeile 70: `Systémy BARBARIC skladují všechny běžné formáty desek do 2 100 × 6 000 mm při hmotnosti jednotlivých desek do 150 kg. Speciální formáty a nadrozměry lze zohlednit přizpůsobenými skladovacími místy. Správa přířezů probíhá automaticky přes skladový software.`
- Zeile 77: `Jak dlouho trvá instalace skladového systému?`
- Zeile 82: `Doba instalace závisí na velikosti systému. CSF Professional je typicky nainstalován a provozuschopný za 2–3 týdny. CSF Multilevel s plnou integrací materiálového toku vyžaduje 4–8 týdnů. Asamer plánuje instalaci tak, aby co nejméně narušila vaši probíhající výrobu.`
- Zeile 100: `CSF Plošný sklad`
- Zeile 101: `Skladování desek`
- Zeile 102: `CSF plošný sklad je chaotický skladový systém pro desky a přířezy. Skladuje materiál tříděně nebo smíšeně a dodává správnou desku just-in-time k pile nebo CNC stroji. K dispozici jako CSF Professional (základní), CSF Industrial (velkovýroba) a CSF Multilevel (maximální využití prostoru).`
- Zeile 109: `LCV Podávání`
- Zeile 110: `Podávání desek`
- Zeile 111: `Systémy LCV Performance podávají desky do formátovacích pil plně automaticky. Odeberou správnou desku ze skladu a přesně ji umístí na stůl stroje – bez ručního manipulování, bez čekání.`
- Zeile 118: `NST Nesting a zpětný transport`
- Zeile 119: `Nesting a RTS`
- Zeile 120: `Systémy NST (nesting picker) a zpětné transportní systémy RTS tvoří spojení mezi CNC obráběcími centry a zbytkem materiálového toku. Odebírají hotové díly, třídí zbytkové desky a vracejí je do skladu nebo na další stanici.`
- Zeile 130: `Nábytkářský průmysl`
- Zeile 131: `Výrobci kuchyní`
- Zeile 132: `Interiérová výstavba`
- Zeile 133: `Dřevostavby a výroba dveří`
- Zeile 139: `Konzultace automatizace skladu`
- Zeile 157: `Automatizace skladu – Kdy se vyplatí?`
- Zeile 164: `Automatizace skladu znamená automatické naskladňování a vyskladňování deskového materiálu pomocí počítačem řízených systémů. Systémy BARBARIC snižují skladové náklady až o 40 %, zdvojnásobují rychlost kompletace a dosahují 99,9% přesnosti zásob.`
- Zeile 179: `Co je automatizace skladu?`
- Zeile 187: `V dřevozpracujícím průmyslu se denně přesouvají stovky desek různých materiálů, tlouštěk a formátů. Při manuálním skladování vznikají typické problémy: dlouhé časy hledání, poškození materiálu nesprávnou manipulací, nesrovnalosti v zásobách a neefektivní využití prostoru. Důsledkem jsou výrobní zpoždění, dodatečné objednávky a zbytečné náklady.`
- Zeile 194: `Automatický skladový systém řeší tyto problémy pomocí počítačem řízeného naskladňování a vyskladňování. Systém zná přesnou polohu každé desky, poskytuje materiál na vyžádání a dokumentuje každou operaci v reálném čase. Desky jsou šetrně transportovány, skladovány tříděně nebo chaoticky a dodávány just-in-time ke stroji.`
- Zeile 201: `Moderní skladové systémy jako řada BARBARIC CSF se bezproblémově integrují do stávajících výrobních linek. Komunikují přes standardizovaná rozhraní s pilami, CNC stroji a ERP systémy – od přijetí zakázky až po dokončenou kompletaci bez ručních zásahů.`
- Zeile 216: `ROI – Kdy se investice vyplatí?`
- Zeile 231: `Skladové náklady`
- Zeile 236: `2× rychlejší`
- Zeile 239: `Rychlost kompletace`
- Zeile 245: `Přesnost zásob`
- Zeile 254: `Investice do automatického skladového systému se vyplatí od denního průchodu přibližně 50 desek. Při manuálním skladování tráví pracovníci až 30 % pracovní doby hledáním, přepravou a tříděním. Automatický systém tyto časy téměř kompletně eliminuje.`
- Zeile 261: `Typická návratnost investice je 2–4 roky. Kromě přímých úspor na mzdových nákladech a poškození materiálu profitujete z lepšího využití prostoru – systém BARBARIC Multilevel optimálně využívá výšku haly a šetří až 50 % podlahové plochy oproti konvenčnímu skladování.`
- Zeile 268: `Díky integraci s ERP systémy jsou zásoby spravovány v reálném čase. To eliminuje nadměrné objednávky a zabraňuje výrobním prostojům kvůli chybějícímu materiálu.`
- Zeile 282: `Přehled systémů BARBARIC`
- Zeile 339: `Časté otázky k automatizaci skladu`
- Zeile 377: `Naplánujte automatizaci skladu`
- Zeile 384: `Nechte se nezávazně poradit – zanalyzujeme váš materiálový tok a doporučíme vhodný systém BARBARIC.`
- Zeile 397: `Systémy BARBARIC`

## `src/pages/OttPage.tsx` (38)

### SK — 38 fehlend

- Zeile 38: `Co je olepovačka hran OTT?`
- Zeile 39: `Olepovačka hran OTT nanáší a začišťuje hranový materiál na nábytkové a deskové díly. OTT nabízí modely od kompaktní Pacific+ až po průmyslovou TopEdge s technologiemi PUR, EVA a bluEdge featuring HyFuse.`
- Zeile 46: `Kolik stojí olepovačka hran OTT?`
- Zeile 47: `Cena olepovačky hran OTT závisí na modelu, výbavě a stupni automatizace. Asamer připraví nezávaznou nabídku na míru a poradí s financováním i dotacemi až 50 %.`
- Zeile 54: `Jaký je rozdíl mezi lepidlem PUR a EVA?`
- Zeile 55: `EVA je univerzální tavné lepidlo, PUR vytváří voděodolný spoj bez viditelné spáry. Systém OTT CombiMelt zvládá oba typy lepidla.`
- Zeile 62: `Nabízíte i použité olepovačky hran OTT?`
- Zeile 63: `Ano. Asamer nabízí nové i technicky prověřené použité olepovačky hran OTT včetně servisu a montáže v ČR, na Slovensku a v Maďarsku.`
- Zeile 85: `OTT olepovačky hran`
- Zeile 101: `Nové standardy pro PUR/EVA`
- Zeile 114: `Olepovačka hran OTT patří ke špičce v olepování nábytkových a deskových dílů – od kompaktní Pacific+ (18 m/min) až po průmyslovou TopEdge s technologiemi PUR, EVA a bluEdge featuring HyFuse. OTT je rakouský výrobce olepovaček hran pro dřevařský a nábytkářský průmysl. Asamer je exkluzivní distribuční partner OTT pro ČR, SK a Maďarsko s lokálním servisem a softwarovou integrací přes otevřené rozhraní OPC-UA.`
- Zeile 128: `Exkluzivní prodejce`
- Zeile 137: `Rozhraní`
- Zeile 195: `Proč OTT přes Asamer?`
- Zeile 198: `Vlastnost`
- Zeile 200: `Konkurence`
- Zeile 202: `často příplatek`
- Zeile 203: `PUR`
- Zeile 203: `dle výrobce`
- Zeile 204: `ERP`
- Zeile 204: `často placená`
- Zeile 205: `Servis CZ/SK/HU`
- Zeile 205: `na místě`
- Zeile 205: `často centrální`
- Zeile 219: `Technologie`
- Zeile 225: `Patent`
- Zeile 227: `Top-driven roller · EVA + PUR · méně odpadu · servisní stanice`
- Zeile 235: `Vodíkový plamen · bez spáry · montovatelná`
- Zeile 242: `Proč koupit u Asamer?`
- Zeile 245: `OPC-UA přímo do vašeho ERP/MES – bez vendor lock-in`
- Zeile 246: `Exkluzivní prodejce CZ/SK/HU`
- Zeile 246: `Přímý kontakt – bez koncernových oklik`
- Zeile 247: `Servis a montáž`
- Zeile 247: `Technici na místě v CZ/SK/HU`
- Zeile 248: `Rodinný podnik od roku 1963 v Lambachu`
- Zeile 263: `Časté dotazy k olepovačkám hran OTT`
- Zeile 279: `OTT v akci`
- Zeile 291: `Poradenství k OTT?`

## `src/pages/GuideVacuumLifterPage.tsx` (30)

### SK — 30 fehlend

- Zeile 39: `Vakuové zvedáky`
- Zeile 44: `Jaký vakuový zvedák pro jakou hmotnost desky?`
- Zeile 45: `Řada BARBARIC UniWood pokrývá lehké desky až do cca 250 kg (UWL 3) a do 300 kg – volitelně 500 kg (UWL 3J). Vhodný model doporučíme podle vašich formátů, hmotností a strojů.`
- Zeile 52: `Lze vakuový zvedák dotovat?`
- Zeile 53: `Ano. V ČR, SR a Maďarsku je investice často dotovatelná – podle trhu až 50 %. Způsobilost ověříme společně s vámi a na přání zkombinujeme s leasingem.`
- Zeile 60: `S jakými stroji to funguje?`
- Zeile 61: `Prakticky se všemi: olepovačka hran, formátovací pila, CNC, lisy i při naskladnění a vyskladnění. Zvedák převezme těžké zvedání, klopení a otáčení desky.`
- Zeile 82: `Podporujeme vaše pracovní procesy. Vakuové zvedáky Barbaric pro zpracování dřeva.`
- Zeile 89: `S vakuovým zvedákem přesune těžké desky bezpečně a ergonomicky jediný člověk – místo zvedání ve dvou či třech. Udržíte si sehraný tým zdravý a produktivní. Rádi vám pomůžeme najít vhodné řešení.`
- Zeile 99: `Vakuový zvedák Barbaric UniWood UWL`
- Zeile 114: `Rádi vám pomůžeme.`
- Zeile 117: `Řekněte nám, jaké desky a stroje máte – doporučíme vhodný zvedák a ověříme dotaci. Ozvěte se, nebo nám nechte své číslo a my se vám ozveme.`
- Zeile 142: `Jak to funguje na vašich strojích`
- Zeile 151: `Olepovačka hran`
- Zeile 154: `Jeden člověk zvedne desku ze stohu, naklopí ji o 90° pro podání a převezme hotovou desku při vrácení – bez druhého člověka, který obchází stroj s obrobkem.`
- Zeile 172: `Formátovací pila`
- Zeile 175: `Velkoformátové surové desky se ergonomicky pokládají na pilu – i těžké plné desky do 250 kg přesune jeden člověk snadno a bez poškození.`
- Zeile 193: `CNC, lisy a sklad`
- Zeile 196: `I při zakládání do CNC a lisů a při naskladnění/vyskladnění: plynulé zvedání (0–10 m/min), klopení o 90° a jednoruční ovládání – bezpečné pro lakované, strukturované i vysoce lesklé povrchy.`
- Zeile 203: `Všechny vakuové zvedáky Barbaric`
- Zeile 220: `Chraňte své zaměstnance`
- Zeile 223: `Těžké, opakované zvedání je nejčastější příčinou poranění zad a ramen. Vakuový zvedák převezme zátěž – snižuje nemocnost a udrží vaše zkušené odborníky dlouhodobě v provozu.`
- Zeile 230: `Dodržení hmotnostních limitů při ruční manipulaci`
- Zeile 231: `Méně absencí, stálá kvalita`
- Zeile 232: `Ergonomické odlehčení a dlouhodobé udržení týmu`
- Zeile 241: `Rychlá návratnost, vysoká hospodárnost`
- Zeile 244: `Jeden obsluha zvládne práci dvou až tří lidí – rychleji, bez poškození a bez čekání. Investice se tak rychle vrátí a je vysoce hospodárná.`
- Zeile 258: `Ověřit dotaci a financování`
- Zeile 292: `Udržte výrobní tým zdravý – rádi poradíme.`
- Zeile 295: `Bezplatná konzultace ke vhodnému vakuovému zvedáku a dotaci – osobně a nezávazně.`

## `src/pages/GuideFundingCzPage.tsx` (29)

### SK — 29 fehlend

- Zeile 29: `Které stroje jsou způsobilé pro dotaci?`
- Zeile 34: `Způsobilé jsou zpravidla všechny nové produkční stroje s CE shodou, které prokazatelně zvyšují produktivitu, digitalizaci nebo efektivitu. Sem patří olepovačky hran (OTT), formátovací pily (Mayer), kolkovací stroje (Gannomat), CNC obráběcí centra a kompletní automatizace skladu (BARBARIC). Software, školení, instalace a první nástrojové vybavení jsou obvykle spolu způsobilé. Použité stroje v OP TAK způsobilé nejsou – pro ně přichází v úvahu jen úvěr NRB nebo leasing.`
- Zeile 41: `Kdo zpracuje žádost o dotaci?`
- Zeile 46: `Formální žádost podává podnikatel sám přes portál MS2021+ Agentury API. V praxi zpracování obvykle zajišťuje specializovaný dotační poradce, který v ČR pracuje na úspěch (typicky 3–8 % z přiznané dotace). Asamer spolupracuje s prověřenými partnery v Brně a Praze a zprostředkuje kontakty včetně bezplatné předkvalifikace projektu.`
- Zeile 53: `Mohu získat dotaci na použité stroje?`
- Zeile 58: `V OP TAK Technologie použité stroje způsobilé nejsou. Alternativy: zvýhodněný investiční úvěr Národní rozvojové banky (NRB) – tam lze financovat i použité stroje, pokud je doložen rok výroby a zbytková životnost. Existují také leasingové programy (Raiffeisen Leasing, UniCredit Leasing) se státní bonifikací úroku pro MSP. Asamer nabízí jako alternativu prověřené použité stroje se zárukou.`
- Zeile 65: `Jak dlouho trvá vyřízení žádosti?`
- Zeile 70: `Od první projektové fáze po Rozhodnutí o poskytnutí dotace počítejte v OP TAK s 6–9 měsíci: 2–4 týdny příprava, 4–6 týdnů podání v otevřené výzvě, 4–6 měsíců hodnocení API, poté rozhodnutí. Stroje smí být objednány až po datu podání žádosti, jinak zaniká způsobilost. Naplánujte proto dodací lhůty OTT, Mayer nebo BARBARIC (4–8 měsíců) proti datu vydání rozhodnutí.`
- Zeile 77: `Je možná kombinace s leasingem?`
- Zeile 82: `Ano, OP TAK i úvěry NRB lze kombinovat s finančním leasingem, pokud si koncový příjemce ponechá ekonomické vlastnictví stroje. Raiffeisen Leasing nabízí speciální produkty "dotační leasing" s překlenovacím financováním do vyplacení dotace. Stačí pak 10–20 % vlastních zdrojů při dodání místo 30–40 %. Asamer zkoordinuje cashflow přímo s vaší bankou a dotačním poradcem.`
- Zeile 92: `Poptávka dotační poradenství`
- Zeile 105: `Dotace dřevoobrábění CZ 2026`
- Zeile 119: `Dotace na dřevoobráběcí stroje v ČR 2026`
- Zeile 126: `V roce 2026 mají české nábytkářské a dřevozpracující podniky k dispozici několik paralelních dotačních nástrojů: Operační program Technologie a aplikace pro konkurenceschopnost (OP TAK) s mírou podpory až 60 % pro MSP, zvýhodněné investiční úvěry Národní rozvojové banky (NRB) a celoevropské programy pod hlavičkou InvestEU. Tento průvodce ukazuje, jak tyto nástroje zkombinovat pro nákup olepovaček OTT, formátovacích pil Mayer, automatizace skladu BARBARIC nebo kolkovacích strojů Gannomat – a co sledovat při žádosti, harmonogramu a dokumentaci.`
- Zeile 142: `OP TAK – Operační program Technologie a aplikace pro konkurenceschopnost`
- Zeile 149: `OP TAK je hlavní dotační nástroj České republiky pro výrobní MSP v programovém období 2021–2027 a klíčový nástroj EU spolufinancované modernizace. Pro dřevozpracující podniky je relevantní výzva Technologie – výrobní podniky, která podporuje pořízení nových výrobních strojů, automatizaci skladu, průmyslový software (ERP/MES/CAM), digitalizaci a řešení Průmyslu 4.0. Míra podpory: 45 % pro střední podniky a 60 % pro malé na způsobilé náklady, ve strukturálně slabších regionech (Karlovarský, Ústecký, Moravskoslezský kraj) vyšší. Velikost projektu typicky 1–40 mil. Kč, v jednotlivých případech až 150 mil. Kč. Podmínky: minimálně 2 roky historie podnikání, kladný výsledek hospodaření, míra inovace (např. OTT PUR/laser, BARBARIC plošný sklad, digitální nesting) a doklady udržitelnosti. Stroje OTT, Mayer, Gannomat a BARBARIC tato technická kritéria zpravidla splňují.`
- Zeile 164: `Národní rozvojová banka (NRB) – investiční úvěry`
- Zeile 171: `NRB (dříve Českomoravská záruční a rozvojová banka) je státní rozvojová banka ČR. Poskytuje účelové investiční úvěry na stroje a automatizaci skladu s úrokovými sazbami výrazně pod úrovní komerčních bank (typicky 4–5 % při splatnosti 7–10 let). Zvlášť atraktivní je program ENERG s úrokovou dotací až 10 % pro energeticky úsporné projekty a program Expanze na rozvoj firem. Na rozdíl od OP TAK lze financovat i použité stroje s doloženou zůstatkovou hodnotou a znaleckým posudkem. Proces žádosti trvá 4–8 týdnů a může běžet souběžně s dotací OP TAK, pokud nedojde k dvojímu financování stejné nákladové položky.`
- Zeile 186: `InvestEU a doplňkové evropské programy`
- Zeile 193: `Prostřednictvím záruky InvestEU od Evropské investiční banky (EIB) a místních implementačních subjektů (v ČR: NRB, ČSOB, Komerční banka) se v roce 2026 otevírají další finanční nástroje s výhodnými podmínkami pro investice do udržitelnosti a digitalizace. Typické páky jsou záruka EIB (snižuje požadavek na vlastní kapitál) a úroková bonifikace pro MSP pod SME Window. Doplňkově jsou zajímavé programy jako Modernizační fond (dekarbonizace, energetická účinnost) a Nová zelená úsporám Light (menší renovace), pokud současně investujete do haly a výměny strojů.`
- Zeile 208: `Kombinované modely: dotace + úvěr + leasing`
- Zeile 215: `V praxi se investice do strojů v ČR financují téměř vždy ze tří zdrojů. Typický projekt olepovačka + formátovací pila + plošný sklad za 20 mil. Kč se obvykle strukturuje takto: 45 % dotace OP TAK (9 mil. Kč) + 35 % investiční úvěr NRB (7 mil. Kč) + 20 % finanční leasing nebo vlastní zdroje (4 mil. Kč). Raiffeisen Leasing a UniCredit Leasing k tomu nabízejí tzv. dotační leasing s překlenovacím financováním do vyplacení dotace OP TAK. Důležité: na každé položce může být pouze jeden zdroj podpory, čisté rozdělení položek v nabídce je proto nutné. Asamer nabídky takto připraví.`
- Zeile 230: `Typický harmonogram a potřebné dokumenty`
- Zeile 237: `Počítejte s 6–9 měsíci od první konzultace po rozhodnutí o dotaci a dalšími 4–8 měsíci dodací lhůty strojů. Obvykle jsou vyžadovány: popis projektu s technickou specifikací strojů, tři srovnatelné nabídky (u jediného zdroje pouze jedna s odůvodněním), finanční analýza posledních 2–3 účetních období, projekce cashflow, potvrzení vlastních zdrojů nebo příslib financování banky, ekologické a genderové prohlášení o dopadu a – po schválení – dodržení publicity (tabule EU / OP TAK na místě, informace v nabídkách a tiskových zprávách). Asamer dodá technickou specifikaci strojů přímo ve formátu dle API.`
- Zeile 248: `Podrobnosti financování a leasingu`
- Zeile 287: `Prověřit dotační potenciál další investice do strojů`
- Zeile 294: `Asamer spolupracuje s místními dotačními poradci v Brně a Praze a projekty OTT, Mayer, Gannomat a BARBARIC přímo sladí s OP TAK, NRB a leasingem. Bezplatná první konzultace pro CZ, SK a HU.`
- Zeile 303: `Poptat dotační poradenství`
- Zeile 307: `Financování a leasing`

## `src/pages/ServicePage.tsx` (28)

### SK — 28 fehlend

- Zeile 27: `Montáž a uvedení do provozu`
- Zeile 28: `Náš montážní a servisní tým doprovází vaše zařízení od instalace až po stabilní každodenní výrobu.`
- Zeile 36: `Nouzový servis s expresními řešeními`
- Zeile 37: `Pokud je výroba odstavená, okamžitě priorizujeme váš incident a nasazujeme jasná okamžitá opatření pro co nejrychlejší obnovení provozu.`
- Zeile 45: `30 let zkušeností s předními výrobci`
- Zeile 46: `Praktické zkušenosti z projektů s OTT, IMA Schelling, Muehlboeck a dalšími partnery.`
- Zeile 54: `Preventivní údržba`
- Zeile 55: `Pomocí plánovaných servisních oken, kontrol stavu a strategie náhradních dílů dlouhodobě snižujeme neplánované odstávky.`
- Zeile 65: `Nahlásit poruchu`
- Zeile 66: `Zavolejte na naši servisní linku (+420 724 056 965) nebo pošlete e-mail na office@asamer.net. Popište poruchu: typ stroje, chybová hláška a zda stojí výroba. Náš dispečer incident okamžitě klasifikuje podle naléhavosti.`
- Zeile 73: `Expresní vzdálená diagnostika`
- Zeile 74: `Do 2–4 hodin náš technik zahájí telefonickou nebo vzdálenou diagnostiku. U strojů OTT s řízením Beckhoff je přístup možný přímo přes rozhraní OPC-UA. V mnoha případech lze problém vyřešit nebo zúžit již vzdáleně.`
- Zeile 81: `Zajistit náhradní díly`
- Zeile 82: `Pokud jsou potřeba náhradní díly, ověříme dostupnost v našem lokálním skladu. Standardní díly pro OTT, Mayer, BARBARIC a Gannomat jsou obvykle skladem. U speciálních dílů zajistíme expresní dodávku přímo od výrobce.`
- Zeile 89: `Naplánovat zásah na místě`
- Zeile 90: `Pokud je nutný zásah na místě, naplánujeme technika do 24–48 hodin. Zákazníci s servisní smlouvou mají zkrácené reakční doby. Technik přiveze identifikované náhradní díly a postupuje podle jasného servisního protokolu.`
- Zeile 97: `Obnovení provozu a dokumentace`
- Zeile 98: `Po opravě je stroj společně s vaší obsluhou opětovně spuštěn. Vytvoříme kompletní servisní protokol s analýzou příčin a doporučeními k prevenci budoucích výpadků. V případě potřeby rovnou naplánujeme preventivní servisní termín.`
- Zeile 108: `Co dělat při výpadku výroby?`
- Zeile 109: `Krok za krokem průvodce pro případ poruchy stroje. Asamer Technologie – servisní linka, vzdálená diagnostika a zásah na místě.`
- Zeile 119: `Servisní poptávka Asamer`
- Zeile 131: `Servis, když na tom nejvíce záleží`
- Zeile 138: `Náš montážní a servisní tým zajišťuje plynulý chod vaší výroby. S 30 lety zkušeností s OTT, IMA Schelling, Muehlboeck a dalšími výrobci reagujeme při odstávce nouzovým servisem a expresními řešeními.`
- Zeile 172: `Když se počítá každá minuta, pracujeme s jasným eskalačním schématem pro co nejrychlejší obnovení provozu. Postupujte podle těchto kroků:`
- Zeile 197: `Servisní linka:`
- Zeile 213: `Požádat o okamžitou podporu`
- Zeile 216: `Servisní poptávka pro plánované zásahy nebo rychlá podpora při poruše.`
- Zeile 225: `Odeslat servisní poptávku`

## `src/pages/SolutionsPage.tsx` (27)

### SK — 27 fehlend

- Zeile 28: `Truhlářství a interiérové vybavení`
- Zeile 29: `Pro klasické truhlárny, které chtějí vyrábět rychleji a přesněji bez okamžité kompletní přestavby výroby.`
- Zeile 35: `Vstupní sestava s výkonnými pilami a řešeními olepování hran`
- Zeile 36: `Rychlé zprovoznění a krátké časy školení`
- Zeile 37: `Škálovatelné pro pozdější kroky automatizace`
- Zeile 42: `Automatizovaný provoz řezání`
- Zeile 43: `Pro provozy s vysokou průchodností, které chtějí měřitelně optimalizovat tok materiálu, skladovou logiku a využití strojů.`
- Zeile 49: `Propojení skladu, řezání a vracení zbytků`
- Zeile 50: `Méně ručních přesunů, vyšší stabilita procesů`
- Zeile 51: `Transparentní datová základna pro plánování a řízení`
- Zeile 56: `Plně automatizovaná výroba nábytku`
- Zeile 57: `Pro výrobce nábytku, kteří potřebují plně automatizované linky s reprodukovatelnou kvalitou a maximální dostupností.`
- Zeile 63: `Komplexní koncept od vstupu materiálu po výstup`
- Zeile 64: `Rozhraní k ERP/MES a výrobnímu softwaru`
- Zeile 65: `Vysoký takt při stabilních standardech kvality`
- Zeile 71: `Analýza vaší aktuální výroby a definice cílů`
- Zeile 72: `Technologický koncept včetně stupňů automatizace`
- Zeile 73: `Realizace včetně montáže, zprovoznění a školení`
- Zeile 74: `Podpora během provozu se servisem a optimalizací`
- Zeile 79: `Projektová poptávka řešení`
- Zeile 86: `Řešení`
- Zeile 94: `Řešení od truhlářství po plně automatizovanou výrobu nábytku`
- Zeile 101: `Navrhujeme vaši linku tak, aby odpovídala vašemu provozu: od robustních vstupních řešení až po plně propojené výrobní systémy s logikou Průmyslu 4.0.`
- Zeile 140: `Náš postup ve 4 krocích`
- Zeile 159: `Plánujete další krok rozvoje?`
- Zeile 162: `Připravíme konkrétní koncept pro váš provoz s jasnou prioritizací investice, přínosu a času realizace.`
- Zeile 170: `Zahájit projektovou konzultaci`

## `src/pages/PrivacyPolicyPage.tsx` (22)

### SK — 22 fehlend

- Zeile 35: `Ochrana osobních údajů`
- Zeile 38: `Informace o zpracování osobních údajů dle čl. 13 GDPR.`
- Zeile 45: `Naposledy aktualizováno:`
- Zeile 59: `Správce údajů`
- Zeile 91: `Účely a právní základy`
- Zeile 96: `Provoz webu a zajištění IT bezpečnosti (čl. 6 odst. 1 písm. f GDPR – oprávněný zájem).`
- Zeile 103: `Zpracování dotazů z kontaktního formuláře nebo e-mailu (čl. 6 odst. 1 písm. b GDPR – předsmluvní jednání, případně f).`
- Zeile 110: `Měření návštěvnosti a zlepšování produktu pomocí Google Analytics 4 a Vercel Analytics (čl. 6 odst. 1 písm. a GDPR – souhlas).`
- Zeile 122: `Hosting a server-logy`
- Zeile 125: `Webové stránky jsou hostovány společností Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA. Při přístupu server automaticky zaznamenává údaje o přístupu (zkrácenou IP, časové razítko, user-agent, referrer) pro zajištění stability a bezpečnosti. Vercel podléhá rámci EU-US Data Privacy Framework.`
- Zeile 138: `Cookies a souhlas`
- Zeile 142: `Nezbytné cookies se nastavují pro technický provoz. Funkční, statistické a marketingové cookies jsou aktivovány pouze na základě vašeho souhlasu. Svůj souhlas můžete kdykoli odvolat.`
- Zeile 153: `Otevřít nastavení cookies`
- Zeile 162: `Analytické služby`
- Zeile 169: `Poskytovatel: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irsko. IP anonymizace je aktivní. Data se zpracovávají pouze se souhlasem (Google Consent Mode v2). Doba uchovávání: 14 měsíců.`
- Zeile 179: `Poskytovatel: Vercel Inc. Anonymní, agregované statistiky využití bez cookies a bez otisků.`
- Zeile 194: `Kontaktní formulář a e-mail`
- Zeile 198: `Při kontaktování zpracováváme jméno, společnost, e-mailovou adresu, telefon a zprávu k vyřízení dotazu. Údaje mažeme po vyřízení, ledaže se na ně vztahují zákonné povinnosti uchovávání (7 let dle obchodního/daňového práva).`
- Zeile 209: `Vaše práva`
- Zeile 212: `Máte právo na přístup (čl. 15), opravu (čl. 16), výmaz (čl. 17), omezení zpracování (čl. 18), přenositelnost (čl. 20) a vznesení námitky (čl. 21) dle GDPR. Udělený souhlas můžete kdykoli odvolat s účinky do budoucna (čl. 7 odst. 3 GDPR).`
- Zeile 219: `Stížnosti můžete podat u rakouského úřadu pro ochranu osobních údajů (dsb.gv.at) nebo u českého Úřadu pro ochranu osobních údajů (uoou.cz).`
- Zeile 228: `Viz také naše`

## `src/pages/TermsPage.tsx` (18)

### SK — 18 fehlend

- Zeile 30: `Obchodní podmínky`
- Zeile 37: `Tyto obchodní podmínky upravují prodej, montáž a servis průmyslových strojů v B2B vztahu mezi společnostmi Asamer Technologie GmbH / ASAMER spol. s r.o. a podnikatelskými zákazníky.`
- Zeile 57: `Působnost`
- Zeile 61: `Tyto podmínky se vztahují na všechny nabídky, dodávky a služby podnikatelům ve smyslu § 1 UGB nebo § 420 občanského zákoníku ČR. Odchylné podmínky zákazníka platí pouze s písemným souhlasem. Spotřebitelské obchody jsou vyloučeny.`
- Zeile 73: `Nabídka a uzavření smlouvy`
- Zeile 77: `Naše nabídky jsou nezávazné. Smlouva je uzavřena až naším písemným potvrzením objednávky. Obrázky, výkresy a technické údaje v prospektech nebo na webu jsou orientační; výrobci (OTT, Mayer/Felder Group, Barbaric, Gannomat) si vyhrazují právo na technické změny.`
- Zeile 87: `Ceny a platba`
- Zeile 90: `Ceny jsou netto ze závodu, bez obalu, dopravy, pojištění a zákonné DPH. Platební podmínky jsou uvedeny v nabídce. Při prodlení se uplatňují zákonné úroky z prodlení. Vlastnické právo přechází na zákazníka až úplným zaplacením (výhrada vlastnictví).`
- Zeile 102: `Dodání a montáž`
- Zeile 106: `Termíny dodání jsou nezávazné, pokud nejsou výslovně sjednány jako pevné. Zákazník na vlastní náklady zajistí vhodné podmínky pro instalaci (základ, elektřinu, stlačený vzduch, odsávání). Nebezpečí přechází na zákazníka předáním dopravci.`
- Zeile 118: `Záruka`
- Zeile 122: `Záruční doba činí 12 měsíců od dodání u nových strojů; u použitých strojů platí zákonné minimum v přípustném rozsahu omezené. Vady je nutné neprodleně písemně reklamovat. Při oprávněné reklamaci podle naší volby opravíme vadu nebo dodáme náhradu. Opotřebitelné díly jsou vyloučeny.`
- Zeile 132: `Odpovědnost`
- Zeile 135: `Odpovídáme neomezeně za úmysl a hrubou nedbalost a za škody na životě, zdraví nebo tělesné integritě. Jinak je odpovědnost omezena na typickou, předvídatelnou smluvní škodu. Odpovědnost za ušlý zisk, výpadek výroby a nepřímé škody je v zákonem přípustném rozsahu vyloučena.`
- Zeile 147: `Rozhodné právo a příslušnost soudu`
- Zeile 151: `Smlouvy s Asamer Technologie GmbH se řídí rakouským právem s vyloučením Úmluvy OSN o smlouvách o mezinárodní koupi zboží; sudištěm je Wels. Smlouvy s ASAMER spol. s r.o. se řídí českým právem; sudištěm je Brno.`
- Zeile 161: `Závěrečná ustanovení`
- Zeile 164: `Pokud jsou jednotlivá ustanovení neúčinná, platnost ostatních ustanovení zůstává nedotčena. Nahradí je ustanovení co nejblíže hospodářskému účelu.`

## `src/components/CookieConsent.tsx` (17)

### SK — 17 fehlend

- Zeile 141: `Nastavení cookies`
- Zeile 144: `Používáme cookies pro bezpečný provoz webu a volitelné funkce jako analytika a marketing aktivujeme pouze s vaším souhlasem.`
- Zeile 160: `Pouze nezbytné`
- Zeile 167: `Nastavení`
- Zeile 170: `Přijmout vše`
- Zeile 185: `Předvolby cookies`
- Zeile 188: `Své nastavení můžete kdykoli změnit.`
- Zeile 200: `Zavřít`
- Zeile 206: `Nezbytné cookies`
- Zeile 207: `Nezbytné pro bezpečnost, jazyk a základní funkce webu.`
- Zeile 217: `Funkční cookies`
- Zeile 218: `Ukládají komfortní nastavení a zlepšují použitelnost.`
- Zeile 227: `Statistiky / analytika`
- Zeile 228: `Pomáhají nám porozumět tomu, jak návštěvníci používají web.`
- Zeile 237: `Marketing`
- Zeile 238: `Umožňují relevantní obsah a měření kampaní napříč kanály.`
- Zeile 253: `Uložit výběr`

## `src/pages/BarbaricPage.tsx` (17)

### SK — 17 fehlend

- Zeile 33: `Domů`
- Zeile 50: `BARBARIC automatizace a manipulace s deskami`
- Zeile 65: `Automatizace
pro každého`
- Zeile 75: `Rakousko · Automatizace skladu a manipulace s deskami`
- Zeile 76: `BARBARIC automatizace skladu a manipulace s deskami`
- Zeile 77: `BARBARIC (Rakousko) vyvíjí systémy pro automatické skladování desek, podávání a zpětný transport v dřevařském a nábytkářském průmyslu. Od plošných skladů CSF přes podávací systémy LCV až po NST nesting pickery – BARBARIC automatizuje tok materiálu mezi skladem, pilou a CNC. Asamer je autorizovaný prodejce BARBARIC pro CZ, SK a HU s montáží, servisem a integrací ERP.`
- Zeile 83: `Původ`
- Zeile 83: `Made in Austria`
- Zeile 84: `Role Asamer`
- Zeile 84: `Autorizovaný prodejce`
- Zeile 85: `Trhy`
- Zeile 86: `Integrace`
- Zeile 86: `Montáž · Servis · ERP`
- Zeile 114: `Zobrazit detail`
- Zeile 131: `Produkty a specifikace`
- Zeile 135: `Máte zájem o automatizaci BARBARIC?`
- Zeile 138: `Vakuové zvedáky: 1 místo 3 – zjistit více`

## `src/pages/ImprintPage.tsx` (16)

### SK — 16 fehlend

- Zeile 32: `Tiráž`
- Zeile 35: `Údaje dle § 5 ECG a § 14 UGB. Zveřejnění dle § 25 MedienG.`
- Zeile 59: `Rakousko`
- Zeile 63: `Jednatel`
- Zeile 71: `Obchodní rejstřík`
- Zeile 75: `Rejstříkový soud`
- Zeile 76: `Zemský soud Wels`
- Zeile 119: `Zapsáno`
- Zeile 120: `Krajský soud v Brně, oddíl C, vložka 14536`
- Zeile 148: `Předmět podnikání`
- Zeile 151: `Prodej, montáž a servis průmyslových strojů a automatizačních řešení pro zpracování dřeva, plastů a kovů ve střední Evropě (CZ, SK, HU).`
- Zeile 157: `Autorizovaný prodejce:`
- Zeile 179: `Vyloučení odpovědnosti`
- Zeile 183: `Obsah těchto webových stránek byl vytvořen s maximální pečlivostí. Za správnost, úplnost a aktuálnost obsahu však nemůžeme převzít žádnou záruku. Jako poskytovatel služeb jsme odpovědní za vlastní obsah na těchto stránkách v souladu s obecnými zákony. Povinnost sledovat přenášené nebo uložené informace třetích stran neexistuje.`
- Zeile 195: `Autorské právo`
- Zeile 199: `Obsah a díla vytvořená provozovatelem stránek podléhají rakouskému autorskému právu. Rozmnožování, úpravy, šíření a jakékoli využití mimo hranice autorského práva vyžaduje písemný souhlas příslušného autora nebo tvůrce. Obrázky produktů a specifikace pocházejí od příslušných výrobců (OTT, Mayer/Felder Group, Barbaric, Gannomat).`

## `src/pages/Home.tsx` (14)

### SK — 14 fehlend

- Zeile 96: `Technologie olepování hran OTT. Bezešvé spoje hran pomocí systémů PUR a bluEdge featuring HyFuse.`
- Zeile 146: `Kolkování`
- Zeile 147: `Vrtání a lepení`
- Zeile 148: `Gannomat: frézování, vrtání, kolíkování, CNC, vakuový lis a další.`
- Zeile 172: `Financování prostřednictvím dotací`
- Zeile 173: `Využijte náš dotační kompas.`
- Zeile 174: `Přejít na dotační kompas`
- Zeile 178: `Financování prostřednictvím leasingu`
- Zeile 179: `Díky našemu partnerovi Raiffeisen Leasing vám zajistíme férové financování.`
- Zeile 184: `Více o leasingu`
- Zeile 271: `Financování`
- Zeile 274: `Dvě jasné cesty pro investici do výroby: dotace nebo leasing.`
- Zeile 323: `Jeden cíl: férové financování vaší investice`
- Zeile 405: `Přejít na stránku servisu`

## `src/pages/UsedMachineDetailPage.tsx` (12)

### SK — 12 fehlend

- Zeile 75: `Poptávka na použitý stroj`
- Zeile 82: `Použité stroje`
- Zeile 128: `Použitý stroj`
- Zeile 155: `Všechny použité stroje`
- Zeile 199: `Prodáno`
- Zeile 200: `K dispozici`
- Zeile 203: `Stav`
- Zeile 210: `Cena`
- Zeile 225: `na vyžádání`
- Zeile 358: `Zájem o podobné stroje?`
- Zeile 363: `Ozveme se s aktuálně dostupnými nabídkami.`
- Zeile 364: `Včetně technické kontroly, dopravy a instalace.`

## `src/pages/MayerPage.tsx` (11)

### SK — 11 fehlend

- Zeile 22: `Horizontální pily pro dřevo`
- Zeile 23: `Pro hliník a plasty`
- Zeile 24: `Zakázková řezací řešení`
- Zeile 55: `Mayer formátovací pily`
- Zeile 70: `Nárezové centrum`
- Zeile 83: `Mayer (Felder Group) vyrábí horizontální formátovací pily s tlačným trámem pro zpracování dřeva, plastů a kovů. Řada Kappa Automatic (80–140) se specializuje na dřevo a deskové materiály, Advanced Line (100–250) řeže hliník, neželezné kovy a plasty. Asamer je autorizovaný prodejce Mayer pro CZ, SK a HU s lokálním servisem a skladem náhradních dílů.`
- Zeile 89: `Made in Germany`
- Zeile 92: `Na místě`
- Zeile 92: `Servis a náhradní díly`
- Zeile 140: `Vakuové podávání, sklady a stoly jako doplněk`
- Zeile 150: `Máte zájem o pily Mayer?`

## `src/components/home/HeroSlideshow.tsx` (10)

### SK — 10 fehlend

- Zeile 47: `Konzultace vakuový zvedák Barbaric`
- Zeile 51: `Registrace Inovační dny 2026`
- Zeile 55: `Technologie se zkušeností.`
- Zeile 56: `Řešení s budoucností.`
- Zeile 142: `Úvodní slideshow`
- Zeile 274: `Barbaric · Vakuová manipulace se dřevem`
- Zeile 286: `Myslete na zítřek`
- Zeile 291: `Jediný člověk snadno přesune velké, těžké desky – ergonomicky, bezpečně a rychle. Ať u okrajovačky, pily nebo jiných strojů: chraňte své odborníky dlouhodobě.`
- Zeile 320: `Požádat o konzultaci`
- Zeile 344: `Snímek`

## `src/pages/ContactPage.tsx` (7)

### SK — 7 fehlend

- Zeile 49: `O nás`
- Zeile 52: `Firemní informace, údaje o společnosti a přímé kontakty pro stroje a servis.`
- Zeile 72: `DIČ`
- Zeile 73: `Registrováno`
- Zeile 97: `Přímé kontakty`
- Zeile 106: `pro stroje`
- Zeile 132: `pro servisní dotazy`

## `src/pages/GannomatPage.tsx` (7)

### SK — 7 fehlend

- Zeile 34: `Poptávka Gannomat`
- Zeile 48: `Gannomat vrtací, kolkovací a kování stroje`
- Zeile 70: `Rakousko · Vrtání · Kolkování · Kování`
- Zeile 72: `Gannomat (Rakousko) vyrábí stroje pro vrtání, kolkování, osazování kování a montáž korpusů v nábytkářském průmyslu. Sortiment zahrnuje kolkovačky Selekta, řadu Index CNC, automatické osazovače kování Express a korpusové lisy Concept. Asamer je autorizovaný prodejce Gannomat pro CZ, SK a HU s montáží, školením a skladem náhradních dílů.`
- Zeile 81: `Podpora`
- Zeile 81: `Montáž · Školení · Díly`
- Zeile 132: `Selekta a Index Reihe CNC – naše top doporučení.`

## `src/pages/MayerProductPage.tsx` (7)

### SK — 7 fehlend

- Zeile 88: `Délka řezu`
- Zeile 89: `Výška řezu`
- Zeile 91: `Výkon motoru`
- Zeile 92: `Průměr kotouče`
- Zeile 93: `Projekce`
- Zeile 94: `Poznámka`
- Zeile 118: `Všechny produkty Mayer`

## `src/pages/OttProductPage.tsx` (7)

### SK — 7 fehlend

- Zeile 84: `Tloušťka hrany`
- Zeile 85: `Tloušťka obrobku`
- Zeile 115: `Všechny produkty OTT`
- Zeile 185: `Vybavení`
- Zeile 205: `Popis`
- Zeile 240: `Vhodná systémová řešení`
- Zeile 268: `Poradenství, nabídka a montáž z jednoho zdroje.`

## `src/pages/UsedMachinesPage.tsx` (7)

### SK — 7 fehlend

- Zeile 123: `prodáno`
- Zeile 123: `k dispozici`
- Zeile 225: `Vybrané stroje ze skladu. Každá nabídka je technicky ověřena a má jasně uvedený stav.`
- Zeile 338: `Rok`
- Zeile 409: `Poptat použitý stroj`
- Zeile 412: `Řekněte nám, jaký stroj hledáte. Ozveme se s dostupnými možnostmi.`
- Zeile 431: `Zahájit poptávku`

## `src/pages/BarbaricProductPage.tsx` (6)

### SK — 6 fehlend

- Zeile 210: `Všechny produkty BARBARIC`
- Zeile 260: `Technické údaje`
- Zeile 282: `Softwarová integrace`
- Zeile 293: `Více informací`
- Zeile 308: `Máte zájem?`
- Zeile 310: `Společně s vámi navrhneme optimální řešení pro vaši výrobu.`

## `src/components/seo/ProductSeoBlock.tsx` (3)

### SK — 3 fehlend

- Zeile 59: `Podrobnosti`
- Zeile 75: `Oblasti nasazení`
- Zeile 99: `Nákupní poradce`

## `src/pages/CategoryPage.tsx` (3)

### SK — 3 fehlend

- Zeile 95: `Poptávka`
- Zeile 150: `Další kategorie`
- Zeile 177: `Který stroj se hodí do vaší výroby?`

## `src/sections/Footer.tsx` (2)

### SK — 2 fehlend

- Zeile 94: `Přímý kontakt`
- Zeile 153: `Gannomat kolkování`

## `src/components/seo/CategorySeoBlock.tsx` (1)

### SK — 1 fehlend

- Zeile 71: `Časté dotazy`

## `src/pages/FaqPage.tsx` (1)

### SK — 1 fehlend

- Zeile 36: `Poptávka Asamer`

## `src/pages/GannomatProductPage.tsx` (1)

### SK — 1 fehlend

- Zeile 104: `Všechny produkty Gannomat`

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
| `db-21-27-35.longDescription` | Gannomat DB 21-27-35 je klasický kolkovací vrtací stroj pro boky korpusu, záda a další díly nábytku se standardizovanými vzory otvorů. Označení 21-27-35 odkazuj … |
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

## barbaricSeoContent · Kategorien (143)

### SK — 113 fehlend

| Pfad im Modul | ausgelieferter Text |
|---|---|
| `storage.introExpanded` | Barbaric sklady desek automatizují skladování desek v dřevozpracujícím a nábytkářském průmyslu. Princip: místo manuálního stohování, hledání a přenášení desek k … |
| `storage.sections[0].heading` | Chaotické vs. třídění dle druhu |
| `storage.sections[0].body` | Chaotické skladování využívá plochy až o 30 % lépe než třídění dle druhu: každá deska dostane při zaskladnění digitální místo nezávislé na dekoru nebo čísle pol … |
| `storage.sections[1].heading` | Integrace ERP a tok materiálu |
| `storage.sections[1].body` | Barbaric sklady desek se bezproblémově integrují s SAP, Navision, proAlpha nebo individuálními ERP systémy přes OPC-UA, REST API nebo XML výměnu. Pořadí zakázek … |
| `storage.sections[2].heading` | Který model CSF je vhodný? |
| `storage.sections[2].body` | CSF Professional: kompaktní, ekonomický, pro truhlárny a středně velké provozy. CSF Industrial: vysoce výkonný, integrovaný s ERP, pro průmyslové nepřetržité pr … |
| `storage.faq[0].question` | Kolik stojí automatický sklad desek? |
| `storage.faq[0].answer` | Cena silně závisí na rozvržení, skladové kapacitě a napojení. Typické investiční rozmezí je mezi 150.000 a 500.000 EUR pro CSF Professional, vyšší pro Industria … |
| `storage.faq[1].question` | Jak dlouho trvá instalace? |
| `storage.faq[1].answer` | Podle velikosti: CSF Professional obvykle 2–4 týdny, CSF Industrial 6–12 týdnů. Přestavba výroby se provádí ve fázích, takže běžný provoz je narušen jen minimál … |
| `storage.faq[2].question` | Jaká je údržba? |
| `storage.faq[2].answer` | Barbaric sklady desek vyžadují málo údržby. Typická zátěž: pololetní kontrola (kolejnice, přísavky, řízení) a roční bezpečnostní kontrola. Asamer nabízí servisn … |
| `feeding.introExpanded` | Barbaric podávací systémy automaticky dodávají formátovacím pilám správný deskový materiál ve správný čas. Místo aby obsluha ručně nosila každou desku k pile a  … |
| `feeding.sections[0].heading` | Kombinace se skladem desek |
| `feeding.sections[0].body` | Podávací systémy pracují nejekonomičtěji v kombinaci se skladem desek Barbaric (řada CSF). Sklad drží zásobu desek, podávací systém realizuje tříděnou dodávku k … |
| `feeding.sections[1].heading` | Zvýšení průchodnosti automatickým podáváním |
| `feeding.sections[1].body` | Ruční zakládání formátovací pily trvá podle formátu desky 30–90 sekund — dobu, kdy pila stojí. S podávacím systémem se tento čas zkrátí na několik sekund, čistá … |
| `feeding.faq[0].question` | Jaké formátovací pily lze připojit? |
| `feeding.faq[0].answer` | Všichni významní výrobci: Mayer Kappa, Holzma HPP/HPS, Schelling FM/FH, Biesse Selco, SCM Sigma. U stávajících strojů Asamer zkontroluje rozhraní předem. |
| `feeding.faq[1].question` | Jaké formáty desek jsou podporovány? |
| `feeding.faq[1].answer` | Standardní formáty do 2,5 × 5,6 m pokrývají všechny podávací systémy Barbaric. Nadměrné formáty vyžadují speciální návrhy. |
| `feeding.faq[2].question` | Vyplatí se podávací systém bez skladu desek? |
| `feeding.faq[2].answer` | Ano, pokud máte stávající mezisklad s dodávkou kamionem a odběrem obsluhou. Podávací systém pak zásobuje pilu z meziskladu. Ekonomické to je od středních denníc … |
| `nesting.introExpanded` | Barbaric nesting pickery automaticky odebírají hotové vyřezané díly z nesting CNC, třídí je a stohují podle zakázek. Tím se nesting buňka stává plně automaticko … |
| `nesting.sections[0].heading` | Nesting picker vs. manuální odběr dílů |
| `nesting.sections[0].body` | Manuální odběr dílů z nesting CNC stojí 2–5 minut na cyklus desky — plus chyby při třídění. Nesting picker provede úlohu za sekundy, třídí bezchybně a uvolní op … |
| `nesting.sections[1].heading` | Kamerový systém a přenos dat CNC |
| `nesting.sections[1].body` | Barbaric nesting pickery rozpoznávají díly dvěma způsoby: kamerovým systémem (zpracování obrazu rozpozná obrys a polohu) nebo přímým přenosem dat z nesting CNC  … |
| `nesting.faq[0].question` | Jaké velikosti dílů lze pickovat? |
| `nesting.faq[0].answer` | Standardní rozsah 80 × 80 mm až 2500 × 1500 mm. Menší díly jsou možné se speciálními aplikacemi. |
| `nesting.faq[1].question` | Kolik zakázek paralelně? |
| `nesting.faq[1].answer` | Obvykle 10–20 paralelních zakázek, s pufrem výrazně více. |
| `nesting.faq[2].question` | Lze to dovybavit ke stávajícímu CNC? |
| `nesting.faq[2].answer` | Ano — Barbaric nesting pickery lze dovybavit u běžných výrobců CNC (Homag, Biesse, SCM, IMA). Asamer zkontroluje rozhraní v předběžném plánování. |
| `return.introExpanded` | Barbaric návratové systémy (RTS) automaticky přepravují hotové obrobky zpět k obsluze stroje. Typická aplikace: olepovačky hran, kde by obsluha musela po každém … |
| `return.sections[0].heading` | Kdy se vyplatí RTS? |
| `return.sections[0].body` | Od středního denního průtoku 100–200 dílů se RTS vyplatí za 12–24 měsíců díky odlehčení personálu. Zásadní je, aby uvolněný pracovník převzal produktivní násled … |
| `return.sections[1].heading` | RTS Compact vs. Professional vs. Industrial |
| `return.sections[1].body` | RTS Compact (úsporné, vstup) — RTS Professional (střední průtok, flexibilní) — RTS Industrial (vysoký výkon, nepřetržitý provoz). Systémy Teilehandling doplňují … |
| `return.faq[0].question` | Hodí se RTS k mé olepovačce? |
| `return.faq[0].answer` | Ano — systémy RTS jsou kompatibilní se všemi běžnými olepovačkami hran. Asamer ověří rozhraní předem. |
| `return.faq[1].question` | Jaký je prostorový nárok RTS? |
| `return.faq[1].answer` | Typický prostorový nárok: 2–3 m délky návratu plus délka stroje. S uspořádáním do L nebo U lze stopu optimalizovat. |
| `return.faq[2].question` | Jsou k dispozici servisní smlouvy? |
| `return.faq[2].answer` | Ano — Asamer nabízí servisní smlouvy s roční inspekcí a definovanými reakčními časy. |
| `buffer.introExpanded` | Barbaric pufrovací dopravníky (TMP) oddělují navazující zpracovatelské stanice a umožňují souvislý tok materiálu i při různých dobách taktu. Mezi formátovací pi … |
| `buffer.sections[0].heading` | Kdy potřebujete pufrovací dopravník? |
| `buffer.sections[0].body` | Jakmile mají dvě zpracovatelské stanice různé doby taktu, vznikají prostoje: rychlejší stanice čeká, pomalejší se zasekává. TMP pufruje obrobky mezi stanicemi a … |
| `buffer.faq[0].question` | Kolik obrobků může TMP pufrovat? |
| `buffer.faq[0].answer` | Podle délky 5–50 obrobků. Návrh závisí na rozdílu doby taktu a požadované toleranci výpadku. |
| `buffer.faq[1].question` | Má smysl TMP u každé kombinace strojů? |
| `buffer.faq[1].answer` | Při téměř stejných dobách taktu spíše ne. Jakmile rozdíl doby taktu překročí 20 % nebo má jedna stanice časté prostoje, má pufr ekonomický smysl. |
| `buffer.faq[2].question` | Lze TMP kombinovat se stávající linkou? |
| `buffer.faq[2].answer` | Ano — Barbaric pufrovací dopravníky jsou modulární a lze je integrovat do stávajících linek. Asamer projektuje rozhraní. |
| `door.introExpanded` | Barbaric systémy manipulace s dveřmi (DRX, CSF Industrial Türen, LPS) automatizují speciální manipulaci s bytovými, pokojovými a průmyslovými dveřmi ve výrobě.  … |
| `door.sections[0].heading` | Vakuová manipulace pro jednotlivé dveře |
| `door.sections[0].body` | Vakuový zvedák DRX bezpečně a šetrně k povrchu manipuluje s jednotlivými dveřmi. Ideální pro truhlářství nebo menší výrobce dveří, kteří nepotřebují plně automa … |
| `door.sections[1].heading` | Automatický sklad dveří |
| `door.sections[1].body` | CSF Industrial pro dveře je plně automatický sklad speciálně pro dveřní prvky s automatickým zaskladněním a vyskladněním, komisionováním a integrací ERP. Nezbyt … |
| `door.faq[0].question` | Jaké velikosti dveří se zpracovávají? |
| `door.faq[0].answer` | Standardní velikosti do 2,2 × 1,2 m. Nadměrné formáty po dohodě. |
| `door.faq[1].question` | Zpracovávají se dveře s kováním? |
| `door.faq[1].answer` | Ano — vakuové úchopy jsou navrženy tak, aby uchopily plochy bez kování. Skladování je šetrné ke kování. |
| `door.faq[2].question` | Jsou k dispozici etiketovací řešení? |
| `door.faq[2].answer` | Ano — LPS je automatický etiketovací systém pro dveře s čárovým kódem nebo RFID tagem. |
| `labeling.introExpanded` | Barbaric etiketovací systémy (LPS) automaticky nanášejí čárové kódy, QR kódy nebo RFID tagy na obrobky — pro nepřerušenou sledovatelnost a bezchybné přiřazení z … |
| `labeling.sections[0].heading` | Proč digitální etiketování? |
| `labeling.sections[0].body` | Ruční etiketování je časově náročné a chybové. Při výrobě dávky 1 s mnoha různými díly jsou záměny prakticky nevyhnutelné. Automatické etiketování zcela odstraň … |
| `labeling.faq[0].question` | Čárový kód nebo RFID? |
| `labeling.faq[0].answer` | Čárový kód je levnější a stačí pro většinu aplikací. RFID se vyplatí, když musí být etikety chráněny přes mnoho povrchových úprav (lakování, olepování hran). |
| `labeling.faq[1].question` | Integrace s ERP? |
| `labeling.faq[1].answer` | LPS se propojuje s SAP, Navision nebo individuálními ERP systémy. ID každého dílu se tam generuje a propojuje s daty zakázek. |
| `labeling.faq[2].question` | Jaký tiskový výkon? |
| `labeling.faq[2].answer` | Až 1.000 etiket za hodinu v závislosti na výměně obrobku a formátu etikety. |
| `vacuum-lifters.introExpanded` | Barbaric vakuové zvedáky (řada UWL) umožňují ergonomickou, bezpečnou a přesnou manipulaci s velkými a těžkými deskami, dveřmi nebo pracovními deskami. Místo ruč … |
| `vacuum-lifters.sections[0].heading` | Ergonomie a bezpečnost práce |
| `vacuum-lifters.sections[0].body` | Zatížení zad opakovaným zvedáním je jedním z nejčastějších důvodů pracovní neschopnosti v dřevařském průmyslu. Vakuové zvedáky tento rizikový faktor zcela odstr … |
| `vacuum-lifters.sections[1].heading` | Který UWL je správný? |
| `vacuum-lifters.sections[1].body` | UWL-1: vstup, menší zatížení. UWL-3: standardní model pro většinu aplikací se dřevem. UWL-3S: speciální provedení pro tenké nebo porézní desky. UWL-3J: rychlejš … |
| `vacuum-lifters.faq[0].question` | Lze zvedat i zakřivené povrchy? |
| `vacuum-lifters.faq[0].answer` | Standardní přísavky jsou navrženy pro rovné plochy. Pro zakřivené povrchy jsou k dispozici speciální provedení s přizpůsobenými přísavkami. |
| `vacuum-lifters.faq[1].question` | Potřebujeme stlačený vzduch? |
| `vacuum-lifters.faq[1].answer` | Většina UWL pracuje s integrovaným vakuovým čerpadlem — žádný externí stlačený vzduch není nutný. Speciální provedení s externím čerpadlem jsou k dispozici pro  … |
| `vacuum-lifters.faq[2].question` | Jak často se musí kontrolovat? |
| `vacuum-lifters.faq[2].answer` | Roční bezpečnostní kontrola dle DGUV je povinná. Asamer nabízí tuto kontrolu v servisním balíčku. |
| `vacuum-special.introExpanded` | Barbaric speciální vakuové zvedáky (řada SWL, NGR) se nasazují tam, kde standardní přísavky nestačí: pro fošny (Plank-Lifter), citlivé povrchy (jehlový úchop),  … |
| `vacuum-special.sections[0].heading` | Kdy se vyplatí speciální vakuová technika? |
| `vacuum-special.sections[0].body` | Jakmile standardní vakuová technika selhává kvůli geometrii obrobku nebo povrchu — například u zakřivených ploch, extrémně tenkých desek, porézního materiálu ne … |
| `vacuum-special.faq[0].question` | Existuje speciální řešení pro naši geometrii? |
| `vacuum-special.faq[0].answer` | Asamer a Barbaric rádi posoudí proveditelnost a ekonomiku. Pošlete nám fotografii nebo nákres vašeho obrobku. |
| `vacuum-special.faq[1].question` | Jak dlouho trvá vývoj speciálního řešení? |
| `vacuum-special.faq[1].answer` | Obvykle 8–16 týdnů od konceptu po dodání — v závislosti na složitosti. |
| `vacuum-special.faq[2].question` | Lze dovybavit standardní vakuový zvedák? |
| `vacuum-special.faq[2].answer` | V mnoha případech ano — Asamer kontroluje možnost dovybavení stávajících UWL speciálními přísavkami nebo jehlovými úchopy. |
| `vacuum-traverses.introExpanded` | Barbaric vakuové traverzy jsou dlouhé úchopové systémy pro manipulaci s velkoformátovými, dlouhými nebo lehkými obrobky — například tenkými deskami, dveřmi, ple … |
| `vacuum-traverses.sections[0].heading` | Traverza pro tenké desky vs. standardní zvedák |
| `vacuum-traverses.sections[0].body` | Tenké desky (< 10 mm) se při klasickém zvedání středovým úchopem prohýbají a trhají na okrajích. Traverza pro tenké desky rozkládá zatížení po celé ploše, takže … |
| `vacuum-traverses.faq[0].question` | Jaké délky obrobků jsou možné? |
| `vacuum-traverses.faq[0].answer` | Standardní traverzy do 3 m, speciální provedení do 6 m. |
| `vacuum-traverses.faq[1].question` | Pro jaké tloušťky desek je vhodná traverza pro tenké desky? |
| `vacuum-traverses.faq[1].answer` | Obvykle od 2 mm do 15 mm. Pro HPL nebo fólie jsou nutné speciální povrchy přísavek. |
| `vacuum-traverses.faq[2].question` | Existuje i plechová traverza? |
| `vacuum-traverses.faq[2].answer` | Ano — traverza plech-plexisklo pro kovy a ploché plastové materiály. |
| `vacuum-cranes.introExpanded` | Barbaric vakuové jeřáby jsou stacionární nebo plošné manipulační systémy, pokud jsou potřebné pravidelné pohyby desek po definovaných trasách — ale bez plně aut … |
| `vacuum-cranes.sections[0].heading` | SSK vs. SSY vs. sloupcový most |
| `vacuum-cranes.sections[0].body` | SSK sloupový otočný jeřáb: pevná pozice, půlkruh pokrytí — ideální pro jedno pracoviště. SSY kolejnicový systém: lineární dráha — ideální pro linky nebo průchoz … |
| `vacuum-cranes.faq[0].question` | Je vakuový jeřáb levnější než sklad desek? |
| `vacuum-cranes.faq[0].answer` | Výrazně levnější — SSK začíná na zlomku nákladů automatického skladu. Ekonomicky smysluplné, když se manuální manipulace nahradí ovládáním jeřábu, ne automatiza … |
| `vacuum-cranes.faq[1].question` | Potřebujeme základ? |
| `vacuum-cranes.faq[1].answer` | SSK a sloupcový most vyžadují základy; SSY se montuje na stávající stropní konstrukci. Asamer koordinuje stavební práce. |
| `vacuum-cranes.faq[2].question` | Automaticky nebo ručně? |
| `vacuum-cranes.faq[2].answer` | Obojí možné. Menší jeřáby se obvykle ovládají ručně, větší mohou jezdit automaticky (řízení PLC, světelné závory, napojení na ERP). |

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

## mayerSeoContent · Produkte (139)

### SK — 139 fehlend

| Pfad im Modul | ausgelieferter Text |
|---|---|
| `kappa-automatic-80.applicationSections[0].heading` | Pro řezání dřevěných desek v truhlářských dílnách |
| `kappa-automatic-80.applicationSections[0].body` | kappa automatic 80 je optimální formátovací pila pro truhlárny a nábytkářské dílny, které pravidelně řežou dřevotřísky, MDF desky a překližky na míru. Kompaktní … |
| `kappa-automatic-80.applicationSections[1].heading` | Pro sériovou výrobu v řemeslných provozech |
| `kappa-automatic-80.applicationSections[1].body` | Díky rychlosti posuvu až 100 m/min a softwaru pro optimalizaci řezů je kappa automatic 80 ideálně vhodná pro ekonomickou sériovou výrobu v řemeslných provozech. … |
| `kappa-automatic-80.buyingAdvice` | kappa automatic 80 je správná volba, pokud hledáte kompaktní horizontální formátovací pilu pro dřevěné materiály a převážně zpracováváte desky do tloušťky 80 mm … |
| `kappa-automatic-80.faq[0].question` | Jaké materiály dokáže kappa automatic 80 řezat? |
| `kappa-automatic-80.faq[0].answer` | kappa automatic 80 je navržena pro dřevěné materiály jako dřevotřísky, MDF, HDF, překližky, stolařské desky a masivní dřevo. Výška řezu 80 mm umožňuje řezání je … |
| `kappa-automatic-80.faq[1].question` | Lze kappa automatic 80 obsluhovat jedním operátorem? |
| `kappa-automatic-80.faq[1].answer` | Ano, těžká ocelová konstrukce s automatickým přítlačným trámem a posuvem materiálu umožňuje plnou obsluhu jedním operátorem. Obsluha naprogramuje řezy na dotyko … |
| `kappa-automatic-80.faq[2].question` | Jakou rychlost posuvu nabízí kappa automatic 80? |
| `kappa-automatic-80.faq[2].answer` | Rychlost posuvu je plynule regulovatelná od 5 do 100 m/min, což umožňuje flexibilní přizpůsobení různým materiálům a požadavkům. |
| `kappa-automatic-80.faq[3].question` | Kde mohu koupit Mayer kappa automatic 80? |
| `kappa-automatic-80.faq[3].answer` | Asamer je autorizovaný prodejce Mayer pro Českou republiku, Slovensko a Maďarsko. Nabízíme osobní poradenství, předvedení, dodání, uvedení do provozu a poprodej … |
| `kappa-automatic-100.longDescription` | Mayer kappa automatic 100 je horizontální formátovací pila s vyšší výbavou, která nabízí více síly, více výkonu a více komfortu oproti vstupnímu modelu. S výško … |
| `kappa-automatic-100.applicationSections[0].heading` | Profesionální řezání desek ve výrobě nábytku |
| `kappa-automatic-100.applicationSections[0].body` | kappa automatic 100 je navržena pro výrobce nábytku, kteří řežou vysoké objemy korpusových dílů, front a polic z dřevěných desek. Výška řezu 100 mm umožňuje řez … |
| `kappa-automatic-100.applicationSections[1].heading` | Interiérové vestavby a výroba prodejen |
| `kappa-automatic-100.applicationSections[1].body` | V interiérových vestavbách a výrobě prodejen jsou rozhodující přesné řezy a krátké časy přípravy. kappa automatic 100 s připojením k Ardis poskytuje bezešvé dig … |
| `kappa-automatic-100.buyingAdvice` | Zvolte kappa automatic 100, pokud přerůstáte vstupní model a potřebujete vyšší výšku řezu, více komfortu a modulární optimalizaci řezů. Je ideální pro provozy z … |
| `kappa-automatic-100.faq[0].question` | Čím se liší kappa automatic 100 od modelu 80? |
| `kappa-automatic-100.faq[0].answer` | kappa automatic 100 nabízí výšku řezu 100 mm místo 80 mm, modulární optimalizátor řezů a vyšší výbavu s více komfortními funkcemi. Délka řezu zůstává 3 200 mm. |
| `kappa-automatic-100.faq[1].question` | Může kappa automatic 100 pracovat se softwarem pro optimalizaci řezů? |
| `kappa-automatic-100.faq[1].answer` | Ano, kappa automatic 100 je kompatibilní se softwarem Ardis pro optimalizaci řezů, který umožňuje automatický výpočet optimálních řezných plánů, snížení odpadu  … |
| `kappa-automatic-100.faq[2].question` | Pro jaké velikosti provozů je kappa automatic 100 vhodná? |
| `kappa-automatic-100.faq[2].answer` | kappa automatic 100 je vhodná pro středně velké až velké řemeslné provozy, výrobce nábytku a interiérové firmy s pravidelným řezáním desek a středním průchodem. |
| `kappa-automatic-120.longDescription` | Mayer kappa automatic 120 je výkonná horizontální formátovací pila pro rychlé a rozměrově přesné řezání jednotlivých desek i balíků desek. S výškou řezu 120 mm  … |
| `kappa-automatic-120.applicationSections[0].heading` | Řezání balíků pro středně velké série |
| `kappa-automatic-120.applicationSections[0].body` | S výškou řezu 120 mm umožňuje kappa automatic 120 efektivní řezání balíků desek. Více dřevotřískových nebo MDF desek je zpracováno současně, což výrazně zvyšuje … |
| `kappa-automatic-120.applicationSections[1].heading` | Velkoformátové desky v interiérových vestavbách |
| `kappa-automatic-120.applicationSections[1].body` | Rozšířená délka řezu 3 800 mm činí kappa automatic 120 ideálním řešením pro řezání velkoformátových desek používaných v kvalitních interiérových vestavbách, obc … |
| `kappa-automatic-120.buyingAdvice` | kappa automatic 120 se doporučuje, pokud pravidelně řežete balíky desek do 120 mm a potřebujete rozšířenou délku řezu 3 800 mm. Je střední variantou mezi kompak … |
| `kappa-automatic-120.faq[0].question` | Jaká je maximální délka řezu kappa automatic 120? |
| `kappa-automatic-120.faq[0].answer` | kappa automatic 120 nabízí délku řezu 3 800 mm a je tak vhodná i pro velkoformátové desky. |
| `kappa-automatic-120.faq[1].question` | Může kappa automatic 120 řezat balíky desek? |
| `kappa-automatic-120.faq[1].answer` | Ano, s výškou řezu 120 mm lze řezat více desek současně v balíku. To výrazně zvyšuje průchodnost a je to zvláště vhodné pro sériovou výrobu. |
| `kappa-automatic-120.faq[2].question` | Je kappa automatic 120 vhodná pro nábytkářský průmysl? |
| `kappa-automatic-120.faq[2].answer` | Ano, stroj je ideální pro nábytkářský průmysl a interiérové vestavby. Kombinace výšky řezu 120 mm, délky řezu 3 800 mm a optimalizace řezů pokrývá požadavky mod … |
| `kappa-automatic-140.longDescription` | Mayer kappa automatic 140 je vlajkovou lodí řady kappa a nabízí maximální výkon pro průmyslovou sériovou výrobu. S impozantní výškou řezu 140 mm a délkou řezu 4 … |
| `kappa-automatic-140.applicationSections[0].heading` | Průmyslová sériová výroba nábytkových dílů |
| `kappa-automatic-140.applicationSections[0].body` | kappa automatic 140 je navržena pro průmyslovou velkosériovou výrobu. S výškou řezu 140 mm lze efektivně řezat tlusté balíky desek, zatímco software Ardis minim … |
| `kappa-automatic-140.applicationSections[1].heading` | Zakázková výroba a velké projekty |
| `kappa-automatic-140.applicationSections[1].body` | Délka řezu 4 300 mm a výška řezu 140 mm činí kappa automatic 140 ideální pro velké zakázkové projekty, kde je třeba zpracovávat nadrozměrné desky a vysoké objem … |
| `kappa-automatic-140.applicationSections[2].heading` | Obchod se dřevem a velkoobchod s deskami |
| `kappa-automatic-140.applicationSections[2].body` | V obchodu se dřevem a velkoobchodu s deskami je kappa automatic 140 ideální pro služby řezání na míru: objednávky zákazníků jsou přijímány digitálně, optimalizá … |
| `kappa-automatic-140.buyingAdvice` | kappa automatic 140 je správná volba pro průmyslové provozy, které potřebují maximální výšku řezu, maximální délku řezu a nejvyšší průchodnost v řadě kappa. Jak … |
| `kappa-automatic-140.faq[0].question` | Je kappa automatic 140 nejrychlejší formátovací pilou ve své třídě? |
| `kappa-automatic-140.faq[0].answer` | S rychlostí posuvu až 100 m/min patří kappa automatic 140 k nejrychlejším formátovacím pilám ve třídě horizontálních pil na dřevěné desky. |
| `kappa-automatic-140.faq[1].question` | Jakou délku řezu nabízí kappa automatic 140? |
| `kappa-automatic-140.faq[1].answer` | kappa automatic 140 nabízí délku řezu 4 300 mm, což umožňuje zpracování nadrozměrných a obzvláště dlouhých obrobků. |
| `kappa-automatic-140.faq[2].question` | Pro jaké odvětví je kappa automatic 140 vhodná? |
| `kappa-automatic-140.faq[2].answer` | kappa automatic 140 je vhodná pro nábytkářský průmysl, interiérové vestavby, zakázkovou výrobu, obchod se dřevem a všechny provozy s průmyslovým řezáním desek v … |
| `advanced-line-100.longDescription` | Mayer advanced line 100 je osvědčená klasika mezi formátovacími pilami pro zpracování hliníku, neželezných kovů a plastů. S výkonem motoru 18/24 kW a výškou řez … |
| `advanced-line-100.applicationSections[0].heading` | Řezání hliníkových kompozitních desek |
| `advanced-line-100.applicationSections[0].body` | advanced line 100 je přímo předurčena pro řezání hliníkových kompozitních desek (Alucobond, Dibond a podobné). Nízká rychlost posuvu od 0,2 m/min a motor 18/24  … |
| `advanced-line-100.applicationSections[1].heading` | Zpracování plastových desek |
| `advanced-line-100.applicationSections[1].body` | Akrylátové sklo (PMMA), polykarbonát, tvrdé PVC a další technické plasty lze na advanced line 100 řezat bez otřepů a bez vytrhávání. Plynule regulovatelná rychl … |
| `advanced-line-100.applicationSections[2].heading` | Zpracování neželezných kovů |
| `advanced-line-100.applicationSections[2].body` | Kromě hliníku zpracovává advanced line 100 také mosaz, měď a další neželezné kovy. Konstrukce s nízkými vibracemi a precizní vedení pilového vozíku zaručují pře … |
| `advanced-line-100.buyingAdvice` | advanced line 100 je vaše volba, pokud hledáte osvědčenou formátovací pilu pro hliník a plasty ve třídě 100 mm. Přesvědčí spolehlivostí a řezy bez vibrací a je  … |
| `advanced-line-100.faq[0].question` | Může advanced line 100 řezat hliník? |
| `advanced-line-100.faq[0].answer` | Ano, advanced line 100 je speciálně navržena pro řezání hliníku, hliníkových kompozitních desek a neželezných kovů. Motor 18/24 kW dodává potřebný výkon pro čis … |
| `advanced-line-100.faq[1].question` | Jakou rychlost posuvu má advanced line 100? |
| `advanced-line-100.faq[1].answer` | Rychlost posuvu je 0,2 až 60 m/min, plynule regulovatelná. Nízké rychlosti jsou klíčové pro řezy bez otřepů v hliníku a plastech. |
| `advanced-line-100.faq[2].question` | Jaké plasty může advanced line 100 zpracovávat? |
| `advanced-line-100.faq[2].answer` | advanced line 100 zpracovává akrylátové sklo (PMMA), polykarbonát, tvrdé PVC, PE, PP a další technické plasty bez otřepů a bez vytrhávání. |
| `advanced-line-130.longDescription` | Mayer advanced line 130 je všestranná formátovací pila pro hliník, neželezné kovy a plasty s výškou řezu 130 mm a integrovaným odsáváním. Stabilní konstrukce v  … |
| `advanced-line-130.applicationSections[0].heading` | Stavba fasád z hliníkových kompozitních desek |
| `advanced-line-130.applicationSections[0].body` | advanced line 130 je ideální pro stavitele fasád řezající hliníkové kompozitní desky jako Alucobond nebo Dibond na míru. Výška řezu 130 mm pojme i tlustší kompo … |
| `advanced-line-130.applicationSections[1].heading` | Zpracování plastů v průmyslovém měřítku |
| `advanced-line-130.applicationSections[1].body` | Pro zpracovatele plastů nabízí advanced line 130 kombinaci výkonu, přesnosti a integrovaného odsávání. Masivní plastové bloky z polyethylenu, polyamidu nebo PTF … |
| `advanced-line-130.buyingAdvice` | advanced line 130 je optimální, pokud potřebujete výšku řezu 130 mm, integrované odsávání a Dual Servo Drive. Nabízí více než model 100 a je kompaktnější než mo … |
| `advanced-line-130.faq[0].question` | Co je systém Dual Servo Drive u advanced line 130? |
| `advanced-line-130.faq[0].answer` | Systém Dual Servo Drive sestává ze dvou nezávislých servomotorů, které poskytují absolutní přesnost polohování a programovatelné korekční křivky pro různé mater … |
| `advanced-line-130.faq[1].question` | Má advanced line 130 integrované odsávání? |
| `advanced-line-130.faq[1].answer` | Ano, advanced line 130 disponuje integrovaným odsáváním, které udržuje pracovní prostor čistý a splňuje požadavky na bezpečnost práce. |
| `advanced-line-130.faq[2].question` | Jaký pilový kotouč používá advanced line 130? |
| `advanced-line-130.faq[2].answer` | advanced line 130 používá pilový kotouč 500 mm s projekcí 142 mm, poháněný motorem 24 kW. |
| `advanced-line-160.longDescription` | Mayer advanced line 160 je mnohonásobně oceněná vysokovýkonná formátovací pila s PC řízením přes dotykový displej, nabízející výšku řezu 160 mm pro průmyslové z … |
| `advanced-line-160.applicationSections[0].heading` | Průmyslové zpracování hliníkových desek |
| `advanced-line-160.applicationSections[0].body` | advanced line 160 je první volbou pro průmyslové zpracovatele hliníku s vysokým průchodem. Motor 35 kW a pilový kotouč 600 mm řežou i tlusté hliníkové desky a k … |
| `advanced-line-160.applicationSections[1].heading` | Technické plasty a kompozity |
| `advanced-line-160.applicationSections[1].body` | Kombinace variabilní rychlosti posuvu a programovatelných korekčních křivek činí advanced line 160 ideální pro zpracování technických plastů jako PTFE, PEEK, PO … |
| `advanced-line-160.buyingAdvice` | advanced line 160 je vaše volba pro průmyslové požadavky na výšku řezu (160 mm), výkon motoru (35 kW) a PC řízení. Hodí se pro provozy zpracovávající hliník, pl … |
| `advanced-line-160.faq[0].question` | Jaký řídicí systém má advanced line 160? |
| `advanced-line-160.faq[0].answer` | advanced line 160 disponuje PC řízením s dotykovým displejem, které umožňuje intuitivní plánování zakázek, ukládání řezných plánů a integraci do ERP. |
| `advanced-line-160.faq[1].question` | Jak výkonný je motor advanced line 160? |
| `advanced-line-160.faq[1].answer` | advanced line 160 je vybavena motorem 35 kW, který pohání pilový kotouč 600 mm s projekcí 180 mm. |
| `advanced-line-160.faq[2].question` | Za co byla advanced line 160 oceněna? |
| `advanced-line-160.faq[2].answer` | advanced line 160 získala mnohonásobná ocenění za inovativní řešení a patenty, včetně systému Dual Servo Drive a PC řízení přes dotykový displej. |
| `advanced-line-160-turn.longDescription` | Mayer advanced line 160 turn rozšiřuje osvědčenou platformu 160 o automatickou 90° otočnou jednotku a umožňuje tak oboustranné zpracování v jednom průchodu. Tat … |
| `advanced-line-160-turn.applicationSections[0].heading` | Automatizované podélné a příčné řezy v jednom průchodu |
| `advanced-line-160-turn.applicationSections[0].body` | Otočná jednotka 90° u advanced line 160 turn umožňuje podélné a příčné řezy bez manuálního přemisťování. Desky jsou automaticky otočeny a polohovány pro další ř … |
| `advanced-line-160-turn.applicationSections[1].heading` | Zpracování velkých hliníkových formátů |
| `advanced-line-160-turn.applicationSections[1].body` | Při zpracování velkoformátových hliníkových desek a kompozitů je otočná jednotka obrovskou výhodou: těžké desky nemusí být ručně otáčeny, což zlepšuje ergonomii … |
| `advanced-line-160-turn.buyingAdvice` | Zvolte advanced line 160 turn, pokud ve vaší výrobě pravidelně potřebujete podélné a příčné řezy na hliníkových nebo plastových deskách a chcete automatizovat o … |
| `advanced-line-160-turn.faq[0].question` | Co dělá otočná jednotka advanced line 160 turn? |
| `advanced-line-160-turn.faq[0].answer` | Automatická 90° otočná jednotka otočí obrobky po podélném řezu o 90° a napolohuje je pro příčný řez. Oba směry řezu jsou provedeny v jednom průchodu bez manuáln … |
| `advanced-line-160-turn.faq[1].question` | Jaký nárůst produktivity přináší otočná jednotka? |
| `advanced-line-160-turn.faq[1].answer` | Otočná jednotka může zvýšit průchodnost až o 40 %, protože odpadá manuální otáčení a přepolohování desek a materiálový tok probíhá nepřetržitě. |
| `advanced-line-160-turn.faq[2].question` | Pro jaké materiály je advanced line 160 turn vhodná? |
| `advanced-line-160-turn.faq[2].answer` | advanced line 160 turn je vhodná pro hliník, hliníkové kompozitní desky, neželezné kovy a plasty všeho druhu, od akrylátového skla přes PVC po technické vysokov … |
| `advanced-line-200.longDescription` | Mayer advanced line 200 je vysokovýkonná formátovací pila pro velkoformátové obrobky z hliníku, neželezných kovů a plastů. S impozantní výškou řezu 200 mm, délk … |
| `advanced-line-200.applicationSections[0].heading` | Velkoformátové řezy v dopravním průmyslu |
| `advanced-line-200.applicationSections[0].body` | V automobilovém, kontejnerovém a dopravním průmyslu se zpracovávají hliníkové desky a plastové panely v nadrozměrných formátech. advanced line 200 s délkou řezu … |
| `advanced-line-200.applicationSections[1].heading` | Těžká průmyslová výroba |
| `advanced-line-200.applicationSections[1].body` | Pro těžkou průmyslovou výrobu, kde se masivní hliníkové a plastové bloky řežou na míru, je advanced line 200 zkonstruována se svým motorem 43 kW a těžkým strojn … |
| `advanced-line-200.buyingAdvice` | advanced line 200 je správný stroj, pokud potřebujete výšku řezu 200 mm, délku řezu 5 600 mm a výkon motoru 43 kW. Hodí se pro průmyslovou výrobu s velkoformáto … |
| `advanced-line-200.faq[0].question` | Jaká je maximální délka řezu advanced line 200? |
| `advanced-line-200.faq[0].answer` | advanced line 200 nabízí délku řezu až 5 600 mm, ideální pro nadrozměrné desky v dopravním a kontejnerovém průmyslu. |
| `advanced-line-200.faq[1].question` | Jaký motor má advanced line 200? |
| `advanced-line-200.faq[1].answer` | advanced line 200 je vybavena výkonným motorem 43 kW, který pohání pilový kotouč 670 mm s projekcí 215 mm. |
| `advanced-line-200.faq[2].question` | Pro jaká odvětví je advanced line 200 vhodná? |
| `advanced-line-200.faq[2].answer` | advanced line 200 je vhodná pro dopravní, automobilový a kontejnerový průmysl, stavbu fasád a všechna odvětví zpracovávající velkoformátové hliníkové nebo plast … |
| `advanced-line-250.longDescription` | Mayer advanced line 250 je nejsilnější formátovací pila ve své třídě a stanovuje nová měřítka v technologii průmyslového řezání desek s motorem 55/75 kW, průměr … |
| `advanced-line-250.applicationSections[0].heading` | Těžké obrábění hliníku |
| `advanced-line-250.applicationSections[0].body` | advanced line 250 byla zkonstruována pro těžké obrábění tlustých hliníkových desek a bloků. Motor 55/75 kW a pilový kotouč 860 mm zvládají tloušťky materiálu až … |
| `advanced-line-250.applicationSections[1].heading` | Zpracování masivních plastových bloků |
| `advanced-line-250.applicationSections[1].body` | Masivní plastové bloky z polyethylenu, polyamidu, PTFE a dalších technických plastů vyžadují stroj s výjimečným výkonem. advanced line 250 s výškou řezu 250 mm  … |
| `advanced-line-250.buyingAdvice` | advanced line 250 je investice pro provozy, které potřebují nejsilnější formátovací pilu ve své třídě. S motorem 55/75 kW a výškou řezu 250 mm neexistují limity … |
| `advanced-line-250.faq[0].question` | Proč je advanced line 250 nejsilnější ve své třídě? |
| `advanced-line-250.faq[0].answer` | advanced line 250 kombinuje motor 55/75 kW s pilovým kotoučem 860 mm a projekcí 270 mm, což z ní činí nejvýkonnější formátovací pilu ve své třídě. |
| `advanced-line-250.faq[1].question` | Jakou výšku řezu nabízí advanced line 250? |
| `advanced-line-250.faq[1].answer` | advanced line 250 nabízí výšku řezu 250 mm, nejvyšší v řadě Advanced Line a navrženou pro masivní hliníkové a plastové bloky. |
| `advanced-line-250.faq[2].question` | Může advanced line 250 řezat i plasty? |
| `advanced-line-250.faq[2].answer` | Ano, advanced line 250 kromě hliníku a neželezných kovů zpracovává i všechny běžné technické plasty jako PE, PA, PTFE, PEEK a sklolamináty. |
| `winkelanlagen.longDescription` | Mayer Winkelanlagen (úhlové řezací systémy) jsou zakázková průmyslová řezací řešení, která kombinují automatizované podélné a příčné řezy v jednom integrovaném  … |
| `winkelanlagen.applicationSections[0].heading` | Plně automatizované výrobní linky |
| `winkelanlagen.applicationSections[0].body` | Úhlové řezací systémy Mayer jsou srdcem plně automatizovaných výrobních linek. Nepřetržitý materiálový tok od přívodu desek přes podélné a příčné řezání po výst … |
| `winkelanlagen.applicationSections[1].heading` | Integrace do ERP a Průmysl 4.0 |
| `winkelanlagen.applicationSections[1].body` | Úhlové řezací systémy lze bezešvě integrovat do stávajících ERP systémů, takže objednávky zákazníků jsou přijímány digitálně, automaticky převáděny na optimaliz … |
| `winkelanlagen.buyingAdvice` | Úhlové řezací systémy Mayer jsou správná investice, pokud chcete plně automatizovat vaši výrobu desek a spojit podélné i příčné řezy v souvislém systému. Každá  … |
| `winkelanlagen.faq[0].question` | Co jsou úhlové řezací systémy Mayer? |
| `winkelanlagen.faq[0].answer` | Úhlové řezací systémy Mayer jsou zakázkové průmyslové řezací instalace, které kombinují automatizované podélné a příčné řezy v jednom integrovaném systému. Jsou … |
| `winkelanlagen.faq[1].question` | Jaké materiály zpracovávají úhlové řezací systémy Mayer? |
| `winkelanlagen.faq[1].answer` | Úhlové řezací systémy Mayer zpracovávají hliník, neželezné kovy, plasty a dřevěné materiály, podle individuální konfigurace. |
| `winkelanlagen.faq[2].question` | Lze úhlové řezací systémy integrovat do ERP systémů? |
| `winkelanlagen.faq[2].answer` | Ano, úhlové řezací systémy Mayer jsou navrženy pro bezešvou integraci do stávajících ERP a výrobních systémů a podporují digitální zpracování zakázek a automati … |
| `winkelanlagen.faq[3].question` | Jak mohu poptávat úhlový řezací systém u Asamer? |
| `winkelanlagen.faq[3].answer` | Kontaktujte Asamer pro nezávaznou projektovou konzultaci. Analyzujeme vaše potřeby a nakonfigurujeme úhlový řezací systém individuálně přizpůsobený vašim výrobn … |

## gannomatSeoContent · Kategorien (94)

### SK — 94 fehlend

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
| `insertion_door.faq[2].question` | Jaká je údržba? |
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
| `boring.introExpanded` | Gannomat kolkovací vrtací stroje (DB 21-27-35 a DB 21-27-35 WA) jsou klasické vícevřetenové vrtací stroje pro bočnice korpusu, záda a díly nábytku se standardní … |
| `boring.sections[0].heading` | Kolkovací vrtací stroj vs. CNC stroj |
| `boring.sections[0].body` | Kolkovací vrtací stroje jsou optimalizovány pro standardní vzory otvorů — rychlejší a levnější než CNC stroje. Při vysokém počtu variant nebo neobvyklých vrtací … |
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

## barbaricSeoContent · Produkte (72)

### SK — 72 fehlend

| Pfad im Modul | ausgelieferter Text |
|---|---|
| `csf-professional.longDescription` | Barbaric CSF Professional je plně automatický sklad desek pro truhlářství, výrobce nábytku a středně velké zpracovatele dřeva. Zajišťuje celkové řízení deskovéh … |
| `csf-professional.applicationSections[0].heading` | Pro truhlárny s omezenou plochou haly |
| `csf-professional.applicationSections[0].body` | Boční vzdálenost pouhých 100 mm umožňuje umístění přímo u stěn a v úzkých halových úsecích. Tím je CSF Professional vhodný i pro stávající budovy, kde rozšíření … |
| `csf-professional.applicationSections[1].heading` | Pro pickovací provoz bez pily |
| `csf-professional.applicationSections[1].body` | CSF Professional funguje jako čistě pickovací sklad i bez napojené formátovací pily. Desky se vyjímají ze skladu a připravují k expedici — ideální pro obchodník … |
| `csf-professional.buyingAdvice` | Zvolte CSF Professional, pokud hledáte kompaktní a ekonomický sklad desek pro řemesla nebo středně velké provozy. Pro průmyslový nepřetržitý provoz s dobou cykl … |
| `csf-professional.faq[0].question` | Jaké plochy a kapacity jsou možné? |
| `csf-professional.faq[0].answer` | CSF Professional je modulárně škálovatelný. Typické rozměry haly se pohybují od 8 × 15 m do 15 × 40 m, počet skladových míst závisí na formátu desek a výšce sto … |
| `csf-professional.faq[1].question` | Jak se sklad napojí na naši pilu? |
| `csf-professional.faq[1].answer` | Napojení se realizuje předávací stanicí s nájezdovými válečky nebo příčným stolem. U pil Mayer, Schelling nebo Holzma používáme standardizované protokoly; u sta … |
| `csf-professional.faq[2].question` | Za jak dlouho se investice vrátí? |
| `csf-professional.faq[2].answer` | Typická návratnost je jeden až dva roky. Hlavní úspory: odstranění manuální přepravy, méně pracovníků ve skladu, méně poškození desek a lepší přehled o materiál … |
| `csf-industrial.longDescription` | Barbaric CSF Industrial je vysoce průmyslový sklad desek pro nepřetržitý provoz ve velkých nábytkářských závodech, dodavatelských provozech a zpracovatelích des … |
| `csf-industrial.applicationSections[0].heading` | Pro průmyslovou výrobu nábytku |
| `csf-industrial.applicationSections[0].body` | CSF Industrial zásobuje vícesmenné výrobní linky deskovým materiálem. Několik výdejních míst lze obsluhovat paralelně; priorizace probíhá podle ERP řízeného poř … |
| `csf-industrial.applicationSections[1].heading` | Pro zpracovatele desek a zakázkové výrobce |
| `csf-industrial.applicationSections[1].body` | Zakázkoví výrobci s různorodými deskovými položkami mají obzvlášť prospěch z principu chaotického skladování: každá deska dostane digitální místo nezávislé na d … |
| `csf-industrial.buyingAdvice` | CSF Industrial je první volbou pro průmyslové nepřetržité provozy s vysokým obratem materiálu a ERP integrací. Pokud váš objem materiálu přesahuje několik tisíc … |
| `csf-industrial.faq[0].question` | Kolik formátovacích pil může CSF Industrial zásobovat současně? |
| `csf-industrial.faq[0].answer` | Podle rozvržení haly a požadavků na dobu taktu může CSF Industrial zásobovat dvě až čtyři formátovací pily paralelně. Napojení probíhá řetězovými nebo pásovými  … |
| `csf-industrial.faq[1].question` | Je podporováno chaotické skladování? |
| `csf-industrial.faq[1].answer` | Ano — chaotické skladování je základním principem CSF Industrial. Každá deska se při zaskladnění změří a získá digitální místo bez omezení druhu. Tím se zvyšuje … |
| `csf-industrial.faq[2].question` | Jak se realizuje napojení na ERP? |
| `csf-industrial.faq[2].answer` | Napojení na SAP, Navision, Infor nebo individuální ERP systémy se realizuje přes standardizovaná rozhraní (OPC-UA, REST API, XML výměna). Softwarový tým Asamer  … |
| `lcv-performance.longDescription` | Barbaric LCV Performance je nesting picker, který odebírá hotové vyřezané díly z nesting CNC, separuje je a stohuje podle zakázek. Systém odstraňuje manuální od … |
| `lcv-performance.applicationSections[0].heading` | Pro automatizované nesting buňky |
| `lcv-performance.applicationSections[0].body` | V nesting buňce se deskový materiál řeže přímo na CNC na všechny potřebné díly. LCV Performance odebírá vyřezané díly ihned, takže CNC může začít další řezný pl … |
| `lcv-performance.applicationSections[1].heading` | Pro výrobu dávky 1 |
| `lcv-performance.applicationSections[1].body` | Při výrobě dávky 1 (každý díl unikát) je manuální třídění dílů obzvlášť chybové. LCV Performance automaticky přiřadí každý díl správné zakázce a stohuje podle z … |
| `lcv-performance.buyingAdvice` | LCV Performance se vyplatí, jakmile provozujete nesting CNC v nepřetržitém režimu a musíte tam vázat alespoň jednu osobu pro odběr a třídění dílů. Návratnost ty … |
| `lcv-performance.faq[0].question` | Jaké nesting CNC LCV Performance podporuje? |
| `lcv-performance.faq[0].answer` | LCV Performance lze propojit s běžnými nesting CNC od Homag, Biesse, SCM, IMA nebo Felder. Přenos dat probíhá přes XML export nebo přímé PLC rozhraní. Asamer ov … |
| `lcv-performance.faq[1].question` | Jak malé mohou být díly? |
| `lcv-performance.faq[1].answer` | Typická minimální velikost pro odběr dílů je 80 × 80 mm. Menší díly lze realizovat přes speciální aplikace s přizpůsobenými přísavkovými úchopy — Asamer to koor … |
| `lcv-performance.faq[2].question` | Kolik zakázek může LCV stohovat paralelně? |
| `lcv-performance.faq[2].answer` | Podle konfigurace až 20 paralelních stohů zakázek. Pokud to nestačí, lze předřadit pufrovací dopravník, který odváží hotové stohy a vytváří místo pro další zaká … |
| `rts-professional.longDescription` | Barbaric RTS Professional je návratový systém pro olepovačky hran, který automaticky vrací hotové obrobky k obsluze stroje. Místo aby se díly obnášely kolem str … |
| `rts-professional.applicationSections[0].heading` | Pro jednoho pracovníka u olepovačky |
| `rts-professional.applicationSections[0].body` | Bez návratu potřebuje olepovačka hran obvykle dva pracovníky — jeden zakládá, druhý odebírá. S RTS Professional se obrobek vrací automaticky, takže jeden pracov … |
| `rts-professional.applicationSections[1].heading` | Pro střední série s málo přestaveními |
| `rts-professional.applicationSections[1].body` | RTS Professional je ekonomický od středních denních průtoků několika set dílů. Při této velikosti provozu se automatizace rychle vyplatí díky odlehčení personál … |
| `rts-professional.buyingAdvice` | Zvolte RTS Professional pro typické požadavky truhlářství a středně velkých provozů. Pro průmyslový nepřetržitý provoz s vysokými takty je vhodnější RTS Industr … |
| `rts-professional.faq[0].question` | Hodí se RTS k mé stávající olepovačce? |
| `rts-professional.faq[0].answer` | RTS Professional se hodí k olepovačkám hran různých výrobců (OTT, Homag, Felder, Biesse, SCM atd.). Rozhraní se navrhuje individuálně při projektování. Asamer o … |
| `rts-professional.faq[1].question` | Jaké jsou prostorové nároky? |
| `rts-professional.faq[1].answer` | Typicky 2–3 m délky návratu plus vlastní délka olepovačky hran. Při uspořádání do L nebo U lze prostorové nároky optimalizovat. Přesné rozměry vyplývají z rozvr … |
| `rts-professional.faq[2].question` | Vyplatí se mi RTS? |
| `rts-professional.faq[2].answer` | Při středním průtoku a dvousmenném provozu se RTS vrátí za 12–24 měsíců díky odlehčení personálu. Asamer rád spočítá ROI s vašimi výrobními čísly. |
| `uwl-3.longDescription` | Barbaric UWL-3 je vakuový zvedák pro ergonomickou manipulaci s velkými deskovými materiály ve výrobě dřeva a nábytku. Bere desky, dveře nebo pracovní desky bezp … |
| `uwl-3.applicationSections[0].heading` | Pro příjem zboží a skladovou logistiku |
| `uwl-3.applicationSections[0].body` | Při vykládání nákladních vozidel nebo stohování deskového materiálu nahrazuje UWL-3 manuální zvedání bezpečným, kontrolovaným vakuovým úchopem. Velké formáty a  … |
| `uwl-3.applicationSections[1].heading` | Pro zakládání formátovací pily a CNC |
| `uwl-3.applicationSections[1].body` | U formátovací pily nebo CNC pracovního stolu zrychluje UWL-3 zakládání desek a zajišťuje přesné polohování. Obrobek lze umístit bez manuálního posouvání — zásad … |
| `uwl-3.buyingAdvice` | UWL-3 je osvědčený standardní model — vhodný pro většinu truhlárenských a nábytkářských provozů s klasickou manipulací s deskami. Pro obzvlášť tenké nebo porézn … |
| `uwl-3.faq[0].question` | Jaká břemena UWL-3 uzdvihne? |
| `uwl-3.faq[0].answer` | UWL-3 je dimenzován na typická zatížení desek do několika set kilogramů. Přesná nosnost závisí na povrchu desky a konfiguraci přísavkových úchopů. Asamer spočít … |
| `uwl-3.faq[1].question` | Jak bezpečný je UWL-3 při výpadku proudu? |
| `uwl-3.faq[1].answer` | UWL-3 drží vakuum po výpadku proudu několik minut přes pufr — dostatečně dlouho k bezpečnému odložení břemena. Navíc jsou k dispozici optická a akustická upozor … |
| `uwl-3.faq[2].question` | Je nutná bezpečnostní kontrola? |
| `uwl-3.faq[2].answer` | Ano — vakuové zvedáky podléhají v Německu/Rakousku/České republice každoroční bezpečnostní kontrole dle DGUV. Asamer nabízí tuto kontrolu jako součást údržbovéh … |
| `ssk-saeulenschwenkkran.longDescription` | Barbaric SSK sloupový otočný jeřáb je stacionární vakuový jeřáb pro pravidelnou manipulaci s těžkými deskovými materiály ve výrobě dřeva a nábytku. Kombinuje ot … |
| `ssk-saeulenschwenkkran.applicationSections[0].heading` | Pro truhlárny s různými formáty |
| `ssk-saeulenschwenkkran.applicationSections[0].body` | V truhlářstvích pracujících s různými formáty desek je SSK ideálním řešením: každou desku lze pružně odebrat ze skladu a přenést na pracoviště. Pro pevné toky m … |
| `ssk-saeulenschwenkkran.applicationSections[1].heading` | Pro pracoviště řezání a formátování |
| `ssk-saeulenschwenkkran.applicationSections[1].body` | U formátovací pily, CNC nebo frézy polohuje SSK i velké formáty s milimetrovou přesností na pracovním stole. Tím odpadají zvedací operace, které při manuální ma … |
| `ssk-saeulenschwenkkran.buyingAdvice` | Zvolte SSK, pokud na pevném pracovišti pravidelně manipulujete s velkými nebo těžkými deskami. Pro pokrytí celých hal jsou sloupcové mosty (2D/3D) nebo kolejnic … |
| `ssk-saeulenschwenkkran.faq[0].question` | Jaký poloměr je možný? |
| `ssk-saeulenschwenkkran.faq[0].answer` | Typické otočné poloměry jsou mezi 3 a 6 metry. Větší provedení jsou k dispozici na vyžádání, ale vyžadují odpovídajícím způsobem dimenzované základy. |
| `ssk-saeulenschwenkkran.faq[1].question` | Potřebujeme speciální základ? |
| `ssk-saeulenschwenkkran.faq[1].answer` | Ano — sloup jeřábu potřebuje železobetonový základ odpovídající nosnému a ohybovému namáhání. Asamer vypracuje projekt základu a koordinuje s vaším stavebním pr … |
| `ssk-saeulenschwenkkran.faq[2].question` | Lze SSK otáčet elektricky? |
| `ssk-saeulenschwenkkran.faq[2].answer` | Standardní SSK se otáčí ručně — břemeno je přitom odlehčeno. Elektromotorické otáčení je dostupné jako volba a doporučuje se u velmi velkých poloměrů nebo těžký … |

## ratgeberFaqHub · FAQ (62)

### SK — 26 fehlend

| Pfad im Modul | ausgelieferter Text |
|---|---|
| `[0].items[0].question` | Která olepovačka hran pro začátek? |
| `[0].items[0].answer` | Pro začátek doporučujeme OTT Pacific+. Nabízí posuv 18 m/min včetně zpracování rohů na pouhých 5,7 m délky. Stroj zvládne tloušťku hran 0,3–15 mm a tloušťku des … |
| `[0].items[1].question` | Kdy se vyplatí automatizace skladu? |
| `[0].items[1].answer` | Automatizace skladu se vyplatí od denního průchodu přibližně 50 desek nebo když časy hledání a chyby při kompletaci brzdí produktivitu. Systémy BARBARIC snižují … |
| `[0].items[3].question` | Jaký je rozdíl mezi PUR a EVA technologií lepení? |
| `[0].items[3].answer` | EVA (etylenvinylacetát) je termoplastické tavné lepidlo, které rychle tuhne a snadno se zpracovává. PUR (polyuretanové reaktivní lepidlo) reaguje s vlhkostí a v … |
| `[0].items[4].question` | Co znamená Zero-Gap? Co je bluEdge HyFuse? |
| `[0].items[4].answer` | Zero-Gap označuje olepení hrany, kde je lepená spára opticky neviditelná – hrana a deskový materiál splývají bezešvě. bluEdge featuring HyFuse je vlastní techno … |
| `[1].items[0].question` | Co je OPC-UA a proč je důležité pro integraci ERP? |
| `[1].items[0].answer` | OPC-UA (Open Platform Communications – Unified Architecture) je otevřený průmyslový standard pro bezpečnou výměnu dat mezi stroji a IT systémy. Všechny stroje O … |
| `[1].items[2].question` | Může Asamer pomoci s integrací softwaru do nového stroje? |
| `[1].items[2].answer` | Ano, náš softwarový tým propojí váš stroj přes otevřené rozhraní OPC-UA přímo s vaším ERP nebo MES systémem. Integrace zahrnuje výrobní data v reálném čase, aut … |
| `[2].items[0].question` | Jak rychle přijede technik při poruše stroje? |
| `[2].items[0].answer` | V případě poruchy náš servisní tým okamžitě priorizuje váš incident. Obvykle zahájíme telefonickou nebo vzdálenou diagnostiku do 2–4 hodin. Pokud je nutný zásah … |
| `[2].items[1].question` | Které stroje Asamer servisuje? |
| `[2].items[1].answer` | Servisujeme všechny stroje z našeho aktuálního portfolia: olepovačky hran OTT, formátovací pily Mayer, manipulační a skladové systémy BARBARIC a vrtací a kolkov … |
| `[3].items[1].question` | Jaké dotační programy existují v roce 2026 pro dřevoobráběcí stroje v ČR? |
| `[3].items[1].answer` | V České republice je v roce 2026 k dispozici několik programů: OP TAK – Digitální podnik podporuje 25–45 % (max. 45 mil. Kč) při integraci strojů s ERP/MES. OP  … |
| `[3].items[2].question` | Jak funguje leasing přes Raiffeisen pro stroje? |
| `[3].items[2].answer` | Raiffeisen Leasing financuje nové i použité stroje s dobou trvání 36–72 měsíců. Volíte mezi finančním leasingem (přechod vlastnictví po poslední splátce) a oper … |
| `[4].items[0].question` | Na co si dát pozor při nákupu použitých olepovaček hran? |
| `[4].items[0].answer` | Zkontrolujte stav lepicí jednotky, frézovacích agregátů a posuvného řetězu – to jsou kritické opotřebitelné díly. Požádejte o strojní pas s historií údržby a pr … |
| `[4].items[1].question` | Poskytuje Asamer záruku na použité stroje? |
| `[4].items[1].answer` | Ano, každý použitý stroj od Asamer je před prodejem technicky prověřen a případně repasován. V závislosti na stavu a rozsahu repase poskytujeme záruku na prověř … |
| `[4].items[2].question` | Dodává Asamer i do Maďarska a na Slovensko? |
| `[4].items[2].answer` | Ano, Asamer dodává do celého regionu CZ, SK a HU. Pro olepovačky hran OTT jsme exkluzivním distribučním partnerem. Mayer, BARBARIC a Gannomat prodáváme jako aut … |

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
| `decisionCriteria[2].body` | The third criterion is the number of shifts and operating hours. Single-shift operation works with feed speeds of 12–18 m/min. Multi-shift production with 300+  … |
| `decisionCriteria[3].question` | 4. What is your budget and TCO? |
| `decisionCriteria[3].body` | The fourth criterion is total cost of ownership (TCO): purchase price, energy use, glue, maintenance, lifetime and resale value. OTT edgebanders typically last  … |
| `usedVsNew.heading` | Used vs new edgebander |
| `usedVsNew.body` | A used edgebander is a smart choice when it combines savings with quality. Vetted OTT used machines from a reputable source — with complete service history, tec … |
| `purVsEva.heading` | PUR or EVA glue? Quick comparison |
| `purVsEva.body` | The choice between PUR and EVA glue affects bond quality and durability. EVA is the thermoplastic standard: cheap, fast, suitable for dry interiors. PUR (polyur … |
| `service.heading` | Service and availability in CZ, SK and HU |
| `service.body` | Asamer has been the authorized OTT dealer for the Czech Republic, Slovakia and Hungary since 1991. Our scope: consulting, project planning, delivery, installati … |
| `faq[0].question` | Which edgebander for a small joinery? |
| `faq[0].answer` | For small joineries we recommend the OTT Pacific+ (5.7 m, 18 m/min) as a compact entry model or the OTT Tornado+ (6.2 m, 12–18 m/min) for greater flexibility wi … |
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
| `howTo[2].text` | Single-shift: 12–18 m/min is enough. Multi-shift: 16–25 m/min, automatic magazines and OPC-UA for ERP integration. |
| `howTo[3].name` | Calculate budget and TCO |
| `howTo[3].text` | Include purchase price, glue, energy, maintenance and lifetime (15–25 years). On a smaller budget, consider a vetted used machine. |
| `howTo[4].name` | Request a consultation with Asamer |
| `howTo[4].text` | Asamer prepares an individual offer based on your operation, materials and budget. Consultation in CZ, SK and HU in the local language. |

## mayerSeoContent · Kategorien (39)

### SK — 39 fehlend

| Pfad im Modul | ausgelieferter Text |
|---|---|
| `kappa.introExpanded` | Řada Mayer kappa zahrnuje horizontální formátovací pily speciálně vyvinuté pro řezání dřevěných materiálů. Od kompaktní kappa automatic 80 jako vstupního modelu … |
| `kappa.sections[0].heading` | Technologie formátovacích pil kappa |
| `kappa.sections[0].body` | Všechny modely kappa sdílejí stejnou základní technologii: těžká ocelová konstrukce, nový pilový vozík se směrem řezu proti dorazu, dvojitý měřicí systém pro ma … |
| `kappa.sections[1].heading` | Srovnání modelů: kappa 80 až kappa 140 |
| `kappa.sections[1].body` | kappa automatic 80 nabízí 80 mm výšku řezu a 3 200 mm délku řezu jako vstupní model. kappa automatic 100 rozšiřuje na 100 mm s modulárním optimalizátorem řezů.  … |
| `kappa.sections[2].heading` | Software a digitalizace |
| `kappa.sections[2].body` | Řada kappa podporuje software Ardis pro optimalizaci řezů, který automaticky vypočítává nejefektivnější řezné plány, minimalizuje odpad a umožňuje bezešvé digit … |
| `kappa.faq[0].question` | Která formátovací pila Mayer kappa je pro mě ta pravá? |
| `kappa.faq[0].answer` | Volba závisí na vaší požadované výšce řezu, délce řezu a objemu výroby. kappa 80 se hodí pro vstup, kappa 100 a 120 pro střední požadavky a kappa 140 pro průmys … |
| `kappa.faq[1].question` | Mohu si kappa formátovací pilu koupit u Asamer? |
| `kappa.faq[1].answer` | Ano, Asamer je autorizovaný prodejce Mayer pro Českou republiku, Slovensko a Maďarsko. Nabízíme kompletní řadu kappa s poradenstvím, dodáním, uvedením do provoz … |
| `kappa.faq[2].question` | Jaké dřevěné materiály může řada kappa zpracovávat? |
| `kappa.faq[2].answer` | Řada kappa zpracovává dřevotřísky, MDF, HDF, překližky, multiplex, stolařské desky, masivní dřevo a další dřevěné materiály. |
| `advanced.introExpanded` | Mayer Advanced Line je řada horizontálních formátovacích pil speciálně vyvinutých pro zpracování hliníku, neželezných kovů, plastů a kompozitů. Řada sahá od osv … |
| `advanced.sections[0].heading` | Pro jaké materiály je Advanced Line vhodná? |
| `advanced.sections[0].body` | Advanced Line zpracovává hliník ve všech slitinách a formách (plný materiál, kompozitní desky, profily), neželezné kovy jako mosaz a měď a všechny běžné plasty  … |
| `advanced.sections[1].heading` | Přehled modelů Advanced Line |
| `advanced.sections[1].body` | advanced line 100 (18/24 kW, 100 mm) je klasika. advanced line 130 (24 kW, 130 mm) nabízí integrované odsávání a Dual Servo Drive. advanced line 160 (35 kW, 160 … |
| `advanced.sections[2].heading` | Dual Servo Drive a precizní technologie |
| `advanced.sections[2].body` | Systém Dual Servo Drive je srdcem Advanced Line a používá dva nezávislé servomotory pro absolutní přesnost polohování. Programovatelné korekční křivky umožňují  … |
| `advanced.faq[0].question` | Která Advanced Line je vhodná pro hliníkové kompozitní desky? |
| `advanced.faq[0].answer` | Pro hliníkové kompozitní desky jsou vhodné všechny modely Advanced Line. advanced line 100 je ideální jako vstup, zatímco 130 a 160 s integrovaným odsáváním a v … |
| `advanced.faq[1].question` | Jaký je rozdíl mezi kappa a Advanced Line? |
| `advanced.faq[1].answer` | Řada kappa je optimalizována pro dřevěné materiály a nabízí vysoké rychlosti posuvu do 100 m/min. Advanced Line je navržena pro hliník, neželezné kovy a plasty  … |
| `advanced.faq[2].question` | Nabízí Asamer servis pro Advanced Line? |
| `advanced.faq[2].answer` | Ano, Asamer je autorizovaný prodejce Mayer a nabízí pro celou řadu Advanced Line poradenství, projektové plánování, dodání, uvedení do provozu, školení a poprod … |
| `industrial.introExpanded` | Průmyslová řešení Mayer jdou nad rámec jednotlivých formátovacích pil a zahrnují zakázkové úhlové řezací systémy pro plně automatizované výrobní linky. Tyto sys … |
| `industrial.sections[0].heading` | Co jsou úhlové řezací systémy Mayer? |
| `industrial.sections[0].body` | Úhlové řezací systémy Mayer jsou plně automatizované řezací instalace, které kombinují podélné a příčné řezy v integrovaném systému. Desky jsou automaticky přiv … |
| `industrial.sections[1].heading` | Výhody automatizace |
| `industrial.sections[1].body` | Plná automatizace úhlového řezacího systému dramaticky zvyšuje průchodnost, snižuje potřebu personálu na minimum, eliminuje chyby obsluhy a snižuje odpad materi … |
| `industrial.sections[2].heading` | Průmysl 4.0 a digitalizace |
| `industrial.sections[2].body` | Úhlové řezací systémy Mayer jsou připraveny pro koncepty Průmyslu 4.0. Bezešvá integrace do ERP, digitální zpracování zakázek a automatická optimalizace řezů tv … |
| `industrial.faq[0].question` | Jak dlouho trvá plánování a instalace úhlového řezacího systému? |
| `industrial.faq[0].answer` | Časový rámec projektu závisí na složitosti instalace. Typicky plánování trvá 2 až 4 měsíce a instalace 2 až 6 týdnů. Asamer provází celým procesem od analýzy po … |
| `industrial.faq[1].question` | Jaká odvětví používají úhlové řezací systémy Mayer? |
| `industrial.faq[1].answer` | Úhlové řezací systémy Mayer se používají v nábytkářském průmyslu, stavbě fasád, zpracování hliníku a plastů, dopravním průmyslu a automobilovém průmyslu. |
| `industrial.faq[2].question` | Může Asamer naplánovat úhlový řezací systém přímo na místě? |
| `industrial.faq[2].answer` | Ano, Asamer nabízí konzultace a analýzu potřeb přímo na místě. Zaměříme váš výrobní prostor, analyzujeme materiálový tok a vypracujeme koncept úhlového řezacího … |
