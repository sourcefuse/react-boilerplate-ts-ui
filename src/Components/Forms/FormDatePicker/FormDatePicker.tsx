import {TextField, TextFieldProps} from '@mui/material';
import DatePicker, {DatePickerProps} from 'Components/DatePicker/DatePicker';
import {useFormikContext} from 'formik';
import React, {useCallback} from 'react';

type Formik = {
  [x: string]: string;
};

const FormDatePicker: React.FC<DatePickerProps> = ({id, label, disabled, ...rest}) => {
  const {setFieldValue, errors, touched, values} = useFormikContext<Formik>();
  const isError = !!errors[id] && touched[id] && !disabled;
  const handleChange = useCallback((val: Date | null) => setFieldValue(id, val), [id, setFieldValue]);
  const handleRenderInput = useCallback(
    (params: TextFieldProps) => <TextField {...params} size="small" variant="outlined" label={label} />,
    [label],
  );

  return (
    <DatePicker
      id={id}
      value={values[id]}
      errorMessage={isError ? errors[id] : ''}
      onChange={handleChange}
      disabled={disabled}
      renderInput={handleRenderInput}
      {...rest}
    />
  );
};

export default FormDatePicker;
