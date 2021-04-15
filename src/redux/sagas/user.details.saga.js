import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchUserDetailsById(action) {
  // Fetches the other user details by id
  // Incoming payload should be id -> Integer
  const response = yield axios.get(`/api/user/details/${action.payload}`);
  yield put({
    type: 'SET_OTHER_USER_DETAILS',
    payload: response.data,
  });
}

function* userDetailsSaga() {
  yield takeLatest('FETCH_USER_DETAILS_BY_ID', fetchUserDetailsById);
}

export default userDetailsSaga;
