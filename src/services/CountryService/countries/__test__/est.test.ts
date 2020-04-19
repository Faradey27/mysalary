import Est from '../est';

const salaryDataset = [
  { value: 1000, exp: 964 },
  { value: 5000, exp: 4820 },
  { value: 6000, exp: 5784 },
  { value: 12000, exp: 10454 },
  { value: 20000, exp: 15990 },
  { value: 24000, exp: 18622 },
  { value: 50000, exp: 38560 },
  { value: 50000, exp: 38560 },
  { value: 150000, exp: 115680 },
  { value: 300000, exp: 231360 },
];

describe('Country service: Estonia', () => {
  salaryDataset.forEach((salary) => {
    it(`annual gross salary: ${salary.value}, annual net salary: ${salary.exp}`, () => {
      const est = new Est();

      expect(est.getNetIncome(salary.value)).toBe(salary.exp);
    });
  });
});
