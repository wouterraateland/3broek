import React from 'react'
import { connect } from 'react-redux'
import './styles.css'

const Layout = ({children, cols}) => (
  <div className="Columns row">
    {Array(2).fill(cols).map((_, i) => (
      <div className="col-6 col-s-12" key={i}>
        {children.filter((_, j) => j % cols === i)}
      </div>
    ))}
  </div>
)

const mapStateToProps = (state, ownProps) => ({
  cols: state.window.width > 480 ? 2 : 1
})

export default connect(
  mapStateToProps
)(Layout)
