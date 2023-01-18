import {
  Checkbox as MuiCheckbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  CheckboxProps as MuiCheckboxProps,
} from '@mui/material';
import React, {memo} from 'react';
import InputLabel from 'Components/InputLabel';

export interface CheckboxProps extends MuiCheckboxProps {
  label?: string;
  helperText?: string;
  errorMessage?: string | Array<any>;
  row?: boolean;
  singleSelect?: boolean;
  options: Array<Object>;
  onChange?: ((value: React.ChangeEvent<HTMLInputElement> | Object | string | Array<any>) => void) | any;
}

const Checkbox: React.FC<CheckboxProps> = ({
  onChange,
  options = [],
  row = false,
  label,
  helperText,
  disabled,
  errorMessage,
  id,
  value,
  singleSelect,
}) => {
  const isError = !!errorMessage;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!onChange) return;
    if (singleSelect) {
      const val = value === e?.target?.name ? '' : e.target.name;
      onChange(val);
    } else if (Array.isArray(value)) {
      const index = value.findIndex((val) => val === e?.target?.value);
      const newValue = [...value];
      if (index === -1) {
        newValue.push(e.target.value);
      } else {
        newValue.splice(index, 1);
      }
      onChange(newValue);
    }
  };

  return (
    <FormControl disabled={disabled} data-testid="checkboxFormControl">
      {label && <InputLabel>{label}</InputLabel>}
      <FormGroup row={row}>
        {options.map((option: any, index) => (
          <FormControlLabel
            key={index}
            control={
              <MuiCheckbox
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
            sx={{marginTop: 1}}
            label={option.label}
          />
        ))}
      </FormGroup>
      {(isError || helperText) && <FormHelperText>{isError ? errorMessage : helperText}</FormHelperText>}
    </FormControl>
  );
};

export default memo(Checkbox);
