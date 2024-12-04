'use client'

import { useContext } from 'react'
import { GlobalStateContext } from '@/contexts/GlobalStateContext'
import { BarsListItem } from './BarsListItem'
import { ReloadBarsButton } from './ReloadBarsButton'
import { GeolocateButton } from './GeolocateButton'
import { BarCard } from './BarCard'

export const BarsList = () => {
  const {
    globalState: { bars, currentLocation }
  } = useContext(GlobalStateContext)
  return (
    <>
      <article className="flex flex-col gap-2">
        {bars.map(bar => (
          <BarCard key={bar.id + 'card'} bar={bar} currentLocation={currentLocation} />
        ))}
      </article>
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
