import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import useStyles from './RegisterForm.styles';
import ImageUpload from '../ImageUpload/ImageUpload';

// Material-UI
import {
  Box,
  Button, // replaces html5 <button> element
  FormControl,
  Grid, //
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
  const classes = useStyles();
  
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
    <Grid
      item
      className={classes.registerFormContainer}
      component={Paper}
      container
      justify="center"
      spacing={3}
    >
      <Grid item xs={12}>
        <Typography variant="h2" component="h2" align="center">
          Register User
        </Typography>
      </Grid>

      {/* Username (email) input  */}
      <Grid item xs={12}>
        <FormControl fullWidth>
          <TextField
            id="email"
            label="email"
            helperText="Your email will be used as your username."
            type="text"
            autoComplete="current-email"
            variant="outlined"
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}
          />
        </FormControl>
      </Grid>

      {/* First name input */}
      <Grid item xs={12}>
        <FormControl fullWidth>
          <TextField
            id="firstName"
            label="first name"
            type="text"
            autoComplete="current-firstName"
            variant="outlined"
            value={firstName}
            required
            onChange={(event) => setFirstName(event.target.value)}
          />
        </FormControl>
      </Grid>

      {/* Last name input */}
      <Grid item xs={12}>
        <FormControl fullWidth>
          <TextField
            id="lastName"
            label="last name"
            type="text"
            autoComplete="current-lastName"
            variant="outlined"
            value={lastName}
            required
            onChange={(event) => setLastName(event.target.value)}
          />
        </FormControl>
      </Grid>

      {/* Password input */}
      <Grid item xs={12}>
        <FormControl fullWidth>
          <TextField
            autoComplete="current-password"
            helperText="Your password can include symbols and numbers."
            label="password"
            id="password"
            onChange={(event) => setPassword(event.target.value)}
            required
            type="password"
            value={password}
            variant="outlined"
          />
        </FormControl>
      </Grid>

      {/* Profile Picture Upload */}
      <Grid alignItems='center' item container direction='column' xs={12}>
        <Grid item>
          <Typography variant="body1" align="left">
            Profile Picture/Company Logo
          </Typography>
        </Grid>

        <Grid item>
          <ImageUpload page="AddProfilePic" />
        </Grid>
      </Grid>

      {/* Website input */}
      <Grid item xs={12}>
        <FormControl fullWidth>
          <TextField
            id="website"
            label="website"
            type="text"
            autoComplete="current-website"
            helperText="Optional: share your website with other users."
            variant="outlined"
            value={website}
            onChange={(event) => setWebsite(event.target.value)}
          />
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <FormControl fullWidth>
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
            <MenuItem value='planner' defaultValue>No, I am not a Vendor.</MenuItem>
            <MenuItem value='vendor'>Yes, I am a Vendor.</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      {/* Error messages displayed here during registration error */}
      {errors.registrationMessage && (
          <Grid item xs={12}>
            <Typography
              align="center"
              className="alert" 
              component="h3"
              role="alert"
              variant="h3"
            >
              {errors.registrationMessage}
            </Typography>
          </Grid>
        )}

      <Grid
        className={classes.registerFormButtonContainer}
        container
        item
        justify="space-evenly"
        spacing={2}
        xs={12}
      >
        <Grid item>
          <Button 
            className={classes.registerFormButton}
            color="secondary"
            onClick={() => {
              history.push('/login');
            }}
            variant="contained"
          >
            Cancel
          </Button>
        </Grid>

        <Grid item>
          <Button
            className={classes.registerFormButton}
            color="primary"          
            onClick={
              userType === 'vendor' ? (
                () => vendorRegistration()
              ) : (
                (event) => registerUser(event)
              )
            }
            variant="contained"
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default RegisterForm;
