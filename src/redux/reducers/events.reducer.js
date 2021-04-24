import { combineReducers } from 'redux';

// Stores all events
const allEventsReducer = (
  state = [
    {
      eventsPhotos: [
        {
          id: '',
          photo: '',
        },
      ],
      eventsTypes: [{}],
      eventsVendors: [{}],
    },
  ],
  action
) => {
  // {"id":1,
  // "dateOfEvent":"30 APR 2021",
  // "timeOfEvent":"03:00 AM",
  // "address":"5600 Walnut",
  // "city":"Smithville",
  // "state":"MO",
  // "zip":"64089",
  // "numberOfAttendees":50,
  // "description":"Graduation celebration!",
  // "companyName":"Sir Knights Rentals",
  // "firstName":"McKynlee","lastName":"Westman",
  // "eventsPhotos":[null],
  // "eventsTypes":[{"id":1,"eventId":1,"typeId":5}],
  // "eventsVendors":[{"id":1,"vendorUserId":2,"eventId":1}]}

  switch (action.type) {
    case 'SET_ALL_EVENTS':
      return action.payload;
    default:
      return state;
  }
};

// Stores individual events after getting event by id
const eventReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_EVENT':
      return action.payload;
    default:
      return state;
  }
};

const typesOfEventsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_TYPES_OF_EVENTS':
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  allEventsReducer,
  eventReducer,
  typesOfEventsReducer,
});
