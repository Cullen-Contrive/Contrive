import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';

// Creates categorySAGA Generator function
function* searchSaga() {
  yield takeEvery('FETCH_MATCHING_VENDORS', fetchMatchingVendors);
}

function* fetchMatchingVendors(action) {
  const vendorTypeSelection = action.payload.typeId;
  const specialFeatureSelection = action.payload.featureId;

  // An empty search string will not send over the api, so revert "" to the identifying placeholder we chose (37423573209)
  let searchTerm;
  if (action.payload.searchTermInput === "") {
    searchTerm = 37423573209;
  } else {
    searchTerm = action.payload.searchTermInput;
  }

  console.log('start of fetchMatchingVendors', vendorTypeSelection, specialFeatureSelection, searchTerm);

  try {
    const response = yield axios.get(`/api/search/typeId=${vendorTypeSelection}/featureId=${specialFeatureSelection}/searchTerm=${searchTerm}`);

    // yield put({ type: 'SET_MATCHING_VENDORS', payload: response.data });
    yield put({ type: 'SET_SEARCH_RESULTS', payload: response.data });

  } catch (error) {
    console.log('fetchMatchingVendors get request failed', error);
  }
}
export default searchSaga;