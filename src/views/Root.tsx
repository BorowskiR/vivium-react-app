import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard';
import BeerDetails from './BeerDetails';
import { useAuth } from 'hooks/useAuth';
import { useError } from 'hooks/useError';
import ErrorMessage from 'components/molecules/ErrorMessage/ErrorMessage';
import Layout from 'components/templates/Layout';

const AuthenticatedApp = () => {
  return (
    <>
      <Layout>
        <Routes>
          {/* protected route */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/beers/:id" element={<BeerDetails />} />
        </Routes>
      </Layout>
    </>
  );
};

const UnauthenticatedApp = () => {
  return (
    <>
      <Routes>
        {/* public route */}
        <Route path="sign-in" element={<Login />} />

        {/* catch all */}
        {/* <Route path="*" element={<MissingPage />} /> */}
      </Routes>
    </>
  );
};

const Root = () => {
  const auth = useAuth();
  const { error } = useError();
  return (
    <>
      {error ? <ErrorMessage message={error} /> : null}
      {auth.user ? <AuthenticatedApp /> : <UnauthenticatedApp />};
    </>
  );
};

export default Root;
