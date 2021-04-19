import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';

// Material-UI Icons
import ExploreIcon from '@material-ui/icons/Explore';
import SearchIcon from '@material-ui/icons/Search';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ChatIcon from '@material-ui/icons/Chat';
import MenuIcon from '@material-ui/icons/Menu';

function PlannerNav({ classes, handleChange, value }) {
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
        label="Search"
        value="/search"
        icon={<SearchIcon />}
      />
      <BottomNavigationAction
        label="Plan"
        value="/events/create"
        icon={<AddCircleIcon fontSize="large" style={{ color: '#B38208' }} />}
      />
      <BottomNavigationAction
        label="Messages"
        value="/messages"
        icon={<ChatIcon />}
      />
      <BottomNavigationAction label="Menu" value="menu" icon={<MenuIcon />} />
    </BottomNavigation>
  );
} // end PlannerNav

export default PlannerNav;
