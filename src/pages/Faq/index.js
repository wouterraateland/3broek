import React from 'react'
import './styles.css'

import Columns from 'components/Columns'
import Spotlight from 'components/Spotlight'

const Faq = () => (
  <div className="Faq wrapper">
    <div className="center">
      <h1>Frequently asked questions</h1>
      <h2 className="Faq-tagline">We're glad you asked</h2>
    </div>
    <Columns>
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
      <Spotlight
        title="Is your question not listed?"
        content={<div>Ask us directly at <a href='mailto:info@driebroek.nl'>info@driebroek.nl</a>, we respond as soon as possible.</div>}/>
    </Columns>
  </div>
)

export default Faq
