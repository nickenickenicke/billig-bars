'use client'

import { getBarsWithQueryObjectCheckOpen } from '@/actions/getBars'
import { GlobalStateContext } from '@/contexts/GlobalStateContext'
import { GlobalState } from '@/models/GlobalState'
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
      const newState: GlobalState = {
        ...globalState,
        bars: newBars,
        barsFromApi: newBars,
        currentQuery: newQuery
      }
      dispatch({
        type: StateActionType.UPDATED_STATE,
        payload: JSON.stringify(newState)
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
