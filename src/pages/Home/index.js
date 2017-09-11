import React from 'react'
import Columns from 'react-columns'
import './styles.css'

import kick from 'media/kick.jpg'
import mountain from 'media/mountain.jpg'
import dive from 'media/dive.gif'

import Product from 'components/Product'
import Spotlight from 'components/Spotlight'

const Home = () => (
  <div className="Home wrapper">
    <Columns
      className="Home-columns"
      queries={[
        {
          columns: 1,
          query: "max-width: 480px"
        },
        {
          columns: 2,
          query: "min-width: 481px"
        }
      ]}
      gap="2em">
      <Spotlight
        image={kick}
        title="Hi there, you!"
        content="You just found your one and only best fitting pants ever."
        action={{
          text: "About us",
          to: "/about"
        }}/>
      <Product productId={0} />
      <Product productId={1} />
      <Spotlight
        image={mountain}
        title="We love being in beautiful nature"
        content="And we know that you'll love being nature wearing our pants even more." />
      <Spotlight
        title="Check out all our products"
        content="We've got your favourite for sure."
        action={{
          text: "All Products",
          to: "/products"
        }} />
      <Product productId={2} />
      <Product productId={3} />
      <Spotlight
        image={dive}
        title="Enjoy your freedom"
        content="Our pants are created for unrestricted movement and endless comfort. You'll enjoy them, we promise."/>
    </Columns>
  </div>
)

export default Home
