import React from 'react';
import ReactDOM from 'react-dom';
import Root from './views/Root';
import { worker } from './mocks/browser';
import 'assets/globals.css';
import { AuthProvider } from 'hooks/useAuth';
import { BrowserRouter as Router } from 'react-router-dom';

worker.start().then(() => {
  ReactDOM.render(
    <React.StrictMode>
      <Router>
        <AuthProvider>
          <Root />
        </AuthProvider>
      </Router>
    </React.StrictMode>,
    document.getElementById('root')
  );
});
