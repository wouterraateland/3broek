import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './styles.css'

import Nav from 'components/Nav'
import Footer from 'components/Footer'

import ModalBackground from 'components/ModalBackground'
import Menu from 'components/Menu'
import Bag from 'components/Bag'

import Home from 'pages/Home'
import Product from 'pages/Product'

const App = () => (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <ModalBackground />
        <Menu />
        <Bag />
        <Route path="/" component={Home} />
        <Route path="/product/:product" component={Product} />
        <Footer />
      </div>
    </BrowserRouter>
)

export default App
