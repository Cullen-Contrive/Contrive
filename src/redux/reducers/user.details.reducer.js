// Used for grabbing second user's details (NOT the logged-in user)
// for displaying their profile pic and user type for messages
const otherUserDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_OTHER_USER_DETAILS':
      return action.payload;
    default:
      return state;
  }
};

export default otherUserDetailsReducer;
