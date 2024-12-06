'use client'

import { getBarsWithQueryObject } from '@/actions/getBars'
import { GlobalStateContext } from '@/contexts/GlobalStateContext'
import { CurrentQuery, GlobalState } from '@/models/GlobalState'
import { StateActionType } from '@/reducers/GlobalStateReducer'
import { useContext } from 'react'

interface CheckSearchParamsProps {
  searchParams: { [key: string]: string | string[] | undefined }
}

export const CheckSearchParams = ({ searchParams }: CheckSearchParamsProps) => {
  const { globalState, dispatch } = useContext(GlobalStateContext)

  console.log('bloop')

  const getBarsAgain = async () => {
    const query: CurrentQuery = {
      hour: null,
      sort: searchParams.sort === 'asc' ? 'asc' : 'desc'
    }
    const newBars = await getBarsWithQueryObject(query, globalState.currentLocation)
    const newState: GlobalState = {
      bars: newBars,
      barsFromApi: newBars,
      currentLocation: globalState.currentLocation,
      currentQuery: query
    }

    dispatch({
      type: StateActionType.UPDATED_STATE,
      payload: JSON.stringify(newState)
    })
  }

  if (searchParams.sort && searchParams.sort !== globalState.currentQuery.sort) {
    //   getBarsAgain()
    console.log('sort sort sort')
  }

  return null
}
