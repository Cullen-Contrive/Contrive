import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// Creates categorySAGA Generator function
function* dropdownSaga() {
  yield takeLatest('FETCH_VENDOR_TYPES', fetchVendorTypes);
  yield takeLatest('FETCH_SPECIAL_FEATURES', fetchSpecialFeatures);
}

function* fetchVendorTypes(action) {
  const data = action.payload
  console.log("inside fetchVendorTypes all", data);
    try {
      const response = yield axios.get(`/api/vendortypes`);

      yield put({ type: 'SET_VENDOR_TYPE_LIST', payload: response.data });
    } catch (error) {
      console.log('fetchVendorTypes get request failed', error);
    }
}

function* fetchSpecialFeatures(action) {
  const data = action.payload
  console.log('start of fetchSpecialFeatures', data);

  try {
    const response = yield axios.get(`/api/specialfeatures`);

    yield put({ type: 'SET_SPECIAL_FEATURE_LIST', payload: response.data });
  } catch (error) {
    console.log('fetchSpecialFeatures get request failed', error);
  }
}

export default dropdownSaga;