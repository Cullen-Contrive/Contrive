// 
const setMatchingVendors = (state = {}, action) => {
  switch (action.type) {
    case 'SET_MATCHING_VENDORS':
      return action.payload;
    default:
      return state;
  }
};

export default setMatchingVendors;