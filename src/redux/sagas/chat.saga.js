import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchMessages(action) {
  try {
    console.log('action.payload', action.payload);
    const response = yield axios.get(`/api/message/${action.payload}`);
    console.log('CLIENT - SAGAS - fetch successful', response.data);
    yield put({ type: 'SET_MESSAGES', payload: response.data });
  } catch (err) {
    console.error('CLIENT - SAGAS - an error occurred fetching messages');
  }
}

function* fetchAllMessages() {
  try {
    const response = yield axios.get('/api/message/all');
    console.log('CLIENT - SAGAS - fetch all messages successful');
    yield put({ type: 'SET_MESSAGES', payload: response.data });
  } catch (err) {
    console.error(
      'CLIENT - SAGAS - an error occurred fetching all messages',
      err
    );
  }
}

function* postOutgoingMessages(action) {
  try {
    console.log('Received a payload', action.payload);
    const response = yield axios.post('/api/message', action.payload);
    // call the onComplete function here as a workaround for dealing with race condition
    action.payload.onComplete();
  } catch (err) {
    console.error('CLIENT - SAGAS - an error occurred posting messages');
  }
}

function* postMessage(action) {
  try {
    const response = yield axios.post('/api/message', action.payload.data);
    console.log('a response occurred', response);
    action.payload.onComplete();
  } catch (err) {
    console.error('CLIENT - SAGAS - an error occurred posting message');
  }
}

function* chatSaga() {
  yield takeLatest('FETCH_MESSAGES', fetchMessages);
  yield takeLatest('FETCH_ALL_MESSAGES', fetchAllMessages);
  yield takeLatest('POST_OUTGOING_MESSAGES', postOutgoingMessages);
  yield takeLatest('POST_MESSAGE', postMessage);
}

export default chatSaga;
