import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import useStyles from './RegisterForm.styles';

// Material-UI
import {
  Button, // replaces html5 <button> element
  ButtonGroup,
  FormControl,
  Grid, //
  Input,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography, // replace html5 elements dealing with text, <h1>, <h2>, <h3>, <p>, etc...
  Chip
} from '@material-ui/core';

function RegisterVendorForm() {
  // Define history for routing purposes, dispatch for Redux communication, and classes for styling:
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles();


  /////////////////// BRING IN NECESSARY DATA //////////////////////////////////
  // Bring in any errors stored in the reducer:
  const errors = useSelector((store) => store.errors);

  // Bring in info held from first Registration Page:
  const vendorInfo = useSelector(store => store.user)
  const profilePic = useSelector(store => store.profilePic);

  // Bring in special feature and vendor type options 
  const features = useSelector((store) => store.features);
  const service = useSelector((store) => store.vendorTypes);


  /////////////////// MANAGE INPUTS //////////////////////////////////
  // Manage state of form inputs:
  const [companyAddress, setCompanyAddress] = useState('');

  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companyDescription, setCompanyDescription] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [phone, setPhone] = useState('');
  const [specialFeatures, setSpecialFeatures] = useState([]);
  const [vendorTypes, setVendorTypes] = useState([]);

  // console.log('====================================');
  // console.log('companyName:', companyName);
  // console.log('companyAddress:', companyAddress);
  // console.log('city:', city);
  // console.log('state:', state);
  // console.log('zip:', zip);
  // console.log('companyDescription:', companyDescription);
  // console.log('additionalInfo:', additionalInfo);
  // console.log('phone:', phone);
  console.log('specialFeatures:', specialFeatures);
  console.log('vendorTypes:', vendorTypes);
  // console.log('====================================');


  const handleSingleFeature = (event) => {
    setSpecialFeatures(event.target.value);
  };

  const handleMultipleFeatures = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setSpecialFeatures(value);
  };


  const handleSingleVendorType = (event) => {
    setVendorTypes(event.target.value);
  };

  const handleMultipleVendorTypes = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setVendorTypes(value);
  };


  /////////////////// REGISTER VENDOR //////////////////////////////////
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
    vendorInfo.specialFeatures = specialFeatures;
    vendorInfo.vendorTypes = vendorTypes;

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


      <FormControl className={classes.formControl}>
        <InputLabel id="vendor-type">Services Offered</InputLabel>
        <Select
          labelId="vendor-type"
          id="vendor-type"
          multiple
          name="Vendor Types"
          value={vendorTypes}
          onChange={handleSingleVendorType}
          input={<Input id="select-multiple-features" />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected.map((feature) => (
                <Chip key={feature} label={feature} className={classes.chip} />
              ))}
            </div>
          )}
        >
          {/* <MenuItem key="-1" value="-1">--- Select Service Type ---</MenuItem> */}
          {service.map((category, i) => {
            return (
              <MenuItem key={i} value={category.name}>
                {category.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>


      <FormControl className={classes.formControl}>
        <InputLabel id="special-features">Special Features</InputLabel>
        <Select
          labelId="special-features"
          id="special-features"
          multiple
          name="Special Features"
          value={specialFeatures}
          onChange={handleSingleFeature}
          input={<Input id="select-multiple-features" />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected.map((feature) => (
                <Chip key={feature} label={feature} className={classes.chip} />
              ))}
            </div>
          )}
        >
          {/* <MenuItem key="-1" value="-1">--- Select Special Feature ---</MenuItem> */}
          {features.map((feature, i) => {
            return (
              <MenuItem key={i} value={feature.name}>
                {feature.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>


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