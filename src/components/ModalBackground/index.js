import React from 'react'
import { connect } from 'react-redux'

import './styles.css'

import { closeModal } from 'actions/modals'

const ModalBackground = ({ open, onClick }) => (
  <div onClick={onClick} className={`ModalBackground${open ? ' open' : ''}`}></div>
)

const mapStateToProps = (state, props) => ({
  open: state.modals.currentModal !== null
})

const mapDispatchToProps = (dispatch, props) => ({
  onClick: () => dispatch(closeModal())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalBackground)
