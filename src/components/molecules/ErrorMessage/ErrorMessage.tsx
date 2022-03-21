import React, { FC } from 'react';
import { useStyles } from './styles';

const defaultErrorMessage: string = 'Something went wrong. Please try again, or contact our support.';

const ErrorMessage: FC<{ message: string | Error }> = ({ message = defaultErrorMessage }) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <h5>Oops!</h5>
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
