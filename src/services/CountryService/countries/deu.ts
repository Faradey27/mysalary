import { CountryInterface, Currency } from '../../../types';

// https://en.wikipedia.org/wiki/Taxation_in_Germany#Income_tax_rates_in_2019
// https://www.steuergo.de/en/rechner/brutto_netto_rechner
// http://www.worldwide-tax.com/germany/germany_tax.asp

// all calcuations happen per year
class Deu implements CountryInterface {
  private baseCurrency: Currency = Currency.EUR;

  private employeeTaxes = {
    pensionTax: {
      value: 0.093,
      maxSalary: 78000,
    },
    unemploymentTax: {
      value: 0.015,
      maxSalary: 78000,
    },
    nursingTax: {
      value: 0.015,
      maxSalary: 53000,
    },
    solidarityTax: {
      value: 0.055,
    },
    healthTax: {
      value: 0.073,
      maxSalary: 53000,
      extra: {
        value: 0.009,
      },
    },
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
    const personalIncomeTax = this.getPersonalIncomeTax(value);
    const pensionTax = this.getPensionTax(value);
    const healthTax = this.getHealthTax(value);
    const unemploymentTax = this.getUnemploymentTax(value);
    const nursingTax = this.getNursingTax(value);
    const solidarityTax = this.getSolidarityTax(personalIncomeTax);
    return (
      value -
      personalIncomeTax -
      pensionTax -
      healthTax -
      unemploymentTax -
      nursingTax -
      solidarityTax
    );
  };

  public getBaseCurrency = () => this.baseCurrency;

  public getCountryData = () => ({
    min: this.minSalary,
    max: this.maxSalary,
    median: this.medianSalary,
  });

  private getPersonalIncomeTax = (value: number) => {
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

    return taxes;
  };

  private getPensionTax = (value: number) => {
    const taxedValue =
      value > this.employeeTaxes.pensionTax.maxSalary
        ? this.employeeTaxes.pensionTax.maxSalary
        : value;

    return taxedValue * this.employeeTaxes.pensionTax.value;
  };

  private getUnemploymentTax = (value: number) => {
    const taxedValue =
      value > this.employeeTaxes.unemploymentTax.maxSalary
        ? this.employeeTaxes.unemploymentTax.maxSalary
        : value;

    return taxedValue * this.employeeTaxes.unemploymentTax.value;
  };

  private getNursingTax = (value: number) => {
    const taxedValue =
      value > this.employeeTaxes.nursingTax.maxSalary
        ? this.employeeTaxes.nursingTax.maxSalary
        : value;

    return taxedValue * this.employeeTaxes.nursingTax.value;
  };

  private getHealthTax = (value: number) => {
    const taxedValue =
      value > this.employeeTaxes.healthTax.maxSalary
        ? this.employeeTaxes.healthTax.maxSalary
        : value;

    return (
      taxedValue * this.employeeTaxes.healthTax.value +
      value * this.employeeTaxes.healthTax.extra.value
    );
  };

  private getSolidarityTax = (incomeTaxValue: number) => {
    return incomeTaxValue * this.employeeTaxes.solidarityTax.value;
  };
}

export default Deu;
