import {OidcSecure, useOidc} from '@axa-fr/react-oidc';
import BackdropLoader from '../Components/BackdropLoader/BackdropLoader';
import PropTypes from 'prop-types';
import {lazy, Suspense} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import layoutRouteConfig from './layoutRouteConfig';
const NotFound = lazy(() => import('../Pages/NotFound'));

const RouteGenerator = ({path, redirect, isPrivate, component: Component, key, restricted, isLogin}) => {
  if (redirect) {
    return <Route path={path} key={key} element={<Navigate to={redirect} />} />;
  } else if (isPrivate) {
    return (
      <Route
        path={path}
        key={key}
        element={
          <OidcSecure>
            <Component />
          </OidcSecure>
        }
      />
    );
  } else {
    return <Route path={path} key={key} element={isLogin && restricted ? <Navigate to={'/'} /> : <Component />} />;
  }
};

RouteGenerator.propTypes = {
  component: PropTypes.node.isRequired,
  path: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
  redirect: PropTypes.string,
  isPrivate: PropTypes.bool,
  restricted: PropTypes.bool,
  isLogin: PropTypes.bool,
};

const AppRoutes = () => {
  const {oidcUser} = useOidc();
  return (
    <Suspense fallback={<BackdropLoader />}>
      <Routes>
        {layoutRouteConfig.map((route, id) =>
          RouteGenerator({...route, key: `${route.path}-${id}`, isLogin: !!oidcUser}),
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
