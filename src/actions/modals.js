export const toggleBag = () => ({
  type: 'TOGGLE_MODAL',
  modal: 'bag'
})

export const toggleMenu = () => ({
  type: 'TOGGLE_MODAL',
  modal: 'menu'
})

export const closeModal = () => ({
  type: 'TOGGLE_MODAL',
  modal: null
})
