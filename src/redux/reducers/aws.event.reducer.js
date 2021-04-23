// Used to store Profile Picture URL received from AWS S3 Bucket
const awsEventReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_EVENT_PHOTO':
      return action.payload;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default awsEventReducer;
