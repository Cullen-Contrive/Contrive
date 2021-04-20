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

            <SearchOptions
              searchInput={searchInput}
              setSearchInput={setSearchInput}
            />


          </Box>
        </Box>
      </main>
    </div>
  );
}

export default SearchNetwork;
