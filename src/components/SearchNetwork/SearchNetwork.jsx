// View of all messages between two specific users
// Reached by path '/search'
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

//Import Custom Components
import SearchOptions from './SearchOptions';

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

  // Dispatch a request on page load for retrieving all vendors 
  useEffect(() => {
    dispatch({
      type: 'FETCH_ALL_VENDORS'
    });
  }, []);

  // Variable to capture search word inputs with local state:
  const [searchInput, setSearchInput] = useState('');

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

            <SearchOptions hasClickedSearch={hasClickedSearch}
              setHasClickedSearch={setHasClickedSearch}
              searchInput={searchInput}
              setSearchInput={setSearchInput}
            />

            {/* <Grid container className={classes.root} spacing={2}>
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
                </Grid>
              </Grid>
            </Grid> */}

          </Box>

        </Box>
      </main>
    </div>
  );
}

export default SearchNetwork;
