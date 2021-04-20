import { Typography } from '@material-ui/core';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function CreateEvent() {
  const dispatch = useDispatch();
  const event = useSelector((store) => store.events.eventReducer);
  useEffect(() => {
    dispatch({ type: 'FETCH_SINGLE_EVENT', payload: 2 });
  }, []);

  console.log('event:', event);
  return (
    <Typography variant="h2">
      We will let you make an event... event...ually. 😂😅
    </Typography>
  );
} // end CreateEvent

export default CreateEvent;
