import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormControlProps,
  FormGroup,
  FormGroupProps,
  FormHelperText,
  InputLabel,
} from '@mui/material';
import React, {memo} from 'react';

interface Props {
  id: string;
  label?: string;
  value?: any;
  disabled?: FormControlProps['disabled'];
  isTouched?: Boolean;
  helperText?: string;
  errorMessage?: string | Array<any>;
  returnValue?: Boolean;
  row?: FormGroupProps['row'];
  singleSelect?: Boolean;
  options: Array<Object>;
  onChange?: ((value: React.ChangeEvent<HTMLInputElement> | Object | string | Array<any>) => void) | any;
}

const MuiCheckbox: React.FC<Props> = ({
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

  const handleChange = (e) => {
    if (singleSelect) {
      const val = value === e?.target?.name ? '' : e.target.name;
      if (returnValue) {
        onChange(val);
      } else {
        const event = {
          target: {
            name: id,
            value: val,
          },
        };
        onChange(event);
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
        {options.map((option: any, index) => (
          <FormControlLabel
            key={index}
            control={
              <Checkbox
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

export default memo(MuiCheckbox);
