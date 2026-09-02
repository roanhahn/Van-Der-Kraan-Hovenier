---
name: Van der Kraan Hoveniers
description: Licht, luchtig hoveniers-merk — gebroken wit als basis, zwart doelgericht, goud als scherp accent
colors:
  cream: "#FAF7F0"
  cream-alt: "#F1EBDD"
  cream-card: "#FFFFFF"
  ink: "#15140F"
  ink-soft: "#3A362C"
  ink-faint: "#6b6656"
  gold: "#C9A227"
  gold-bright: "#E8C468"
  gold-deep: "#8A6A16"
  line: "rgba(21, 20, 15, 0.12)"
typography:
  display:
    fontFamily: "Fraunces Variable, Fraunces, Iowan Old Style, ui-serif, Georgia, serif"
    fontSize: "clamp(2rem, 3.4vw, 2.9rem)"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "normal"
  hero:
    fontFamily: "Fraunces Variable, Fraunces, Iowan Old Style, ui-serif, Georgia, serif"
    fontSize: "clamp(2.3rem, 5vw, 3.6rem)"
    fontWeight: 600
    lineHeight: 1.12
  body:
    fontFamily: "Jost, Century Gothic, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Jost, Century Gothic, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    letterSpacing: "0.2em"
rounded:
  md: "18px"
  lg: "28px"
  pill: "999px"
spacing:
  section: "clamp(4rem, 9vw, 7rem)"
  container-pad: "clamp(1.25rem, 4vw, 3rem)"
components:
  button-primary:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.85rem 1.7rem"
  button-primary-hover:
    backgroundColor: "{colors.gold-bright}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.85rem 1.7rem"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.gold-bright}"
    rounded: "{rounded.pill}"
    padding: "0.65rem 1.3rem"
  card-service:
    backgroundColor: "{colors.cream-card}"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.lg}"
    padding: "clamp(1.75rem, 3.2vw, 3.25rem)"
---

## Overview

Van der Kraan Hoveniers is een lokale hovenier in Katwijk. Het bestaande merk (flyer/logo) is zwart met een goud beeldmerk (dennenbomen, huis, blad) en een klassieke hoofdletter-serif wordmark. Deze website vertaalt dat merk naar een **licht, luchtig daglicht-canvas**: gebroken wit is de hoofdkleur/basis, zwart wordt gericht ingezet (navbar, footer, hero-tekst, koppen), en goud blijft het scherpe accent voor CTA's, iconen en highlights — nooit een dominante donkere achtergrond over meerdere secties. Dit laat de verzadigd-groene tuinfoto's ademen tegen de lichte ondergrond in plaats van te concurreren met zwart.

Kleurstrategie: **Restrained** (neutralen + één gouden accent). De pagina zelf is licht en overdag: gebroken wit blijft de UI-basis. Eén bewuste uitzondering, op expliciet verzoek van de klant: de **hero-foto** is een avondopname met warme lantaarnverlichting — dit is contentkeuze (beeldmateriaal), geen UI-achtergrondkeuze, en verwijst juist bewust naar de sfeer van de flyer. Diensten/over-ons/galerij blijven daglichtfoto's, zoals de briefing vroeg.

Signature-interactie: de dienstensectie gebruikt "sticky-stacking" kaarten (CSS `position: sticky`, gelijke `top`-waarde per kaart) die tijdens het scrollen letterlijk over elkaar heen schuiven — geïnspireerd op een door de klant aangedragen referentie (Sequoia). Op schermen &lt;860px valt dit terug op een gewone verticale opeenvolging van kaarten.

De header volgt dezelfde referentie: transparant en zonder achtergrondbalk, direct over de hero-foto (`.hero` schuift via een negatieve `margin-top` gelijk aan `--header-h` onder de sticky header). Zodra er gescrold wordt (of het mobiele menu openstaat) krijgt de header alsnog een vaste `ink`-achtergrond (`.site-header.is-scrolled`, via `js/main.js`) zodat de balk leesbaar blijft boven secties zonder foto — dit blijft, in tegenstelling tot Sequoia zelf, wél altijd sticky (`position:sticky`), conform de klant-briefing die een permanent bereikbare belknop eist.

