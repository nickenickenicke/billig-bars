'use client'

import { useContext } from 'react'
import { GlobalStateContext } from '@/contexts/GlobalStateContext'
import { getBars } from '@/actions/getBars'
import { StateActionType } from '@/reducers/GlobalStateReducer'

export const ReloadBarsButton = () => {
  const { dispatch } = useContext(GlobalStateContext)

  const handleClick = async () => {
    const newBars = await getBars()
    dispatch({
      type: StateActionType.UPDATED_BARS,
      payload: JSON.stringify(newBars)
    })
  }

  return (
    <button type="button" onClick={handleClick}>
      Initiate bars
    </button>
  )
}
