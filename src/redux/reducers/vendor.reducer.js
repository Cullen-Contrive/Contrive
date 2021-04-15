const vendorReducer = (
  state = { 
    additionalInfo: '',
    address: '',
    city: '',
    companyName: '',
    description: '',
    phone: '',
    profilePic: '#',
    special_features: [], 
    service_types: [],
    state: '',
    website: '',
  },
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
