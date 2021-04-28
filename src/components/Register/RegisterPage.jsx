import React from 'react';

import { useHistory } from 'react-router-dom';
import RegisterForm from '../Register/RegisterForm';

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
    </Grid>
  );
}

export default RegisterPage;
