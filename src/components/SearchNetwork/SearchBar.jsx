// Component to manage search bar --> feeds into SearchNetwork and seen at path /search

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Grid } from '@material-ui/core';

//CUSTOM COMPONENTS:
import SearchResults from './SearchResults';

const SearchBar = ({ hasClickedSearch,
  setHasClickedSearch,
  searchInput,
  setSearchInput }) => {


  ///////////// Filter from all vendors for search word:///////////////////////////////////

  // Bring in allVendors
  const allVendors = useSelector((store) => store.vendor);
  // console.log('allVendors in searchBar:', allVendors);

  // Empty list to capture filtered vendors
  const [selectedVendors, setSelectedVendors] = useState(allVendors);
  console.log('selectedVendors in SearchBar:', selectedVendors);


  // handle change event of search input
  const handleChange = (value) => {
    setSearchInput(value);
    filterData(value);
  };

  // filter records by search text
  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    console.log('lowercasedValue', lowercasedValue);

    if (lowercasedValue === "") {
      setSelectedVendors(allVendors)
    }
    else {
      const filteredData = allVendors.filter(vendor => {
        return Object.keys(vendor).some(companyName =>
          vendor[companyName].toString().toLowerCase().includes(lowercasedValue)
        );
      });

      setSelectedVendors(filteredData);
    }
  }




  return (
    <Grid container>
      <Grid item xs={8}>
        <input type="search"
          key="searchBar"
          value={searchInput}
          placeholder={`Search vendors by name e.g. "Kiki's Delivery Service"`}
          onChange={(event) => handleChange(event.target.value)}
        />
      </Grid>
      <Grid item xs={4}>
        <Button type="submit" onClick={runSearch}>
          Search
        </Button>
      </Grid>

      <SearchResults hasClickedSearch={hasClickedSearch} selectedVendors={selectedVendors} />
    </Grid>
  );
}

export default SearchBar;
