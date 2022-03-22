import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles<Theme>((theme) =>
  createStyles({
    tableHeader: {
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    wrapper: {
      [theme.breakpoints.down('sm')]: {
        paddingLeft: 70,
      },
    },
  })
);
