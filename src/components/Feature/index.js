import React from 'react'

import './styles.css'

const Feature = ({ left, top, open, title, description }) => (
  <div className={`Feature ${open ? ` open` : ``}`} style={{ left, top }}>
    <div className="Feature-thumb">+</div>
    <div className="Feature-content">
      <h2 className="Feature-title">{title}</h2>
      <p className="Feature-description">{description}</p>
    </div>
  </div>
)

export default Feature
