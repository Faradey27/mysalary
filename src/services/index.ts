import { createContext, useContext } from 'react';

import CountryService from './CountryService';
import CurrencyService from './CurrencyService/CurrencyService';

export interface AppServices {
  currencyService: CurrencyService;
  countryService: CountryService;
}

export const getAppServices = () => ({
  currencyService: new CurrencyService(),
  countryService: new CountryService(),
});

const AppServicesContext = createContext<AppServices>(getAppServices());

export const useAppServices = () => useContext(AppServicesContext);

export const AppServicesProvider = AppServicesContext.Provider;
