# Sivutek

Staattinen sivusto yritykselle Sivutek (rakennus-, remontti- ja LVI-työt, Nokia / Pirkanmaa). Sivusto on tehty Astrolla ja Tailwindillä. Fontit tulevat sivuston mukana, eikä kävijäseurantaa ole päällä.

## Kehitys

Tarvitset Node.js-version 22.12 tai uudemman. Tällä koneella on 22.17, joka riittää Astro 6:lle. Astro 7 vaatii Noden 22.23.4, joten älä päivitä Astroa major-versioon ennen Node-päivitystä.

```bash
npm install
npm run dev
```

Sivusto aukeaa osoitteessa http://localhost:4321.

Julkaistava versio:

```bash
npm run build
npm run preview
```

Valmis sivusto syntyy kansioon `dist`.

## Mitä muokataan mistäkin

| Asia | Tiedosto |
| --- | --- |
| Puhelin, sähköposti, Y-tunnus, toiminta-alue, kalenteri | `src/data/company.ts` |
| Palveluiden tekstit | `src/content/palvelut/*.md` |
| Ilmalämpöpumpun hintahaarukat sekä välioven ja rännien yksikköhinnat | `src/data/prices.ts` |
| Google-arvostelut ja arvostelulinkki | `src/data/reviews.ts` |
| Kohdekuvat | `src/content/referenssit/` |
| Etusivun iso kuva | `src/assets/hero.jpg` |
| Tietosuojaseloste | `src/pages/tietosuoja.astro` |
| Lomakkeen vastaanottaja | `src/data/company.ts` (`email`) |

Tekstejä ei ole keksitty asiakaspalautteiksi, hinnoiksi, sertifikaateiksi tai perustamisvuodeksi. Puuttuva sisältö jätetään pois sivulta, kunnes se on oikeaa.

## Referenssin lisääminen

1. Kopioi `src/content/referenssit/esimerkki.md` uudelle nimelle, esimerkiksi `terassi-nokia.md`.
2. Aseta `placeholder: false`.
3. Täytä otsikko, paikkakunta, kuvaus ja kuvan alt-teksti.
4. Tallenna kuva samaan kansioon ja lisää rivi `image: ./kuva.jpg`.
5. Älä keksi asiakkaan nimeä tai arvosanaa.

Malli jää sivulta pois niin kauan kuin sen `placeholder` on `true`. Etusivu, valikko ja sivukartta näyttävät referenssit vasta, kun vähintään yhdellä kohteella on `placeholder: false`.

## Ajanvarauskalenteri

Ajanvarauskalenterin osoite on kentässä `bookingUrl` tiedostossa `src/data/company.ts`. Tyhjä kenttä ei näytä paikkamerkkiä: sivulla `/varaa` on soitto ja tarjouspyyntö. Täytetty kenttä upottaa kalenterin.

## Lomake

Lomake lähettää tarjouspyynnön osoitteeseen eelis.sivula@sivutek.com palvelun FormSubmit kautta. Osoite ei ole lomakkeen HTML-koodissa. Roskapostisuojana on honeypot-kenttä. Jos lähetys epäonnistuu, kävijälle näytetään puhelinnumero ja valmis sähköpostilinkki, jossa lomakkeen tiedot ovat mukana.

Ennen julkaisua:

1. Aja sivusto ja lähetä yksi testitarjouspyyntö.
2. Avaa Eelis Sivulan postilaatikko ja vahvista FormSubmitin aktivointiviesti. Viestissä on satunnainen tunniste.
3. Liitä tunniste kenttään `formSubmitAlias` tiedostossa `src/data/company.ts` ja rakenna sivu uudelleen. Sen jälkeen lomakkeen osoitteessa ei näy sähköpostia.
4. Lähetä toinen testi ja tarkista, että viesti saapuu.

Jos vaihdat lomakepalvelun (esimerkiksi Web3Forms tai Netlify Forms), aseta osoite tiedostoon `.env`:

```
PUBLIC_FORM_ENDPOINT=
```

Päivitä samalla `formProviderName` ja `formProviderUrl` sekä tietosuojaselosteen vastaanottajat, jotta seloste pysyy totena.

## Julkaisu

Sivusto sopii Cloudflare Pagesiin tai Netlifyyn.

- Build-komento: `npm run build`
- Julkaisukansio: `dist`
- Node: 22

Testaa sivu ensin hostingin oletusosoitteessa. Ohjaa domain vasta, kun sivu näyttää oikealta.

### Domain

Nykyinen sivu on Google Sitesissa. Pääosoite on `https://www.sivutek.com`. Ohjaa myös `sivutek.com` samaan paikkaan.

Älä muuta sähköpostin tietueita, kun domain siirretään uuteen hostiin. Jätä ennalleen ainakin:

- MX-tietueet
- SPF-, DKIM- ja DMARC-txt-tietueet
- autodiscover / autoconfig, jos sähköposti käyttää niitä

Muuten osoite eelis.sivula@sivutek.com lakkaa toimimasta. Vaihda vain ne A-, AAAA- tai CNAME-tietueet, jotka hosting ohjeistaa sivustoa varten.

### Google Business Profile

1. Avaa [business.google.com](https://business.google.com/).
2. Lisää yritys Sivutek. Jos varsinaista toimipistettä ei ole, merkitse yritys palvelualueella toimivaksi. Älä keksi katuosoitetta.
3. Palvelualue: Nokia ja muu Pirkanmaa. Puhelin, sivusto ja Y-tunnus samoina kuin sivulla.
4. Vahvista yritys Googlen ohjeella.
5. Lisää palvelut ja kuvat, kun kuvat ovat olemassa.

### Google Search Console

Kun domain osoittaa uuteen sivuun:

1. Avaa [search.google.com/search-console](https://search.google.com/search-console).
2. Lisää ominaisuus `https://www.sivutek.com`.
3. Vahvista omistajuus DNS-tietueella tai HTML-tiedostolla.
4. Lähetä sivukartta `https://www.sivutek.com/sitemap-index.xml`.

### Kävijämittaus

Seurantaa ei ole päällä, eikä sivusto aseta evästeitä. Jos haluat nähdä kävijämäärät, luo ilmainen Cloudflare Web Analytics -mittari ja liitä sen tunniste kenttään `analyticsToken` tiedostossa `src/data/company.ts`. Päivitä sen jälkeen tietosuojaseloste: kerro, että sivusto käyttää evästeetöntä kävijämittausta.

## Ennen julkaisua

- [ ] Logo, jos yrityksellä on oma (nyt käytössä on tekstilogo)
- [ ] Etusivun iso kuva on nyt referenssikeittiö (`src/assets/hero.jpg`). Vaihda se, jos haluat toisen kohteen etusivulle.
- [ ] Google-kalenterin ajanvarauslinkki
- [ ] Vahvistus siitä, mitä töitä tehdään ja mitä ei
- [ ] Mahdolliset luvat, pätevyydet tai vastuuvakuutus, jos ne saa mainita
- [ ] FormSubmitin aktivointi ja tunniste kenttään `formSubmitAlias`
- [ ] Domainin ohjaus ilman sähköpostitietueiden muutosta
- [ ] Google Business Profile

Kotitalousvähennys on sivulla yleisenä ohjeena ja linkkinä Verohallintoon. Prosentteja ei ole kirjattu, koska ne vaihtuvat.
