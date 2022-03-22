import { makeStyles, Theme, createStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      marginTop: 100,
      [theme.breakpoints.up('sm')]: {},
    },
    indicator: {
      position: 'absolute',
      left: '50%',
      top: '10%',
      transform: 'translateX(-50%)',
    },
    bedge: {
      width: '200px',
      margin: '20px auto',
    },
  })
);
