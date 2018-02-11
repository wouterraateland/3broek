import { createReducer } from './util'

import black from 'media/pants/black.png'
import khaki from 'media/pants/khaki.png'
import beige from 'media/pants/beige.png'
import white from 'media/pants/white.png'

// Action types

// Action creators

// Reducers
const initialState = {
  byId: {
    0: {
      id: 0,
      name: 'White Bear',
      description: 'Shine bright like a snowflake in this white 3broek.',
      image: white,
      backgroundColor: '#f2f6f8',
      color: '#000',
      price: 34
    },
    1: {
      id: 1,
      name: 'Forest Fox',
      description: 'Blend in with the forest in this khaki 3broek.',
      image: khaki,
      backgroundColor: '#dfe0da',
      color: '#fff',
      price: 34,
    },
    2: {
      id: 2,
      name: 'Desert Eagle',
      description: 'Move fast like sand in this beige 3broek.',
      image: beige,
      backgroundColor: '#fbf7ea',
      color: '#000',
      price: 34,
    },
    3: {
      id: 3,
      name: 'Black Panther',
      description: 'Feel smooth and agile like a panther in this black 3broek.',
      image: black,
      backgroundColor: '#6b5861',
      color: '#fff',
      price: 34,
    },
  },
  allIds: [ 0, 1, 2, 3 ]
}

export const reducer = createReducer(initialState, {})

export default reducer
