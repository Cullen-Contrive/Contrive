import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-ui/core';

const SearchBar = () => {
  const dispatch = useDispatch();
  const BarStyling = { width: "22rem", background: "#F2F1F9", border: "1px solid", borderRadius: "7px", padding: "0.5rem" };

  // Capture keyword inputs with local state:
  const [searchInput, setSearchInput] = useState('');

  const runSearch = (event) => {
    event.preventDefault;

    dispatch({
      type: 'RUN_SEARCH',
      payload: {
        searchInput: searchInput
      },
    });

  }

  return (
    // <form onSubmit={(event) => runSearch()}>
    <div>
      <input
        style={BarStyling}
        key="searchBar"
        value={searchInput}
        placeholder={`Search vendors by name e.g. "Kiki's Delivery Service"`}
        onChange={(event) => setSearchInput(event.target.value)}
      />
      <Button type="submit" onClick={runSearch}>
        Search
      </Button>
    </div>
  );
}

export default SearchBar;
