import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';

import useStyles from './Nav.styles'
import {useSelector} from 'react-redux';

// Material-UI Components
import {
  Avatar,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Button,
  Divider,
  Drawer, 
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography
} from '@material-ui/core';

// Material-UI Icons
import LanguageIcon from '@material-ui/icons/Language';
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
    loginLinkData.path = '/user';
    loginLinkData.text = 'Home';
  }
  
  // Handles menu icon change when nav bar icons are clicked
  const handleChange = (event, newValue) => {
    console.log('handleChange Nav', newValue)
    setValue(newValue);
    if (newValue === 'menu') {
      return toggleDrawer(true);
    }
    history.push(`${newValue}`);
  }

  // Opens Menu Drawer
  const toggleDrawer = (open) => {
    console.log('toggleDrawer');
    
    setState(open);
  };

  return (
    // <div className="nav">
    //   <Link to="/home">
    //     <h2 className="nav-title">Prime Solo Project</h2>
    //   </Link>
    //   <div>
    //     <Link className="navLink" to={loginLinkData.path}>
    //       {loginLinkData.text}
    //     </Link>

    //     {user.id && (
    //       <>
    //         <Link className="navLink" to="/info">
    //           Info Page
    //         </Link>
    //         <LogOutButton className="navLink" />
    //       </>
    //     )}

    //     <Link className="navLink" to="/about">
    //       About
    //     </Link>
    //   </div>
    // </div>
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.navbar}
    >

      <BottomNavigationAction label="Discover" value="/discover" icon={<LanguageIcon />} />
      <BottomNavigationAction label="Search" value="/search" icon={<SearchIcon />} />
      <BottomNavigationAction label="Plan" value="/events/create" icon={<AddCircleIcon fontSize="large" style={{ color: '#B38208' }} />} />
      <BottomNavigationAction label="Messages" value="/message" icon={<ChatIcon />} />
      <BottomNavigationAction label="Menu" value="menu" icon={<MenuIcon />} />

      <Drawer anchor="right" open={state} onClose={() => toggleDrawer(false)} className={classes.menuDrawer}>
        {/* {list} */}
        {/* TODO - Fix this in the future to show user's first name */}
        <Box p={1}>
          <Typography variant='h6' component="h2" gutterBottom>
            Schmedan's Dashboard
          </Typography>
        </Box>

        <Box p={2}>
          <center><Avatar>C</Avatar></center>
        </Box>

        <Divider />

        <Box p={2}>
          <Grid container direction="column" spacing={2} alignItems="center">
            <Grid item>
              <Button color="primary" onClick={() => history.push('/myProfile')}>My Profile</Button>
            </Grid>
            <Grid item>
              <Button color="primary" onClick={() => history.push('/myNetwork')}>My Network</Button>
            </Grid>
            <Grid item>
              <Button color="primary" onClick={() => history.push('/myEvents')}>My Events</Button>
            </Grid>
            <Grid item>
              <Button color="primary" onClick={() => history.push('/myCalendar')}>My Calendar</Button>
            </Grid>
            <Grid item>
              <Button color="primary" onClick={() => history.push('/inspiration')}>Inspiration</Button>
            </Grid>
            <Grid item>
              <LogOutButton className="navLink" />
            </Grid>

          </Grid>
        </Box>

      </Drawer>
    </BottomNavigation>
  );
}

export default Nav;
