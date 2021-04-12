import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './LandingPage.css';

// MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Backdrop } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { spacing } from '@material-ui/system';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';
import ImageUpload from '../ImageUpload/ImageUpload';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *':{
      margin: theme.spacing(1),
    },
  },
}));

function LandingPage() {
  const history = useHistory();
  const classes = useStyles();
  const [spacing, setSpacing] = React.useState(2);

  const onLogin = (event) => {
    history.push('/login');
  };

  const onRegister = (event) => {
    history.push('/registration');
  };

  return (
    <main>
      <Box align="center" >
      <Box width="100%" className="profileCard">
      <Box className={classes.root}>

      <Button variant="contained" onClick = {onLogin}>
        <Typography variant="body1">
        Login
        </Typography>
      </Button>

      <Button variant="contained" onClick = {onRegister}>
        <Typography variant="body1">
        Register
        </Typography>
      </Button>

      </Box>
      </Box>
      </Box>
    </main>
  );
}

export default LandingPage;
