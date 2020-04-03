import { useState, memo, useCallback, useMemo } from 'react';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core';

import SalaryRange from './components/SalaryRange';
import SalaryResults from './components/SalaryResults';
import CurrencySelector from './components/CurrencySelector';
import SalaryNotes from './components/SalaryNotes';
import CountrySelector from './components/CountrySelector';
import { useAppServices } from '../../services';
import { Currency, Country } from '../../types';

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
  ]);
  const [salaryValue, setSalaryValue] = useState(
    currencyService.convert(
      countryData.median.value,
      countryData.median.currency,
      currency
    )
  );

  const handleCurrencyChange = useCallback(
    (nextCurrency: Currency) => {
      setSalaryValue(
        currencyService.convert(salaryValue, currency, nextCurrency)
      );
      setCurrency(nextCurrency);
    },
    [salaryValue, currency]
  );

  const handleCountryChange = useCallback(
    (value) => {
      setCountry(value);
      const countryData = countryService.getCountryData(value);
      const newSalaryValue = currencyService.convert(
        countryData.median.value,
        countryData.median.currency,
        currency
      );
      setSalaryValue(newSalaryValue);
    },
    [countryService, currency]
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
        minValue={countryData.min.value}
        maxValue={countryData.max.value}
        className={classes.salaryRange}
        onChange={setSalaryValue}
      />
      <CurrencySelector value={currency} onChange={handleCurrencyChange} />
      <SalaryNotes className={classes.notes} />
      <SalaryResults
        className={classes.results}
        currency={currencyService.getSign(currency)}
        salaryValue={salaryValue}
      />
    </FormControl>
  );
};

export default memo(SalaryCalculator);
