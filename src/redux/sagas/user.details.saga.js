import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchUserDetailsById(action) {
  // Fetches the other user details by id
  // Incoming payload should be id -> Integer
  try {
    const response = yield axios.get(`/api/user/details/${action.payload}`);
    yield put({
      type: 'SET_OTHER_USER_DETAILS',
      payload: response.data,
    });
  } catch (err) {
    console.error('an error occurred fetching user details by id');
  }
}

function* fetchLoggedInUserDetails() {
  // Fetches logged-in user's details
  // No incoming payload - Server uses req.user.id
  console.log('FETCHING logged in user details');
  const response = yield axios.get('/api/user/details/');
  console.log('FETCHED', response.data);
  yield put({
    type: 'SET_LOGGED_IN_USER_DETAILS',
    payload: response.data,
  });
  try {
  } catch (err) {
    console.error('an error occurred fetching logged-in user details');
  }
}

function* userDetailsSaga() {
  yield takeLatest('FETCH_USER_DETAILS_BY_ID', fetchUserDetailsById);
  yield takeLatest('FETCH_LOGGED_IN_USER_DETAILS', fetchLoggedInUserDetails);
}

export default userDetailsSaga;
