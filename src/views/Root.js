import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from 'components/templates/Layout';
import Login from './Login';
import Dashboard from './Dashboard';
import MissingPage from './404';

const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="sign-in" element={<Login />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<MissingPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Root;
