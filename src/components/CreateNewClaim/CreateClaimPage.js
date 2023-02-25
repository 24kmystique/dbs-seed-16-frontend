import React, { useState } from 'react';
import { Box, TextField, Checkbox, FormGroup, FormControlLabel, InputAdornment } from '@mui/material';
import { useForm } from 'react-hook-form';

import './CreateClaimPage.css';

function CreateClaimPage() {
  let firstName = JSON.parse(localStorage.getItem('FIRST_NAME'));
  let lastName = JSON.parse(localStorage.getItem('LAST_NAME'));

  const [date, setDate] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className='container'>
      <h1>Add a New Claim</h1>
      <p>* Required</p>
      <Box
        component='form'
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete='off'
      >
        <TextField required disabled id='outlined-disabled' label='First Name' defaultValue={firstName} />
        <TextField required disabled id='outlined-disabled' label='Last Name' defaultValue={lastName} />
      </Box>
      <Box
        component='form'
        sx={{
          '& .MuiTextField-root': { m: 1, width: '50ch' },
        }}
        noValidate
        autoComplete='off'
      >
        <TextField required id='outlined-required' label='Receipt Number' />
        <TextField required id='outlined-required' label='Date' />
        <br></br>
        <TextField
          required
          label='Amount'
          id='outlined-start-adornment'
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position='start'>$</InputAdornment>,
            inputMode: 'numeric',
            pattern: '[0-9]*',
          }}
        />
        <TextField required id='outlined-multiline-static' multiline rows={4} label='Purpose' />
        <FormGroup sx={{ m: 1 }}>
          <FormControlLabel control={<Checkbox />} label='Is a Follow-up Claim?' />
        </FormGroup>
        <TextField id='outlined-basic' label='Previous Claim ID' />
      </Box>
    </div>
  );
}

export default CreateClaimPage;
