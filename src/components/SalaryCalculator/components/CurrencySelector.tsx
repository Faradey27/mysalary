import {
  makeStyles,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';
import { memo, useCallback } from 'react';
import { Currency } from '../../../types';

const useStyles = makeStyles(() => ({
  formControl: {},
}));

interface SalaryRangeProps {
  value: Currency;
  onChange: (value: Currency) => void;
}

const SalaryRange = ({ value, onChange }: SalaryRangeProps) => {
  const classes = useStyles();

  const handleChange = useCallback((e) => onChange(e.target.value), [onChange]);

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="currency-selector-label">Currency</InputLabel>
      <Select
        labelId="currency-selector-label"
        value={value}
        onChange={handleChange}
      >
        <MenuItem value={Currency.EUR}>EUR</MenuItem>
        <MenuItem value={Currency.USD}>USD</MenuItem>
      </Select>
    </FormControl>
  );
};

export default memo(SalaryRange);
