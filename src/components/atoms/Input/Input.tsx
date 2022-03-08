import React from 'react';
import { useFormContext } from 'react-hook-form';
import { TextField } from '@material-ui/core';

interface InputProps {
  name: string;
  label: string;
}

const Input = React.forwardRef(({ name, label }: InputProps, ref: React.Ref<HTMLInputElement>) => {
  console.log(ref);
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <TextField
      {...register(name)}
      inputRef={ref}
      label={label}
      variant="outlined"
      error={!!errors[name]}
      margin="dense"
      helperText={errors[name] ? errors[name]?.message : ''}
    />
  );
});

export default Input;
