import {ProtectedRouteWrapper} from 'Components/ProtectedRouteWrapper';
import {authorizationFunctions} from 'Helpers/authorizationFunctions';
import React, {lazy} from 'react';
import {Navigate, RouteObject} from 'react-router';
const Login = lazy(() => import('../Pages/Login'));
const Mainlayout = lazy(() => import('Layouts/MainLayout/Mainlayout'));

const routesConfig: RouteObject[] = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <Navigate to={'/home'} replace />,
  },
  {
    path: '/*',
    element: (
      <ProtectedRouteWrapper isAuthorized={authorizationFunctions.isAuthenticated}>
        <Mainlayout />
      </ProtectedRouteWrapper>
    ),
  },
];

export default routesConfig;
