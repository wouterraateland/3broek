import React from 'react'
import './styles.css'

import Feature from 'components/Feature'

const Features = () => (
  <div className="Features">
    <Feature
      left="75%" top="10%"
      title="One size fits all* 60 - 140cm"
      description="Bovenkant rekt mee met het lichaam" />
    <Feature
      left="80%" top="35%"
      title="Veilige zakken"
      description="Spullen blijven zitten in de 2 diepe zakken" />
    <Feature
      left="87%" top="97%"
      title="Comfort"
      description="Brede elastieke banden voor fijne pasvorm bij de enkels" />
    <Feature
      left="20%" top="55%" side="left"
      title="Hoge kwaliteit"
      description="Gemaakt in Nederland van sterk en zacht katoen" />
  </div>
)

export default Features
