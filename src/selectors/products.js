import { createSelector } from 'reselect'

export const getById = state => state.products.byId
export const getAllIds = state => state.products.allIds
const getProductId = (_, props) => props.productId
const bagAmountSelector = (_, props) => props.amount
const productNameURLSelector = state => {
  const pathname = state.router.location.pathname
  const regex = /\/product\/(.*)/g
  const res = regex.exec(pathname)
  return res ? res[1] : null
}

export const getProducts = createSelector(
  [getById, getAllIds],
  (products, ids) => ids.map(id => products[id])
)

export const getProductById = createSelector(
  [getById, getProductId],
  (products, productId) => products[productId]
)

export const getBagProductPriceById = createSelector(
  getProductById,
  bagAmountSelector,
  ({ price }, amount) => price * amount
)

export const getProductAvailabiliy = createSelector(
  getProductById,
  product => product.available
)

export const getProductByURL = createSelector(
  productNameURLSelector,
  getProducts,
  (name, products) => name && products.find(
    product => product.name.replace(/ /g, '').toLowerCase() === name.toLowerCase()
  )
)

export const getCurrentColor = createSelector(
  getProductByURL,
  (product) => {
    return product ? product.color : '#000'
  }
)
