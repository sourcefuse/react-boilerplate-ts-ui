import useAuth from 'Hooks/useAuth';
import PropTypes from 'prop-types';
import {lazy, Suspense} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import BackdropLoader from '../Components/BackdropLoader/BackdropLoader';
import PersistLogin from '../Components/PersistLogin';
import RequireAuth from '../Components/RequireAuth';
import layoutRouteConfig, {IRoute} from './layoutRouteConfig';
const NotFound = lazy(() => import('../Pages/NotFound'));

interface IGenerateRouteProps {
  key: string;
  isLoggedIn: boolean;
}

const RouteGenerator = (props: IRoute & IGenerateRouteProps) => {
  const {path, redirect, isPrivate, component: Component, key, restricted, isLoggedIn} = props;
  if (redirect) {
    return <Route path={path} key={key} element={<Navigate to={redirect} />} />;
  } else if (isPrivate) {
    return (
      <Route element={<RequireAuth />}>
        <Route path={path} key={key} element={<Component />} />
      </Route>
    );
  } else {
    return <Route path={path} key={key} element={isLoggedIn && restricted ? <Navigate to={'/'} /> : <Component />} />;
  }
};

RouteGenerator.propTypes = {
  component: PropTypes.node.isRequired,
  path: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
  redirect: PropTypes.string,
  isPrivate: PropTypes.bool,
  restricted: PropTypes.bool,
  isLoggedIn: PropTypes.bool,
};

const AppRoutes = () => {
  const {loggedIn} = useAuth();
  return (
    <Suspense fallback={<BackdropLoader />}>
      <Routes>
        <Route element={<PersistLogin />}>
          {layoutRouteConfig.map((route, id) =>
            RouteGenerator({...route, key: `${route.path}-${id}`, isLoggedIn: loggedIn}),
          )}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
