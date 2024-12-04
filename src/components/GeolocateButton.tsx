'use client'

import { useContext } from 'react'
import { GlobalStateContext } from '@/contexts/GlobalStateContext'
import { getBarsByLocation } from '@/actions/getBars'
import { CurrentLocation } from '@/models/Location'
import { StateActionType } from '@/reducers/GlobalStateReducer'
import { GlobalState } from '@/models/GlobalState'

export const GeolocateButton = () => {
  const { dispatch } = useContext(GlobalStateContext)

  const getBarsAndDispatch = async (location: CurrentLocation) => {
    const newBars = await getBarsByLocation(location)
    const newState: GlobalState = {
      bars: newBars,
      currentLocation: location
    }
    dispatch({
      type: StateActionType.UPDATED_STATE,
      payload: JSON.stringify(newState)
    })
  }

  const handleClick = () => {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        const currentPosition: CurrentLocation = {
          currentlat: position.coords.latitude,
          currentlong: position.coords.longitude
        }
        getBarsAndDispatch(currentPosition)
      },
      error => {
        console.error(error)
      }
    )
  }

  return (
    <button type="button" onClick={handleClick}>
      Geolocate me!
    </button>
  )
}
