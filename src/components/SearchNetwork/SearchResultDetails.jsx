import React from 'react';
import { Box, Grid, Typography, Card, CardContent } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
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
  imgSize: {
    maxHeight: "75px",
    minHeight: "40px"
  }
}));

function SearchResultDetails({ vendor }) {
  // console.log('vendor:', vendor);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const [spacing, setSpacing] = React.useState(2);

    // Bring in vendors to display upon page load:
  let Vendors = useSelector(store => store.allVendors);

  return (

    <Grid xs={6} className={classes.gridContainer}
      onClick={() => history.push(`/vendor/${vendor.vendorUserId}`)}>
      <Card className={classes.cardSize}>
      <Box height='90px' textAlign='center'>
        <CardContent>
          <Typography>{vendor.companyName}</Typography>
        </CardContent>
      </Box>

      <Box height='100px' alignContent='center'>
        <CardContent>
          <img className={classes.imgSize} src={vendor.profilePic} alt={vendor.companyName} />
        </CardContent>
      </Box>
        {/* ToDo: Add Vendor Rating (Stretch) here */}
        {/* <Box>{vendor.rating}</Box> */}


      </Card>
    </Grid>


  );
}

export default SearchResultDetails;