import RadioButton, {RadioButtonProps} from 'Components/RadioButton/RadioButton';
import {useFormikContext} from 'formik';
import React, {useCallback} from 'react';

const FormRadioButton: React.FC<RadioButtonProps> = ({id, disabled, ...rest}) => {
  const {setFieldValue, errors, touched, values} = useFormikContext<{[key: string]: string}>();
  const isError = !!errors[id] && touched[id] && !disabled;
  const handleOnChangeEvent = useCallback(
    (val: any) => {
      setFieldValue(id, val);
    },
    [id, setFieldValue],
  );

  return (
    <RadioButton
      id={id}
      value={values[id]}
      disabled={disabled}
      helperText={isError ? errors[id] : ''}
      {...rest}
      onChange={handleOnChangeEvent}
    />
  );
};

export default FormRadioButton;
