import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import useStyles from './Nav.styles'
import {useSelector} from 'react-redux';

import MenuDrawer from './MenuDrawer';

// Material-UI Components
import {
  Avatar,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Button,
  Divider,
  Drawer, 
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

  const list = () => {
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Avatar>C</Avatar>
      <Divider />
      <List>
        <ListItem>
          <ListItemText>My Profile</ListItemText>
        </ListItem>
      </List>
    </div>
  };

  
  const handleChange = (event, newValue) => {
    console.log('handleChange Nav', newValue)
    setValue(newValue);
    if (newValue === 'menu') {
      return toggleDrawer(true);
    }
    history.push(`${newValue}`);
  }

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
      <BottomNavigationAction label="Search" value="/theNetwork" icon={<SearchIcon />} />
      <BottomNavigationAction label="Plan" value="/events/create" icon={<AddCircleIcon fontSize="large" style={{ color: '#B38208' }} />} />
      <BottomNavigationAction label="Messages" value="/messages" icon={<ChatIcon />} />
      <BottomNavigationAction label="Menu" value="menu" icon={<MenuIcon />} />
      <Drawer anchor="right" open={state} onClose={() => toggleDrawer(false)} className={classes.menuDrawer}>
        {/* {list} */}
        {/* Fix this in the future to show user's first name */}
        <Typography variant='h6' component="h2" gutterBottom>
          Schmedan's Dashboard
        </Typography>
        <center><Avatar>C</Avatar></center>
        <Divider />
        <Button  color="primary" onClick={() => history.push('/myProfile')}>My Profile</Button>
        <Button  color="primary" onClick={() => history.push('/myNetwork')}>My Network</Button>
        <Button color="primary" onClick={() => history.push('/myEvents')}>My Events</Button>
        <Button color="primary" onClick={() => history.push('/myCalendar')}>My Calendar</Button>
        <Button color="primary" onClick={() => history.push('/inspiration')}>Inspiration</Button>
        {/* <List>
          <ListItem>
            <ListItemText>My Profile</ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText>My Network</ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText>My Events</ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText>My Calendar</ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText>Inspiration</ListItemText>
          </ListItem>
        </List> */}
      </Drawer>
      {/* <MenuDrawer
        toggleDrawer={toggleDrawer}
        state={state}
      /> */}
    </BottomNavigation>
  );
}

export default Nav;
