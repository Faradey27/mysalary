import { useState, memo, useCallback } from 'react';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core';

import SalaryRange from './components/SalaryRange';
import SalaryResults from './components/SalaryResults';
import CurrencySelector from './components/CurrencySelector';
import { Currency, Country } from './types';
import CountrySelector from './components/CountrySelector';

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
}));

const getDefaultSalaryValue = (min: number, max: number) =>
  Math.floor((max - min) * 0.39);

const SalaryCalculator = () => {
  const classes = useStyles();

  const minValue = 24;
  const maxValue = 150;

  const [salaryValue, setSalaryValue] = useState(
    getDefaultSalaryValue(minValue, maxValue)
  );
  const [currency, setCurrency] = useState(Currency.EUR);
  const [country, setCountry] = useState(Country.DEU);

  const handleCurrencyChange = useCallback((value: Currency) => {
    setCurrency(value);
    setSalaryValue();
  });

  return (
    <FormControl component="form" className={classes.form}>
      <CountrySelector
        className={classes.countrySelector}
        value={country}
        onChange={setCountry}
      />
      <SalaryRange
        currency={currency}
        value={salaryValue}
        minValue={minValue}
        maxValue={maxValue}
        className={classes.salaryRange}
        onChange={setSalaryValue}
      />
      <CurrencySelector value={currency} onChange={handleCurrencyChange} />
      <SalaryResults currency="€" salaryValue={salaryValue} />
    </FormControl>
  );
};

export default memo(SalaryCalculator);
