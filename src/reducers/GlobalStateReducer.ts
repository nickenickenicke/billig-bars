import { Bar } from '@/models/Bar'
import { defaultCurrentQuery, GlobalState } from '@/models/GlobalState'
import { CurrentLocation } from '@/models/Location'

export enum StateActionType {
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
    beer_ppv: 1.125,
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
    case StateActionType.UPDATED_STATE: {
      const updatedState: GlobalState = JSON.parse(action.payload) || defaultGlobalState
      if (
        updatedState.bars.length != 0 &&
        updatedState.barsFromApi.length != 0 &&
        updatedState.currentLocation.currentlat != 0 &&
        updatedState.currentLocation.currentlong != 0 &&
        updatedState.currentQuery
      ) {
        return updatedState
      }
      return prevState
    }

    default:
      return prevState
  }
}
