import { createReducer } from './util'

// Action types
export const RESIZE = 'window/RESIZE'
export const SCROLL = 'window/SCROLL'

// Action creators
export const resize = (width, height) => ({
  type: RESIZE,
  width, height,
})

export const scroll = (scrollLeft, scrollTop) => ({
  type: SCROLL,
  scrollLeft, scrollTop
})

// Reducers
export const reducer = createReducer({
  width: window.innerWidth,
  height: window.innerHeight,
  scrollTop: window.scrollTop,
  scrollLeft: window.scrollLeft
}, {
  [RESIZE]: (state, { width, height }) => ({
      ...state,
      width, height
    }),
  [SCROLL]: (state, { scrollLeft, scrollTop }) => ({
      ...state,
      scrollLeft, scrollTop
    })
})

export default reducer
