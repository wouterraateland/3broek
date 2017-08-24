import { take, put } from 'redux-saga/effects'

import { toggleBag } from 'actions/modals'

function* products() {
  while(true) {
    yield take('ADD_TO_BAG')
    yield put(toggleBag())
  }
}

export default products
