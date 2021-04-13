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
  const searchResults = useSelector(store => store.search)

  console.log('searchResults:', searchResults);
  console.log('searchResults[0]', searchResults[0]);
  // console.log('searchResults[0][1]', searchResults[0][1]);

  return (
    <div>
      <h2>Search Results</h2>

      {searchResults.map((vendor, i) => {
        return (
          <div>
            <div>{vendor.companyName}</div>
            <SearchResultDetails key={i} vendor={vendor} />
          </div>
        )
      })}

      {/* {searchResults[0].id !== 0 ?
        (<SearchResultDetails />) :
        (<div>No search results, broaden your search.</div>)
      } */}

    </div>
  );
}

export default SearchResults;