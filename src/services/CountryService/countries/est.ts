// https://www.emta.ee/eng/tax-free-income

import {
  CountryInterface,
  Currency,
  SalaryInfo,
  SalaryPeriod,
} from '../../../types';

const prepareValue = (value: number, salaryPeriod: SalaryPeriod) => {
  return Math.floor(salaryPeriod === SalaryPeriod.ANNUALY ? value : value / 12);
};

// all calcuations happen per year
class Est implements CountryInterface {
  private baseCurrency: Currency = Currency.EUR;

  private employeePayments = {
    pensionInsuarence: 0.02,
    unemploymentInsuarence: 0.016,
    personalIncomeTax: 0.2,
  };

  private employerPayments = {
    socialTax: 0.33,
    unemploymentInsuarence: 0.008,
  };

  private taxFree = {
    taxFreeIncome: 6000,
    maxSalaryToGetTaxReduction: 25000,
    maxSalaryToGetFullTaxReduction: 14400,
  };

  private minSalary = {
    value: 7000,
    currency: Currency.EUR,
  };

  private maxSalary = {
    value: 140000,
    currency: Currency.EUR,
  };

  private medianSalary = {
    value: 36000,
    currency: Currency.EUR,
  };

  public getNetIncome = (value: number) => {
    const {
      pensionInsuarencePayment,
      unemploymentInsuarenceByEmployeePayment,
      personalIncomeTaxPayment,
    } = this.getPaymentsFromSalary(value);

    const allTaxes =
      pensionInsuarencePayment +
      unemploymentInsuarenceByEmployeePayment +
      personalIncomeTaxPayment;
    return Math.floor(value - allTaxes);
  };

  public getBaseCurrency = () => this.baseCurrency;

  public getCountryData = () => ({
    minSalary: this.minSalary,
    maxSalary: this.maxSalary,
    medianSalary: this.medianSalary,
  });

  public getSalaryInfo = (value: number, salaryPeriod: SalaryPeriod) => {
    const {
      socialTaxPayment,
      unemploymentInsuarenceByEmployerPayment,
      pensionInsuarencePayment,
      unemploymentInsuarenceByEmployeePayment,
      personalIncomeTaxPayment,
    } = this.getPaymentsFromSalary(
      salaryPeriod === SalaryPeriod.ANNUALY ? value : value * 12
    );

    const totalCostOfEmployer =
      value +
      prepareValue(socialTaxPayment, salaryPeriod) +
      prepareValue(unemploymentInsuarenceByEmployerPayment, salaryPeriod);

    return [
      {
        name: `Total cost for employer`,
        value: Math.floor(totalCostOfEmployer),
        highlight: true,
      },
      {
        name: `Social tax(employer)`,
        value: prepareValue(socialTaxPayment, salaryPeriod),
      },
      {
        name: `Unemployment insuarence(employer)`,
        value: prepareValue(
          unemploymentInsuarenceByEmployerPayment,
          salaryPeriod
        ),
      },
      {
        name: `Your gross salary`,
        value: Math.floor(value),
        highlight: true,
      },
      {
        name: `Pension insuarence(employee)`,
        value: prepareValue(pensionInsuarencePayment, salaryPeriod),
      },
      {
        name: `Unemployment insuarence(employee)`,
        value: prepareValue(
          unemploymentInsuarenceByEmployeePayment,
          salaryPeriod
        ),
      },
      {
        name: `Personal income tax(employee)`,
        value: prepareValue(personalIncomeTaxPayment, salaryPeriod),
      },
      {
        name: `Your net salary`,
        value: prepareValue(
          this.getNetIncome(
            salaryPeriod === SalaryPeriod.ANNUALY ? value : value * 12
          ),
          salaryPeriod
        ),
        highlight: true,
      },
    ];
  };

  private getPaymentsFromSalary = (value: number) => {
    const incomeTaxFreeValue = this.getTaxFreeIncome(value);

    const pensionInsuarencePayment = this.getPensionInsuarencePayment(value);
    const unemploymentInsuarenceByEmployeePayment = this.getUnemploymentInsuarencePaymentByEmployee(
      value
    );

    const notTaxableForIncome =
      pensionInsuarencePayment +
      unemploymentInsuarenceByEmployeePayment +
      incomeTaxFreeValue;

    const personalIncomeTaxPayment = this.getPersonalIncomeTaxPayment(
      Math.max(0, value - notTaxableForIncome)
    );

    const unemploymentInsuarenceByEmployerPayment = this.getUnemploymentInsuarencePaymentByEmployer(
      value
    );
    const socialTaxPayment = this.getSocialTaxPayment(value);

    return {
      pensionInsuarencePayment,
      unemploymentInsuarenceByEmployeePayment,
      personalIncomeTaxPayment,
      unemploymentInsuarenceByEmployerPayment,
      socialTaxPayment,
    };
  };

  private getPensionInsuarencePayment = (value: number) => {
    return value * this.employeePayments.pensionInsuarence;
  };

  private getPersonalIncomeTaxPayment = (value: number) => {
    return value * this.employeePayments.personalIncomeTax;
  };

  private getUnemploymentInsuarencePaymentByEmployee = (value: number) => {
    return value * this.employeePayments.unemploymentInsuarence;
  };

  private getUnemploymentInsuarencePaymentByEmployer = (value: number) => {
    return value * this.employerPayments.unemploymentInsuarence;
  };

  private getSocialTaxPayment = (value: number) => {
    return value * this.employerPayments.socialTax;
  };

  private getTaxFreeIncome = (value: number) => {
    const {
      taxFreeIncome,
      maxSalaryToGetTaxReduction,
      maxSalaryToGetFullTaxReduction,
    } = this.taxFree;
    // no tax reduction for large salaries
    if (value > maxSalaryToGetTaxReduction) {
      return 0;
    }
    // if salary less then threshold, you can maximum tax reduction
    if (value < maxSalaryToGetFullTaxReduction) {
      return taxFreeIncome;
    }
    // https://www.emta.ee/eng/tax-free-income
    const notTaxFreeValue =
      (taxFreeIncome /
        (maxSalaryToGetTaxReduction - maxSalaryToGetFullTaxReduction)) *
      (value - maxSalaryToGetFullTaxReduction);

    // for other cases
    return Math.max(0, taxFreeIncome - notTaxFreeValue);
  };
}

export default Est;
