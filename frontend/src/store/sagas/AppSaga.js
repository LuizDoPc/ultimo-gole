import { takeLatest, put } from 'redux-saga/effects';

import { GET_DASH, GET_DASH_SUCCESS } from 'store/actions';

export const getStructure = (state) => state.TemplateReducer.structure;

function* getDash(action) {
  yield new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  const dashData = {
    user: {
      name: 'Aimoré',
      role: 'Contador',
    },
  };

  yield put({ type: GET_DASH_SUCCESS, payload: dashData });
}

export function* watcherSaga() {
  yield takeLatest(GET_DASH, getDash);
}
