import {FormControl, FormHelperText, SxProps, Theme, useTheme} from '@mui/material';
import TextField, {TextFieldProps} from '@mui/material/TextField';
import {DatePicker as MuiDatePicker} from '@mui/x-date-pickers/DatePicker';
import React, {memo, useCallback} from 'react';

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
  value?: any;
}

const DatePicker: React.FC<Props> = ({id, label, value, onChange, errorMessage, sx, disabled, helperText, ...rest}) => {
  const theme = useTheme();
  const isError = !!errorMessage;
  const handleChange = useCallback(
    (date: Date | null) => {
      if (onChange) onChange(date);
    },
    [onChange],
  );
  const handleRenderInput = useCallback(
    (params: TextFieldProps) => (
      <TextField
        {...params}
        variant="outlined"
        label={label}
        sx={{
          '& .MuiOutlinedInput-input': {
            paddingY: 1,
          },
          '& .MuiInputLabel-root': {
            top: -8,
          },
          '& .MuiInputLabel-shrink': {
            top: 0,
          },
          ...(theme.palette.mode !== 'dark' && {
            bgcolor: '#E4E7EE',
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'transparent',
            },
          }),
        }}
      />
    ),
    [label, theme.palette.mode],
  );

  return (
    <FormControl sx={{width: 1, ...sx}} data-testid="datePickerFormControl" disabled={disabled} error={isError}>
      <MuiDatePicker
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

export default memo(DatePicker);
