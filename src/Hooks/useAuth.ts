import {useSnackbar} from 'notistack';
import useConfig from './useConfig';
import {useDispatch, useSelector} from 'react-redux';
import {useLoginMutation, useLogoutMutation} from 'redux/auth/authApiSlice';
import type {LoginForm} from 'redux/auth/authApiSlice';
import {
  selectCurrentAuthState,
  selectCurrentLoginStatus,
  selectCurrentRefreshToken,
  setCredentials,
  unsetCredentials,
} from 'redux/auth/authSlice';

export default function useAuth() {
  const {
    config: {clientId},
  } = useConfig();

  const {enqueueSnackbar} = useSnackbar();

  const dispatch = useDispatch();
  const [loginApi, {isLoading: loginLoading}] = useLoginMutation();
  const [logoutApi, {isLoading: logoutLoading}] = useLogoutMutation();

  const refreshToken = useSelector(selectCurrentRefreshToken);
  const isLoggedIn = useSelector(selectCurrentLoginStatus);
  const authData = useSelector(selectCurrentAuthState);

  const login = async (values: LoginForm) => {
    try {
      const response = await loginApi({
        client_id: clientId,
        ...values,
      }).unwrap();
      dispatch(setCredentials(response));
      enqueueSnackbar('Login Successful', {variant: 'success'});
    } catch (err: any) {
      enqueueSnackbar(`${err.status}: ${err.data.error.name}`, {variant: 'error'});
    }
  };

  const logout = async () => {
    try {
      await logoutApi(refreshToken).unwrap();
      dispatch(unsetCredentials());
    } catch (err) {
      console.error(err);
    }
  };

  return {isLoggedIn, login, authData, logout, loginLoading, logoutLoading};
}
