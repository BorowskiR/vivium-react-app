import React, { FC } from 'react';
import SideBar from 'components/molecules/SideBar/Sidebar';
// import { Outlet } from 'react-router-dom';

const Layout: FC = ({ children }) => {
  return (
    <>
      <SideBar />
      {children}
      {/* <Outlet /> */}
    </>
  );
};

export default Layout;
