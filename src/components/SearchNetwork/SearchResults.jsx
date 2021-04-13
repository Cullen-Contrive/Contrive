import React, { useState } from 'react';
import { useSelector } from 'react-redux';

// CUSTOM COMPONENTS:
import SearchResultDetails from './SearchResultDetails';

function SearchResults() {

  // Bring in search results from reducer:
  const searchResults = useSelector(store => store.search)

  // console.log('searchResults:', searchResults);
  // console.log('searchResults[0][0]', searchResults[0][0]);
  // console.log('searchResults[0][1]', searchResults[0][1]);

  return (
    <div>
      <h2>Search Results</h2>

      {searchResults[0].id !== 0 ?
        (<SearchResultDetails />) :
        (<div>No search results, broaden your search.</div>)
      }

    </div>
  );
}

export default SearchResults;