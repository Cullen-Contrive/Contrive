import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// CUSTOM COMPONENTS:
import SearchResultDetails from './SearchResultDetails';

function SearchResults() {
  const dispatch = useDispatch();

  // Clear previous search results upon arrival to this page:
  useEffect(() => {
    dispatch({
      type: 'UNSET_SEARCH'
    });
  }, []);


  // Bring in search results from reducer:
  let searchResults = useSelector(store => store.search)

  console.log('searchResults:', searchResults);
  // console.log('searchResults[0]', searchResults[0]);

  return (
    <div>
      <h2>Search Results</h2>

      {searchResults.map((vendor, i) => {
        return (
          <div>
            {searchResults[0].id !== 0 ?
              (<SearchResultDetails key={i} vendor={vendor} />) :
              (<div>No search results, please broaden your search.</div>)
            }
          </div>
        )
      })}



    </div>
  );
}

export default SearchResults;