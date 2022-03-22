import { makeStyles, Theme, createStyles } from '@material-ui/core';

interface Props {
  mode: string;
}

export const useStyles = makeStyles<Theme, Props>((theme) =>
  createStyles({
    wrapper: {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      width: 60,
      background: ({ mode }) => (mode === 'light' ? '#c5c5c5' : '#212121'),
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
      cursor: 'pointer',
      '&:hover': {
        color: '#ccc',
      },
    },
  })
);
