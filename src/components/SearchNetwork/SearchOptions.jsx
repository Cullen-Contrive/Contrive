// Component to manage search bar --> feeds into SearchNetwork and seen at path /search

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//CUSTOM COMPONENTS:
import SearchResults from './SearchResults';

// MATERIAL UI
import useStyles from './Search.styles';
import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  InputBase,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

function SearchOptions({
  searchInput,
  setSearchInput
}) {
  const dispatch = useDispatch();
  const classes = useStyles();

  /////////////////// TRACK IF SEARCH REQUEST MADE //////////////////////////////////
  const [hasMadeSearchRequest, setHasMadeSearchRequest] = useState(0);

  /////////////////// MANAGE DROPDOWNS //////////////////////////////////
  // Bring in special feature and vendor type options 
  const features = useSelector((store) => store.features);
  const service = useSelector((store) => store.vendorTypes);

  // Variable to capture changes in the dropdown selections (vendor type and special feature):
  // Initial values are set to identify which of the three filter options have been selected-
  // -1 is an id that will NOT be found in our database, so we know it is an non-selection on each dropdown.
  // The searchTermInput is for a company name, so we set the initial value to 37423573209, which is unlikely to ever be input as a search term
  const [selections, setSelections] = useState({ typeId: -1, featureId: -1, searchTermInput: 37423573209 });

  // Function to set the value corresponding with selected vendor type in dropdown:
  const handleTypeSelection = (evt) => {
    //show that a search request has been made:
    setHasMadeSearchRequest(hasMadeSearchRequest + 1);

    let selectedType = { ...selections, typeId: Number(evt.target.value) }
    setSelections(selectedType);

    // Call function that will pass data to Saga (and then on to server/DB)
    runSearch(selectedType);
  };

  // Function to set the value corresponding with selected special feature in dropdown:
  const handleFeatureSelection = (evt) => {
    //show that a search request has been made:
    setHasMadeSearchRequest(hasMadeSearchRequest + 1);

    const selectedFeature = { ...selections, featureId: Number(evt.target.value) }
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

  let keyPressed = (event) => {
    if (event.key === "Enter") {
      handleSearchInput();
    }
  };

  const runSearchEnter = (searchSelections) =>
    keyPressed();

  return (
    <Grid container item spacing={3} direction="column" className={classes.networkSearchContainer}>

      {/* This container holds both Vendor Types and Special Features drop downs in one line */}
      <Grid container item spacing={3} justify="center">
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id="vendor-type">Vendor Types</InputLabel>
            <Select
              labelId="vendor-type"
              id="vendor-type"
              name="Vendor Types"
              value={selections.typeId}
              onChange={handleTypeSelection}
            >
              <MenuItem key="-1" value="-1">-- Select One --</MenuItem>
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
        </Grid>

        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id="special-features">
              Special Features
            </InputLabel>
            <Select
              labelId="special-features"
              id="special-features"
              name="Special Features"
              value={selections.featureId}
              onChange={handleFeatureSelection}
            >
              <MenuItem key="-1" value="-1">-- Select One --</MenuItem>
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
        </Grid>
      </Grid>

      <Grid container item className={classes.searchContainer} justify="center" spacing={1}>
        <Grid item xs={8}>
          <FormControl>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>

              <InputBase
                type="search"
                fullWidth={true}
                key="searchBar"
                value={searchInput}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                placeholder="Search vendors"
                onChange={(event) => setSearchInput(event.target.value)}
                onKeyPress={keyPressed}
              />
            </div>
            <FormHelperText variant="outlined">Try searching for vendors by name.</FormHelperText>
          </FormControl>
        </Grid>

        <Grid item xs={4}>
          <Button color="primary" variant="contained" type="submit" onClick={handleSearchInput}>
            Search
          </Button>
        </Grid>
      </Grid>

      <SearchResults hasMadeSearchRequest={hasMadeSearchRequest} />
    </Grid>
  );
}

export default SearchOptions;
