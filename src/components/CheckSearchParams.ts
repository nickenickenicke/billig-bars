'use client'

import { getBarsWithQueryObject } from '@/actions/getBars'
import { GlobalStateContext } from '@/contexts/GlobalStateContext'
import { StateActionType } from '@/reducers/GlobalStateReducer'
import { checkParams } from '@/utils/paramTools'
import { useSearchParams } from 'next/navigation'
import { useContext, useEffect } from 'react'

export const CheckSearchParams = () => {
  const { globalState, dispatch } = useContext(GlobalStateContext)
  const searchParams = useSearchParams()

  useEffect(() => {
    const initiate = async () => {
      if (searchParams.size === 0) {
        return
      }
      const newQuery = checkParams(searchParams)
      const newBars = await getBarsWithQueryObject(newQuery, globalState.currentLocation)
      dispatch({
        type: StateActionType.UPDATED_BARS,
        payload: JSON.stringify(newBars)
      })
    }

    initiate()
  }, [searchParams])

  if (searchParams.size === 0) {
    return null
  }

  return null
}
