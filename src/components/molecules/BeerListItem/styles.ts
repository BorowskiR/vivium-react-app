import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

interface Props {
  mode: string;
}
export const useStyles = makeStyles<Theme, Props>(() =>
  createStyles({
    wrapper: {
      borderBottom: '1px solid #333',
      padding: '20px 0',
      '&:hover': {
        background: '#9d9d9d',
      },
    },
    readMore_button: {
      fontSize: 12,
      textDecoration: 'underline',
      textTransform: 'lowercase',

      color: ({ mode }) => (mode === 'light' ? '#333' : '#fff'),
    },
    description: {
      paddingRight: 30,
    },
  })
);
