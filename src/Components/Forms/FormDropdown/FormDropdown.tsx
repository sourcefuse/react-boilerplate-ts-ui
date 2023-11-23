import Dropdown, {AutocompleteValueType, DropdownProps} from 'Components/Dropdown/Dropdown';
import {useFormikContext} from 'formik';
import React, {useCallback} from 'react';

type Formik = {
  [x: string]: AutocompleteValueType;
};

const FormDropdown: React.FC<DropdownProps> = ({id, disabled, ...rest}) => {
  const {setFieldValue, errors, touched, values} = useFormikContext<Formik>();
  const isError = !!errors[id] && touched[id] && !disabled;
  const handleChange = useCallback((val: AutocompleteValueType) => setFieldValue(id, val), [id, setFieldValue]);

  return (
    <Dropdown
      id={id}
      value={values[id]}
      errorMessage={isError ? errors[id] : ''}
      disabled={disabled}
      onChange={handleChange}
      {...rest}
    />
  );
};

export default FormDropdown;
