import React from 'react'
import './styles.css'

import mountain from 'media/mountain.jpg'

import Img from 'components/Img'
import Columns from 'components/Columns'

const About = () => (
  <div className="About wrapper">
    <Columns>
      <Img className="About-image" src={mountain} alt="3broek" />
      <div className="About-introduction">
        <h1>About 3broek</h1>
        <h2>Enjoy unrestricted movement and endless comfort.</h2>
        <p>At 3broek, we aim to create the best fitting pants ever. They come in the form of low-cut harem pants. Often they are called Aladdin pants or Buddha pants or Fishermans pants, but we prefer to call them, 3broek.</p>
      </div>
    </Columns>
  </div>
)

export default About
