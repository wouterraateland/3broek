import React from 'react'
import './styles.css'

const Select = ({options=[], names=[], onChange, className, ...props}) => (
  <select
    onChange={(event) => {
      event.preventDefault()
      if (onChange) {
        onChange(parseInt(event.target.value))
      }
    }}
    className={`${className ? className : ''} Select`}
    {...props}>
    {options.map((option, i) => <option value={option} key={i}>{names[i] || option}</option>)}
  </select>
)

export default Select
