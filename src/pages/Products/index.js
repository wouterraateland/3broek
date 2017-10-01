import React from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import './styles.css'

import Product from 'components/Product'

import { getProductIds } from 'selectors/products'

const Products = ({ productIds }) => (
  <div className="Products wrapper">
    <Helmet>
      <title>Products - 3broek</title>
      <meta property="og:title" content="Products - 3broek" />
    </Helmet>
    <div className="row">
      {productIds.map(productId =>
        <div className="Products-col col-6" key={productId}>
          <Product productId={productId} />
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
