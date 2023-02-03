import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import TextField, {TextFieldProps} from '@mui/material/TextField';
import {
  DateTimePicker as MuiDateTimePicker,
  DateTimePickerProps as MuiDateTimePickerProps,
} from '@mui/x-date-pickers/DateTimePicker';
import React, {memo, useCallback} from 'react';

type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export interface DateTimePickerProps {
  id: string;
  label?: string;
  onChange?: (val: Date | null) => void;
  disabled?: boolean;
  errorMessage?: string;
  helperText?: string;
  minDateTime?: Date;
}

interface Props extends DateTimePickerProps {
  value?: any;
}

const DateTimePicker: React.FC<Props & PartialBy<MuiDateTimePickerProps<any, Date>, 'renderInput'>> = ({
  id,
  label,
  value,
  onChange,
  errorMessage,
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
  const handleRenderInput = useCallback((params: TextFieldProps) => <TextField {...params} label={label} />, [label]);

  return (
    <FormControl sx={{width: 1}} data-testid="datePickerFormControl" disabled={disabled} error={isError}>
      <MuiDateTimePicker
        InputAdornmentProps={{
          position: 'start',
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

export default memo(DateTimePicker);
