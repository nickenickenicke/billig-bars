'use client'

import { useContext } from 'react'
import { BarsContext } from '@/contexts/BarsContext'
import { BarsListItem } from './BarsListItem'
import { ReloadBarsButton } from './ReloadBarsButton'
import { GeolocateButton } from './GeolocateButton'

export const BarsList = () => {
  const { bars } = useContext(BarsContext)
  return (
    <>
      <ul className="flex flex-col gap-4">
        {bars.map(bar => (
          <BarsListItem key={bar.id} bar={bar} />
        ))}
      </ul>
      <ReloadBarsButton />
      <GeolocateButton />
    </>
  )
}
