import React from 'react'
import Columns from 'react-columns'
import './styles.css'

const Faq = () => (
  <div className="Faq wrapper">
    <div className="center">
      <h1>Frequently asked questions</h1>
      <h2>We're glad you asked</h2>
    </div>
    <Columns
      className="Faq-columns Columns"
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
