import { Bar } from '@/models/Bar'
import { defaultCurrentQuery, GlobalState } from '@/models/GlobalState'
import { CurrentLocation } from '@/models/Location'
import { checkIsOpen, getTodaysWeekday } from '@/utils/timeTools'

export enum StateActionType {
  UPDATED_BARS,
  UPDATED_LOCATION,
  UPDATED_STATE,
  FILTERED_BY_HOUR
}

export type StateAction = {
  type: StateActionType
  payload: string
}

export const defaultBarState: Bar[] = [
  {
    name: 'Testbaren',
    address: 'Testgatan 104',
    postal_code: 12345,
    city: 'Teststaden',
    beer_volume: 40,
    beer_price: 45,
    id: 'test',
    long: 18.0771446228027,
    lat: 59.3076553344727,
    opening_hours: []
  }
]

export const defaultCurrentLocation: CurrentLocation = {
  currentlat: 0,
  currentlong: 0
}

export const defaultGlobalState: GlobalState = {
  bars: defaultBarState,
  barsFromApi: defaultBarState,
  currentLocation: defaultCurrentLocation,
  currentQuery: defaultCurrentQuery
}

export const GlobalStateReducer = (prevState: GlobalState, action: StateAction): GlobalState => {
  switch (action.type) {
    case StateActionType.UPDATED_BARS: {
      const updatedBars: Bar[] = JSON.parse(action.payload) || []
      if (updatedBars.length === 0) return prevState
      return {
        ...prevState,
        bars: updatedBars,
        barsFromApi: updatedBars,
        currentQuery: { ...prevState.currentQuery, hour: null }
      }
    }
    case StateActionType.UPDATED_LOCATION: {
      const updatedLocation: CurrentLocation = JSON.parse(action.payload) || defaultCurrentLocation
      if (updatedLocation.currentlat === 0 && updatedLocation.currentlong === 0) return prevState
      return { ...prevState, currentLocation: updatedLocation }
    }
    case StateActionType.UPDATED_STATE: {
      const updatedState: GlobalState = JSON.parse(action.payload) || defaultGlobalState
      if (
        updatedState.bars.length != 0 &&
        updatedState.barsFromApi.length != 0 &&
        updatedState.currentLocation.currentlat != 0 &&
        updatedState.currentLocation.currentlong != 0
      )
        return { ...updatedState, currentQuery: defaultCurrentQuery }
      if (updatedState.bars.length != 0)
        return {
          ...prevState,
          bars: updatedState.bars,
          barsFromApi: updatedState.bars,
          currentQuery: defaultCurrentQuery
        }
      if (
        updatedState.currentLocation.currentlat != 0 &&
        updatedState.currentLocation.currentlong != 0
      )
        return {
          ...prevState,
          currentLocation: updatedState.currentLocation,
          currentQuery: defaultCurrentQuery
        }
      return prevState
    }
    case StateActionType.FILTERED_BY_HOUR: {
      let hour = parseInt(action.payload) || 99
      if (hour === 99 && action.payload === '0') hour = 0
      if (hour === 999)
        return {
          ...prevState,
          bars: prevState.barsFromApi,
          currentQuery: defaultCurrentQuery
        }
      const filteredBars = filterByHour(prevState.barsFromApi, hour)
      return {
        ...prevState,
        bars: filteredBars.length > 0 ? filteredBars : prevState.bars,
        currentQuery: { ...prevState.currentQuery, hour: null }
      }
    }

    default:
      return prevState
  }
}

const filterByHour = (bars: Bar[], hour: number): Bar[] => {
  if (hour === 99) return bars
  const today = getTodaysWeekday()
  return bars.filter(bar => {
    return checkIsOpen(bar.opening_hours, hour, today)
  })
}
