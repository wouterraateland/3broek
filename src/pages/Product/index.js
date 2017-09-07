import React from 'react'
import { connect } from 'react-redux'
import './styles.css'

import { getProductByURL } from 'selectors/products'

const Product = ({ product: { backgroundColor, color, image, name, price } }) => (
  <div className="ProductPage">
    <div className="ProductPage-header" style={{ backgroundColor }}>
      <img src={image} alt={name} />
    </div>
    <div className="ProductPage-body">
      <h2>{name}</h2>
    </div>
  </div>
)

const mapStateToProps = (state, props) => ({
  product: getProductByURL(state, props)
})

export default connect(
  mapStateToProps
)(Product)
