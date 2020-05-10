// YEAR 2020

import { PaymentValue, withAccurencyFormating } from './utils';

// Formula was found here https://www.bmf-steuerrechner.de/ekst/eingabeformekst.xhtml?ekst-result=true +
// https://taxsummaries.pwc.com/germany/individual/taxes-on-personal-income
// another calculator to revalidate https://www.steuergo.de/en/rechner/einkommensteuer-rechner
export const getIncomeTaxValue = (value: number): PaymentValue => {
  const calculate = () => {
    if (value <= 9408) {
      return 0;
    }

    if (value <= 14532) {
      const y = (value - 9408) / 10000;
      return (972.87 * y + 1400) * y;
    }

    if (value <= 57051) {
      const z = (value - 14532) / 10000;
      return (212.02 * z + 2397) * z + 972.79;
    }

    if (value <= 270500) {
      return 0.42 * value - 8963.74;
    }

    return 0.45 * value - 17078.74;
  };

  return {
    employee: withAccurencyFormating(calculate()),
    employer: 0,
  };
};

// https://taxsummaries.pwc.com/germany/individual/taxes-on-personal-income
export const getSolidarityTaxValue = (value: number): PaymentValue => {
  return {
    employee: value * 0.055,
    employer: 0,
  };
};

// https://taxsummaries.pwc.com/germany/individual/taxes-on-personal-income
export const getChurcheTaxValue = (value: number): PaymentValue => {
  return {
    employee: value * 0.09,
    employer: 0,
  };
};
