import React from 'react'

import Feature from 'components/Feature'

import pants from 'media/pants.svg'
import './styles.css'

const Preview = () => (
  <nav className="Preview">
    <div className="wrapper small">
      <div className="row">
        <p className="Preview-soon">Binnenkort leverbaar</p>
        <h1 className="Preview-title">De meest comfortabele broek ooit</h1>
      </div>
      <div className="Preview-price">50,-</div>
      <div className="Preview-pants">
        <div className="row">
          <figure>
            <img src={pants} alt="Driebroek preview" />
            <Feature
              left="75%" top="10%"
              title="One size fits all*"
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
          </figure>
        </div>
        <div className="row">
          <p className="alignleft">*60 - 140cm</p>
        </div>
      </div>
    </div>
  </nav>
)

export default Preview
