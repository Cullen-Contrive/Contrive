// Import Libraries
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Import Styling
import useStyles from './Nav.styles';

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
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ChatIcon from '@material-ui/icons/Chat';
import ExploreIcon from '@material-ui/icons/Explore';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

// Import Custom Components
import LogOutButton from '../LogOutButton/LogOutButton';
import PlannerNav from './PlannerNav';
import VendorNav from './VendorNav';

/**
 * Component conditionally renders the sticky navigation bar at the bottom of
 * the screen and the slide out drawer on the right side of the screen.
 *
 * Planners see the following links:
 * - Bottom Nav
 *  - Discover
 *  - The Network
 *  - Create Event
 *  - Messages
 *  - Menu
 * - Drawer
 *  - My Network
 *  - My Events
 *  - My Calendar
 *  - Inspiration
 *  - Logout
 *
 * Vendors see the following links:
 * - Bottom Nav
 *  - Discover
 *  - Messages
 *  - Menu
 * - Drawer
 *  - My Profile
 *  - My Network
 *  - My Events
 *  - My Calendar
 *  - Logout
 *
 * Admins see the following links:
 * - Bottom Nav
 *  - Discover
 *  - The Network
 *  - Create Event
 *  - Messages
 *  - Menu
 * - Drawer
 *  - My Network
 *  - My Events
 *  - My Calendar
 *  - Logout
 *
 * @returns {jsx} renders nav bar on bottom of screen and pull out drawer on right side of the DOM
 */
function Nav() {
  const classes = useStyles();
  let history = useHistory();

  // Local State variables used to render links
  const [value, setValue] = useState('discover');
  const [state, setState] = useState(false);

  // Redux store data about logged in user
  const user = useSelector((store) => store.user);

  // Reroute user if not logged in
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

  // Render Bottom Nav and Drawer components
  return (
    <>
      {' '}
      {/* nav bar look depends on user type, vendor or planner */}
      {user.type === 'vendor' ? (
        // Render Vendor Bottom Nav
        <VendorNav
          classes={classes}
          handleChange={handleChange}
          value={value}
        />
      ) : (
        // Render Planner Bottom Nav
        <PlannerNav
          classes={classes}
          handleChange={handleChange}
          value={value}
        />
      )}
      {/* Render Drawer navigation */}
      <Drawer
        anchor="right"
        open={state}
        onClose={() => toggleDrawer(false)}
        className={classes.menuDrawer}
      >
        {/* Display User's Name */}
        <Box p={1}>
          <Typography variant="h5" component="h2" gutterBottom>
            {user.firstName}'s Dashboard
          </Typography>
        </Box>

        {/* User's Profile Picture - Avatar */}
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
          {/* My Profile - Vendors only currently */}
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

            {/* My Network Link */}
            <Grid item>
              <Button
                color="primary"
                onClick={() => history.push('/myNetwork')}
              >
                My Network
              </Button>
            </Grid>

            {/* My Events */}
            <Grid item>
              <Button
                color="primary"
                onClick={() => history.push('/my/events')}
              >
                My Events
              </Button>
            </Grid>

            {/* My Calendar */}
            <Grid item>
              <Button
                color="primary"
                onClick={() => history.push('/myCalendar')}
              >
                My Calendar
              </Button>
            </Grid>

            {/* Inspiration - Planners only */}
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

            {/* Admin Portal - Admin only */}
            {user.type === 'admin' && (
              <Grid item>
                <Button color="primary" onClick={() => history.push('/admin')}>
                  Admin Portal
                </Button>
              </Grid>
            )}

            {/* Logout */}
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
