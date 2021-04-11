import React from 'react';

import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';

// Material-UI
import { ThemeProvider } from '@material-ui/core/styles';
import {
  Button, // replaces html5 <button> element
  ButtonGroup,
  FormControl,
  FormHelperText,
  Grid, //
  Input,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography, // replace html5 elements dealing with text, <h1>, <h2>, <h3>, <p>, etc...

} from '@material-ui/core';

function RegisterPage({ theme }) {
  const history = useHistory();

  return (
    <ThemeProvider theme={theme}>
      <RegisterForm />

      <center>
        <Button color="primary" variant="contained"
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/login');
          }}
        >
          Login
        </Button>
      </center>
    </ThemeProvider>
  );
}

export default RegisterPage;
