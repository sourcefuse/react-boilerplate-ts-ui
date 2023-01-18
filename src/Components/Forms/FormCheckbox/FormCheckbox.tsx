import Checkbox, {CheckboxProps} from 'Components/Checkbox/Checkbox';
import {useFormikContext} from 'formik';

type Formik = {
  [x: string]: string;
};

const FormCheckbox: React.FC<CheckboxProps> = ({id, disabled, ...rest}) => {
  const {setFieldValue, errors, touched, values} = useFormikContext<Formik>();
  const isError = !!errors[id!] && touched[id!] && !disabled;
  return (
    <Checkbox
      id={id}
      value={values[id!]}
      errorMessage={isError ? errors[id!] : ''}
      onChange={(val: any) => setFieldValue(id!, val)}
      disabled={disabled}
      {...rest}
    />
  );
};

export default FormCheckbox;
