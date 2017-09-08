import React from 'react'
import { connect } from 'react-redux'
import './styles.css'

import { getProductByURL } from 'selectors/products'

import Features from 'components/Features'
import ProductSelection from 'components/ProductSelection'

const Product = ({ product: { id, backgroundColor, color, image, name, price } }) => (
  <div className="ProductPage">
    <div className="ProductPage-header" style={{ backgroundColor }}>
      <div className="ProductPage-header-content">
        <img src={image} alt={name} />
        <Features />
      </div>
    </div>
    <div className="ProductPage-body">
      <h2 className="ProductPage-name">{name}</h2>
      <div className="ProductPage-price">€{price}</div>
      <ProductSelection productId={id} />
      <div className="ProductPage-info">
        <p>One-size fits all</p>
        <p><em>Free shipping in the Netherlands</em></p>
      </div>
    </div>
  </div>
)

const mapStateToProps = (state, ownProps) => ({
  product: getProductByURL(state, ownProps),
})

export default connect(
  mapStateToProps
)(Product)
