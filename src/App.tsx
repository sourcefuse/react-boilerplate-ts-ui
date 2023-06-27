import {useEffect} from 'react';
import AppRoutes from 'Routes/Routes';
import {getRouteConfig} from 'Routes/layoutRouteConfig';
import {fetchConfigData} from 'redux/config/configThunk';
import {useAppDispatch} from 'redux/hooks';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchConfigData());
  }, [dispatch]);
  return <AppRoutes routesConfig={getRouteConfig()} />;
}

export default App;
