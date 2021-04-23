import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

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
              <ListItemAvatar
                src={
                  event.eventsPhotos[0] !== null
                    ? event.eventsPhotos[0].photo
                    : { placeholderImage }
                }
                alt={event.description ? event.description + 'photo' : ''}
              />
              <ListItemText>
                {event.description ? event.description : ''}
              </ListItemText>
              <ListItemText>
                {event.dateOfEvent ? event.dateOfEvent : ''}
              </ListItemText>
            </ListItem>
          );
        })}
      </Grid>
    </Grid>
  );
}

export default MyEvents;
