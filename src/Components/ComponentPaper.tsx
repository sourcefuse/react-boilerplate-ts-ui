import MuiPaper from '@mui/material/Paper';
import {styled} from '@mui/material/styles';
import {memo, ReactNode} from 'react';

const Paper = styled(
  MuiPaper,
  {},
)(({theme}: any) => ({
  padding: theme.spacing(2),
  marginTop: theme.spacing(2),
  border: '1px solid',
  borderColor: theme?.palette?.border?.main,
}));

const ComponentPaper = ({children}: {children: ReactNode}) => <Paper elevation={0}>{children}</Paper>;

export default memo(ComponentPaper);
