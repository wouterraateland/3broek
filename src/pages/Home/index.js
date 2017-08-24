import React from 'react'
import './styles.css'

import Store from 'components/Store'
import Product from 'components/Product'

const Home = () => (
  <div className="Home">
    <div className="Home-introduction">
      <h1>Welcome, explorer!</h1>
      <blockquote>You just found your one and only best fitting pants ever.</blockquote>
    </div>
    <Store>
      <Product productId={0} />
      <Product productId={1} />
      <Product productId={2} />
      <Product productId={3} />
    </Store>
  </div>
)

export default Home
