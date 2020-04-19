import { memo, useCallback } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { TextField } from '@material-ui/core';

const messages = defineMessages({
  salary: {
    id: 'salaryCalculator.salary',
    defaultMessage: 'Gross Salary/Wage',
  },
});

interface SalaryFieldProps {
  value: number;
  className: string;
  onChange: (value: number) => void;
}

const SalaryField = ({ value, className, onChange }: SalaryFieldProps) => {
  const intl = useIntl();

  const handleChange = useCallback((e) => onChange(e.target.value), [onChange]);

  return (
    <TextField
      type="tel"
      variant="outlined"
      label={intl.formatMessage(messages.salary)}
      value={Math.floor(value)}
      className={className}
      onChange={handleChange}
    />
  );
};

export default memo(SalaryField);
