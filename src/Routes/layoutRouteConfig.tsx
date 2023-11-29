import {AuthRedirectWrapper} from 'Components/AuthRedirectWrapper';
import {ProtectedRouteWrapper} from 'Components/ProtectedRouteWrapper';
import {lazy} from 'react';
import {Navigate, RouteObject} from 'react-router';
const Login = lazy(() => import('../Pages/Login'));
const Mainlayout = lazy(() => import('Layouts/MainLayout/Mainlayout'));

/**
 * Routes that require authorization are protected using the ProtectedRouteWrapper component (default authorization is user authentication).
 * Authenticated users are redirected to the home page using the AuthRedirectWrapper component.
 *
 * @returns An array of RouteObject defining the routes of the application.
 */
export const getRouteConfig = (): RouteObject[] => {
  return [
    {
      path: '/login',
      element: (
        <AuthRedirectWrapper>
          <Login />
        </AuthRedirectWrapper>
      ),
    },
    {
      path: '/',
      element: <Navigate to={'/home'} replace />,
    },
    {
      path: '/*',
      element: (
        <ProtectedRouteWrapper>
          <Mainlayout />
        </ProtectedRouteWrapper>
      ),
    },
  ];
};
