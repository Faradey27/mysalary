import {
  getHealthInsuranceValue,
  getNurseCareInsuranceValue,
  getPensionInsuranceValue,
  getUnemploymentInsuranceValue,
} from './insuarences';
import { getIncomeTaxValue, getSolidarityTaxValue } from './taxes';
import { withAccurencyFormating } from './utils';

const LUMP_SUM = 50;

// validated with https://www.steuergo.de/en/rechner/brutto_netto_rechner
export const getAnnualNetIncome = (value: number) => {
  const employeePensionValue = getPensionInsuranceValue(value).employee;
  const employerPensionValue = getPensionInsuranceValue(value).employer;
  const healthInsuarenceValue = getHealthInsuranceValue(value).employee;
  const nurseCareInsuarenceValue = getNurseCareInsuranceValue(value).employee;
  const unemploymentInsuarenceValue = getUnemploymentInsuranceValue(value)
    .employee;

  const totalSocialPayment =
    employeePensionValue +
    healthInsuarenceValue +
    nurseCareInsuarenceValue +
    unemploymentInsuarenceValue;

  const pensionTaxDedaction =
    employeePensionValue + employerPensionValue * 0.9 - employerPensionValue;

  const dedactableIncome =
    nurseCareInsuarenceValue +
    unemploymentInsuarenceValue +
    (healthInsuarenceValue - healthInsuarenceValue * 0.04) +
    pensionTaxDedaction;

  console.log('nurseCareInsuarenceValue: ', nurseCareInsuarenceValue);
  console.log('unemploymentInsuarenceValue: ', unemploymentInsuarenceValue);

  const taxableIncome = value - dedactableIncome - LUMP_SUM;
  const incomeTaxValue = getIncomeTaxValue(taxableIncome).employee;
  const solidarityTaxValue = getSolidarityTaxValue(incomeTaxValue).employee;

  const annualNetIncome =
    value - totalSocialPayment - incomeTaxValue - solidarityTaxValue;

  console.log(incomeTaxValue, totalSocialPayment);

  return withAccurencyFormating(annualNetIncome);
};
