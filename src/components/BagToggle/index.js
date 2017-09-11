import React from 'react'
import { connect } from 'react-redux'
import './styles.css'

import logo from 'media/driebroek_logo.svg'
import bag from 'media/bag.svg'

import { toggleBag } from 'actions/modals'
import { countBagProducts } from 'selectors/bag'

const BagToggle = ({ amount, onClick }) => (
  <div onClick={onClick} className="BagToggle">
    <img className="BagToggle-img" src={bag} alt="bag" />
    <span className="BagToggle-amount">
      {amount
        ? amount
        : <img src={logo} alt="Driebroek" /> }
    </span>
  </div>
)

const mapStateToProps = (state, ownProps) => ({
  amount: countBagProducts(state, ownProps)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(toggleBag())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BagToggle)