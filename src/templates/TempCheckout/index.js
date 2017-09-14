import React from 'react'
import { connect } from 'react-redux'
import './styles.css'

import { closeModal } from 'actions/modals'

const TempCheckout = ({ open, onLinkClick }) => (
  <div className={`TempCheckout${open ? ' open' : ''}`}>
    <h1>Thank you for your interest!</h1>
    <p>Unfortunately, driebroek is not yet available. Fill in your email below and we will notify you as soon as your selected items are available.</p>
    <input type="email" placeholder="you@example.com" />
    <p>Share driebroek with your friends and receive 10% off on your first order!</p>
  </div>
)

const mapStateToProps = (state, props) => ({
  open: state.modals.currentModal === 'checkout'
})

export default connect(
  mapStateToProps,
)(TempCheckout)
