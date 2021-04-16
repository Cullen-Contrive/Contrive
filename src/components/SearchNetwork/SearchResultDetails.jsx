import React from 'react';
import { Box, Grid } from '@material-ui/core';

import './searchNetwork.css';

function SearchResultDetails({ vendor }) {
  // console.log('vendor:', vendor);


  return (

    <Grid item xs={5}>
      <Box mt={3} mb={3}>
        <img src={vendor.profilePic} alt={vendor.companyName} className="vendorProfilePic" />
        {/* ToDo: Add Vendor Rating (Stretch) here */}
        {/* <Box>{vendor.rating}</Box> */}
        <Box>{vendor.companyName}</Box>
      </Box>
    </Grid>


  );
}

export default SearchResultDetails;