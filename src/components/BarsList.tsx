'use client'

import { useContext } from 'react'
import { GlobalStateContext } from '@/contexts/GlobalStateContext'
import { BarCard } from './BarCard'

export const BarsList = () => {
  const {
    globalState: { bars, currentLocation }
  } = useContext(GlobalStateContext)
  return (
    <>
      <article className="flex flex-col">
        {bars.map(bar => (
          <BarCard
            key={bar.id + 'card'}
            bar={bar}
            currentLocation={currentLocation}
            className="md:last-of-type:border-none"
          />
        ))}
      </article>
    </>
  )
}
