import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { toggleMenu } from 'actions/modals'

import BagToggle from 'components/BagToggle'

import logo from 'media/driebroek_logo.svg'
import './styles.css'

const Nav = ({down, amount, onMenuClick, onBagClick}) => (
  <div className={`Nav${down ? ' down' : ''}`}>
    <div onClick={onMenuClick} className="Nav-menu">Menu</div>

    <Link to="/" className="Nav-logo">
      <img src={logo} alt="Driebroek" />
    </Link>

    <BagToggle />
  </div>
)

const mapStateToProps = (state, props) => ({
  down: state.window.scrollTop > 0,
})

const mapDispatchToProps = (dispatch, props) => ({
  onMenuClick: () => dispatch(toggleMenu())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav)
