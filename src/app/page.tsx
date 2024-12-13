import { BarsList } from '@/components/BarsList'
import { GeolocateButton } from '@/components/GeolocateButton'

export default function Home() {
  return (
    <article className="px-2">
      <GeolocateButton />
      <BarsList />
    </article>
  )
}
