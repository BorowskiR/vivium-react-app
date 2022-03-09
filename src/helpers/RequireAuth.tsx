import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

import React from 'react';

const RequireAuth = () => {
  const auth = useAuth();

  return auth?.user ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default RequireAuth;
