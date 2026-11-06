# BIM Consultancy

Een lichte, statische website met drie pagina's, geschikt voor GitHub Pages.

De vormgeving wisselt schermbrede lichte panelen af: wit, lichtblauw en lichtgroen met donkere tekst. Op Home kun je door de foto's bladeren met de pijlen naast de foto.

## Pagina's

- `index.html` — Home
- `diensten-referenties.html` — Diensten en referentieprojecten
- `contact.html` — Contactformulier

## Contactformulier instellen

Het contactformulier wordt via FormSubmit verzonden. Vul in `js/site.js` bij `contactEmail` het echte ontvangstadres in voordat je publiceert. Na de eerste inzending stuurt FormSubmit een eenmalige bevestigingsmail naar dat adres; bevestig die om het formulier te activeren. Verzend vanaf de gepubliceerde website of een lokale webserver; rechtstreeks openen als `file://` werkt niet.

## Projectfoto's

De foto's op de Home- en Diensten & referentiespagina zijn sfeerbeelden die via Unsplash worden geladen. Ze zijn illustratief en tonen geen specifieke klantprojecten. Vervang de afbeeldingsadressen in de HTML door eigen projectfoto's zodra die beschikbaar zijn.

## Foto's en iconen aanpassen

- **Foto's:** wijzig de `src` van de `<img>` in `index.html` of `diensten-referenties.html`. Eigen foto's kun je in `images/` zetten en daarna bijvoorbeeld gebruiken als `images/mijn-foto.jpg`.
- **Iconen op de groene strook:** de drie iconen staan als inline SVG in `index.html` bij `benefit-grid`. De grootte stel je in met `.benefit-icon` en `.benefit-icon svg` in `css/style.css`.
- De iconen zijn speciaal voor deze site als SVG in de HTML getekend; ze komen niet van een externe iconenbibliotheek. Daardoor zijn ze vrij aan te passen zonder extra download.

## Publiceren op GitHub Pages

Plaats de bestanden uit deze map in de hoofdmap van de repository. Kies in GitHub bij **Settings → Pages** voor publicatie vanaf de `main`-branch en de hoofdmap (`/root`). `index.html` is het startpunt; `.nojekyll` is inbegrepen.

## Lokaal bekijken

Open `index.html` rechtstreeks of start een eenvoudige lokale webserver in deze map.

## Hero met "Bim" en telefoon (v9)

De hero op `index.html` toont grote letters "Bim" met een telefoon ervoor, waarop een dashboard als illustratie staat. De stijl staat in `css/bim-hero.css` en de lichte scrollbeweging in `js/bim-hero.js`. De zwarte rand om het scherm stel je in met `--bezel` bovenaan `.bim-stage` (nu 0,5% van de telefoonbreedte).

## Slider op Diensten & referenties (v10)

Bovenaan `diensten-referenties.html` staat dezelfde fotoslider als op de oude Home. Foto's en bijschriften pas je aan in de `<figure>`-blokken; de werking zit in `js/site.js`.

## Diensten & referenties (v11)

- De kop staat links en de kleine slider rechts (stijl in `css/page-slider.css`).
- Diensten staan als genummerde lijst (01 t/m 06), in dezelfde stijl als op Home.
- Referenties hebben werkende filters. Elk project heeft `data-sector` in kleine letters (bijvoorbeeld `mkb`), en de bijbehorende filterknop heeft dezelfde waarde in `data-filter`.
