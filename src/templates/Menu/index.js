import React from 'react'
import { connect } from 'react-redux'

import './styles.css'

const Menu = ({ open }) => (
  <div className={`Menu${open ? ' open' : ''}`}>
    <h1>Yeaaaaaaah</h1>
  </div>
)

const mapStateToProps = (state, props) => ({
  open: state.modals.currentModal === 'menu'
})

export default connect(
  mapStateToProps
)(Menu)
