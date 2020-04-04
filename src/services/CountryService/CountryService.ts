import countryData from '../countryData.json';
import { Country, Currency } from '../../types';

import countries from './countries';

interface CountryData {
  [key: string]: {
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
  };
}

class CountryService {
  private results: CountryData = countryData as CountryData;

  public getCountryData = (countryCode: Country) => this.results[countryCode];

  public getNetIncome = (countryCode: Country, value: number) =>
    countries[countryCode] && countries[countryCode].getNetIncome
      ? countries[countryCode].getNetIncome(value)
      : value;
}

export default CountryService;
