// import {lazy} from 'react';
import Mainlayout from '../Layouts/MainLayout/Mainlayout';
import HeaderLayout from '../Layouts/HeaderLayout/HeaderLayout';
// const Mainlayout = lazy(() => import('Layouts/MainLayout/Mainlayout'));
// const HeaderLayout = lazy(() => import('Layouts/HeaderLayout/HeaderLayout'));

export interface LayoutRouteConfig {
  path: string;
  redirect?: string;
  component?: any;
  isPrivate?: boolean;
}

const layoutRouteConfig: LayoutRouteConfig[] = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/*',
    component: Mainlayout,
    isPrivate: true,
  },
  {
    path: '/components',
    component: HeaderLayout,
    isPrivate: true,
  },
];

export default layoutRouteConfig;
