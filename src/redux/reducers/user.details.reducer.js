const otherUserDetailsReducer = (state = {}, action) => {
  // Used for grabbing second user's details for displaying their
  // profile pic and user type for messages
  switch (action.type) {
    case 'SET_OTHER_USER_DETAILS':
      return action.payload;
    default:
      return state;
  }
};

const loggedInUserDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_LOGGED_IN_USER_DETAILS':
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  otherUserDetailsReducer,
  loggedInUserDetailsReducer,
});
