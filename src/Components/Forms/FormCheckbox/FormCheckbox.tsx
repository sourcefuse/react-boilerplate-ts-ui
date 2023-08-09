import Checkbox, {CheckboxProps} from 'Components/Checkbox/Checkbox';
import {useFormikContext} from 'formik';
import React, {useCallback} from 'react';

type Formik = {
  [x: string]: string;
};

const FormCheckbox: React.FC<CheckboxProps> = ({id, disabled, ...rest}) => {
  const {setFieldValue, errors, touched, values} = useFormikContext<Formik>();
  const isError = !!errors[id!] && touched[id!] && !disabled;
  const handleOnChangeEvent = useCallback(
    (val: any) => {
      setFieldValue(id!, val);
    },
    [id, setFieldValue],
  );

  return (
    <Checkbox
      id={id}
      value={values[id!]}
      errorMessage={isError ? errors[id!] : ''}
      disabled={disabled}
      {...rest}
      onChange={handleOnChangeEvent}
    />
  );
};

export default FormCheckbox;
