import { BarsList } from '@/components/BarsList'
import { CheckSearchParams } from '@/components/CheckSearchParams'
import { FilterBar } from '@/components/FilterBar'
import { FilterStatus } from '@/components/FilterStatus'
import { GeolocateButton } from '@/components/GeolocateButton'
import { MapCanvas } from '@/components/MapCanvas'
import { ReloadBarsButton } from '@/components/ReloadBarsButton'
import { Suspense } from 'react'

export default function Bars() {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <CheckSearchParams />
      </Suspense>
      <MapCanvas />
      <FilterBar />
      <ReloadBarsButton />
      <GeolocateButton />
      <FilterStatus />
      <BarsList />
    </>
  )
}
