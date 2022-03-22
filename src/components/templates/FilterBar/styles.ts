import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

interface Props {
  mode: string;
}

export const useStyles = makeStyles<Theme, Props>(() =>
  createStyles({
    wrapper: {
      display: 'flex',
      justifyContent: 'space-evenly',
      margin: 20,
      background: ({ mode }) => (mode === 'light' ? '#c5c5c5' : '#484848'),
    },
  })
);
