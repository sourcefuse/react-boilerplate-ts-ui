import {Box, Typography} from '@mui/material';
import BackdropLoader from 'Components/BackdropLoader';
import useOnlineStatus from 'Providers/OnlineStatusProvider';
import React, {Suspense} from 'react';
import {useRoutes} from 'react-router-dom';
import routesConfig from './layoutRouteConfig';

const Routes = () => {
  const isOnline = useOnlineStatus();
  const routes = useRoutes(routesConfig);
  return (
    <Suspense fallback={<BackdropLoader />}>
      <Box
        sx={{
          position: 'absolute',
          bgcolor: 'error.main',
          transition: 'height 1s',
          overflow: 'hidden',
          height: isOnline ? 0 : 30,
          width: 1,
          zIndex: 1,
        }}
      >
        <Typography align="center" sx={{p: 0.5}}>
          Internet connection lost
        </Typography>
      </Box>
      {routes}
    </Suspense>
  );
};

export default Routes;
