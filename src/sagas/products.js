import { call } from 'redux-saga/effects'

async function fetchProducts() {
  
}

function* products() {
  const products = yield call(fetchProducts)
  console.log(products)
}

export default products
