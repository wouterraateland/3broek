import React from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'
import Button from 'components/Button'

import { addToBag } from 'actions/products'

import { getProductById } from 'selectors/products'

import './styles.css'

const Product = ({ product: { backgroundColor, color, name, image, price }, onButtonClick }) => (
  <Link
    to={`/product/${name.replace(/ /g, '').toLowerCase()}`}
    className="Product"
    style={{ backgroundColor, color }}>
    <span className="Product-title">{name}</span>
    <span className="Product-price">&euro;{price}</span>
    <Button
      className="Product-button hidden-s"
      text="Add to my bag"
      onClick={onButtonClick} />
    <img className="Product-image" src={image} alt={name} />
  </Link>
)

const mapStateToProps = (state, props) => ({
  product: getProductById(state, props)
})

const mapDispatchToProps = (dispatch, props) => ({
  onButtonClick: () => dispatch(addToBag(props.productId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product)
