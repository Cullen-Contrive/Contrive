import {
  BottomNavigation,
  BottomNavigationAction,
} from '@material-ui/core';

import LanguageIcon from '@material-ui/icons/Language';
import ChatIcon from '@material-ui/icons/Chat';
import MenuIcon from '@material-ui/icons/Menu';

function VendorNav({ classes, handleChange, value }) {
  return(
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.navbar}
    >
      <BottomNavigationAction label="Discover" value="/discover" icon={<LanguageIcon />} />
      <BottomNavigationAction label="Messages" value="/messages" icon={<ChatIcon />} />
      <BottomNavigationAction label="Menu" value="menu" icon={<MenuIcon />} />
    </BottomNavigation>
  );
} // end VendorNav

export default VendorNav;