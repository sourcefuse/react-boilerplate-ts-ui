import ErrorBoundary from 'Providers/ErrorBoundary';
import ThemeProvider from 'Providers/theme/ThemeProvider';
import {BrowserRouter} from 'react-router-dom';
import AuthProvider from './Providers/AuthProvider';
import AppRoutes from './Routes/Routes';

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <AuthProvider>
          <ThemeProvider>
            <AppRoutes />
          </ThemeProvider>
        </AuthProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
