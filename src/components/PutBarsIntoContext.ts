'use client'

import { GlobalStateContext } from '@/contexts/GlobalStateContext'
import { Bar } from '@/models/Bar'
import { GlobalState } from '@/models/GlobalState'
import { StateActionType } from '@/reducers/GlobalStateReducer'
import { getCurrentHour, getCurrentMinute, getTodaysWeekday } from '@/utils/timeTools'
import { useContext, useEffect } from 'react'

interface PutBarsIntoContext {
  bars: Bar[]
}
export const PutBarsIntoContext = ({ bars }: PutBarsIntoContext) => {
  const { globalState, dispatch } = useContext(GlobalStateContext)

  useEffect(() => {
    if (globalState.currentQuery.hour === getCurrentHour()) {
      return
    }

    const newState: GlobalState = {
      ...globalState,
      bars: bars,
      barsFromApi: bars,
      currentQuery: {
        min: getCurrentMinute(),
        hour: getCurrentHour(),
        day: getTodaysWeekday(),
        sort: 'asc'
      }
    }

    dispatch({
      type: StateActionType.UPDATED_STATE,
      payload: JSON.stringify(newState)
    })
  }, [bars, dispatch, globalState])
  return null
}
