import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_SINGLE_EVENT" action
function* fetchSingleEvent(action) {
  try {
    // payload: id -> integer
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
    // console.log('fetching all events');
    // console.table('events:', response.data);
    yield put({ type: 'SET_ALL_EVENTS', payload: response.data });
  } catch (err) {
    console.error('Get all events request failed', err);
  }
}

// worker Saga: will be fired on "ADD_EVENT" action
function* addEvent(action) {
  try {
    // payload: {
    // plannerUserId -> integer
    // dateOfEvent -> date
    // timeOfEvent -> string
    // address -> string
    // city -> string
    // state -> string
    // zip -> integer
    // numberOfAttendees -> integer
    // description -> string
    // }
    yield axios.post('/api/event', action.payload);
  } catch (err) {
    console.error('Adding event request failed', err);
  }
}

// worker Saga: will be fired on "ADD_PHOTO_TO_EVENT" action
function* addPhotoToEvent(action) {
  try {
    // payload: {
    // expected photo -> Image URL - string
    // expected eventId -> integer
    // }
    yield axios.post('/api/event/photos', action.payload);
  } catch (err) {
    console.error('Post photo to event request failed', err);
  }
}

// worker Saga: will be fired on "ADD_VENDOR_TO_EVENT" action
function* addVendorToEvent(action) {
  try {
    // payload: {
    // expected vendorUserId -> integer
    // expected eventId -> integer
    // }
    yield axios.post('/api/event/vendors', action.payload);
  } catch (err) {
    console.error('Post vendor to event request failed', err);
  }
}

function* addTypeToEvent(action) {
  try {
    // payload: {
    // expected eventId -> integer
    // expected typeId -> integer
    // }
    yield axios.post('/api/event/types', action.payload);
  } catch (err) {
    console.error('Post type to event request failed', err);
  }
}

function* updateEvent(action) {
  try {
    // payload: {
    // plannerUserId -> integer
    // address -> string
    // city -> string
    // state -> string
    // zip -> integer
    // numberOfAttendees -> integer
    // description -> string
    // dateOfEvent -> date
    // timeOfEvent -> string
    // eventId -> integer
    // }
    yield axios.put(`/api/event/${action.payload.eventId}`, action.payload);
  } catch (err) {
    console.error('Update event details request failed', err);
  }
}

function* eventsSaga() {
  yield takeLatest('FETCH_SINGLE_EVENT', fetchSingleEvent);
  yield takeLatest('FETCH_ALL_EVENTS', fetchAllEvents);
  yield takeLatest('ADD_EVENT', addEvent);
  yield takeLatest('ADD_PHOTO_TO_EVENT', addPhotoToEvent);
  yield takeLatest('ADD_VENDOR_TO_EVENT', addVendorToEvent);
  yield takeLatest('ADD_TYPE_TO_EVENT', addTypeToEvent);
  yield takeLatest('UPDATE_EVENT', updateEvent);
}

export default eventsSaga;
