import { memo, useCallback } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

import { Country } from '../../../types';

interface SalaryRangeProps {
  className: string;
  value: Country;
  onChange: (value: Country) => void;
}

const messages = defineMessages({
  country: {
    id: 'salaryCalculator.country',
    defaultMessage: 'Country',
  },
  deu: {
    id: 'countries.deu',
    defaultMessage: 'Germany',
  },
  est: {
    id: 'countries.est',
    defaultMessage: 'Estonia',
  },
});

const SalaryRange = ({ className, value, onChange }: SalaryRangeProps) => {
  const intl = useIntl();
  const handleChange = useCallback((e) => onChange(e.target.value), [onChange]);

  return (
    <FormControl className={className}>
      <InputLabel id="country-selector-label">
        {intl.formatMessage(messages.country)}
      </InputLabel>
      <Select
        labelId="country-selector-label"
        value={value}
        onChange={handleChange}
      >
        <MenuItem value={Country.DEU}>
          {intl.formatMessage(messages.deu)}
        </MenuItem>
        <MenuItem value={Country.EST}>
          {intl.formatMessage(messages.est)}
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default memo(SalaryRange);
