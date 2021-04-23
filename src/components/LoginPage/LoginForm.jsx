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
  const history = useHistory();
  const classes = useStyles();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();

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
  };

  return (
    <Grid item container spacing={4} component={Paper} className={classes.loginPaper}>
      <Grid item xs={12}>
        <Typography variant="h2" component="h2" align="center">
          Login
        </Typography>
      </Grid>

      {errors.loginMessage && (
        <Grid item xs={12}>
          <Typography variant="h3" component="h3" align="center"
            className="alert" role="alert">
            {errors.loginMessage}
          </Typography>
        </Grid>
      )}

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


      <Grid 
        item 
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