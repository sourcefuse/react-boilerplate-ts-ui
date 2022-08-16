import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import Switch from '@mui/material/Switch';
import * as React from 'react';

type Props = {
  id: string;
  label?: string;
  value: any;
  disabled?: boolean;
  isTouched?: boolean;
  helperText?: string;
  errorMessage?: string | Array<any>;
  returnValue?: boolean;
  row?: boolean;
  singleSelect?: boolean;
  onChange: (value: any) => void;
  options?: any;
};
const Checkbox: React.FC<Props> = ({
  onChange,
  options = [],
  row = false,
  label,
  helperText,
  disabled,
  errorMessage,
  isTouched,
  id,
  value,
  singleSelect,
  returnValue,
}) => {
  const isError = errorMessage && isTouched && !disabled;

  const handleChange = (e: any) => {
    if (singleSelect) {
      const val = value === e?.target?.name ? '' : e.target.name;
      if (returnValue) {
        onChange(val);
      } else {
        onChange(e);
      }
    } else if (Array.isArray(value)) {
      if (returnValue) {
        const index = value.findIndex((val) => val === e?.target?.value);
        const newValue = [...value];
        if (index === -1) {
          newValue.push(e.target.value);
        } else {
          newValue.splice(index, 1);
        }
        onChange(newValue);
      } else {
        onChange(e);
      }
    }
  };

  return (
    <FormControl disabled={disabled} data-testid="checkboxFormControl">
      {label && <InputLabel shrink>{label}</InputLabel>}
      <FormGroup row={row}>
        {options.map((option, index) => (
          <FormControlLabel
            key={index}
            control={
              <Switch
                checked={
                  singleSelect
                    ? value?.toString() === option?.value.toString()
                    : Array.isArray(value) && value.some((val) => val === option.value)
                }
                onChange={handleChange}
                value={option.value}
                name={singleSelect ? option?.value.toString() : id}
              />
            }
            label={option.label}
          />
        ))}
      </FormGroup>
      {(isError || helperText) && <FormHelperText>{isError ? errorMessage : helperText}</FormHelperText>}
    </FormControl>
  );
};

export default React.memo(Checkbox);
