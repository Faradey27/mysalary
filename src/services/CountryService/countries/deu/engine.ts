import {
  getHealthInsuranceValue,
  getNurseCareInsuranceValue,
  getPensionInsuranceValue,
  getUnemploymentInsuranceValue,
} from './insuarences';
import { getIncomeTaxValue, getSolidarityTaxValue } from './taxes';
import { withAccurencyFormating } from './utils';

const LUMP_SUM = 1000 + 36;

// / http://www.parmentier.de/steuer/index.php?site=lohnsteuerrechnerjavamitb

export const getIncomeTaxDeductions = (value: number) => {
  const employeePensionValue = getPensionInsuranceValue(value).employee;
  const employerPensionValue = getPensionInsuranceValue(value).employer;
  const healthInsuarenceValue = getHealthInsuranceValue(value).employee;
  const nurseCareInsuarenceValue = getNurseCareInsuranceValue(value).employee;
  const unemploymentInsuarenceValue = getUnemploymentInsuranceValue(value)
    .employee;

  // for 2020 year, multiplier is 0.9
  const pensionTaxDedaction =
    (employeePensionValue + employerPensionValue) * 0.9 - employerPensionValue;

  const healthInsuarencePart = (0.146 + 0.01) / 2 - 0.003;
  const careInsuarencePart = 0.01525 + 0.0025;

  const healthDeduction =
    (healthInsuarencePart + careInsuarencePart) * Math.min(56250, value);

  const otherSocialDeductions =
    healthDeduction >= 1900 ? healthDeduction : Math.min(1900, value * 0.12);

  console.log(otherSocialDeductions);

  return pensionTaxDedaction + otherSocialDeductions + LUMP_SUM;
};

// validated with https://www.steuergo.de/en/rechner/brutto_netto_rechner
export const getAnnualNetIncome = (value: number) => {
  const taxDeductions = getIncomeTaxDeductions(value);
  const employeePensionValue = getPensionInsuranceValue(value).employee;
  const healthInsuarenceValue = getHealthInsuranceValue(value).employee;
  const nurseCareInsuarenceValue = getNurseCareInsuranceValue(value).employee;
  const unemploymentInsuarenceValue = getUnemploymentInsuranceValue(value)
    .employee;

  const totalSocialPayment =
    employeePensionValue +
    healthInsuarenceValue +
    nurseCareInsuarenceValue +
    unemploymentInsuarenceValue;

  const taxableIncome = value - taxDeductions;

  console.log(taxableIncome, '---------', taxDeductions);

  const incomeTaxValue = getIncomeTaxValue(taxableIncome).employee;
  console.log(incomeTaxValue, 'INCOME TAX', taxableIncome);
  const solidarityTaxValue = getSolidarityTaxValue(incomeTaxValue).employee;

  const annualNetIncome =
    value - totalSocialPayment - incomeTaxValue - solidarityTaxValue;

  return withAccurencyFormating(annualNetIncome);
};
