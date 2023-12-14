import {FetchBaseQueryError} from '@reduxjs/toolkit/dist/query';
import {useSnackbar} from 'notistack';
import {ILoginForm, useLoginMutation, useLogoutMutation} from 'redux/auth/authApiSlice';
import {
  selectCurrentAuthState,
  selectCurrentLoginStatus,
  selectCurrentRefreshToken,
  setCredentials,
  unsetCredentials,
} from 'redux/auth/authSlice';
import {useAppDispatch, useAppSelector} from 'redux/hooks';
import useConfig from './useConfig';

type ErrorObject = {statusCode: number; name: string; message: string};

/**
 * Type predicate to narrow an unknown error to `FetchBaseQueryError`
 */
export function isFetchBaseQueryError(error: unknown): error is FetchBaseQueryError {
  return typeof error === 'object' && error != null && 'status' in error;
}

/**
 * Type predicate to narrow an unknown data property in `FetchBaseQueryError`
 */
export function hasErrorObject(obj: unknown): obj is {error: ErrorObject} {
  return typeof obj === 'object' && obj !== null && 'error' in obj;
}

/**
 * Custom hook for handling authentication-related functionality.
 * Manages login, logout, and provides necessary data and loading states.
 */
export default function useAuth() {
  const {
    config: {clientId},
  } = useConfig();

  const {enqueueSnackbar} = useSnackbar();

  const dispatch = useAppDispatch();
  const [loginApi, {isLoading: loginLoading}] = useLoginMutation();
  const [logoutApi, {isLoading: logoutLoading}] = useLogoutMutation();

  const refreshToken = useAppSelector(selectCurrentRefreshToken);
  const isLoggedIn = useAppSelector(selectCurrentLoginStatus);
  const authData = useAppSelector(selectCurrentAuthState);

  /**
   * Performs login with the provided login form values.
   * @param values - credentials.
   */
  const login = async (values: ILoginForm) => {
    try {
      const response = await loginApi({
        client_id: clientId,
        ...values,
      }).unwrap();
      dispatch(setCredentials(response));
      enqueueSnackbar('Login Successful', {variant: 'success'});
    } catch (err) {
      if (isFetchBaseQueryError(err) && hasErrorObject(err?.data)) {
        enqueueSnackbar(`${err.status}: ${err?.data?.error?.name}`, {variant: 'error'});
      }
    }
  };

  /**
   * Performs logout by making a request to the logout API endpoint and clearing storages.
   */
  const logout = async () => {
    try {
      await logoutApi(refreshToken).unwrap();
      dispatch(unsetCredentials());
    } catch (err) {
      console.error(err); // NOSONAR
    }
  };

  return {isLoggedIn, login, authData, logout, loginLoading, logoutLoading};
}
