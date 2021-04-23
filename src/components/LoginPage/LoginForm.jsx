import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import useStyles from './LoginPage.styles';

// Material-UI
import {
  Button, // replaces html5 <button> element
  FormControl,
  Grid, 
  Paper,
  TextField,
  Typography, // replace html5 elements dealing with text, <h1>, <h2>, <h3>, <p>, etc...
} from '@material-ui/core';

function LoginForm() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const errors = useSelector(store => store.errors);
  const history = useHistory();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  let keyPressed = (event) => {
    if (event.key === "Enter") {
      if (username && password) {
        dispatch({
          type: 'LOGIN',
          payload: {
            username: username,
            password: password,
          },
        });
      } else {
        dispatch({ type: 'LOGIN_INPUT_ERROR' });
      }
    }
  }; // end keyPressed

  return (
    <Grid
      item
      className={classes.loginPaper}
      component={Paper}
      container
      spacing={4}
    >
      <Grid item xs={12}>
        <Typography variant="h2" component="h2" align="center">
          Login
        </Typography>
      </Grid>

      {/* Shows login error */}
      {errors.loginMessage && (
        <Grid item xs={12}>
          <Typography 
            align="center"
            className="alert"
            component="h3"
            role="alert"
            variant="h3"
          >
            {errors.loginMessage}
          </Typography>
        </Grid>
      )}

      {/* Username (email) input */}
      <Grid item xs={12}>
        <FormControl variant="outlined" fullWidth>
          <TextField
            id="email"
            label="email"
            type="text"
            autoComplete="current-email"
            // helperText=""
            variant="outlined"
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}
          />
        </FormControl>
      </Grid>
      
      {/* Password input */}
      <Grid item xs={12}>
        <FormControl variant="outlined" fullWidth>
          <TextField
            id="password"
            label="password"
            type="password"
            autoComplete="current-password"
            helperText="Your password can include symbols and numbers."
            variant="outlined"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
            onKeyPress={keyPressed}
          />
        </FormControl>
      </Grid>
      
      {/* This Grid item container contains both the login and register buttons. */}
      <Grid 
        item
        className={classes.loginPageButtonWrapper}
        container
        xs={12}
        justify="space-evenly"
        spacing={2}
      >
        <Grid item>
          <Button
            className={classes.loginPageButton}
            color="secondary"
            variant="contained"
            type="button"
            onClick={() => {
              history.push('/registration');
            }}
          >
            Register
          </Button>
        </Grid>

        <Grid item>
          <Button
            className={classes.loginPageButton}
            color="primary"
            variant="contained"
            onClick={login}
          >
            Log In
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default LoginForm;
