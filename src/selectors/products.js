import { createSelector } from 'reselect'

const productsSelector = state => state.products.byId
const productIdSelector = (_, props) => props.productId
const bagAmountSelector = (_, props) => props.amount

export const getProductById = createSelector(
  productsSelector,
  productIdSelector,
  (products, productId) => products[productId]
)

export const getBagProductPriceById = createSelector(
  getProductById,
  bagAmountSelector,
  ({ price }, amount) => price * amount
)
