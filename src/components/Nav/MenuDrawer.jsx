import React, { useState } from 'react';
import {
  Avatar,
  Divider,
  Drawer, 
  List,
  ListItem,
  ListItemText,
}from '@material-ui/core';

function MenuDrawer({toggleDrawer, state}) {
  // const [state, setState] = useState(false);
  // const toggleDrawer = (open) => (event) => {
  //   console.log('toggleDrawer');
  //   if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
  //     return;
  //   }

  //   setState(open);
  // };

  const list = () => (
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
  );

  return(
    <div>
      <Drawer anchor={'right'} open={state} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </div>
  );
}

export default MenuDrawer;