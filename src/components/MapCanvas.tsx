'use client'

import { GlobalStateContext } from '@/contexts/GlobalStateContext'
import { useContext, useState } from 'react'
import { Map, NavigationControl } from '@vis.gl/react-maplibre'
import 'maplibre-gl/dist/maplibre-gl.css'
import { MapPopup } from './MapPopup'
import { MapBarMarker } from './MapBarMarker'
import { MapCurrentLocationMarker } from './MapCurrentLocationMarker'
import { Bar, defaultBar } from '@/models/Bar'
import '@/app/styles/maplibre.css'

interface MapCanvasProps {
  singleBar?: Bar
}

export const MapCanvas = ({ singleBar }: MapCanvasProps) => {
  const {
    globalState: { bars, currentLocation }
  } = useContext(GlobalStateContext)
  const [popupBar, setPopupBar] = useState<Bar>(defaultBar)
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const handleMarkerClick = (bar: Bar) => {
    setPopupBar(bar)
    setIsPopupOpen(true)
  }

  return (
    <>
      <Map
        id="beerMap"
        initialViewState={{
          longitude: singleBar ? singleBar.long : currentLocation.currentlong || 18.069215,
          latitude: singleBar ? singleBar.lat + 0.001 : currentLocation.currentlat || 59.314654,
          zoom: singleBar ? 14 : 12
        }}
        style={{ width: '100%', height: '100%' }}
        mapStyle="https://tiles.openfreemap.org/styles/bright"
      >
        <NavigationControl showCompass={false} />
        {isPopupOpen && (
          <MapPopup
            bar={popupBar}
            currentLocation={currentLocation}
            handleClosePopup={() => {
              setIsPopupOpen(false)
            }}
          />
        )}
        {singleBar && (
          <MapPopup
            bar={singleBar}
            currentLocation={currentLocation}
            handleClosePopup={() => {}}
            singleBar
          />
        )}
        {currentLocation.currentlat > 0 && currentLocation.currentlong > 0 ? (
          <MapCurrentLocationMarker currentLocation={currentLocation} />
        ) : null}
        {singleBar ? (
          <MapBarMarker
            key={singleBar.id}
            bar={singleBar}
            handleBarMarkerClick={(long, lat) => null}
          />
        ) : (
          bars.map(bar => (
            <MapBarMarker
              key={bar.id}
              bar={bar}
              handleBarMarkerClick={(long, lat) => handleMarkerClick(bar)}
            />
          ))
        )}
      </Map>
    </>
  )
}
