import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function SearchResultDetails({ vendor }) {
  // console.log('vendor:', vendor);
  const dispatch = useDispatch();
  const history = useHistory();

    // Bring in vendors to display upon page load:
  let Vendors = useSelector(store => store.allVendors);

  return (

    <Grid item xs={5}
      onClick={() => history.push(`/vendor/${vendor.vendorUserId}`)}>
      <Box mt={3} mb={3}>
        <img src={vendor.profilePic} alt={vendor.companyName} className="vendorProfilePic" />
        {/* ToDo: Add Vendor Rating (Stretch) here */}
        {/* <Box>{vendor.rating}</Box> */}
        <Typography>{vendor.companyName}</Typography>
      </Box>
    </Grid>


  );
}

export default SearchResultDetails;