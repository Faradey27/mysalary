import { CountryInterface, Currency } from '../../../types';

// all calcuations happen per year
class Deu implements CountryInterface {
  private baseCurrency: Currency = Currency.EUR;

  private employeeTaxes = {
    pensionTax: 0.02,
    unemploymentTax: 0.016,
    personalIncomeTax: 0.2,
  };

  private taxFree = {
    taxFreeIncome: 6000,
    maxSalaryToGetTaxReduction: 25000,
    maxSalaryToGetFullTaxReduction: 14400,
  };

  private minSalary = {
    value: 24000,
    currency: Currency.EUR,
  };

  private maxSalary = {
    value: 150000,
    currency: Currency.EUR,
  };

  private medianSalary = {
    value: 49000,
    currency: Currency.EUR,
  };

  public getNetIncome = (value: number) => {
    const notTaxedValue = this.getTaxFreeIncome(value);
    const afterPayingPension = this.applyPensionTaxes(value);
    const afterPayingUnemploymentAndPension = this.applyUnemploymentTaxes(
      afterPayingPension
    );
    return (
      this.applyPersonalIncomeTax(afterPayingUnemploymentAndPension) +
      notTaxedValue
    );
  };

  public getBaseCurrency = () => this.baseCurrency;

  public getCountryData = () => ({
    min: this.minSalary,
    max: this.maxSalary,
    median: this.medianSalary,
  });

  private applyPersonalIncomeTax = (value: number) =>
    value * (1 - this.employeeTaxes.personalIncomeTax);

  private applyPensionTaxes = (value: number) =>
    value * (1 - this.employeeTaxes.pensionTax);

  private applyUnemploymentTaxes = (value: number) =>
    value * (1 - this.employeeTaxes.unemploymentTax);

  private getTaxFreeIncome = (value: number) =>
    Math.max(
      0,
      this.taxFree.taxFreeIncome -
        (this.taxFree.taxFreeIncome /
          (this.taxFree.maxSalaryToGetTaxReduction -
            this.taxFree.maxSalaryToGetFullTaxReduction)) *
          (value - this.taxFree.maxSalaryToGetFullTaxReduction)
    );
}

export default Deu;
