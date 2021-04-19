import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';

import ExploreIcon from '@material-ui/icons/Explore';
import ChatIcon from '@material-ui/icons/Chat';
import MenuIcon from '@material-ui/icons/Menu';

function VendorNav({ classes, handleChange, value }) {
  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.navbar}
    >
      <BottomNavigationAction
        label="Discover"
        value="/discover"
        icon={<ExploreIcon />}
      />
      <BottomNavigationAction
        label="Messages"
        value="/messages"
        icon={<ChatIcon />}
      />
      <BottomNavigationAction label="Menu" value="menu" icon={<MenuIcon />} />
    </BottomNavigation>
  );
} // end VendorNav

export default VendorNav;
