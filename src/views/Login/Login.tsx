import React, { FC, useEffect, useRef } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Grid } from '@material-ui/core';
import Input from 'components/atoms/Input/Input';
import { SchemaOf, string, object } from 'yup';
import useStyles from './styles';
import { useAuth } from 'hooks/useAuth';

interface IFormInputs {
  login: string;
  password: string;
}

const formSchema: SchemaOf<IFormInputs> = object({
  login: string().email().required(),
  password: string().min(4).max(20).required(),
});

const Login: FC = () => {
  const classes = useStyles();
  const methods = useForm<IFormInputs>({
    resolver: yupResolver(formSchema),
  });
  const loginRef = useRef<HTMLInputElement>(null);
  const auth = useAuth();

  useEffect(() => {
    if (loginRef.current) {
      loginRef.current.focus();
    }
  }, [loginRef]);

  return (
    <Grid container className={classes.wrapper}>
      <FormProvider {...methods}>
        <form
          style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
          onSubmit={methods.handleSubmit(auth.signIn)}
        >
          <Input ref={loginRef} name="login" label="Email" type="email" />
          <Input name="password" label="Password" type="password" />
          <Button type="submit" variant="contained" color="primary">
            Sign in
          </Button>
        </form>
      </FormProvider>
    </Grid>
  );
};

export default Login;
