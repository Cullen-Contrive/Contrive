import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Box } from '@material-ui/core';

// CUSTOM COMPONENTS:
import SearchResultDetails from './SearchResultDetails';

function SearchResults({ hasClickedSearch, selectedVendors }) {
  const dispatch = useDispatch();

  // Clear previous search results upon arrival to this page:
  useEffect(() => {
    dispatch({
      type: 'UNSET_SEARCH'
    });
  }, []);


  // Bring in all vendors to display upon page load:
  let allVendors = useSelector(store => store.vendor);

  // Bring in search results from reducer:
  let searchResults = useSelector(store => store.search)
  console.log('searchResults in component:', searchResults);

  return (
    <div>

      <Grid container justify="space-around">
        {searchResults.map((vendor, i) => {
          return (
            <>
              {
                searchResults[0].id !== 0 ?
                  (<SearchResultDetails key={i} vendor={vendor} />) : (
                    hasClickedSearch !== 0 ?
                      // If the search button has been clicked, but no results yielded:
                      (<div key={i}>No search results, please broaden your search.</div>) :
                      // If the search button has NOT been clicked, welcome the user to the page
                      // (<div key={i}>Welcome to the Network Search!</div>)
                      (allVendors.map((eachVendor, i) => {
                        return (

                          <Grid item xs={5}>
                            <Box mt={3} mb={3}>
                              <img src={eachVendor.profilePic} alt={eachVendor.companyName} className="vendorProfilePic" />
                              {/* ToDo: Add Vendor Rating (Stretch) here */}
                              {/* <Box>{vendor.rating}</Box> */}
                              <Box>{eachVendor.companyName}</Box>
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