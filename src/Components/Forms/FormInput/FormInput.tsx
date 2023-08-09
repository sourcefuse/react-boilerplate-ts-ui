import Input, {InputProps} from 'Components/Input/Input';
import {useFormikContext} from 'formik';
import {getValue} from 'Helpers/utils';
import React, {useCallback} from 'react';

type Formik = {
  [x: string]: string;
};

const FormInput: React.FC<InputProps> = ({id, disabled, ...rest}) => {
  const {setFieldValue, errors, touched, values} = useFormikContext<Formik>();
  const isError = !!getValue(errors, id) && getValue(touched, id) && !disabled;
  const handleChangeEvent = useCallback((val: string) => setFieldValue(id, val), [id, setFieldValue]);

  return (
    <Input
      id={id}
      value={getValue(values, id)}
      errorMessage={isError ? getValue(errors, id) : ''}
      disabled={disabled}
      {...rest}
      onChange={handleChangeEvent}
    />
  );
};

export default FormInput;
