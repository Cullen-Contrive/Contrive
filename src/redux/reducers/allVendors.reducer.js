// All Vendors to display on search page before filtering
const allVendorReducer = (state = [{
  firstName: "",
  lastName: "",
  additionalInfo: "",
  certified: false,
  companyName: "",
  profilePic: "https://iupac.org/wp-content/uploads/2018/05/default-avatar-300x300.png",
  description: "",
  id: 0,
  phone: "",
  vendorUserId: 0,
}], action) => {
  switch (action.type) {
    case 'SET_ALL_VENDORS':
      return action.payload;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default allVendorReducer;
