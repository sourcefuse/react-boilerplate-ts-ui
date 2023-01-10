import {useQueryClient} from '@tanstack/react-query';
import axiosFactory from 'Helpers/axios';
import useMutation from 'Hooks/useMutation';
import {AuthContext, AuthData, LoginForm} from 'Providers/AuthProvider';
import {useCallback, useContext} from 'react';
import useConfig from './useConfig';

export default function useAuth() {
  const {isLoggedIn, setIsLoggedIn, setAuthData, authData} = useContext(AuthContext);
  const {
    config: {clientId, clientSecret, authApiBaseUrl},
  } = useConfig();
  const queryClient = useQueryClient();
  const client = axiosFactory(authApiBaseUrl);

  const {mutateAsync: loginRequest, isLoading: loginLoading} = useMutation<{data: AuthData}, LoginForm>({
    fn: (values: LoginForm) =>
      client.post(`/auth/login-token`, {
        client_id: clientId,
        client_secret: clientSecret,
        ...values,
      }),
    successMsg: 'Login successful',
  });

  const {mutateAsync: refreshRequest} = useMutation({
    fn: () =>
      client.post<any, {data: AuthData}>(
        `/auth/token-refresh`,
        {
          refreshToken: authData.refreshToken,
        },
        {
          headers: {
            Authorization: `Bearer ${authData.accessToken}`,
          },
        },
      ),
  });

  // const {mutateAsync: signUpRequest, isLoading: signUpLoading} = useMutation<AuthData, SignUpForm>({
  //   fn: (values: SignUpForm) => client.post<any, AuthData>(`/auth/sign-up`, values),
  //   successMsg: 'Sign up successful',
  // });

  const login = useCallback(
    async (val: LoginForm) => {
      const {data} = await loginRequest(val);
      setAuthData(data);
      setIsLoggedIn(true);
    },
    [loginRequest, setIsLoggedIn, setAuthData],
  );

  const logout = useCallback(() => {
    queryClient.clear();
    setIsLoggedIn(false);
    localStorage.clear();
    sessionStorage.clear();
  }, [queryClient, setIsLoggedIn]);

  const refresh = useCallback(async () => {
    try {
      const {data} = await refreshRequest({});
      setAuthData(data);
      return data;
    } catch (e) {
      logout();
    }
  }, [logout, refreshRequest, setAuthData]);

  // const signUp = useCallback(
  //   async (userObj: SignUpForm) => {
  //     delete userObj.terms;
  //     const data = await signUpRequest(userObj);
  //     setAuthData(data);
  //     setIsLogin(true);
  //   },
  //   [setIsLogin, setAuthData, signUpRequest],
  // );

  return {isLoggedIn, login, authData, logout, loginLoading, refresh};
}
