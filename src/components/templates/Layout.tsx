import React, { FC } from 'react';
import Navigation from 'components/molecules/Navigation/Navigation';
// import { Outlet } from 'react-router-dom';

const Layout: FC = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
      {/* <Outlet /> */}
    </>
  );
};

export default Layout;
