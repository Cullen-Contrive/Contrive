// First welcome page for new users, (if logged in, will reroute user to /discover)
// reached at path /welcome

import React from 'react';
import { useHistory } from 'react-router-dom';

import useStyles from './LandingPage.styles';

// MATERIAL UI
import { Box, Button, Grid, Paper, Typography } from '@material-ui/core';

function LandingPage() {
  const history = useHistory();
  const classes = useStyles();

  const onLogin = (event) => {
    history.push('/login');
  };

  const onRegister = (event) => {
    history.push('/registration');
  };

  return (
    <>
      <Box className={classes.paperContainer} />

      <Grid 
        className={classes.welcomeButtonsContainer}
        container
        justify='space-evenly'
        spacing={2}
      >
        <Grid item>
          <Button
            className={classes.welcomeButton}
            color="secondary" 
            onClick={onLogin}
            size="large"
            variant="contained" 
          >
              Login
          </Button>
        </Grid>

        <Grid item>
          <Button
            className={classes.welcomeButton}
            color="primary"
            variant="contained"
            onClick={onRegister}
            size="large"
          >
              Register
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default LandingPage;
