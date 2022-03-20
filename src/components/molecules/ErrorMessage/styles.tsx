import { makeStyles, createStyles } from '@material-ui/core';

export const useStyles = makeStyles(() =>
  createStyles({
    wrapper: {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      bottom: '10%',
      backgroundColor: 'white',
      padding: '25px 25px 15px',
      color: 'red',
      border: '3px solid red',
      borderRadius: '15px',
      animation: `$slideAnimation 1s ease-in-out 1 forwards, $slideAnimation 1s 6s ease-in-out 1 reverse forwards`,

      '&:before': {
        content: '""',
        position: 'absolute',
        left: '50%',
        top: '15px',
        transform: 'translateX(-50%)',
        backgroundColor: 'red',
        width: '60px',
        height: '5px',
        borderRadius: '50px',
        opacity: 0.5,
      },
      '&:after': {
        content: '""',
        position: 'absolute',
        left: '50%',
        top: '15px',
        backgroundColor: 'red',
        width: '60px',
        height: '5px',
        borderRadius: '50px',
        transform: 'translateX(-50%) scaleX(1)',
        transformOrigin: 'left top',
        animation: `$shrinkAnimation 5s 1s linear 1 forwards`,
      },
    },
    '@keyframes shrinkAnimation': {
      from: { transform: 'translateX(-50%) scaleX(1)' },
      to: { transform: 'translateX(-50%) scaleX(0)' },
    },
    '@keyframes slideAnimation': {
      from: { transform: 'translateX(-50%) translateY(500%)' },
      to: { transform: 'translateX(-50%) translateY(0)' },
    },
  })
);
