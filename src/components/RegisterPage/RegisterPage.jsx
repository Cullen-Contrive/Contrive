import React from 'react';

import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';

// Material-UI
import { ThemeProvider } from '@material-ui/core/styles';
import {
  Button, // replaces html5 <button> element
  Grid,
  Typography, // replace html5 elements dealing with text, <h1>, <h2>, <h3>, <p>, etc...
} from '@material-ui/core';

function RegisterPage({ theme }) {
  const history = useHistory();

  return (
    <ThemeProvider theme={theme}>

      <Grid item container xs={12}>
        <RegisterForm />
      </Grid>

      <Grid item container xs={12} justify="center">
        <Button color="secondary" variant="contained"
          type="button"
          onClick={() => {
            history.push('/login');
          }}
        >
          Login
        </Button>
      </Grid>
    </ThemeProvider>
  );
}

export default RegisterPage;
