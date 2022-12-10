import React, {lazy} from 'react';
const Login = lazy(() => import('../Pages/Login'));
const LoginRedirect = lazy(() => import('../Pages/LoginRedirect'));
const Mainlayout = lazy(() => import('Layouts/MainLayout/Mainlayout'));

export interface IRoute {
  component?:
    | React.LazyExoticComponent<() => JSX.Element>
    | React.LazyExoticComponent<React.MemoExoticComponent<() => JSX.Element>>;
  path: string;
  redirect?: string;
  isPrivate?: boolean;
  restricted?: boolean;
}

const layoutRouteConfig: IRoute[] = [
  {
    path: '/login',
    component: Login,
    restricted: true,
  },
  {
    path: '/login_redirect',
    component: LoginRedirect,
  },

  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/*',
    component: Mainlayout,
  },
];

export default layoutRouteConfig;
