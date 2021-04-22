import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';

// Material-UI
import {
  Grid,
} from '@material-ui/core';

function LoginPage() {
  const history = useHistory();

  return (
    <Grid container>
      <LoginForm />
    </Grid>
  );
}

export default LoginPage;
