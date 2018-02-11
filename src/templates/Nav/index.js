import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { toggleMenu } from 'ducks/modals'

import Img from 'components/Img'
import BagToggle from 'components/BagToggle'

import logo from 'media/3broek_logo.svg'
import './styles.css'

const Nav = ({down, amount, onMenuClick, onBagClick}) => (
  <div className={`Nav${down ? ' down' : ''}`}>
    <Link className="Nav-menu" to="/faq">Questions?</Link>

    <Link to="/" className="Nav-logo">
      <Img src={logo} alt="3broek" />
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
