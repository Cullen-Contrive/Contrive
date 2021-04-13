import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* runSearch(action) {
  const searchTerm = action.payload.searchInput;

  console.log('runSearch searchTerm:', searchTerm);

  try {
    // const searchResults = yield axios.get('/api/search', searchTerm);
    const searchResults = yield axios.get(`/api/search/${searchTerm}`);
    // console.log('searchResults:', searchResults.data);

    yield put({ type: 'SET_SEARCH_RESULTS', payload: searchResults.data });
  } catch (err) {
    console.error('CLIENT - SAGAS - an error occurred fetching search results');
  }
}


function* searchSaga() {
  yield takeLatest('RUN_SEARCH', runSearch);
}

export default searchSaga;