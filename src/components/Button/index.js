import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const Button = ({text, onClick, to, className, ...props}) => (
  to
    ? <Link
      to={to}
      className={`${className ? className : ''} Button`}
      {...props} >
        {text}
      </Link>
    : <button
        onClick={(event) => { event.preventDefault(); if (onClick) { onClick(event) } }}
        className={`${className ? className : ''} Button`}
        {...props}>
        {text}
      </button>
)

export default Button
