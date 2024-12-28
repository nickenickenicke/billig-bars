'use client'

import { useContext, useState } from 'react'
import { GlobalStateContext } from '@/contexts/GlobalStateContext'
import { getBarsWithQueryObject } from '@/actions/getBars'
import { CurrentLocation } from '@/models/Location'
import { StateActionType } from '@/reducers/GlobalStateReducer'
import { GlobalState } from '@/models/GlobalState'
import { LoadingOverlay } from './LoadingOverlay'
import { useMap } from '@vis.gl/react-maplibre'
import { Button } from './Button'

export const GeolocateButton = () => {
  const [loading, setLoading] = useState(false)
  const {
    globalState: { currentQuery },
    dispatch
  } = useContext(GlobalStateContext)
  const { beerMap } = useMap()

  const getBarsAndDispatch = async (location: CurrentLocation) => {
    const newBars = await getBarsWithQueryObject(currentQuery, location)
    const newState: GlobalState = {
      bars: newBars,
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
      <Button type="button" onClick={handleClick} className="my-4 w-full" geolocate>
        Använd min plats
      </Button>
      {loading && <LoadingOverlay message="Hämtar din plats..." />}
    </>
  )
}
