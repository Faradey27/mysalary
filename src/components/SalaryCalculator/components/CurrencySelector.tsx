import { memo, useCallback } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { MenuItem, TextField } from '@material-ui/core';

import { Currency } from '../../../types';

const messages = defineMessages({
  currency: {
    id: 'salaryCalculator.currency',
    defaultMessage: 'Select currency',
  },
});

const currencyTranslation = defineMessages({
  [Currency.EUR]: {
    id: 'currencies.eur',
    defaultMessage: 'EUR',
  },
  [Currency.USD]: {
    id: 'currencies.usd',
    defaultMessage: 'USD',
  },
});

const currencies = [Currency.EUR, Currency.USD];

interface SalaryRangeProps {
  value: Currency;
  className: string;
  onChange: (value: Currency) => void;
}

const SalaryRange = ({ value, className, onChange }: SalaryRangeProps) => {
  const intl = useIntl();

  const handleChange = useCallback((e) => onChange(e.target.value), [onChange]);

  return (
    <TextField
      select
      variant="outlined"
      label={intl.formatMessage(messages.currency)}
      value={value}
      className={className}
      onChange={handleChange}
    >
      {currencies.map((currencyKey) => (
        <MenuItem value={currencyKey} key={currencyKey}>
          {intl.formatMessage(currencyTranslation[currencyKey])}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default memo(SalaryRange);
