const vendorReducer = (
  state = {
    additionalInfo: '',
    address: '',
    city: '',
    companyName: '',
    description: '',
    phone: '',
    profilePic: '',
    specialFeatures: [],
    serviceTypes: [],
    state: '',
    website: '',
    zip: '',
  },
  action
) => {
  switch (action.type) {
    case 'SET_VENDOR':
      return action.payload;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default vendorReducer;