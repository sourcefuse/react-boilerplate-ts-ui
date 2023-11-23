import MuiPaper from '@mui/material/Paper';
import {styled, Theme as MUITheme} from '@mui/material/styles';
import {memo, ReactNode} from 'react';

const Paper = styled(
  MuiPaper,
  {},
)(({theme}: {theme: MUITheme}) => ({
  padding: theme.spacing(2),
  marginTop: theme.spacing(2),
  border: '1px solid',
  borderColor: theme?.palette?.secondary?.main,
}));

const ComponentPaper = ({children}: {children: ReactNode}) => <Paper elevation={0}>{children}</Paper>;

export default memo(ComponentPaper);
