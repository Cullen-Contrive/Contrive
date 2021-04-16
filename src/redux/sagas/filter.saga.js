import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// Creates categorySAGA Generator function
function* filterSaga() {
  yield takeLatest('FETCH_MATCHING_VENDORS', fetchMatchingVendors);
}

function* fetchMatchingVendors(action) {
  const vendorTypeSelection = action.payload.typeId;
  const specialFeatureSelection = action.payload.featureId;

  console.log('start of fetchMatchingVendors', vendorTypeSelection, specialFeatureSelection);

  try {
    const response = yield axios.get(`/api/filter/typeId=${vendorTypeSelection}/featureId=${specialFeatureSelection}`);

    yield put({ type: 'SET_MATCHING_VENDORS', payload: response.data });
  } catch (error) {
    console.log('fetchMatchingVendors get request failed', error);
  }
}
export default filterSaga;