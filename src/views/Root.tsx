import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import MissingPage from './404';
import { useAuth } from 'hooks/useAuth';

const AuthenticatedApp = () => {
  return (
    <Routes>
      {/* protected route */}
      <Route path="/" element={<Dashboard />} />
      <Route path="*" element={<MissingPage />} />
    </Routes>
  );
};

const UnauthenticatedApp = () => {
  return (
    <Routes>
      {/* public route */}
      <Route path="sign-in" element={<Login />} />

      {/* catch all */}
      <Route path="*" element={<MissingPage />} />
    </Routes>
  );
};

const Root = () => {
  const auth = useAuth();

  return auth.user ? <AuthenticatedApp /> : <UnauthenticatedApp />;
};

export default Root;
