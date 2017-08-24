export const addToBag = (productId) => ({
  type: 'ADD_TO_BAG',
  productId
})

export const removeFromBag = (productId) => ({
  type: 'REMOVE_FROM_BAG',
  productId
})

export const increaseAmount = (productId) => ({
  type: 'INCREASE_PRODUCT_AMOUNT',
  productId
})

export const decreaseAmount = (productId) => ({
  type: 'DECREASE_PRODUCT_AMOUNT',
  productId
})
