import React from 'react';
import LoginForm from './LoginForm';
import { useHistory } from 'react-router-dom';
import useStyles from './LoginPage.styles';

// Material-UI
import {
  Grid,
} from '@material-ui/core';

function LoginPage() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Grid alignItems="center" container className={classes.loginFormContainer}>
      <LoginForm />
    </Grid>
  );
}

export default LoginPage;
