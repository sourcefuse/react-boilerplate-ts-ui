import Slider from 'Components/Slider';
import {useFormikContext} from 'formik';
import React, {useCallback} from 'react';
import {SliderProps} from 'Components/Slider/Slider';

type Formik = {
  [x: string]: string | number[];
};

function valuetext(value: number) {
  return `${value}`;
}

const FormSlider: React.FC<SliderProps> = ({id, disabled, ...rest}) => {
  const {setFieldValue, errors, touched, values}: any = useFormikContext<Formik>();
  const isError = !!errors[id!] && touched[id!] && !disabled;
  const handleOnChangeEvent = useCallback(
    (val: any) => {
      setFieldValue(id, val);
    },
    [id, setFieldValue],
  );
  return (
    <Slider
      value={values[id!]}
      errorMessage={isError ? errors[id!] : ''}
      valueLabelDisplay="auto"
      getAriaValueText={valuetext}
      disableSwap
      onChange={handleOnChangeEvent}
      {...rest}
    />
  );
};

export default FormSlider;
