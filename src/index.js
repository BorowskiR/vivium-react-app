import React from 'react';
import ReactDOM from 'react-dom';
import Root from './views/Root';
import { worker } from './mocks/browser';
import 'assets/styles/globals.css';
import { AuthProvider } from 'hooks/useAuth';
import { BrowserRouter as Router } from 'react-router-dom';
import BeersProvider from 'providers/BeersProvider';
import { ErrorProvider } from 'hooks/useError';
import { ColorModeProvider } from 'providers/ColorModeProvider';
import CssBaseline from '@mui/material/CssBaseline';

worker.start().then(() => {
  ReactDOM.render(
    <React.StrictMode>
      <Router>
        <ColorModeProvider>
          <CssBaseline />
          <ErrorProvider>
            <AuthProvider>
              <BeersProvider>
                <Root />
              </BeersProvider>
            </AuthProvider>
          </ErrorProvider>
        </ColorModeProvider>
      </Router>
    </React.StrictMode>,
    document.getElementById('root')
  );
});
