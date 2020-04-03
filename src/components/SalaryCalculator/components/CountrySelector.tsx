import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { memo, useCallback } from 'react';
import { Currency, Country } from '../../../types';

interface SalaryRangeProps {
  className: string;
  value: Country;
  onChange: (value: Country) => void;
}

const SalaryRange = ({ className, value, onChange }: SalaryRangeProps) => {
  const handleChange = useCallback((e) => onChange(e.target.value), [onChange]);

  return (
    <FormControl className={className}>
      <InputLabel id="country-selector-label">Country</InputLabel>
      <Select
        labelId="country-selector-label"
        value={value}
        onChange={handleChange}
      >
        <MenuItem value={Country.DEU}>Germany</MenuItem>
        <MenuItem value={Country.EST}>Estonia</MenuItem>
      </Select>
    </FormControl>
  );
};

export default memo(SalaryRange);
