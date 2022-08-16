import {FormControl, FormControlLabel, FormHelperText, InputLabel, RadioGroup} from '@mui/material';
import Radio from '@mui/material/Radio';
import Typography from '@mui/material/Typography';
import React, {memo} from 'react';

interface Props {
  id: string;
  label?: string;
  value?: any;
  onChange?: any;
  options: Array<{label: string; value: string}>;
  helperText?: string;
  disabled?: boolean;
  returnValue?: boolean;
}

const RadioButton: React.FC<Props> = ({
  id,
  value,
  label,
  onChange,
  options = [],
  helperText,
  disabled = false,
  returnValue,
  ...rest
}) => {
  const handleChange = (e) => {
    if (returnValue) {
      onChange(e?.target?.value);
    } else {
      onChange(e);
    }
  };
  return (
    <FormControl sx={{width: 1}} disabled={disabled} data-test="radioButtonFormControl">
      {label && (
        <InputLabel shrink htmlFor={id}>
          {label}
        </InputLabel>
      )}
      <RadioGroup value={value} sx={{marginTop: 1}} name={id} aria-label={id} onChange={handleChange} id={id} {...rest}>
        {options.map((option, index) => (
          <FormControlLabel
            key={`${id}-${index}`}
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
