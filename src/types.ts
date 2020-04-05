export enum Currency {
  EUR = 'EUR',
  USD = 'USD',
}

export enum Country {
  DEU = 'DEU',
  EST = 'EST',
}

interface CountryData {
  min: {
    currency: Currency;
    value: number;
  };
  max: {
    currency: Currency;
    value: number;
  };
  median: {
    currency: Currency;
    value: number;
  };
}

export interface CountryInterface {
  getCountryData: () => CountryData;
  getBaseCurrency: () => Currency;
  getNetIncome: (value: number) => number;
}
