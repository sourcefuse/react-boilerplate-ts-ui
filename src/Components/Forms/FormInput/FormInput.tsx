import Input, {InputProps} from 'Components/Input/Input';
import {FormikValues, useFormikContext} from 'formik';
import {getValue} from 'Helpers/utils';
import React, {useCallback} from 'react';

const FormInput: React.FC<InputProps> = ({id, disabled, ...rest}) => {
  const {setFieldValue, errors, touched, values} = useFormikContext<FormikValues>();
  const isError = !!getValue(errors, id) && getValue(touched, id) && !disabled;
  const handleChangeEvent = useCallback((val: string) => setFieldValue(id, val), [id, setFieldValue]);

  return (
    <Input
      id={id}
      value={getValue(values, id)}
      errorMessage={isError ? getValue(errors, id) : ''}
      disabled={disabled}
      onChange={handleChangeEvent}
      {...rest}
    />
  );
};

export default FormInput;
