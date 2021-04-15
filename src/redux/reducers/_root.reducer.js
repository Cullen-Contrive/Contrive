import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import userDetails from './user.details.reducer';
import chat from './chat.reducer';
import search from './search.reducer';
import features from './specialFeatures.reducer';
import vendorTypes from './vendorTypes.reducer';
import vendor from './vendor.reducer';
import profilePic from './aws.reducer';
import filter from './filter.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  userDetails,
  chat,
  search, // search results based off vendor name keyword
  features,
  vendorTypes,
  vendor,
  profilePic,
  filter,
});

export default rootReducer;
