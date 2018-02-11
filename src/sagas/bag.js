import { takeEvery, put } from 'redux-saga/effects'

import * as Bag from 'ducks/bag'
import * as Modals from 'ducks/modals'

function* toggleBag() {
  yield put(Modals.toggleBag())
}

function* bagSaga() {
  yield takeEvery(Bag.ADD, toggleBag)
}

export default bagSaga
