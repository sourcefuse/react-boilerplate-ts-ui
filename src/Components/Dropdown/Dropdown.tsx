import {Autocomplete, Box, FormControl, FormHelperText, InputLabel, TextField} from '@mui/material';
import React from 'react';

interface Props {
  id: string;
  label?: string;
  disabled?: boolean;
  isTouched?: boolean;
  enableAutoComplete?: boolean;
  returnValue?: boolean;
  multiple?: boolean;
  helperText?: string;
  errorMessage?: any;
  options: Array<{value: any; label: string}>;
  value?: any;
  onChange?: any;
}

const Dropdown: React.FC<Props> = ({
  id,
  errorMessage,
  isTouched,
  disabled,
  label,
  helperText,
  options,
  onChange,
  enableAutoComplete = false,
  returnValue,
  value,
  multiple,
  ...rest
}) => {
  const isError = errorMessage && isTouched && !disabled;
  const newId = enableAutoComplete ? id : `${id}-${Date.now()}`;
  if (enableAutoComplete) multiple = false;

  return (
    <FormControl sx={{width: 1}} data-testid="dropdownFormControl">
      {label && (
        <InputLabel shrink htmlFor={newId}>
          {label}
        </InputLabel>
      )}
      <Autocomplete
        id={newId}
        options={options}
        freeSolo={enableAutoComplete}
        disableClearable={enableAutoComplete}
        isOptionEqualToValue={(option, val) => option?.value === val?.value}
        getOptionLabel={(option) => option?.label}
        renderOption={(props, option) => (
          <Box component="li" {...props} key={option.value}>
            {option.label}
          </Box>
        )}
        sx={{
          '& .MuiOutlinedInput-root': {
            padding: '1px',
          },
        }}
        disabled={disabled}
        onChange={(e, val) => {
          if (returnValue) {
            onChange(val);
          } else {
            const event = {
              target: {
                name: id,
                value: val,
              },
            };
            onChange(event);
          }
        }}
        renderInput={(params) => (
          <TextField
            error={!!isError}
            {...params}
            sx={{
              marginTop: 2,
            }}
            onChange={(e) => {
              if (enableAutoComplete) {
                let val: any = null;
                if (e.target.value) {
                  val = {
                    label: e.target.value,
                    value: e.target.value,
                  };
                }
                if (returnValue) {
                  onChange(val);
                } else {
                  const event = {
                    target: {
                      name: id,
                      value: val,
                    },
                  };
                  onChange(event);
                }
              }
            }}
            inputProps={{
              ...params.inputProps,
              readOnly: !enableAutoComplete,
              sx: {
                caretColor: !enableAutoComplete && 'transparent',
              },
              ...(enableAutoComplete && {value: value?.label || ''}),
            }}
          />
        )}
        value={value}
        multiple={multiple}
        {...rest}
      />
      {(isError || helperText) && <FormHelperText>{isError ? errorMessage : helperText}</FormHelperText>}
    </FormControl>
  );
};

export default Dropdown;
