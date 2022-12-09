import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import {DatePicker} from '@mui/x-date-pickers';
import React, {memo} from 'react';

interface Props {
  id: string;
  label?: string;
  value?: any;
  onChange: any;
  disabled?: boolean;
  isTouched?: boolean;
  returnValue?: boolean;
  errorMessage?: string[] | string | any;
  helperText?: string;
}
const Datepicker: React.FC<Props> = ({
  id,
  label,
  value,
  onChange,
  errorMessage,
  isTouched,
  disabled,
  returnValue,
  helperText,
  ...rest
}) => {
  const isError = errorMessage && isTouched && !disabled;
  return (
    <FormControl sx={{width: 1}} data-testid="datePickerFormControl">
      {label && (
        <InputLabel error={!!isError} shrink htmlFor={id}>
          {label}
        </InputLabel>
      )}
      <DatePicker
        InputAdornmentProps={{
          position: 'start',
        }}
        value={value}
        onChange={(date) => {
          if (returnValue) {
            onChange(date);
          } else {
            const event = {
              target: {
                name: id,
                value: date,
              },
            };
            onChange(event);
          }
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            sx={{
              marginTop: 2,
              '& .MuiOutlinedInput-root': {
                '& input': {
                  padding: 1,
                },
              },
            }}
          />
        )}
        {...rest}
      />
      {(isError || helperText) && <FormHelperText>{isError ? errorMessage : helperText}</FormHelperText>}
    </FormControl>
  );
};

export default memo(Datepicker);
