import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    wrapper: {
      display: 'flex',
      justifyContent: 'space-evenly',
      margin: 20,
      background: '#ebebeb',
    },
  })
);
