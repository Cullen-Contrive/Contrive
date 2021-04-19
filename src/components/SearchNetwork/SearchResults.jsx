import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Grid, Box, Typography, Card, CardContent } from '@material-ui/core';

// CUSTOM COMPONENTS:
import SearchResultDetails from './SearchResultDetails';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    paddingTop: "10px",
    padding: theme.spacing(1),
  },
  cardSize:{
    // height: "100%",
    height: "200px",
  },
  img: {
    maxHeight: "75px",
    minHeight: "40px"
  }
}));
function SearchResults({ hasMadeSearchRequest }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const classes = useStyles();
  const [spacing, setSpacing] = React.useState(2);
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
                        <Grid xs={6} className={classes.gridContainer} onClick={() => history.push(`/vendor/${eachVendor.vendorUserId}`)}>
                          <Card className={classes.cardSize}>
                            <Box height='90px' textAlign='center'>
                            <CardContent>
                              <Typography>{eachVendor.companyName}</Typography>
                            </CardContent>
                            </Box>

                            <Box height='100px' alignContent='center'>
                            <CardContent>
                              <img className={classes.img} src={eachVendor.profilePic} alt={eachVendor.companyName} />
                            </CardContent>
                            </Box>
                            {/* ToDo: Add Vendor Rating (Stretch) here */}
                            {/* <Box>{vendor.rating}</Box> */}
                          </Card>
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