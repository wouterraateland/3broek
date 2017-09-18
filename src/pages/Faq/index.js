import React from 'react'
import './styles.css'

import Columns from 'components/Columns'

const Faq = () => (
  <div className="Faq wrapper">
    <div className="center">
      <h1>Frequently asked questions</h1>
      <h2>We're glad you asked</h2>
    </div>
    <Columns>
      <div className="Faq-question">
        <h2>How does shipping work?</h2>
        <p>Well, let me tell you a little something...</p>
      </div>
      <div className="Faq-question">
        <h2>How does shipping work?</h2>
        <p>Well, let me tell you a little something...</p>
      </div>
      <div className="Faq-question">
        <h2>How does shipping work?</h2>
        <p>Well, let me tell you a little something...</p>
      </div>
      <div className="Faq-question">
        <h2>How does shipping work?</h2>
        <p>Well, let me tell you a little something...</p>
      </div>
    </Columns>
    <p>Is your question not listed here? Ask us directly at <a href="mailto:info@driebroek.nl">info@driebroek.nl</a>, we respond as soon as possible.</p>
  </div>
)

export default Faq
