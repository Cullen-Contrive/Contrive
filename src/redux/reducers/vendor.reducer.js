const vendorReducer = (
  state = { special_features: [], service_types: [] },
  action
) => {
  switch (action.type) {
    case 'SET_VENDOR':
      return action.payload;
    case 'SET_ALL_VENDORS':
      return action.payload;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default vendorReducer;
