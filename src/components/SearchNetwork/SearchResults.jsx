import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid } from '@material-ui/core';

// CUSTOM COMPONENTS:
import SearchResultDetails from './SearchResultDetails';

function SearchResults({ hasClickedSearch, selectedVendors }) {
  const dispatch = useDispatch();

  // Clear previous search results upon arrival to this page:
  // useEffect(() => {
  //   dispatch({
  //     type: 'UNSET_SEARCH'
  //   });
  // }, []);


  // Bring in search results from reducer:
  // let searchResults = useSelector(store => store.search)
  // console.log('searchResults in component:', searchResults);

  console.log('selectedVendors:', selectedVendors);

  return (
    <div>

      {/* <h2>Search Results</h2> */}
      <Grid container justify="space-around">
        {selectedVendors.map((vendor, i) => {
          return (
            <>
              {
                selectedVendors[0].id !== 0 ?
                  (<SearchResultDetails key={i} vendor={vendor} />) : (
                    hasClickedSearch !== 0 ?
                      // If the search button has been clicked, but no results yielded:
                      (<div key={i}>No search results, please broaden your search.</div>) :
                      // If the search button has NOT been clicked, welcome the user to the page
                      (<div key={i}>Welcome to the Network Search!</div>)
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