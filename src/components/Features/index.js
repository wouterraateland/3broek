import React from 'react'
import './styles.css'

import Feature from 'components/Feature'

const Features = () => (
  <div className="Features">
    <Feature
      left="50%" top="8%"
      title="One-size fits all"
      description="These pants stretch with your, to make you feel comfortable. Stretches from 60 - 140cm." />
    <Feature
      left="27%" top="30%"
      title="Deep pockets"
      description="We designed the two pockets to keep your stuff safe while you enjoy yourself." />
    <Feature
      left="78%" top="76%"
      title="Great comfort"
      description="We added elastic bands, so that the pants snug around your ankles." />
    <Feature
      left="80%" top="40%" side="left"
      title="High quality"
      description="Produced in the Netherlands using the quality cotton." />
  </div>
)

export default Features
