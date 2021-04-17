import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Material-UI
import {
  Button, // replaces html5 <button> element
  ButtonGroup,
  FormControl,
  FormHelperText,
  Grid, //
  Input,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography, // replace html5 elements dealing with text, <h1>, <h2>, <h3>, <p>, etc...

} from '@material-ui/core';

function RegisterVendorForm() {
  // Define history for routing purposes:
  const history = useHistory();

  // Bring in info held from first Registration Page:
  const vendorInfo = useSelector(store => store.user)
  const profilePic = useSelector(store => store.profilePic);

  // console.log('====================================');
  // console.log('vendorInfo:', vendorInfo);
  // console.log('====================================');


  // Manage state of form inputs:
  const [companyAddress, setCompanyAddress] = useState('');

  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companyDescription, setCompanyDescription] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [phone, setPhone] = useState('');

  // console.log('====================================');
  // console.log('companyName:', companyName);
  // console.log('companyAddress:', companyAddress);
  // console.log('city:', city);
  // console.log('state:', state);
  // const [zip, setZip] = useState('');
  // console.log('companyDescription:', companyDescription);
  // const [additionalInfo, setAdditionalInfo] = useState('');
  // console.log('phone:', phone);
  // console.log('====================================');

  // Bring in any errors stored in the reducer:
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    vendorInfo.companyAddress = companyAddress;
    vendorInfo.city = city;
    vendorInfo.state = state;
    vendorInfo.zip = zip;
    vendorInfo.companyName = companyName;
    vendorInfo.profilePic = profilePic;
    vendorInfo.description = companyDescription;
    vendorInfo.additionalInfo = additionalInfo;
    vendorInfo.phone = phone;

    console.log("vendor info", vendorInfo);

    dispatch({
      type: 'REGISTER',
      payload: vendorInfo,
    });
  }; // end registerUser

  return (
    <Grid item container spacing={2} xs={12} component={Paper}>
      <Typography variant="h2" component="h2" align="center">
        Register User
      </Typography>

      {errors.registrationMessage && (
        <Typography variant="h3" component="h3" align="center"
          className="alert" role="alert">
          {errors.registrationMessage}
        </Typography>
      )}

      <Grid item xs={12}>
        <FormControl variant="outlined" fullWidth>
          <TextField
            id="companyName"
            label="company name"
            type="text"
            autoComplete="current-companyName"
            // helperText=""
            variant="outlined"
            value={companyName}
            required
            onChange={(event) => setCompanyName(event.target.value)}
          />
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <FormControl variant="outlined" fullWidth>
          <TextField
            id="companyAddress"
            label="company street address"
            type="text"
            autoComplete="current-companyAddress"
            // helperText=""
            variant="outlined"
            value={companyAddress}
            required
            onChange={(event) => setCompanyAddress(event.target.value)}
          />
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <FormControl variant="outlined" fullWidth>
          <TextField
            id="city"
            label="city"
            type="text"
            autoComplete="current-city"
            // helperText=""
            variant="outlined"
            value={city}
            required
            onChange={(event) => setCity(event.target.value)}
          />
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <FormControl variant="outlined" fullWidth>
          <TextField
            id="state"
            label="state"
            type="text"
            autoComplete="current-state"
            // helperText=""
            variant="outlined"
            value={state}
            required
            onChange={(event) => setState(event.target.value)}
          />
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <FormControl variant="outlined" fullWidth>
          <TextField
            id="zip"
            label="zip code"
            type="text"
            autoComplete="current-zip"
            // helperText=""
            variant="outlined"
            value={zip}
            required
            onChange={(event) => setZip(event.target.value)}
          />
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <FormControl variant="outlined" fullWidth>
          <TextField
            id="phone"
            label="phone"
            type="text"
            autoComplete="current-phone"
            // helperText=""
            variant="outlined"
            value={phone}
            required
            onChange={(event) => setPhone(event.target.value)}
          />
        </FormControl>
      </Grid>


      <Grid item xs={12}>
        <FormControl variant="outlined" fullWidth>
          <TextField
            id="companyDescription"
            label="company description"
            type="text"
            autoComplete="current-companyDescription"
            // helperText=""
            variant="outlined"
            value={companyDescription}
            required
            onChange={(event) => setCompanyDescription(event.target.value)}
          />
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <FormControl variant="outlined" fullWidth>
          <TextField
            id="additionalInfo"
            label="addtional information (certifications, etc.)"
            type="text"
            autoComplete="current-additionalInfo"
            // helperText=""
            variant="outlined"
            value={additionalInfo}
            required
            onChange={(event) => setAdditionalInfo(event.target.value)}
          />
        </FormControl>
      </Grid>


      <Grid item container xs={12} justify="center">
        <Button color="secondary" variant="contained"
          type="button"
          onClick={() => {
            history.push('/login');
          }}
        >
          Already Registered
        </Button>
        <Button color="primary" variant="contained"
          onClick={registerUser}>
          Register
        </Button>

      </Grid>
    </Grid>
  );
}

export default RegisterVendorForm;