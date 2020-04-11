import {all} from 'redux-saga/effects';
import * as AppSaga from './AppSaga';

function* Sagas() {
  yield all([AppSaga.watcherSaga()]);
}

export default Sagas;
