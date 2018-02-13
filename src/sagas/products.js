import { call, put } from 'redux-saga/effects'

import * as Products from 'ducks/products'
import Client from 'shopify-buy'

const productColors = {
  'Black Panther': {
    backgroundColor: '#6b5861',
    color: '#fefdfb',
  },
  'Forest Fox': {
    backgroundColor: '#dfe0da',
    color: '#fefdfb',
  },
  'Desert Eagle': {
    backgroundColor: '#fbf7ea',
    color: '#000',
  },
  'White Bear': {
    backgroundColor: '#f2f6f8',
    color: '#000',
  },
}

async function fetchProducts() {
  const client = Client.buildClient({
    domain: 'driebroek.myshopify.com',
    storefrontAccessToken: '33bca099c613d4ea7eeb9517683e3b37'
  })

  const products = await client.product.fetchAll()
  return products
}

function* products() {
  const fetchedProducts = yield call(fetchProducts)

  const products = fetchedProducts.map(product => ({
    id: product.variants[0].id,
    name: product.title,
    description: product.description,
    image: product.images[0].src,
    price: product.variants[0].price,
    available: product.variants[0].available,
    featured: false,
    ...productColors[product.title],
  }))

  yield put(Products.loadSuccess(products))
}

export default products
