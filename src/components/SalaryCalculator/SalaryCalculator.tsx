import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { FormControl, makeStyles } from '@material-ui/core';

import { useAppServices } from '../../services';
import { Country, Currency } from '../../types';
import CountrySelector from './components/CountrySelector';
import CurrencySelector from './components/CurrencySelector';
import SalaryNotes from './components/SalaryNotes';
import SalaryRange from './components/SalaryRange';
import SalaryResults from './components/SalaryResults';

const useStyles = makeStyles(() => ({
  form: {
    width: '100%',
  },
  salaryRange: {
    marginBottom: 24,
  },
  countrySelector: {
    marginBottom: 24,
  },
  notes: {
    marginTop: 24,
  },
  results: {
    marginTop: 4,
  },
}));

const SalaryCalculator = () => {
  const classes = useStyles();
  const { currencyService, countryService } = useAppServices();

  const [currency, setCurrency] = useState(Currency.EUR);
  const [country, setCountry] = useState(Country.DEU);
  const countryData = useMemo(() => countryService.getCountryData(country), [
    country,
    countryService,
  ]);
  const [salaryValue, setSalaryValue] = useState(
    currencyService.convert(
      countryData.median.value,
      countryData.median.currency,
      currency
    )
  );

  useEffect(() => {
    currencyService.refreshCurrencyData();
  }, [currencyService]);

  const handleCurrencyChange = useCallback(
    (nextCurrency: Currency) => {
      setSalaryValue(
        currencyService.convert(salaryValue, currency, nextCurrency)
      );
      setCurrency(nextCurrency);
    },
    [salaryValue, currency, currencyService]
  );

  const handleCountryChange = useCallback(
    (value) => {
      setCountry(value);
      const updatedCountryData = countryService.getCountryData(value);
      const newSalaryValue = currencyService.convert(
        updatedCountryData.median.value,
        updatedCountryData.median.currency,
        currency
      );
      setSalaryValue(newSalaryValue);
    },
    [countryService, currency, currencyService]
  );

  const minValue = currencyService.convert(
    countryData.min.value,
    countryData.min.currency,
    currency
  );

  const maxValue = currencyService.convert(
    countryData.max.value,
    countryData.max.currency,
    currency
  );

  return (
    <FormControl component="form" className={classes.form}>
      <CountrySelector
        className={classes.countrySelector}
        value={country}
        onChange={handleCountryChange}
      />
      <SalaryRange
        currency={currencyService.getSign(currency)}
        value={salaryValue}
        minValue={minValue}
        maxValue={maxValue}
        className={classes.salaryRange}
        onChange={setSalaryValue}
      />
      <CurrencySelector value={currency} onChange={handleCurrencyChange} />
      <SalaryNotes className={classes.notes} />
      <SalaryResults
        className={classes.results}
        currency={currencyService.getSign(currency)}
        salaryValue={countryService.getNetIncome(country, salaryValue)}
      />
    </FormControl>
  );
};

export default memo(SalaryCalculator);
