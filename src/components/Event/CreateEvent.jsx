import { Typography } from '@material-ui/core';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function CreateEvent() {
  const dispatch = useDispatch();
  const allEvents = useSelector((store) => store.events.allEventsReducer);
  useEffect(() => {
    dispatch({ type: 'FETCH_ALL_EVENTS' });
  }, []);

  console.log('allEvents', allEvents);
  return (
    <Typography variant="h2">
      We will let you make an event... event...ually. 😂😅
    </Typography>
  );
} // end CreateEvent

export default CreateEvent;
