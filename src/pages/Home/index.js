import React from 'react'
import { connect } from 'react-redux'
import './styles.css'

import kick from 'media/kick.jpg'
import mountain from 'media/mountain.jpg'
import dive from 'media/dive.gif'

import Product from 'components/Product'
import Spotlight from 'components/Spotlight'

const layout = ({children, cols}) => (
  <div className="Home-layout row">
    {Array(2).fill(cols).map((_, i) => (
      <div className="col-6 col-s-12" key={i}>
        {children.filter((_, j) => j % cols === i)}
      </div>
    ))}
  </div>
)

const mapStateToProps = (state, ownProps) => ({
  cols: state.window.width > 480 ? 2 : 1
})

const Layout = connect(
  mapStateToProps
)(layout)

const Home = () => (
  <div className="Home wrapper">
    <Layout>
      <Spotlight
        image={kick}
        title="Hi there, you!"
        content="Welcome to a new level of comfort and unrestricted. You just found your one and only best fitting pants ever."
        action={{
          text: "About us",
          to: "/about"
        }}/>
      <Product productId={0} />
      <Product productId={1} />
      <Spotlight
        image={mountain}
        title="We love being in beautiful nature"
        content="And we know that you'll love being in nature wearing our pants even more." />
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
    </Layout>
  </div>
)

export default Home
