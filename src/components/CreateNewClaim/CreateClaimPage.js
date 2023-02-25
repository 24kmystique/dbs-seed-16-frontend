import React, { useState } from 'react';
import { Box, TextField, Checkbox, FormGroup, FormControlLabel, InputAdornment, Button } from '@mui/material';
import { useForm } from 'react-hook-form';

import './CreateClaimPage.css';

function CreateClaimPage() {
  let firstName = JSON.parse(localStorage.getItem('FIRST_NAME'));
  let lastName = JSON.parse(localStorage.getItem('LAST_NAME'));

  const [isFollowUp, setFollowUp] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const createClaim = (data) => {
    console.log(data);
    alert('Help');
  };

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
        <TextField
          required
          disabled
          id='outlined-disabled'
          label='First Name'
          defaultValue={firstName}
          {...register('firstName', { required: true })}
        />
        <TextField
          required
          disabled
          id='outlined-disabled'
          label='Last Name'
          defaultValue={lastName}
          {...register('lastName', { required: true })}
        />
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
        <TextField required id='outlined-required' label='Date' {...register('date', { required: true })} />
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
          {...register('amount', { required: true })}
        />
        <TextField
          required
          id='outlined-multiline-static'
          multiline
          rows={4}
          label='Purpose'
          {...register('purpose', { required: true })}
        />
        <FormGroup sx={{ m: 1 }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={isFollowUp}
                onChange={(e) => {
                  console.log(e.target.checked);
                  setFollowUp(e.target.checked);
                }}
              />
            }
            label='Is a Follow-up Claim?'
            {...register('isFollowUp', { required: true })}
          />
        </FormGroup>
        {isFollowUp ? (
          <TextField id='outlined-basic' label='Previous Claim ID' {...register('prevClaimId', { required: true })} />
        ) : (
          <></>
        )}
        <br></br>
        <Button
          variant='contained'
          sx={{ width: '20ch' }}
          size='large'
          onClick={handleSubmit(handleSubmit(createClaim))}
        >
          Create Claim
        </Button>
      </Box>
    </div>
  );
}

export default CreateClaimPage;
