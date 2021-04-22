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

function* plannerSaga() {
  yield takeLatest('FETCH_ALL_USERS', fetchAllPlanners);
}

export default plannerSaga;
