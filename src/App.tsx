import AuthProvider from './Providers/AuthProvider';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import AppRoutes from './Routes/Routes';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
