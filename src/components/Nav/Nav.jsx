import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';

import useStyles from './Nav.styles';
import { useSelector } from 'react-redux';

import PlannerNav from './PlannerNav';
import VendorNav from './VendorNav';

// Material-UI Components
import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  Grid,
  Typography,
} from '@material-ui/core';

// Material-UI Icons
import ExploreIcon from '@material-ui/icons/Explore';
import SearchIcon from '@material-ui/icons/Search';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ChatIcon from '@material-ui/icons/Chat';
import MenuIcon from '@material-ui/icons/Menu';

function Nav() {
  const classes = useStyles();
  let history = useHistory();
  const [value, setValue] = useState('discover');
  const [state, setState] = useState(false);
  const user = useSelector((store) => store.user);

  let loginLinkData = {
    path: '/login',
    text: 'Login / Register',
  };

  if (user.id != null) {
    loginLinkData.path = '/discover';
    loginLinkData.text = 'Discover';
  }

  // Handles menu icon change when nav bar icons are clicked
  const handleChange = (event, newValue) => {
    console.log('handleChange Nav', newValue);
    setValue(newValue);
    if (newValue === 'menu') {
      return toggleDrawer(true);
    }
    history.push(`${newValue}`);
  };

  // Opens Menu Drawer
  const toggleDrawer = (open) => {
    console.log('toggleDrawer');

    setState(open);
  };

  return (
    <>
      {' '}
      {/* nav bar look depends on user type, vendor or planner */}
      {user.type === 'vendor' ? (
        <VendorNav
          classes={classes}
          handleChange={handleChange}
          value={value}
        />
      ) : (
        <PlannerNav
          classes={classes}
          handleChange={handleChange}
          value={value}
        />
      )}
      <Drawer
        anchor="right"
        open={state}
        onClose={() => toggleDrawer(false)}
        className={classes.menuDrawer}
      >
        <Box p={1}>
          <Typography variant="h5" component="h2" gutterBottom>
            {user.firstName}'s Dashboard
          </Typography>
        </Box>

        {/* Todo - add the user's profile photo here */}
        <Box p={2}>
          <center>
            <Avatar
              alt="Your profile picture."
              src={user.profilePic}
              className={classes.drawerAvatar}
            />
          </center>
        </Box>

        <Divider />

        <Box p={2}>
          <Grid container direction="column" spacing={3} alignItems="center">
            {user.type === 'vendor' && (
              <Grid item>
                <Button
                  color="primary"
                  onClick={() => history.push(`/vendor/${user.id}`)}
                >
                  My Profile
                </Button>
              </Grid>
            )}
            <Grid item>
              <Button
                color="primary"
                onClick={() => history.push('/myNetwork')}
              >
                My Network
              </Button>
            </Grid>
            <Grid item>
              <Button color="primary" onClick={() => history.push('/myEvents')}>
                My Events
              </Button>
            </Grid>
            <Grid item>
              <Button
                color="primary"
                onClick={() => history.push('/myCalendar')}
              >
                My Calendar
              </Button>
            </Grid>
            {user.type === 'planner' && (
              <Grid item>
                <Button
                  color="primary"
                  onClick={() => history.push('/inspiration')}
                >
                  Inspiration
                </Button>
              </Grid>
            )}
            <Grid item>
              <LogOutButton className="navLink" />
            </Grid>
          </Grid>
        </Box>
      </Drawer>
    </>
  );
}

export default Nav;
