import React from 'react';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useStyles } from './styles';
import { useAuth } from 'hooks/useAuth';
import Logo from 'assets/images/beers.png';

const SideBar = () => {
  const classes = useStyles();
  const auth = useAuth();

  return (
    <div className={classes.wrapper}>
      <img src={Logo} alt="logo" />
      <ExitToAppIcon onClick={auth.signOut} className={classes.logoutBtn} />
    </div>
  );
};

export default SideBar;
