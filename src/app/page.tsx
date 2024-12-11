import { BarsList } from '@/components/BarsList'
import { GeolocateButton } from '@/components/GeolocateButton'

export default function Home() {
  return (
    <>
      <GeolocateButton />
      <BarsList />
    </>
  )
}
