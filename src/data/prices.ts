export type CalculatorId = "valiovi" | "ranni";

/** Asennetun ilmalämpöpumpun julkaistut haarukat. Putkimetrille tai poraukselle ei ole erillistä eurohintaa. */
export const heatPumpPrices = {
  title: "Ilmalämpöpumpun hintalaskuri",
  heating: { maxArea: 150, low: 2000, high: 3000 },
  cooling: { maxArea: 100, low: 1600, high: 2000 },
  area: { min: 1, step: 1, initial: 100 },
  pipe: { min: 0.5, step: 0.5, initial: 3 },
};

export interface CalculatorConfig {
  title: string;
  question: string;
  hint: string;
  unit: "m" | "kpl";
  unitNoun: string;
  step: number;
  min: number;
  initial: number;
  /** Euroa per metri tai per ovi. null = summaa ei näytetä, kunnes hinta on vahvistettu. */
  unitPrice: number | null;
}

/**
 * Väliovi- ja rännilaskurit käyttävät vain näitä lukuja.
 * Kun hinta on tiedossa, vaihda null luvuksi, esimerkiksi 45.
 */
export const calculators: Record<CalculatorId, CalculatorConfig> = {
  valiovi: {
    title: "Väliovien asennuksen hintalaskuri",
    question: "Asennettavien väliovien määrä",
    hint: "Hinta muodostuu asennettavien väliovien määrästä. Oven oma hinta ei sisälly arvioon.",
    unit: "kpl",
    unitNoun: "ovea",
    step: 1,
    min: 1,
    initial: 1,
    unitPrice: null,
  },
  ranni: {
    title: "Rännien puhdistuksen hintalaskuri",
    question: "Puhdistettavien rännien pituus",
    hint: "Laske rännien juoksumetrit. Hinta muodostuu tästä pituudesta.",
    unit: "m",
    unitNoun: "metriä",
    step: 1,
    min: 1,
    initial: 10,
    unitPrice: null,
  },
};
