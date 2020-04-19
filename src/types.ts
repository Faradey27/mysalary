export enum Currency {
  EUR = 'EUR',
  USD = 'USD',
}

export enum Country {
  DEU = 'DEU',
  EST = 'EST',
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

export interface CountryInterface {
  getCountryData: () => CountryData;
  getBaseCurrency: () => Currency;
  getNetIncome: (value: number) => number;
}
