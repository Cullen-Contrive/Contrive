import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ImageUpload from '../ImageUpload/ImageUpload';

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

function RegisterForm() {
  // Define history for routing purposes:
  const history = useHistory();

  // On page load, request special features and vendor type options to be prepared for RegisterVendorForm:
  useEffect(() => {
    dispatch({ type: 'FETCH_VENDOR_TYPES' });
    dispatch({ type: 'FETCH_SPECIAL_FEATURES' });
  }, []);


  // Manage state of form inputs:
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [website, setWebsite] = useState('');
  const [userType, setUserType] = useState('');

  // console.log('====================================');
  // console.log('username:', username);
  // console.log('password:', password);
  // console.log('firstName:', firstName);
  // console.log('lastName:', lastName);

  // console.log('website:', website);
  // console.log('userType:', userType);
  // console.log('====================================');

  // Bring in any errors stored in the reducer:
  const errors = useSelector((store) => store.errors);
  const profilePic = useSelector(store => store.profilePic);

  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        firstName: firstName,
        lastName: lastName,
        profilePic: profilePic,
        password: password,
        website: website,
        type: userType
      },
    });
  }; // end registerUser

  const vendorRegistration = () => {

    dispatch({
      type: 'HOLD_USER_REGISTRATION',
      payload: {
        username: username,
        firstName: firstName,
        lastName: lastName,
        profilePic: profilePic,
        password: password,
        website: website,
        type: userType
      },
    });

    history.push('/registration/vendor');
  }

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
            id="email"
            label="email"
            type="text"
            autoComplete="current-email"
            // helperText=""
            variant="outlined"
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}
          />
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <FormControl variant="outlined" fullWidth>
          <TextField
            id="firstName"
            label="first name"
            type="text"
            autoComplete="current-firstName"
            // helperText=""
            variant="outlined"
            value={firstName}
            required
            onChange={(event) => setFirstName(event.target.value)}
          />
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <FormControl variant="outlined" fullWidth>
          <TextField
            id="lastName"
            label="last name"
            type="text"
            autoComplete="current-lastName"
            // helperText=""
            variant="outlined"
            value={lastName}
            required
            onChange={(event) => setLastName(event.target.value)}
          />
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <FormControl variant="outlined" fullWidth>
          <TextField
            id="password"
            label="password"
            type="password"
            autoComplete="current-password"
            helperText="Your password can include symbols and numbers."
            variant="outlined"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <FormControl variant="outlined" fullWidth>
          <Typography variant="body1" align="left">
            Profile Picture/Company Logo
        </Typography>
          <ImageUpload
            page="AddProfilePic"
          />
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <FormControl variant="outlined" fullWidth>
          <TextField
            id="website"
            label="website"
            type="text"
            autoComplete="current-website"
            helperText="Optional: share your website with other users."
            variant="outlined"
            value={website}
            required
            onChange={(event) => setWebsite(event.target.value)}
          />
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <FormControl variant="outlined" fullWidth>
          <InputLabel id="vendor-or-not">
            Are you a Vendor?
              </InputLabel>
          <Select
            value={userType}
            onChange={(event) => setUserType(event.target.value)}
            labelId="vendor-or-not"
            id="selector-example"
            label="Are you a Vendor?" // this must be the same string from this selector's <InputLabel />
          >
            {/* <MenuItem value=""><em>Choose One</em></MenuItem> */}
            <MenuItem value='planner' defaultValue>No- I am not a Vendor</MenuItem>
            <MenuItem value='vendor'>Yes- I am a Vendor</MenuItem>
          </Select>
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
          onClick={
            (userType === 'vendor' ? (() => vendorRegistration()) :
              ((event) => registerUser(event)))}>Next
        </Button>

      </Grid>
    </Grid>
  );
}

export default RegisterForm;
