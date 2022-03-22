import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

interface Props {
  mode: string;
}

export const useStyles = makeStyles<Theme, Props>((theme) =>
  createStyles({
    wrapper: {
      display: 'flex',
      justifyContent: 'space-evenly',
      margin: '20px 0 50px',
      background: ({ mode }) => (mode === 'light' ? '#c5c5c5' : '#484848'),
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        marginLeft: 80,
      },
    },
  })
);
