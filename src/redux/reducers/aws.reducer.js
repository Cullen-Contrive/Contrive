
// Used to store Profile Picture URL received from AWS S3 Bucket
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
