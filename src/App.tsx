import SessionTimeout from 'Components/SessionTimeout';
import useConfig from 'Hooks/useConfig';
import AppRoutes from 'Routes/Routes';
import {getRouteConfig} from 'Routes/layoutRouteConfig';

function App() {
  const {config} = useConfig();
  return (
    <>
      <AppRoutes routesConfig={getRouteConfig()} />
      {config?.enableSessionTimeout ? <SessionTimeout /> : null}
    </>
  );
}

export default App;
