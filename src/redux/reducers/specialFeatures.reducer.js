// Used to store special features
const specialFeatures = (state = [{ id: 0, name: "" }], action) => {
  switch (action.type) {
    case 'SET_SPECIAL_FEATURE_LIST':
      return action.payload;
    default:
      return state;
  }
};

// user will access the redux state at:
// state.user
export default specialFeatures;