import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Toolbar from '@mui/material/Toolbar';
import AppBar from 'Components/AppBar';
import {Suspense, useState} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import headerLayoutRouteConfig from './headerLayoutRouteConfig';

const Headerlayout = () => {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => setOpen((prev) => !prev);
  return (
    <>
      <AppBar open={open} toggleDrawer={toggleDrawer} data-testid="headernav" />
      <Box component="main" sx={{padding: 3}}>
        <Toolbar />
        <Suspense fallback={<LinearProgress />}>
          <Routes>
            {headerLayoutRouteConfig.map(({path, component: Component}, index) => (
              <Route path={path} element={<Component />} key={`header-${index}`} />
            ))}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </Box>
    </>
  );
};

export default Headerlayout;
// export default memo(Headerlayout);