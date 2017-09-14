import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './styles.css'

import ModalBackground from 'components/ModalBackground'

import Nav from 'templates/Nav'
import Footer from 'templates/Footer'
import Menu from 'templates/Menu'
import Bag from 'templates/Bag'
import TempCheckout from 'templates/TempCheckout'

import AboutPage from 'pages/About'
import FaqPage from 'pages/Faq'
import HomePage from 'pages/Home'
import ProductPage from 'pages/Product'
import ProductsPage from 'pages/Products'
import PrivacyPage from 'pages/Privacy'

const App = () => (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <ModalBackground />
        <Menu />
        <Bag />
        <TempCheckout />
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/faq" component={FaqPage} />
        <Route path="/privacy" component={PrivacyPage} />
        <Route path="/products" component={ProductsPage} />

        <Route path="/product/:product" component={ProductPage} />
        <Footer />
      </div>
    </BrowserRouter>
)

export default App
