import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Toolbar from '@mui/material/Toolbar';
import AppBar from 'Components/AppBar';
import {memo, Suspense} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import headerLayoutRouteConfig from './headerLayoutRouteConfig';

const Headerlayout = () => {
  return (
    <>
      <AppBar />
      <Box component="main" sx={{padding: 3}}>
        <Toolbar />
        <Suspense fallback={<LinearProgress />}>
          <Routes>
            {headerLayoutRouteConfig.map(({path, component: Component}) => (
              <Route path={path} element={<Component />} key={path} />
            ))}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </Box>
    </>
  );
};

export default memo(Headerlayout);
