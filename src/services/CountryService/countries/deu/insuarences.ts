// YEAR 2020

import { PaymentValue, withAccurencyFormating } from './utils';

// https://taxsummaries.pwc.com/germany/individual/other-taxes
export const getPensionInsuranceValue = (value: number): PaymentValue => {
  const procent = 0.186;
  // max value from which pension insuarence payed is 82800
  const valueForCalculation = Math.min(82800, value); // can be 77400 for new states
  const paymentToPensioInsuarence = procent * valueForCalculation;

  return {
    employee: withAccurencyFormating(paymentToPensioInsuarence / 2),
    employer: withAccurencyFormating(paymentToPensioInsuarence / 2),
  };
};

// https://taxsummaries.pwc.com/germany/individual/other-taxes
export const getUnemploymentInsuranceValue = (value: number): PaymentValue => {
  const procent = 0.024;
  // max value from which pension insuarence payed is 82800
  const valueForCalculation = Math.min(82800, value); // can be 77400 for new states
  const paymentToUnemploymentInsuarence = procent * valueForCalculation;

  return {
    employee: withAccurencyFormating(paymentToUnemploymentInsuarence / 2),
    employer: withAccurencyFormating(paymentToUnemploymentInsuarence / 2),
  };
};

// https://taxsummaries.pwc.com/germany/individual/other-taxes
// https://www.bbx.de/grossnet-wage-calculator-germany/
export const getNurseCareInsuranceValue = (value: number): PaymentValue => {
  // max value from which pension insuarence payed is 56250
  const valueForCalculation = Math.min(56250, value);

  return {
    employee: withAccurencyFormating(valueForCalculation * (0.01525 + 0.0025)), // additional 0.0025 if person do not has children
    employer: withAccurencyFormating(valueForCalculation * 0.01525),
  };
};

// https://taxsummaries.pwc.com/germany/individual/other-taxes
// https://www.bbx.de/grossnet-wage-calculator-germany/
export const getHealthInsuranceValue = (
  value: number,
  surcharge: number = 0.01 // 0.01 - avarage health insuarence surcharge
): PaymentValue => {
  const procent = 0.146 + surcharge;
  // max value from which pension insuarence payed is 56250
  const valueForCalculation = Math.min(56250, value);
  const paymentToHealthInsuarence = procent * valueForCalculation;

  return {
    employee: withAccurencyFormating(paymentToHealthInsuarence / 2), // additional 0.0025 if person do not has children
    employer: withAccurencyFormating(paymentToHealthInsuarence / 2),
  };
};

export const getAccidentInsuranceValue = (value: number): PaymentValue => {
  // max value from which pension insuarence payed is 56250
  const valueForCalculation = Math.min(56250, value);
  return {
    employee: 0, // additional 0.0025 if person do not has children
    employer: valueForCalculation * 0.011, // avarage value
  };
};
