import { all, fork } from 'redux-saga/effects'

import products from 'sagas/products'

export default function* root() {
  yield all([
    fork(products)
  ])
}
