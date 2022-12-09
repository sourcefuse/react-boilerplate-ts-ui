import useAuth from 'Hooks/useAuth';
import useRefreshToken from 'Hooks/useRefreshToken';
import {useEffect} from 'react';
import {Outlet} from 'react-router';
import BackdropLoader from './BackdropLoader/BackdropLoader';

const PersistLogin = () => {
  const refresh = useRefreshToken();
  const {isLoggedIn, doLogIn, authStateLoading: loading, setAuthStateLoading: setLoading} = useAuth();
  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        const {accessToken, refreshToken} = await refresh();
        doLogIn(accessToken, refreshToken);
      } catch (err) {
        console.error('error while verify refresh token => ', err);
      } finally {
        setLoading(false);
      }
    };
    !isLoggedIn ? verifyRefreshToken() : setLoading(false);
  }, []);
  return loading ? <BackdropLoader /> : <Outlet />;
};

export default PersistLogin;
