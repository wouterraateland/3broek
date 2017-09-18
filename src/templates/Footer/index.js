import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

import logo from 'media/driebroek_logo.svg'

import Img from 'components/Img'

const Footer = () => (
  <div className="Footer wrapper">
    <div className="row">
      <div className="col-6 col-s-12 center-s">
        <Img className="Footer-logo" src={logo} alt="Driebroek logo" />
        <p>&copy;2017 Driebroek <Link to="/privacy">Privacy policy</Link></p>
      </div>
      <div className="col-3 col-s-6">
        <h3>Pages</h3>
        <Link className="Footer-link" to="/products">Products</Link>
        <Link className="Footer-link" to="/about">About</Link>
        <Link className="Footer-link" to="/faq">FAQ</Link>
      </div>
      <div className="col-3 col-s-6">
        <h3>Contact</h3>
        <a className="Footer-link" href="tel:+31(0)6 48 27 13 71">+31(0)6 48 27 13 71</a>
        <a className="Footer-link" href="mailto:info@driebroek.nl">info@driebroek.nl</a>
      </div>
    </div>
  </div>
)

export default Footer
