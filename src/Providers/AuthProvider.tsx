import useLocalStorage from 'Hooks/useLocalStorage';
import React, {createContext, ReactNode, useMemo} from 'react';

export interface AuthData {
  accessToken: string;
  refreshToken: string;
  expires: number;
}

export type LoginForm = {email: string; password: string};

interface AuthContextType {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  authData: AuthData;
  setAuthData: React.Dispatch<React.SetStateAction<AuthData>>;
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthContextProvider = ({children}: {children?: ReactNode}) => {
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage<boolean>('isLoggedIn', false);
  const [authData, setAuthData] = useLocalStorage<AuthData>('authData', {} as AuthData);

  const value = useMemo(
    () => ({
      isLoggedIn,
      setIsLoggedIn,
      authData,
      setAuthData,
    }),
    [isLoggedIn, setIsLoggedIn, authData, setAuthData],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
