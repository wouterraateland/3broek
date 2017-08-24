import { createSelector } from 'reselect'

const bagProductsSelector = state => state.bag
const productsSelector = state => state.products.byId

export const getBagTotal = createSelector(
  bagProductsSelector,
  productsSelector,
  (productAmounts, products) => Object.keys(productAmounts)
    .reduce((acc, productId) => acc + productAmounts[productId] * products[productId].price, 0)
)

export const isBagEmpty = createSelector(
  bagProductsSelector,
  productAmounts => Object.keys(productAmounts)
    .reduce((acc, productId) => acc + productAmounts[productId], 0) === 0
)

export const getBagProducts = createSelector(
  bagProductsSelector,
  productAmounts => Object.keys(productAmounts)
    .map(productId => ({
      productId,
      amount: productAmounts[productId]
    }))
    .filter(product => product.amount > 0)
)
