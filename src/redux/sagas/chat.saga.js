import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchMessages() {
  try {
    const response = yield axios.get('/api/message');
    console.log('CLIENT - SAGAS - fetch successful', response.data);
    // yield put ({type: 'SET_MESSAGES', payload: response.data});
  } catch (err) {
    console.error('CLIENT - SAGAS - an error occurred fetching messages');
  }
}

function* chatSaga() {
  yield takeLatest('FETCH_MESSAGES', fetchMessages);
}

export default chatSaga;
