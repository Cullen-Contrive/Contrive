// Used to store vendor types
const vendorTypes = (state = {}, action) => {
  switch (action.type) {
    case 'SET_VENDOR_TYPE_LIST':
      return action.payload;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default vendorTypes;