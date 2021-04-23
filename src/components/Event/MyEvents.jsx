import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import placeholderImage from '../Images/placeholder.png';

function MyEvents() {
  const dispatch = useDispatch();
  const myEvents = useSelector((store) => store.events.allEventsReducer);

  useEffect(() => {
    dispatch({
      type: 'FETCH_ALL_EVENTS',
    });
  }, []);

  console.log('myEvents:', myEvents);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h2">My Events</Typography>
      </Grid>
      <Grid item xs={12}>
        {/* Events go here! */}
        {myEvents.map((event, index) => {
          return (
            <ListItem key={index}>
              {/* Avatar goes here */}
              <ListItemText>
                {event.description ? event.description : ''}
                {event.dateOfEvent ? event.dateOfEvent : ''}
              </ListItemText>

              {/* TODO: Setup a way to delete an event from my events */}
              <IconButton
                color="primary"
                aria-label="delete event"
                component="span"
              >
                <DeleteIcon />
              </IconButton>
            </ListItem>
          );
        })}
      </Grid>
    </Grid>
  );
}

export default MyEvents;
