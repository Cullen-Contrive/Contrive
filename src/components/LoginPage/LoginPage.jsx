import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';

// Material-UI
import { ThemeProvider } from '@material-ui/core/styles';
import {
  Button, // replaces html5 <button> element
  Grid,
  Typography, // replace html5 elements dealing with text, <h1>, <h2>, <h3>, <p>, etc...
} from '@material-ui/core';

function LoginPage() {
  const history = useHistory();

  return (
    <Grid item container xs={12}>
      <LoginForm />
    </Grid>
  );
}

export default LoginPage;
