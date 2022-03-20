import React from 'react';
import ReactDOM from 'react-dom';
import Root from './views/Root';
import { worker } from './mocks/browser';
import 'assets/styles/globals.css';
import { AuthProvider } from 'hooks/useAuth';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import theme from 'assets/styles/theme';
import BeersProvider from 'providers/BeersProvider';
import { ErrorProvider } from 'hooks/useError';

worker.start().then(() => {
  ReactDOM.render(
    <React.StrictMode>
      <Router>
        <ThemeProvider theme={theme}>
          <ErrorProvider>
            <AuthProvider>
              <BeersProvider>
                <Root />
              </BeersProvider>
            </AuthProvider>
          </ErrorProvider>
        </ThemeProvider>
      </Router>
    </React.StrictMode>,
    document.getElementById('root')
  );
});
