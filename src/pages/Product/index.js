import React from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import './styles.css'

import { getProductByURL } from 'selectors/products'

import Img from 'components/Img'
import Features from 'components/Features'
import ProductSelection from 'components/ProductSelection'

const Product = ({ product: { id, backgroundColor, color, image, name, description, price } }) => (
  <div className="ProductPage">
    <Helmet>
      <title>{name} - 3broek</title>
      <meta property="og:title" content={`${name} - 3broek`} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="product" />
      <meta property="og:image" content={image} />
      <meta property="product:price" content={price} />
      <meta property="product:condition" content="new" />
      <meta property="product:brand" content="3broek" />
    </Helmet>
    <div className="ProductPage-header" style={{ backgroundColor }}>
      <div className="ProductPage-header-content">
        <Img src={image} alt={name} />
        <Features />
      </div>
    </div>
    <div className="ProductPage-body">
      <h2 className="ProductPage-name">{name}</h2>
      <div className="ProductPage-price">€{price}</div>
      <ProductSelection productId={id} />
      <div className="ProductPage-info">
        <p>One-size fits all</p>
        <p><em>Free shipping in the Netherlands</em></p>
      </div>
    </div>
  </div>
)

const mapStateToProps = (state, ownProps) => ({
  product: getProductByURL(state, ownProps),
})

export default connect(
  mapStateToProps
)(Product)
