import useAuth from 'Hooks/useAuth';
import React from 'react';
import {Navigate} from 'react-router-dom';

interface AuthRedirectWrapperProps {
  children: JSX.Element;
}

/**
 * Wrapper component for redirecting authenticated users.
 * Authenticated users will be redirected to the home page, while unauthenticated users will render the provided children.
 *
 * @param children - JSX element that will be rendered if the user is unauthenticated.
 * @returns The authentication redirect component.
 */
// sonarignore:start
export const AuthRedirectWrapper: React.FC<AuthRedirectWrapperProps> = ({children}) => {
  // sonarignore:end
  const {isLoggedIn} = useAuth();
  return <>{isLoggedIn ? <Navigate to={'/home'} replace /> : children}</>;
};
