// Import Libraries
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Import CUSTOM COMPONENTS:
import SearchResultDetails from './SearchResultDetails';

// MATERIAL UI
import useStyles from './Search.styles';
import { Avatar, Card, Grid, Typography } from '@material-ui/core';

function SearchResults({ hasMadeSearchRequest }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  // Clear previous search results upon arrival to this page:
  useEffect(() => {
    dispatch({
      type: 'UNSET_SEARCH',
    });
  }, []);

  // Bring in all vendors to display upon page load:
  let allVendors = useSelector((store) => store.allVendors);

  // Bring in search results from reducer:
  let searchResults = useSelector((store) => store.search);
  // console.log('searchResults in component:', searchResults);

  return (
    <Grid container item spacing={3} className={classes.searchResultsContainer}>
      {searchResults.map((vendor, i) => {
        return (
          <>
            {searchResults[0].id !== 0 ? (
              <SearchResultDetails key={i} vendor={vendor} />
            ) : hasMadeSearchRequest !== 0 ? (
              <div key={i}>No search results, please broaden your search.</div>
            ) : (
              // If no search has been made, default to displaying all vendors on page
              allVendors.map((eachVendor, i) => {
                return (
                  <Grid
                    item
                    xs={6}
                    onClick={() =>
                      history.push(`/vendor/${eachVendor.vendorUserId}`)
                    }
                  >
                    <Card className={classes.cardSize} variant="outlined">
                      <Grid
                        className={classes.cardInteriorWrapper}
                        container
                        spacing={4}
                        direction="column"
                        alignItems="center"
                        justify="space-between"
                      >
                        <Grid item>
                          <Typography
                            variant="body1"
                            align="center"
                            className={classes.resultCardHeader}
                          >
                            <strong>{eachVendor.companyName}</strong>
                          </Typography>
                        </Grid>

                        <Grid item>
                          <Avatar
                            alt={eachVendor.companyName}
                            className={classes.imgSize}
                            src={eachVendor.profilePic}
                            variant="rounded"
                          />
                        </Grid>
                      </Grid>
                    </Card>
                  </Grid>
                );
              })
            )}
          </>
        );
      })}
    </Grid>
  );
}

export default SearchResults;
