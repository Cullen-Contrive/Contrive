// View of all messages between two specific users
// Reached by path '/search'
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

//Import Custom Components
<<<<<<< HEAD
<<<<<<< HEAD
import SearchBar from '../SearchBar/SearchBar';
=======
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
>>>>>>> 7adcb3f652f792a383d77b5fa5256e74414ec4e4
=======

import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
>>>>>>> ba904202c1226afb7a250deaa130c434b50f121f

// MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography, Select, FormControl, InputLabel, MenuItem, FormHelperText } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { spacing } from '@material-ui/system';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function SearchNetwork() {
  const classes = useStyles();
<<<<<<< HEAD
<<<<<<< HEAD
  const [input, setInput] = useState('');
=======
  // const [input, setInput] = useState('');
>>>>>>> 7adcb3f652f792a383d77b5fa5256e74414ec4e4
=======
  // const [input, setInput] = useState('');
>>>>>>> ba904202c1226afb7a250deaa130c434b50f121f

  // useEffect( () => {
  //   dispatch({
  //   });
  // },[]);

    '& > *':{
      margin: theme.spacing(1),
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
}));

function SearchNetwork() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [input, setInput] = useState('');

  // Grabs information from Global Redex Store
  const features = useSelector(store => store.features);
  const service = useSelector(store => store.vendorTypes);

  //Local store variables that captures from inputs
  const [specialFeatures, setSpecialFeatures] = useState('');
  const [vendorTypes, setVendorTypes] = useState('');


  const handleVendorChange = (evt) => {
    // let newUser = evt.target.value;
    // if (newUser === '-1'){
    //   history.push(`/discover`);}
    // else {
    // userChange(newUser);
    // }
  };

<<<<<<< HEAD
  const handleCategoryChange = (evt) => {
=======

  const handleCategoryChange = (evt) => {

>>>>>>> ba904202c1226afb7a250deaa130c434b50f121f
    // let newUser = evt.target.value;
    // if (newUser === '-1'){
    //   history.push(`/discover`);}
    // else {
    // userChange(newUser);
    // }
  };

  return (
    <div>
      <main>
        <Box align="center" width="100%">
          <Box className={classes.root}>
<<<<<<< HEAD
            <Box mb={2} align="center" width="100%">
=======

            <Box mb={2} align="center" width="100%" >
>>>>>>> 7adcb3f652f792a383d77b5fa5256e74414ec4e4
              <Typography variant="h3">
                <Box mt={4} align="center" lineHeight={1}>
                  The Network
                </Box>
              </Typography>
            </Box>

<<<<<<< HEAD
<<<<<<< HEAD
            {/* <SearchBar
            //  input={input}
            //  onChange={updateInput}
            /> */}

            <select name="VendorType" onChange={handleVendorChange}>
              <option key="-1" value="-1">
                -- Select Vendor Type --
              </option>
            </select>

            <select name="userListSelect" onChange={handleCategoryChange}>
              <option key="-1" value="-1">
                {' '}
                -- Select A Category --{' '}
              </option>
            </select>
            <SearchBar
            //  input={input}
            //  onChange={updateInput}
            />
          </Box>
=======
            <SearchBar
            //  input={input} 
            //  onChange={updateInput}
            />

            <select
              name="VendorType"
              onChange={handleVendorChange}
            >
              <option key="-1" value="-1">-- Select Vendor Type --</option>
            </select>

            <select
              name="userListSelect"
              onChange={handleCategoryChange}
            >
              <option key="-1" value="-1"> -- Select A Category -- </option>
            </select>
          </Box>
          <SearchResults />
>>>>>>> 7adcb3f652f792a383d77b5fa5256e74414ec4e4
=======

            <FormControl className={classes.formControl}>
              <InputLabel id="vendor-type">Vendor Types</InputLabel>
              <Select
                labelId="vendor-type"
                id="vendor-type"
                name="Vendor Types" 
                value={vendorTypes}
                onChange={(evt) => setVendorTypes(evt.target.value)}
              >
                {/* <MenuItem value="" disabled> -- Select Vendor Type -- </MenuItem> */}
                { service && service.length &&service.map((cat, i) => {
                  return (
                    <MenuItem key={i} value={cat.id}>{cat.name}</MenuItem>
                  )
                })}
              </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
              <InputLabel id="special-features">Special Features</InputLabel>
              <Select
                labelId="special-features"
                id="special-features"
                name="Special Features" 
                value={specialFeatures}
                onChange={(evt) => setSpecialFeatures(evt.target.value)}
              >
                { features && features.length && features.map((feat, i) => {
                  return (
                    <MenuItem key={i} value={feat.id}>{feat.name}</MenuItem>
                  )
                })}
              </Select>
            </FormControl>

          <SearchBar/>

          </Box>

>>>>>>> ba904202c1226afb7a250deaa130c434b50f121f
        </Box>
      </main>
    </div>
  );
}

export default SearchNetwork;
