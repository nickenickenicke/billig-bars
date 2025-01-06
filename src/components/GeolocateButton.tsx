'use client'

import { useContext, useState } from 'react'
import { GlobalStateContext } from '@/contexts/GlobalStateContext'
import { CurrentLocation } from '@/models/Location'
import { StateActionType } from '@/reducers/GlobalStateReducer'
import { LoadingOverlay } from './LoadingOverlay'
import { useMap } from '@vis.gl/react-maplibre'
import { Button } from './Button'
import { handleGeolocationPositionError } from '@/utils/errorTools'

interface GeolocateButtonProps {
  updateFilter: () => void
}

export const GeolocateButton = ({ updateFilter }: GeolocateButtonProps) => {
  const [loading, setLoading] = useState(false)
  const [showError, setShowError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const { dispatch } = useContext(GlobalStateContext)
  const { beerMap } = useMap()

  const handleClick = async () => {
    setLoading(true)

    await getPosition()
      .then(position => {
        const currentPosition: CurrentLocation = {
          currentlat: position.coords.latitude,
          currentlong: position.coords.longitude
        }

        beerMap?.flyTo({
          center: [currentPosition.currentlong, currentPosition.currentlat]
        })

        dispatch({
          type: StateActionType.UPDATED_LOCATION,
          payload: JSON.stringify(currentPosition)
        })

        if (showError) {
          clearError()
        }

        updateFilter()
      })
      .catch(error => {
        setShowError(true)
        setErrorMessage(handleGeolocationPositionError(error))
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

  const clearError = () => {
    setShowError(false)
    setErrorMessage('')
  }

  return (
    <>
      <Button type="button" onClick={handleClick} className="my-4 w-full" geolocate>
        Använd min plats
      </Button>
      {showError && <p className="-mt-2 text-center text-red-500">{errorMessage}</p>}
      {loading && <LoadingOverlay message="Hämtar din plats..." />}
    </>
  )
}
