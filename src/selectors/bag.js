import { createSelector } from 'reselect'

import { getById } from 'selectors/products'

const bagProductsSelector = state => state.bag
const productsSelector = state => state.products.byId
const productIdsSelector = state => state.products.allIds

export const getBagTotal = createSelector(
  bagProductsSelector,
  productsSelector,
  (productAmounts, products) => Object.keys(productAmounts)
    .reduce((acc, productId) =>
      acc + productAmounts[productId] * products[productId].price, 0)
)

export const isBagEmpty = createSelector(
  bagProductsSelector,
  productAmounts => Object.keys(productAmounts)
    .reduce((acc, productId) => acc + productAmounts[productId], 0) === 0
)

export const getBagProducts = createSelector(
  [getById, bagProductsSelector],
  (products, productAmounts) => Object.keys(productAmounts)
    .map(productId => ({
      productId,
      product: products[productId],
      amount: productAmounts[productId]
    }))
    .filter(product => product.amount > 0)
)

export const countBagProducts = createSelector(
  productIdsSelector,
  bagProductsSelector,
  (productIds, productAmounts) => productIds
    .reduce((acc, id) =>
      acc + (productAmounts[id] || 0), 0)
)
