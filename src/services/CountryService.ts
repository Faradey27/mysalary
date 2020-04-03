import countryData from './countryData.json';
import { Country, Currency } from '../types';

interface CountryData {
  [key: string]: {
    min: {
      currency: Currency,
      value: number
    },
    max: {
      currency: Currency,
      value: number
    }
    median: {
      currency: Currency,
      value: number
    }
  }
}

class CountryService {
  private results: CountryData = countryData as CountryData;

  public getCountryData = (countryCode: Country) => this.results[countryCode];
}

export default CountryService;


