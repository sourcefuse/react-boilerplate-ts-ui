import {useEffect, useState} from 'react';
import {IconButton, InputAdornment, Stack, TextField, TextFieldProps} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

interface Props extends Omit<TextFieldProps, 'onChange'> {
  value: string | number;
  onChange: (val: string | number) => void;
  debounceTime?: number;
}

export const DebouncedInput = ({value: initialValue, onChange, debounceTime = 300, ...props}: Props) => {
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
    <Stack direction="row" sx={{px: '10px'}}>
      <TextField
        size="small"
        placeholder="Search Across Table"
        {...props}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {value ? (
                <IconButton aria-label="clear" onClick={handleClearClick}>
                  <ClearIcon style={{fill: '#D1D1D1'}} />
                </IconButton>
              ) : (
                <IconButton aria-label="search">
                  <SearchIcon style={{fill: '#D1D1D1'}} />
                </IconButton>
              )}
            </InputAdornment>
          ),
        }}
      />
    </Stack>
  );
};
