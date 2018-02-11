import React from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import './styles.css'

import { toggleModal } from 'ducks/modals'

import Columns from 'components/Columns'
import Spotlight from 'components/Spotlight'
import MCForm from 'components/MCForm'

const Faq = ({ onNewsletterClick }) => (
  <div className="Faq wrapper">
    <Helmet>
      <title>Frequently Asked Questions - 3broek</title>
      <meta property="og:title" content="Frequently Asked Questions - 3broek" />
    </Helmet>
    <div className="center">
      <h1>Frequently asked questions</h1>
      <h2 className="Faq-tagline">We're glad you asked</h2>
    </div>
    <Columns>
      <div className="Faq-question">
        <h2>How long until 3broek is ready for sale?</h2>
        <p>3broek launches the first of November. Want to be the first to know? Like our <a href="https://www.facebook.com/3broek-117920655543856/" target="_blank" rel="noopener noreferrer">facebook page</a> or subscribe to our newsletter:</p>
        <MCForm />
      </div>
      <div className="Faq-question">
        <h2>Can I wash my 3broek?</h2>
        <p>Oh yes, you can. We recommend using a regular washing machine at 40&deg;C. The first time you wash, the color might fade a little bit.</p>
      </div>
      <div className="Faq-question">
        <h2>How long is the delivery time?</h2>
        <p>If you live in the Netherlands, we expect you to receive your orders within a week, depending upon the volume of orders received.</p>
      </div>
      <div className="Faq-question">
        <h2>What payment methods are available?</h2>
        <p>At the moment we accept payment via iDEAL, Credit card and Paypal.</p>
      </div>
      <div className="Faq-question">
        <h2>Does "one-size fits all" fit me?</h2>
        <p>Probably, yes. The upper board stretches from 76 to 100cm.</p>
      </div>
      <div className="Faq-question">
        <h2>Can I buy more than 10 pants at one time?</h2>
        <p>We are more than happy if you order more than 10 pants at one time! Email us at <a href='mailto:info@driebroek.nl'>info@driebroek.nl</a> and we will arange a custom .</p>
      </div>

      <Spotlight
        title="Is your question not listed?"
        content={<span>Ask us directly at <a href='mailto:info@driebroek.nl'>info@driebroek.nl</a>, we respond as soon as possible.</span>}/>
    </Columns>
  </div>
)

const mapDispatchToProps = (dispatch, ownProps) => ({
  onNewsletterClick: () => dispatch(toggleModal('checkout'))
})

export default connect(
  () => ({}),
  mapDispatchToProps
)(Faq)
