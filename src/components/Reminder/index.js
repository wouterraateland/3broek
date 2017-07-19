import React from 'react'

import './styles.css'

const Reminder = () => (
  <div className="Reminder">
    <div className=" wrapper row">
      <form className="center">
        <input type="email" name="email" placeholder="email adres" />
        <button type="submit">Houd me op de hoogte</button>
      </form>
    </div>
  </div>
)

export default Reminder
