import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  wrapper: {
    borderBottom: '1px solid #333',
    padding: '20px 0',
    '&:last-item': {
      borderBottom: '1px solid red',
    },
    '&:hover': {
      background: '#9d9d9d',
    },
  },
  readMore_button: {
    fontSize: 12,
    textDecoration: 'underline',
    textTransform: 'lowercase',
  },
  description: {
    paddingRight: 30,
  },
}));
