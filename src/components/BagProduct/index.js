import React from 'react'
import { connect } from 'react-redux'
import './styles.css'

import { getProductById, getBagProductPriceById } from 'selectors/products'
import { removeFromBag, increaseAmount, decreaseAmount } from 'actions/products'

import Img from 'components/Img'
import Button from 'components/Button'

const BagProduct = ({ product, amount, price, onRemoveClick, onIncreaseClick, onDecreaseClick }) => (
  <div className="BagProduct row">
    <div
      className="BagProduct-thumbnail alignleft"
      style={{ backgroundColor: product.backgroundColor }}>
      <Img src={product.image} alt={product.name} />
      <div className="BagProduct-remove" onClick={onRemoveClick}>x</div>
    </div>
    <div className="BagProduct-name">{product.name}</div>
    <div className="BagProduct-amount">
      {amount}x&nbsp;&nbsp;
      <Button text="+" onClick={onIncreaseClick} />
      <Button text="-" onClick={onDecreaseClick} />
    </div>
    <div className="BagProduct-price alignright">€{price}</div>
  </div>
)

const mapStateToProps = (state, props) => ({
  product: getProductById(state, props),
  price: getBagProductPriceById(state, props)
})

const mapDispatchToProps = (dispatch, props) => ({
  onRemoveClick: () => dispatch(removeFromBag(props.productId)),
  onIncreaseClick: () => dispatch(increaseAmount(props.productId)),
  onDecreaseClick: () => dispatch(decreaseAmount(props.productId)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BagProduct)
