import MuiPaper from '@mui/material/Paper';
import {styled} from '@mui/material/styles';
import PropTypes from 'prop-types';
import React, {memo} from 'react';

const Paper = styled(
  MuiPaper,
  {},
)(({theme}: any) => ({
  padding: theme.spacing(2),
  marginTop: theme.spacing(2),
  border: '1px solid',
  borderColor: theme?.palette?.border?.main,
}));

const ComponentPaper = ({children}) => <Paper elevation={0}>{children}</Paper>;

ComponentPaper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default memo(ComponentPaper);
