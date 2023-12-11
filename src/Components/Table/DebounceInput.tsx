import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import {IconButton, InputAdornment, Stack, TextField, TextFieldProps} from '@mui/material';
import {useEffect, useState} from 'react';

interface Props extends Omit<TextFieldProps, 'onChange'> {
  value: string | number;
  onChange: (val: string | number) => void;
  debounceTime?: number;
}
const DEBOUNCE_TIME = 300;
export const DebouncedInput = ({value: initialValue, onChange, debounceTime = DEBOUNCE_TIME, ...props}: Props) => {
  const [value, setValue] = useState(initialValue);

  // setValue if any initialValue changes
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  // debounce onChange — triggered on every keypress
  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounceTime);

    return () => {
      clearTimeout(timeout);
    };
  }, [value, onChange, debounceTime]);

  const handleClearClick = () => {
    setValue('');
    onChange('');
  };

  return (
    <Stack direction="row">
      <TextField
        size="small"
        placeholder="Search Across Table"
        {...props}
        value={value}
        onChange={e => setValue(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {value ? (
                <IconButton aria-label="clear" onClick={handleClearClick}>
                  <ClearIcon />
                </IconButton>
              ) : (
                <IconButton aria-label="search">
                  <SearchIcon />
                </IconButton>
              )}
            </InputAdornment>
          ),
        }}
      />
    </Stack>
  );
};
