import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './styles.css'

import { closeModal } from 'actions/modals'

const Menu = ({ open, onLinkClick }) => (
  <div className={`Menu${open ? ' open' : ''}`}>
    <h1>Menu</h1>
    <Link className="Menu-link" onClick={onLinkClick} to="/products">All Products</Link>
    <Link className="Menu-link" onClick={onLinkClick} to="/about">About</Link>
    <Link className="Menu-link" onClick={onLinkClick} to="/faq">FAQ</Link>
  </div>
)

const mapStateToProps = (state, props) => ({
  open: state.modals.currentModal === 'menu'
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onLinkClick: () => dispatch(closeModal()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu)
