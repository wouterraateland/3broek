import black from 'media/pants/black.png'
import khaki from 'media/pants/khaki.png'
import beige from 'media/pants/beige.png'
import white from 'media/pants/white.png'

const initialState = {
  byId: {
    0: {
      name: 'White bear',
      image: white,
      backgroundColor: '#f2f6f8',
      color: '#000',
      price: 29,
    },
    1: {
      name: 'Forest fox',
      image: khaki,
      backgroundColor: '#dfe0da',
      color: '#fff',
      price: 29,
    },
    2: {
      name: 'Desert eagle',
      image: beige,
      backgroundColor: '#fbf7ea',
      color: '#000',
      price: 29,
    },
    3: {
      name: 'Black swan',
      image: black,
      backgroundColor: '#6b5861',
      color: '#fff',
      price: 29,
    },
  },
  allIds: [ 0, 1, 2, 3 ]
}

const productReducer = (state=initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default productReducer
