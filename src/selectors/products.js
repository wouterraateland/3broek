import { createSelector } from 'reselect'

const productsSelector = state => state.products.byId
const productIdSelector = (_, props) => props.productId
const bagAmountSelector = (_, props) => props.amount
const productNameURLSelector = (_, props) => props.match.params.product

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

export const getProductIdByURL = createSelector(
  productNameURLSelector,
  productsSelector,
  (name, products) => Object.keys(products)
    .find(
      productId => products[productId].name.replace(/ /g, '').toLowerCase()
        === name.toLowerCase()
    )
)

export const getProductByURL = createSelector(
  getProductIdByURL,
  productsSelector,
  (productId, products) => ({ productId, ...products[productId] })
)
