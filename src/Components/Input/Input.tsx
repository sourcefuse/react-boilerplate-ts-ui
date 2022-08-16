import FileCopyIcon from '@mui/icons-material/FileCopy';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputLabel,
  OutlinedInput,
  OutlinedInputProps,
  Tooltip,
} from '@mui/material';
import React, {memo} from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

interface Props extends OutlinedInputProps {
  id: string;
  inputLabel?: string;
  value?: any;
  disabled?: boolean;
  copyEnabled?: boolean;
  isTouched?: boolean;
  helperText?: string;
  errorMessage?: string;
  endAdornment?: React.ReactNode;
  returnValue?: boolean;
  onChange?: any;
}

const getEndAdornment: React.FC<any> = ({copyEnabled, value, isError, endAdornment}) => {
  if (endAdornment && !isError) return endAdornment;

  if (isError) return <ReportProblemOutlinedIcon color="error" />;
  if (copyEnabled)
    return (
      <Tooltip title="Copy to clipboard">
        <IconButton>
          <CopyToClipboard sx={{cursor: 'pointer'}} text={value}>
            <FileCopyIcon />
          </CopyToClipboard>
        </IconButton>
      </Tooltip>
    );
};

const Input: React.FC<Props> = ({
  id,
  value,
  label,
  helperText,
  disabled = false,
  endAdornment,
  copyEnabled = false,
  errorMessage,
  isTouched,
  onChange,
  returnValue,
  ...rest
}) => {
  const isError = errorMessage && isTouched && !disabled;

  return (
    <FormControl sx={{width: 1}} data-testid="inputFormControl" disabled={disabled}>
      {label && (
        <InputLabel shrink htmlFor={id}>
          {label}
        </InputLabel>
      )}
      <OutlinedInput
        data-testid="input"
        value={value}
        id={id}
        sx={{marginTop: 2}}
        inputProps={{
          sx: {
            padding: 1,
          },
        }}
        onChange={(e) => onChange(returnValue ? e?.target?.value : e)}
        endAdornment={getEndAdornment({copyEnabled, value, isError, endAdornment})}
        {...rest}
      />
      {(isError || helperText) && <FormHelperText>{isError ? errorMessage : helperText}</FormHelperText>}
    </FormControl>
  );
};

export default memo(Input);
