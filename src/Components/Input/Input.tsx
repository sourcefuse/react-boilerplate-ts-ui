import FileCopyIcon from '@mui/icons-material/FileCopy';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import {FormControl, FormHelperText, IconButton, Tooltip} from '@mui/material';
import TextField, {TextFieldProps} from '@mui/material/TextField';
import InputLabel from 'Components/InputLabel';
import React, {memo} from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

export type InputProps = Omit<TextFieldProps, 'variant' | 'onChange'> & {
  id: string;
  label?: string;
  copyEnabled?: boolean;
  errorMessage?: string;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  onChange?: (val: string) => void;
  variant?: TextFieldProps['variant'];
};

const getEndAdornment = ({
  copyEnabled,
  value,
  isError,
  endAdornment,
}: {
  copyEnabled: boolean;
  value?: TextFieldProps['value'];
  isError: boolean | undefined;
  endAdornment: React.ReactNode;
}) => {
  if (endAdornment && !isError) return endAdornment;

  if (isError) return <ReportProblemOutlinedIcon color="error" />;
  if (copyEnabled)
    return (
      <Tooltip title="Copy to clipboard">
        <IconButton sx={{cursor: 'pointer'}}>
          <CopyToClipboard text={value?.toString() || ''}>
            <FileCopyIcon />
          </CopyToClipboard>
        </IconButton>
      </Tooltip>
    );
};

const Input: React.FC<InputProps> = ({
  id,
  value,
  label,
  helperText,
  disabled = false,
  endAdornment,
  startAdornment,
  copyEnabled = false,
  errorMessage,
  type = 'text',
  variant = 'outlined',
  onChange,
  defaultValue,
  ...rest
}) => {
  const isError = !!errorMessage;
  return (
    <FormControl sx={{width: 1}} data-testid="inputFormControl" error={isError} disabled={disabled}>
      {label && <InputLabel htmlFor={id}>{label}</InputLabel>}
      <TextField
        disabled={disabled}
        data-testid="input"
        value={value}
        defaultValue={defaultValue}
        id={id}
        type={type}
        variant={variant}
        InputProps={{
          endAdornment: getEndAdornment({copyEnabled, value, isError, endAdornment}),
          startAdornment,
        }}
        onChange={(e: any) => {
          if (onChange) onChange(e?.target?.value);
        }}
        {...rest}
      />
      {(isError || helperText) && <FormHelperText>{isError ? errorMessage : helperText}</FormHelperText>}
    </FormControl>
  );
};

export default memo(Input);
