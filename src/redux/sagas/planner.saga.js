import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchAllPlanners(action) {
  try {
    const response = yield axios.get('/api/planner/admin');

    yield put({ type: 'SET_ALL_PLANNERS', payload: response.data });
  } catch (err) {
    console.error('ERROR in GET /api/planner', err);
  }
}

function* deletePlanner(action) {
  console.log('##$$## SAGA -> deletePlanner() ##$$##');
  console.log('\tuserId to delete:', action.payload);
  // try {
  // } catch (error) {
  //   console.error('DELETE planner request failed:', error);
  // }
}

function* plannerSaga() {
  yield takeLatest('FETCH_ALL_USERS', fetchAllPlanners);
  yield takeLatest('DELETE_PLANNER', deletePlanner);
}

export default plannerSaga;