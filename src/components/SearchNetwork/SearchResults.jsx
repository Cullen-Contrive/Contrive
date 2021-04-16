import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Grid, Box, Typography } from '@material-ui/core';

// CUSTOM COMPONENTS:
import SearchResultDetails from './SearchResultDetails';

function SearchResults({ hasMadeSearchRequest }) {
  const dispatch = useDispatch();
  const history = useHistory();

  // Clear previous search results upon arrival to this page:
  useEffect(() => {
    dispatch({
      type: 'UNSET_SEARCH'
    });
  }, []);


  // Bring in all vendors to display upon page load:
  let allVendors = useSelector(store => store.allVendors);

  // Bring in search results from reducer:
  let searchResults = useSelector(store => store.search)
  // console.log('searchResults in component:', searchResults);

  return (
    <div>
      <Grid container justify="space-around">

        {searchResults.map((vendor, i) => {
          return (
            <>
              {
                searchResults[0].id !== 0 ?
                  (<SearchResultDetails key={i} vendor={vendor} />) :

                  (hasMadeSearchRequest !== 0 ?
                    (<div key={i}>No search results, please broaden your search.</div>) :

                    // If no search has been made, default to displaying all vendors on page
                    (allVendors.map((eachVendor, i) => {
                      return (

                        <Grid item xs={5} onClick={() => history.push(`/vendor/${eachVendor.vendorUserId}`)}>
                          <Box mt={3} mb={3}>
                            <img src={eachVendor.profilePic} alt={eachVendor.companyName} className="vendorProfilePic" />
                            {/* ToDo: Add Vendor Rating (Stretch) here */}
                            {/* <Box>{vendor.rating}</Box> */}
                            <Typography>{eachVendor.companyName}</Typography>
                          </Box>
                        </Grid>
                      );
                    }))
                  )
              }

            </>

          )
        })}

      </Grid>
    </div>
  );
}

export default SearchResults;