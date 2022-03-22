import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { grey } from '@mui/material/colors';

interface Props {
  mode: string;
}

export const useStyles = makeStyles<Theme, Props>(() =>
  createStyles({
    input: {
      '& .MuiTextField-root': {
        '& .MuiFormLabel-root': {
          color: ({ mode }) => (mode === 'light' ? '#212121' : '#9e9e9e'),
        },

        // '& .Mui-focused': {
        //   color: grey[500],
        // },
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: ({ mode }) => (mode === 'light' ? grey[500] : '#fff'),
      },
      '& .MuiInput-underline:before': {
        borderBottomColor: ({ mode }) => (mode === 'light' ? grey[700] : '#fff'),
      },
    },
  })
);
