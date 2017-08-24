import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { toggleBag, toggleMenu } from 'actions/modals'

import bag from 'media/bag.svg'
import logo from 'media/driebroek_logo.svg'
import './styles.css'

const Nav = ({down, amount, onMenuClick, onBagClick}) => (
  <div className={`Nav${down ? ' down' : ''}`}>
    <div onClick={onMenuClick} className="Nav-menu">Menu</div>

    <Link to="/" className="Nav-logo">
      <img src={logo} alt="Driebroek" />
    </Link>

    <div onClick={onBagClick} className="Nav-bag">
      <img className="Nav-bag-img" src={bag} alt="bag" />
      <span className="Nav-bag-amount">
        {amount
          ? amount
          : <img src={logo} alt="Driebroek" /> }
      </span>
    </div>
  </div>
)

const mapStateToProps = (state, props) => ({
  down: state.window.scrollTop > 0,
  amount: 0
})

const mapDispatchToProps = (dispatch, props) => ({
  onMenuClick: () => dispatch(toggleMenu()),
  onBagClick: () => dispatch(toggleBag())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav)
