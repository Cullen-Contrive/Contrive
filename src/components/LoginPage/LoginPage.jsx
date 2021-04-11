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

function LoginPage({ theme }) {
  const history = useHistory();

  return (
    <ThemeProvider theme={theme}>

      <Grid item container xs={12}>
        <LoginForm />
      </Grid>

      {/* <Grid item container xs={12} justify="center">
        <Button color="secondary" variant="contained"
          type="button"
          onClick={() => {
            history.push('/registration');
          }}
        >
          Register
        </Button>
      </Grid> */}
    </ThemeProvider>
  );
}

export default LoginPage;
