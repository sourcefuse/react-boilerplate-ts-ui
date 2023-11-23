import useAuth from 'Hooks/useAuth';

const IsAuthenticated = () => {
  const {isLoggedIn} = useAuth();
  return !!isLoggedIn;
};

export interface AnyFunctions {
  [key: string]: (...args: any[]) => boolean; // NOSONAR
}

export const authorizationFunctions: AnyFunctions = {
  isAuthenticated: IsAuthenticated,
};
