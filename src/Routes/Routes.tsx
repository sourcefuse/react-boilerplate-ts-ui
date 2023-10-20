import {Box, Typography} from '@mui/material';
import BackdropLoader from 'Components/BackdropLoader';
import useOnlineStatus from 'Providers/OnlineStatusProvider';
import React, {Suspense} from 'react';
import {RouteObject, useRoutes} from 'react-router-dom';

interface RoutesProps {
  routesConfig: RouteObject[];
}

/**
 * Renders the routes of the application based on the provided routes configuration.
 *
 * @param {RoutesProps} routesConfig - The configuration of routes to render.
 * @returns The rendered Routes component.
 */
const NOT_ONLINE_HEIGHT = 30;

const Routes: React.FC<RoutesProps> = ({routesConfig}) => {
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
          height: isOnline ? 0 : NOT_ONLINE_HEIGHT,
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
