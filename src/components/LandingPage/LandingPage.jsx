// First welcome page for new users, (if logged in, will reroute user to /discover)
// reached at path /welcome

import React from 'react';
import { useHistory } from 'react-router-dom';

import useStyles from './LandingPage.styles';

// MATERIAL UI

import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

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

    <Box className={classes.paperContainer}>

      <Box align="center" width="100%" className={classes.buttons}>
        <Box className={classes.root}>

          <Button color="secondary" variant="contained" onClick={onLogin} size="large">
            <Typography variant="body1">
              Login
            </Typography>
          </Button>

          <Button color="primary" variant="contained" onClick={onRegister} size="large">
            <Typography variant="body1">
              Register
            </Typography>
          </Button>

        </Box>
      </Box>

    </Box>
  );
}

export default LandingPage;
