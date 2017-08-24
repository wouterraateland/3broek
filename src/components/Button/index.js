import React from 'react'

import './styles.css'

const Button = ({text, onClick, className, ...props}) => (
  <button
    onClick={(event) => { event.preventDefault(); if (onClick) { onClick() } }}
    className={`${className ? className : ''} Button`}
    {...props}>
    {text}
  </button>
)

export default Button
