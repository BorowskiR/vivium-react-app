import { makeStyles, Theme, createStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapperDark: {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      width: 60,
      background: '#121212',
      display: 'flex',
      padding: '10px',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      '& img': {
        width: '40px',
      },
      [theme.breakpoints.up('sm')]: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100vw',
        height: '70px',
        padding: '10px 50px',
        '& img': {
          width: '100px',
        },
      },
    },
    wrapperLight: {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      width: 60,
      background: 'green',
      display: 'flex',
      padding: '10px',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      '& img': {
        width: '40px',
      },
      [theme.breakpoints.up('sm')]: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100vw',
        height: '70px',
        padding: '10px 50px',
        '& img': {
          width: '100px',
        },
      },
    },
    logoutBtn: {
      color: 'white',
      cursor: 'pointer',
      '&:hover': {
        color: '#ccc',
      },
    },
  })
);
