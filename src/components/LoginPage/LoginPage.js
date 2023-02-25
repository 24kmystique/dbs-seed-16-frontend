import React, { useState } from 'react';
import { Button, Box, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';

import './LoginPage.css';

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const login = (data) => {
    console.log(data.username);
    console.log(data.password);

    fetch();
  };

  return (
    <div className='container'>
      <Box
        component='form'
        sx={{
          '& .MuiTextField-root': { m: 1, width: '50ch' },
        }}
        noValidate
        autoComplete='off'
        textAlign='center'
      >
        <h1>Sign In</h1>
        <TextField
          required
          id='outlined-text'
          label='Employee ID'
          type='text'
          {...register('username', { required: true })}
        />
        {errors.username && (
          <p style={{ color: 'red' }}>
            <small>Required</small>
          </p>
        )}
        <TextField
          required
          id='outlined-password-input'
          label='Password'
          type='password'
          name='password'
          {...register('password', { required: true })}
        />
        {errors.password && (
          <p style={{ color: 'red' }}>
            <small>Required</small>
          </p>
        )}
        <br></br>
        <Button variant='contained' sx={{ width: '20ch' }} size='large' onClick={handleSubmit(login)}>
          Log In
        </Button>
      </Box>
    </div>
  );
}

export default LoginPage;
