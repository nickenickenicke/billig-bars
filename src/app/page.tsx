import { BarsList } from '@/components/BarsList'
import { GeolocateButton } from '@/components/GeolocateButton'
import { ReloadBarsButton } from '@/components/ReloadBarsButton'

export default function Home() {
  return (
    <>
      <ReloadBarsButton />
      <GeolocateButton />
      <BarsList />
    </>
  )
}