## Colors

- **Cream** (`#FAF7F0`) — paginabasis, de dominante ondergrond.
- **Cream alt** (`#F1EBDD`) — afwisselende sectie-achtergrond (over-ons) voor ritme zonder contrast te verliezen.
- **Cream card** (`#FFFFFF`) — kaarten/formulier op de cream-ondergrond, zodat kaarten zich losmaken van de pagina.
- **Ink** (`#15140F`) — navbar, footer, contactsectie, hero-overlay, koppen. Gericht, nooit als paginabasis.
- **Ink soft / faint** — lopende tekst en secundaire tekst op cream (respectievelijk 11.25:1 en ~7:1 contrast).
- **Gold** (`#C9A227`) — primair accent: knoppen (met ink-tekst erop, 7.6:1), iconen op cream, dividers.
- **Gold bright** (`#E8C468`) — feller goud, uitsluitend op de ink-achtergrond (navbar-tekst, footer-links, USP-iconen): 11:1 contrast.
- **Gold deep** (`#8A6A16`) — enige goud-tint die als tekst ÓP cream mag (4.73:1, AA voor normale tekst); gebruikt voor kleine gouden call-to-action-onderstrepingen/links op cream.

Regel: goud-op-cream alleen als icoon, als grote/vetgedrukte tekst, of in de `gold-deep`-tint; nooit `gold`/`gold-bright` als kleine lopende tekst op cream (te laag contrast).

## Typography

Lettertype-duo gepind door de klant-briefing zelf: **Fraunces** (display-serif, karaktervol/licht-klassiek, sluit aan bij het logo) voor alle koppen, en **Jost** (geometrische schreefloze, dezelfde familie als de door de klant aangedragen referentiesite) voor body-tekst en gespatieerde labels.

