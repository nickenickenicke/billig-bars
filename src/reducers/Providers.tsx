'use client'

import { useReducer } from 'react'
import { BarReducer, defaultBarState } from './BarReducer'
import { BarsContext } from '@/contexts/BarsContext'
import { initialMockData } from '@/lib/mockdata'

interface ProvidersProps {
  children: React.ReactNode
}

export const Providers = ({ children }: ProvidersProps) => {
  //TODO: Change to defaultBarState before release
  const [bars, dispatch] = useReducer(BarReducer, initialMockData)

  return (
    <>
      <BarsContext.Provider value={{ bars, dispatch }}>{children}</BarsContext.Provider>
    </>
  )
}
