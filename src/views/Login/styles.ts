import { makeStyles, createStyles } from '@material-ui/core';

export default makeStyles(() =>
  createStyles({
    wrapper: {
      width: '100%',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflowX: 'hidden',
    },
  })
);
