import React from 'react';
import { useHistory } from 'react-router-dom';

// MATERIAL-UI
import useStyles from './Search.styles';
import { Avatar, Grid, Typography, Card } from '@material-ui/core';

function SearchResultDetails({ vendor }) {
  const history = useHistory();
  const classes = useStyles();

  return (
    <Grid
      item
      xs={6}
      // className={classes.gridContainer}
      onClick={() => history.push(`/vendor/${vendor.vendorUserId}`)}
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
            <Typography variant="body1" align="center" className={classes.resultCardHeader}>
              <strong>{vendor.companyName}</strong>
            </Typography>
          </Grid>

          <Grid item>
            <Avatar
              className={classes.imgSize}
              src={vendor.profilePic}
              alt={vendor.companyName}
              variant="rounded"
            />
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}

export default SearchResultDetails;