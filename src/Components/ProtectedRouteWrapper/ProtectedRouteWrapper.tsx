import {authorizationFunctions} from 'Helpers/authorizationFunctions';
import {Navigate, useLocation} from 'react-router-dom';

export interface ProtectedRouteWrapperProps {
  children: JSX.Element;
  isAuthorized?: (...args: any[]) => boolean; // NOSONAR
}

/**
 * Wrapper component for protected routes.
 * Authenticated users are rendered the requested page while unauthenticated users are redirected to the login page.
 *
 * @param children - JSX element that will be displayed if the user is authenticated.
 * @param isAuthorized - A function that checks the authorization of a user. It should return `true` if the user is authenticated, and `false` otherwise.
 *                       By default, it uses `authorizationFunctions.isAuthenticated`.
 * @returns The protected route component.
 */
export const ProtectedRouteWrapper = ({
  isAuthorized = authorizationFunctions.isAuthenticated,
  children,
}: ProtectedRouteWrapperProps) => {
  const location = useLocation();
  return <>{isAuthorized() ? children : <Navigate to={'/login'} state={{from: location}} replace />}</>;
};
