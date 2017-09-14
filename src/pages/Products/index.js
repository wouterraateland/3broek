import React from 'react'
import { connect } from 'react-redux'
import './styles.css'

import Product from 'components/Product'

import { getProductIds } from 'selectors/products'

const Products = ({ productIds }) => (
  <div className="Products wrapper">
    <div className="row">
      {productIds.map(productId =>
        <div className="Products-col col-6">
          <Product productId={productId} key={productId} />
        </div>)}
    </div>
  </div>
)

const mapStateToProps = (state, ownProps) => ({
  productIds: getProductIds(state),
})

export default connect(
  mapStateToProps,
)(Products)
