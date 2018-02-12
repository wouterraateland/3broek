import { combineReducers } from 'redux'
import { createReducer, createAsyncActionType } from './util'

// Action types
export const LOAD = createAsyncActionType('products/LOAD')

// Action creators
export const loadSuccess = (products) => ({
  type: LOAD.SUCCESS,
  products,
})

export const byId = createReducer({}, {
  [LOAD.SUCCESS]: (state, { products }) =>
    products.reduce((acc, product) => ({
      ...acc,
      [product.id]: product
    }), {}),
})

export const allIds = createReducer([], {
  [LOAD.SUCCESS]: (state, { products }) =>
    products.map(product => product.id),
})

export const reducer = combineReducers({
  byId, allIds
})

export default reducer
