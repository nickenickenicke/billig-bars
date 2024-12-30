'use client'

import { getBarsWithQueryObject } from '@/actions/getBars'
import { GlobalStateContext } from '@/contexts/GlobalStateContext'
import { CurrentQuery, GlobalState } from '@/models/GlobalState'
import { StateActionType } from '@/reducers/GlobalStateReducer'
import { checkParams } from '@/utils/paramTools'
import { useSearchParams } from 'next/navigation'
import { useContext, useEffect, useRef } from 'react'

const checkIfSameAsOldQuery = (newQuery: CurrentQuery, oldQuery: CurrentQuery) => {
  if (
    newQuery.min === oldQuery.min &&
    newQuery.hour === oldQuery.hour &&
    newQuery.day === oldQuery.day &&
    newQuery.sortOrder === oldQuery.sortOrder
  ) {
    return true
  }
  return false
}

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

      if (checkIfSameAsOldQuery(newQuery, globalState.currentQuery)) {
        return
      }

      const newBars = await getBarsWithQueryObject(newQuery, globalState.currentLocation)

      const newState: GlobalState = {
        ...globalState,
        bars: newBars,
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
