// Used to store artwork image url from the Server
const awsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_PROFILE_PIC':
      return action.payload;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default awsReducer;
