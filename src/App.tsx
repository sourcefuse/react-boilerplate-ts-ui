import {useEffect} from 'react';
import AppRoutes from 'Routes/Routes';
import {getRouteConfig} from 'Routes/layoutRouteConfig';
import {fetchConfigData} from 'redux/config/configThunk';
import {useAppDispatch} from 'redux/hooks';
import useConfig from 'Hooks/useConfig';
import SessionTimeout from 'Components/SessionTimeout/SessionTimeout';
import useAuth from 'Hooks/useAuth';

function App() {
  const dispatch = useAppDispatch();
  const {enableSessionTimeout} = useConfig().config;
  const {isLoggedIn} = useAuth();

  useEffect(() => {
    dispatch(fetchConfigData());
  }, [dispatch]);
  return (
    <>
      <AppRoutes routesConfig={getRouteConfig()} />
      {enableSessionTimeout && isLoggedIn ? <SessionTimeout /> : null}
    </>
  );
}

export default App;
