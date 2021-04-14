import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchMessages() {
  try {
    const response = yield axios.get('/api/message');
    console.log('CLIENT - SAGAS - fetch successful', response.data);
    yield put({ type: 'SET_MESSAGES', payload: response.data });
  } catch (err) {
    console.error('CLIENT - SAGAS - an error occurred fetching messages');
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
    console.log('Received a payload', action.payload);
    // With only posting one message at a time, wrap the action.payload in an array
    // to use the same endpoint for posting all messages.
    const response = yield axios.post('/api/message', [action.payload]);
    yield put({ type: 'FETCH_MESSAGES' });
  } catch (err) {
    console.error('CLIENT - SAGAS - an error occurred posting message');
  }
}

function* chatSaga() {
  yield takeLatest('FETCH_MESSAGES', fetchMessages);
  yield takeLatest('POST_OUTGOING_MESSAGES', postOutgoingMessages);
  yield takeLatest('POST_MESSAGE', postMessage);
}

export default chatSaga;
