import {LocalizationProvider} from '@mui/x-date-pickers';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import SessionTimeout from 'Components/SessionTimeout';
import {getAppConfiguration} from 'Configuration';
import AuthProvider from 'Providers/AuthProvider';
import ErrorBoundary from 'Providers/ErrorBoundary';
import NotificationProvider from 'Providers/NotificationProvider';
import ThemeProvider from 'Providers/theme/ThemeProvider';
import {BrowserRouter} from 'react-router-dom';
import AppRoutes from 'Routes/Routes';

const queryClient = new QueryClient();
const appconfig = getAppConfiguration();
const sessionTimeoutFlag = appconfig.enable_session_timeout;
function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <ErrorBoundary>
        <QueryClientProvider client={queryClient} contextSharing={true}>
          <BrowserRouter>
            <ThemeProvider>
              <AuthProvider>
                <NotificationProvider>
                  <AppRoutes />
                  {sessionTimeoutFlag ? <SessionTimeout /> : null}
                </NotificationProvider>
              </AuthProvider>
            </ThemeProvider>
          </BrowserRouter>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ErrorBoundary>
    </LocalizationProvider>
  );
}

export default App;
