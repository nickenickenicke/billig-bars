'use client'

import { GlobalStateContext } from '@/contexts/GlobalStateContext'
import { Bar } from '@/models/Bar'
import { GlobalState } from '@/models/GlobalState'
import { StateActionType } from '@/reducers/GlobalStateReducer'
import {
  adjustMinutesToHalfHour,
  getCurrentHour,
  getCurrentMinute,
  getCurrentWeekday
} from '@/utils/timeTools'
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
      currentQuery: {
        min: adjustMinutesToHalfHour(getCurrentMinute()),
        hour: getCurrentHour(),
        day: getCurrentWeekday(),
        sortOrder: 'asc',
        sortBy: null,
        mixOpenAndClosed: false
      }
    }

    dispatch({
      type: StateActionType.UPDATED_STATE,
      payload: JSON.stringify(newState)
    })
  }, [bars, dispatch, globalState])
  return null
}
