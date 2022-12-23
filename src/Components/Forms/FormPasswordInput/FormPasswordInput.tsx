import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import FormInput from 'Components/Forms/FormInput';
import {InputProps} from 'Components/Input/Input';
import React, {useState} from 'react';

const FormPasswordInput: React.FC<InputProps> = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <FormInput
      {...props}
      type={showPassword ? 'text' : 'password'}
      endAdornment={
        <InputAdornment position="end">
          <IconButton aria-label="toggle password visibility" onClick={() => setShowPassword(!showPassword)} edge="end">
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </InputAdornment>
      }
    />
  );
};

export default FormPasswordInput;
