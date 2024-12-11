'use client'

import { GlobalStateContext } from '@/contexts/GlobalStateContext'
import { useContext, useState } from 'react'
import { Map } from '@vis.gl/react-maplibre'
import 'maplibre-gl/dist/maplibre-gl.css'
import { MapPopup } from './MapPopup'
import { MapBarMarker } from './MapBarMarker'
import { MapCurrentLocationMarker } from './MapCurrentLocationMarker'
import { MapLocation } from '@/models/Location'

export const MapCanvas = () => {
  const {
    globalState: { bars, currentLocation }
  } = useContext(GlobalStateContext)
  const [popupLocation, setPopupLocation] = useState<MapLocation>({
    long: 0,
    lat: 0
  })

  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const handleMarkerClick = (long: number, lat: number) => {
    setPopupLocation({
      long,
      lat
    })
    setIsPopupOpen(true)
  }

  return (
    <>
      <Map
        id="beerMap"
        initialViewState={{
          longitude: currentLocation.currentlong || 18.069215,
          latitude: currentLocation.currentlat || 59.314654,
          zoom: 12
        }}
        style={{ width: '100%', aspectRatio: '1/1' }}
        mapStyle="https://tiles.openfreemap.org/styles/bright"
      >
        {isPopupOpen && (
          <MapPopup
            popupLocation={popupLocation}
            handleClosePopup={() => {
              setIsPopupOpen(false)
            }}
          />
        )}
        {currentLocation.currentlat > 0 && currentLocation.currentlong > 0 ? (
          <MapCurrentLocationMarker currentLocation={currentLocation} />
        ) : null}
        {bars.map(bar => (
          <MapBarMarker
            key={bar.id}
            bar={bar}
            handleBarMarkerClick={(long, lat) => handleMarkerClick(long, lat)}
          />
        ))}
      </Map>
    </>
  )
}
