'use client'

import { useContext } from 'react'
import { BarsContext } from '@/contexts/BarsContext'
import { BarsListItem } from './BarsListItem'
import { ReloadBarsButton } from './ReloadBarsButton'
import { GeolocateButton } from './GeolocateButton'
import { BarCard } from './BarCard'

export const BarsList = () => {
  const { bars } = useContext(BarsContext)
  return (
    <>
      <article className="flex flex-col gap-2">
        {bars.map(bar => (
          <BarCard key={bar.id + 'card'} bar={bar} />
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
