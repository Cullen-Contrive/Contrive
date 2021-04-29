import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchMessageConversation(action) {
  const otherUserId = action.payload;
  try {
    // Fetches messages between logged-in user (userId) and one other user
    // userId will be req.user.id, otherUser needs to be passed in:
    const response = yield axios.get(`/api/message/${otherUserId}`);
    yield put({ type: 'SET_MESSAGES', payload: response.data });
  } catch (err) {
    console.error('CLIENT - SAGAS - an error occurred fetching messages');
  }
}

// Fetches all messages (conversations) between a user and anyone they have had conversations with
function* fetchAllMessages() {
  try {
    // Fetches all messages from server/db based on req.user.id
    // req.user.id is accessed via the server
    const response = yield axios.get('/api/message/all');

    yield put({ type: 'SET_ALL_MESSAGES', payload: response.data });
  } catch (err) {
    console.error(
      'CLIENT - SAGAS - an error occurred fetching all messages',
      err
    );
  }
}

function* postOutgoingMessages(action) {
  try {
    // Template for posting outgoing messages asynchronously
    const response = yield axios.post('/api/message', action.payload);
    action.payload.onComplete();
  } catch (err) {
    console.error('CLIENT - SAGAS - an error occurred posting messages');
  }
}

function* postMessage(action) {
  try {
    // Posts individual message to server/db
    // expects payload.data -> Object
    // expects onComplete -> function which will call fetch messages upon completion
    const response = yield axios.post('/api/message', action.payload.data);
    action.payload.onComplete();
  } catch (err) {
    console.error('CLIENT - SAGAS - an error occurred posting message');
  }
}

function* chatSaga() {
  yield takeLatest('FETCH_MESSAGE_CONVERSATION', fetchMessageConversation);
  yield takeLatest('FETCH_ALL_MESSAGES', fetchAllMessages);
  yield takeLatest('POST_OUTGOING_MESSAGES', postOutgoingMessages);
  yield takeLatest('POST_MESSAGE', postMessage);
}

export default chatSaga;
