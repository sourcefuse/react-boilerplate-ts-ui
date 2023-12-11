import ToggleButton, {ToggleButtonProps} from 'Components/ToggleButton/ToggleButton';
import {useFormikContext} from 'formik';
import React, {useCallback} from 'react';

type Formik = {
  // single select | normal
  [x: string]: string | string[];
};

const FormToggleButton: React.FC<ToggleButtonProps> = ({id, disabled, ...rest}) => {
  const {setFieldValue, errors, touched, values} = useFormikContext<Formik>();
  const isError = !!errors[id ?? ''] && touched[id ?? ''] && !disabled;
  const handleOnChangeEvent = useCallback(
    (val: string | string[]) => {
      if (id) setFieldValue(id, val);
    },
    [id, setFieldValue],
  );

  return (
    <ToggleButton
      id={id}
      value={values[id ?? '']}
      errorMessage={isError ? errors[id ?? ''] : ''}
      disabled={disabled}
      onChange={handleOnChangeEvent}
      {...rest}
    />
  );
};

export default FormToggleButton;
