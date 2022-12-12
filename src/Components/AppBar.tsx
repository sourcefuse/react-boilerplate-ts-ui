import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import {Menu, MenuItem, Typography} from '@mui/material';
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
import sfLogo from 'Images/SF_logo.png';
import {memo, useState} from 'react';
import Button from './Button';

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

const AppBar = ({open, toggleDrawer, isPermanent, userName}: IAppBarProps & {userName?: string}) => {
  let appBarMargin = open ? 270 : 0;
  appBarMargin = isPermanent ? appBarMargin : 0;
  const {logout} = useAuth();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const menuOpen = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
              <img src={sfLogo} alt="sfLogo" />
            </Box>
          </Grid>
          <Grid item xs={12} sx={{mt: 1, ml: -1}}>
            <Typography component="h2" variant="h6" noWrap sx={{flexGrow: 1, fontWeight: 'bold', marginLeft: 2}}>
              <Breadcrumb />
            </Typography>
          </Grid>
        </Grid>

        <FullScreen />
        {/* <ThemeSwitch /> */}

        <Button
          startIcon={<AccountCircleIcon />}
          endIcon={<KeyboardArrowDownIcon />}
          id="menu-button"
          aria-controls={menuOpen ? 'menu' : undefined}
          aria-haspopup="true"
          aria-expanded={menuOpen ? 'true' : undefined}
          onClick={handleClick}
          sx={{border: '1px solid', borderRadius: 50}}
        >
          <Box sx={{width: 150, textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden'}}>{userName}</Box>
        </Button>
        <Menu
          id="menu"
          MenuListProps={{
            'aria-labelledby': 'menu-button',
          }}
          anchorEl={anchorEl}
          open={menuOpen}
          onClose={handleClose}
        >
          <MenuItem onClick={logout}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </MyAppBar>
  );
};

export default memo(AppBar);
