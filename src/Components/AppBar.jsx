import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import MuiAppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import {styled} from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Breadcrumb from 'Components/Breadcrumb/Breadcrumb';
import FullScreen from 'Components/FullScreen';
import ThemeSwitch from 'Components/ThemeSwitch';
import {logout} from 'Helpers/utils';
import PropTypes from 'prop-types';
import React, {memo} from 'react';

const MyAppBar = styled(
  MuiAppBar,
  {},
)(({theme}) => ({
  zIndex: theme.zIndex.drawer + 1,
  boxShadow: 'none',
  borderBottom: `1px solid ${theme?.palette?.border?.main}`,
  backgroundColor: theme.palette.mode === 'light' && '#fff',
  color: theme.palette.mode === 'light' && '#000',
}));

const AppBar = ({open, toggleDrawer}) => {
  const MenuButton = () => (
    <Tooltip title="Menu">
      <IconButton onClick={toggleDrawer}>
        <MenuIcon sx={{color: open && 'secondary.main'}} />
      </IconButton>
    </Tooltip>
  );
  const Logout = () => (
    <Tooltip title="Logout">
      <IconButton onClick={logout}>
        <LogoutIcon />
      </IconButton>
    </Tooltip>
  );

  return (
    <MyAppBar>
      <Toolbar>
        {toggleDrawer && <MenuButton />}
        <Typography component="h2" variant="h6" noWrap sx={{flexGrow: 1, fontWeight: 'bold', marginLeft: 2}}>
          RBP
          <Breadcrumb />
        </Typography>
        <FullScreen />
        <ThemeSwitch />
        <Logout />
      </Toolbar>
    </MyAppBar>
  );
};

AppBar.propTypes = {
  open: PropTypes.bool,
  toggleDrawer: PropTypes.func,
};

export default memo(AppBar);
