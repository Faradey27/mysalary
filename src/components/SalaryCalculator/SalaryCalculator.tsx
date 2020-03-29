import { useState, useCallback } from 'react';
import Slider from '@material-ui/core/Slider';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles, FormHelperText, Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%',
  },
  labelPlacementTop: {
    alignItems: 'flex-start',
    marginLeft: 0,
    // marginRight: 0,
  },
  thumb: {
    width: 16,
    height: 16,
    marginLeft: 0,
    marginTop: -7,
  },
  label: {
    fontSize: 12,
    marginBottom: 4,
  },
  slider: {
    padding: '12px 0 0 0',
  },
  results: {
    padding: 16,
    background: theme.palette.colors.block,
    borderRadius: 4,
    marginTop: 24,
  },
  resultTitle: {
    fontSize: 17,
    color: theme.palette.text.primary,
  },
  divider: {
    margin: '16px 0',
  },
}));

const SalaryCalculator = ({ currency, minValue, maxValue }) => {
  const [sliderValue, setSliderValue] = useState(
    Math.floor((maxValue - minValue) * 0.39)
  );
  const classes = useStyles();

  const handleChange = useCallback((_event, newValue: number) => {
    setSliderValue(newValue);
  }, []);

  return (
    <FormControl component="form" className={classes.form}>
      <FormLabel component="legend" className={classes.label}>
        Annual gross income
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
            classes={{
              thumb: classes.thumb,
            }}
            value={sliderValue}
            onChange={handleChange}
            aria-labelledby="continuous-slider"
          />
        }
        label={`${currency}${sliderValue * 1000}`}
      />
      <FormGroup className={classes.results}>
        <FormHelperText className={classes.resultTitle}>
          {`Yearly net income: `}
          <strong>
            {currency}
            {Math.floor(sliderValue * 1000)}
          </strong>
        </FormHelperText>
        <Divider className={classes.divider} />
        <FormHelperText className={classes.resultTitle}>
          {`Monthly net income: `}
          <strong>
            {currency}
            {Math.floor((sliderValue * 1000) / 12)}
          </strong>
        </FormHelperText>
      </FormGroup>
    </FormControl>
  );
};

export default SalaryCalculator;
