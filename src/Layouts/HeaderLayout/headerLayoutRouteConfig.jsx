import {lazy} from 'react';

const Components = lazy(() => import('Pages/Components'));

const headerLayoutRouteConfig = [
  {
    path: '/',
    component: Components,
  },
];

export default headerLayoutRouteConfig;
