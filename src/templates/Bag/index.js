import React from 'react'
import { connect } from 'react-redux'

import BagToggle from 'components/BagToggle'
import Button from 'components/Button'
import EmptyBag from './EmptyBag'
import FilledBag from './FilledBag'

import { isBagEmpty, getBagTotal } from 'selectors/bag'
import { toggleModal } from 'actions/modals'

import './styles.css'

const Bag = ({ open, empty, total, onCheckoutClick }) => (
  <div className={`Bag${open ? ' open' : ''}`}>
    <div className="Bag-header">
      <BagToggle />
    </div>
    <div className="Bag-body">
      {empty
        ? <EmptyBag />
        : <FilledBag />}
    </div>
    <div className="Bag-footer">
      <p className="row">
        <span className="alignleft">Shipping</span>
        <strong className="alignright">Free</strong>
      </p>
      <p className="row">
        <span className="alignleft">Total cost</span>
        <strong className="alignright">&euro;{total}</strong>
      </p>
      <Button onClick={onCheckoutClick} className="row" text="Checkout" disabled={empty} />
    </div>
  </div>
)

const mapStateToProps = (state, props) => ({
  open: state.modals.currentModal === 'bag',
  empty: isBagEmpty(state),
  total: getBagTotal(state),
})

const mapDispatchToProps = (dispatch, props) => ({
  onCheckoutClick: () => dispatch(toggleModal('checkout'))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bag)
