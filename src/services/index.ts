import { createContext, useContext } from 'react';

import { AppServices } from '../types';
import Currency from './Currency';

const AppServicesContext = createContext<AppServices>({
  currency: new Currency(),
});

export const useAppServices = useContext(AppServicesContext);

export const AppServicesProvider = AppServicesContext.Provider;
