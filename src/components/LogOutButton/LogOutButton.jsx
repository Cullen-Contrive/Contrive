// Import Libraries
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Import Styling
import { Button } from '@material-ui/core';

/**
 * Component renders a Logout button on the DOM
 *
 * When clicked, the user is logged out of the app and taken back to the '/welcome' page
 *
 * @param {object} props properties passed into LogOutButton
 * @returns {jsx} renders logout button and functionality associated with the button
 */
function LogOutButton(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <Button
      // This button shows up in multiple locations and is styled differently
      // because it's styled differently depending on where it is used, the className
      // is passed to it from it's parents through React props
      className={props.className}
      onClick={() =>
        dispatch({
          type: 'LOGOUT',
          payload: { onComplete: () => history.push('/') },
        })
      }
      color="secondary"
      variant="contained"
    >
      Log Out
    </Button>
  );
}

export default LogOutButton;
