import { BarsList } from '@/components/BarsList'
import { FilterBar } from '@/components/FilterBar'
import { FilterStatus } from '@/components/FilterStatus'
import { GeolocateButton } from '@/components/GeolocateButton'
import { ReloadBarsButton } from '@/components/ReloadBarsButton'

export default function Bars() {
  return (
    <>
      <FilterBar />
      <ReloadBarsButton />
      <GeolocateButton />
      <FilterStatus />
      <BarsList />
    </>
  )
}
