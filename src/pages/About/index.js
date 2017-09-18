import React from 'react'
import Columns from 'react-columns'
import './styles.css'

import mountain from 'media/mountain.jpg'

const About = () => (
  <div className="About wrapper">
    <div className="Columns row">
      <div className="col-6 col-s-12">
      <img className="About-image" src={mountain} alt="Driebroek" />
      </div>
      <div className="col-6 col-s-12">
        <div className="About-introduction">
          <h1>About 3broek</h1>
          <h2>Enjoy unrestricted movement and endless comfort.</h2>
          <p>At 3broek, we aim to create the best fitting pants ever. They come in the form of low-cut harem pants. Often they are called Aladdin pants or Buddha pants or Fishermans pants, but we prefer to call them, 3broek.</p>
        </div>
      </div>
    </div>
  </div>
)

export default About
