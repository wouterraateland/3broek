import React from 'react'
import './styles.css'

import Img from 'components/Img'
import Button from 'components/Button'

const Spotlight = ({className, image, title, content, action, ...props}) => (
  <div
    className={`Spotlight${className ? ` ${className}` : ``}`}
    {...props}>
    {image
      ? <div className="Spotlight-header">
          <Img src={image} alt={title} />
        </div>
      : `` }
    <div className="Spotlight-body row">
      {title
        ? <h2 className="Spotlight-title">{title}</h2>
        : `` }
      {content
        ? <p className="Spotlight-content">{content}</p>
        : `` }
      {action
        ? <Button {...action} />
        : `` }
    </div>
  </div>
)

export default Spotlight
