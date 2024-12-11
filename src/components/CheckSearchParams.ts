'use client'

import { getBarsWithQueryObjectCheckOpen } from '@/actions/getBars'
import { GlobalStateContext } from '@/contexts/GlobalStateContext'
import { GlobalState } from '@/models/GlobalState'
import { StateActionType } from '@/reducers/GlobalStateReducer'
import { checkParams } from '@/utils/paramTools'
import { useSearchParams } from 'next/navigation'
import { useContext, useEffect, useMemo, useState } from 'react'

export const CheckSearchParams = () => {
  const { globalState, dispatch } = useContext(GlobalStateContext)
  const [initiated, setInitiated] = useState(false)
  const searchParams = useSearchParams()

  useEffect(() => {
    //TODO: OK THIS IS WHERE WE MIGHT USE A MEMO?
    console.log('useeffect')
    console.log(searchParams)

    if (initiated) {
      return
    }

    const initiate = async () => {
      const newQuery = checkParams(searchParams)

      const newBars = await getBarsWithQueryObjectCheckOpen(newQuery, globalState.currentLocation)

      console.log(newQuery)
      console.log(newBars)

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

  return null
}
