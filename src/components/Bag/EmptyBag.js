import React from 'react'

import bag from 'media/bag_empty.svg'

const EmptyBag = () => (
  <div className={`Bag-empty`}>
    <img src={bag} alt="empty bag" />
    <p>Your bag is empty</p>
  </div>
)

export default EmptyBag
