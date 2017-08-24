import React from 'react'

import './styles.css'

const Store = ({children}) => (
  <div className="Store">
    <div className="wrapper row">
      {children.map((child, i) => (
        <div className="col-6 col-l-3" key={i}>
          {child}
        </div>
      ))}
    </div>
  </div>
)

export default Store
