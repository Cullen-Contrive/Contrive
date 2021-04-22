// Import Libraries
import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

/**
 * Function GETs a list of all planners from the "users" table.
 *
 * Parameters returned from "users" table:
 * - id
 * - firstName
 * - lastName
 */
function* fetchAllPlanners(action) {
  try {
    // Get Planners
    const response = yield axios.get('/api/planner/admin');

    // Save list of planners in Redux store
    yield put({ type: 'SET_ALL_PLANNERS', payload: response.data });
  } catch (err) {
    console.error('ERROR in GET /api/planner', err);
  }
}

/**
 * Function permanently removes a planner (and all their associated data)
 * from the DB
 *
 * @param {object} action object containing "user".id to delete
 */
function* deletePlanner(action) {
  const deleteId = action.payload;
  try {
    // Delete Planner
    yield axios.delete(`/api/planner/delete/${deleteId}`);

    // Update Planner List
    yield put({ type: 'FETCH_ALL_PLANNERS' });
  } catch (error) {
    console.error('DELETE planner request failed:', error);
  }
}

function* plannerSaga() {
  yield takeLatest('FETCH_ALL_PLANNERS', fetchAllPlanners);
  yield takeLatest('FETCH_ALL_USERS', fetchAllPlanners);
  yield takeLatest('DELETE_PLANNER', deletePlanner);
}

export default plannerSaga;
