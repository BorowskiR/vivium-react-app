import React, { FC } from 'react';
import Navigation from 'components/molecules/Navigation/Navigation';

const Layout: FC = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
};

export default Layout;
