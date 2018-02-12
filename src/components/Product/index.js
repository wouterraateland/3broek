import React from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'
import Img from 'components/Img'
import Button from 'components/Button'

import { addToBag } from 'ducks/bag'
import { getProductById } from 'selectors/products'

import './styles.css'

const VisibleProduct = ({ product: { backgroundColor, color, name, image, price, featured }, onButtonClick }) => (
  <Link
    to={`/product/${name.replace(/ /g, '').toLowerCase()}`}
    className={`Product${featured ? ` featured` : ``}`}
    style={{ backgroundColor, color }}>
    <span className="Product-title">{name}</span>
    <span className="Product-price">&euro;{price}</span>
    <Button
      className="Product-button hidden-s"
      text="Add to my bag"
      onClick={onButtonClick} />
    <Img className="Product-image" src={image} alt={name} />
  </Link>
)

const Product = ({ product, onButtonClick}) => product
  ? <VisibleProduct
      product={product}
      onButtonClick={onButtonClick}
    />
  : null

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
