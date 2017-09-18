import React from 'react'

import bag from 'media/bag_empty.svg'

import Img from 'components/Img'

const EmptyBag = () => (
  <div className={`Bag-empty`}>
    <Img src={bag} alt="empty bag" />
    <p>Your bag is empty</p>
  </div>
)

export default EmptyBag
