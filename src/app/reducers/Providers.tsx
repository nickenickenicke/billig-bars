'use client'

import { useReducer } from 'react'
import { BarReducer, defaultBarState } from './BarReducer'
import { BarsContext } from '../contexts/BarsContext'

interface ProvidersProps {
  children: React.ReactNode
}

export const Providers = ({ children }: ProvidersProps) => {
  const [bars, dispatch] = useReducer(BarReducer, defaultBarState)

  return (
    <>
      <BarsContext.Provider value={{ bars, dispatch }}>{children}</BarsContext.Provider>
    </>
  )
}
