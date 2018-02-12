import React from 'react'
import { connect } from 'react-redux'
import './styles.css'

import { addToBag } from 'ducks/bag'
import { getProductAvailabiliy } from 'selectors/products'

import Select from 'components/Select'
import Button from 'components/Button'

const ProductSelection = ({ onAmountChange, onAddClick, available }) => (
  <div className="ProductSelection">
    {available
      ? null
      : <p>Out of stock</p> }
    <Select
      options={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
      names={['1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x']}
      onChange={onAmountChange}
      disabled={!available}
    />
    <Button
      text="Add me to your bag"
      onClick={onAddClick}
      disabled={!available}
    />
  </div>
)

let selectedAmount = 1

const mapStateToProps = (state, ownProps) => ({
  available: getProductAvailabiliy(state, ownProps)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onAmountChange: (amount) => selectedAmount = amount,
  onAddClick: () => dispatch(addToBag(ownProps.productId, selectedAmount))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductSelection)
