import { CountryInterface, Currency } from '../../../types';

// all calcuations happen per year
class Deu implements CountryInterface {
  private baseCurrency: Currency = Currency.EUR;

  private employeeTaxes = {
    pensionTax: 0.02,
    unemploymentTax: 0.016,
    personalIncomeTax: [
      {
        from: 0,
        to: 9408,
        value: 0,
      },
      {
        from: 9409,
        to: 57051,
        value: 0.2, // avarage
      },
      {
        from: 57052,
        to: 270500,
        value: 0.42,
      },
      {
        from: 270501,
        to: Infinity,
        value: 0.45,
      },
    ],
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
    return this.applyPersonalIncomeTax(value);
  };

  public getBaseCurrency = () => this.baseCurrency;

  public getCountryData = () => ({
    min: this.minSalary,
    max: this.maxSalary,
    median: this.medianSalary,
  });

  private applyPersonalIncomeTax = (value: number) => {
    let taxes = 0;
    const incometaxes = this.employeeTaxes.personalIncomeTax;

    if (value > incometaxes[3].from) {
      const taxedValue = value - incometaxes[3].from;
      taxes += taxedValue * incometaxes[3].value;
    }
    if (value > incometaxes[2].from) {
      const taxedValue =
        Math.min(incometaxes[2].to, value) - incometaxes[2].from;
      taxes += taxedValue * incometaxes[2].value;
    }
    if (value > incometaxes[1].from) {
      const taxedValue =
        Math.min(incometaxes[1].to, value) - incometaxes[1].from;
      taxes += taxedValue * incometaxes[1].value;
    }
    if (value > incometaxes[0].from) {
      const taxedValue =
        Math.min(incometaxes[0].to, value) - incometaxes[0].from;
      taxes += taxedValue * incometaxes[0].value;
    }

    return value - taxes;
  };
}

export default Deu;
