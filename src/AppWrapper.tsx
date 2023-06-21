import {LocalizationProvider} from '@mui/x-date-pickers';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import App from 'App';
import ErrorBoundary from 'Providers/ErrorBoundary';
import NotificationProvider from 'Providers/NotificationProvider';
import ThemeProvider from 'Providers/theme/ThemeProvider';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {store} from './redux/store';

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
    <Provider store={store}>
      <ErrorBoundary>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <QueryClientProvider client={queryClient} contextSharing={true}>
            <BrowserRouter>
              <ThemeProvider>
                <NotificationProvider>
                  <App />
                </NotificationProvider>
              </ThemeProvider>
            </BrowserRouter>
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </LocalizationProvider>
      </ErrorBoundary>
    </Provider>
  );
}

export default AppWrapper;
