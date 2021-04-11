// Second Registration page when a user selects 'Yes- I am a vendor'
// reached by path '/registration/vendor'
import React from 'react';

import { useHistory } from 'react-router-dom';
import RegisterVendorForm from '../RegisterForm/RegisterVendorForm';

// Material-UI
import { ThemeProvider } from '@material-ui/core/styles';
import {
  Button, // replaces html5 <button> element
  Grid,
  Typography, // replace html5 elements dealing with text, <h1>, <h2>, <h3>, <p>, etc...
} from '@material-ui/core';

function VendorRegisterPage({ theme }) {
  const history = useHistory();

  return (
    <ThemeProvider theme={theme}>

      <Grid item container xs={12}>
        <RegisterVendorForm />
      </Grid>

    </ThemeProvider>
  );
}

export default VendorRegisterPage;