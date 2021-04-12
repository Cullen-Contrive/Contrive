import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import useStyles from './Nav.styles'
import {useSelector} from 'react-redux';

// Material-UI Components
import {
  BottomNavigation,
  BottomNavigationAction
} from '@material-ui/core';

// Material-UI Icons
import LanguageIcon from '@material-ui/icons/Language';
import SearchIcon from '@material-ui/icons/Search';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ChatIcon from '@material-ui/icons/Chat';
import MenuIcon from '@material-ui/icons/Menu';

function Nav() {
  const classes = useStyles();
  const [value, setValue] = useState('discover')
  const user = useSelector((store) => store.user);

  let loginLinkData = {
    path: '/login',
    text: 'Login / Register',
  };

  if (user.id != null) {
    loginLinkData.path = '/user';
    loginLinkData.text = 'Home';
  }
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

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
      <BottomNavigationAction label="Discover" value="discover" icon={<LanguageIcon />} />
      <BottomNavigationAction label="Search" value="search" icon={<SearchIcon />} />
      <BottomNavigationAction label="Plan" value="plan" icon={<AddCircleIcon fontSize="large" style={{ color: '#B38208' }} />} />
      <BottomNavigationAction label="Messages" value="messages" icon={<ChatIcon />} />
      <BottomNavigationAction label="Menu" value="menu" icon={<MenuIcon />} />
    </BottomNavigation>
  );
}

export default Nav;
