import { useState, useCallback } from 'react';
import Slider from '@material-ui/core/Slider';

const SalaryCalculator = () => {
  const minValue = 0;
  const [sliderValue, setSliderValue] = useState(minValue);

  const handleChange = useCallback((_event, newValue: number) => {
    setSliderValue(newValue);
  }, []);

  return (
    <form>
      <p>
        <Slider
          value={sliderValue}
          onChange={handleChange}
          aria-labelledby="continuous-slider"
        />
      </p>
    </form>
  );
};

export default SalaryCalculator;
