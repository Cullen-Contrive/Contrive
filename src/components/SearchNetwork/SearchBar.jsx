import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Grid } from '@material-ui/core';

const SearchBar = ({ hasClickedSearch, setHasClickedSearch }) => {
  const dispatch = useDispatch();
  // const BarStyling = { width: "22rem", 
  // background: "#F2F1F9", border: "1px solid", borderRadius: "7px", padding: "0.5rem" };

  // Capture keyword inputs with local state:
  const [searchInput, setSearchInput] = useState('');


  const runSearch = (event) => {
    event.preventDefault;


    setHasClickedSearch(hasClickedSearch + 1);
    console.log('hasClickedSearch in searchBar:', hasClickedSearch);


    dispatch({
      type: 'RUN_SEARCH',
      payload: {
        searchInput: searchInput
      },
    });

  }

  return (
    // <form onSubmit={(event) => runSearch()}>
    <Grid container>
      <Grid item xs={8}>
        <input
          // style={BarStyling}
          key="searchBar"
          value={searchInput}
          placeholder={`Search vendors by name e.g. "Kiki's Delivery Service"`}
          onChange={(event) => setSearchInput(event.target.value)}
        />
      </Grid>
      <Grid item xs={4}>
        <Button type="submit" onClick={runSearch}>
          Search
        </Button>
      </Grid>
    </Grid>
  );
}

export default SearchBar;
