const searchReducer = (state = [{
  additionalInfo: "",
  certified: false,
  companyName: "",
  description: "",
  id: 0,
  phone: "",
  vendorUserId: 0,
}], action) => {
  switch (action.type) {
    case 'SET_SEARCH_RESULTS':
      return [action.payload];
    case 'UNSET_SEARCH':
      return [{
        additionalInfo: "",
        certified: false,
        companyName: "",
        description: "",
        id: 0,
        phone: "",
        vendorUserId: 0,
      }];
    default:
      return state;
  }
};

export default searchReducer;