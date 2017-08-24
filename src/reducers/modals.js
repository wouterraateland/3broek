const initialState = {
  currentModal: null,
  allModals: [
    'menu',
    'bag',
  ]
}

const currentReducer = (state=initialState.currentModal, action) => {
  switch (action.type) {
    case 'TOGGLE_MODAL':
      return action.modal === state ? null : action.modal
    default:
      return state
  }
}

const modalsReducer = (state=initialState, action) => ({
  ...state,
  currentModal: currentReducer(state.currentModal, action),
})

export default modalsReducer
