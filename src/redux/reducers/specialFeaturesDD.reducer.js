// Used to store special features
const specialFeatures = (state = {}, action) => {
  switch (action.type) {
    case 'SET_SPECIAL_FEATURE_LIST':
      return action.payload;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default specialFeatures;