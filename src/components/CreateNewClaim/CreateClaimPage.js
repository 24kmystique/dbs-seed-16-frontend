import React, { useState } from 'react';
import { Box, TextField, Checkbox, FormGroup, FormControlLabel, InputAdornment, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import './CreateClaimPage.css';

function CreateClaimPage() {
  let firstName = JSON.parse(localStorage.getItem('FIRST_NAME'));
  let lastName = JSON.parse(localStorage.getItem('LAST_NAME'));

  const [followUp, setFollowUp] = useState(false);

  const {
    register,
    getValues,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const createClaim = (data) => {
    // console.log('help help');
    data.firstName = firstName;
    data.lastName = lastName;
    data.insuranceId = 1009;
    data.amount = parseInt(data.amount);
    data.followUp = data.followUp ? 1 : 0;
    data.status = 'Pending';
    data.previousClaimId = null;
    console.log(data);

    const requestOptions = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
      },
      body: JSON.stringify(data),
    };

    fetch('/claim/api/insert', requestOptions)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          console.log(data);
          navigate('/');
        } else {
          alert('Create claim failed');
        }
      })
      .catch((e) => console.log(e));
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
        {errors.firstName && (
          <p style={{ color: 'red' }}>
            <small>Required</small>
          </p>
        )}
        <TextField
          required
          disabled
          id='outlined-disabled'
          label='Last Name'
          defaultValue={lastName}
          {...register('lastName', { required: true })}
        />
      </Box>
      {errors.lastName && (
        <p style={{ color: 'red' }}>
          <small>Required</small>
        </p>
      )}
      <br></br>
      <Box
        component='form'
        sx={{
          '& .MuiTextField-root': { m: 1, width: '50ch' },
        }}
        noValidate
        autoComplete='off'
      >
        <TextField
          required
          disabled
          id='outlined-disabled'
          label='Insurance ID'
          defaultValue={1009}
          {...register('insuranceId', { required: true })}
        />
        {errors.insuranceId && (
          <p style={{ color: 'red' }}>
            <small>Required</small>
          </p>
        )}
        <br></br>
        <TextField id='outlined-required' label='Receipt Number' />
        <br></br>
        <TextField required id='outlined-required' label='Date' {...register('expenseDate', { required: true })} />
        {errors.expenseDate && (
          <p style={{ color: 'red' }}>
            <small>Required</small>
          </p>
        )}
        <br></br>
        <TextField
          required
          label='Amount'
          id='outlined-start-adornment'
          type='number'
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position='start'>$</InputAdornment>,
            inputMode: 'numeric',
            pattern: '[0-9]*',
          }}
          {...register('amount', { required: true })}
        />
        {errors.amount && (
          <p style={{ color: 'red' }}>
            <small>Require a number</small>
          </p>
        )}
        <br></br>
        <TextField
          required
          id='outlined-multiline-static'
          multiline
          rows={4}
          label='Purpose'
          {...register('purpose', { required: true })}
        />
        {errors.purpose && (
          <p style={{ color: 'red' }}>
            <small>Required</small>
          </p>
        )}
        <br></br>
        <FormGroup sx={{ m: 1 }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={followUp}
                onChange={(e) => {
                  console.log(e.target.checked);
                  setFollowUp(e.target.checked);
                }}
              />
            }
            label='Is a Follow-up Claim?'
            {...register('followUp')}
          />
        </FormGroup>
        {errors.followUp && (
          <p style={{ color: 'red' }}>
            <small>Required</small>
          </p>
        )}
        <br></br>
        {followUp ? (
          <TextField id='outlined-basic' label='Previous Claim ID' {...register('previousClaimId')} />
        ) : (
          <></>
        )}
        {errors.previousClaimId && (
          <p style={{ color: 'red' }}>
            <small>Required</small>
          </p>
        )}
        <br></br>
        <Button
          variant='contained'
          sx={{ width: '20ch' }}
          size='large'
          onClick={() => {
            // console.log(getValues());
            // handleSubmit(createClaim);
            createClaim(getValues());
          }}
        >
          Create Claim
        </Button>
      </Box>
    </div>
  );
}

export default CreateClaimPage;
