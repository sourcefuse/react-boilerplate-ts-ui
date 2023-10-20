import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Toolbar from '@mui/material/Toolbar';
import {styled, useTheme} from '@mui/material/styles';
import {MUIStyledCommonProps} from '@mui/system';
import AppBar from 'Components/AppBar';
import SideNav from 'Components/SideNav/SideNav';
import NotFound from 'Pages/NotFound';
import {Suspense, useCallback, useEffect, useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import {useGetUserQuery} from 'redux/auth/authApiSlice';
import mainLayoutRouteConfig from './mainLayoutRouteConfig';

const drawerWidth = 270;
const isAppBarFullWidth = false;

interface IMainProps extends MUIStyledCommonProps {
  open: boolean;
  isPermanent: boolean;
}
const Main = styled('main', {
  shouldForwardProp: prop => prop !== 'open' && prop !== 'isPermanent',
})<IMainProps>(({theme, open, isPermanent}) => ({
  flexGrow: 1,
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(isPermanent && !open && {marginLeft: `-${drawerWidth}px`}),
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const Mainlayout = () => {
  const [open, setOpen] = useState(true);
  const toggleDrawer = useCallback(() => setOpen(prev => !prev), []);
  const [isPermanent, setIsPermanent] = useState(true);
  const theme = useTheme();

  const {data: userData} = useGetUserQuery();

  const handleWindowWidthChange = useCallback(
    (firstRender?: boolean) => {
      const windowWidth = window.innerWidth;
      const breakpointWidth = theme.breakpoints.values.md;
      const isSmallScreen = windowWidth < breakpointWidth;
      if (firstRender && isSmallScreen) setOpen(false);
      setIsPermanent(!isSmallScreen);
    },
    [theme.breakpoints.values.md],
  );

  useEffect(() => {
    handleWindowWidthChange(true);
  }, [handleWindowWidthChange]);

  useEffect(
    function () {
      window.addEventListener('resize', () => handleWindowWidthChange());
      return function cleanup() {
        window.removeEventListener('resize', () => handleWindowWidthChange());
      };
    },
    [handleWindowWidthChange],
  );

  return (
    <Box sx={{display: 'flex'}}>
      <AppBar
        open={open}
        isPermanent={isPermanent}
        toggleDrawer={toggleDrawer}
        data-testid="sidenav"
        userName={userData ? `${userData.firstName} ${userData.lastName}` : 'User'}
      />
      <SideNav
        isPermanent={isPermanent}
        isAppBarFullWidth={isAppBarFullWidth}
        drawerWidth={drawerWidth}
        toggleDrawer={toggleDrawer}
        open={open}
        data-testid="sidenav"
      />
      <Main open={open} isPermanent={isPermanent}>
        <Toolbar />
        <Suspense fallback={<LinearProgress />}>
          <Routes>
            {mainLayoutRouteConfig.map(({path, component: Component}) => (
              <Route path={path} element={<Component />} key={path} />
            ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Main>
    </Box>
  );
};

export default Mainlayout;
