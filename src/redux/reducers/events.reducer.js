import { combineReducers } from 'redux';

// Stores all events
const allEventsReducer = (state = [], action) => {
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

export default combineReducers({ allEventsReducer, eventReducer });
