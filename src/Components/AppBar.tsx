import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import {Typography} from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import {styled} from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import {Box} from '@mui/system';
import Breadcrumb from 'Components/Breadcrumb/Breadcrumb';
import FullScreen from 'Components/FullScreen';
import useAuth from 'Hooks/useAuth';
import {memo} from 'react';
import sfLogo from './../Images/SF_logo.png';

const MyAppBar = styled(MuiAppBar)(({theme}) => ({
  zIndex: theme.zIndex.drawer + 1,
  boxShadow: 'none',
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
}));

interface IAppBarProps {
  open?: boolean;
  isPermanent?: boolean;
  toggleDrawer?: () => void;
}
const MenuButton = ({open, toggleDrawer}: IAppBarProps) => (
  <Tooltip title="Menu" sx={{mt: -1, mr: 1}}>
    <IconButton onClick={toggleDrawer}>
      <MenuIcon sx={{...(open && {color: 'secondary.main'})}} />
    </IconButton>
  </Tooltip>
);
const Logout = () => {
  const {logout} = useAuth();
  return (
    <Tooltip title="Logout">
      <IconButton onClick={logout}>
        <LogoutIcon />
      </IconButton>
    </Tooltip>
  );
};
const AppBar = ({open, toggleDrawer, isPermanent}: IAppBarProps) => {
  let appBarMargin = open ? 270 : 0;
  appBarMargin = isPermanent ? appBarMargin : 0;

  return (
    <MyAppBar
      sx={(theme) => ({
        width: `calc(100% - ${appBarMargin}px)`,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        ...(appBarMargin && {
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
        }),
      })}
    >
      <Toolbar>
        <Grid container>
          <Grid item xs={12}>
            <Box sx={{mt: 3}}>
              {toggleDrawer && <MenuButton open={open} toggleDrawer={toggleDrawer} />}
              <img src={sfLogo} alt="Azure" />
            </Box>
          </Grid>
          <Grid item xs={12} sx={{mt: 0, ml: -1}}>
            <Typography component="h2" variant="h6" noWrap sx={{flexGrow: 1, fontWeight: 'bold', marginLeft: 2}}>
              <Breadcrumb />
            </Typography>
          </Grid>
        </Grid>

        <FullScreen />
        {/* <ThemeSwitch /> */}
        <Logout />
      </Toolbar>
    </MyAppBar>
  );
};

export default memo(AppBar);
