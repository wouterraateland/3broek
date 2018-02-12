import { createReducer, createAsyncActionType } from './util'

// Action types
export const ADD    = 'bag/ADD'
export const EDIT   = 'bag/EDIT'
export const REMOVE = 'bag/REMOVE'
export const CLEAR  = 'bag/CLEAR'
export const CHECKOUT = createAsyncActionType('bag/CHECKOUT')

// Action creators
const createBagActionCreator = (type, a) => (productId, amount=a) => ({
  type, productId, amount,
})

export const addToBag = createBagActionCreator(ADD, 1)
export const removeFromBag = createBagActionCreator(REMOVE)
export const increaseAmount = createBagActionCreator(EDIT, 1)
export const decreaseAmount = createBagActionCreator(EDIT, -1)
export const checkout = () => ({
  type: CHECKOUT.REQUEST
})

// Reducers
const reducer = createReducer({}, {
  [ADD]: (state, { productId, amount }) => ({
    ...state,
    [productId]: Math.max(0, Math.min((state[productId] || 0) + amount, 10))
  }),
  [EDIT]: (state, { productId, amount }) => ({
    ...state,
    [productId]: Math.max(0, Math.min((state[productId] || 0) + amount, 10))
  }),
  [REMOVE]: (state, { productId }) => ({
    ...state,
    [productId]: 0
  }),
  [CLEAR]: () => ({})
})

export default reducer
