import black from 'media/pants/black.png'
import khaki from 'media/pants/khaki.png'
import beige from 'media/pants/beige.png'
import white from 'media/pants/white.png'

const initialState = {
  byId: {
    0: {
      id: 0,
      name: 'White Bear',
      image: white,
      backgroundColor: '#f2f6f8',
      color: '#000',
      price: 29,
      featured: true
    },
    1: {
      id: 1,
      name: 'Forest Fox',
      image: khaki,
      backgroundColor: '#dfe0da',
      color: '#fff',
      price: 29,
    },
    2: {
      id: 2,
      name: 'Desert Eagle',
      image: beige,
      backgroundColor: '#fbf7ea',
      color: '#000',
      price: 29,
    },
    3: {
      id: 3,
      name: 'Black Swan',
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
