import {useTheme} from '@mui/material';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import TextField, {TextFieldProps} from '@mui/material/TextField';
import {DateTimePicker as MuiDateTimePicker} from '@mui/x-date-pickers/DateTimePicker';
import React, {memo, useCallback} from 'react';

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

const DateTimePicker: React.FC<Props> = ({id, label, value, onChange, errorMessage, disabled, helperText, ...rest}) => {
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
