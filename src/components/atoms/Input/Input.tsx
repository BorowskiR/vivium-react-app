import React from 'react';
import { useFormContext } from 'react-hook-form';
import { TextField } from '@material-ui/core';

interface InputProps {
  name: string;
  label: string;
  type?: string;
}

const Input = React.forwardRef(({ name, label, type = 'text' }: InputProps, ref: React.Ref<HTMLInputElement>) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <TextField
      {...register(name)}
      type={type}
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
