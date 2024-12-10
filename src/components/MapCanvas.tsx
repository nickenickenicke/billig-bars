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
        {currentLocation.currentlat > 0 && currentLocation.currentlong > 0 ? (
          <Marker
            key={'currentlocation'}
            longitude={currentLocation.currentlong}
            latitude={currentLocation.currentlat}
            anchor="bottom"
          >
            <span className="block aspect-square w-5 rounded-full bg-blue-500"></span>
          </Marker>
        ) : null}
        {bars.map(bar => (
          <Marker key={bar.id} longitude={bar.long} latitude={bar.lat} anchor="bottom">
            <span className="aspect-square rounded-full bg-green-price p-2">{bar.beer_price}</span>
          </Marker>
        ))}
      </Map>
    </>
  )
}
