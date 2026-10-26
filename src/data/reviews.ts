export interface GoogleReview {
  author: string;
  rating: number;
  text: string;
}

/** Luettu Googlesta 27.10.2026. Älä keksi arvosteluja tähän. */
export const googleReviews = {
  rating: 5,
  count: 3,
  listingUrl:
    "https://www.google.com/maps/place/Sivutek/@61.4826126,23.4484579,17z/data=!4m8!3m7!1s0x468ed711c497efc7:0x1b07991955a7fa44!8m2!3d61.4826126!4d23.4484579!9m1!1b1!16s%2Fg%2F11yw5z2yf6?hl=fi",
  writeUrl:
    "https://www.google.com/maps/place/Sivutek/@61.4826126,23.4484579,17z/data=!3m1!4b1!4m6!3m5!1s0x468ed711c497efc7:0x1b07991955a7fa44!8m2!3d61.4826126!4d23.4484579!16s%2Fg%2F11yw5z2yf6?hl=fi",
  items: [
    {
      author: "Helmi Karhumaa",
      rating: 5,
      text: "Asiallinen ja osaava tekijä. Asensi meille huonekohtaisen ilmanvaihtoräppänän yläkertaan ja uusi vanhan eteisen lattian eristeineen. Huolellista jälkeä.",
    },
    {
      author: "Juho Hannuksela",
      rating: 5,
      text: "Homma toimi hienosti! Tilasin sisäremonttipalvelun. Työt tuli hoidettua ripeästi ja ammattitaitoisesti 👍",
    },
    {
      author: "noora tuomaala",
      rating: 5,
      text: "Keittiöremontin putkityöt onnistuivat mainiosti, voin suositella palvelua!",
    },
  ] satisfies GoogleReview[],
};
