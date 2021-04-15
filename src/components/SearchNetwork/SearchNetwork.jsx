// View of all messages between two specific users
// Reached by path '/search'
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

//Import Custom Components

import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

// MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {
  Typography,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { spacing } from '@material-ui/system';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  img: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

function SearchNetwork() {
  const dispatch = useDispatch();
  const classes = useStyles();

  // Grab information from Global Redux Store
  const features = useSelector((store) => store.features);
  const service = useSelector((store) => store.vendorTypes);
  const filter = useSelector((store) => store.filter);

  // //Local store variables that captures from inputs
  const [typeId, setTypeId] = useState(-1);
  const [featureId, setFeatureId] = useState(-1);

  // const [selections, setSelections] = useState({ typeId: -1, featureId: -1 })

  let selections = { typeId, featureId }
  console.log('selections at start:', selections);

  // console.log('typeId:', typeId);
  // console.log('featureId:', featureId);


  const handleVendorTypeChange = (evt) => {

    setTypeId(evt.target.value);
    // setSelections(typeId = evt.target.value, selections.featureId);
    console.log('selections in TypeChange:', selections);

    console.log('typeId', typeId);
    console.log('evt.target.value in handleVendor:', evt.target.value);

    onChange();
  };

  const handleSpecialFeatureChange = (evt) => {
    setFeatureId(evt.target.value);

    console.log('featureId', featureId);
    console.log('evt.target.value in handleFeature:', evt.target.value);

    onChange();
  };

  const onChange = () => {
    dispatch({
      type: 'FETCH_MATCHING_VENDORS',
      payload: {
        selections
      }
    })
  };
  // typeId: typeId,
  // featureId: featureId,

  // Variable to control conditional rendering of search results message:
  const [hasClickedSearch, setHasClickedSearch] = useState(0);
  console.log('hasClickedSearch in SearchNetwork:', hasClickedSearch);


  return (
    <div>
      <main>
        <Box align="center" width="100%">
          <Box className={classes.root}>
            <Box mb={2} align="center" width="100%">
              <Typography variant="h3">
                <Box mt={4} align="center" lineHeight={1}>
                  The Network
                </Box>
              </Typography>
            </Box>

            <FormControl className={classes.formControl}>
              <InputLabel id="vendor-type">Vendor Types</InputLabel>
              <Select
                labelId="vendor-type"
                id="vendor-type"
                name="Vendor Types"
                value={selections.typeId}
                // onChange={(evt) => setTypeId(evt.target.value)}
                // onChange={(evt) => handleVendorTypeChange(evt.target.value)}
                onChange={handleVendorTypeChange}
              >
                {/* <MenuItem key="-1" value="-1"> -- Select Vendor Type -- </MenuItem> */}
                {service &&
                  service.length &&
                  service.map((category, i) => {
                    return (
                      <MenuItem key={i} value={category.id}>
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
                name="Special Features"
                value={featureId}
                // onChange={(evt) => setFeatureId(evt.target.value)}
                // onChange={(event) => handleSpecialFeatureChange(evt.target.value)}
                onChange={handleSpecialFeatureChange}
              >
                {/* <MenuItem key="-1" value="-1"> -- Select Vendor Type -- </MenuItem> */}
                {features &&
                  features.length &&
                  features.map((feature, i) => {
                    return (
                      <MenuItem key={i} value={feature.id}>
                        {feature.name}
                      </MenuItem>
                    );
                  })}
              </Select>
            </FormControl>
            <Grid container className={classes.root} spacing={2}>
              <Grid item xs={12}>
                <Grid container justify="center" spacing={spacing}>


                  {
                    // Makes sure filter criteria is populated
                    filter && filter.length &&
                    filter.map((vendor, i) => {
                      return (
                        <Grid
                          key={i}
                        >
                          <br></br>
                          <Typography align="center" variant="h5">{vendor.companyName}</Typography>
                          <br></br>
                          <img src={vendor.profilePic} alt={vendor.companyName} className={classes.img} />
                          <br></br>
                          <br></br>
                        </Grid>

                      );
                    })
                  }
                  {/* </section> */}
                </Grid>
              </Grid>
            </Grid>

            <SearchBar hasClickedSearch={hasClickedSearch}
              setHasClickedSearch={setHasClickedSearch} />
          </Box>
          <SearchResults hasClickedSearch={hasClickedSearch}
            setHasClickedSearch={setHasClickedSearch} />
        </Box>
      </main>
    </div>
  );
}

export default SearchNetwork;
