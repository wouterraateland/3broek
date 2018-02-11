import React from 'react'
import { connect } from 'react-redux'
import './styles.css'

import { addToBag } from 'ducks/bag'

import Select from 'components/Select'
import Button from 'components/Button'

const ProductSelection = ({ onAmountChange, onAddClick }) => (
  <div className="ProductSelection">
    <Select
      options={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
      names={['1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x']}
      onChange={onAmountChange}/>
    <Button
      text="Add me to your bag"
      onClick={onAddClick}/>
  </div>
)

let selectedAmount = 1

const mapStateToProps = (state, ownProps) => ({

})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onAmountChange: (amount) => selectedAmount = amount,
  onAddClick: () => dispatch(addToBag(ownProps.productId, selectedAmount))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductSelection)
