import React from 'react'
import { Route, Switch } from 'react-router'
import { Helmet } from 'react-helmet'
import './styles.css'

import ModalBackground from 'components/ModalBackground'

import Nav from 'templates/Nav'
import Footer from 'templates/Footer'
import Bag from 'templates/Bag'
import TempCheckout from 'templates/TempCheckout'

import AboutPage from 'pages/About'
import FaqPage from 'pages/Faq'
import HomePage from 'pages/Home'
import ProductPage from 'pages/Product'
import ProductsPage from 'pages/Products'
import PrivacyPage from 'pages/Privacy'
import NotFoundPage from 'pages/404'

const App = () => (
  <div className="App">
    <Helmet>
      <title>Home - 3broek</title>
      <meta name="description" content="Move and chill in the most comfortable pants you ever owned." />
    </Helmet>
    <Nav />
    <ModalBackground />
    <Bag />
    <TempCheckout />
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/faq" component={FaqPage} />
      <Route path="/privacy" component={PrivacyPage} />
      <Route path="/products" component={ProductsPage} />

      <Route path="/product/:product" component={ProductPage} />
      <Route component={NotFoundPage} />
    </Switch>
    <Footer />
  </div>
)

export default App
