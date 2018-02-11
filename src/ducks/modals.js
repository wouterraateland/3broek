import { combineReducers } from 'redux'
import { createReducer } from './util'

// Action types
export const TOGGLE = 'modals/TOGGLE'

// Action Creators
export const toggleModal = (modal) => ({
  type: TOGGLE,
  modal
})

export const toggleBag = () => toggleModal('bag')
export const toggleMenu = () => toggleModal('menu')
export const closeModal = () => toggleModal(null)

// Reducers
export const allModals = createReducer([
  'menu',
  'bag',
], {})

export const currentModal = createReducer(null, {
  [TOGGLE]: (state, { modal }) =>
    modal === state ? null : modal
})

export const reducer = combineReducers({
  allModals,
  currentModal,
})

export default reducer
