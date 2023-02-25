import React, { useState } from 'react';
import { Button, Box, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { login } from './Auth';
import './LoginPage.css';

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [username_type, setUsernameType] = useState('outlined-text');
  const [password_type, setPasswordType] = useState('outlined-password-input');
  const [username_helper, setUsernameHelper] = useState('');
  const [password_helper, setPasswordHelper] = useState('');

  const navigate = useNavigate();

  const loginUser = (data) => {
    // console.log(data.username);
    // console.log(data.password);

    // save employee id to local storage
    localStorage.setItem('employee_id', JSON.stringify(data.username));

    // get employee id from local storage
    // console.log(JSON.parse(localStorage.getItem('employee_id')));

    const requestOptions = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    fetch('url', requestOptions)
      .then((res) => res.json)
      .then((data) => {
        console.log(data);
        if (data.access_token) {
          login(data.access_token);
          navigate('/');

          // save employee details to local storage
        } else {
          alert('Invalid employee ID or password');
        }
      });
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
          id={username_type}
          label='Employee ID'
          type='text'
          helperText={username_helper}
          {...register('username', { required: true })}
        />
        {/* {errors.username && { ...setUsernameType('outlined-error-helper-text') }} */}
        {errors.username && (
          <p style={{ color: 'red' }}>
            <small>Required</small>
          </p>
        )}
        <TextField
          required
          id={password_type}
          label='Password'
          type='password'
          helperText={password_helper}
          {...register('password', { required: true })}
        />
        {/* {errors.password && { ...setPasswordType('outlined-pasßsword-error-helper-text') }} */}
        {errors.password && (
          <p style={{ color: 'red' }}>
            <small>Required</small>
          </p>
        )}
        <br></br>
        <Button variant='contained' sx={{ width: '20ch' }} size='large' onClick={handleSubmit(loginUser)}>
          Log In
        </Button>
      </Box>
    </div>
  );
}

export default LoginPage;
