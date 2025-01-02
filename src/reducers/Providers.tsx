'use client'

import { useReducer } from 'react'
import { defaultGlobalState, GlobalStateReducer } from './GlobalStateReducer'
import { GlobalStateContext } from '@/contexts/GlobalStateContext'

interface ProvidersProps {
  children: React.ReactNode
}

export const Providers = ({ children }: ProvidersProps) => {
  const [globalState, dispatch] = useReducer(GlobalStateReducer, defaultGlobalState)

  return (
    <>
      <GlobalStateContext.Provider value={{ globalState, dispatch }}>
        {children}
      </GlobalStateContext.Provider>
    </>
  )
}
