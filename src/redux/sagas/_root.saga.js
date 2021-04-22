import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import otherUserDetailsSaga from './user.details.saga';
import messageSaga from './message.saga';
import searchSaga from './search.saga';
import dropdownSaga from './dropdown.saga';
import vendorSaga from './vendor.saga';
<<<<<<< HEAD
import eventsSaga from './events.saga';
=======
import plannerSaga from './planner.saga';
>>>>>>> 3db6abcd51080037f64b2cb96dc69f4d10195991

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    otherUserDetailsSaga(),
    messageSaga(),
    searchSaga(),
    dropdownSaga(),
    vendorSaga(),
<<<<<<< HEAD
    eventsSaga(),
=======
    plannerSaga(),
>>>>>>> 3db6abcd51080037f64b2cb96dc69f4d10195991
  ]);
}
