// https://www.emta.ee/eng/tax-free-income
const pensionTax = 0.02;
const unemploymentTax = 0.016;
const personalIncomeTax = 0.2;
const taxFreeIncome = 6000;
const maxSalaryToGetTaxReduction = 25000;
const maxSalaryToGetFullTaxReduction = 14400;

const getTaxDetaction = (value: number) => {
  return taxFreeIncome - taxFreeIncome / (maxSalaryToGetTaxReduction - maxSalaryToGetFullTaxReduction) * (value - maxSalaryToGetFullTaxReduction);
}



const getNetIncome = (value: number) => {
  const notTaxedValue = Math.max(0, getTaxDetaction(value));
  const afterPayingPension = value * (1 - pensionTax);
  const afterPayingUnemploymentAndPension =
    afterPayingPension * (1 - unemploymentTax);
  return afterPayingUnemploymentAndPension * (1 - personalIncomeTax) + notTaxedValue;
};

export default {
  getNetIncome,
};
