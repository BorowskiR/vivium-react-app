import React from 'react';
import ReactDOM from 'react-dom';
import Root from './views/Root';
import { worker } from './mocks/browser';
import 'assets/globals.css';
import { AuthProvider } from 'hooks/useAuth';

worker.start().then(() => {
  ReactDOM.render(
    <React.StrictMode>
      <AuthProvider>
        <Root />
      </AuthProvider>
    </React.StrictMode>,
    document.getElementById('root')
  );
});
