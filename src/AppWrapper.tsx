import {LocalizationProvider} from '@mui/x-date-pickers';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import App from 'App';
import AuthProvider from 'Providers/AuthProvider';
import ErrorBoundary from 'Providers/ErrorBoundary';
import NotificationProvider from 'Providers/NotificationProvider';
import ThemeProvider from 'Providers/theme/ThemeProvider';
import {BrowserRouter} from 'react-router-dom';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 2,
    },
  },
});

function AppWrapper() {
  return (
    <ErrorBoundary>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <QueryClientProvider client={queryClient} contextSharing={true}>
          <BrowserRouter>
            <ThemeProvider>
              <AuthProvider>
                <NotificationProvider>
                  <App />
                </NotificationProvider>
              </AuthProvider>
            </ThemeProvider>
          </BrowserRouter>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </LocalizationProvider>
    </ErrorBoundary>
  );
}

export default AppWrapper;
