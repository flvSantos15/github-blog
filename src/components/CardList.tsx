import React from 'react'

import { CardItem } from './CardItem'

export function CardList() {
  return (
    <div className="grid xl:grid-cols-2 gap-8 mt-12">
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
    </div>
  )
}
