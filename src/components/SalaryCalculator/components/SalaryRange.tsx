import { ChangeEvent, memo, useCallback } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { FormControl, makeStyles } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles(() => ({
  title: {
    fontSize: 12,
    marginBottom: 4,
  },
  labelPlacementTop: {
    alignItems: 'flex-start',
    marginLeft: 0,
  },
  thumb: {
    width: 16,
    height: 16,
    marginLeft: 0,
    marginTop: -7,
  },
  slider: {
    padding: '12px 0 0 0',
  },
}));

interface SalaryRangeProps {
  className: string;
  currency: string;
  value: number;
  minValue: number;
  maxValue: number;
  onChange: (value: number) => void;
}

const messages = defineMessages({
  yearlyGrossIncome: {
    id: 'salaryCalculator.yearlyGrossIncome',
    defaultMessage: 'Yearly gross income',
  },
});

const SalaryRange = ({
  className,
  currency,
  value,
  minValue,
  maxValue,
  onChange,
}: SalaryRangeProps) => {
  const classes = useStyles();
  const intl = useIntl();

  const handleChange = useCallback((_e, nextValue) => onChange(nextValue), [
    onChange,
  ]);

  return (
    <FormControl className={className}>
      <FormLabel component="legend" className={classes.title}>
        {intl.formatMessage(messages.yearlyGrossIncome)}
      </FormLabel>
      <FormControlLabel
        labelPlacement="top"
        classes={{
          labelPlacementTop: classes.labelPlacementTop,
        }}
        control={
          <Slider
            className={classes.slider}
            min={minValue}
            max={maxValue}
            step={1000}
            classes={{
              thumb: classes.thumb,
            }}
            value={value}
            onChange={handleChange}
            aria-labelledby="continuous-slider"
          />
        }
        label={`${currency}${Math.floor(value)}`}
      />
    </FormControl>
  );
};

export default memo(SalaryRange);
