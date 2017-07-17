import React from 'react'

import './styles.css'

const Sales = () => (
  <div className="Sales wrapper row">
    <div className="Sales-content">
      <p className="Sales-soon">Binnenkort beschikbaar</p>
      <h1>De meest comfortabele broek ooit</h1>
      <p className="Sales-copy">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <form>
        <input type="email" name="email" placeholder="email adres" />
        <button type="submit">Houd me op de hoogte</button>
      </form>
    </div>
  </div>
)

export default Sales
