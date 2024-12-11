'use client'

import { MapProvider } from '@vis.gl/react-maplibre'
import { BarsList } from './BarsList'
import { FilterBar } from './FilterBar'
import { FilterStatus } from './FilterStatus'
import { GeolocateButton } from './GeolocateButton'
import { MapCanvas } from './MapCanvas'

export const BarsView = () => {
  return (
    <MapProvider>
      <MapCanvas />
      <FilterBar />
      <GeolocateButton />
      <FilterStatus />
      <BarsList />
    </MapProvider>
  )
}
