import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'

import { Link } from 'react-router-dom'
import BagToggle from 'components/BagToggle'

import { getCurrentColor } from 'selectors/products'

import './styles.css'

const Nav = ({ down, color }) => (
  <div
    className={classNames(`Nav`, { down })}
    style={{color}}
  >
    <Link className="Nav-menu" to="/faq">Questions?</Link>

    <Link to="/" className="Nav-logo">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12.7 11.113">
      <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".265">
        <path d="M6.35.213l6.218 10.768H.132z"/>
        <path d="M7.197 8.793c.07.694-.305 1.347-.848 1.347-.543 0-.918-.654-.848-1.348.03-.296.14-.563.302-.748a.732.732 0 0 1 .546-.272c.197 0 .39.096.545.272.162.185.272.45.302.748m-4.321-1.02L1.763 10.14h.655c.655 0 1.15-1.474.594-1.474h-.556.37c.557 0 .877-.893.38-.893h-.33m.634 2.367l.69-2.367h.495c.497 0 .357.893-.2.893H3.94h.37l.292 1.474m3.733-2.367h-.827l.37 2.367H8.97M7.648 8.665h.834m.348-.893l.796 2.367m.032-2.367l-.342.893 1.62 1.474M5.38 3.262h1.764L5.91 4.498h.44c.53 0 1.058.53 1.058 1.06 0 .528-.53 1.057-1.058 1.057-.53 0-1.063-.46-1.058-1.058"/>
      </g>
    </svg>
    </Link>

    <BagToggle />
  </div>
)

const mapStateToProps = (state, ownProps) => ({
  color: getCurrentColor(state, ownProps),
  down: state.window.scrollTop > 0,
})

export default connect(
  mapStateToProps
)(Nav)
