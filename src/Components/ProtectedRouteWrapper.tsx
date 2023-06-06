import {Navigate, useLocation} from 'react-router';

export interface ProtectedRouteWrapperProps {
  isAuthorized: (...args: any[]) => boolean;
  children: JSX.Element;
}

export const ProtectedRouteWrapper = ({isAuthorized, children}: ProtectedRouteWrapperProps) => {
  const location = useLocation();
  return isAuthorized() ? children : <Navigate to={'/login'} state={{from: location}} replace />;
};
