// Component to manage search bar --> feeds into SearchNetwork and seen at path /search

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//CUSTOM COMPONENTS:
import SearchResults from './SearchResults';

// MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Button,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Box,
  FormHelperText,
  Grid,
} from '@material-ui/core';
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

function SearchOptions({
  searchInput,
  setSearchInput }) {
  const dispatch = useDispatch();
  const classes = useStyles();


  /////////////////// TRACK IF SEARCH REQUEST MADE //////////////////////////////////
  const [hasMadeSearchRequest, setHasMadeSearchRequest] = useState(0);


  /////////////////// MANAGE DROPDOWNS //////////////////////////////////
  // Grab information from Global Redux Store
  const features = useSelector((store) => store.features);
  const service = useSelector((store) => store.vendorTypes);


  // Variable to capture changes in the dropdown selections (vendor type and special feature):
  const [selections, setSelections] = useState({ typeId: -1, featureId: -1, searchTermInput: 37423573209 });
  console.log('selections at start:', selections);


  // Function to set the value corresponding with selected vendor type in dropdown:
  const handleTypeSelection = (evt) => {
    //show that a search request has been made:
    setHasMadeSearchRequest(hasMadeSearchRequest + 1);

    let selectedType = { ...selections, typeId: evt.target.value }
    setSelections(selectedType);

    // Call function that will pass data to Saga (and then on to server/DB)
    runSearch(selectedType);
  };


  // Function to set the value corresponding with selected special feature in dropdown:
  const handleFeatureSelection = (evt) => {
    //show that a search request has been made:
    setHasMadeSearchRequest(hasMadeSearchRequest + 1);

    const selectedFeature = { ...selections, featureId: evt.target.value }
    setSelections(selectedFeature);

    // Call function that will pass data to Saga (and then on to server/DB)
    runSearch(selectedFeature);
  };


  /////////////////// MANAGE SEARCH BAR //////////////////////////////////
  // Function to set the value corresponding with keyword typed in search bar:
  const handleSearchInput = () => {
    //show that a search request has been made:
    setHasMadeSearchRequest(hasMadeSearchRequest + 1);

    const searchTermObject = { ...selections, searchTermInput: searchInput }
    setSelections(searchTermObject);

    // Call function that will pass data to Saga (and then on to server/DB)
    runSearch(searchTermObject);
  }


  /////////////////// GET SEARCH RESULTS //////////////////////////////////
  // Send any/all selections to the Saga
  const runSearch = (searchSelections) => {
    dispatch({
      type: 'FETCH_MATCHING_VENDORS',
      payload: searchSelections
    })
  };


  return (
    <Grid container>
      <FormControl className={classes.formControl}>
        <InputLabel id="vendor-type">Vendor Types</InputLabel>
        <Select
          labelId="vendor-type"
          id="vendor-type"
          name="Vendor Types"
          value={selections.typeId}
          onChange={handleTypeSelection}
        >
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
          value={selections.featureId}
          onChange={handleFeatureSelection}
        >
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


      <Grid item xs={8}>
        <input type="search"
          key="searchBar"
          value={searchInput}
          placeholder={`Search vendors by name e.g. "Kiki's Delivery Service"`}
          onChange={(event) => setSearchInput(event.target.value)}
        />
      </Grid>
      <Grid item xs={4}>
        <Button type="submit" onClick={handleSearchInput}>
          Search
        </Button>
      </Grid>


      <SearchResults hasMadeSearchRequest={hasMadeSearchRequest} />
    </Grid>
  );
}

export default SearchOptions;
