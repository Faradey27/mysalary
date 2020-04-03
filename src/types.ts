import CurrencyService from './services/CurrencyService';
import CountryService from './services/CountryService';

export interface AppServices {
  currencyService: CurrencyService;
  countryService: CountryService;
}

export enum Currency {
  EUR = 'EUR',
  USD = 'USD',
}

export enum Country {
  DEU = 'DEU',
  EST = 'EST',
}
