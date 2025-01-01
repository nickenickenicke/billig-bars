import { Bar, defaultBar } from '@/models/Bar'
import { defaultCurrentQuery, GlobalState } from '@/models/GlobalState'
import { CurrentLocation } from '@/models/Location'

export enum StateActionType {
  UPDATED_STATE,
  UPDATED_LOCATION
}

export type StateAction = {
  type: StateActionType
  payload: string
}

export const defaultBarsState: Bar[] = [defaultBar]

export const defaultCurrentLocation: CurrentLocation = {
  currentlat: 0,
  currentlong: 0
}

export const defaultGlobalState: GlobalState = {
  bars: defaultBarsState,
  currentLocation: defaultCurrentLocation,
  currentQuery: defaultCurrentQuery
}

export const GlobalStateReducer = (prevState: GlobalState, action: StateAction): GlobalState => {
  switch (action.type) {
    case StateActionType.UPDATED_STATE: {
      const updatedState: GlobalState = JSON.parse(action.payload) || defaultGlobalState

      if (
        updatedState.bars.length != 0 &&
        updatedState.currentLocation.currentlat != 0 &&
        updatedState.currentLocation.currentlong != 0 &&
        updatedState.currentQuery
      ) {
        return updatedState
      }
      if (updatedState.bars.length != 0 && updatedState.currentQuery) {
        return updatedState
      }
      return prevState
    }

    case StateActionType.UPDATED_LOCATION: {
      const updatedLocation: CurrentLocation = JSON.parse(action.payload) || defaultCurrentLocation

      if (updatedLocation.currentlat != 0 && updatedLocation.currentlong != 0) {
        return { ...prevState, currentLocation: updatedLocation }
      }
      return prevState
    }

    default:
      return prevState
  }
}
