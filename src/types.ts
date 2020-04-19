export enum Currency {
  EUR = 'EUR',
  USD = 'USD',
}

export enum Country {
  DEU = 'DEU',
  EST = 'EST',
}

export enum SalaryPeriod {
  MONTHLY = 'MONTHLY',
  ANNUALY = 'ANNUALY',
}

export interface CountryData {
  minSalary: {
    currency: Currency;
    value: number;
  };
  maxSalary: {
    currency: Currency;
    value: number;
  };
  medianSalary: {
    currency: Currency;
    value: number;
  };
}

export interface SalaryInfo {
  name: string;
  value: number;
  highlight?: boolean;
}

export interface CountryInterface {
  getSalaryInfo: (value: number, salaryPeriod: SalaryPeriod) => SalaryInfo[];
  getCountryData: () => CountryData;
  getBaseCurrency: () => Currency;
  getNetIncome: (value: number) => number;
}
