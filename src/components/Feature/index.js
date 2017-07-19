import React from 'react'

import './styles.css'

const Feature = ({ left, top, side="right", title, description }) => (
  <div className={`Feature ${side}`} style={{ left, top }}>
    <div className="Feature-line"></div>
    <div className="Feature-content">
      <h2 className="Feature-title">{title}</h2>
      <p className="Feature-description">{description}</p>
    </div>
  </div>
)

export default Feature
