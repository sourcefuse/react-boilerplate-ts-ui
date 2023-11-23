import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import Autocomplete, {AutocompleteProps} from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import TextField from '@mui/material/TextField';
import InputLabel from 'Components/InputLabel';
import React from 'react';

export type AutocompleteValueType =
  | NonNullable<string | {label: string; value: string}>
  | (string | {label: string; value: string})[];

export interface DropdownProps
  extends Omit<
    AutocompleteProps<{label: string; value: string}, boolean, boolean, boolean>,
    'renderInput' | 'options' | 'value' | 'onChange'
  > {
  id: string;
  label?: string;
  disabled?: boolean;
  enableAutoComplete?: boolean;
  multiple?: boolean;
  helperText?: string;
  errorMessage?: string;
  options: Array<{value: string; label: string}>;
  onChange?: (val: AutocompleteValueType) => void;
  width?: number;
  disableBorder?: boolean;
  isLoading?: boolean;
}

interface Props extends DropdownProps {
  value?: AutocompleteValueType;
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
  if (enableAutoComplete) multiple = false;

  let displayValue = '';

  if (Array.isArray(value)) {
    displayValue = '';
  } else if (typeof value === 'string') {
    displayValue = value;
  } else {
    displayValue = value?.label || '';
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (enableAutoComplete && !multiple) {
      let val: AutocompleteValueType;
      if (e.target.value && onChange) {
        val = {
          label: e.target.value,
          value: e.target.value,
        };
        onChange(val);
      }
    }
  };

  return (
    <FormControl sx={{width: width ?? 1}} data-testid="dropdownFormControl" error={isError}>
      {label && <InputLabel htmlFor={id}>{label}</InputLabel>}
      <Autocomplete
        data-testid="dropdownAutocomplete"
        id={newId}
        options={options}
        loading={isLoading}
        freeSolo={enableAutoComplete}
        disableClearable={!enableAutoComplete}
        isOptionEqualToValue={(option, val) => option?.value === val?.value}
        getOptionLabel={option => {
          if (typeof option !== 'string') {
            return option?.label || '';
          }
          return '';
        }}
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
          marginTop: 2,
        }}
        disabled={disabled}
        onChange={(_, val) => {
          if (onChange && val) onChange(val);
        }}
        renderInput={params => (
          <TextField
            error={!!isError}
            {...params}
            onChange={handleInputChange}
            inputProps={{
              ...params.inputProps,
              readOnly: !enableAutoComplete,
              sx: {
                caretColor: !enableAutoComplete && 'transparent',
                cursor: !enableAutoComplete && 'pointer !important',
              },
              ...(enableAutoComplete && !multiple && {value: displayValue}),
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
