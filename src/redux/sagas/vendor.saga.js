import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchSingleVendor(action) {
  try {
    const response = yield axios.get(`/api/vendor/${action.payload}`);
    yield put({ type: 'SET_VENDOR', payload: response.data });
  } catch (error) {
    console.error('Vendor get request failed', error);
  }
}

function* fetchAllVendors(action) {
  try {
    const response = yield axios.get('/api/vendor/all');
    yield put({ type: 'SET_ALL_VENDORS', payload: response.data });
  } catch (err) {
    console.error('Get all vendors request failed', err);
  }
}

function* updateVendorProfile(action) {
  try {
    yield axios.put('/api/vendor/update', action.payload.data);

    yield put({
      type: 'FETCH_SINGLE_VENDOR',
      payload: action.payload.data.vendorUserId,
    });

    action.payload.onComplete();
  } catch (err) {
    console.error('Get all vendors request failed', err);
  }
}

function* deleteVendor(action) {
  console.log('&&&& deleteVendor() Saga &&&&');
  console.log('\tuserId to delete:', action.payload);

  try {
    yield axios.delete(`/api/vendor/delete/${action.payload}`);
  } catch (error) {
    console.error('DELETE vendor request failed:', error);
  }
}

function* vendorSaga() {
  yield takeLatest('FETCH_SINGLE_VENDOR', fetchSingleVendor);
  yield takeLatest('FETCH_ALL_VENDORS', fetchAllVendors);
  yield takeLatest('UPDATE_VENDOR_PROFILE', updateVendorProfile);
  yield takeLatest('DELETE_VENDOR', deleteVendor);
}

export default vendorSaga;
