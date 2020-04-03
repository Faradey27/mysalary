import { createContext, useContext } from 'react';

import { AppServices } from '../types';
import CurrencyService from './CurrencyService';
import CountryService from './CountryService';

export const getAppServices = () => ({
  currencyService: new CurrencyService(),
  countryService: new CountryService(),
})

const AppServicesContext = createContext<AppServices>(getAppServices());

export const useAppServices = () => useContext(AppServicesContext);

export const AppServicesProvider = AppServicesContext.Provider;
