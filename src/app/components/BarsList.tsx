'use client'

import { useContext } from 'react'
import { BarsContext } from '../contexts/BarsContext'
import { BarsListItem } from './BarsListItem'

export const BarsList = () => {
  const { bars } = useContext(BarsContext)
  return (
    <ul>
      {bars.map(bar => (
        <BarsListItem key={bar.id} bar={bar} />
      ))}
    </ul>
  )
}
