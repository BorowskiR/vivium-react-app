import React, { FC } from 'react';
import { useAuth } from 'hooks/useAuth';
import { Button } from '@material-ui/core';

const Dashboard: FC = () => {
  const auth = useAuth();

  return (
    <div>
      <Button onClick={auth.signOut}>Logout</Button>
    </div>
  );
};

export default Dashboard;
