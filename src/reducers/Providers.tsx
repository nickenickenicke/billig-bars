'use client'

import { useReducer } from 'react'
import { GlobalStateReducer } from './GlobalStateReducer'
import { GlobalStateContext } from '@/contexts/GlobalStateContext'
import { initialMockData } from '@/lib/mockdata'

interface ProvidersProps {
  children: React.ReactNode
}

export const Providers = ({ children }: ProvidersProps) => {
  //TODO: Change to defaultBarState before release
  const [globalState, dispatch] = useReducer(GlobalStateReducer, initialMockData)

  return (
    <>
      <GlobalStateContext.Provider value={{ globalState, dispatch }}>
        {children}
      </GlobalStateContext.Provider>
    </>
  )
}
