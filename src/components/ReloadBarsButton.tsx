'use client'

import { useContext } from 'react'
import { BarsContext } from '@/contexts/BarsContext'
import { getBars } from '@/actions/getBars'
import { BarActionType } from '@/reducers/BarReducer'

export const ReloadBarsButton = () => {
  const { dispatch } = useContext(BarsContext)

  const handleClick = async () => {
    const newBars = await getBars()
    dispatch({
      type: BarActionType.UPDATED,
      payload: JSON.stringify(newBars)
    })
  }

  return (
    <button type="button" onClick={handleClick}>
      Initiate bars
    </button>
  )
}
