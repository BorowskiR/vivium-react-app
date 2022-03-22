import React from 'react';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useStyles } from './styles';
import { useAuth } from 'hooks/useAuth';
import Logo from 'assets/images/beers.png';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '@mui/material/styles';
import { useColorMode } from 'providers/ColorModeProvider';

const SideBar = () => {
  const theme = useTheme();

  const { mode, toggleColorMode } = useColorMode();
  const classes = useStyles({ mode });
  const auth = useAuth();

  return (
    <div className={classes.wrapper}>
      <img src={Logo} alt="logo" />
      <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
      <ExitToAppIcon style={{ color: theme.palette.mode === 'dark' ? '#fff' : '#000' }} onClick={auth.signOut} className={classes.logoutBtn} />
    </div>
  );
};

export default SideBar;
