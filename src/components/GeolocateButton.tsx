'use client'

import { useContext, useState } from 'react'
import { GlobalStateContext } from '@/contexts/GlobalStateContext'
import { getBarsWithQueryObjectCheckOpen } from '@/actions/getBars'
import { CurrentLocation } from '@/models/Location'
import { StateActionType } from '@/reducers/GlobalStateReducer'
import { GlobalState } from '@/models/GlobalState'
import { LoadingOverlay } from './LoadingOverlay'
import { useMap } from '@vis.gl/react-maplibre'

export const GeolocateButton = () => {
  const [loading, setLoading] = useState(false)
  const {
    globalState: { currentQuery },
    dispatch
  } = useContext(GlobalStateContext)
  const { beerMap } = useMap()

  const getBarsAndDispatch = async (location: CurrentLocation) => {
    const newBars = await getBarsWithQueryObjectCheckOpen(currentQuery, location)
    const newState: GlobalState = {
      bars: newBars,
      barsFromApi: newBars,
      currentLocation: location,
      currentQuery: currentQuery
    }
    dispatch({
      type: StateActionType.UPDATED_STATE,
      payload: JSON.stringify(newState)
    })
  }

  const handleClick = async () => {
    setLoading(true)

    await getPosition()
      .then(position => {
        const currentPosition: CurrentLocation = {
          currentlat: position.coords.latitude,
          currentlong: position.coords.longitude
        }
        beerMap?.flyTo({
          center: [currentPosition.currentlong, currentPosition.currentlat],
          zoom: 13.5
        })
        getBarsAndDispatch(currentPosition)
      })
      .catch(error => {
        console.error(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const getPosition = () => {
    return new Promise<GeolocationPosition>((resolve, reject) => {
      window.navigator.geolocation.getCurrentPosition(resolve, reject)
    })
  }

  return (
    <>
      <button type="button" onClick={handleClick}>
        Geolocate me!
      </button>
      {loading && <LoadingOverlay message="Getting location..." />}
    </>
  )
}
