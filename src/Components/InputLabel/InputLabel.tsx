import MuiInputLabel, {InputLabelProps as MuiInputLabelProps} from '@mui/material/InputLabel';

interface InputLabelProps extends MuiInputLabelProps {
  children: string;
  htmlFor?: string;
}

const InputLabel: React.FC<InputLabelProps> = ({children, htmlFor}) => (
  <MuiInputLabel shrink variant="standard" htmlFor={htmlFor}>
    {children}
  </MuiInputLabel>
);

export default InputLabel;
