const initialState = {}

const bagReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_BAG':
    case 'INCREASE_PRODUCT_AMOUNT':
      return {
        ...state,
        [action.productId]: Math.min((state[action.productId] || 0) + (action.amount || 1), 10)
      }
    case 'DECREASE_PRODUCT_AMOUNT':
      return {
        ...state,
        [action.productId]: Math.max(1, (state[action.productId] || 0) - 1)
      }
    case 'REMOVE_FROM_BAG':
      return {
        ...state,
        [action.productId]: 0
      }
    default:
      return state
  }
}

export default bagReducer
