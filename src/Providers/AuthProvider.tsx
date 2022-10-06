import useLocalStorage from 'Hooks/useLocalStorage';
import PropTypes from 'prop-types';
import {createContext, useCallback, useState} from 'react';

// @ts-ignore
const defaultAuthContextValue = {
  authStateLoading: true,
  loggedIn: false,
  token: null,
  refreshToken: null,
  setAuth: (loggedIn: boolean, token: string | null, refreshToken: string | null) => {},
  setToken: (value: string | null) => {},
  setRefreshToken: (value: string | null) => {},
  setAuthStateLoading: (value: boolean) => {},
};
export const AuthContext = createContext(defaultAuthContextValue);
function AuthProvider({children}) {
  const [authStateLoading, setAuthStateLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const [refreshToken, setRefreshToken] = useLocalStorage('rbp_refresh_token', null);
  const [token, setToken] = useLocalStorage('rbp_access_token', null);
  const setAuth = useCallback((loggedIn: boolean, token: string | null, refreshToken: string | null) => {
    setLoggedIn(loggedIn);
    setToken(token);
    setRefreshToken(refreshToken);
  }, []);
  return (
    <AuthContext.Provider
      value={{
        authStateLoading,
        loggedIn,
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

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
