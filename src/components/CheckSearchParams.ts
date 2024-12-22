'use client'

import { getBarsWithQueryObjectCheckOpen } from '@/actions/getBars'
import { GlobalStateContext } from '@/contexts/GlobalStateContext'
import { GlobalState } from '@/models/GlobalState'
import { StateActionType } from '@/reducers/GlobalStateReducer'
import { checkParams } from '@/utils/paramTools'
import { useSearchParams } from 'next/navigation'
import { useContext, useEffect, useRef } from 'react'

export const CheckSearchParams = () => {
  const { globalState, dispatch } = useContext(GlobalStateContext)
  const prevSeachParamsRef = useRef<string | null>(null)
  const searchParams = useSearchParams()

  useEffect(() => {
    const currentSearchParams = searchParams.toString()
    if (prevSeachParamsRef.current === currentSearchParams) {
      return
    }
    prevSeachParamsRef.current = currentSearchParams

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
    }
    initiate()
  }, [searchParams, globalState, dispatch])

  return null
}
