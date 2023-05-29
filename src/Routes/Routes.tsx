import {Box, Typography} from '@mui/material';
import BackdropLoader from 'Components/BackdropLoader';
import useAuth from 'Hooks/useAuth';
import useOnlineStatus from 'Providers/OnlineStatusProvider';
import React, {Suspense} from 'react';
import {Navigate, Route, Routes as ReactRoutes, useLocation, useSearchParams} from 'react-router-dom';
import layoutRouteConfig, {IRoute} from './layoutRouteConfig';

interface IGenerateRouteProps {
  key: string;
  isLoggedIn: boolean;
  originalPath: string;
  redirectTo: string;
}

const RouteGenerator: React.FC<IRoute & IGenerateRouteProps> = ({
  path,
  redirect,
  isPrivate,
  component: Component,
  key,
  restricted,
  isLoggedIn,
  originalPath,
  redirectTo,
  childRoutes,
}) => {
  let renderedComponent = null;

  if (redirect) {
    return <Route path={path} key={key} element={<Navigate to={redirect} />} />;
  } else if (isPrivate) {
    if (isLoggedIn && Component) {
      renderedComponent = <Route path={path} key={key} element={<Component />} />;
    } else {
      renderedComponent = (
        <Route path={path} key={key} element={<Navigate to={`/login?redirectTo=${originalPath}`} />} />
      );
    }
  } else {
    if (isLoggedIn && restricted) {
      renderedComponent = <Route path={path} key={key} element={<Navigate to={redirectTo || '/'} />} />;
    } else if (Component) {
      renderedComponent = <Route path={path} key={key} element={<Component />} />;
    }
  }

  if (childRoutes) {
    return (
      <>
        {renderedComponent}
        <Route key={key} path={path} element={Component && <Component />}>
          {childRoutes.map((childRoute, index) => {
            const routeGeneratorParams = {
              key,
              isLoggedIn,
              originalPath,
              redirectTo,
              ...childRoute,
            };
            return RouteGenerator(routeGeneratorParams);
          })}
        </Route>
      </>
    );
  }
  return renderedComponent;
};

const Routes = () => {
  const {isLoggedIn} = useAuth();
  const location = useLocation();
  const isOnline = useOnlineStatus();
  const originalPath = location.pathname + (location.search ? `/${location.search}` : '');
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get('redirectTo') || '';
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
      <ReactRoutes>
        {layoutRouteConfig.map((route, id) =>
          RouteGenerator({...route, key: `${route.path}-${id}`, isLoggedIn, originalPath, redirectTo}),
        )}
      </ReactRoutes>
    </Suspense>
  );
};

export default Routes;
