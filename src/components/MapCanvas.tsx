'use client'

import { GlobalStateContext } from '@/contexts/GlobalStateContext'
import { useContext } from 'react'
import { Map, Marker } from '@vis.gl/react-maplibre'
import 'maplibre-gl/dist/maplibre-gl.css'

export const MapCanvas = () => {
  const {
    globalState: { bars, currentLocation }
  } = useContext(GlobalStateContext)

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
        {bars.map(bar => (
          <Marker key={bar.id} longitude={bar.long} latitude={bar.lat} anchor="bottom">
            <span className="rounded-full bg-green-price p-2">{bar.beer_price}</span>
          </Marker>
        ))}
      </Map>
    </>
  )
}
