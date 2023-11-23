import {FormControl, FormHelperText, SxProps, Theme} from '@mui/material';
import TextField, {TextFieldProps} from '@mui/material/TextField';
import {DatePicker as MuiDatePicker, DatePickerProps as MuiDatePickerProps} from '@mui/x-date-pickers/DatePicker';
import InputLabel from 'Components/InputLabel';
import React, {memo, useCallback} from 'react';

type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export interface DatePickerProps {
  id: string;
  label?: string;
  onChange?: (val: Date | null) => void;
  disabled?: boolean;
  errorMessage?: string;
  helperText?: string;
  minDateTime?: Date;
  sx?: SxProps<Theme>;
}

interface Props extends DatePickerProps {
  value?: Date | null;
}

const DatePicker: React.FC<Props & PartialBy<MuiDatePickerProps<Date | null, Date>, 'renderInput'>> = ({
  id,
  label,
  value,
  onChange,
  errorMessage,
  sx,
  disabled,
  helperText,
  ...rest
}) => {
  const isError = !!errorMessage;
  const handleChange = useCallback(
    (date: Date | null) => {
      if (onChange) onChange(date);
    },
    [onChange],
  );

  const handleRenderInput = useCallback(
    (params: TextFieldProps) => {
      return (
        <>
          {label && <InputLabel htmlFor={id}>{label}</InputLabel>}
          <TextField sx={{marginTop: 2}} {...params} />
        </>
      );
    },
    [id, label],
  );

  return (
    <FormControl sx={{width: 1, ...sx}} data-testid="datePickerFormControl" disabled={disabled} error={isError}>
      <MuiDatePicker
        InputAdornmentProps={{
          position: 'start',
        }}
        InputProps={{
          sx: {
            '.MuiInputBase-input': {
              padding: 1,
            },
          },
        }}
        disabled={disabled}
        value={value}
        onChange={handleChange}
        renderInput={handleRenderInput}
        {...rest}
      />
      {(isError || helperText) && <FormHelperText>{isError ? errorMessage : helperText}</FormHelperText>}
    </FormControl>
  );
};

export default memo(DatePicker);
