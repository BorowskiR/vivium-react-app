import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

interface Props {
  mode: string;
}
export const useStyles = makeStyles<Theme, Props>((theme) =>
  createStyles({
    wrapper: {
      [theme.breakpoints.down('sm')]: {
        paddingLeft: 70,
      },
    },
  })
);
