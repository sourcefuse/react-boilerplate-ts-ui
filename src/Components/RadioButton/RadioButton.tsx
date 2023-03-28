import {FormControl, FormControlLabel, RadioGroupProps, FormHelperText, RadioGroup} from '@mui/material';
import Radio from '@mui/material/Radio';
import Typography from '@mui/material/Typography';
import InputLabel from 'Components/InputLabel';
import React, {memo, ReactNode, useCallback} from 'react';

export interface RadioButtonOption {
  label: string;
  value: string;
}

export interface RadioButtonProps extends RadioGroupProps {
  id: string;
  label?: string;
  children?: ReactNode;
  defaultValue?: string;
  onChange?: (val: any) => void;
  value?: any;
  options: RadioButtonOption[];
  helperText?: string;
  disabled?: boolean;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  id,
  value,
  label,
  onChange,
  options = [],
  helperText,
  disabled = false,
  ...rest
}) => {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange!(e.target.value);
    },
    [onChange],
  );

  return (
    <FormControl sx={{width: 1}} disabled={disabled} data-test="radioButtonFormControl">
      {label && <InputLabel htmlFor={id}>{label}</InputLabel>}
      <RadioGroup value={value} sx={{marginTop: 1}} name={id} aria-label={id} onChange={handleChange} id={id} {...rest}>
        {options.map((option: RadioButtonOption) => (
          <FormControlLabel
            key={option.label}
            value={option?.value}
            control={<Radio />}
            label={<Typography sx={{textTransform: 'capitalize'}}>{option?.label}</Typography>}
          />
        ))}
      </RadioGroup>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default memo(RadioButton);
