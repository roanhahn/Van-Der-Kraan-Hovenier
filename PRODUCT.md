# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML + CSS + vanilla JS, with Bootstrap 5 for grid/responsive/navbar/cards/forms (per client briefing). Custom CSS on top for brand look. No build tooling, no framework/backend.

## Users

Particuliere huiseigenaren in Katwijk en omgeving (Leiden, Wassenaar, Noordwijk) die een betrouwbare hovenier zoeken voor tuinonderhoud, aanleg, of eenmalige klussen (bv. stronk wegfrezen, schutting plaatsen). Ze vergelijken lokale hoveniers en willen laagdrempelig, zonder poeha, contact kunnen opnemen.

## Product Purpose

Eén landingspagina (single page, ankerlinks) voor Van der Kraan Hoveniers met als enig conversiedoel: een afspraak/offerte-aanvraag. Alle content en CTA's sturen aan op het contactformulier, aangevuld met altijd-zichtbare "bel direct" en "mail ons" opties.

## Positioning

Kleine, vakkundige lokale hovenier in Katwijk — persoonlijk en betrouwbaar, geen groot anoniem bedrijf. Premium uitstraling (goud/zwart merk, verzorgde typografie) gecombineerd met laagdrempelige, persoonlijke toon — niet corporate, niet goedkoop.

## Operating Context

Bezoeker komt via lokale zoekopdracht (SEO) of mond-tot-mondreclame, bekijkt diensten, en vraagt via het contactformulier een vrijblijvende afspraak/offerte aan, of belt/mailt direct. Geen bezoeklocatie/showroom — werkgebied is regio Katwijk. Contactformulier verstuurt via Formspree (front-end validatie + Formspree POST, geen eigen backend).

## Capabilities and Constraints

7 kerndiensten (elk met eigen korte SEO-tekst, icoon en foto):
- Snoeien van bomen & struiken
- Wegfrezen van boomstronken
- Beplanting
- Onkruid verwijderen
- Graszoden aanleggen
- Schutting plaatsen
- Straatwerk

Contactformulier velden: naam, e-mail, telefoon, gewenste dienst (dropdown, 7 diensten), bericht. Telefoon (06 85103892) en e-mail (info@vdkraanhoveniers.nl) als klikbare tel:/mailto: links. Geen fysiek bezoekadres — enkel werkgebied tonen. Geen KvK-nummer (nog niet beschikbaar/gewenst).

Beeldmateriaal: geen eigen foto's beschikbaar op dit moment — site wordt gebouwd met passende placeholder-/stockfoto's (overdag, fris/licht, groen) die de klant later kan vervangen door eigen foto's.

## Brand Commitments

- Naam: Van der Kraan Hoveniers. Slogan: "Voor al uw tuinwerkzaamheden".
- Bestaand logo/flyer (aangeleverd) is bindende visuele autoriteit voor het merk: zwart/goud kleurenpalet, klassiek gouden dennenboom+huis-beeldmerk, strakke hoofdletter-serif voor "VAN DER KRAAN" en gespatieerde kleine letters voor "HOVENIERS".
- Klant-richtlijn (uit briefing): op de website wordt gebroken wit de hoofdkleur/basis (niet zwart als dominante achtergrond), zwart alleen gericht ingezet (navbar, hero-overlay, tekst), goud blijft accentkleur voor CTA's/iconen/highlights — dit zorgt dat het groen van de tuinfoto's tot zijn recht komt.
- Iconenstijl van de flyer (lijntekening/goud) hergebruiken voor de diensten-iconen.
- Sfeer: professioneel, natuurlijk, licht/luchtig (niet zwaar/donker), ruime witruimte tussen secties.

## Evidence on Hand

Aangeleverd: logo/flyer-afbeelding (`van der kraan hoveniers.png`) als merkreferentie, en een uitgebreide klant-briefing (`briefing-van-der-kraan-hoveniers.md`) met paginastructuur, SEO-uitgangspunten en tone-of-voice-richtlijnen. Geen eigen tuinfoto's beschikbaar — gebruik placeholders totdat de klant eigen beeldmateriaal aanlevert. Geen testimonials/social proof aangeleverd — niet verzinnen.

## Product Principles

1. Eén doel per pagina: elke sectie en CTA stuurt naar de contactaanvraag; geen afleidende nevenpaden.
2. Licht en luchtig premium gevoel: gebroken wit als basis, zwart gericht, goud als accent — nooit een zware donkere ondergrond zoals de flyer.
3. Lokale geloofwaardigheid: expliciete, natuurlijke regio-taal (Katwijk e.o.) door de hele tekst en structured data, geen generieke marketingtaal.
4. Laagdrempelig en persoonlijk vakmanschap boven verkooppraat — rustige, eerlijke toon.
5. Toegankelijk en snel: voldoende contrast (goud nooit als kleine tekst op wit), semantische HTML, geoptimaliseerde/lazy-loaded afbeeldingen.

## Accessibility & Inclusion

Voldoende contrast tussen tekst en gebroken-witte achtergrond verplicht; goud alleen op donkere ondergrond of groot/dik genoeg voor contrast — nooit goud-op-wit voor kleine tekst. Focus-states op alle knoppen/links. Alt-teksten op alle afbeeldingen (beschrijvend, met dienst + regio waar relevant).
