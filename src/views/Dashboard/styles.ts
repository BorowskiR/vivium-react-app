import { makeStyles, Theme, createStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      marginTop: 100,
      [theme.breakpoints.up('sm')]: {},
    },
  })
);
