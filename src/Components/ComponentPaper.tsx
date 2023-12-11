import MuiPaper from '@mui/material/Paper';
import {Theme as MUITheme, styled} from '@mui/material/styles';
import {ReactNode, memo} from 'react';

const PADDING_SPACING = 2;
const MARGIN_SPACING = 2;
const Paper = styled(
  MuiPaper,
  {},
)(({theme}: {theme: MUITheme}) => ({
  padding: theme.spacing(PADDING_SPACING),
  marginTop: theme.spacing(MARGIN_SPACING),
  border: '1px solid',
  borderColor: theme?.palette?.secondary?.main,
  width: '100%',
  overflowX: 'auto',
}));

const ComponentPaper = ({children}: {children: ReactNode}) => <Paper elevation={0}>{children}</Paper>;

export default memo(ComponentPaper);
