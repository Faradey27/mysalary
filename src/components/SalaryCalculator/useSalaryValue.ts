import { useEffect, useMemo, useState } from 'react';

import { usePrevious } from '../../hooks/usePrevious';
import { useAppServices } from '../../services';
import { Country, Currency } from '../../types';

export const useSalaryValue = (country: Country, currency: Currency) => {
  const { countryService, currencyService } = useAppServices();

  const prevCurrency = usePrevious<Currency>(currency);

  const countryData = countryService.getCountryData(country);
  const defaultGrossSalaryValue = currencyService.convert(
    countryData.medianSalary.value,
    countryData.medianSalary.currency,
    currency
  );

  const [grossSalaryValue, setGrossSalaryValue] = useState(
    defaultGrossSalaryValue
  );

  useEffect(() => {
    // if currency change, we re-calculate numbers to new currency
    if (currency !== prevCurrency) {
      setGrossSalaryValue(
        currencyService.convert(grossSalaryValue, prevCurrency, currency)
      );
    }
  }, [grossSalaryValue, currency, prevCurrency, currencyService]);

  // calculate NET salary
  const netSalaryValue = useMemo(() => {
    const baseCurrencyForCountry = countryService.getBaseCurrency(country);
    const salaryValueInBaseCurrency = currencyService.convert(
      grossSalaryValue,
      currency,
      baseCurrencyForCountry
    );
    const netSalaryInBaseCurrency = countryService.getNetIncome(
      country,
      salaryValueInBaseCurrency
    );
    return currencyService.convert(
      netSalaryInBaseCurrency,
      baseCurrencyForCountry,
      currency
    );
  }, [grossSalaryValue, country, currency, countryService, currencyService]);

  return { grossSalaryValue, netSalaryValue, setGrossSalaryValue };
};
