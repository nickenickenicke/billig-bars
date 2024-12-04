import { Bar } from '@/models/Bar'
import { GlobalState } from '@/models/GlobalState'
import { CurrentLocation } from '@/models/Location'

export enum StateActionType {
  UPDATED_BARS,
  UPDATED_LOCATION,
  UPDATED_STATE
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

export const defaultLocationState: CurrentLocation = {
  currentlat: 0,
  currentlong: 0
}

export const defaultGlobalState: GlobalState = {
  bars: defaultBarState,
  currentLocation: defaultLocationState
}

export const GlobalStateReducer = (prevState: GlobalState, action: StateAction): GlobalState => {
  switch (action.type) {
    case StateActionType.UPDATED_BARS: {
      const updatedBars: Bar[] = JSON.parse(action.payload) || []
      if (updatedBars.length === 0) return prevState
      return { ...prevState, bars: updatedBars }
    }
    case StateActionType.UPDATED_LOCATION: {
      const updatedLocation: CurrentLocation = JSON.parse(action.payload) || defaultLocationState
      if (updatedLocation.currentlat === 0 && updatedLocation.currentlong === 0) return prevState
      return { ...prevState, currentLocation: updatedLocation }
    }
    case StateActionType.UPDATED_STATE: {
      const updatedState: GlobalState = JSON.parse(action.payload) || defaultGlobalState
      if (
        updatedState.bars.length != 0 &&
        updatedState.currentLocation.currentlat != 0 &&
        updatedState.currentLocation.currentlong != 0
      )
        return updatedState
      if (updatedState.bars.length != 0) return { ...prevState, bars: updatedState.bars }
      if (
        updatedState.currentLocation.currentlat != 0 &&
        updatedState.currentLocation.currentlong != 0
      )
        return { ...prevState, currentLocation: updatedState.currentLocation }
      return prevState
    }
    default:
      return prevState
  }
}
