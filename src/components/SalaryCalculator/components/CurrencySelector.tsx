import { memo, useCallback } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import {
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
} from '@material-ui/core';

import { Currency } from '../../../types';

const useStyles = makeStyles(() => ({
  formControl: {},
}));

const messages = defineMessages({
  eur: {
    id: 'currencies.eur',
    defaultMessage: 'EUR',
  },
  usd: {
    id: 'currencies.usd',
    defaultMessage: 'USD',
  },
  currency: {
    id: 'salaryCalculator.currency',
    defaultMessage: 'Currency',
  },
});

interface SalaryRangeProps {
  value: Currency;
  onChange: (value: Currency) => void;
}

const SalaryRange = ({ value, onChange }: SalaryRangeProps) => {
  const classes = useStyles();
  const intl = useIntl();

  const handleChange = useCallback((e) => onChange(e.target.value), [onChange]);

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="currency-selector-label">
        {intl.formatMessage(messages.currency)}
      </InputLabel>
      <Select
        labelId="currency-selector-label"
        value={value}
        onChange={handleChange}
      >
        <MenuItem value={Currency.EUR}>
          {intl.formatMessage(messages.eur)}
        </MenuItem>
        <MenuItem value={Currency.USD}>
          {intl.formatMessage(messages.usd)}
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default memo(SalaryRange);
