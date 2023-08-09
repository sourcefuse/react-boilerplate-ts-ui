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
  const {enableSessionTimeout, expiryTimeInMinute, promptTimeBeforeIdleInMinute} = useConfig().config;
  const {isLoggedIn} = useAuth();

  useEffect(() => {
    const dispatchThunk = async () => {
      await dispatch(fetchConfigData()).unwrap();
    };
    dispatchThunk();
  }, [dispatch]);
  return (
    <>
      <AppRoutes routesConfig={getRouteConfig()} />
      {enableSessionTimeout && isLoggedIn ? (
        <SessionTimeout
          expiryTimeInMinute={expiryTimeInMinute}
          promptTimeBeforeIdleInMinute={promptTimeBeforeIdleInMinute}
        />
      ) : null}
    </>
  );
}

export default App;
