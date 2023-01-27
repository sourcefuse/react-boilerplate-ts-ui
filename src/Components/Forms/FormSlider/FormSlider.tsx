import Slider from 'Components/Slider';
import {Box, SliderProps as MUISliderProps, Typography} from '@mui/material';
import {useFormikContext} from 'formik';
import React, {useCallback} from 'react';

type Formik = {
  [x: string]: string | number[];
};

export interface SliderProps extends MUISliderProps {
  label: string;
  id: string;
}
function valuetext(value: number) {
  return `${value}`;
}

const minDistance = 10;

const FormSlider: React.FC<SliderProps> = ({id, disabled, label, ...rest}) => {
  const {setFieldValue, values}: any = useFormikContext<Formik>();

  const handleChange = useCallback(
    (_event: Event, newValue: number | number[], activeThumb: number) => {
      if (!Array.isArray(newValue)) {
        setFieldValue(id, newValue);
      } else if (newValue[1] - newValue[0] < minDistance) {
        if (activeThumb === 0) {
          const clamped = Math.min(newValue[0], 100 - minDistance);
          setFieldValue(id, [clamped, clamped + minDistance]);
        } else {
          const clamped = Math.max(newValue[1], minDistance);
          setFieldValue(id, [clamped - minDistance, clamped]);
        }
      } else {
        setFieldValue(id, newValue);
      }
    },
    [id, setFieldValue],
  );
  return (
    <>
      <Typography id="input-slider" gutterBottom>
        {label}
      </Typography>
      <Box sx={{padding: '0 12px'}}>
        <Slider
          value={values[id]}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          disableSwap
          {...rest}
        />
      </Box>
    </>
  );
};

export default FormSlider;
