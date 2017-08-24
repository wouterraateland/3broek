import { combineReducers } from 'redux'

import windowReducer from 'reducers/window'
import productsReducer from 'reducers/products'
import modalsReducer from 'reducers/modals'
import bagReducer from 'reducers/bag'

const rootReducer = combineReducers({
  window: windowReducer,
  products: productsReducer,
  modals: modalsReducer,
  bag: bagReducer,
})

export default rootReducer
