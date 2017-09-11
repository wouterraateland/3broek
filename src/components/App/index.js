import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './styles.css'

import ModalBackground from 'components/ModalBackground'

import Nav from 'templates/Nav'
import Footer from 'templates/Footer'
import Menu from 'templates/Menu'
import Bag from 'templates/Bag'

import Home from 'pages/Home'
import Product from 'pages/Product'
import Privacy from 'pages/Privacy'

const App = () => (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <ModalBackground />
        <Menu />
        <Bag />
        <Route path="/" exact component={Home} />
        <Route path="/product/:product" component={Product} />
        <Route path="/privacy" component={Privacy} />
        <Footer />
      </div>
    </BrowserRouter>
)

export default App
