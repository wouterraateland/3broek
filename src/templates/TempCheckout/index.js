import React from 'react'
import { connect } from 'react-redux'
import './styles.css'

import MCForm from 'components/MCForm'

const TempCheckout = ({ open, onLinkClick }) => (
  <div className={`TempCheckout${open ? ' open' : ''}`}>
    <h1>Thank you for your interest.</h1>
    <p>Unfortunately, your selected items are not available at the moment. Fill in your email below and we'll notify you as soon as your selected items are available.</p>
    <MCForm />
  </div>
)

const mapStateToProps = (state, props) => ({
  open: state.modals.currentModal === 'checkout'
})

export default connect(
  mapStateToProps,
)(TempCheckout)
