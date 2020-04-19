import { memo, useCallback } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { MenuItem, TextField } from '@material-ui/core';

import { Country } from '../../../types';

interface SalaryRangeProps {
  className: string;
  value: Country;
  onChange: (value: Country) => void;
}

const messages = defineMessages({
  country: {
    id: 'salaryCalculator.country',
    defaultMessage: 'Select country',
  },
});

const countryTranslation = defineMessages({
  [Country.DEU]: {
    id: 'countries.deu',
    defaultMessage: 'Germany',
  },
  [Country.EST]: {
    id: 'countries.est',
    defaultMessage: 'Estonia',
  },
});

const countries = [Country.DEU, Country.EST];

const SalaryRange = ({ className, value, onChange }: SalaryRangeProps) => {
  const intl = useIntl();
  const handleChange = useCallback((e) => onChange(e.target.value), [onChange]);

  return (
    <TextField
      select
      variant="outlined"
      className={className}
      label={intl.formatMessage(messages.country)}
      value={value}
      onChange={handleChange}
    >
      {countries.map((countryKey) => (
        <MenuItem value={countryKey} key={countryKey}>
          {intl.formatMessage(countryTranslation[countryKey])}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default memo(SalaryRange);
