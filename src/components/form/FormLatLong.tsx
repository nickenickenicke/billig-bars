'use client'

import { FormInput } from '@/components/form/FormInput'
import { useState } from 'react'

export const FormLatLong = () => {
  const [latLong, setLatLong] = useState({ latitude: '59.000', longitude: '18.000' })
  const [showErrorMessage, setShowErrorMessage] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleLatLongChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setLatLong(prev => ({ ...prev, [name]: value }))
  }

  const handleGeolocate = () => {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        setLatLong({
          latitude: position.coords.latitude.toString(),
          longitude: position.coords.longitude.toString()
        })
        setShowErrorMessage(false)
      },
      error => {
        if (error.code === error.PERMISSION_DENIED) {
          setErrorMessage('You denied the request for Geolocation.')
        }
        if (error.code === error.POSITION_UNAVAILABLE) {
          setErrorMessage('Your location information is unavailable.')
        }
        if (error.code === error.TIMEOUT) {
          setErrorMessage('The request to get your location timed out.')
        }
        setShowErrorMessage(true)
      }
    )
  }

  return (
    <>
      <button type="button" onClick={handleGeolocate}>
        Get current location
      </button>

      {showErrorMessage && <p className="text-red-500">{errorMessage}</p>}

      <FormInput
        label={'Longitude'}
        name={'longitude'}
        text
        numericInput
        value={latLong.longitude}
        required
        onChange={handleLatLongChange}
      />

      <FormInput
        label={'Latitude'}
        name={'latitude'}
        text
        numericInput
        value={latLong.latitude}
        required
        onChange={handleLatLongChange}
      />
    </>
  )
}
