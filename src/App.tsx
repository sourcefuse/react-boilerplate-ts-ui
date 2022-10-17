import SessionTimeout from 'Components/SessionTimeout';
import {getAppConfiguration} from 'Configuration';
import ErrorBoundary from 'Providers/ErrorBoundary';
import ThemeProvider from 'Providers/theme/ThemeProvider';
import {BrowserRouter} from 'react-router-dom';
import AuthProvider from './Providers/AuthProvider';
import AppRoutes from './Routes/Routes';

const appconfig = getAppConfiguration();
const sessionTimeoutFlag = appconfig.enable_session_timeout;
function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <AuthProvider>
          <ThemeProvider>
            <AppRoutes />
            {sessionTimeoutFlag ? <SessionTimeout /> : null}
          </ThemeProvider>
        </AuthProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
