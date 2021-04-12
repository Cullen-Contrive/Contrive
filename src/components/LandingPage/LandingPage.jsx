import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Image from '../Images/contriveLanding.png';


// MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Backdrop, BottomNavigation } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { spacing } from '@material-ui/system';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *':{
      margin: theme.spacing(1),
    },
  },
  paperContainer: {
    height: '625px',
    // width:'100%',
    // maxHeight: '100%',
    // maxWidth: '100%',
    backgroundImage: `url(${Image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  },
  box: {
    height: 100,
    display: "flex",
    border: "1px solid black",
    padding: 8
  },
  centerBox: {
    justifyContent: "flex-center",
    alignItems: "flex-center"
  },
  buttons: {
    position: 'absolute',
    bottom: theme.spacing.unit * 25,
  }
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
    <Box className={classes.paperContainer}>
    
      <Box align="center" width="100%" className={classes.buttons}>
      <Box className={classes.root}>


      <Button variant="contained" onClick = {onLogin} style={{ height: 40 }}>
        <Typography variant="body1">
        Login
        </Typography>
      </Button>

      <Button variant="contained" onClick = {onRegister} style={{ height: 40 }}>
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
