import useAuth from 'Hooks/useAuth';
// sonarignore:start
const IsAuthenticated = () => {
  const {isLoggedIn} = useAuth();
  return !!isLoggedIn;
};
// sonarignore:end

export interface AnyFunctions {
  [key: string]: (...args: any[]) => boolean; // NOSONAR
}

export const authorizationFunctions: AnyFunctions = {
  isAuthenticated: IsAuthenticated,
};
