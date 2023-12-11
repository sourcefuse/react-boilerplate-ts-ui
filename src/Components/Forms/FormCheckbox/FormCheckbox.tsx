import Checkbox, {CheckboxProps} from 'Components/Checkbox/Checkbox';
import {useFormikContext} from 'formik';
import React, {useCallback} from 'react';

type Formik = {
  // singleselect | normal
  [x: string]: string | string[];
};

const FormCheckbox: React.FC<CheckboxProps> = ({id, disabled, ...rest}) => {
  const {setFieldValue, errors, touched, values} = useFormikContext<Formik>();
  const isError = !!errors[id ?? ''] && touched[id ?? ''] && !disabled;
  const handleOnChangeEvent = useCallback(
    (val: string | string[]) => {
      if (id) setFieldValue(id, val);
    },
    [id, setFieldValue],
  );

  return (
    <Checkbox
      id={id}
      value={values[id ?? '']}
      errorMessage={isError ? errors[id ?? ''] : ''}
      disabled={disabled}
      onChange={handleOnChangeEvent}
      {...rest}
    />
  );
};

export default FormCheckbox;
