import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <form
      style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
      onSubmit={handleSubmit((data) => console.log(data))}
    >
      <input {...register('login', { required: true })} placeholder="login" type="text" />
      {errors.login && <span>Login is required</span>}
      <input {...register('password', { required: true })} placeholder="password" type="password" />
      {errors.password && <span>Password is required</span>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
