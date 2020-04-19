import { memo, useEffect, useState } from 'react';
import { FormControl, makeStyles } from '@material-ui/core';
import clsx from 'clsx';

import { useAppServices } from '../../services';
import { Country, Currency, SalaryPeriod } from '../../types';
import CountrySelector from './components/CountrySelector';
import CurrencySelector from './components/CurrencySelector';
import SalaryDetails from './components/SalaryDetails';
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
  const { currencyService, countryService } = useAppServices();

  const [country, setCountry] = useState(defaultCountry);
  const [currency, setCurrency] = useState(defaultCurrency);
  const [salaryPeriodValue, setSalaryPeriodValue] = useState(
    SalaryPeriod.ANNUALY
  );
  const {
    grossSalaryValue,
    netSalaryValue,
    setGrossSalaryValue,
  } = useSalaryValue(country, currency, salaryPeriodValue);

  // on mount we re-freshing our data about currencies
  useEffect(() => {
    currencyService.refreshCurrencyData();
  }, [currencyService]);

  const salaryInfo = countryService.getSalaryInfo(
    country,
    grossSalaryValue,
    salaryPeriodValue
  );

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
        salaryPeriod={salaryPeriodValue}
        onChange={setGrossSalaryValue}
        onChangeSalaryPeriod={setSalaryPeriodValue}
      />
      <CurrencySelector
        className={classes.field}
        value={currency}
        onChange={setCurrency}
      />
      <SalaryNotes />
      <SalaryResults
        className={clsx(classes.results, classes.field)}
        currency={currencyService.getSign(currency)}
        salaryValue={netSalaryValue}
      />
      {salaryInfo.length ? (
        <SalaryDetails
          currency={currencyService.getSign(currency)}
          salaryInfo={salaryInfo}
        />
      ) : null}
    </FormControl>
  );
};

export default memo(SalaryCalculator);
