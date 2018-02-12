import { all, takeEvery, put, call, select } from 'redux-saga/effects'

import Client from 'shopify-buy'

import * as Bag from 'ducks/bag'
import * as Modals from 'ducks/modals'

import { getBagProducts } from 'selectors/bag'

function* toggleBag() {
  yield put(Modals.toggleBag())
}

async function createCheckout(products) {
  const client = Client.buildClient({
    domain: 'driebroek.myshopify.com',
    storefrontAccessToken: '33bca099c613d4ea7eeb9517683e3b37'
  })

  client.checkout.create({
    lineItems: products.map(({ amount, productId }) => ({
      variantId: productId,
      quantity: amount
    }))
  }).then(checkout =>
    window.location.assign(checkout.webUrl)
  ).catch(error => {
    const errors = JSON.parse(error.message)

    const errorMessage = errors
      .map(({ field, message }) => {
        if (field[0] === 'input' && field[1] === 'lineItems' && field[3] === 'quantity') {
          const productName = products[field[2]].product.name
          const msg = message.substring(message.indexOf('.') + 2)
          return `${productName}: ${msg}`
        } else {
          return message
        }
      })
      .reduce((acc, e) => `${acc}\n${e}`, '')

    alert(errorMessage)
  })
}

function* checkout() {
  const bagProducts = yield select(getBagProducts)
  yield call(createCheckout, bagProducts)
}

function* bagSaga() {
  yield all([
    takeEvery(Bag.ADD, toggleBag),
    takeEvery(Bag.CHECKOUT.REQUEST, checkout),
  ])
}

export default bagSaga