De klant vroeg later expliciet naar het karakter van **Butler** (commercieel font, TypeType-collectie, niet op Google Fonts en dus niet zonder aparte weblicentie te gebruiken). In plaats daarvan wordt Fraunces zelf gehost als variabel lettertype (`fonts/Fraunces-Variable.woff2` + `fonts/Fraunces-Italic-Variable.woff2`, rechtstreeks van Google Fonts' broncode, niet via de beperktere CSS2-snelkoppeling) zodat de **SOFT**- en **WONK**-assen beschikbaar blijven. Alle koppen krijgen `font-variation-settings: "opsz" 144, "SOFT" 62, "WONK" 0`, wat de letters ronder, warmer en lager-contrast maakt — dicht bij Butler's karakter, legaal en gratis. Wil je alsnog het echte Butler gebruiken: koop een weblicentie (bv. via Fontspring/YouWorkForThem) en lever het fontbestand aan.

- Koppen: Fraunces Variable 600 (hero 700), `line-height:1.12`, `font-variation-settings: "opsz" 144, "SOFT" 62, "WONK" 0`, `overflow-wrap:break-word` + `hyphens:auto` (verplicht voor lange Nederlandse samenstellingen als "tuinwerkzaamheden").
- Body: Jost 400, 1.05rem, `line-height:1.7`.
- Kleine labels (formulier-labels, brand-subtekst "HOVENIERS", knoptekst): Jost 600, gespatieerd (`letter-spacing:0.2–0.32em`), uppercase — nooit als eyebrow/kicker boven een sectiekop (zie Do's and Don'ts).

## Layout

Mobile-first, Bootstrap 5 grid/navbar/forms als basis, custom CSS bovenop voor het merk. Ruime verticale ritme: `clamp(4rem, 9vw, 7rem)` padding boven/onder elke sectie. `.container` gebruikt Bootstrap's eigen responsieve max-width-stappen (geen eigen 1200px-cap meer) met `clamp(1.25rem, 4vw, 3rem)` zijmarge; elke sectie, inclusief de dienstenkaarten-stack (`.service-stack.container`), valt binnen diezelfde containerbreedte.

Dienstensectie (desktop ≥860px): elke dienst is een `position: sticky; top: 96px` kaart met gelijke stack-volgorde, zodat opeenvolgende kaarten elkaar tijdens het scrollen overlappen (geen kickers/nummering, koppen dragen zelf het gewicht). Kaarthoogte `clamp(560px, calc(100vh - 116px), 860px)` zodat er geen "dode" scrollruimte tussen kaarten ontstaat. Onder 860px: `position: static`, gewone verticale opeenvolging.

Galerij: CSS grid, 3 kolommen (2 op mobiel), met afwisselend hoge/brede items (`grid-row: span 2`) voor een masonry-gevoel, ruime gaps.

## Elevation & Depth

Bewust vlak: kaarten (dienstenkaarten, contactformulier) hebben **geen dropshadow**. Ze onderscheiden zich via achtergrondkleur (`cream-card`/`cream` tegen de omliggende `cream`/`cream-alt`/`ink`) en, bij de dienstenkaarten, een subtiele 1px rand (`--line`). Knoppen behouden wel een zachte gloed-schaduw in goud (`box-shadow` op `.btn-gold`/`.mobile-fab`) als interactie-signaal — dat is geen kaart-elevatie.

## Shapes

- Grote kaarten/panelen: `border-radius: 28px`.
- Galerij-items: `border-radius: 18px`.
- Knoppen: volledig rond (`border-radius: 999px`).
- Iconen: cirkelvormige `cream-alt`-achtergrond (52px) rond elk dienst-icoon.

## Components

- **Iconen**: [Lucide](https://lucide.dev) (ISC-licentie) — één consistente lijnstijl (`stroke-width:2`, ronde caps/joins, `fill:none`), nooit Unicode-glyphs/emoji. Merkbeeldmerk (dennenbomen/huis/blad) is het door de klant aangeleverde officiële logobestand (`images/logo-mark.svg`, aangeleverd op 805×614), gebruikt in header en footer via `<img>` met alleen `height` gezet (`width:auto`) om de eigen beeldverhouding te behouden — nooit hardcoded width+height samen, dat vervormt het beeldmerk.
- **Knoppen**: `btn-gold` (primaire CTA, ink-tekst op goud-gradient), `btn-ink-outline` (secundair op cream), `btn-call` (ink-achtergrond, goud-tekst, in navbar/footer).
- **Dienstenkaart**: foto + icoon + kop + korte tekst + tekstlink-CTA; geen sectienummering, geen kicker.
- **Contactformulier**: Bootstrap-validatie-klassen, Formspree als verzendservice met mailto-fallback zolang er geen Formspree-ID is ingesteld (zie README-hint in `js/main.js`).

## Do's and Don'ts

- **Nooit** een kicker/eyebrow-label boven een kop toevoegen — de kop draagt zelf het gewicht (harde regel, ook toekomstig werk).
- **Nooit** `gold`/`gold-bright` als kleine lopende tekst op een cream-achtergrond gebruiken (contrast); gebruik `gold-deep`, of plaats goud op een ink-achtergrond.
- **Nooit** zwart als dominante paginabasis gebruiken — dat is de taal van de flyer, niet van de site. Zwart blijft gericht (navbar, footer, contact, hero-overlay).
- **Wel** elke lange Nederlandse samenstelling laten testen op afbreking (`hyphens:auto` staat al globaal op koppen).
- **Wel** nieuwe diensten/secties in dezelfde kaart-plus-icoon-taal houden, maar de sticky-stack blijft voorbehouden aan de dienstensectie (niet hergebruiken als generieke sectie-crutch elders).
- **Nooit** een dropshadow aan kaarten toevoegen (dienstenkaarten, contactformulier, over-ons-foto) — op klantverzoek bewust vlak; onderscheid komt van kleurcontrast en een dunne rand, niet van elevatie.
- **Nooit** een kaart/paneel terugzetten in de hero — de kop, subtekst en knoppen staan bewust los, rechtstreeks op de foto (met scrim voor leescontrast), op klantverzoek dichter bij de Sequoia-referentie.
- **Nooit** afbeeldingen als laagresolutie `.jpg` aanleveren — alle beeldmateriaal is `.webp` (via `cwebp`) op minimaal 1600px breed (hero 2400px), op klantverzoek voor scherpte op high-dpi schermen.
