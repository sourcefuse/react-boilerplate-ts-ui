import {FormControl, FormControlLabel, FormHelperText, RadioGroup, RadioGroupProps} from '@mui/material';
import Radio from '@mui/material/Radio';
import Typography from '@mui/material/Typography';
import InputLabel from 'Components/InputLabel';
import React, {ReactNode, memo, useCallback} from 'react';

export interface RadioButtonOption {
  label: string;
  value: string;
}

export interface RadioButtonProps extends Omit<RadioGroupProps, 'onChange'> {
  id: string;
  label?: string;
  children?: ReactNode;
  defaultValue?: string;
  onChange?: (val: string) => void;
  value?: string;
  options: Array<{label: string; value: string}>;
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
      onChange!(e.target.value); // NOSONAR
    },
    [onChange],
  );

  return (
    <FormControl sx={{width: 1}} disabled={disabled} data-testid="radioButtonFormControl">
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
