import React from 'react';
import ReactDOM from 'react-dom/client';
import {HelmetProvider} from 'react-helmet-async';
import AppWrapper from './AppWrapper';
import CSPMeta from './Components/CSP';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <CSPMeta />
      <AppWrapper />
    </HelmetProvider>
  </React.StrictMode>,
);
