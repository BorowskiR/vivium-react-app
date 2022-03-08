import React, { FC, useEffect, useRef } from 'react';
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Grid } from '@material-ui/core';
import Input from 'components/atoms/Input/Input';
import { SchemaOf, string, object } from 'yup';
import useStyles from './Login.styles';

interface IFormInputs {
  email: string;
  password: string;
}

const formSchema: SchemaOf<IFormInputs> = object({
  email: string().email().required(),
  password: string().min(4).max(20).required(),
});

const Login: FC = () => {
  const classes = useStyles();
  const methods = useForm<IFormInputs>({
    resolver: yupResolver(formSchema),
  });
  const loginRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (loginRef.current) {
      loginRef.current.focus();
      console.log('??', loginRef.current);
    }
  }, [loginRef]);

  const formSubmitHandler: SubmitHandler<IFormInputs> = async ({ email, password }: IFormInputs) => {
    console.log(email, password);
  };

  return (
    <Grid container className={classes.wrapper}>
      <FormProvider {...methods}>
        <form
          style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
          onSubmit={methods.handleSubmit(formSubmitHandler)}
        >
          <Input ref={loginRef as React.ForwardedRef<HTMLInputElement>} name="email" label="Email" />
          <Input name="password" label="Password" />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </FormProvider>
    </Grid>
  );
};

export default Login;

{
  /* <Controller
  name="email"
  control={control}
  render={({ field }) => (
    <TextField
      {...field}
      inputRef={loginRef}
      label="Email"
      variant="outlined"
      error={!!errors.email}
      helperText={errors.email ? errors.email?.message : ''}
    />
  )}
/>
<br />
<Controller
  name="password"
  control={control}
  render={({ field }) => (
    <TextField
      {...field}
      type="password"
      label="Password"
      variant="outlined"
      error={!!errors.password}
      helperText={errors.password ? errors.password?.message : ''}
    />
  )}
/> */
}
