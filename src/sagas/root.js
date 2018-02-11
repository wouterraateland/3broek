import { all, fork } from 'redux-saga/effects'

import windowSaga from 'sagas/window'
import productsSaga from 'sagas/products'
import bagSaga from 'sagas/bag'

export default function* root() {
  yield all([
    fork(windowSaga),
    fork(productsSaga),
    fork(bagSaga),
  ])
}
