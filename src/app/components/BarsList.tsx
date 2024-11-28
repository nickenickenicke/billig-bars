'use client'

import { useContext } from 'react'
import { BarsContext } from '../contexts/BarsContext'
import { BarsListItem } from './BarsListItem'
import { ReloadBarsButton } from './ReloadBarsButton'

export const BarsList = () => {
  const { bars } = useContext(BarsContext)
  return (
    <>
      <ul>
        {bars.map(bar => (
          <BarsListItem key={bar.id} bar={bar} />
        ))}
      </ul>
      <ReloadBarsButton />
    </>
  )
}
