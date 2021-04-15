const userDetailsReducer = (state = {}, action) => {
  // Used for grabbing second user's details for displaying their
  // profile pic and user type for messages
  switch (action.type) {
    case 'SET_OTHER_USER_DETAILS':
      return action.payload;
    default:
      return state;
  }
};

export default userDetailsReducer;
