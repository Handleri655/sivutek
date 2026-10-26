import type { ImageMetadata } from "astro";
import keittio from "../content/referenssit/keittio-saareke.jpg";
import terassi from "../content/referenssit/terassi.jpg";
import suihku from "../content/referenssit/suihku.jpg";
import ovi from "../content/referenssit/valiovi.jpg";

/** Vain olemassa olevia kohdekuvia. Ilmalämpöpumpulle ja ränneille ei ole omaa kuvaa. */
export const serviceImages: Record<string, { image: ImageMetadata; alt: string }> = {
  remontit: {
    image: keittio,
    alt: "Keittiö, jossa marmorikuvioinen saareke, vihreät alakaapit, valkoiset yläkaapit, kalanruotoparketti ja puurimakatto.",
  },
  rakennustyot: {
    image: terassi,
    alt: "Ruskea puuterassi vaalean pystypaneloidun seinän edessä.",
  },
  "lvi-tyot": {
    image: suihku,
    alt: "Kaksi kromista sadesuihkua harmaalla laattaseinällä.",
  },
  "valiovien-asennus": {
    image: ovi,
    alt: "Vaalea peiliovi valkoisessa karmissa.",
  },
};

export const featuredReference = {
  title: "Keittiöasennus",
  summary: "Asennettu keittiö: saareke, vihreät alakaapit, valkoiset yläkaapit ja rimakatto.",
  alt: "Keittiö, jossa marmorikuvioinen saareke, vihreät alakaapit, valkoiset yläkaapit, kalanruotoparketti ja puurimakatto.",
  image: keittio,
  href: "/referenssit",
};
