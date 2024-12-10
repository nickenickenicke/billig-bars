'use client'

import { getBarsWithQueryObjectCheckOpen } from '@/actions/getBars'
import { GlobalStateContext } from '@/contexts/GlobalStateContext'
import { StateActionType } from '@/reducers/GlobalStateReducer'
import { checkParams } from '@/utils/paramTools'
import { useSearchParams } from 'next/navigation'
import { useContext, useEffect, useState } from 'react'

export const CheckSearchParams = () => {
  const { globalState, dispatch } = useContext(GlobalStateContext)
  const [initiated, setInitiated] = useState(false)
  const searchParams = useSearchParams()

  useEffect(() => {
    if (initiated) {
      return
    }

    const initiate = async () => {
      const newQuery = checkParams(searchParams)

      const newBars = await getBarsWithQueryObjectCheckOpen(newQuery, globalState.currentLocation)
      dispatch({
        type: StateActionType.UPDATED_BARS,
        payload: JSON.stringify(newBars)
      })
      setInitiated(true)
    }

    initiate()
  }, [searchParams, dispatch, globalState.currentLocation, initiated])

  if (searchParams.size === 0) {
    return null
  }

  return null
}
