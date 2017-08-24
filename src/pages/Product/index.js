import React from 'react'
import { connect } from 'react-redux'

const Product = ({product}) => (
  <p>product</p>
)

const mapStateToProps = (state, props) => ({
  product: props.product
})

export default connect(
  mapStateToProps
)(Product)
