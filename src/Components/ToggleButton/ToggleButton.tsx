import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormHelperText from '@mui/material/FormHelperText';
import Switch, {SwitchProps} from '@mui/material/Switch';
import InputLabel from 'Components/InputLabel';
import React, {useCallback} from 'react';

export interface ToggleButtonProps extends Omit<SwitchProps, 'onChange'> {
  label?: string;
  helperText?: string;
  errorMessage?: string;
  row?: boolean;
  value?: string | string[];
  singleSelect?: boolean;
  options: Array<{label: string; value: string}>;
  onChange?: (val: string | string[]) => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
  options = [],
  row = false,
  label,
  helperText,
  disabled,
  errorMessage,
  id,
  value,
  singleSelect,
  onChange,
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
    <FormControl disabled={disabled}>
      {label && <InputLabel>{label}</InputLabel>}
      <FormGroup row={row}>
        {options.map(option => (
          <FormControlLabel
            key={option.label}
            control={
              <Switch
                checked={
                  singleSelect
                    ? value?.toString() === option?.value.toString()
                    : Array.isArray(value) && value.some(val => val === option.value)
                }
                sx={{marginTop: 1}}
                onChange={handleChange}
                value={option.value}
                name={singleSelect ? option?.value.toString() : id}
                {...rest}
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

export default React.memo(ToggleButton);
