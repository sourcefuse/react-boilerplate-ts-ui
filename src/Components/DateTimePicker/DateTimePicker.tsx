import {FormControl, FormHelperText, SxProps, Theme} from '@mui/material';
import TextField, {TextFieldProps} from '@mui/material/TextField';
import {
  DateTimePicker as MuiDateTimePicker,
  DateTimePickerProps as MuiDateTimePickerProps,
} from '@mui/x-date-pickers/DateTimePicker';
import InputLabel from 'Components/InputLabel';
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
  sx?: SxProps<Theme>;
}

interface Props extends DateTimePickerProps {
  value?: Date | null;
}

const DateTimePicker: React.FC<Props & Omit<MuiDateTimePickerProps<Date>, 'renderInput'>> = ({
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
          <TextField sx={{marginTop: 2, p:1}} {...params} />
        </>
      );
    },
    [id, label],
  );

  return (
    <FormControl sx={{width: 1, ...sx}} data-testid="dateTimePickerFormControl" disabled={disabled} error={isError}>
      <MuiDateTimePicker
        slotProps={{
          inputAdornment: {position: 'start'},
          textField: handleRenderInput
        }}
        disabled={disabled}
        value={value}
        onChange={handleChange}
        {...rest}
      />
      {(isError || helperText) && <FormHelperText>{isError ? errorMessage : helperText}</FormHelperText>}
    </FormControl>
  );
};

export default memo(DateTimePicker);
