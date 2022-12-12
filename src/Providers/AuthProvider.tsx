import useLocalStorage from 'Hooks/useLocalStorage';
import {createContext, ReactNode, useCallback, useState} from 'react';

const defaultAuthContextValue = {
  authStateLoading: true,
  isLoggedIn: false,
  token: null,
  refreshToken: null,
  setAuth: (isLoggedIn: boolean, token: string | null, refreshToken: string | null) => {},
  setToken: (value: string | null) => {},
  setRefreshToken: (value: string | null) => {},
  setAuthStateLoading: (value: boolean) => {},
};

export const AuthContext = createContext(defaultAuthContextValue);
function AuthProvider({children}: {children: ReactNode}) {
  const [authStateLoading, setAuthStateLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [refreshToken, setRefreshToken] = useLocalStorage<string | null>('rbp_refresh_token', null);
  const [token, setToken] = useLocalStorage<string | null>('rbp_access_token', null);
  const setAuth = useCallback(
    (isLoggedIn: boolean, token: string | null, refreshToken: string | null) => {
      setIsLoggedIn(isLoggedIn);
      setToken(token);
      setRefreshToken(refreshToken);
    },
    [setRefreshToken, setToken],
  );
  return (
    <AuthContext.Provider
      value={{
        authStateLoading,
        isLoggedIn,
        token,
        refreshToken,
        setAuth,
        setToken,
        setRefreshToken,
        setAuthStateLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
