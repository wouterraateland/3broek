import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'

import window from 'ducks/window'
import products from 'ducks/products'
import modals from 'ducks/modals'
import bag from 'ducks/bag'

export const reducer = combineReducers({
  window,
  products,
  modals,
  bag,
  router,
})

export default reducer
