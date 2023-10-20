import Slider from 'Components/Slider';
import {SliderProps} from 'Components/Slider/Slider';
import {useFormikContext} from 'formik';
import React, {useCallback} from 'react';

type Formik = {
  [x: string]: number | number[];
};

function valuetext(value: number) {
  return `${value}`;
}

const FormSlider: React.FC<SliderProps> = ({id, disabled, ...rest}) => {
  const {setFieldValue, errors, touched, values} = useFormikContext<Formik>();
  const isError = !!errors[id ?? ''] && touched[id ?? ''] && !disabled;
  const handleOnChangeEvent = useCallback(
    // array if rest.minDistance exists
    (val: number | number[]) => {
      if (id) setFieldValue(id, val);
    },
    [id, setFieldValue],
  );
  return (
    <Slider
      value={values[id ?? '']}
      errorMessage={isError ? errors[id ?? ''] : ''}
      valueLabelDisplay="auto"
      getAriaValueText={valuetext}
      disableSwap
      onChange={handleOnChangeEvent}
      {...rest}
    />
  );
};

export default FormSlider;
