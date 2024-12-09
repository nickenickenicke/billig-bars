'use client'

import { GlobalStateContext } from '@/contexts/GlobalStateContext'
import { useContext } from 'react'

export const FilterStatus = () => {
  const {
    globalState: { currentQuery }
  } = useContext(GlobalStateContext)

  if (currentQuery.hour || currentQuery.hour === 0) {
    return <span className="block">{`Visar barer som är öppna klockan ${currentQuery.hour}`}</span>
  }

  return null
}
