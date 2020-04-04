const pensionTax = 0.02;
const unemploymentTax = 0.016;
const personalIncomeTax = 0.2;

const getNetIncome = (value: number) => {
  const afterPayingPension = value * (1 - pensionTax);
  const afterPayingUnemploymentAndPension =
    afterPayingPension * (1 - unemploymentTax);
  return afterPayingUnemploymentAndPension * (1 - personalIncomeTax);
};

export default {
  getNetIncome,
};
