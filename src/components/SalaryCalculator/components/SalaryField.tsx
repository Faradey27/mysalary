import { memo, useCallback } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { FormGroup, makeStyles, MenuItem, TextField } from '@material-ui/core';
import clsx from 'clsx';

import { SalaryPeriod } from '../../../types';

const useStyles = makeStyles(() => ({
  root: {
    flexWrap: 'nowrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  salaryField: {
    marginRight: 24,
    flex: 1,
  },
}));

const messages = defineMessages({
  salary: {
    id: 'salaryCalculator.salary',
    defaultMessage: 'Gross Salary/Wage',
  },
  salaryPeriod: {
    id: 'salaryCalculator.salaryPeriod',
    defaultMessage: 'Period',
  },
  monthly: {
    id: 'salaryCalculator.monthly',
    defaultMessage: 'Monthly',
  },
  annualy: {
    id: 'salaryCalculator.annualy',
    defaultMessage: 'Annualy',
  },
});

interface SalaryFieldProps {
  value: number;
  salaryPeriod: SalaryPeriod;
  className: string;
  onChange: (value: number) => void;
  onChangeSalaryPeriod: (value: SalaryPeriod) => void;
}

const SalaryField = ({
  value,
  salaryPeriod,
  className,
  onChange,
  onChangeSalaryPeriod,
}: SalaryFieldProps) => {
  const intl = useIntl();
  const classes = useStyles();

  const handleChange = useCallback((e) => onChange(Number(e.target.value)), [
    onChange,
  ]);

  const handleSalaryPeriodChange = useCallback(
    (e) => {
      if (
        e.target.value === SalaryPeriod.MONTHLY &&
        salaryPeriod === SalaryPeriod.ANNUALY
      ) {
        onChange(value / 12);
      }
      if (
        e.target.value === SalaryPeriod.ANNUALY &&
        salaryPeriod === SalaryPeriod.MONTHLY
      ) {
        onChange(value * 12);
      }
      onChangeSalaryPeriod(e.target.value);
    },
    [value, salaryPeriod, onChange, onChangeSalaryPeriod]
  );

  return (
    <FormGroup className={clsx(classes.root, className)}>
      <TextField
        type="tel"
        variant="outlined"
        label={intl.formatMessage(messages.salary)}
        value={Math.floor(value)}
        className={classes.salaryField}
        onChange={handleChange}
      />
      <TextField
        select
        variant="outlined"
        label={intl.formatMessage(messages.salaryPeriod)}
        value={salaryPeriod}
        onChange={handleSalaryPeriodChange}
      >
        <MenuItem value={SalaryPeriod.MONTHLY}>
          {intl.formatMessage(messages.monthly)}
        </MenuItem>
        <MenuItem value={SalaryPeriod.ANNUALY}>
          {intl.formatMessage(messages.annualy)}
        </MenuItem>
      </TextField>
    </FormGroup>
  );
};

export default memo(SalaryField);
