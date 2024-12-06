import { BarsList } from '@/components/BarsList'
import { CheckSearchParams } from '@/components/CheckSearchParams'
import { FilterBar } from '@/components/FilterBar'
import { FilterStatus } from '@/components/FilterStatus'
import { GeolocateButton } from '@/components/GeolocateButton'
import { ReloadBarsButton } from '@/components/ReloadBarsButton'

interface BarsProps {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function Bars({ searchParams }: BarsProps) {
  return (
    <>
      {Object.keys(searchParams).length > 0 ? (
        <CheckSearchParams searchParams={searchParams} />
      ) : null}
      <FilterBar />
      <ReloadBarsButton />
      <GeolocateButton />
      <FilterStatus />
      <BarsList />
    </>
  )
}
