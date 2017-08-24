import React from 'react'
import { connect } from 'react-redux'

import { getBagProducts } from 'selectors/bag'

import BagProduct from 'components/BagProduct'

const FilledBag = ({ products }) => (
  <div className={`Bag-filled`}>
    {products.map(product =>
      <BagProduct {...product} key={product.productId} />)}
  </div>
)

const mapStateToProps = (state, props) => ({
  products: getBagProducts(state)
})

export default connect(
  mapStateToProps
)(FilledBag)
