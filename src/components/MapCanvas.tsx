'use client'

import { GlobalStateContext } from '@/contexts/GlobalStateContext'
import { useContext, useState } from 'react'
import { Map, NavigationControl, useMap } from '@vis.gl/react-maplibre'
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
  const [hideClosedBars, setHideClosedBars] = useState(false)
  const [hideExpensiveBars, setHideExpensiveBars] = useState(false)
  const { beerMap } = useMap()

  const handleMarkerClick = (bar: Bar) => {
    setPopupBar(bar)
    beerMap?.flyTo({
      center: [bar.long, bar.lat],
      speed: 1,
      curve: 0,
      padding: { top: 150 }
    })
    setIsPopupOpen(true)
  }

  return (
    <>
      <Map
        id="beerMap"
        initialViewState={{
          bounds: singleBar
            ? undefined
            : [
                [18.022482, 59.300843],
                [18.110253, 59.324467]
              ],
          longitude: singleBar ? singleBar.long : undefined,
          latitude: singleBar ? singleBar.lat + 0.001 : undefined,
          zoom: singleBar ? 14 : undefined
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
              hideClosed={hideClosedBars}
            />
          ))
        )}
        {!singleBar && (
          <div className="absolute right-[50px] top-[10px] z-40 flex gap-[10px]">
            <button
              type="button"
              className="w-[23ch] rounded-md border-none bg-white p-2 font-medium tracking-wide shadow-[0_0_0_2px_rgba(0,0,0,.1)] md:text-base lg:text-lg"
              onClick={() => {
                setHideExpensiveBars(!hideExpensiveBars)
              }}
            >
              {hideExpensiveBars ? 'Visa bara billiga barer' : 'Visa alla prisklasser'}
            </button>
            <button
              type="button"
              className="w-[20ch] rounded-md border-none bg-white p-2 font-medium tracking-wide shadow-[0_0_0_2px_rgba(0,0,0,.1)] md:text-base lg:text-lg"
              onClick={() => {
                setHideClosedBars(!hideClosedBars)
              }}
            >
              {hideClosedBars ? 'Visa stängda barer' : 'Göm stängda barer'}
            </button>
          </div>
        )}
      </Map>
    </>
  )
}
