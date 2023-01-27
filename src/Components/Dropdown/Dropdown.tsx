import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import TextField from '@mui/material/TextField';
import React from 'react';

export interface DropdownProps {
  id: string;
  label?: string;
  disabled?: boolean;
  enableAutoComplete?: boolean;
  multiple?: boolean;
  helperText?: string;
  errorMessage?: any;
  options: Array<{value: any; label: string}>;
  onChange?: any;
  ListboxComponent?: any;
  ListboxProps?: any;
  width?: number;
  disableBorder?: boolean;
  isLoading?: boolean;
  filterOptions?: any;
  onInputChange?: any;
}

interface Props extends DropdownProps {
  value?: any;
}

const Dropdown: React.FC<Props> = ({
  id,
  errorMessage,
  disabled,
  label,
  helperText,
  options,
  onChange,
  enableAutoComplete = false,
  value,
  multiple,
  width,
  disableBorder,
  isLoading,
  ...rest
}) => {
  const isError = !!errorMessage;
  const newId = enableAutoComplete ? id : `${id}-${Date.now()}`;
  // if (enableAutoComplete) multiple = false;

  return (
    <FormControl sx={{width: width ?? 1}} data-testid="dropdownFormControl" error={isError}>
      <Autocomplete
        id={newId}
        options={options}
        loading={isLoading}
        freeSolo={enableAutoComplete}
        disableClearable={!enableAutoComplete}
        isOptionEqualToValue={(option, val) => option?.value === val?.value}
        getOptionLabel={(option) => option?.label || ''}
        disableCloseOnSelect={multiple}
        renderOption={(props, option, {selected}) => {
          return (
            <React.Fragment key={option.value}>
              {multiple ? (
                <li {...props}>
                  <Checkbox
                    icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                    checkedIcon={<CheckBoxIcon fontSize="small" />}
                    checked={selected}
                  />
                  {option.label}
                </li>
              ) : (
                <Box component="li" {...props}>
                  {option.label}
                </Box>
              )}
            </React.Fragment>
          );
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            padding: '1px',
          },
          '& .MuiOutlinedInput-notchedOutline': {
            ...(disableBorder && {border: 'none'}),
          },
          '& .MuiInputLabel-root': {
            top: -8,
          },
          '& .MuiInputLabel-shrink': {
            top: 0,
          },
        }}
        disabled={disabled}
        onChange={(e, val) => {
          onChange(val);
        }}
        renderInput={(params) => (
          <TextField
            label={label}
            error={!!isError}
            {...params}
            onChange={(e) => {
              if (enableAutoComplete && !multiple) {
                let val: any = null;
                if (e.target.value) {
                  val = {
                    label: e.target.value,
                    value: e.target.value,
                  };
                }
                onChange(val);
              }
            }}
            inputProps={{
              ...params.inputProps,
              readOnly: !enableAutoComplete,
              sx: {
                caretColor: !enableAutoComplete && 'transparent',
                cursor: !enableAutoComplete && 'pointer !important',
              },
              ...(enableAutoComplete && !multiple && {value: value?.label || ''}),
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
