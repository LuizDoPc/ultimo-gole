import {takeLatest, put} from 'redux-saga/effects';

import {REQUEST_TEST, REDUX_TEST} from 'store/actions';

export const getStructure = state => state.TemplateReducer.structure;

function* test(action) {
  yield new Promise(resolve => {
    setTimeout(resolve, 1000);
  });

  yield put({type: REDUX_TEST});
}

export function* watcherSaga() {
  yield takeLatest(REQUEST_TEST, test);
}
