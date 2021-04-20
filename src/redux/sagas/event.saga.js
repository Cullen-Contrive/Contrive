import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_SINGLE_EVENT" action
function* fetchSingleEvent(action) {
  try {
    // payload used for accessing event by id
    const response = yield axios.get(`/api/event/${action.payload}`);
    yield put({ type: 'SET_EVENT', payload: response.data });
  } catch (err) {
    console.error('Event get by id request failed', err);
  }
}

// worker Saga: will be fired on "FETCH_ALL_EVENTS" action
function* fetchAllEvents() {
  try {
    const response = yield axios.get('/api/event');
    yield put({ type: 'SET_ALL_EVENTS', payload: response.data });
  } catch (err) {
    console.error('Get all events request failed', err);
  }
}

// worker Saga: will be fired on "ADD_PHOTO_TO_EVENT" action
function* addPhotoToEvent(action) {
  try {
    // payload used for posting data to db
    yield axios.post('/api/event', action.payload);
  } catch (err) {
    console.error('Post photo to event request failed', err);
  }
}

function* addVendorToEvent(action) {
  try {
    yield axios.post('/api/vendor', action.payload);
  } catch (err) {
    console.error('Post vendor to event request failed', err);
  }
}

function* eventSaga() {
  yield takeLatest('FETCH_SINGLE_EVENT', fetchSingleEvent);
  yield takeLatest('FETCH_ALL_EVENTS', fetchAllEvents);
  yield takeLatest('ADD_PHOTO_TO_EVENT', addPhotoToEvent);
  yield takeLatest('ADD_VENDOR_TO_EVENT', addVendorToEvent);
}

export default eventSaga;
