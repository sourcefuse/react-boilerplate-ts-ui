import AppRoutes from 'Routes/Routes';
import {getRouteConfig} from 'Routes/layoutRouteConfig';

function App() {
  return <AppRoutes routesConfig={getRouteConfig()} />;
}

export default App;
