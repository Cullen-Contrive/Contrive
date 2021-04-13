import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// Creates categorySAGA Generator function
function* dpCategorySaga() {
  yield takeLatest('FETCH_VENDOR_TYPES', fetchActiveCategory);
  yield takeLatest('FETCH_ACTIVE_ARTWORK', fetchActiveArtwork);

}