const email = "eelis.sivula@sivutek.com";
const phoneTel = "+358509182739";

const customEndpoint = import.meta.env.PUBLIC_FORM_ENDPOINT?.trim() ?? "";
// FormSubmitin aktivointiviestin satunnainen tunniste. Kun tämä on täytetty,
// lomakkeen osoitteessa ei näy sähköpostia.
const formSubmitAlias: string = "";

const formEndpoint =
  customEndpoint ||
  (formSubmitAlias
    ? `https://formsubmit.co/ajax/${formSubmitAlias}`
    : `https://formsubmit.co/ajax/${email}`);

export const company = {
  name: "Sivutek",
  slogan: "Rakennustyöt helposti ja luotettavasti",
  description:
    "Sivutek tekee rakennus-, remontointi- ja LVI-työt Nokialta käsin Pirkanmaalla ja sen ympäristössä.",
  ytunnus: "3562067-2",
  contactName: "Eelis Sivula",
  phoneDisplay: "+358 50 918 2739",
  phoneTel,
  smsHref: `sms:${phoneTel}`,
  whatsappHref: `https://wa.me/${phoneTel.replace(/\D/g, "")}`,
  email,
  city: "Nokia",
  region: "Pirkanmaa",
  url: "https://www.sivutek.com",
  area: ["Nokia", "Tampere", "Ylöjärvi", "Pirkkala", "Kangasala", "Lempäälä"],
  // Vanhan sivun ajanvaraus: 30 min / Eelis. Tyhjä kenttä piilottaa kalenterin.
  bookingUrl:
    "https://calendar.google.com/calendar/appointments/schedules/AcZssZ26u7yGYuTKVqcjpIsMR3liqlSAkOwd4SYOdarT-rf27ZwVW0V6u0aZpd1m5Xk_Tvied_EPpITB?gv=true&hl=fi",
  privacyUpdated: "27.10.2026",
  formSubmitAlias,
  formEndpoint,
  formProviderName: "FormSubmit",
  formProviderUrl: "https://formsubmit.co",
  householdDeductionUrl:
    "https://www.vero.fi/henkiloasiakkaat/vahennykset/kotitalousvahennys/",
  // Cloudflare Web Analytics -tunniste. Tyhjä = ei seurantaa.
  analyticsToken: "" as string,
};

export function visibleNavigation(hasReferences: boolean) {
  return navigation.filter((item) => hasReferences || item.href !== "/referenssit");
}

export const navigation = [
  { href: "/palvelut", label: "Palvelut" },
  { href: "/referenssit", label: "Referenssit" },
  { href: "/varaa", label: "Varaa kartoitus" },
  { href: "/yhteystiedot", label: "Yhteystiedot" },
] as const;
