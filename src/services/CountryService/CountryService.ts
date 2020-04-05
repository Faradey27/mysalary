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
  public getCountryData = (countryCode: Country) => {
    const currentCountry = countries.get(countryCode);
    if (!currentCountry) {
      throw new Error('Unknown country');
    }
    return currentCountry.getCountryData();
  };

  public getNetIncome = (countryCode: Country, value: number) => {
    const currentCountry = countries.get(countryCode);
    if (!currentCountry) {
      throw new Error('Unknown country');
    }

    return currentCountry.getNetIncome(value);
  };
}

export default CountryService;
