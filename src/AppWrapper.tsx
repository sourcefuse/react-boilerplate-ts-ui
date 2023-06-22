import {LocalizationProvider} from '@mui/x-date-pickers';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import App from 'App';
import ErrorBoundary from 'Providers/ErrorBoundary';
import NotificationProvider from 'Providers/NotificationProvider';
import ThemeProvider from 'Providers/theme/ThemeProvider';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {store} from './redux/store';

function AppWrapper() {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <BrowserRouter>
            <ThemeProvider>
              <NotificationProvider>
                <App />
              </NotificationProvider>
            </ThemeProvider>
          </BrowserRouter>
        </LocalizationProvider>
      </ErrorBoundary>
    </Provider>
  );
}

export default AppWrapper;
