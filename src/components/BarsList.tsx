'use client'

import { useContext } from 'react'
import { GlobalStateContext } from '@/contexts/GlobalStateContext'
import { BarCard } from './BarCard'

export const BarsList = () => {
  //TODO: Implement bar or barfromapi
  const {
    globalState: { bars, currentLocation }
  } = useContext(GlobalStateContext)
  return (
    <>
      <article className="flex flex-col">
        {bars.map(bar => (
          <BarCard key={bar.id + 'card'} bar={bar} currentLocation={currentLocation} />
        ))}
      </article>
    </>
  )
}
