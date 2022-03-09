import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Layout from 'components/templates/Layout';
import RequiredAuth from 'helpers/RequireAuth';
import Login from './Login.tsx';
import Dashboard from './Dashboard';
import MissingPage from './404';
import { useAuth } from 'hooks/useAuth';

const Root = () => {
  const auth = useAuth();
  console.log(auth);

  return (
    <Router>
      <nav>
        <Link to="/">Dashboard</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="sign-in" element={<Login />} />

          <Route element={<RequiredAuth />}>
            <Route path="/" element={<Dashboard />} />
          </Route>

          <Route path="*" element={<MissingPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Root;
