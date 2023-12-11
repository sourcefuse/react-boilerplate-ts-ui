import {
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Checkbox as MuiCheckbox,
  CheckboxProps as MuiCheckboxProps,
} from '@mui/material';
import InputLabel from 'Components/InputLabel';
import React, {memo, useCallback} from 'react';

export interface CheckboxProps extends Omit<MuiCheckboxProps, 'onChange'> {
  label?: string;
  helperText?: string;
  errorMessage?: string;
  value?: string | string[];
  row?: boolean;
  singleSelect?: boolean;
  options: Array<{label: string; value: string}>;
  onChange?: (val: string | string[]) => void;
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
  ...rest
}) => {
  const isError = !!errorMessage;

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!onChange) return;
      if (singleSelect) {
        const val = value === e?.target?.name ? '' : e.target.name;
        onChange(val);
      } else if (Array.isArray(value)) {
        const index = value.findIndex(val => val === e?.target?.value);
        const newValue = [...value];
        if (index === -1) {
          newValue.push(e.target.value);
        } else {
          newValue.splice(index, 1);
        }
        onChange(newValue);
      } else {
        // this is intentional
      }
    },
    [onChange, singleSelect, value],
  );

  return (
    <FormControl disabled={disabled} data-testid="checkboxFormControl">
      {label && <InputLabel>{label}</InputLabel>}
      <FormGroup row={row}>
        {options.map((option: {label: string; value: string}) => (
          <FormControlLabel
            key={option.label}
            control={
              <MuiCheckbox
                checked={
                  singleSelect
                    ? value === option?.value
                    : Array.isArray(value) && value.some(val => val === option.value)
                }
                onChange={handleChange}
                value={option.value}
                name={singleSelect ? option?.value : id}
                {...rest}
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
