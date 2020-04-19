import { memo, useEffect, useState } from 'react';
import { FormControl, makeStyles } from '@material-ui/core';

import { useAppServices } from '../../services';
import { Country, Currency } from '../../types';
import CountrySelector from './components/CountrySelector';
import CurrencySelector from './components/CurrencySelector';
import SalaryField from './components/SalaryField';
import SalaryNotes from './components/SalaryNotes';
import SalaryResults from './components/SalaryResults';
import { useSalaryValue } from './useSalaryValue';

const useStyles = makeStyles(() => ({
  form: {
    width: '100%',
  },
  field: {
    marginBottom: 24,
  },
  results: {
    marginTop: 4,
  },
}));

interface SalaryCalculatorProps {
  defaultCountry: Country;
  defaultCurrency: Currency;
}

const SalaryCalculator = ({
  defaultCountry,
  defaultCurrency,
}: SalaryCalculatorProps) => {
  const classes = useStyles();
  const { currencyService } = useAppServices();

  const [country, setCountry] = useState(defaultCountry);
  const [currency, setCurrency] = useState(defaultCurrency);
  const {
    grossSalaryValue,
    netSalaryValue,
    setGrossSalaryValue,
  } = useSalaryValue(country, currency);

  // on mount we re-freshing our data about currencies
  useEffect(() => {
    currencyService.refreshCurrencyData();
  }, [currencyService]);

  return (
    <FormControl component="form" className={classes.form}>
      <CountrySelector
        className={classes.field}
        value={country}
        onChange={setCountry}
      />
      <SalaryField
        className={classes.field}
        value={grossSalaryValue}
        onChange={setGrossSalaryValue}
      />
      <CurrencySelector
        className={classes.field}
        value={currency}
        onChange={setCurrency}
      />
      <SalaryNotes />
      <SalaryResults
        className={classes.results}
        currency={currencyService.getSign(currency)}
        salaryValue={netSalaryValue}
      />
    </FormControl>
  );
};

export default memo(SalaryCalculator);
