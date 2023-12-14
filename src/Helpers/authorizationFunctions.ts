import useAuth from 'Hooks/useAuth';

export interface AnyFunctions {
  [key: string]: (...args: any[]) => boolean; // NOSONAR
}

const IsAuthenticated = () => {
  // NOSONAR typescript:S100
  const {isLoggedIn} = useAuth();
  return !!isLoggedIn;
};

export const authorizationFunctions: AnyFunctions = {
  isAuthenticated: IsAuthenticated,
};
