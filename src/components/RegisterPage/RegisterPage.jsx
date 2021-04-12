import React from 'react';

import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';

// Material-UI
import {
  Button, // replaces html5 <button> element
  Grid,
  Typography, // replace html5 elements dealing with text, <h1>, <h2>, <h3>, <p>, etc...
} from '@material-ui/core';

function RegisterPage() {
  const history = useHistory();

  return (
    <Grid>

      <Grid item container xs={12}>
        <RegisterForm />
      </Grid>

      {/* Moved this Button to RegisterForm */}
      {/* <Grid item container xs={12} justify="center"> */}
      {/* <Button color="secondary" variant="contained"
          type="button"
          onClick={() => {
            history.push('/login');
          }}
        >
          Login
        </Button> */}
      {/* </Grid> */}
    </Grid>
  );
}

export default RegisterPage;
