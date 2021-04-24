// View to search vendors by three different filters (vendor name, service type, and special feature)
// Reached by path '/search'
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// CUSTOM COMPONENTS
import SearchOptions from './SearchOptions';

// MATERIAL UI
import {
  Typography,
  Grid,
  Box
} from '@material-ui/core';
import useStyles from './Search.styles';
import { spacing } from '@material-ui/system';

function SearchNetwork() {
  const dispatch = useDispatch();
  const classes = useStyles();

  // Dispatch a request on page load for retrieving all vendors 
  useEffect(() => {
    dispatch({
      type: 'FETCH_ALL_VENDORS'
    });
  }, []);

  // Variable to capture search word inputs with local state:
  const [searchInput, setSearchInput] = useState('');

  return (
    <Grid container className={classes.networkSearchContainer}>

      <Grid item xs={12}>
        <Typography variant="h3" align="center">
            The Network              
        </Typography>
      </Grid>

      <SearchOptions
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />

    </Grid>
  );
}

export default SearchNetwork;
