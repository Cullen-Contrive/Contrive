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
  Chip,
  Box
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
  const services = useSelector((store) => store.vendorTypes);


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
  const [specialFeatureNames, setSpecialFeatureNames] = useState([]);
  const [vendorTypeNames, setVendorTypeNames] = useState([]);


  // Ensure that the proper info is being captured:
  // console.log('====================================');
  // console.log('companyName:', companyName);
  // console.log('companyAddress:', companyAddress);
  // console.log('city:', city);
  // console.log('state:', state);
  // console.log('zip:', zip);
  // console.log('companyDescription:', companyDescription);
  // console.log('additionalInfo:', additionalInfo);
  // console.log('phone:', phone);
  // console.log('specialFeatureNames:', specialFeatureNames);
  // console.log('vendorTypeNames:', vendorTypeNames);
  // console.log('====================================');


  const handleFeatureSelection = (event) => {
    // Convert feature names (needed as value for rendering Chips) info feature ID's:
    const selectedIdList = [];

    for (let feature of features) {
      // console.log('feature.name:', feature.name, 'event.target.value', event.target.value);

      for (let selectedOption of event.target.value) {
        if (feature.name === selectedOption) {

          selectedIdList.push(feature.id);
          // console.log('selectedIdList Feature:', selectedIdList);
        }
      }
    }
    // Add the array of selected feature ID's to the vendorInfo that will be used to register
    vendorInfo.specialFeatures = selectedIdList;
    // console.log('vendorInfo in features:', vendorInfo);

    // Keep all selected features as the value of the feature dropdown, so they render as chips:
    setSpecialFeatureNames(event.target.value);
  };


  const handleVendorTypeSelection = (event) => {
    // Convert service names (needed as value for rendering Chips) info service ID's:
    const selectedIdList = [];

    for (let service of services) {
      // console.log('service.name:', service.name, 'event.target.value', event.target.value);

      for (let selectedOption of event.target.value) {
        if (service.name === selectedOption) {

          selectedIdList.push(service.id);
          // console.log('selectedIdList Service:', selectedIdList);
        }
      }
    }
    // Add the array of selected service ID's to the vendorInfo that will be used to register
    vendorInfo.vendorTypes = selectedIdList;
    // console.log('vendorInfo in features:', vendorInfo);

    // Keep all selected services as the value of the service dropdown, so they render as chips:
    setVendorTypeNames(event.target.value);
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
          value={vendorTypeNames}
          onChange={handleVendorTypeSelection}
          input={<Input id="select-multiple-features" />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected.map((feature) => (
                <Chip key={feature} label={feature} className={classes.chip} />
              ))}
            </div>
          )}
        >
          {services.map((category, i) => {
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
          value={specialFeatureNames}
          onChange={handleFeatureSelection}
          input={<Input id="select-multiple-features" />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected.map((featureValue) => (
                <Chip key={featureValue} label={featureValue} className={classes.chip} />
              ))}
            </div>
          )}
        >
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
      <Box className={classes.root}>
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
        </Box>
      </Grid>
    </Grid>
  );
}

export default RegisterVendorForm;