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
      <section className="grid grid-cols-1 grid-rows-[auto_auto] md:grid-cols-[minmax(40vw,_400px)_1fr] md:grid-rows-[auto] md:items-start">
        <div className="aspect-[18/15] md:sticky md:left-0 md:top-navbar md:col-[2/3] md:row-[1/2] md:aspect-[unset] md:h-[calc(100vh-var(--navbar-height))] md:w-full">
          <MapCanvas />
        </div>
        <article className="px-2 md:col-[1/2] md:row-[1/2] md:px-4 lg:px-8">
          <GeolocateButton />
          <FilterBar />
          <FilterStatus />
          <BarsList />
        </article>
      </section>
    </MapProvider>
  )
}
